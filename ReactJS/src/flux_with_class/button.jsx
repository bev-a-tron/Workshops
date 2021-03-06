import React from 'react';

class Button extends React.Component {
  render() {
    const type = this.props.type;

    return (
      <button
        className={`btn btn-${type}`}
        onClick={this.handleClick.bind(this)} // class+react requires us to use .bind
      >
        Click Me
      </button>
    );
  }

  handleClick() {
    const type = this.props.type;
    const action = this.props.action;

    action(type);
  }
}

Button.propTypes = {
  type: React.PropTypes.string.isRequired
  , action: React.PropTypes.func.isRequired
};
export default Button;
