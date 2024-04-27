import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mryofphuqzhxudtacuop.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yeW9mcGh1cXpoeHVkdGFjdW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNDk4OTcsImV4cCI6MjAyODcyNTg5N30.3luJBOsGr4VftFLUev-ac2zAM_DK7IpA7DiY9o3nc3E';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;