import {Outlet} from 'react-router-dom'
import Header from '../pages/header'
import Footer from '../pages/Footer'

const Endlayout = () =>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Endlayout