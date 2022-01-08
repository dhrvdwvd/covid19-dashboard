import { Component } from 'react';
import { Box, Typography} from '@mui/material';
import { withStyles } from '@mui/styles';
import logo from './img/Covid-Banner-1024x259.jpg';
import Cards from './components/Cards'
import { fetchData, } from './service/api';
import Countries from './components/Countries';
import Chart from './components/Chart';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastUpdated: {
    color: '#992'
  }
}

class App extends Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
  }
  render() {
    const { data } = this.state;
    return (
      <Box className={this.props.classes.container}>
        <img style={{width:350, margin:'1rem 0'}} src={logo} alt={"Covid"} />
        <Typography fontSize={'0.75rem'} className={this.props.classes.lastUpdated}>Last Updated on: {data.updated && new Date(data.updated).toDateString()} </Typography>
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange}/>
        <Chart style={{margin:'1rem 0'}} data={data} />
      </Box>
    );
  }
}
export default withStyles(style)(App);
