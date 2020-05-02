import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Container">
      <ProductImg />
      <ProductDesc desc="Smart Watch" title="Garmin Brown Smart Watch" price="765.00"/>
    </div>
  );
}

const ProductImg = (props) => {
  return (
    <div className="ProductImg">
      <img src="img/watch2.jpg" alt="Product: Brown Watch"/>
    </div>
  )
}
const prosData = ["It's Smart", "Expensive", "Good Color"];
const Pros = prosData.map((data, index) => <li key={index}>{data}</li>);

const consData = ["Might be smarther than me", "Not as expensive as RM Series", "Not Blue, I love blue"];
const Cons = consData.map((data, index) => <li key={index}>{data}</li>);

const ProductDesc = (props) => {
  const { desc, title, price } = props;
  const [isAdded, setisAdded] = useState(false);
  const [stock, setStock] = useState(1);
  return (
    <div className="ProductDesc">
      <p className="DescCategory">{desc}</p>
      <h1 className="Title">{title}</h1>
      {
        stock < 1 ? 
        <div>
          <span className="Price" style={{textDecoration: "line-through"}}>${price}</span>
          <span style={{color: "#ff5029", fontWeight: "bold"}}> - Out of stock</span>
        </div>
        :        
        <p className="Price">${price}</p>
      }
      <p className="Detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa magni asperiores quaerat similique obcaecati. Ut obcaecati accusantium sapiente explicabo?</p>
      <h5>Pros</h5>
      <ul>
        {Pros}
      </ul>
      <h5>Cons</h5>
      <ul>
        {Cons}
      </ul><br/>
      {
        isAdded ? 
        <button style={{background: "#ff5029"}} className="Button" onClick={() => (setisAdded(!isAdded), setStock(stock+1))}>Remove from cart</button>
        :
        <button className="Button" onClick={() => (setisAdded(!isAdded), setStock(stock-1))}>Add to cart</button>

      }
    </div>
  )
}

export default App;
