import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from './Card';

const useStyles = makeStyles({
  component: {
    display: 'flex',
    margin: '1.75rem 0',
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    color: '#9911aa',
    textAlign: 'center'
  }
})

const Cards = ( {data: {cases, recovered, deaths, updated}} ) => {
  const classes = useStyles();

  if(!cases){
    return <CircularProgress />;
  }

  return(
    
    <Box className={classes.component}>
      <Typography fontSize={'2rem'} variant={'h2'} className={classes.container} gutterBottom>Coronavirus figures</Typography>
      <Grid container spacing={'0.5rem'} justifyContent="center">
        <Card 
          cardTitle="Confirmed"
          value={cases}
          desc="Total recorded cases"
          lastUpdate={updated}
        />
        <Card
          cardTitle="Recovered"
          value={recovered}
          desc="Cases that recovered"
          lastUpdate={updated}
        />
        <Card
          cardTitle="Deaths"
          value={deaths}
          desc="Cases that led to deaths"
          lastUpdate={updated}
        />
      </Grid>
    </Box>
  );
}

export default Cards;