import React from 'react';
import Option from './Option';

const Options = props => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button 
                className='button button--link'    
                onClick={props.handleDeleteAll}
            >
                Remove All Options
            </button>
        </div>
        {props.options.length === 0 && <p className='widget__message'>Please add an option to get started!</p>}
        <div className='OptionContainer'>
        {
            props.options.map((option, index) => 
                <Option 
                    key={option}
                    count={index + 1} 
                    OptionText={option} 
                    handleDelete={props.handleDelete}
                />
            )
        }
        </div>
    </div>
);

export default Options;