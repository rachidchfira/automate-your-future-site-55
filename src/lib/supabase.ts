import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to store quote requests in Supabase
export const storeQuoteRequest = async (quoteRequest: {
  name: string;
  email: string;
  company: string;
  phoneNumber: string;
  employeeCount: string;
  message: string;
  plan: string | undefined;
  departments: string[];
}) => {
  try {
    console.log('Attempting to store quote request:', { 
      ...quoteRequest,
      email: quoteRequest.email ? '***@***' : undefined // Mask email for privacy in logs
    });
    
    // Check connection to Supabase
    const { error: pingError } = await supabase.from('quote_requests').select('count').limit(1).maybeSingle();
    if (pingError) {
      console.error('Error connecting to Supabase table:', pingError);
      return { success: false, error: pingError, errorType: 'connection' };
    }
    
    const { data, error } = await supabase
      .from('quote_requests')
      .insert([
        {
          name: quoteRequest.name,
          email: quoteRequest.email,
          company: quoteRequest.company,
          phone_number: quoteRequest.phoneNumber,
          employee_count: quoteRequest.employeeCount,
          message: quoteRequest.message,
          plan: quoteRequest.plan,
          departments: quoteRequest.departments
        }
      ])
      .select();
    
    if (error) {
      console.error('Error storing quote request:', error);
      return { success: false, error, errorType: 'insert' };
    }
    
    console.log('Quote request stored successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Exception storing quote request:', error);
    return { success: false, error, errorType: 'exception' };
  }
};
