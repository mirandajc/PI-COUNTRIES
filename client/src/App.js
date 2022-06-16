import { Route, Routes } from "react-router-dom";
import Details from "./componentes/Details/Details";
import Landing from './componentes/Landing/Landing';
import CreateActivity from './componentes/Create Activity/Create-Activity';
import Home from "./componentes/Home/Home";
// import Activity from "./componentes/Activity/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/countries" element={<Home/>} />
        <Route path="/countries/:id" element={<Details/>} />
        <Route path="/activity" element={<CreateActivity/>}/>
        {/* <Route path="/allActivities" element={<Activity/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
