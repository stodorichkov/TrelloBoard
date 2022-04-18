import { CssBaseline, Button, Stack, Typography, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Modal, Grid, Paper } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from "react"
import Ticket from './Ticket';
import TicketForm from './TicketForm';

const Column = (props) => {
    // menue
    const [columnMenue, setColumnMenue] = useState(null)
    const isOpen = Boolean(columnMenue);

    const handleColumnMenue = (event) => {
        setColumnMenue(event.currentTarget);
    };
    const handleCloseColumnMenue = () => {
        setColumnMenue(null);
    };

    // form
    const [openTicketForm, setOpenTicketForm] = useState(false);
    const handleOpenTicketForm = () => {
        handleCloseColumnMenue()
        setOpenTicketForm(true);
    }
    const handleCloseTicketForm = () => setOpenTicketForm(false);
    return (
        <>
            <CssBaseline />
            <Paper elevation={6} sx={{ border: 1, padding: "1%", backgroundColor: "#eeeeee"}}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h6" color="textPrimary">{props.column["name"]}</Typography>
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
                        <MenuItem onClick={handleOpenTicketForm}>
                            <ListItemIcon>
                                <AddCircleIcon fontSize="small"/>
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
                                <ArchiveIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Archive column</ListItemText>
                        </MenuItem>
                    </Menu>
                    <Modal
                        open={openTicketForm}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <TicketForm handleCloseTicketForm={handleCloseTicketForm} setCurrentWorkspace={props.setCurrentWorkspace} setWorkspaces={props.setWorkspaces} column={props.column}/>
                    </Modal>
                </Stack>
                <hr/>
                <Grid container  direction="row" spacing={3} sx={{width: 350, maxHeight: "65vh", overflow: "auto", marginTop: "2%"}}>
                    <Ticket />
                    <Ticket />
                    <Ticket />
                </Grid>
            </Paper>
        </>
    )
}

export default Column