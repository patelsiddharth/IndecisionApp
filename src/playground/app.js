class IndecisionApp extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.HandleDeleteAll = this.HandleDeleteAll.bind(this);
        this.HandleDelete = this.HandleDelete.bind(this);
        this.HandleAddOption = this.HandleAddOption.bind(this);
        this.HandlePick = this.HandlePick.bind(this);
        this.state = {
            options : props.options
        }
    }

    componentDidMount()
    {
        try
        {
            const optionsList = JSON.parse(localStorage.getItem('Options'));
            console.log(optionsList);
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
            console.log('Updated')
        }
    }

    componentWillUnmount()
    {

    }

    HandleDeleteAll()
    {
        this.setState(() => ({ options : [] }))
    }

    HandleDelete(itemToDelete)
    {
        this.setState( (prevState) => ( { options : prevState.options.filter( option => option != itemToDelete ) } ) )
    }

    HandleAddOption(option)
    {
        if(!option)
        {
            return 'Enter a valid option item';
        }
        else if(this.state.options.indexOf(option) > -1)
        {
            return 'This option already exist. Please try again';
        }

        this.setState(prevState => ({ options : prevState.options.concat([option]) }))
    }

    HandlePick()
    {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNum];
        alert(selectedOption);
    }

    render()
    {
        // const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle = {subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.HandlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteAll={this.HandleDeleteAll}
                    handleDelete={this.HandleDelete}
                />
                <AddOption 
                    handleAddOption={this.HandleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
}

// Class based components
// class Header extends React.Component {
//     render()
//     {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <p>{this.props.subtitle}</p>
//             </div>
//         );
//     }
// }

//Stateless Functional Component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}

Header.defaultProps = {
    title : 'Indecision'
}

//Stateless Functional Component
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should i do ?</button>
        </div>
    );
}

const Option = props => {
    return (
        <div>
            <li>
                {props.OptionText}
                <button 
                    name={props.OptionText} 
                    onClick={(e) => {
                        e.preventDefault()
                        props.handleDelete(props.OptionText);
                    }}>
                    Delete
                </button>    
            </li>
        </div>
    );
}

const Options = props => {
    return (
        <div>
            <p>{props.options.length === 0 ? 'Please add an option to get started!' : 'Here are your options' }</p>
            
            <ol>
                {
                    props.options.map(option => <Option key={option} OptionText={option} handleDelete={props.handleDelete}/>)
                }
            </ol>
            <button onClick={props.handleDeleteAll}>Remove All Options</button>
        </div>
    );
}

class AddOption extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error : undefined
        }
    }

    onFormSubmit(e)
    {
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );

const appRoot = document.getElementById('app1');

ReactDOM.render(<IndecisionApp />, appRoot);