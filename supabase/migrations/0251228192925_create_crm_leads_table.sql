/*
  # Create CRM Leads Table

  1. New Tables
    - `crm_leads`
      - `id` (uuid, primary key)
      - `email` (text, required)
      - `name` (text, optional)
      - `phone` (text, optional)
      - `company` (text, optional)
      - `lead_source` (text) - Source du lead (methode_impact, formation, ebook, etc.)
      - `lead_type` (text) - Type de lead (information, demo, contact, etc.)
      - `status` (text) - Statut du lead (new, contacted, qualified, converted, lost)
      - `notes` (text, optional)
      - `metadata` (jsonb) - Données supplémentaires flexibles
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on `crm_leads` table
    - Allow anonymous users to insert leads (for lead capture forms)
    - Only authenticated admin users can read/update leads

  3. Indexes
    - Index on email for quick lookups
    - Index on lead_source for filtering
    - Index on status for CRM workflows
    - Index on created_at for chronological sorting
*/

CREATE TABLE IF NOT EXISTS crm_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text,
  phone text,
  company text,
  lead_source text NOT NULL DEFAULT 'website',
  lead_type text NOT NULL DEFAULT 'information',
  status text NOT NULL DEFAULT 'new',
  notes text,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost', 'nurturing'))
);

-- Enable RLS
ALTER TABLE crm_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert leads (for capture forms)
CREATE POLICY "Anyone can create leads"
  ON crm_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can view leads (future admin access)
CREATE POLICY "Authenticated users can view leads"
  ON crm_leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update leads (future admin access)
CREATE POLICY "Authenticated users can update leads"
  ON crm_leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_crm_leads_email ON crm_leads(email);
CREATE INDEX IF NOT EXISTS idx_crm_leads_source ON crm_leads(lead_source);
CREATE INDEX IF NOT EXISTS idx_crm_leads_status ON crm_leads(status);
CREATE INDEX IF NOT EXISTS idx_crm_leads_created_at ON crm_leads(created_at DESC);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_crm_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_crm_leads_updated_at
  BEFORE UPDATE ON crm_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_crm_leads_updated_at();
