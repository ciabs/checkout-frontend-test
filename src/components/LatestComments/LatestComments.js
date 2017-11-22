import React from 'react';
import {Wrapper} from './LatestComments.style';

const Chart = ({comments}) => (
  <Wrapper>
    {
      comments.map(comment =>
        <div key={comment.timestamp}>
          <div>
            <span>{comment.name} ({comment.email})</span>
            <span>{comment.timestamp.format("MM/D/YYYY @ hh:mm:ss")}</span> -
          </div>
          <div>rating: {comment.rating}</div>
          <div>comment: {comment.comment}</div>
        </div>
      )
    }
  </Wrapper>
);

export default Chart;
