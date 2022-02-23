import { Fragment } from "react";
import ShipsList from "../../components/ShipsList";
import NavBar from "../../components/NavBar";

function ShowShips() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main>
        <ShipsList></ShipsList>
      </main>
    </Fragment>
  );
}

export default ShowShips;
