import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import {Wrapper} from './Chart.style';

const Chart = ({feedbacks}) => {
  const votes = [0,0,0,0,0];
  const data = [];
  feedbacks.forEach(feedback => {
    votes[feedback.rating-1] = votes[feedback.rating-1] + 1;
  });

  votes.forEach((vote, index) => {
    data.push({
      name: `rating ${index + 1}`,
      feedback: vote
    });
  });

  return (
    <Wrapper>
      <BarChart width={600}
                height={300}
                data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="feedback" />
      </BarChart>
    </Wrapper>
  );
};

export default Chart;
