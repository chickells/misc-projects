// import * as React from "react;"
// import "./styles.css";

// don't have react installed, these won't work silly
// raw dog this bitch

const counter = () => {
    let currentNum = document.querySelector('.counter').textContent
    const counterBtn = document.querySelector('.counterBtn')
    counterBtn.addEventListener('click', () => {
        let num = currentNum
        num++
        document.querySelector('.counter').textContent = num
        currentNum = num
    })
    document.querySelector('.resetBtn').addEventListener('click', () => {
        currentNum = 0
        document.querySelector('.counter').textContent = currentNum
    })
};

counter()



// export default function App() {

//     return (
//         <div className="App">
//             <h1>Hello CodeSandbox</h1>
//             <h2>Edit me</h2>
//         </div>
//     )
// }