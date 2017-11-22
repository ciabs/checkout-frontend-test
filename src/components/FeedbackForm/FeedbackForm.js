import React, {Component} from 'react';
import moment from 'moment';

import {Wrapper} from './FeedbackForm.style';

class FeedbackForm extends Component {
  state = {
    name: '',
    email: '',
    rating: '',
    comment: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    const {rating, name, email, comment} = this.state;
    const {addNewFeedback} = this.props;

    if (!rating || !name || !email || !comment) {
      alert('You must complete all the fields');
    }

    addNewFeedback({
      name,
      email,
      rating,
      comment,
      timestamp: moment()
    });

    this.setState({
      name: '',
      email: '',
      rating: '',
      comment: ''
    });
  };

  handleChangeValue = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    const {rating, name, email, comment} = this.state;

    console.log('this.state', this.state); //eslint-disable-line

    return (
      <Wrapper>
        <h2>Rate your experience</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChangeValue}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChangeValue}
            required
          />
          <select
            value={rating}
            name="rating"
            onChange={this.handleChangeValue}
            required
          >
            <option></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <textarea
            name="comment"
            value={comment}
            onChange={this.handleChangeValue}
            required
          >
            Hello there, this is some text in a text area
          </textarea>
          <button
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit feedback
          </button>
        </form>
      </Wrapper>
    );
  }
}

export default FeedbackForm;
