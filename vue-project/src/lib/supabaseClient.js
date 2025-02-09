import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://djcrvpqjauqtvhtfvgkc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....' // Ensure this is your correct anon/public API key
)
