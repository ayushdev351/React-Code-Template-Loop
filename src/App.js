//All of our components are rendered here and then send to the INDEX.js file
//to be rendered on the screen.

//We have imported the GLOBAL CSS file here.
import "./styles.css";

//Now we are importing each of our Component. Serially as we want them to be shown
//on the screen.

import Header from "./Components/Header.js"; //This is simply the pathof the file we are importing
import Main from "./Components/Main.js";

//This is a React Component Function. You can think this as similar to your C functions
//But here we return the JSX content which we want to be rendered on the screen.

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

//Here we are exporting the Component so that we can import it somewhere else.
//This component will only be imported in the index.js file always

export default App;
