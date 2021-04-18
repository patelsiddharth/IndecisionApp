import React from 'react';

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
const Header = (props) => (
    <div className='Header'>
        <div className='container'>
            <h1 className='Header__title'>{props.title}</h1>
            <p className='Header__subtitle'>{props.subtitle}</p>
        </div>
    </div>
);

Header.defaultProps = {
    title : 'INDECISION APP'
}

export default Header;