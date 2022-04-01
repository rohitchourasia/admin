import React from "react";
import './userlist.css';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../dummydata";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const Userlist=()=>{
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 130 },
        { field:'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          
          width: 90,
        },
        {
            field: 'transaction',
            headerName: 'transaction_vol',
            
            width: 90,
          },
          {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
              return (
                <>
                  <NavLink to={"/users/" + params.row.id}>
                    <button className="userListEdit">Edit</button>
                  </NavLink>
                  <DeleteIcon
                    className="userListDelete"
                    onClick={() => handleDelete(params.row.id)}
                  />
                </>
              );
            },
          },  
        
      ];
      
      const rows = [
        { id: 1, userName: 'Snow', email: 'snow@gmail.com', status :"active",transaction:"12rs" },
        { id: 2, userName: 'Snow', email: 'snow@gmail.com', status :"active",transaction:"12rs" },
        { id: 3, userName: 'Snow', email: 'snow@gmail.com', status :"active",transaction:"12rs" },
        { id: 4, userName: 'Snow', email: 'snow@gmail.com', status :"active",transaction:"12rs" },
        { id: 5, userName: 'Snow', email: 'snow@gmail.com', status :"active",transaction:"12rs" },
        { id: 6, userName: 'Snow', email: 'snow@gmail.com', status :"active",transaction:"12rs" },
     
      ];
return(
    <div className="userList">
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

        </div>


)


}

export default Userlist ; 
