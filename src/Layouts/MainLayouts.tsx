import React from 'react';
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {MoviesPage} from "../pages/MoviesPage";

const MainLayouts = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <MoviesPage/>
        </div>
    );
};

export {MainLayouts};