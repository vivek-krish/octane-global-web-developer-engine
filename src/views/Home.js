import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Home() {
    const [spacing, setSpacing] = React.useState(0);

    const handleChange = (event) => {
        console.log( Number(event.target.value));
        // spacing = Number(event.target.value)
        // setSpacing(Number(event.target.value));
        setSpacing(Number(event.target.value))
    };

    return (
        <div style={{ padding:'10px'}}>

        <Grid container direction="column" justify="center"alignItems="center" spacing={2}>
            <Grid item xs={24}>
                    <Grid container justify="center" spacing={spacing}>
                    {[0,1,2,4,5,6 ].map((value) => (
                        <Grid key={value} item>
                            <Paper  >
                                <Card style={{minWidth:'100px'}}>
                                    <CardContent>
                                        <Typography variant='h7' color="textSecondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            be{"-"}nev{"-"}o{"-"}lent
                                        </Typography>
                                        <Typography variant='h7'  color="textSecondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Paper variant="outlined">
                    <Grid container>
                        <Grid item>
                            <FormLabel>spacing</FormLabel>
                            <RadioGroup
                                name="spacing"
                                aria-label="spacing"
                                value={spacing.toString()}
                                onChange={handleChange}
                                row
                            >
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                                    <FormControlLabel
                                        key={value}
                                        value={value.toString()}
                                        control={<Radio />}
                                        label={value.toString()}
                                    />
                                ))}
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
        </div>

    );
}
