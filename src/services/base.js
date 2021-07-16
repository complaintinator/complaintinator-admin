import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.REACT_APP_ADMIN_SUPABASE_URL,
  process.env.REACT_APP_ADMIN_SUPABASE_KEY
);
