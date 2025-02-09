import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://djcrvpqjauqtvhtfvgkc.supabase.co',
  'eeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqY3J2cHFqYXVxdHZodGZ2Z2tjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjgyOTMsImV4cCI6MjA1MzU0NDI5M30.bghQ-OwUn-CFuW-u7Y6TT6wdwR5Q9EuxrVX7Pf_q9Rg' // Ensure this is your correct anon/public API key
)
