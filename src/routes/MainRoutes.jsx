import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import Item from "../pages/Item";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import {Category} from "../pages/Category";



const MainRoutes = () => {
    return(
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<Item />}></Route>
                <Route path="/category/:id" element={<Category></Category>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;