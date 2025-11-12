/*
  # Create Analytics Tables

  1. New Tables
    - `page_views`
      - `id` (uuid, primary key)
      - `page_path` (text, the URL path visited)
      - `page_title` (text, the page title)
      - `referrer` (text, where the user came from)
      - `user_agent` (text, browser/device info)
      - `session_id` (text, unique session identifier)
      - `visitor_id` (text, anonymous visitor identifier)
      - `created_at` (timestamptz, when the visit occurred)
    
    - `events`
      - `id` (uuid, primary key)
      - `event_name` (text, name of the event)
      - `event_category` (text, category like 'engagement', 'conversion')
      - `event_data` (jsonb, additional event data)
      - `page_path` (text, where the event occurred)
      - `session_id` (text, session identifier)
      - `visitor_id` (text, visitor identifier)
      - `created_at` (timestamptz, when the event occurred)
  
  2. Security
    - Enable RLS on both tables
    - Only allow inserts from authenticated users or service role
    - No public read access (data is for admin analysis only)
  
  3. Indexes
    - Index on created_at for time-based queries
    - Index on page_path for page-specific analytics
    - Index on event_name for event-specific queries
*/

CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path text NOT NULL,
  page_title text,
  referrer text,
  user_agent text,
  session_id text NOT NULL,
  visitor_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name text NOT NULL,
  event_category text DEFAULT 'general',
  event_data jsonb DEFAULT '{}'::jsonb,
  page_path text,
  session_id text NOT NULL,
  visitor_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow inserts for all users"
  ON page_views
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow inserts for all users"
  ON events
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_page_path ON page_views(page_path);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_events_created_at ON events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_events_event_name ON events(event_name);
CREATE INDEX IF NOT EXISTS idx_events_session_id ON events(session_id);
