import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import {App} from './components/app/index';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

// const AppList = () => {
//     const items = [
//         "Мой первый компонент",
//         "Мой второй компонент"
//     ];
//     return (
//         <>
//         <ul>
//             {items.map((item, index) => {
//                 return (<li key = {index}>{item}</li>)
//             })}
//         </ul>
//         </>
//     );

// }

// const AppInput = ({placeholder, label}) => {
//     return (
//         <label className="label">
//             {label}
//             <input placeholder={placeholder} type="password" />
//         </label>

//     )
// }

// const AppHeader = ({title}) => {
//     return (
//         <div>
//             <img className='image' src={logoImageSrc}></img>
//             <h1 className='header-title'><span>{title}</span></h1>
//         </div>
//     );
// }

// const App = () => {
//     return (
//         <>
//             <AppHeader title="Привет мир!"/>
//             <AppList/>
//             <AppInput placeholder = "Пример инпута" label = "Имя"/>
//         </>
//     );
// }



