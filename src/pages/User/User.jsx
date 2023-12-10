import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Chart from "./../../components/chart/Chart";
import PublishIcon from "@mui/icons-material/Publish";
import { useContext } from "react";
import productsContext from "../../Contexts/ProductDataContext";
import "./User.css";

function User() {
  const [inputValue, setInputValue] = useState("");
  const [inputPrice, setInputPrice] = useState(0);
  const [email, setEmail] = useState("");
  const [active, setActive] = useState("Yes");
  const [image, setImage] = useState(null);

  const contextData = useContext(productsContext);

  let param = useParams();

  const user = contextData.userDatas.filter(
    (user) => user.id == param.userID
  )[0];
  console.log(user);

  const imageHandler = (e) => {
    setImage(`../images/${e.target.files[0].name}`);
  };

  const changeHandler = () => {
    contextData.setUserDatas((prevState) => {
      let productsEdit = {
        id: user.id,
        username: inputValue,
        avatar: image,
        transaction: Number(inputPrice),
        status: active,
        email: email,
        productsData: [{ name: "Jan", sales: 6000 }],
      };
      console.log(productsEdit);
      let editedProduct = prevState.filter(
        (product) => product.id !== productsEdit.id
      );
      console.log(editedProduct);
      return [...editedProduct, productsEdit];
    });
    setInputValue("");
    setInputPrice(0);
    setEmail("");
    setActive("active");
    setImage(null);
  };

  const newProductHandler = () => {
    let newUser = {
      id: contextData.userDatas.length + 1,
      username: inputValue,
      avatar: image,
      transaction: Number(inputPrice),
      status: active,
      email: email,
      productsData: [{ name: "Jan", sales: 6000 }],
    };
    contextData.setNewUsers((prevState) => [...prevState, newUser]);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newUser">
          <button className="productAddButton" onClick={newProductHandler}>
            Create
          </button>
        </Link>
      </div>

      <div className="productTop">
        
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={user.avatar}
              alt="Profile Image"
              className="productInfoImg"
            />
            <span className="productName">{user.usename} User</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID: </div>
              <div className="productInfoValue">{user.id}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name: </div>
              <div className="productInfoValue">{user.username}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Transaction: </div>
              <div className="productInfoValue">${user.transaction}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active: </div>
              <div className="productInfoValue">{user.status}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Email: </div>
              <div className="productInfoValue">{user.email}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <div className="productForm">
          <div className="productFormLeft">
            <label>Username</label>
            <input
              type="text"
              placeholder={`${user.username}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <label>User Transaction</label>
            <input
              type="number"
              placeholder={`${user.transaction}`}
              value={inputPrice}
              onChange={(e) => setInputPrice(e.target.value)}
            />

            <label>Email</label>
            <input
              type="Email"
              placeholder={`${user.email}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Active</label>
            <select
              id="inStock"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="non-active">Non-Active</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUploader">
              <img
                src={image}
                alt="profile photo"
                className="productUploaderImg"
              />
              <label>
                <PublishIcon />
                <input type="file" onChange={imageHandler} />
              </label>
            </div>
            <Link to={"/users"}>
            <button className="productButton" onClick={changeHandler}>
              Upload (Edit)
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
