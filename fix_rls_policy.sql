-- SQL script to fix Row Level Security (RLS) policy for quote_requests table

-- Make sure RLS is enabled for the table
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policies (if any)
DROP POLICY IF EXISTS "Allow anonymous insert" ON quote_requests;
DROP POLICY IF EXISTS "Allow authenticated users to read all quote requests" ON quote_requests;
DROP POLICY IF EXISTS "Allow authenticated users to update quote requests" ON quote_requests;

-- Create a simple policy that allows anyone to insert data into the table
CREATE POLICY "Allow anyone to insert" 
  ON quote_requests 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Create a policy that allows authenticated users to read all data
CREATE POLICY "Allow authenticated read" 
  ON quote_requests 
  FOR SELECT 
  TO authenticated 
  USING (true);

-- Create a policy that allows authenticated users to update data
CREATE POLICY "Allow authenticated update" 
  ON quote_requests 
  FOR UPDATE 
  TO authenticated 
  USING (true);