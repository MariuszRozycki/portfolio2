import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "./data/projects";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { ProjectDialog } from "./components/projects/ProjectDialog";

export default function App() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const activeProject = useMemo(() => {
    if (!projectId) return null;
    return projects.find((p) => p.id === projectId) ?? null;
  }, [projectId]);

  return (
    <Layout>
      <Home onOpenProject={(id) => navigate(`/project/${id}`)} />
      <ProjectDialog project={activeProject} onClose={() => navigate("/")} />
    </Layout>
  );
}
