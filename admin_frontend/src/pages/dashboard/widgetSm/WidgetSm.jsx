import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import userAfatar from '../../../images/femaleAfatar.png'
import { useNavigate } from 'react-router-dom'

// Dummy data
const dummyData = [
  { id: 1, first_Name: "John", last_Name: "Doe", phone_Number: "1234567890" },
  { id: 2, first_Name: "Jane", last_Name: "Doe", phone_Number: "9876543210" },
  { id: 3, first_Name: "Alice", last_Name: "Smith", phone_Number: "5551234567" },
  { id: 4, first_Name: "Bob", last_Name: "Johnson", phone_Number: "5559876543" },
  { id: 5, first_Name: "Charlie", last_Name: "Brown", phone_Number: "1239874561" },
];

export default function WidgetSm() {
  const isSuccess = true; // Simulating success
  const isLoading = false; // Simulating not loading
  const navigate = useNavigate();
  let arr = [];

  const handleDisplay = (userId) => {
    navigate(`/admin/customer/edit/${userId}`);
  };
  
  if(isLoading) return <div>Loading.....</div>
  if(isSuccess){
    arr = dummyData.slice(-5);
  }
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Customers</span>
      <div className="widgetSmListItem">  
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Customer ID</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Name</span> 
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Phone </span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Action</span>
          </div>
      </div> 
      <div className="widgetSmList">
        {arr.map((user, index)=>(
          <div key={index} className="widgetSmListItem">
          <div className="widgetSmUser">
            <img src={userAfatar} alt="" className="widgetSmImg"/>
            <span className="widgetSmUserTitle">{user.id}</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUserTitle">{user.first_Name} {" "}  {user.last_Name}</span> 
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmUserTitle">{" "}{user.phone_Number}</span>
          </div>
          <button className="widgetSmButton" onClick={() => handleDisplay(user.id)}>
            <Visibility className="widgetSmIcon"  />
            Display
          </button>
        </div>
        ))}    
      </div>
    </div>
  );
}
