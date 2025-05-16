-- SQL script to temporarily disable Row Level Security for testing purposes
-- WARNING: Only use this for testing, re-enable RLS before going to production!

-- Disable RLS on the quote_requests table
ALTER TABLE quote_requests DISABLE ROW LEVEL SECURITY;

-- Verify the RLS status
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'quote_requests';