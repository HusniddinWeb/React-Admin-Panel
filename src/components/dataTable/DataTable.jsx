import React, { useState } from 'react'
import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userRows, userColumns} from "../../datatablesource"
import { NavLink } from 'react-router-dom';


function DataTable() {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) =>{
        setData(data.filter(item=> item.id !== id))
    }

    const actionColumn = [{ field: "action", headerName: "Action", width: 300, renderCell:(params)=>{
        return (
            <div className='cellAction'>

                <NavLink to={"/users/test"} style={{textDecoration: "none"}}>
                    <div className='viewButton'>View</div>                                                                                  
                </NavLink>
                
                <div className='deleteButton' onClick={()=> handleDelete(params.row.id)}>Delete</div>
            </div>
        )
    }}]

  return (
    <div className='dataTable'>
        <div className="dataTableTitle">
            Add New User
            <NavLink to={"/products/new"} className="link">
                Add New                                                                                  
            </NavLink>
        </div>
        <DataGrid
            className='datagrid'
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
    </div>
  )
}

export default DataTable