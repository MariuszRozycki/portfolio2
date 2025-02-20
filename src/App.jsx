import { RouterProvider } from "react-router-dom";
import { Theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import router from "./routes";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Theme>
  );
}

export default App;
