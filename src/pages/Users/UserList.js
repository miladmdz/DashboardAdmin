import React,{useContext, useEffect, useState} from 'react'
import "./UserList.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import productsContext from '../../Contexts/ProductDataContext';

function UserList() {

  const contextUser=useContext(productsContext)

  const userDelete=userID=>{
    contextUser.setUserDatas(contextUser.userDatas.filter(user=>user.id!=userID))
  }
 let arrayForSort=[...contextUser.userDatas]
  const orderedUser=arrayForSort.sort((a,b) => a.id - b.id)

  console.log(orderedUser);

  const columns=[
    {
      field:"id",
      headerName:"ID",
      width:90
    },
    {
      field:"username",
      headerName:"User",
      width:200,
      renderCell:(param)=>(
          <Link to="/" className='userListName'>
            <div className='userListUser'>
              <img src={param.row.avatar} className='userListImg' alt='img' />
              <p className='userListName'>{param.row.username}</p>
            </div>
          </Link>
        
      )
    },
    {
      field:"email",
      headerName:"Email",
      width:200
    },
    {
      field:"status",
      headerName:"Status",
      width:120,
    },
    {
      field:"transaction",
      headerName:"Transaction",
      with:160
    },
    {
      field:"action",
      headerName:"Action",
      width:150,
      renderCell:(param)=>{
        return(
          <>
          <Link to={`/user/${param.row.id}`}>
            <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutlineIcon 
          className="userListDelete"
          onClick={()=>userDelete(param.row.id)}
          />
          </>
        )
      }
    }
  ]
  return (
    <div className='userList'>
      <DataGrid
      rows={orderedUser}
      columns={columns}
      pageSize={4}
      disableSelectionOnClick
      />
    </div>
  )
}
export default UserList