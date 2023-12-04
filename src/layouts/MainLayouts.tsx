import React, {FC, PropsWithChildren} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components/header";

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