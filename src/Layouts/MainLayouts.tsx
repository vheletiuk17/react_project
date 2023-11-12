import React, {FC, PropsWithChildren} from 'react';
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";

interface IProps extends PropsWithChildren{

}
const MainLayouts:FC<IProps> = () => {
   
    return (
        <div>


        <div >
            <Header/>
            <Outlet/>
        </div>
        </div>
    );
};

export {MainLayouts};