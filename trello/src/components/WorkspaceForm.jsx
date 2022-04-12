import { Typography, CssBaseline, Button, Grid, Container, Paper, TextField } from '@mui/material'
import { useState } from "react"

const WorkspaceForm = (props) => {
    const [name, setName] = useState('')

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const addWorkspace = () => {
        props.handleCloseWorkspaceForm()
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs" style={{marginTop: "10%"}}>
                <Paper elevation={12} style={{padding: "10%"}}>
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="h4" color="textPrimary" align="center">Add Workspace</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label = "Workspace name"
                                value = {name}
                                onChange ={handleChangeName}
                                style = {{marginTop: "8%"}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container justifyContent="center" style = {{marginTop: "8%"}}>
                                <Grid item>
                                    <Button variant="contained" color="success" size="large" onClick={addWorkspace}>Create</Button>
                                </Grid>  
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}

export default WorkspaceForm