import React from 'react';
import './style.css';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'black'
    }
  }

  handleClick() {
    if (this.state.color != 'black') {
      this.setState({
        color: 'black'
      })
    } else {
      this.setState({
        color: 'red'
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <p className={this.state.color}>{this.props.text}</p>
        <button className='button' onClick={() => this.handleClick()}>{this.props.button}</button>
      </React.Fragment>
    )
  }
}

export default Content;