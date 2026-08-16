import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter basename="/drummer-portfolio">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;