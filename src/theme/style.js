import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root:{
        height:'100vh'
    },
    image:{
        backgroundImage:'url(/imagens/background.jpg)',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'none'
    },
    avatar:{
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
    },
    button:{
        marginTop: theme.spacing(1)
    },
    form:{
        margin: theme.spacing(0,4)
    },
    link:{
        fontSize:18,
        marginLeft: theme.spacing(2)
    }
}));