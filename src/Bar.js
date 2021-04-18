import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Valorant', 'CS-Global Offensive', 'Rainbow-6',
           'Paladins', 'Hitman'],
  datasets: [
    {
      label: 'Gamers',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class Barc extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Game Players',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}