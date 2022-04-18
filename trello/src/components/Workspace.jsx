import { CssBaseline, Button, Stack, Typography, IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Column from './Column';


const Workspace = (props) => {
    const [boardMenue, setBoardMenue] = useState(null)
    const isOpen = Boolean(boardMenue);

    const handleClickBoardMenue = (event) => {
        setBoardMenue(event.currentTarget);
    };

    const handleCloseBoardMenue = () => {
        setBoardMenue(null);
    };


    const navigate = useNavigate();
    

    useEffect(() => {
        if(!localStorage.getItem('username')) {
          navigate("/login")
        }
    })

    return (
        <>
            <CssBaseline />
            <Stack direction="row" spacing={0} justifyContent="center" style={{marginTop: "2%"}}>
                { props.currentWorkspace["name"] ? (
                    <>
                        <Typography variant="h4" color="textPrimary" align="center">{("Workspace: " + props.currentWorkspace["name"])}</Typography>
                        <IconButton 
                            id="board-button"
                            aria-controls={isOpen ? 'board-menue' : undefined}
                            aria-haspopup="true"
                            aria-expanded={isOpen ? 'true' : undefined}
                            onClick={handleClickBoardMenue}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="board-menue"
                            anchorEl={boardMenue}
                            open={isOpen}
                            onClose={handleCloseBoardMenue}
                            aria-labelledby="board-button"
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <AddCircleIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Add column</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <EditIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Edit board</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <RemoveCircleIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Delete board</ListItemText>
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Typography variant="h4" color="textPrimary" align="center">There is no choosen worspace</Typography>
                )}
            </Stack>
            <Stack direction="row" justifyContent="flex-start" alignItems="stretch" spacing={2} sx={{padding: "1%", overflow: "auto"}} >
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
            </Stack>  
        </>
    )
}

export default Workspace