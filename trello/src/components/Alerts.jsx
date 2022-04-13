import Alert from '@mui/material/Alert';

const Alerts = (props) => {
    if(props.err){
        return <Alert severity="error">{props.err}</Alert> 
    }     
}

export default Alerts