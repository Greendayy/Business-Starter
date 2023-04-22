import Layout from "./component/Layout";
import Contactm from "./pages/Contactm";
import Portfoliom from "./pages/Portfoliom";
import Servicem from "./pages/Servicem";
import Homem from "./pages/Homem";
import NoPage from "./component/NoPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/"> */}
          <Route index element={<Homem />} />
          <Route path="portfoliom" element={<Portfoliom />} />
          <Route path="servicem" element={<Servicem />} />
          <Route path="contactm" element={<Contactm />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
