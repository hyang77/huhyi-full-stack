import React, { useState, useEffect } from "react";
import axios from "axios";
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";
import AddButton from "./buttons/AddButton";
function List(props) {
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
      <div className="list-container" style={{ margin: "3em" }}>
       <div className="d-flex justify-content-end mb-4">
          <AddButton />
        </div>
        <div className="row border border-light text-center">
          <div className="col border border-light">產品編號</div>
          <div className="col border border-light">產品名稱</div>
          <div className="col border border-light">產品種類</div>
          <div className="col border border-light">註解</div>
          <div className="col border border-light"></div>
        </div>
        {products.map((product) => (
          <div div className="row border border-light">
            <div className="col border border-light">{product._id}</div>
            <div className="col border border-light">{product.name}</div>
            <div className="col border border-light">{product.category}</div>
            <div className="col border border-light">{product.description}</div>
            <div className="col border border-light">
              <EditButton />
              <DeleteButton />
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default List;
