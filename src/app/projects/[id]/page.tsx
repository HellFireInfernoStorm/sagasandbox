import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { WorkspaceShell } from "./workspace-shell";

type PageProps = { params: Promise<{ id: string }> };

export default async function ProjectWorkspacePage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !project) notFound();

  const [{ data: pins }, { data: events }, { data: characters }] = await Promise.all([
    supabase.from("location_pins").select("*").eq("project_id", id),
    supabase
      .from("timeline_events")
      .select("*")
      .eq("project_id", id)
      .order("sequence_order", { ascending: true }),
    supabase.from("characters").select("*").eq("project_id", id),
  ]);

  return (
    <WorkspaceShell
      project={project}
      initialPins={pins ?? []}
      initialEvents={events ?? []}
      initialCharacters={characters ?? []}
    />
  );
}
