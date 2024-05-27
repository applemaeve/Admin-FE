import "./widgetLg.css";
import logo from '../../../images/logo.ico';

// Dummy data
const dummyData = [
  { order_Id: 1, order_Placment_Date: "2024-05-27", total_Amount: 100, order_Status: "On The way to deliver" },
  { order_Id: 2, order_Placment_Date: "2024-05-26", total_Amount: 150, order_Status: "Order Placed" },
  { order_Id: 3, order_Placment_Date: "2024-05-25", total_Amount: 200, order_Status: "Under Package" },
  { order_Id: 4, order_Placment_Date: "2024-05-24", total_Amount: 250, order_Status: "Deliverd" },
  { order_Id: 5, order_Placment_Date: "2024-05-23", total_Amount: 300, order_Status: "Canceled" },
];

export default function WidgetLg() {
  const isSuccess = true; // Simulating success
  let arr = [];
  
  if(!isSuccess) return <div>Loading.....</div>

  if(isSuccess){
    arr = dummyData.slice(-5);
  }

  const Button = ({ type }) => {
    let type1 = "";
    if(type === 'On The way to deliver') type1 = 'way';
    else if (type === 'Order Placed') type1='Placed';
    else if (type === 'Under Package') type1 ='Package';
    else if (type === 'Deliverd') type1 ='Deliverd';
    else if (type === 'Canceled') type1 ='Canceled';

    return <button className={"widgetLgButton " + type1}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Orders</h3>
      <table className="widgetLgTable">
      <tbody>  
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Order ID</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Total Amount</th>
          <th className="widgetLgTh">Order Status</th>
        </tr>
        {arr.map((data, index) => (
          <tr  key={index} className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={logo}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{data.order_Id}</span>
          </td>
          <td className="widgetLgDate">{data.order_Placment_Date}</td>
          <td className="widgetLgAmount"> Rs. {' '} {data.total_Amount}</td>
          <td className="widgetLgStatus">
            <Button type={data.order_Status} />
          </td>
        </tr>
        ))}
      </tbody>  
      </table>
    </div>
  );
}
