import { Container, CssBaseline } from '@mui/material'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Recents = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('username')) {
          navigate("/login")
        }
    })

    return(
        <>
        <CssBaseline />
        </>
    )
}

export default Recents