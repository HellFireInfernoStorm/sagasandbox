import { WorkspaceClient } from "./WorkspaceClient";
import {
  getMockCharacters,
  getMockEvents,
  getMockPins,
  getMockProject,
} from "@/lib/mock-workspace";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

/** Preview-safe workspace: mock seed data until Agent A APIs land. */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getMockProject(id);

  return (
    <WorkspaceClient
      project={project}
      initialPins={getMockPins(id)}
      initialEvents={getMockEvents(id)}
      initialCharacters={getMockCharacters(id)}
    />
  );
}
