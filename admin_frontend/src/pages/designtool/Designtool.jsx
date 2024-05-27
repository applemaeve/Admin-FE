import React from 'react';
import './designtool.css';
import backImg from '../../images/login-form__bg.png';

// Data bendera contoh
const flagData = [
  {
    id: 1,
    order_Status: "Order Placed",
    flag_Type: "National",
    material: "Polyester",
    size: "3x5 ft",
    color: "Blue, Red, White",
    design: "Striped",
    amount: 150,
    special_instruction: "Handle with care",
  },
  // Tambahkan data bendera lebih jika diperlukan
];

function Designtool() {
  // Simulasi loading dan keberhasilan
  const isLoading = false;
  const isSuccess = true;

  return (
    <div>
      <h1 style={{ marginBottom: "3rem" }}>Flag Orders List</h1>
      <div className="customOrdergrid">
        {isLoading ? (
          <div>Loading....</div>
        ) : isSuccess ? (
          flagData.map((data, index) => (
            <div key={index} className="customOrdercontainer">
              <div className="customOrdercard" style={{ backgroundImage: `url(${backImg})` }}>
                <img src={`http://127.0.0.1:8000${data.finalProduct.finalProductImg}`} alt="Flag Image" className="customOrderimage" />
                <div className="customOrderdata">
                  <h1 className="customOrdertitle">{data.order_Status}</h1>
                  <div className='customOrderdataGrid'>
                    <h3>Type: </h3>
                    <p className='customOrderinfo'>{data.flag_Type}</p>
                    <h3>Size: </h3>
                    <p className='customOrderinfo'>{data.size}</p>
                    <h3>Material: </h3>
                    <p className='customOrderinfo'>{data.material}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>An error occurred</h1>
        )}
      </div>
    </div>
  );
}

export default Designtool;
