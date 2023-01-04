import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useTypedSelector } from "../../store/hooks";
import {
  createContact,
  deleteContact,
  editContactDetails,
  getContacts,
} from "../../store/actions/contacts";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FaceRetouchingOffIcon from "@mui/icons-material/FaceRetouchingOff";
import { isTemplateExpression } from "typescript";
import DeleteIcon from "@mui/icons-material/Delete";
import { getContactDetails } from "../../store/slices/contacts";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function ContactList() {
  const dispatch = useAppDispatch();

  const contacts = useSelector((state: any) => state.contacts.contacts);
  const contactDetails = useSelector(
    (state: any) => state.contacts.contactsDetails
  );

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // const [detailsContact, setDetailsContact] = React.useState(contactDetails);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const { contact } = useTypedSelector(state => contact.contactsReducer);

  React.useEffect(() => {
    dispatch(getContacts());
  }, []);

  // React.useMemo(() => {
  //   setDetailsContact(contactDetails);
  //   dispatch(getContacts());
  // }, [contactDetails]);

  const getOneContactDetails = (id: number) => {
    dispatch(getContactDetails(id));
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Contact - Book
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* ================================================================================================ */}
        <List>
          {["Login / Register"].map((text, index) => (
            <Link style={{ textDecoration: "none", color: "gray" }} to="/">
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    {index % 2 === 0 ? <LoginIcon /> : <PersonAddAlt1Icon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
          {/* ================================================================================================ */}
          {["Add"].map((text, index) => (
            <Link style={{ textDecoration: "none", color: "gray" }} to="/add">
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    {index % 2 === 0 ? <PersonAddAlt1Icon /> : <HomeIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
          {/* ================================================================================================ */}
          {["Home"].map((text, index) => (
            <Link style={{ textDecoration: "none", color: "gray" }} to="/">
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    {index % 2 === 0 ? <HomeIcon /> : <LogoutIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
          {/* ================================================================================= */}
          {["Logout"].map((text, index) => (
            <Link style={{ textDecoration: "none", color: "gray" }} to="/">
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    {index % 2 === 0 ? <LogoutIcon /> : <HomeIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        {/* ================================================================================================ */}
        <Divider />
      </Drawer>

      {/* ================  Contact-card START ================= */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Grid
          display="flex"
          justifyContent="center"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
          }}>
          Contact-Book:
        </Grid>

        {contacts
          ? contacts.map((item: any) => (
              <Box display="flex" justifyContent="center">
                <Box width="25%" padding="10px">
                  <Grid
                    display="flex"
                    justifyContent="space-between"
                    bgcolor="lightblue"
                    borderRadius="20px"
                    padding="10px">
                    <Grid display="flex" alignItems="center">
                      <FaceRetouchingNaturalIcon sx={{ fontSize: "35px" }} />
                      <Grid
                        marginLeft="25px"
                        marginTop="10px"
                        marginBottom="10px">
                        <Typography>Name: {item.name}</Typography>
                        <Typography>LastName: {item.lastName}</Typography>
                        <Typography>Phone: {item.phone}</Typography>
                      </Grid>
                    </Grid>

                    <Grid marginTop="7px" display="flex" flexDirection="column">
                      <IconButton
                        aria-label="delete"
                        onClick={() => dispatch(deleteContact(item.id))}>
                        <DeleteIcon />
                      </IconButton>
                      {/* <Button>
                  <DeleteForeverIcon
                    sx={{ fontSize: "40px" }}
                    // onClick={() => dispatch(deleteContact(item.id))}
                  />
                </Button> */}
                      {/* onClick={() => navigate(`/edit/${productDetails.id}`) */}

                      <Button
                        onClick={() =>
                          navigate(`/edit/${getOneContactDetails(item.id)}`)
                        }>
                        <FaceRetouchingOffIcon sx={{ fontSize: "25px" }} />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            ))
          : null}
        {/* <Typography paragraph>{item.name}</Typography>; */}
      </Box>

      {/* ================  Contact-card END ================= */}
    </Box>
  );
}
