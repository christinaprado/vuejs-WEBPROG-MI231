import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://buxkrwsnzhkbhqpxsqhk.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY  // Use VITE_ prefix for environment variables in Vue 3

export const supabase = createClient('https://buxkrwsnzhkbhqpxsqhk.supabase.co', eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1eGtyd3NuemhrYmhxcHhzcWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMDc0MjksImV4cCI6MjA1NDY4MzQyOX0.XRwwAVE3LMikvr60ifmcXmxzEevAGPl_4UYOanN_hWM)
