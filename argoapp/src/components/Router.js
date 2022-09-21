import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';

/**
 * Handles component loading depending URL
 *
 * @component
 */
const Router = () => {

  /**
   * render - render crew list component
   *
   * @return {type}  component rendering
   */
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
