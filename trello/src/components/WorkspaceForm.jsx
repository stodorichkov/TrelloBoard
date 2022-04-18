import { Typography, CssBaseline, Button, Grid, Container, Paper, TextField, Stack, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from "react"
import Alerts from './Alerts'

const WorkspaceForm = React.forwardRef((props, ref) => {
    const [name, setName] = useState('')

    useEffect(() => {
        if (props.oldName) {
            setName(props.oldName)
        }
    })
    
    //const [oldName, setOldName] = useState(props.oldName)
    const [workspaceAlreadyExist, setWorkspaceAlreadyExist] = useState(null)
    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const checkFormPurpose = () => {
        
        let workspaces = JSON.parse(localStorage.getItem('workspaces'))
        if(!localStorage.getItem('workspaces')) {
            workspaces = {}
        }
        if(name === "") {
            setWorkspaceAlreadyExist("Form must be completed")
            return
        }
        if (props.formPurpose === "new"){
            addWorkspace(workspaces)
        }
        else if (props.formPurpose === "edit"){
            editWorkspace(workspaces)
        }
        props.setCurrentWorkspace(workspaces[name])
        props.setWorkspaces(workspaces)
        localStorage.setItem("currentWorkspace", JSON.stringify(workspaces[name]))
        localStorage.setItem("workspaces", JSON.stringify(workspaces))
        
        props.handleCloseWorkspaceForm()
    }

    const addWorkspace = (workspaces) => {
        if(workspaces[name]){
            setWorkspaceAlreadyExist("The workspace already exists")
            return
        }
        workspaces[name] = {"name": name}
        
        
    }

    const editWorkspace = (workspaces) => {
        workspaces[props.oldName]["name"] = name
        workspaces[name] = workspaces[props.oldName]
        delete workspaces[props.oldName]
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs" style={{marginTop: "10%"}}>
                <Paper elevation={12} style={{padding: "8%"}}>
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                    >
                        <IconButton size="large" onClick={props.handleCloseWorkspaceForm}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </Stack>
                    <Grid container spacing={5} justifyContent="center">
                        <Grid item xs={12} sm={12} md={12}>
                            {props.oldName
                            ? 
                            <Typography variant="h4" color="textPrimary" align="center">Edit workspace</Typography>
                            :
                            <Typography variant="h4" color="textPrimary" align="center">Add workspace</Typography>
                            }
                        </Grid>
                        { workspaceAlreadyExist ? (
                            <Grid item xs={12} sm={12} md={12}>
                                <Alerts err = {workspaceAlreadyExist}/>
                            </Grid>
                        ): null}
                        
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label = "Workspace name"
                                value = {name}
                                onChange ={handleChangeName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="success" size="large" onClick={checkFormPurpose}>Create</Button>
                                </Grid>  
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
})

export default WorkspaceForm