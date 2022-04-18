import { Typography, Grid, Card, CardContent, CardHeader, IconButton, CardActions, Button, CssBaseline } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Ticket = () => {
    return (
        <>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={12}>
                <Card >
                    <CardHeader
                        action={
                        <IconButton aria-label="settings" >
                            <MoreVertIcon />
                        </IconButton>
                        }
                        titleTypographyProps={{fontSize: "16px"}}
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus ultrices sapien eu viverra. Aenean enim risus, hendrerit non dui non, ornare consectetur ipsum. Vestibulum aliquam ligula sed nisi luctus, ac faucibus tortor aliquam."
                    />
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}

export default Ticket