// const appRoot2 = document.getElementById('app2');

// let label = 'Show Info';
// let visibility = false;

// const ToggleInfoVisibility = (e) => {
//     e.preventDefault();
//     visibility = !visibility
//     RenderApp();
// }

// const RenderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggler</h1>
//             <button onClick={ToggleInfoVisibility}>
//                 {visibility ? 'Hide Info' : 'Show Info'}
//             </button>
//             {
//                 visibility && (
//                     <p>This info section will be hidden by default. Click on hide info button to toggle visibility again.</p>
//                 )
//             }
//         </div>
//     );
//     ReactDOM.render(template, appRoot2)
// }

// RenderApp()

class VisibilityToggler extends React.Component
{
    constructor(props)
    {
        super(props);
        this.ToggleInfoVisibility = this.ToggleInfoVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }

    ToggleInfoVisibility(e)
    {
        e.preventDefault();
        this.setState( prevState => {
            return{
                visibility : !prevState.visibility
            }
        })
    }

    render()
    {
        return(
            <div>
            <h1>Visibility Toggler</h1>
            <button onClick={this.ToggleInfoVisibility}>
                {this.state.visibility ? 'Hide Info' : 'Show Info'}
            </button>
            {
                this.state.visibility && (
                    <p>This info section will be hidden by default. Click on hide info button to toggle visibility again.</p>
                )
            }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggler/>, document.getElementById('app2'));