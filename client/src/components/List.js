import React, { useState, useEffect } from "react";
import axios from "axios";
import AddButton from "./buttons/AddButton";
import { Link } from "react-router-dom";
import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";

function List(props) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/products");
      setProduct(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const result = window.confirm("確認刪除此資料?");
    if (result == true) {
      axios
        .delete(`http://localhost:4000/api/products/${id}`)
        .then(() => {
          // Issue GET request after item deleted to get updated list
          // that excludes user of id
          return axios.get("http://localhost:4000/api/products");
        })
        .then((res) => {
          // Update users in state as per-usual
          const data = res.data;
          console.log(res.data);
          setProduct(data);
        });
    }
  };

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
          <div className="row border border-light">
            <div className="col border border-light">{product._id}</div>
            <div className="col border border-light">{product.name}</div>
            <div className="col border border-light">{product.category}</div>
            <div className="col border border-light">{product.description}</div>
            <div className="col border border-light">
              <EditButton />
              <DeleteButton handleDelete={(e) => handleDelete(product._id)} />
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default List;
