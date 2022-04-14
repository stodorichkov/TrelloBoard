import { Container, CssBaseline, Grid, Button, Stack, Typography, TextField } from '@mui/material'
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
            <Stack direction="row" spacing={5} justifyContent="center" style={{marginTop: "2%"}}>
                { props.currentWorkspace["name"] ? (
                    <>
                        <Typography variant="h4" color="textPrimary" align="center">{("Workspace: " + props.currentWorkspace["name"])}</Typography>
                        <Button variant="contained" color="success" size="large" >Add column</Button>
                    </>
                ) : (
                    <Typography variant="h4" color="textPrimary" align="center">There is no choosen worspace</Typography>
                )}
            </Stack>
            <Stack direction="row" spacing={5} sx={{borderTop: 2, marginTop: "2%", padding: "1%", background: "red", overflow: "auto"}}>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
                <Typography variant="h4" color="textPrimary" align="center">1</Typography>
                <Typography variant="h4" color="textPrimary" align="center">2</Typography>
            </Stack>
        </>
    )
}

export default Workspace