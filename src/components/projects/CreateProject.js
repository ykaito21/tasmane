import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Content</label>
            <textarea
              name="content"
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Create </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
