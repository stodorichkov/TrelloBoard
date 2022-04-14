import { Typography, Paper, Container, CssBaseline, TextField, Button, Grid, Stack, IconButton, Divider } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react"
const Column = (props) => {
    return (
        <>
        <CssBaseline />
                <Paper elevation={1} style={{padding: "1%"}}>
                    <Grid container spacing={4} justifyContent="center"  sx={{width: 300}}>
                        <Grid item xs={12} sm={12} md={12}>
                            <Stack direction="row" justifyContent="space-between" alignItems="stretch" spacing={0}>
                                <Typography variant="h6" color="textPrimary">Sign in</Typography>
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>
                            </Stack>
                            <Divider />
                        </Grid>
                    </Grid>
                </Paper>
        </>
    )
}

export default Column