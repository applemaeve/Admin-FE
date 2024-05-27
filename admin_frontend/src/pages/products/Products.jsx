import React from "react";
import "./products.css";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  // Data produk contoh
  const exampleData = [
    {
      product_Id: 1,
      product_Name: "Product 1",
      product_isSale: "Yes",
      product_Price: 100,
      product_Stock: 50,
      product_category: { category_Name: "Category 1" },
      product_Description: "Description for product 1",
      imageGallery: {
        image1: "/path/to/image1.jpg",
        image2: "/path/to/image2.jpg",
        image3: "/path/to/image3.jpg",
        image4: "/path/to/image4.jpg"
      }
    },
    // Tambahkan lebih banyak produk contoh sesuai kebutuhan
  ];

  const handleEdit = (productId) => {
    console.log(productId);
    navigate(`/admin/product/edit/${productId}`);
  };

  const handleNew = () => {
    navigate(`/admin/product/new`);
  };

  return (
    <div className="products-container">
      <div className="titlediv">
        <h1 style={{ marginBottom: "3rem" }}>Products List</h1>
        <button className="newBtn" onClick={handleNew}>New Product</button>
      </div>
      <div className="productGrid">
        {exampleData.slice().reverse().map((data, index) => (
          <section key={index} className="product">
            <div className="product__photo">
              <div className="photo-container">
                <div className="photo-main">
                  <img
                    src={data.imageGallery.image1}
                    alt="mainPhoto"
                    className="main-photo"
                  />
                </div>
                <div className="photo-album">
                  <ul>
                    <li>
                      <img
                        src={data.imageGallery.image2}
                        alt="image1"
                        className="thumbnail"
                      />
                    </li>
                    <li>
                      <img
                        src={data.imageGallery.image3}
                        alt="image2"
                        className="thumbnail"
                      />
                    </li>
                    <li>
                      <img
                        src={data.imageGallery.image4}
                        alt="image3"
                        className="thumbnail"
                      />
                    </li>
                    <li>
                      <img
                        src={data.imageGallery.image1}
                        alt="image4"
                        className="thumbnail"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="product__info">
              <div className="title">
                <h1>{data.product_Name}</h1>
                <span>ID: {data.product_Id}</span>
              </div>
              <div className="dataProduct">
                <h3>For Sale:</h3>
                <span>{data.product_isSale}</span>
              </div>
              <div className="dataProduct">
                <h3>Price:</h3>
                <span>{data.product_Price} Rp</span>
              </div>
              <div className="dataProduct">
                <h3>Stock:</h3>
                <span>{data.product_Stock}</span>
              </div>
              <div className="dataProduct">
                <h3>Category:</h3>
                <span>{data.product_category.category_Name}</span>
              </div>
              <div className="description">
                <h3>Description:</h3>
                <p>{data.product_Description}</p>
              </div>
              <button
                className="buy--btn"
                onClick={() => handleEdit(data.product_Id)}
              >
                Edit Product
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Products;
