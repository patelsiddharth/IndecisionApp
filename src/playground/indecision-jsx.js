console.log('App.js is running')

// JSX - Javascript XML - JSX is javascript extension 

const appRoot1 = document.getElementById('app1');
const appRoot2 = document.getElementById('app2');
const appRoot3 = document.getElementById('app3');

var user = {
    name : 'Siddharth Patel',
    age : 24,
    Location : 'Jabalpur'
}
function GetLocation(location) {
    if(location)
    {
        return <p>Location : {location}</p>;
    }
}
const templateTwo = 
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>

        {(user && user.age >= 18) && <p>Age :{user.age}</p>}
        
        <p>
            {GetLocation(user.Location)}
        </p>
    </div>
;

const app = {
    title : 'Indecision App',
    subtitle : 'This is subtitle for the app',
    options : []
}

const FormSubmit = (e) =>
{
    e.preventDefault();
    const input = e.target.elements.option.value;
    if(input)
    {
        e.target.elements.option.value = '';
        app.options.push(input);
        RenderApp();
        console.log(app.options)
    }
}

const RemoveAllOptions = (e) => {
    e.preventDefault();
    app.options = [];
    RenderApp()
}

const MakeDecision = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomNum];
    console.log(randomNum)
    alert(selectedOption)
    RenderApp()
}

const RenderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <ol>
                {
                    app.options.map(option => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={FormSubmit}>
                <input type="text" name="option"></input>
                <button>Add options</button>
            </form>
            
            <button disabled={app.options.length === 0} onClick={MakeDecision}>What should i do</button>

            <button onClick={RemoveAllOptions}>Remove All Options</button>
        </div>
    );
    ReactDOM.render(template, appRoot1)
}

RenderApp();