import React from "react";
import Typography from "@material-ui/core/typography"; 
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useStyles } from "../../theme/style";

function Copyright(){
    return(
        <Typography variant='body2' align='center'>
            {'Copyright © - '}
            <a color='inherit' href='https://https://www.youtube.com/watch?v=LGf2KJg20lg&t=6909s'>
                Alexandre Carvalho -
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

export default function SignIn(){
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid item 
            container 
            direction="column"
            justify='center'
            alignItems="center"
            md={7}
            className={classes.image}>
                 <Typography style={{color:'#fff', fontSize:30, lineHeight:'45px'}}>
                     <strong>Simplificando a forma de conectar desenvolvedores</strong>
                 </Typography>
                 <Typography variant='body2' style={{color:'rgb(255,255,255, 0.7)', marginTop:30, fontSize:15, lineHeight:'30px'}}>
                     Compartilhe seu conhecimento com toda a comunidade de desenvolvedores
                 </Typography>
            </Grid>

            <Grid item md={5}>
                <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant='h6'>
                        Acesso
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='E-mail'
                            name='email'
                            autoComplete='email'
                            autoFocus
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Senha'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                        />
                        <Button fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.button}>
                            Entrar
                        </Button>
                        <Grid container>
                            <Grid item className={classes.link}>
                                <Link>Esqueceu sua Senha?</Link>
                            </Grid>
                            <Grid item className={classes.link}>
                                <Link>Não tem uma conta? Registre-se!</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright/>
                </Box>
            </Grid>
        </Grid>
    )
}



// const useStyles = makeStyles((theme) => ({
//     root:{
//         display:'flex',
//     },
//     left:{
//         background:'blue',
//         height:'100vh',
//         flexBasis:'58%',
//         display:'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems:'center',
//     },
//     right:{
//         background:'yellow',
//         height:'100vh',
//         flexBasis:'42%'
//     },
//     form:{
//         display:'flex',
//         flexDirection:'column',
//         margin: '64px 32px',
//         alignItems:'center'
//     }
// }));

// export default function SignIn(){
//     const classes = useStyles();

//     return(

//         //Flex Container//
//         <div className={classes.root}>

//             {/*flex Item*/}
//             <div className={classes.left}>
//                 <Typography style={{color:'#fff', fontSize:30, lineHeight:'45px'}}>
//                     <strong>Simplificando a forma de conectar desenvolvedores</strong>
//                 </Typography>
//                 <Typography variant='body2' style={{color:'rgb(255,255,255, 0.7)', marginTop:30, fontSize:15, lineHeight:'30px'}}>
//                     Compartilhe seu conhecimento com toda a comunidade de desenvolvedores
//                 </Typography>
//             </div>

//             {/*flex Item*/}
//             <div className={classes.right}>
//                 <form className={classes.form}>
//                     <h3>Acesso</h3>
//                     <input type='text'></input>
//                     <input type='text'></input>
//                 </form>
//             </div>
//         </div>
//     )
// }