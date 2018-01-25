import React, { Component } from 'react';
import './style.css';

class NameDialog extends Component {
  state = {
    installation_name: 'default_name',
  };
  render() {
    return (
      <div id="name_dialog_outer">
        <div id="name_dialog_title">enter name of the installation</div>
        <input
          id="name_dialog_input"
          onChange={val => {
            this.state.installation_name = val.target.value;
          }}
          ref={ref => {
            if (ref){
              ref.value = this.state.installation_name;
            }
          }}
        />
        <button onClick={() => this.props.onSubmit(this.state.installation_name)} id="name_dialog_submit">Submit</button>
      </div>
    )
  }
}

export default NameDialog;