import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    productname: '',
    productdescription: '',
    price: '',
  });

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/product/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/product/${id}`, product);
      navigate('/');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit Product</h2>

          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='productname' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter name'
                name='productname'
                value={product.productname}
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='productdescription' className='form-label'>
                Description
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter description'
                name='productdescription'
                value={product.productdescription}
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='price' className='form-label'>
                Price
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter price'
                name='price'
                value={product.price}
                onChange={onInputChange}
              />
            </div>

            <button type='submit' className='btn btn-outline-primary'>
              Submit
            </button>
            <Link className='btn btn-outline-danger' to='/'>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
