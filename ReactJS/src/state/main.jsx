import React from 'react';


const StateExample = React.createClass({
  render() {
    // Use state to get the value
    const typeProp = this.state.typeProp;
    const fruit = this.state.fruit;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h2>React Component</h2>

            <input
              id="react-input"
              type={typeProp}
            />
            <p>I'm a {fruit}!
            </p>

          </div>
          <div className="col-md-6">
            <p>Changing the source file all day sucks. State gives us the ability to dynamically change props.</p>
            <p> Input changes a lot depending on its type.</p>
            <p>
              Try these:
              <ul>
                <li>
                  <button
                    className="btn btn-default"
                    onClick={this.handleClick('radio', 'peach')}
                  >
                    <code>type="radio"</code>
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-primary"
                    onClick={this.handleClick('button', 'lemon')}
                  >
                    <code>type="button"</code>
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-success"
                    onClick={this.handleClick('date', 'mango')}
                  >
                    <code>type="date"</code>
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-warning"
                    onClick={this.handleClick('color', 'pineapple')}
                  >
                    <code>type="color"</code>
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-danger"
                    onClick={this.handleClick('file', 'banana')}
                  >
                    <code>type="file"</code>
                  </button>
                </li>
              </ul>
            </p>

          </div>
        </div>
      </div>
    );
  }

  , handleClick(type, fruit) {
    // instead of making a function for each button, I'm using a closure.
    return (evt) => {
      // Update the state!
      this.setState({
        typeProp: type,
        fruit: fruit
      });
    };
  }

  , getInitialState() {
    return {
      typeProp: 'text',
      fruit: 'raspberry'
    };
  }
});
export default StateExample;
