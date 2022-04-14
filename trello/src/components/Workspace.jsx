import { Container, CssBaseline } from '@mui/material'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";


const Workspace = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('username')) {
          navigate("/login")
        }
    })

    return (
        <>
            <CssBaseline />
            <Container maxWidth="100%">
                <h1>{props.currentWorkspace["name"]?("Current workspace is:" + props.currentWorkspace["name"]) : "There is no choosen worspace"}</h1>
            </Container>
        </>
    )
}

export default Workspace