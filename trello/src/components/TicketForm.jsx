import { Typography, CssBaseline, Button, Grid, Container, Paper, TextField, Stack, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from "react"
import Alerts from './Alerts'

const TicketForm = React.forwardRef((props, ref) => {
    const [name, setName] = useState('')
    const [description, setDescription] =  useState('')
    const [alert, setAlert] = useState('')

    const addThicket = () => {
        if(name === "" || description === "") {
            setAlert("Form must be completed")
            return
        }
        if(props.column[name]) {
            setAlert("The workspace already exists")
            return
        }
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
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="success" size="large" onClick={addThicket}>Create</Button>
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