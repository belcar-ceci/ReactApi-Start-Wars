import { useState, useEffect } from "react";
import axios from "axios";
import apiServer from "../services/Service";
import { Link } from "react-router-dom";
import '../assets/style/shiplist.css';

function ShipsList() {
  const [list, setList] = useState([]);
  const [nextList, setNextList] = useState(apiServer);
  let shipsGrid;

  //Array Ships
  useEffect(() => {
    axios({
      url: nextList,
    })
      .then((response) => {
        console.log(response.data.results);
        setList(response.data.results);
        setNextList(response.data.next);
      })
      .catch((error) => {
        console.log(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setList, setNextList]);

  //Handle: adding 
  const handelAddDisplayedShips = () => {
    axios({
      url: nextList,
    })
      .then((response) => {
        setList((before) => before.concat(response.data.results));
        setNextList(response.data.next);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  list.map((item, index) => (item.id = index + 2));

  shipsGrid = list.map((item, index) => (
    <div key={index} className="shipsGrid">
      <Link to={`/detall/${item.name}`} state={item}>
        <h3>{item.name}</h3>
        <p>{item.model}</p>
      </Link>
    </div>
  ));
  //console.log(list);

  return (
    <div>
      <div>{shipsGrid}</div>
      {nextList && <button className="viewMore" onClick={handelAddDisplayedShips}>View more</button>}
    </div>
  );
}

export default ShipsList;
