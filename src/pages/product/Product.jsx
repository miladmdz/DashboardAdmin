import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Chart from "./../../components/chart/Chart"
import  PublishIcon  from '@mui/icons-material/Publish'
import "./Product.css"
import { useContext } from 'react'
import productsContext from '../../Contexts/ProductDataContext'

function Product() {
    
    
    const[inputValue,setInputValue]=useState("")
    const[inputPrice,setInputPrice]=useState(0)
    const[inStock,setInStock]=useState("Yes")
    const[active,setActive]=useState("Yes")
    const[image,setImage]=useState(null)

    const contextData=useContext(productsContext)
    
    let param=useParams()

    const product=contextData.productsData.filter(product=>product.id==param.productID)[0]


    const imageHandler=(e)=>{
        setImage(`../images/${e.target.files[0].name}`)
    }

    const changeHandler=()=>{

        
        contextData.setProductsData(
            (prevState)=>{
                let productsEdit={
                    id:product.id,
                    title:inputValue,
                    avatar:image,
                    price:Number(inputPrice),
                    active:active,
                    isin:inStock,
                    productsData:[{name:"Jan",sales:6000}]
                }
                console.log(productsEdit);
                let editedProduct=prevState.filter(product=>product.id!==productsEdit.id)
                console.log(editedProduct);
                return[...editedProduct,productsEdit]
            }
            
            )
    }

    const newProductHandler=()=>{
        let newProduct={
            id:contextData.productsData.length+1,
            title:inputValue,
            avatar:image,
            price:Number(inputPrice),
            active:active,
            isin:inStock,
            productsData:[{name:"Jan",sales:6000}]
        }
        contextData.setProductsData(prevState=>[...prevState,newProduct])
        
    }
   

  return (
    <div className="product">

        <div className='productTitleContainer'>
            <h1 className="productTitle">Product</h1>
            <Link to="/products">
            <button className="productAddButton" onClick={newProductHandler}>Create</button>
            </Link>
          
        </div>

        <div className="productTop">
            <div className="productTopLeft">
                <Chart title="Sale In Month" data={product.productsData} dataKey="sales"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={product.avatar} alt="Dell LapTop" className='productInfoImg' />
                    <span className="productName">{product.title} LapTop</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <div className="productInfoKey">ID: </div>
                        <div className="productInfoValue">{product.id}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Name: </div>
                        <div className="productInfoValue">{product.title} LapTop</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Sales: </div>
                        <div className="productInfoValue">${product.price}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Active: </div>
                        <div className="productInfoValue">{product.active}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">In Stock: </div>
                        <div className="productInfoValue">{product.isin}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <div className="productForm">
                <div className="productFormLeft">
                    <label >Product Name</label>
                    <input type="text" placeholder={`${product.title} LapTop`} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />

                    <label >Product Price</label>
                    <input type="number" placeholder={`$ ${product.price}`} value={inputPrice} onChange={(e)=>setInputPrice(e.target.value)} />

                    <label>In Stock</label>
                    <select  id="inStock" value={inStock} onChange={e=>setInStock(e.target.value)}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <label>Active</label>
                    <select  id="inStock" value={active} onChange={e=>setActive(e.target.value)}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                </div>
                <div className="productFormRight">
                    <div className="productUploader">
                        <img src={image} alt="profile photo" className='productUploaderImg' />
                        <label >
                            <PublishIcon/>
                        <input type="file" onChange={imageHandler} />
                        </label>
                    </div>
                    <button className='productButton' onClick={changeHandler}>Upload (Edit)</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Product