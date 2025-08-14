
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pscrgudfdhieuusgedxn.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl as string, supabaseKey as string)
