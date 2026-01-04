import { Outlet } from "react-router-dom";
import { Layout } from "../components/layout/Layout";

export function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
