import Slider from '@material-ui/core/Slider';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 300,
		height: 300,
	},
	margin: {
		height: theme.spacing(3),
	},
	slider: {
		width: 275,
		height: 300,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	cardButton: {
		width: '80%',
	},
}));

const PrettoSlider = withStyles({
	root: {
		color: '#52af77',
		height: 8,
	},
	thumb: {
		'height': 24,
		'width': 24,
		'backgroundColor': '#fff',
		'border': '2px solid currentColor',
		'marginTop': -8,
		'marginLeft': -12,
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
	},
	track: {
		height: 8,
		borderRadius: 4,
	},
	rail: {
		height: 8,
		borderRadius: 4,
	},
})(Slider);

export { PrettoSlider, useStyles };
