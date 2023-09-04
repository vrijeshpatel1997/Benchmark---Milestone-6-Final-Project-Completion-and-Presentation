import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom"; // Add this line

export default function Home() {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadProducts();
    console.log("Milestone 4");
  }, []);

  const loadProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteproduct = async (id) => {
    // await axios.delete(`http://localhost:8080/products/${id}`)
    loadProducts();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Description</th>
              <th scope="col">Product Price</th>
              <th scope="col"> Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>{product.productname}</td>
                <td>{product.productdescription}</td>
                <td>{product.price}</td>

                <td>
                  <button className="btn btn-primary mx-2">View </button>

                  <Link
                    className="btn btn-primary mx-2"
                    to={`/editproduct/${product.id}`}
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteproduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
