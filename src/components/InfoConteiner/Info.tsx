import React, {FC} from 'react';
import {IInfo} from "../../interface/infoInterface";

interface IProps{
    info:IInfo
}
const Info:FC<IProps> = ({info}) => {
    const {backdrop_path,original_title,overview,vote_average} = info;

    return (
        <div>
            <div>{backdrop_path}</div>
            <div>{original_title}</div>
            <div>{overview}</div>
            <div>{vote_average}</div>
        </div>
    );
};

export {Info};