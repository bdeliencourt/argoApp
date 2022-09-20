import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* URL Path / loads Home Component */}
        <Route path = "/" element = { <Home /> } />
      </Routes>
    </BrowserRouter>
  );

};
export default Router;
