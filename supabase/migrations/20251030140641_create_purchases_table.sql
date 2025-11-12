/*
  # Create purchases table for Stripe payments

  1. New Tables
    - `purchases`
      - `id` (uuid, primary key) - Unique identifier for each purchase
      - `email` (text, not null) - Customer email address
      - `product_id` (text, not null) - ID of the purchased product (ebook)
      - `stripe_session_id` (text, unique, not null) - Stripe checkout session ID
      - `amount` (numeric, not null) - Purchase amount in euros
      - `currency` (text, not null) - Currency code (default: 'eur')
      - `status` (text, not null) - Payment status (default: 'pending')
      - `created_at` (timestamptz) - Purchase timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `purchases` table
    - Add policy for users to view their own purchases by email
    - Service role has full access for webhook processing

  3. Important Notes
    - This table tracks all ebook purchases
    - Populated automatically by Stripe webhook
    - Users can query their purchases using their email
    - stripe_session_id is unique to prevent duplicate entries
*/

CREATE TABLE IF NOT EXISTS purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  product_id text NOT NULL,
  stripe_session_id text UNIQUE NOT NULL,
  amount numeric NOT NULL,
  currency text NOT NULL DEFAULT 'eur',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own purchases
CREATE POLICY "Users can view own purchases"
  ON purchases
  FOR SELECT
  USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_purchases_email ON purchases(email);
CREATE INDEX IF NOT EXISTS idx_purchases_stripe_session ON purchases(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_purchases_product ON purchases(product_id);

-- Add updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if exists and create new one
DROP TRIGGER IF EXISTS update_purchases_updated_at ON purchases;
CREATE TRIGGER update_purchases_updated_at
  BEFORE UPDATE ON purchases
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();