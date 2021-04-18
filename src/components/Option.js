import React from 'react';

const Option = props => (
    <div className='option'>
        <p className='option__text'>{props.count}. {props.OptionText}</p>
        <button 
            className='button button--link'
            name={props.OptionText} 
            onClick={(e) => {
                e.preventDefault()
                props.handleDelete(props.OptionText);
            }}>
            Remove
        </button>
    </div>    
);

export default Option;