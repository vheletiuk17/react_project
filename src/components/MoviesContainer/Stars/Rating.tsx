import React, {FC} from 'react';
import {Box, Rating, Typography} from '@mui/material'

interface IProps{
    value:number
}
const RatingStars:FC<IProps> = ({value}) => {

    return (
        <Box sx={{
            '& > legend':{ mt:2},
            '.MuiRating-iconEmpty':{
                color:'yellow'
        }
        }}>
            <Typography component='legend'></Typography>
            <Rating name='half-rating-read' defaultValue={value} precision={0.1} readOnly max={10}/>
        </Box>
    );
};

export {RatingStars};