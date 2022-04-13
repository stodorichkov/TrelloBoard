import { Typography, CssBaseline, Button, Grid, Container, Paper, TextField } from '@mui/material'
import React from 'react'
import Alerts from './Alerts'

class WorkspaceForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            WorkspaceAlreadyExist: null
        }
    }
    
    handleChangeName = (event) => {
        this.setState({name: event.target.value})
    }

    addWorkspace = () => {
        let workspaces = JSON.parse(localStorage.getItem('workspaces'))
        if(!localStorage.getItem('workspaces')) {
            workspaces = {}
        }
        if(workspaces[this.state.name]){
            this.setState({WorkspaceAlreadyExist: "The workspace already exists"})
            return
        }
        workspaces[this.state.name] = {}
        localStorage.setItem("workspaces", JSON.stringify(workspaces))
        
        this.props.handleCloseWorkspaceForm()
    }

    render(){
        return(
            <>
                <CssBaseline />
                <Container maxWidth="xs" style={{marginTop: "10%"}}>
                    <Paper elevation={12} style={{padding: "10%"}}>
                        <Grid container spacing={3} justify="center">
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="h4" color="textPrimary" align="center">Add Workspace</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Alerts err = {this.state.WorkspaceAlreadyExist}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    fullWidth
                                    label = "Workspace name"
                                    value = {this.state.name}
                                    onChange ={this.handleChangeName}
                                    style = {{marginTop: "8%"}}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Grid container justifyContent="center" style = {{marginTop: "8%"}}>
                                    <Grid item>
                                        <Button variant="contained" color="success" size="large" onClick={this.addWorkspace}>Create</Button>
                                    </Grid>  
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </>
        )
    }
}

export default WorkspaceForm