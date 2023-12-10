import Home from "./pages/Home/Home"
import NewUsers from "./pages/NewUsers/NewUsers"
import Products from "./pages/Products/Products"
import User from "./pages/User/User"
import UserList from "./pages/Users/UserList"
import NotFound from "./pages/notFound/NotFound"
import Product from "./pages/product/Product"


let routes=[
    {path:"/",element:<Home/>},
    {path:"/users",element:<UserList/>},
    {path:"/user/:userID",element:<User/>},
    {path:"/newUser",element:<NewUsers/>},
    {path:"/products",element:<Products/>},
    {path:"/product/:productID",element:<Product/>},
    {path:"*",element:<NotFound/>},
]

export default routes