import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bcard from './components/Bcard';
import './App.css';



const App = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const data = await fetch('https://dummyjson.com/products');
      const response = await data.json();
      console.log(response);
      setUsers(response.products);  
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
     <Navbar /> 
    <h1>Products</h1>
    {loading && <h1>Loading...</h1>}
    <div className="card-container">
      {users && users.map((item, index) => (
        <Bcard
          key={index}
          title={item.title}
          description={item.description}
          src={item.thumbnail}
        />
      ))}
    </div>
    {error && <h1>Error loading data...</h1>}
    <Footer />
  </>
  );
};

export default App;



