import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostCard from "../../../components/PostCard";

const useStyles = makeStyles((theme) =>({
    root:{

    }
}));

const posts = [
    {
        id: 1,
        author:{
        id:1,
        name: 'Lucas Nhini',
        username: 'lucas',
        avatar: '/imagens/avatars/avatar_1.jpeg'
        },
        title:'Criando um app do zero com react',
        date:'April 7, 2020',
        description: 'Fala galera',
        hashtags:'#dotnet',
        image:'/imagens/posts/post9.jpeg'
    },
    {
        id: 2,
        author:{
        id:1,
        name: 'Lucas Nhini',
        username: 'lucas',
        avatar: '/imagens/avatars/avatar_1.jpeg'
        },
        title:'Comparação de apps',
        date:'May 10, 2020',
        description: 'Vish',
        hashtags:'#react',
        image:'/imagens/posts/post8.png'
    },
];

export default function Feed(){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            {
            posts.map(post => (
                <PostCard key={post.id} post={post}/>
            ))
            }
        </div>
    )
}