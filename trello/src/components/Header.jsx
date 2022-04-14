import { Typography, CssBaseline, Button, Grid, AppBar, Toolbar, Menu, MenuItem, Modal} from '@mui/material'
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import WorkspaceForm from './WorkspaceForm';

const Header = (props) => {
    // list of workspaces
    const [boardDropDown, setBoardDropDown] = useState(null)

    const navigate = useNavigate();
    const isOpen = Boolean(boardDropDown);

    const handleClickPopUp = (event) => {
        if(Object.keys(props.workspaces).length !== 0) {

            setBoardDropDown(event.currentTarget);
        }
    };

    const handleClose = () => {
        setBoardDropDown(null);
    };

    const handleChoosenBoard = (event) => {
        let workspaceName = event.currentTarget.innerText
        let currWorkspace = props.workspaces[workspaceName]
        props.setCurrentWorkspace(currWorkspace)
        localStorage.setItem("currentWorkspace", JSON.stringify(currWorkspace))
        navigate("/")
        handleClose()
    }

    // oppen recents
    const handleClickRecents = () => {
        navigate("/recents")
    }

    // new workspace
    const [openWorkspaceForm, setOpen] = useState(false);
    const handleOpenWorkspaceForm = () => setOpen(true);
    const handleCloseWorkspaceForm = () => setOpen(false);

    const renderButtons = () => {
        if (localStorage.getItem('username')) {
            return  <>
                <Grid item>
                    <Button
                        id="basic-button"
                        aria-controls={isOpen ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={isOpen ? 'true' : undefined}
                        onClick={handleClickPopUp}
                        style={{color: "white"}}
                        >
                            Workspaces
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={boardDropDown}
                        open={isOpen}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        { Object.keys(props.workspaces).map(name => <MenuItem onClick={handleChoosenBoard}>{name}</MenuItem>) }
                        
                    </Menu>
                </Grid>
                <Grid item>
                    <Button
                    onClick={handleClickRecents}
                    style={{color: "white"}}
                    >
                        Recents
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                    onClick={handleOpenWorkspaceForm}
                    style={{color: "white"}}
                    >
                        Add Workspace
                    </Button>
                    <Modal
                    open={openWorkspaceForm}
                    onClose={handleCloseWorkspaceForm}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                        <WorkspaceForm handleCloseWorkspaceForm={handleCloseWorkspaceForm} setWorkspaces={props.setWorkspaces} setCurrentWorkspace={props.setCurrentWorkspace}/>
                    </Modal>
                </Grid>
            </>
        }
    }

    return(
        <>
        <CssBaseline />
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography variant="h6" >
                    Trello
                    </Typography>
                </Grid>
                {renderButtons()}
            </Grid>
          </Toolbar>
        </AppBar>
        </>
    )
}

export default Header