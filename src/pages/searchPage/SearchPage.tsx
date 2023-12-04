import React from 'react';

import {Searchs} from "../../components/searchConteiner/searchs";
import {Outlet} from "react-router-dom";


const SearchPage = () => {
    return (
        <div>

            <Outlet/>
            <Searchs/>
        </div>
    );
};

export {SearchPage};