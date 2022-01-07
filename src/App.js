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
  header: {
    width: 300,
    textAlign: 'center',
    fontSize: '1.5rem',
    padding: '1rem',
    margin: '0.5rem 0 0 0',
    backgroundColor: '#f9f9f9',
    color: '#111',
    borderRadius: '1rem'
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
    console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
    console.log(fetchedData);
  }
  render() {
    const { data } = this.state;
    return (
      <Box className={this.props.classes.container}>
        <Box className={this.props.classes.header}>COVID19 PANDEMIC</Box>
        <Typography fontSize={'0.75rem'} className={this.props.classes.lastUpdated}>Last Updated on: {data.updated && new Date(data.updated).toDateString()} </Typography>
        <img style={{width:350, marginBottom:'1rem'}} src={logo} alt={"Covid"} />
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} />
      </Box>
    );
  }
}
export default withStyles(style)(App);
