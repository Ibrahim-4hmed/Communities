import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PathwayDetail from "./pages/PathwayDetail";
import NotFound from "./pages/NotFound";
import Articles from "./pages/Articles";


const App = () => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pathway/:id" element={<PathwayDetail />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
);

export default App;
