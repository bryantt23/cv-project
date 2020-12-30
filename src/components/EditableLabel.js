// https://stackoverflow.com/questions/29303456/reactjs-onclick-change-elementhttps://stackoverflow.com/questions/29303456/reactjs-onclick-change-element
import React, { Component } from 'react';

class EditableLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.value,
      editing: false
    };
    this.initEditor();
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }

  initEditor() {
    this.editor = (
      <input
        type='text'
        defaultValue={this.state.text}
        onKeyPress={event => {
          const key = event.which || event.keyCode;
          if (key === 13) {
            //enter key
            this.save(event.target.value);
          }
        }}
        autoFocus={true}
      />
    );
  }

  edit() {
    this.setState({
      text: this.state.text,
      editing: true
    });
  }

  save(value) {
    this.setState({
      text: value,
      editing: false
    });
    this.props.changeHandler(this.props.keyName, value);
  }

  componentDidUpdate() {
    this.initEditor();
  }

  render() {
    return this.state.editing ? (
      this.editor
    ) : (
      <p onClick={this.edit}>{this.state.text}</p>
    );
  }
}

export default EditableLabel;
//and use it like <EditableLabel value={"any external value"}/>;
