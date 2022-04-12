import { Typography, Paper, Container, CssBaseline, TextField, Button, Grid } from '@mui/material'
import { useNavigate} from "react-router-dom";
import React, { useState } from "react"

const Login = () => {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState('')

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const login = () => {
        localStorage.setItem('username', username)
        navigate("/")
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs" style={{marginTop: "8%"}}>
                <Paper elevation={12} style={{padding: "10%"}}>
                    <Typography variant="h4" color="textPrimary" align="center">Sign in</Typography>
                    <TextField
                      fullWidth
                      label = "Username"
                      value = {username}
                      onChange ={handleChangeUsername}
                      style = {{marginTop: "8%"}}
                    />
                    <Grid container justifyContent="center" style = {{marginTop: "8%"}}>
                        <Grid item>
                            <Button variant="contained" color="success" size="large" onClick={login}>Sign in</Button>
                        </Grid>  
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}

export default Login;