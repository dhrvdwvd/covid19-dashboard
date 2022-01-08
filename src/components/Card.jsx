import { Box, Typography, Grid, CardContent, Card } from '@mui/material';
import CountUp from 'react-countup';


const CardComponent = ({cardTitle, value, desc, lastUpdate}) => {

  return (
    <Grid component={Card} style={{margin: '1rem', borderBottom: '5px solid orange'}}>
      <Box style={{background:'#eee'}}>
        <Typography style={{textAlign:'center', fontSize: '1.5rem', color:'#888'}}>{cardTitle}</Typography>
      </Box>
      <CardContent>
        <Typography style={{textAlign:'center', marginBottom: '0.75rem', fontSize: '2rem'}}>
          <CountUp
            start={0}
            end={value}
            duration={2}
            separator=','
          />
        </Typography>
        <Typography width={'100%'} color="textSecondary">{desc}</Typography>
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
      </CardContent>
    </Grid>
  );
}

export default CardComponent