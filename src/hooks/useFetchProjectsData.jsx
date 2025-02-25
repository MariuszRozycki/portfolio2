import { useState, useEffect } from "react";
import { projectsData } from "../data/projectsData";

const useFetchProjectData = () => {
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
  }, []);

  return { projects, loading, error };
};

export default useFetchProjectData;
