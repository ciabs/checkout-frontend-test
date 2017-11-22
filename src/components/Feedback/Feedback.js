import React, {Component} from 'react';

import {FirstRowStyled, Wrapper} from './Feedback.style';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import Chart from '../Chart/Chart';
import LatestComments from '../LatestComments/LatestComments';

class Feedback extends Component {
  state = {
    feedbacks: []
  };

  handleAddNewFeedback = feedback => {
    const {feedbacks} = this.state;
    this.setState({feedbacks: [...feedbacks, feedback]});
  };

  render() {
    const {feedbacks} = this.state;

    return (
      <Wrapper>
        <FirstRowStyled>
          <FeedbackForm
            addNewFeedback={this.handleAddNewFeedback}
          />
          <Chart />
        </FirstRowStyled>
        <LatestComments
          comments={feedbacks}
        />
      </Wrapper>
    );
  }
}

export default Feedback;
