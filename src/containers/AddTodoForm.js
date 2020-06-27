import React, { Component } from 'react'
import { addToDo } from '../actions'
import { connect } from 'react-redux'

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      error: ''
    };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault()
    if (!this.state.todo){
      this.setState({error: 'Please enter a task'})
    } else {
    this.props.addToDo(this.state.todo)
    this.setState({ todo: '', error: '' });
    }
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.todo}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button>Add Todo</button>
          {this.state.error && <p>Please enter a task</p>}
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addToDo: text => dispatch(addToDo(text))
})

export default connect(null, mapDispatchToProps)(AddTodoForm);
