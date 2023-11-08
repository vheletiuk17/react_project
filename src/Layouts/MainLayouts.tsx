import React from 'react';

import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import css from './MainLayouts.module.css'

const MainLayouts = () => {
    return (

        <div className={css.MainLayouts}>
            <Header/>
            <Outlet/>

        </div>
    );
};

export {MainLayouts};