import React from 'react';
import AddOption from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component 
{
    state = {
        options : [],
        selectedOption : undefined
    }

    HandleDeleteAll = () => {
        this.setState(() => ({ options : [] }))
    };

    HandleDelete = (itemToDelete) => {
        this.setState( (prevState) => ( { options : prevState.options.filter( option => option != itemToDelete ) } ) )
    };

    HandleAddOption = (option) => {
        if(!option)
        {
            return 'Enter a valid option item';
        }
        else if(this.state.options.indexOf(option) > -1)
        {
            return 'This option already exist. Please try again';
        }

        this.setState(prevState => ({ options : prevState.options.concat([option]) }))
    };

    HandlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNum];
        this.setState( () => ({selectedOption}))
    };

    CloseModal = () => {
        this.setState( () => ({selectedOption : undefined}));
    }

    componentDidMount()
    {
        try
        {
            const optionsList = JSON.parse(localStorage.getItem('Options'));
            if(optionsList)
            {
                this.setState(() => ({ options : optionsList }))
            }
        }
        catch(error)
        {
            console.log(error)
        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(prevState.options.length !== this.state.options.length)
        {
            localStorage.setItem('Options', JSON.stringify(this.state.options));
        }
    }

    componentWillUnmount()
    {

    }

    render()
    {
        // const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle = {subtitle}/>
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.HandlePick}
                    />
                    <div className='widget'>
                        <Options 
                            options={this.state.options} 
                            handleDeleteAll={this.HandleDeleteAll}
                            handleDelete={this.HandleDelete}
                        />
                        <AddOption 
                            handleAddOption={this.HandleAddOption}
                        />
                    </div>
                </div>
                <OptionModal closeModal={this.CloseModal} SelectedOption = {this.state.selectedOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
}

export default IndecisionApp;