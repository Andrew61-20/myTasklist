import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './title.css'

const  SectionTitle = ({title, children}) => {
    return (
        <section>
            <CSSTransition
                in={true}
                appear={true} 
                classNames='title'
                timeout={3000}>
                <h3>{title}</h3>
            </CSSTransition>
            {children}
        </section>
    )
}

export default SectionTitle;
