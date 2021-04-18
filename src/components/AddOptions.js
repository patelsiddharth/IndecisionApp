import React from 'react';

export default class AddOption extends React.Component 
{
    state = {
        error : undefined
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const input = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error = this.props.handleAddOption(input);
        this.setState( () => ({ error }))
    }

    render()
    {
        return (
            <div>
                {this.state.error && <p className='Add-Option-Error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.onFormSubmit}>
                    <input className='add-option__input' type="text" name="option"/>
                    <button className='button button--add button--add--input'>Add Option</button>
                </form>
            </div>
        );
    }
}