import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./productEdit.css";

function ProductEdit() {
  const navigate = useNavigate();
  const [server_error, setServerError] = useState({});
  const [data, setData] = useState("");
  const [success, setSuccess] = useState(false);

  const [imge, setImge] = useState({
    image1: '', image2: '', image3: '', image4: '',
  });

  // Contoh data produk yang digunakan untuk demonstrasi
  useEffect(() => {
    const productData = {
      product_Name: "Sample Product",
      product_Id: 1,
      product_isSale: "Yes",
      product_Price: 100,
      product_Stock: 50,
      product_Description: "This is a sample product description",
      imageGallery_Id: 1,
      image1: "/path/to/sample-image1.jpg",
      image2: "/path/to/sample-image2.jpg",
      image3: "/path/to/sample-image3.jpg",
      image4: "/path/to/sample-image4.jpg",
      category_Name: "Sample Category",
    };
    setData(productData);
  }, []);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({ ...values, [name]: value }));
  };

  const handleImage = event => {
    const name = event.target.name;
    const value = event.target.files[0];
    setImge(values => ({ ...values, [name]: value }));
    const objectUrl = URL.createObjectURL(value);
    setData(values => ({ ...values, [name]: objectUrl }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulasi pengiriman data
    setSuccess(true);
    setTimeout(() => {
      navigate('/admin/products');
    }, 3000);
  };

  return (
    <div className="container1">
      <div className="photoContainer">
        <div className="photoGrid">
          <div className="productPhoto">
            <img src={data.image1} alt="1" />
            <div className="uploadContainer">
              <input type="file" name="image1" onChange={handleImage} />
            </div>
          </div>
          <div className="productPhoto">
            <img src={data.image2} alt="2" />
            <div className="uploadContainer">
              <input type="file" name="image2" onChange={handleImage} />
            </div>
          </div>
          <div className="productPhoto">
            <img src={data.image3} alt="3" />
            <div className="uploadContainer">
              <input type="file" name="image3" onChange={handleImage} />
            </div>
          </div>
          <div className="productPhoto">
            <img src={data.image4} alt="4" />
            <div className="uploadContainer">
              <input type="file" name="image4" onChange={handleImage} />
            </div>
          </div>
        </div>
      </div>
      <div className="dataContainer">
        <div className="info_data">
          <div className="name">
            <h1> Name: {data.product_Name}</h1>
          </div>
          <div className="productInfo">
            <h3>Product ID:</h3>
            <span> {data.product_Id}</span>
          </div>
          <div className="productInfo">
            <h3>Sale Status:</h3>
            <span> {data.product_isSale}</span>
          </div>
          <div className="productInfo">
            <h3>Product Price:</h3>
            <span> Rp. {data.product_Price}</span>
          </div>
          <div className="productInfo">
            <h3>Product Stock:</h3>
            <span> {data.product_Stock} </span>
          </div>
          <div className="productInfo">
            <h3>Product Category:</h3>
            <span> {data.category_Name}</span>
          </div>
          <div className="descript">
            <h3>Product Description:</h3>
            <p>{data.product_Description}</p>
          </div>
        </div>
        <form className="editProductForm" onSubmit={handleSubmit}>
          <div className="newproductItem">
            <label>Product Name</label>
            <input
              type="text"
              name="product_Name"
              value={data.product_Name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="newproductItem">
            <label>Product Description</label>
            <input
              type="text"
              name="product_Description"
              value={data.product_Description || ""}
              onChange={handleChange}
            />
          </div>
          <div className="newproductItem">
            <label>Product Price</label>
            <input
              type="text"
              name="product_Price"
              value={data.product_Price || ""}
              onChange={handleChange}
            />
          </div>
          <div className="newproductItem">
            <label>Product Stock</label>
            <input
              type="text"
              name="product_Stock"
              value={data.product_Stock || ""}
              onChange={handleChange}
            />
          </div>
          <div className="newproductItem">
            <label>Product Sale Status</label>
            <select
              className="newProductSelect"
              name="product_isSale"
              value={data.product_isSale || ""}
              onChange={handleChange}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="newproductItem">
            <label>Update Category</label>
            <select
              className="newProductSelect"
              name="category_Name"
              value={data.category_Name || ""}
              onChange={handleChange}
              required
            >
              <option value="Asia">Asia</option>
              <option value="Afrika">Afrika</option>
              <option value="Antartika">Antartika</option>
              <option value="Amerika">Amerika</option>
            </select>
          </div>
          <button type="submit" className="btn1">
            Update Product
          </button>
        </form>
        {success && <div>Product Updated Successfully</div>}
      </div>
    </div>
  );
}

export default ProductEdit;
