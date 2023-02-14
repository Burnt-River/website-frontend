import { Routes, Route } from "react-router-dom";

import PageLayout from "components/PageLayout";

import "./index.css";
import About from "views/About";
import Gallery from "views/Gallery";
import GetInvolved from "views/GetInvolved";
import CommunityCentre from "views/CommunityCentre";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="community-centre" element={<CommunityCentre />} />
      </Route>
    </Routes>
  );
};

export default App;
