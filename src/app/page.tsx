import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const demoName = "The Obsidian Covenant";
  const { data: demo } = await supabase
    .from("projects")
    .select("id")
    .eq("name", demoName)
    .maybeSingle();

  if (demo?.id) {
    redirect(`/projects/${demo.id}`);
  }

  redirect("/projects");
}
