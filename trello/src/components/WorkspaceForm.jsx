import { Typography, CssBaseline, Button, Grid, Container, Paper, TextField, Stack, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react"
import Alerts from './Alerts'

const WorkspaceForm = React.forwardRef((props, ref) => {
    const [name, setName] = useState(props.oldName)
    let title = ""
    // useEffect(() => {
    //     if(props.workspaceName && props.formPurpose !== "editWorkspace"){
    //         setName("")
    //     }
    // })

    const [workspaceAlreadyExist, setWorkspaceAlreadyExist] = useState(null)
    const handleChangeName = (event) => {
        setName(event.currentTarget.value)
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
        else if (props.formPurpose === "editWorkspace"){
            editWorkspace(workspaces)
        }
        else if (props.formPurpose === "createColumn"){
            addColumn(workspaces)
            return
        }
        else if (props.formPurpose === "editColumn"){
            editColumn(workspaces)
            return
        }

        props.setCurrentWorkspace(workspaces[name])
        props.setWorkspaces(workspaces)
        localStorage.setItem("currentWorkspace", JSON.stringify(workspaces[name]))
        localStorage.setItem("workspaces", JSON.stringify(workspaces))
        
        props.handleCloseWorkspaceForm()
    }

    const addColumn = (workspaces) => {
        if(!workspaces[props.workspaceName]["columns"]){
            workspaces[props.workspaceName]["columns"] = []
        }
        workspaces[props.workspaceName]["columns"].push({"name": name, cards: []})
        props.setCurrentWorkspace(workspaces[props.workspaceName])
        props.setWorkspaces(workspaces)
        localStorage.setItem("currentWorkspace", JSON.stringify(workspaces[props.workspaceName]))
        localStorage.setItem("workspaces", JSON.stringify(workspaces))
        props.handleCloseWorkspaceForm()
    }

    const editColumn = (workspaces) => {
        let columnIndex = workspaces[props.workspaceName]["columns"].findIndex(col => col.name === props.oldName)
        workspaces[props.workspaceName]["columns"][columnIndex]["name"] = name
        props.setCurrentWorkspace(workspaces[props.workspaceName])
        props.setWorkspaces(workspaces)
        localStorage.setItem("currentWorkspace", JSON.stringify(workspaces[props.workspaceName]))
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
        let oldName = props.workspaceName
        workspaces[oldName]["name"] = name
        workspaces[name] = workspaces[oldName]
        delete workspaces[oldName]
    }

    const renderPrimaryText = () => {
        if (props.formPurpose === "new"){
            title = "Workspace name"
            return <Typography variant="h4" color="textPrimary" align="center">Add workspace</Typography>
        }
        else if (props.formPurpose === "editWorkspace"){
            title = "Workspace name"
            return <Typography variant="h4" color="textPrimary" align="center">Edit workspace</Typography>
        }
        else if (props.formPurpose === "createColumn"){
            title = "Column name"
            return <Typography variant="h4" color="textPrimary" align="center">Add column</Typography>
        }
        else if (props.formPurpose === "editColumn"){
            title = "Column name"
            return <Typography variant="h4" color="textPrimary" align="center">Edit column</Typography>
        }
        
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
                            {renderPrimaryText()}
                        </Grid>
                        { workspaceAlreadyExist ? (
                            <Grid item xs={12} sm={12} md={12}>
                                <Alerts err = {workspaceAlreadyExist}/>
                            </Grid>
                        ): null}
                        
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label = {title}
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