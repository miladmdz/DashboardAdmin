import React,{useState} from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import TopBar from './components/topbar/TopBar.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import { newMembers, products, userRows } from './datas.js'
import "./App.css"


import productsContext from './Contexts/ProductDataContext.js'


export default function App() {

    const[productsData,setProductsData]=useState(products)
    const[userDatas,setUserDatas]=useState(userRows)
    const[newUsers,setNewUsers]=useState(newMembers)

let router=useRoutes(routes)   

    return (
        
        <productsContext.Provider value={{
            productsData,
            setProductsData,
            userDatas,
            setUserDatas,
            newUsers,
            setNewUsers
            }}>
            <TopBar/>
            <div className="container">
            <Sidebar/>
            {router}
            </div>
        </productsContext.Provider>
        
    )
}
