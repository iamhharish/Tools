import HomePage from "../../Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import DevToolsPath from "../../Pages/Tools/DevTools/DevToolsPath";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {DevToolsPath()}
    </Routes>
  );
};

export default Path;
