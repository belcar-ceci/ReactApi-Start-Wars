import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import ShowShips from "../pages/showShips/ShowShips";
import SelectedStartShip from "../components/SelectedStartShip";

function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ShowShips" element={<ShowShips />} />
        <Route path="/detall/:name" element={<SelectedStartShip />} />
        <Route path="*" element={() => <div>404</div>} />
           {/*It is recommended to add 404 route to get an error message, if the route does not exist.*/}
           {/*The component should be displayed if a route is not recognized */}
      </Routes>
    </BrowserRouter>
  );
}
export default Path;
