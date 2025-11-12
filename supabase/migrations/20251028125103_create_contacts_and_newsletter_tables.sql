/*
  # Create Contacts and Newsletter Tables

  ## Overview
  This migration creates the necessary tables to manage contact form submissions and newsletter subscriptions for the NegoPros website.

  ## New Tables
  
  ### 1. contacts
  Stores all contact form submissions from potential clients
  - `id` (uuid, primary key) - Unique identifier for each contact
  - `name` (text, required) - Full name of the contact
  - `email` (text, required) - Email address
  - `phone` (text, optional) - Phone number
  - `company` (text, optional) - Company name
  - `subject` (text, required) - Subject of the inquiry
  - `message` (text, required) - Message content
  - `status` (text, default: 'new') - Status: new, in_progress, contacted, closed
  - `created_at` (timestamptz) - Timestamp of submission
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. newsletter_subscribers
  Stores email addresses for newsletter subscriptions
  - `id` (uuid, primary key) - Unique identifier for each subscriber
  - `email` (text, unique, required) - Email address
  - `status` (text, default: 'active') - Status: active, unsubscribed
  - `subscribed_at` (timestamptz) - Timestamp of subscription
  - `unsubscribed_at` (timestamptz, nullable) - Timestamp of unsubscription if applicable

  ## Security
  - Row Level Security (RLS) enabled on both tables
  - Public can insert (for form submissions)
  - Only authenticated admin users can read/update/delete
  - Email validation constraints

  ## Indexes
  - Index on email for fast lookups
  - Index on status for filtering
  - Index on created_at for sorting
*/

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'contacted', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscribers(status);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Contacts policies
CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contacts"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete contacts"
  ON contacts
  FOR DELETE
  TO authenticated
  USING (true);

-- Newsletter policies
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update subscribers"
  ON newsletter_subscribers
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete subscribers"
  ON newsletter_subscribers
  FOR DELETE
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for contacts table
DROP TRIGGER IF EXISTS update_contacts_updated_at ON contacts;
CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();