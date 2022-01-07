import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip
// );

const Chart = ({data: {cases, recovered, deaths}}) => {
  return (
    <Box width={'75%'} style={{marginTop:'1.5rem'}}>
      {cases?(<Bar
        data = {{
          labels: ['Total', 'Recovered', 'Deaths'],
          datasets: [{
              label: 'Individuals',
              data: [cases, recovered, deaths],
              backgroundColor: [
                  'rgba(0, 0, 255, 0.5)',
                  'rgba(0, 255, 0, 0.5)',
                  'rgba(255, 0, 0, 0.5)',
              ],
          }]
        }}
        options = {{
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: 'Affected individuals',
            },
          },
        }}
      
      />):''}
    </Box>
  )
}

export default Chart;