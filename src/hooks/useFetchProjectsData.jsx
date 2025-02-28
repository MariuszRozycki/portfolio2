import { useState, useEffect } from "react";

const useFetchProjectData = (projectsData) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        setProjects(projectsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, [projectsData]);

  return { projects, loading, error };
};

export default useFetchProjectData;
