import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://umjyztsvjidsujoqckyc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtanl6dHN2amlkc3Vqb3Fja3ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0OTA4MjQsImV4cCI6MjA3MDA2NjgyNH0.KKjuk22Jl5_M0iZL4_zKuTtjPLlceEXbeoLHb-TSomM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
