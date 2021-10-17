import React, { Component } from 'react';
import {connect} from 'react-redux';
import tasksActions from './redux/tasks/tasksAction';
import {CSSTransition} from 'react-transition-group';
import SectionTitle from './components/SectionTitle';
import TaskInput from './components/Taskinput';
import Modal from './components/Modal';
import Tasklist from './components/Tasklist';

class App extends Component {

  componentDidMount() {
    document.addEventListener("keydown", this.escapeModal);
    const persTask = localStorage.getItem('tasks');
    return persTask && this.props.onLocStorGet(persTask)
  }
  
  componentDidUpdate(prevProps) {
    const { tasks } = this.props;
    if (tasks !== prevProps.tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escapeModal);
  }

  escapeModal = e => {
    e.keyCode === 27 && this.props.onEscModal();
  }
    
  
  render() {
    const {tasks} = this.props;
    return (
      <>
       {tasks !== null && tasks.map(({isModalOpen}) =>
         isModalOpen && (
          <Modal />
        ))}
        <SectionTitle title="TASKcreator">
          <CSSTransition in={true} timeout={500}>
            <TaskInput />
          </CSSTransition>
        </SectionTitle>
        <SectionTitle title="TASKlist">
          <Tasklist />
        </SectionTitle>
      </> 
    ) 
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.items
});

const mapDispatchToProps = {
  onLocStorGet: tasksActions.locStorGet,
  onEscModal: tasksActions.escapeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
