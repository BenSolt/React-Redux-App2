import React, { useEffect, useState } from "react";
//import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

import HaloPlayerCard from "./HaloPlayerCard";

export default function Players2() {

  const players = [
    'Xtianumbra',
    'Etherblades89',
    'mdsolt',
    'muscleman0927',
    'PaulSolt',
    'TomASck',
    'ImagelessBean',
    'DePal912',
    'Killgear',
    'VeteranFerret58',

    'ACA AC3',
    'AT WILL 2703',
    'Mr DomeFace',
    'I POLSKA I',
    'Sausag3Tickl3r',
    'Dash MacReady',
    'Divine King15',
    'I SpiritHope I',
    'Xray Squad 90',
    'TheMastaChamp',
    'Wife H8s Halo',
    'XD marman',
    'So HELP ME GOD',
    'goopboy123',
    'MATRICKX',

    

]

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axiosWithAuth()
      .get (`stats/h5/servicerecords/arena?players=${players}`) 
      .then(res => {
        // const info = res.data.Results
        const info = res.data.Results.filter(p =>
           p.Id.toLowerCase().includes(query.toLowerCase())
         );
        console.log(res.data.Results);
        setData(info);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <div className="Searchbar" >
          <h3>Search Player:</h3>
        <form>
          <input className="Input"
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            //tabIndex="0"
            placeholder="Search player"
            autoComplete="off"
          />
        </form>
      </div>
    <div>
        {data.map(p => {
         
              return < HaloPlayerCard key={p.Id} p={p}/>
        
        })}
      </div>
    </div>
  );
}
