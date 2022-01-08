import react from "react";
import "./Main.css";

//This is a React Component Function. You can think this as similar to your C functions
//But here we return the JSX content which we want to be rendered on the screen.

function Main() {
  return (
    <>
      {/* //Here className is same as 'class' in plane css */}
      <h1 className="heading"> Hello World </h1>
    </>
  );
}

export default Main;

//Exporting Header here so that we can import it in the App.js file
