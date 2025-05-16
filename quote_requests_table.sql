-- SQL script to create the quote_requests table in Supabase

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop the table if it exists (uncomment if you want to recreate the table)
-- DROP TABLE IF EXISTS quote_requests;

-- Create the quote_requests table
CREATE TABLE quote_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT NOT NULL,
    phone_number TEXT,
    employee_count TEXT,
    message TEXT,
    plan TEXT,
    departments JSONB,
    status TEXT DEFAULT 'new',
    assigned_to TEXT,
    notes TEXT,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for commonly queried columns
CREATE INDEX idx_quote_requests_email ON quote_requests(email);
CREATE INDEX idx_quote_requests_created_at ON quote_requests(created_at);
CREATE INDEX idx_quote_requests_status ON quote_requests(status);

-- Add comment to table
COMMENT ON TABLE quote_requests IS 'Stores quote requests submitted through the pricing form';

-- Enable Row Level Security
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anonymous users to insert data (for form submissions)
CREATE POLICY "Allow anonymous insert" 
  ON quote_requests 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Allow authenticated users to read all quote requests
CREATE POLICY "Allow authenticated users to read all quote requests" 
  ON quote_requests 
  FOR SELECT 
  TO authenticated 
  USING (true);

-- Allow authenticated users to update quote requests
CREATE POLICY "Allow authenticated users to update quote requests" 
  ON quote_requests 
  FOR UPDATE 
  TO authenticated 
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to insert quote requests
CREATE POLICY "Allow authenticated insert"
  ON quote_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create trigger to update the last_updated timestamp
CREATE OR REPLACE FUNCTION update_last_updated_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_updated = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_quote_requests_last_updated
BEFORE UPDATE ON quote_requests
FOR EACH ROW
EXECUTE FUNCTION update_last_updated_column();

-- Optional: Create a view for easier querying
CREATE VIEW recent_quote_requests AS
SELECT 
    id,
    created_at,
    name,
    email,
    company,
    plan,
    status
FROM 
    quote_requests
ORDER BY 
    created_at DESC;

-- Permissions for the view
GRANT SELECT ON recent_quote_requests TO authenticated;
