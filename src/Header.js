import { makeStyles, Toolbar, Button, AppBar } from "@material-ui/core";
import React from "react";
import { Marginer } from "../src/components/marginer";

const headerData = [
    {
        label: "Home",
        path: "/home"
    },
    {
        label: "Login",
        path: "/login"
    },
    {
        label: "Logout",
        path: "/logout"

    }
];

const useStyles = makeStyles(() =>({

    header: {
        paddingLeft: "2vw",
        backgroundColor: "#460979"
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
        fontSize:"2vw"
    },
    menuButton: {
        color: "#FFFEFE",
        textDecoration: 'none',
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "1.8vw",
        marginLeft: "3vw",
        textAlign:"right",
        fontSize:"1vw"
    },
    logoText: {
        textDecoration: "none",
        color: "#FFFEFE"
    }
}))

function Header(props) {
const {header, menuButton} = useStyles();
const displayDesktop = () => {
    return (
        <Toolbar>
            {getMenuButtons()}
        </Toolbar>
    )
};

    const getMenuButtons = () => {
        return headerData.map(({label, path}) => {
            return(
                <Button
                {...{
                    key: label,
                    color: "inherit",
                    className: menuButton
                }}
                onClick={(e) => handleLogout(path)}
                >
                    <a style={{ textdecoration: 'none', color: '#FFFEFE' }} href={path}>
                        {label}

                    </a>
                </Button>
            )
        }
        )
    }
    //handle click event of logout button
    const handleLogout = () => {
        props.history.push('/')
    }

    return (
        <header>
          <AppBar className={header}>
              {displayDesktop()}
              </AppBar>
          <Marginer direction="vertical" margin="5em" />
          
        </header>
    )
}

export default Header;