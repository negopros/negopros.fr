/*
  # Fix Security Issues

  ## Changes
  This migration addresses the following security and optimization issues:

  1. **Unused Indexes Removal**
     - Drops unused index `idx_contacts_email` on contacts table
     - Drops unused index `idx_contacts_status` on contacts table
     - Drops unused index `idx_contacts_created_at` on contacts table
     - Drops unused index `idx_newsletter_email` on newsletter_subscribers table
     - Drops unused index `idx_newsletter_status` on newsletter_subscribers table
     
     Note: These indexes can be recreated later if the tables grow and queries need optimization.

  2. **Function Search Path Security Fix**
     - Recreates `update_updated_at_column()` function with a secure, immutable search_path
     - Sets `SET search_path = pg_catalog, public` to prevent search path hijacking attacks
     - This ensures the function always uses the intended schema and cannot be exploited

  ## Security Impact
  - Eliminates risk of search path manipulation attacks
  - Reduces database overhead from maintaining unused indexes
  - Follows PostgreSQL security best practices
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_contacts_email;
DROP INDEX IF EXISTS idx_contacts_status;
DROP INDEX IF EXISTS idx_contacts_created_at;
DROP INDEX IF EXISTS idx_newsletter_email;
DROP INDEX IF EXISTS idx_newsletter_status;

-- Recreate the update_updated_at_column function with secure search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER 
SET search_path = pg_catalog, public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;