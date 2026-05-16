# Session 1 — Supabase schema (applied)

**Canonical agent playbook:** [sagasandbox_parallel_cursor_plan.md](./sagasandbox_parallel_cursor_plan.md) (Agent B sections B1–B10)  
**Project ref:** set via `NEXT_PUBLIC_SUPABASE_URL` in `.env.local` (Dashboard → Project Settings → General)  
**Status:** All migrations applied. All edge functions deployed (v5 process-export with Kokoro TTS + character voice wiring). PR review blockers 1–4 resolved.

**Vercel integration (managing agent):** [vercel-supabase-orchestrator.md](./integrations/vercel-supabase-orchestrator.md)

## Migrations applied (remote)

| Name | Contents |
|------|----------|
| `initial_schema_core` | `profiles`, `projects`, `project_members`, auth trigger, helpers |
| `initial_schema_rls_projects` | RLS on projects + project_members |
| `initial_schema_entities` | `location_pins`, `timeline_events`, `characters`, `event_characters`, `exports` |
| `initial_schema_rls_entities` | RLS on entity tables |
| `initial_schema_realtime_storage` | Realtime publication, `images`/`audio` buckets (private), storage policies |
| `20260516130000_exports_bucket_and_generated_storage` | `exports` bucket (private) + generated image RLS |
| `20260516140000_security_hardening` | Revoke trigger EXECUTE from anon/authenticated; set search_path on helpers |
| `20260516150000_audio_bucket_and_char_upload_policy` | `audio` bucket; character image upload RLS |
| `20260516160000_audio_wav_mime_and_char_rls` | Add `audio/wav` to MIME types; tighten char upload RLS to project membership |

## Tables (all RLS enabled)

- `profiles`, `projects`, `project_members`
- `location_pins`, `timeline_events`, `characters`, `event_characters`, `exports`

## Extras vs parallel plan B1

- `event_characters` junction table (not in B1 SQL — keep for tagging)
- `characters.fal_request_id`, `characters.gen_status` (portrait jobs)
- Realtime includes `characters` (B1 only lists pins, events, exports)

## Agent B deliverables (in repo)

- `/types/db.ts` + `/types/app.ts` (**B3** — unblocks Agents A & C)
- `/src/lib/fal.ts` + `/src/app/api/webhooks/fal/route.ts` (**B5**)
- `/src/lib/realtime-spec.ts` (**B7**)
- `supabase/functions/handle-fal-webhook/`, `process-export/`, `cascade-regen/` (**B6**, **B8**, **B9**)
- `supabase/migrations/20260516130000_*` through `20260516160000_*` (**B4** + review fixes)

## Edge functions deployed (verify_jwt: false)

| Slug | Version | Notes |
|------|---------|-------|
| `handle-fal-webhook` | v1 | webhook → storage → db |
| `process-export` | **v5** | Kokoro TTS; character voice_id wiring per event; no ElevenLabs |
| `cascade-regen` | v1 | style-change batch regen |

**Required Edge secret:** `FAL_KEY` only (Supabase Dashboard → Edge Functions → Secrets). Covers both image generation and Kokoro TTS audio.

## B10 (demo audio)

Demo project `64883e7a-c996-446a-b0ff-2f2f4515e5e6` created. Run an `audio_script` export via the UI to generate TTS.

## Security advisor warnings — RESOLVED

- Revoke `EXECUTE` on trigger functions from `anon`/`authenticated` ✅ (`20260516140000`)
- Set `search_path` on `set_updated_at`, `storage_project_id` ✅ (`20260516140000`)
- Character upload RLS tightened to project-membership check ✅ (`20260516160000`)
