import { CssBaseline, Button, Stack, Typography, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Modal } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Column from './Column';
import WorkspaceForm from './WorkspaceForm';


const Workspace = (props) => {
    const [boardMenue, setBoardMenue] = useState(null)
    const [openWorkspaceForm, setOpenForm] = useState(false);
    const handleOpenWorkspaceForm = () => {
        handleCloseBoardMenue()
        setOpenForm(true);
    }
    const handleCloseWorkspaceForm = () => setOpenForm(false);
    const isOpenBoard = Boolean(boardMenue);
    const isOpenForm = Boolean(openWorkspaceForm);

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
                            aria-controls={isOpenBoard ? 'board-menue' : undefined}
                            aria-haspopup="true"
                            aria-expanded={isOpenBoard ? 'true' : undefined}
                            onClick={handleClickBoardMenue}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="board-menue"
                            anchorEl={boardMenue}
                            open={isOpenBoard}
                            //onClick={handleCloseBoardMenue}
                            onClose={handleCloseBoardMenue}
                            aria-labelledby="board-button"
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <AddCircleIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Add column</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleOpenWorkspaceForm}>
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
                        <Modal
                            open={isOpenForm}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                            <WorkspaceForm handleCloseWorkspaceForm={handleCloseWorkspaceForm} setWorkspaces={props.setWorkspaces} setCurrentWorkspace={props.setCurrentWorkspace} formPurpose={"edit"} oldName={props.currentWorkspace["name"]}/>
                        </Modal>
                    </>
                ) : (
                    <Typography variant="h4" color="textPrimary" align="center">There is no choosen worspace</Typography>
                )}
            </Stack>
            <Stack direction="row" justifyContent="flex-start" alignItems="stretch" spacing={3} sx={{padding: "1%", overflowX: "auto"}} >
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