import React from 'react';
import "./App.css";
import TodoList from './TodoList';
import Equipo from './Equipo';
import LandingPage from './LandingPage';

function App() {
  var language = window.navigator.userLanguage || window.navigator.language;
  let greeting = " ";
  if (language === "en-US") {
    greeting = "Hello";
  } else if (language === "es-ES") {
    greeting = "Hola";
  }

  console.log(language); //works IE/SAFARI/CHROME/FF

  return (
    <div>
      <LandingPage></LandingPage>
      <br></br>
      <TodoList />
      <Equipo greeting={greeting}>
      </Equipo>

    </div>


  );
}

export default App;
