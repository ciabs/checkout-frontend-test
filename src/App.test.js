import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
  import App from './App';
import Feedback from './components/Feedback/Feedback';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import LatestComments from './components/LatestComments/LatestComments';
import Header from './components/Header/Header';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });
});

describe('Feedback', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Feedback />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Feedback />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('FeedbackForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeedbackForm addNewFeedback={jest.fn()} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <FeedbackForm addNewFeedback={jest.fn()}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('LatestComments', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LatestComments comments={[]} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <LatestComments comments={[]} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('LatestComments', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LatestComments comments={[]} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <LatestComments comments={[]} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Header comments={[]} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
