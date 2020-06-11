import React, { useState, useEffect } from "react";
import axios from "axios";
function ProductList(props) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/api/products");
      setProduct(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="title chair-title">折合椅</div>
      <div className="items chair-items">
        {products.map((product) => (
          <div>
            <img key={product._id} src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ProductList;
