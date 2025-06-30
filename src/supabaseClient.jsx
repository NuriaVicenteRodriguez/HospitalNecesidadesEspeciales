// src/supabaseClient.js

// ** REEMPLAZA ESTOS VALORES CON TUS PROPIOS DATOS DE SUPABASE **
// const supabaseUrl = 'https://supabase.com/dashboard/project/bhvgopbfeqmcifirezed'; // Por ejemplo: https://abcdefg.supabase.co
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJodmdvcGJmZXFtY2lmaXJlemVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNDE3MzEsImV4cCI6MjA2NjgxNzczMX0.6k6OwDosf8mFcAXLgEgQeqdTXdMwiqG-JAsqIAhQzvU'; // Por ejemplo: eyJhbGciOiJIUzI1Ni...

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

import { createClient } from '@supabase/supabase-js';

// Asegúrate de que estas variables se estén cargando correctamente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);