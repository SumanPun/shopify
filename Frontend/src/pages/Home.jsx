import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../components/Loader';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';

const Home = () => {

  const [products, setProducts] = useState({});

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_SERVER_URL + "/api/v1/product"
      );
      setProducts(data.data);
      console.log(data.data);
    } catch (error) {
      
    }
  }

  useEffect(()=> {
    getProducts();
  }, []);
  return (
    <>
      {
        products.status === 'success' ? (
          <>
          <Row>
            {
              products.results.map((product)=> {

                return (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                  </Col>
                );
                
              })
            }
          </Row>
        </> ): <Loader />
      } 
    </>
  )
}

export default Home