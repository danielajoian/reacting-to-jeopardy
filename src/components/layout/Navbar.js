import React from "react";
import { Navbar as NavB, Nav } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Badge from "@material-ui/core/Badge";
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <NavB style={NavbarStyle}>
            <Nav variant="pills"  className="pl-5">
                <Nav.Item className="pl-4">
                    <Nav.Link as={Link} to="/about" >
                        <Button variant="contained" color="default" style={AboutStyle}>About</Button>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <NavB.Collapse className="justify-content-end" style={BadgeStyle}>
                <NavB.Text style={BadgeContentStyle}>All-Time score:
                <Badge badgeContent={150} max={50000} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} color={"secondary"}>
                    <StarOutlinedIcon color={"primary"} fontSize={"large"}/>
                </Badge>
                </NavB.Text>
            </NavB.Collapse>
        </NavB>
    )
}

const NavbarStyle = {
    background: 'rgba(224, 224, 224, 0.3)',
}

const AboutStyle = {
    opacity: '100%'
}

const BadgeStyle = {
    paddingRight: '50px'
}

const BadgeContentStyle = {
    paddingRight: '20px',
    paddingLeft: '20px',
    background: 'rgba(224, 224, 224, 1)'
}

export default Navbar;