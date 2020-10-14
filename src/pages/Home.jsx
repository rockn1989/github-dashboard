import React from "react";
import { Dashboard, Pagination } from '../components';
import { Link } from "react-router-dom";

const Home = () => (
  <main className="content">
    <div className="container">
      <Link to="/cart">Detail</Link>
      <h1>Главная</h1>
    </div>
    <Dashboard />
    <Pagination />
  </main>
);
export default Home;
