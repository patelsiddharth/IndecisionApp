// let count = 0;
// const IncrementCount = () => {
//     count++;
//     renderCounterApp();
// }

// const DecrementCount = () => {
//     count--;
//     renderCounterApp();
// }

// const ResetCount = () => {
//     count = 0;
//     renderCounterApp();
// }


// // const appRoot1 = document.getElementById('app3');
// // const appRoot2 = document.getElementById('app3');
// const appRoot3 = document.getElementById('app3');

// // ReactDOM.render(template, appRoot1)
// // ReactDOM.render(templateTwo, appRoot2)

// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={IncrementCount}> + 1</button>
//             <button onClick={DecrementCount}> - 1</button>
//             <button onClick={ResetCount}> Reset </button>
//         </div>
//     );
//     ReactDOM.render(templateThree, appRoot3)
// }

// renderCounterApp();

class CounterApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleAddEvent = this.handleAddEvent.bind(this);
        this.handleSubstractEvent = this.handleSubstractEvent.bind(this);
        this.handleResetEvent = this.handleResetEvent.bind(this);
        this.state = {
            count : props.count
        }
    }

    componentDidMount()
    {
        const localCount = parseInt(localStorage.getItem('count'));
        if(!isNaN(localCount))
        {
            this.setState( () => ({ count : localCount}))
        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(prevState.state.count !== this.state.count)
        {
            localStorage.setItem('count', this.state.count)
        }
    }

    handleAddEvent(e)
    {
        e.preventDefault();
        this.setState( prevState => {
            return {
                count : prevState.count + 1
            }
        });
    }

    handleSubstractEvent(e)
    {
        e.preventDefault();
        this.setState(prevState => {
            return {
                count : prevState.count - 1
            }
        });
    }

    handleResetEvent(e)
    {
        e.preventDefault();
        this.setState( () => {
            return {
                count : 0
            }
        })
    }

    render()
    {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddEvent}>+1</button>
                <button onClick={this.handleSubstractEvent}>-1</button>
                <button onClick={this.handleResetEvent}>Reset</button>
            </div>
        );
    }
}

CounterApp.defaultProps = {
    count : 0
}

ReactDOM.render(<CounterApp count={0}/>, document.getElementById('app1'));