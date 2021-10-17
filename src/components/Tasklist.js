import React from 'react';
import {connect} from 'react-redux';
import tasksActions from '../redux/tasks/tasksAction';
import {CSSTransition,  TransitionGroup} from 'react-transition-group';
import s from './Tasklist.module.css';


const Tasklist = ({tasks, onToogleCompleted, onRemoveTask, onOpen}) => {
    return (
        <TransitionGroup component='ul' className={s.tasks}>
            {tasks !== null && tasks.map(({id, taskname, completed}) => 
                <CSSTransition
                classNames={s}
                key={id}
                timeout={500}>
                    <li className={s.item} >
                        <div className={s.taskname}>
                            <span>{taskname}: </span>
                        </div>
                        <label className={s.completed}>
                            <input type="checkbox" checked={completed} 
                                onChange={() => onToogleCompleted(id)} />
                            Completed
                        </label>
                            {/* <p>
                                {`${hrs.toString().padStart(2, '0')}:
                                ${min.toString().padStart(2, '0')}:
                                ${sec.toString().padStart(2, '0')}`}
                            </p>  */}
                        <button className={s.btn} onClick={() => onOpen(id)}>
                            Change task
                        </button>
                        <img src="https://img.icons8.com/color/20/000000/close-window.png" 
                            alt='' onClick={() => onRemoveTask(id)} />
                    </li>
                </CSSTransition>
            )}
        </TransitionGroup>
    )
}

const mapStateToProps = state => ({
    tasks: state.tasks.items
});

const mapDispatchToProps = {
    onRemoveTask: tasksActions.removeTask,
    onToogleCompleted: tasksActions.toogleCompleted,
    onOpen: tasksActions.openModal
    // onTick: tasksActions.timeCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasklist)