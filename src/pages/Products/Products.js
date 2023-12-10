import React, { useEffect, useState } from "react";
import { products } from "../../datas";
import "./Products.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useContext } from "react";
import productsContext from "../../Contexts/ProductDataContext";

function UserList() {
  const contextData = useContext(productsContext);

  const productsDelete = (productsID) => {
    contextData.setProductsData(
      contextData.productsData.filter((user) => user.id != productsID)
    );
  };
  let arrayForSort = [...contextData.productsData];
  const orderedUser = arrayForSort.sort((a, b) => a.id - b.id);

  console.log(orderedUser);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (param) => (
        <Link to={`/product/${param.row.id}`} className="userListName">
          <div className="userListUser">
            <img src={param.row.avatar} className="userListImg" alt="img" />
            <p className="userListName">{param.row.title}</p>
          </div>
        </Link>
      ),
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (param) => {
        return (
          <>
            <Link to={`/product/${param.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => productsDelete(param.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={orderedUser}
        columns={columns}
        pageSize={3}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
export default UserList;
