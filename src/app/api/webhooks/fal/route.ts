import { NextResponse } from "next/server";

/** Proxies fal.ai completion webhooks to Agent B's Supabase Edge Function. */
export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const payload = await request.json();

  void fetch(`${supabaseUrl}/functions/v1/handle-fal-webhook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${serviceKey}`,
    },
    body: JSON.stringify(payload),
  }).catch(() => {
    // Edge function may not be deployed yet (Agent B)
  });

  return NextResponse.json({ ok: true });
}
