-- Comprehensive SQL script to fix the quote_requests table setup

-- First, check if the table exists and its structure
SELECT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' AND table_name = 'quote_requests'
) as table_exists;

-- Check current RLS status
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'quote_requests';

-- Check existing policies
SELECT * FROM pg_policies WHERE tablename = 'quote_requests';

-- Disable RLS temporarily (if it exists)
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'quote_requests' AND rowsecurity = true) THEN
    EXECUTE 'ALTER TABLE quote_requests DISABLE ROW LEVEL SECURITY';
  END IF;
END $$;

-- Set up grants correctly
GRANT ALL ON quote_requests TO postgres, authenticated;
GRANT INSERT ON quote_requests TO anon;

-- Now reinstate RLS with a minimal policy for testing
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'quote_requests') THEN
    EXECUTE 'ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY';
    
    -- Drop existing policies
    DROP POLICY IF EXISTS "anon_insert_policy" ON quote_requests;
    
    -- Create a simple insertion policy for anonymous users
    CREATE POLICY "anon_insert_policy" ON quote_requests 
      FOR INSERT 
      WITH CHECK (true);
  END IF;
END $$;

-- Confirm final RLS status
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'quote_requests';

-- Confirm final policies
SELECT * FROM pg_policies WHERE tablename = 'quote_requests';