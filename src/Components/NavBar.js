import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../assets/logo2-bro.png";
import { Link } from "react-router-dom";
import EcommerceContext from "../Context/EcommerceContext";
import { IconButton } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { makeStyles } from '@material-ui/core/styles';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';




const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        marginBottom: "7rem",
    },
    appBar: {
        background: "rgb(17,1,3)",
      
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        marginLeft: theme.spacing(2),
    },
    image: {
        marginRight: "1rem",
   
      
    }
}));

export function Hook() {
}

const NavBar = () => {

    const classes = useStyles();

    return (
        <EcommerceContext.Consumer>
            {context =>
                <div className={classes.root}>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                   
                            <Link to="/">
                                <IconButton
                                    edge="start"
                                    className={classes.AppBar}
                                    color="inherit"
                                    aria-label="menu">
                                    <img src={logo}
                                        alt=""
                                        className={classes.image}
                                        width="50px" />
                                </IconButton>
                            </Link>
                            {context.userLogin &&
                                <>
                                    Catalogo
                                    <Link to="/catalogo">
                                        <AddCircleOutlineOutlinedIcon
                                            id="catalogo_id"
                                            edge="start"
                                            className={classes.AppBar}
                                            style={{ color: '#FFFFFF' }}
                                            aria-label="menu"
                                            size="large">
                                            <>
                                            </>
                                        </AddCircleOutlineOutlinedIcon>
                                    </Link>
                                </>

                            }
                            {
              context.userInfo &&
              <div id="Hola_id">Hola {context.userInfo.nombre}</div> 
            }

                            <h1 style={{ flex: 1, justifyContent: "center", alignItems: "center" }} id="titulo_id">martiend@</h1>
                            <>
                                {
                                    !context.userLogin &&
                                    <Link to="/alta">
                                        <HowToRegIcon edge="start"
                                            className={classes.AppBar}
                                            id="alta_id"
                                            style={{ color: '#FFFFFF' }}
                                            aria-label="menu">
                                            <>
                                            </>
                                        </HowToRegIcon>
                                    </Link>
                                }
                                Registrarse<SwapHorizIcon id="flechitas_id"></SwapHorizIcon> Ingresar
                                <Link to="/ingresar">
                                    <AccountCircleOutlinedIcon
                                        edge="start"
                                        className={classes.AppBar}
                                        id="ingresar_id"
                                        style={{ color: '#FFFFFF' }}
                                        aria-label="menu">
                                            
                                        <>
                                        </>
                                    </AccountCircleOutlinedIcon>
                                </Link>
 </>
</Toolbar>
                    </AppBar>
                </div>

            }
        </EcommerceContext.Consumer>
    );
}

export default NavBar;