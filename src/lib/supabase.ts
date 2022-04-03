import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bebkkdqqzrbvvlfgktdd.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlYmtrZHFxenJidnZsZmdrdGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkwMTUxNDMsImV4cCI6MTk2NDU5MTE0M30.g2J6RUTAHjoEN_JDDJwBnaWujuAytIKyXUVZf6s7MIY';

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage,
});

export default supabase;