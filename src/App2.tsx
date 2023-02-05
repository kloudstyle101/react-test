import { Component } from "react";
//import * as D from "./data";
import "./App.css";
import P from "./P";

// import ArrowComponent from "./ArrowComponent";
// import ClassComponent from "./ClassComponent";
//export default class App extends Component {
  // return (
  //   <div>
  //     <p>
  //       {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
  //     </p>
  //     <img src={D.randomAvatar()} height="50" />
  //     <img src={D.randomImage()} height="300" />
  //   </div>
  // );
  // render() {
  //   return ( 
  //      <div>
  //       <ul>
  //         <ClassComponent href="http://www.google.com" text="go to google"/> 
  //         <ArrowComponent href="http://twitter.com" text="go to twitter"/>
  //       </ul>
  //       </div>
  //   )
  // }
 
  import DispatchEvent from './pages/DispatchEvent'
  import EventBubbling from './pages/EventBubbling'
  import StopPropagation from './pages/StopPropagation'
  import VariousInputs from './pages/VariousInputs'
  import OnChange from './pages/OnChange'
  import FileInput from './pages/FileInput'
  import DragDrop from './pages/DragDrop'
  import FileDrop from './pages/FileDrop'
  import ReactOnClick from './pages/ReactOnClick'
  import OnClick from './pages/OnClick'
  import EventListener from './pages/EventListener'
  
  export default function App() {
    return (
      <div>
        <FileDrop />
        <DragDrop />
        <FileInput />
        <OnChange />
        <VariousInputs />
        <StopPropagation />
        <DispatchEvent />
        <ReactOnClick />
        <OnClick />
        <EventListener />
      </div>
    )
  }