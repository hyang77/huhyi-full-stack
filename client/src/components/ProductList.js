import React, { useState, useEffect } from "react";
import axios from "axios";
function ProductList(props) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/products");
      setProduct(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="title chair-title">排椅</div>
      <div className="items chair-items">
        {products.map((product) => (
          <div>
            <img
              key={product._id}
              src={`http://localhost:4000/uploads/${product.image}`}
              alt={product.name}
            />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ProductList;
