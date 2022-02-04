import React, { useState, useEffect } from 'react';
import { Header } from '../components/header';

const Homepage = () => {
  // fetched data with only online elements objects
  const [onlineData, setOnlineData] = useState([]);
  // search bar term
  const [searchTerm, setSearchTerm] = useState('');
  // element to be rendered
  const [list, setList] = useState([]);

  // fetch data from API
  const getPairs = () => {
    fetch('https://api.exchange.coinbase.com/products')
      .then((response) => response.json())
      .then((data) => {
        data = data.filter((el) => el['status'] == 'online');
        setOnlineData(data);
      });
  };

  // generates the list that will be rendered
  const genList = (arr) => {
    setList(
      arr.map((el) => (
        <li key={el.id}>
          {el.display_name +
            ' | Min size: ' +
            el.base_min_size +
            ' | Max size: ' +
            el.base_max_size}
        </li>
      ))
    );
  };

  // function to grab initial data and then populate the list with everything
  useEffect(() => {
    getPairs();
    genList(onlineData);
  }, []);

  // search bar to match up any of the search params to any keys within the objects
  useEffect(() => {
    let result = [];
    for (const entry of onlineData) {
      if (Object.values(entry).includes(searchTerm)) result.push(entry);
    }
    genList(result);
  }, [searchTerm]);

  return (
    <div>
      <center>
        <Header />
        <input
          type='text'
          style={{
            width: '20em',
            borderRadius: '0.5rem',
            border: '2px solid black',
          }}
          onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
        />
        <ol>{list}</ol>
      </center>
    </div>
  );
};

export default Homepage;
