import { CssBaseline, Button, Stack, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Column from './Column';


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
            <Stack direction="row" justifyContent="flex-start" alignItems="stretch" spacing={2} sx={{marginTop: "2%", padding: "1%"}} >
                <Column/>
                <Column/>
            </Stack>  
        </>
    )
}

export default Workspace