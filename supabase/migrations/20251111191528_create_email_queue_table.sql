/*
  # Create email queue table

  1. New Tables
    - `email_queue`
      - `id` (uuid, primary key)
      - `to_email` (text, recipient email)
      - `subject` (text, email subject)
      - `html_content` (text, email HTML body)
      - `status` (text, pending/sent/failed)
      - `metadata` (jsonb, additional data)
      - `error_message` (text, error details if failed)
      - `sent_at` (timestamptz, when email was sent)
      - `created_at` (timestamptz, when record was created)
  
  2. Security
    - Enable RLS on `email_queue` table
    - Only service role can access this table (no public policies)
*/

CREATE TABLE IF NOT EXISTS email_queue (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  to_email text NOT NULL,
  subject text NOT NULL,
  html_content text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed')),
  metadata jsonb DEFAULT '{}'::jsonb,
  error_message text,
  sent_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE email_queue ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_email_queue_status ON email_queue(status);
CREATE INDEX IF NOT EXISTS idx_email_queue_created_at ON email_queue(created_at);
