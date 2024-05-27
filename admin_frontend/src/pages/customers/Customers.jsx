import "./Customers.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline ,Edit} from "@mui/icons-material";
import { useState } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom'
import { Alert } from "@mui/material";

// Dummy data
const dummyData = [
  { id: 1, first_Name: "John", last_Name: "Doe", email: "john.doe@example.com", phone_Number: "1234567890" },
  { id: 2, first_Name: "Jane", last_Name: "Doe", email: "jane.doe@example.com", phone_Number: "0987654321" },
];

export default function Customers() {
  const [success , setSuccess] = useState(false)

  // Simulating API calls
  const getAllCustomersQuery = () => ({ data: dummyData, isLoading: false });
  const deleteCustomerMutation = async (id) => {
    // Simulating delete operation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Success");
      }, 1000);
    });
  };

  const { data, isLoading } = getAllCustomersQuery();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirm to Delete Customer',
      message: 'Are you sure to Delete Staff Member.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => { 
            await deleteCustomerMutation(id);
            setSuccess(true);
          }        
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    })
  };
  
  const handleEdit = (id) => {
    navigate(`/admin/customer/edit/${id}`);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "first_Name", headerName: "First Name", width: 270 },
    { field: "last_Name", headerName: "Last name", width: 270 },
    { field: "email", headerName: "Email", width: 360 }, 
    { field: "phone_Number", headerName: "Phone Number", width: 310 },
    { field: "action", headerName: "Action", width: 320,
      renderCell: (params) => (
        <>
          <Edit className="userListEdit" onClick={() => handleEdit(params.row.id)} />
          <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
        </>
      ),
    },
  ];

  return (
    <>
      <div style={{ display: 'flex', flexDirection: "row" }}>
        <h1 className="userTitle">Customers List</h1>
        {success ? (<Alert severity="success"> Customer Deleted Successfully </Alert>) : ("")}
      </div>
      <div className="userList">
        <DataGrid rows={data} columns={columns} style={{ fontSize: '18px', borderRadius: '1rem', backgroundColor: "#fff0f1" }} />
      </div>
    </>
  );
}
