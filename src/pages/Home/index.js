import React from "react";
import Header from "./components/Header";
import { makeStyles } from '@material-ui/core/styles';
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
// import './style.css'

const useStyles = makeStyles({
    root:{
        display:'flex',
        flexDirection:'column',
    },
    main:{
        height: '100vh',
        padding:24,
    },
    toolbar:{
        minHeight: 64,
    }
})

export default function Home(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth='lg'>
                    <Box display='flex'>
                        <Navbar/>
                        <Feed/>
                    </Box>
                </Container>
            </main>
        </div>
    );
}