import { Fragment } from "react";
import NavBar from "../../components/NavBar";

const FilesStartShip = ({ item, index }) => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main>
        <div key={index} className="shipsGrid">
          <div>
            <h3>{item.name}</h3>
            <p>data of each ship</p>
          </div>
          <p>{item.model}</p>
        </div>
      </main>
    </Fragment>
  );
};
export default FilesStartShip;
