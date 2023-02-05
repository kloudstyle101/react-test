import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as D from './data';
// const rootVirtualDOM = (
//   <div>
//     <ul>
//       <li>
//         <a href="http://www.google.com" target="_blank">
//           <p>go to google</p>
//         </a>
//       </li>
//     </ul>
//   </div>
// )
// const children = D.makeArray(10).map((_, index) => (
//   <div key={index}>
//     <p>{D.randomId()}</p>
//     <p>{D.randomName()}</p>
//     <p>{D.randomJobTitle()}</p>
//     <p>{D.randomSentence()}</p>
//     <img src={D.randomAvatar()} height={100} width={100} />
//   </div>
// ));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//root.render(children);
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
