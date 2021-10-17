import React, {Component} from 'react';
import {connect} from 'react-redux';
import tasksActions from '../redux/tasks/tasksAction';
import s from './Modal.module.css';

class Modal extends Component {

    state = { 
      changedTaskname: ''
    };

    handleChangeInModal = e => {
        this.setState({ 
          changedTaskname: e.target.value, 
        })
        if (e.target.value === "") {return}
      };
    
    render () {
        const {changedTaskname} = this.state;
        const {onUpdateText, onClose} = this.props;
        return (
            <div className={s.backdrop}>
                <div className={s.modalWindow}>
                    <form onSubmit={() => onUpdateText(changedTaskname)}>
                        <img className={s.btnClose} src="https://img.icons8.com/color/20/000000/close-window.png"
                            alt='' onClick={() => onClose()} />
                        <label className={s.elements}>
                            <h4 className={s.el}>New Name of Task</h4>
                            <input
                                type="text"
                                className={s.el}
                                name='changedTaskname'
                                value={changedTaskname}
                                onChange={e => this.handleChangeInModal(e)}
                                maxLength="20"
                            />
                            <button className={s.btn} type="submit">Confirm changes</button>
                        </label>
                    </form>
                 </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    onUpdateText: tasksActions.updateText,
    onClose: tasksActions.closeModal
}

export default connect(null, mapDispatchToProps)(Modal)
