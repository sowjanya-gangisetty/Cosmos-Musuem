import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Exhibits from "./pages/Exhibits";
import Planets from "./pages/Exhibits/Planets";
import Spacecrafts from "./pages/Exhibits/Spacecrafts";
import Missions from "./pages/Missions";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="exhibits" element={<Exhibits />}>
            <Route path="planets" element={<Planets />} />
            <Route path="spacecrafts" element={<Spacecrafts />} />
          </Route>
          <Route path="missions" element={<Missions />} />
          <Route path="about" element={<About />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
