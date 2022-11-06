import React from 'react';
import './index.css';
import TuitList from '../tuits/tuit-list';
import WhatsHappening from "./whats-happening";

const Home = () => {
  return (
    <>
      <WhatsHappening/>
      <TuitList/>
    </>
  );
};

export default Home;