-- SQL script to fix Row Level Security (RLS) policy for quote_requests table

-- Make sure RLS is enabled for the table
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- First, drop any existing policies with the old names
DROP POLICY IF EXISTS "Allow anonymous insert" ON quote_requests;
DROP POLICY IF EXISTS "Allow authenticated users to read all quote requests" ON quote_requests;
DROP POLICY IF EXISTS "Allow authenticated users to update quote requests" ON quote_requests;

-- Then, check if our new policies exist and only create them if they don't
DO $$
BEGIN
    -- Check if "Allow anyone to insert" policy exists
    IF NOT EXISTS (
        SELECT 1 
        FROM pg_policies 
        WHERE tablename = 'quote_requests' AND policyname = 'Allow anyone to insert'
    ) THEN
        -- Create policy allowing anyone to insert
        EXECUTE 'CREATE POLICY "Allow anyone to insert" ON quote_requests FOR INSERT TO anon, authenticated WITH CHECK (true)';
    ELSE 
        -- Update the existing policy
        DROP POLICY IF EXISTS "Allow anyone to insert" ON quote_requests;
        EXECUTE 'CREATE POLICY "Allow anyone to insert" ON quote_requests FOR INSERT TO anon, authenticated WITH CHECK (true)';
    END IF;

    -- Check if "Allow authenticated read" policy exists
    IF NOT EXISTS (
        SELECT 1 
        FROM pg_policies 
        WHERE tablename = 'quote_requests' AND policyname = 'Allow authenticated read'
    ) THEN
        -- Create policy allowing authenticated users to read
        EXECUTE 'CREATE POLICY "Allow authenticated read" ON quote_requests FOR SELECT TO authenticated USING (true)';
    END IF;

    -- Check if "Allow authenticated update" policy exists
    IF NOT EXISTS (
        SELECT 1 
        FROM pg_policies 
        WHERE tablename = 'quote_requests' AND policyname = 'Allow authenticated update'
    ) THEN
        -- Create policy allowing authenticated users to update
        EXECUTE 'CREATE POLICY "Allow authenticated update" ON quote_requests FOR UPDATE TO authenticated USING (true)';
    END IF;
END
$$;