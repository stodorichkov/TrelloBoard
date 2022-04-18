import { Typography, CssBaseline, Button, Grid, Container, Paper, TextField, Stack, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from "react"
import Alerts from './Alerts'

const TicketForm = React.forwardRef((props, ref) => {
    const [name, setName] = useState('')
    const [description, setDescription] =  useState('')
    const [datetime, setDatetime] = useState(new Date())
    const [alert, setAlert] = useState('')

    const addTicket = () => {
        if(name === "" || description === "") {
            setAlert("Form must be completed")
            return
        }
        if(props.column[name]) {
            setAlert("The workspace already exists")
            return
        }
        let workspaces = JSON.parse(localStorage.getItem('workspaces'))
        let currWorkspace = JSON.parse(localStorage.getItem('currentWorkspace'))
        let newTicket = {"name": name, "description":description, "datetime": datetime}
        console.log("column: ", props.column)
        let columnIndex = workspaces[currWorkspace["name"]]["columns"].findIndex(col => col.name === props.column["name"])
        console.log("column index: ", columnIndex)
        console.log(workspaces[currWorkspace["name"]]["columns"][columnIndex]["cards"])
        workspaces[currWorkspace["name"]]["columns"][columnIndex]["cards"].push(newTicket)
        currWorkspace = workspaces[currWorkspace["name"]]
        console.log("currWorkspace: ", currWorkspace)
        props.setCurrentWorkspace(currWorkspace)
        props.setWorkspaces(workspaces)
        localStorage.setItem("currentWorkspace", JSON.stringify(currWorkspace));
        localStorage.setItem("workspaces", JSON.stringify(workspaces));




        props.handleCloseTicketForm()
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
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
                        <IconButton size="large" onClick={props.handleCloseTicketForm}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </Stack>
                    <Grid container spacing={5} justifyContent="center">
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="h4" color="textPrimary" align="center">Add Ticket</Typography>
                        </Grid>
                        { alert ? (
                            <Grid item xs={12} sm={12} md={12}>
                                <Alerts err = {alert}/>
                            </Grid>
                        ): null}
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label = "Ticket name"
                                value = {name}
                                onChange ={handleChangeName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label = "Ticket description"
                                value = {description}
                                onChange ={handleChangeDescription}
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="success" size="large" onClick={addTicket}>Create</Button>
                                </Grid>  
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
})

export default TicketForm