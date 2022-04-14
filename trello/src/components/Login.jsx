import { Typography, Paper, Container, CssBaseline, TextField, Button, Grid } from '@mui/material'
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react"

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

    useEffect(() => {
        if(localStorage.getItem('username')) {
          navigate("/")
        }
    })

    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs" style={{marginTop: "10%"}}>
                <Paper elevation={12} style={{padding: "10%"}}>
                    <Grid container spacing={4} justify="center">
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="h4" color="textPrimary" align="center">Sign in</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                label = "Username"
                                value = {username}
                                onChange ={handleChangeUsername}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="success" size="large" onClick={login}>Sign in</Button>
                                </Grid>  
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}

export default Login;