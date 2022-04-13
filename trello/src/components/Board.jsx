import { Container, CssBaseline } from '@mui/material'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";


const Board = () => {
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
                <h1>affaf</h1>
            </Container>
        </>
    )
}

export default Board