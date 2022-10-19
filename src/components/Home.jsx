import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { data, addToCart, removeItem, deleteItem,count, total ,emptyCart } = useContext(AppContext);
  return (
    <div>
      <h1>Home</h1>
      <h1>{count}</h1>
      <h1>{total}</h1>
      <button onClick={emptyCart}>vaciar Carro</button>
      {data.map(item => (
        <>
      <p>{item.name}</p>
      <button id={item.id} onClick={(e) => {addToCart(e.target.id)}} >Agregar</button>
      <button id={item.id} onClick={(e) => {removeItem(e.target.id)}} >Disminuir Producto</button>
      <button id={item.id} onClick={(e) => {deleteItem(e.target.id)}} >eliminar </button>
        </>
      ))}
      
    </div>
  );
};

export default Home;
