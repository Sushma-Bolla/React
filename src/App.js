//! component composition example
// import Navbar from "./components/Navbar";
// import Main from "./components/Main"
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";
// import "./global.css";
// const App=()=>{
//     return(
//         <div className="app">
//           <Navbar/>
//           <Main></Main>
//           <div className="sidebar">
//             <Sidebar1/>
//             <Sidebar2/>
//           </div>
//           <Footer/>
//         </div>
//     )
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
// import React from 'react'
// import PropsChildrenEx from './propsexample/PropsChildrenEx'
// import ChildProps from './propsexample/ChildProps';

// const App = () => {
//   return (
//     <div>
//       <PropsChildrenEx username="Arun" company="Meta">
//         <h1>This data is passed as props children</h1>
//         <ChildProps/>
//       </PropsChildrenEx>
//     </div>
//   )
// }

// export default App

//!CBCStateEx
// import React from 'react'
// import CBCStateEx from './stateexample/CBCStatesEx'

// const App = () => {
//   return (
//     <div>
//       <CBCStateEx></CBCStateEx>
//     </div>
//   )
// }

// export default App;

//! FBCStateEx
// import React from 'react'
// import FBCStateEx from './stateexample/FBCStateEx'

// const App = () => {
//   return (
//     <div>
//       <FBCStateEx></FBCStateEx>
//     </div>
//   )
// }

// export default App;

//! FunctionalComponent
import React from 'react'
import FunctionalComponent from './components/FunctionalComponent'

const App = () => {
  return (
    <div>
      <FunctionalComponent city="Hyderabad" state="ts"></FunctionalComponent>
    </div>
  )
}

export default App
