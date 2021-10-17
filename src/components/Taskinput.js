import React, {Component} from 'react';
import {connect} from 'react-redux';
import tasksActions from '../redux/tasks/tasksAction';
import s from './Taskinput.module.css';

class TaskInput extends Component {

  state = { 
    taskname: ''
  }

  handleChangeInInput = e => {
    this.setState({ 
      taskname: e.target.value, 
    })
    if (e.target.value === "") return;
  };

  save = () => {
    const {tasks, onSub} = this.props;
    const {taskname} = this.state;
    tasks.every(task => 
      task.taskname !== taskname) ?
      onSub(taskname) : alert(`Task is already in use !`);
  }

  preSave = e => {
    const { tasks, onSub } = this.props;
    const { taskname } = this.state;
    e.preventDefault();
    tasks.length === 0 ? onSub(taskname) :
    taskname !== '' && this.save();
    this.setState ({taskname: ''});
  };

  render () {
    const { taskname } = this.state;
    return (
      <form className={s.boxinput} onSubmit={this.preSave}>
        <label className={s.boxlabel}>
        <h4 className={s.el}>Name of Task</h4>
          <input
            type="text"
            name='taskname'
            placeholder="Enter your task"
            value={taskname}
            onChange={e => this.handleChangeInInput(e)}
            maxLength="20"
          />
        </label>
        <button type="submit" className={s.knop}>Add your task</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.items
});

const mapDispatchToProps = {
  onSub: tasksActions.saveTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput)

