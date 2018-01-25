import React, { PropTypes, Component } from 'react';
import './style.css';

class NameDialog extends Component {
  state = {
    value: 'default_name',
  };
  render() {
    const { instructions } = this.props;
    return (
      <div id="name_dialog_outer">
        <div id="name_dialog_title">{instructions}</div>
        <input
          id="name_dialog_input"
          onChange={val => {
            this.state.value = val.target.value;
          }}
          ref={ref => {
            if (ref){
              ref.value = this.state.value;
            }
          }}
        />
        <button onClick={() => this.props.onSubmit(this.state.value)} id="name_dialog_submit">Submit</button>
      </div>
    )
  }
};

NameDialog.propTypes = {
  instructions: PropTypes.string,
};

export default NameDialog;