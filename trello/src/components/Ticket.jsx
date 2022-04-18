import { Grid, Card, CardHeader, IconButton, CardActions, Modal, CssBaseline } from '@mui/material'
import ArchiveIcon from '@mui/icons-material/Archive';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import InfoIcon from '@mui/icons-material/Info';
import TicketInfo from './TicketInfo';
import React, { useState } from "react";

const Ticket = () => {

    // info
    const [openTicketInfo, setOpenTicketInfo] = useState(false);
    const handleOpenTicketInfo = () => setOpenTicketInfo(true);
    const handleCloseTicketInfo = () => setOpenTicketInfo(false);

    return (
        <>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={12}>
                <Card >
                    <CardHeader
                        titleTypographyProps={{fontSize: "16px"}}
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus ultrices sapien eu viverra. Aenean enim risus, hendrerit non dui non, ornare consectetur ipsum. Vestibulum aliquam ligula sed nisi luctus, ac faucibus tortor aliquam."
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
                            <TicketInfo handleCloseTicketInfo={handleCloseTicketInfo}/>
                        </Modal>
                        <IconButton aria-label="settings" color='primary'>
                            <DriveFileMoveIcon />
                        </IconButton>
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