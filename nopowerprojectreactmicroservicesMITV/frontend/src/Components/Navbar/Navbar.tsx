import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/NoPowerLogo.svg';
import IconButton from '@material-ui/core/IconButton';
import { Menu, Search } from '@material-ui/icons';
import SvgIcon from '@material-ui/core/SvgIcon';
import Axios, { AxiosResponse } from 'axios';
import { userContext } from '../../Pages/User/UserContext';



// ^ Styling

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	logoLink: {
		marginRight: theme.spacing(2),
	},
	logoWrapper: {
		width: "65px",
		height: "64px"
	},
	logo: {
		
	},
	menuButton: {
		//marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	header: {
		backgroundColor: "transparent",
	},
	barUpper: {
		backgroundColor: "rgba(33,37,43,.9)", // HEX Code: #21252B
		//backgroundColor: "rgba(150,215,174,.9)", // HEX Code: #1ED760
		backdropFilter: "blur(4px)" // Blurs everything underneath the navbar. I LUV CSS <3
	},
	barLower: {				
		backgroundColor: "rgba(38,42,49,.9)", // HEX Code: #21252B

		backdropFilter: "blur(4px)" // Blurs everything underneath the navbar. I LUV CSS <3
	},
	anchor: {
		color: "white",
		textDecoration: "none"
	},
	list: {
		width: 300
	}
}));

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function NavBar() {

	const ctx = useContext(userContext)

	const logtout = () =>{
		Axios.get("http://server.topper144p.com:3000/logout",{
			withCredentials:true
		}).then((res :AxiosResponse) =>{
			
		}).catch((res :AxiosResponse)=>{

		})
	}




	
	const classes = useStyles();

	const [drawerState, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor: Anchor, open: Boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {

		if(
			event.type === 'keydown' &&
			(
				(event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift'
			)
		) {
			return;
		}
		
		setState( { ...drawerState, [anchor]: open } );
	}

	const logout =() =>{
			
	}

	const productCat = (anchor: Anchor = 'left') => {
		<div className={ classes.list } 
			role="presentation"
			onClick={ toggleDrawer(anchor, false) }
			onKeyDown={ toggleDrawer(anchor, false) }
		>
			<List>
				<ListItem button key="test">
					<ListItemText primary="test"></ListItemText>
				</ListItem>
				
				<ListItem button key="test">
					<ListItemText primary="test"></ListItemText>
				</ListItem>
			</List>
		</div>
	}

	return (
		
		<div className={ classes.root }>
			<AppBar position="fixed" className={ classes.header }>
				<Toolbar className={ classes.barUpper }>
					{/* Header Logo/Link */}
					<Link to="/" className={ classes.logoLink }>
						<SvgIcon className={ classes.logoWrapper }>
							<Logo className={ classes.logo } />
						</SvgIcon>
					</Link>

					{/* Header dynamic title */}
					<Typography variant="h6" className={ classes.title }>
						Dynamisk Titel
					</Typography>

					<Button color="inherit">
						<Link to="/login" className={ classes.anchor }>Log Ind</Link>
					</Button>
					
					<Button color="inherit"> <Search /> </Button>
				</Toolbar>

				<Toolbar className={ classes.barLower }>
					<IconButton onClick={ toggleDrawer('left', true) } edge="start" className={ classes.menuButton } color="inherit" aria-label="Something">
						<Menu /> Produkter
					</IconButton>
					
					<React.Fragment key="left">
						<Drawer anchor="left" open={ drawerState['left'] } onClose={ toggleDrawer('left', false) }>
							{ productCat }
						</Drawer>
					</React.Fragment>

					<Button color="inherit">
						<Link to="/" className={ classes.anchor }>Anbefalet</Link>
					</Button>

					<Button color="inherit">
						<Link to="/" className={ classes.anchor }>Ugens Tilbud</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</div>	
			
	)
}