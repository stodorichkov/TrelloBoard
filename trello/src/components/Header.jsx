import { Typography, CssBaseline, Button, Grid, AppBar, Toolbar, Menu, MenuItem, Modal } from '@mui/material'
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import WorkspaceForm from './WorkspaceForm';

const Header = (props) => {
    // list of workspaces
    const [boardDD, setBoardDD] = useState(null)
    const navigate = useNavigate();
    const isOpen = Boolean(boardDD);

    const handleClickPopUp = (event) => {
        setBoardDD(event.currentTarget);
    };

    const handleClose = () => {
        setBoardDD(null);
    };

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
                            <Menu
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
                            >
                                 <WorkspaceForm handleCloseWorkspaceForm={handleCloseWorkspaceForm}/>
                            </Modal>
                        </Grid>
                    </>
        }
    }

    return(
        <>
        <CssBaseline />
        <AppBar position="relative" color="primary">
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