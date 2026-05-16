import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { NewProjectButton } from "./new-project-button";

export default async function ProjectsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: owned } = await supabase
    .from("projects")
    .select("*")
    .eq("owner_id", user.id)
    .order("created_at", { ascending: false });

  const { data: memberships } = await supabase
    .from("project_members")
    .select("project_id")
    .eq("user_id", user.id);

  const memberIds = (memberships ?? [])
    .map((m) => m.project_id)
    .filter((id) => !(owned ?? []).some((p) => p.id === id));

  let shared: NonNullable<typeof owned> = [];
  if (memberIds.length > 0) {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .in("id", memberIds);
    shared = data ?? [];
  }

  const projects = [...(owned ?? []), ...shared];

  return (
    <main className="min-h-screen bg-[#0e0e0f] px-6 py-10 text-[#E5E7EB]">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Your universes</h1>
          <p className="mt-1 text-sm text-[#9CA3AF]">
            Collaborative storytelling workspaces
          </p>
        </div>
        <NewProjectButton />
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.length === 0 ? (
          <p className="col-span-full text-sm text-[#9CA3AF]">
            No projects yet. Create your first universe.
          </p>
        ) : (
          projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="rounded-xl border border-[#2a2a2e] bg-[#1A1A1E] p-5 transition hover:border-[#7C3AED]/50"
            >
              <h2 className="font-medium">{project.name}</h2>
              <span className="mt-3 inline-block rounded-full border border-[#2a2a2e] px-2 py-0.5 text-xs capitalize text-[#9CA3AF]">
                {project.theme.replace(/_/g, " ")}
              </span>
              <p className="mt-4 font-mono text-xs text-[#6b7280]">
                {new Date(project.created_at).toLocaleDateString()}
              </p>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
