import { Typography, Paper, Container, CssBaseline, TextField, Button, Grid, AppBar, Toolbar, Menu, MenuItem, Link } from '@mui/material'
import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";



const Header = () => {
    const [boardDD, setBoardDD] = React.useState(null)
    const navigate = useNavigate();
    const isOpen = Boolean(boardDD);
    

    const handleClickPopUp = (event) => {
        setBoardDD(event.currentTarget);
    };

    const handleClose = () => {
        setBoardDD(null);
    };

    const handleClickRecents = () => {
        navigate("/recents")
    }

    return(
        <>
        <CssBaseline />
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography variant="h6" >
                    Trello
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                    id="demo-positioned-button"
                    aria-controls={isOpen ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isOpen ? 'true' : undefined}
                    onClick={handleClickPopUp}
                    style={{color: "white"}}
                    >
                        Workspaces
                    </Button>
                </Grid>
                <Grid item>

                    <Button
                    onClick={handleClickRecents}
                    style={{color: "white"}}
                    >
                        Recents
                    </Button>
                </Grid>
            
            </Grid>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={boardDD}
                open={isOpen}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        </>
    )
}

export default Header