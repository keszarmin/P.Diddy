import {HashRouter,Routes,Route} from "react-router-dom"
import { useState } from "react";
import Map from "./segments/map";
import Start from "./segments/start";
import Welcome from "./segments/welcome";
import Feladata_1 from "./segments/task_pages/1_feladat";

function App() {
  const [Data, setData] = useState([])

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/" element={<Map Data={Data} />} >
          <Route path="/start" element={<Start SetData={setData} />} />
          <Route path="Feladat_1" element={<Feladata_1 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
