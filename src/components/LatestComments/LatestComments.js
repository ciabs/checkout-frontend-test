import React from 'react';
import {CommentStyled, Wrapper} from './LatestComments.style';

const Chart = ({comments}) => (
  <Wrapper>
    <h2>Latest comments</h2>
    {
      comments.length === 0 && (
        <span>at the moment there are no comments</span>
      )
    }
    {
      comments.length > 0 && comments.map(comment => (
        <CommentStyled key={comment.timestamp}>
          <div>
            <span><a href={`mailto:${comment.email}`}>{comment.name}</a></span>
          </div>
          <div>{comment.timestamp.format("MM/D/YYYY @ hh:mm:ss")}</div>
          <div>rating: {comment.rating}</div>
          <div>comment: {comment.comment}</div>
        </CommentStyled>
      ))
    }
  </Wrapper>
);

export default Chart;
