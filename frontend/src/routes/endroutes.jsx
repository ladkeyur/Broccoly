import Endlayout from "../layout/endlayout";
import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus"
import Shop from "../pages/Shop"
import Service from "../pages/Service"
import Product from "../pages/product";
import Contactus from "../pages/Contactus";
import Singup from "../pages/sing up/singup";
import { Route, Routes } from "react-router-dom";

const EndRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Endlayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/Product" element={<Product/>}/>
                <Route path="/Shop" element={<Shop/>}/>
                <Route path="/Aboutus" element={<Aboutus/>}/>
                <Route path="/Service" element={<Service/>}/>
                <Route path="/Contactus"element={<Contactus/>}/>
                <Route path="/Singup" element={<Singup/>}/>
            </Route>
        </Routes>
    )
}
export default EndRoutes