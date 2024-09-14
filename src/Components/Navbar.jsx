import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { CellTower } from "@mui/icons-material";
// import Signup from "./Signup";


const Navbar = ({isAuthenticated}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Signup",
      icon: <CellTower />, // Icon can be anything, not the Signup component itself
      path: "/signup", // Ensure the path is correct
      authRequired: false
    },
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/home",
      authRequired: true
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/about",
      authRequired: true
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      path: "/testimonials",
      authRequired: true
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact",
      authRequired: true
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      path: "/cart",
      authRequired: true
    },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpenMenu(false); // Close the menu after clicking
  };
   
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item, index) => (
         
          (!item.authRequired || isAuthenticated) || (
            <NavLink 
              key={index} 
              to={item.path} 
              onClick={() => handleScroll(item.path.substring(1))}
            >
              {item.text}
            </NavLink>
          )
        ))}

        <BsCart2 className="navbar-cart-icon" />
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding onClick={() => handleScroll(item.path.substring(1))}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
