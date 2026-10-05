import "server-only";
import { createClient } from "@supabase/supabase-js";

// Service-role client for server-side use only (API routes, route handlers).
// Never import this from a "use client" component — the service role key
// bypasses Row Level Security and must not reach the browser bundle.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.");
}

export const supabaseServer = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false },
});
