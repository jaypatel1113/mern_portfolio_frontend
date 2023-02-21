import React from "react";
import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { deleteEducationTimeline, deleteWorkTimeline, getUser } from "../../../../actions/User";

const TimeLine = ({ item, i }) => {
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        console.log(i, id)
        if(i===1){
            await dispatch(deleteEducationTimeline(id));
        }
        if(i===2){
            await dispatch(deleteWorkTimeline(id));
        }
        dispatch(getUser());
    };

    return (
        <Card sx={{ maxWidth: 345 }} style={{flex: "1 1 40rem", margin:"4rem 0 0 0"}}>
            <CardMedia
                sx={{ height: 140 }}
                title={item.title}
                // style={{background: "black"}}
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {item.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {item.startdate}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {item.enddate}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" onClick={() => handleDelete(item._id)}>Delete</Button>
                {/* <Button size="large">Learn More</Button> */}
            </CardActions>
        </Card>
    );
};

export default TimeLine;
