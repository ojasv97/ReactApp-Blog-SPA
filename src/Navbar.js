import React from 'react';
import { Link } from  'react-router-dom';

// class Navbar extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         name: "Ojas"
    //     };
    // }
    // changeName(){
    //     this.setState({
    //         name: "Ram"
    //     });
    // }
//     render(){
//         return (
//             <nav className="navbar">
//                 <h1>The Dojo Blog</h1>
//                 {/* <h1>{this.state.name}</h1> */}
//                 <div className="links">
//                     <a href="/">Home</a>
//                     <a href="/create" style = {{
//                         color: 'white',
//                         backgroundColor: '#f1356d',
//                         borderRadius: '8px'
//                     }}>New Blog</a>
//                 </div>
//                 {/* <button onClick = {this.changeName.bind(this)}>Subscribe</button> */}
//             </nav>
//         );
//     }
// }

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1> 
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>

    );
}
 
export default Navbar;