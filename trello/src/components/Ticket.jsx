import { Grid, Card, CardHeader, IconButton, CardActions, Modal, CssBaseline, Menu, MenuItem } from '@mui/material'
import ArchiveIcon from '@mui/icons-material/Archive';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import InfoIcon from '@mui/icons-material/Info';
import TicketInfo from './TicketInfo';
import React, { useState } from "react";

const Ticket = (props) => {

    // info
    const [openTicketInfo, setOpenTicketInfo] = useState(false);
    const handleOpenTicketInfo = () => setOpenTicketInfo(true);
    const handleCloseTicketInfo = () => setOpenTicketInfo(false);

    // move menue
    const [moveMenu, setMoveMenu] = useState(null)
    const isOpen = Boolean(moveMenu);

    const handleClickMoveMenu = (event) => {
        setMoveMenu(event.currentTarget);
        // if(Object.keys(props.workspaces).length !== 0) {

        //     setMoveMenue(event.currentTarget);
        // }
    };

    const handleCloseMoveMenu = () => {
        setMoveMenu(null);
    };

    //move
    const move = () => {
        handleCloseMoveMenu()
    }

    //archive
    
    return (
        <>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={12}>
                <Card >
                    <CardHeader
                        titleTypographyProps={{fontSize: "16px"}}
                        title={props.card["name"]}
                    />
                    <CardActions>
                        <IconButton aria-label="settings" color='primary' onClick={handleOpenTicketInfo}>
                            <InfoIcon />
                        </IconButton>
                        <Modal
                        open={openTicketInfo}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                            <TicketInfo handleCloseTicketInfo={handleCloseTicketInfo} card={props.card} column={props.column}/>
                        </Modal>
                        <IconButton 
                            aria-label="settings" 
                            color='primary'
                            id="move-button"
                            aria-controls={isOpen ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={isOpen ? 'true' : undefined}
                            onClick={handleClickMoveMenu}
                        >
                            <DriveFileMoveIcon />
                        </IconButton>
                        <Menu
                            id="move-menu"
                            anchorEl={moveMenu}
                            open={isOpen}
                            onClose={handleCloseMoveMenu}
                            MenuListProps={{
                            'aria-labelledby': 'move-button',
                            }}
                            PaperProps={{
                                style: {
                                maxHeight: 100 * 4.5,
                                minWidth: '13ch',
                                },
                            }}
                        >
                            {/* { Object.keys(props.workspaces).map(name => <MenuItem onClick={handleChoosenBoard} key={name}>{name}</MenuItem>) } */}
                            <MenuItem onClick={move} >fajhjafj</MenuItem>
                        </Menu>
                        <IconButton aria-label="settings" color='primary'>
                            <ArchiveIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}

export default Ticket