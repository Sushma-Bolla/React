// import logo from './logo.svg';
// import './App.css';
// import Myfunction from './components/Myfunction';

// function App() {
//   return (
//     <div>
//       <Myfunction></Myfunction>
//     </div>
//   );
// }

// export default App;

//! CBC
// import React, {Component} from 'react'
// import CBCPropsex1 from './propsexample/CBCPropsex1';


// class App extends Component{
//   render(){
//     return(
//       <div>App
//         <hr />
//         <CBCPropsex1
//         username="Sam"
//         age={25}
//         desig={["developer","tester"]}
//         userDetails={{city:"Hyd",area:"Maisammaguda"}}
//         sendFun={function(){alert("Hi im from parent component")}}
//         />
//       </div>
//     )
//   }
// }
// export default App;

//! FBC
// import React from 'react'
// import FBCPropsex1 from './propsexample/FBCPropsex1'

// const App = () => {
//   return (
//     <div>
//       <FBCPropsex1
//       username="Arun"
//       isLoggedIn={true}
//       hobbies={["Watching movies","reading","travel"]}
//       />
//     </div>
//   )
// }

// export default App

//! propschildrenex
import React from 'react'
import PropsChildrenEx from './propsexample/PropsChildrenEx'
import ChildProps from './propsexample/ChildProps';

const App = () => {
  return (
    <div>
      <PropsChildrenEx username="Arun" company="Meta">
        <h1>This data is passed as props children</h1>
        <ChildProps/>
      </PropsChildrenEx>
    </div>
  )
}

export default App