import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
export default function AddProduct() {


    let navigate = useNavigate()
  const [product, setProduct] = useState({
    productname: "",
    productdescription: "",
    price: ""
  });

  const { productname, productdescription, price } = product;

  const onInputChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value});
   
  };

  const onSubmit= async (e)=>{


    e.preventDefault();
    await axios.post("http://localhost:8080/product", product)
    navigate("/");



  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4 '> Add Product </h2>


<form  onSubmit={(e)=>onSubmit(e) }>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>
              Name
              <input
                type='text'
                className='form-control'
                placeholder='Enter name'
                name='productname'
                value={productname}
                onChange={onInputChange}
              />
            </label>
          </div>

          <div className='mb-3'>
            <label htmlFor='Description' className='form-label'>
              Description
              <input
                type='text'
                className='form-control'
                placeholder='Enter description'
                name='proudctdescription'
                value={proudctdescription}
                onChange={onInputChange}
              />
            </label>
          </div>

          <div className='mb-3'>
            <label htmlFor='Price' className='form-label'>
              Price
              <input
                type='text'
                className='form-control'
                placeholder='Enter price'
                value={price}
                name='price'
                onChange={onInputChange}
              />
            </label>
          </div>

          <button type='submit' className='btn btn-outline-primary'>
            Submit
          </button>
          <Link  className='btn btn-outline-danger' to="/">
            Cancel
          </Link>

          </form>
        </div>
      </div>
    </div>
  );
}
