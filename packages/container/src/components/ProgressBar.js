import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => {
	return createStyles({
		// make sure our progress bar has some margin top and a width of 100%
		bar: {
			width: '100%',
			'& > * + *': {
				marginTop: theme.spacing(2)
			}
		}
	});
}); 

export default function Progress() {
	const classes = useStyles();
	return (
		<div className={classes.bar}>
			<LinearProgress />
		</div>
	);
}