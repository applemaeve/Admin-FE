import React from 'react'
import './orderedProducts.css'

function OrderdProducts(props) {
  const products = [
    {
      product_Id: '1',
      product_Name: 'Product 1',
      product_Price: '100',
      quantity: '1',
      imageGallery: {
        image1: 'path-to-image1'
      }
    },
    {
      product_Id: '2',
      product_Name: 'Product 2',
      product_Price: '200',
      quantity: '2',
      imageGallery: {
        image1: 'path-to-image2'
      }
    }
  ];

  return (
    <div>
      {products.map((data, index) => (
        <div key={index} className="productContainer">
          <div className='imagesection'>
            <img src={data.imageGallery.image1} alt="logo" className='imagesection'/>
          </div>
          <div className='productDetails'>
            <div className="headings">
              <h3 className='element'>Product Number </h3>
              <h3 className='element'>Name </h3>
              <h3 className='element'>Price </h3>
              <h3 className='element'>Quantity </h3> 
            </div>
            <div className="data1">
              <h3 className='element'>{data.product_Id} </h3>
              <h3 className='element'>{data.product_Name} </h3>
              <h3 className='element'>Rp.{data.product_Price} </h3>
              <h3 className='element'>{data.quantity} </h3> 
            </div>
          </div>   
        </div>
      ))}
    </div>
  )
}

export default OrderdProducts
