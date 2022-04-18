import { CssBaseline, Button, Stack, Typography, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Divider, Grid, Paper } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from "react"
import Ticket from './Ticket';

const Column = (props) => {
    const [columnMenue, setColumnMenue] = useState(null)
    const isOpen = Boolean(columnMenue);

    const handleColumnMenue = (event) => {
        setColumnMenue(event.currentTarget);
    };

    const handleCloseColumnMenue = () => {
        setColumnMenue(null);
    };

    return (
        <>
            <CssBaseline />
            <Paper elevation={6} sx={{ border: 1, padding: "1%", backgroundColor: "#eeeeee"}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h6" color="textPrimary">Sign in</Typography>
                    <IconButton 
                        id="column-button"
                        aria-controls={isOpen ? 'column-menue' : undefined}
                        aria-haspopup="true"
                        aria-expanded={isOpen ? 'true' : undefined}
                        onClick={handleColumnMenue}
                    >
                        <MoreVertIcon />
                    </IconButton> 
                    <Menu
                        id="column-menue"
                        anchorEl={columnMenue}
                        open={isOpen}
                        onClose={handleCloseColumnMenue}
                        aria-labelledby="column-button"
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <AddCircleIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Add ticket</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <EditIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Edit column</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <RemoveCircleIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Delete column</ListItemText>
                        </MenuItem>
                    </Menu>
                </Stack>
                <hr/>
                <Grid container  direction="row" spacing={3} sx={{width: 350, maxHeight: 640, overflow: "auto", marginTop: "2%"}}>
                    <Ticket />
                    <Ticket />
                    <Ticket />
                </Grid>
            </Paper>
        </>
    )
}

export default Column