import React from "react";
import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { deleteBackendProject, deleteFrontendProject, deleteFullstackProject, getUser } from "../../../../actions/User";

const ProjectCard = ({ item, i }) => {
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        console.log(i, id)
        if(i===1){
            await dispatch(deleteFrontendProject(id));
        }
        if(i===2){
            await dispatch(deleteFullstackProject(id));
        }
        if(i===3){
            await dispatch(deleteBackendProject(id));
        }
        dispatch(getUser());
    };

    return (
        <Card sx={{ maxWidth: 345 }} style={{flex: "1 1 40rem", margin:"4rem 0 0 0"}}>
            <CardMedia
                sx={{ height: 140 }}
                image={item.image.url}
                title={item.title}
                // style={{background: "black"}}
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" onClick={() => handleDelete(item._id)}>Delete</Button>
                {/* <Button size="large">Learn More</Button> */}
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
