import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jevgkjawczxetjwzbftu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldmdramF3Y3p4ZXRqd3piZnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMDg4NjAsImV4cCI6MjA0ODg4NDg2MH0.6iIz2H3VIQfU6QUKM6bFdhf8BEPdnv1OwJawCqgduuM';

export const supabase = createClient(supabaseUrl, supabaseKey);