import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();

  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      name: "Aloe Vera",
      category: "Medicinal",
      image: "https://via.placeholder.com/150",
      description: "A medicinal plant with healing properties",
      cost: 250
    },
    {
      name: "Tulsi",
      category: "Medicinal",
      image: "https://via.placeholder.com/150",
      description: "Sacred plant with health benefits",
      cost: 200
    },
    {
      name: "Lavender",
      category: "Aromatic",
      image: "https://via.placeholder.com/150",
      description: "Pleasant aromatic plant",
      cost: 300
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant, index) => (
        <div className="product-card" key={index}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p><strong>₹{plant.cost}</strong></p>

          <button
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.name]}
          >
            {addedToCart[plant.name] ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
