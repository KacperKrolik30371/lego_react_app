import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";

import Intro from "./pages/Intro";
import Sets from "./pages/Sets";
import Parts from "./pages/Parts";
import Help from "./pages/Help";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <div style={{ padding: "40px" }}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/sets" element={<Sets />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;