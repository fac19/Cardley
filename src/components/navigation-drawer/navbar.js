import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';

import removeSpaces from '../../utils/remove-spaces';
import authorised from '../../utils/authoriseUser/authorised';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		backgroundColor: 'black',
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#282c34',
		color: 'white',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	icon: {
		color: 'white',
	},
}));
// TODO: title stays in same place while menu expands

export default function Navbar({ currentPage, setCurrentPage }) {
	const classes = useStyles();
	const history = useHistory();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const logoutHandler = () => {
		localStorage.removeItem('auth');
		handleDrawerClose();
		history.push('/landing');
	};

	const loginHandler = () => {
		history.push('/login');
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(
							classes.menuButton,
							open && classes.hide,
						)}
					>
						<MenuIcon data-testid="hamburger" />
					</IconButton>
					<Typography variant="h6" noWrap>
						{currentPage}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton
						className={classes.icon}
						onClick={handleDrawerClose}
					>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					{['Home', 'Practice', 'Your Decks', 'View Profile'].map(
						(text) => (
							<ListItem
								onClick={() => {
									handleDrawerClose();

									setCurrentPage(() => text);
								}}
								button
								component="a"
								href={`/${removeSpaces(text)}`}
								key={text}
							>
								<ListItemText primary={text} />
							</ListItem>
						),
					)}
				</List>
				<Divider />
				<List>
					{authorised() ? (
						<ListItem onClick={logoutHandler} button key="log out">
							<ListItemText primary="Log out" />
						</ListItem>
					) : (
						<ListItem onClick={loginHandler} button key="Log in">
							<ListItemText primary="Log in" />
						</ListItem>
					)}
					{/* {['Log out'].map((text) => (
						<ListItem onClick={logoutHandler} button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					))} */}
				</List>
			</Drawer>
		</div>
	);
}
Navbar.propTypes = {
	currentPage: PropTypes.string,
	setCurrentPage: PropTypes.func,
};

Navbar.defaultProps = {
	currentPage: 'CARDLEY',
	setCurrentPage: () => {}, // TODO: this can't be right...
};
