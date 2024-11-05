import logo from './logo.svg';
//import './App.css';
import Wrapper from './components/Wrapper.js';
import Screen from './components/Screen.js';
import ButtonBox from './components/ButtonBox.js';
import Button from './components/Button.js';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (

        <Wrapper>
          <Screen value={"Hello"}></Screen>
          <ButtonBox>
            {
              btnValues.flat().map((btn, i) => {
              return(
                <Button key={i} className={btn === "=" ? "equals" : ""} value = {btn} onClick ={()=>{
                  console.log(`${btn} clicked!`)
                }}></Button>
              )
              }
            )
            }
          </ButtonBox>
        </Wrapper>


  );
}




export default App;
