import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Main from "./Pages/Main";
import Result from "./Pages/Result";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='res' element={<Result />} />
    </Routes>
  );
}

export default App;
