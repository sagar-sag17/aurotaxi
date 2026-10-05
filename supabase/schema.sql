-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  rating smallint not null check (rating between 1 and 5),
  text text not null,
  date date not null default current_date,
  avatar_initial text,
  created_at timestamptz not null default now()
);

create index if not exists reviews_created_at_idx on public.reviews (created_at desc);

-- RLS stays enabled with no policies: only the service-role key (used
-- server-side in src/lib/supabase/server.ts) can read/write this table.
alter table public.reviews enable row level security;
