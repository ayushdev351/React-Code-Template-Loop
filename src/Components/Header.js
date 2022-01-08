import react from "react";
import "./Header.css";

//This is a React Component Function for the header.

function Header() {
  //Here we are returning all of the content which we want to be rendered on the screen

  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Profile</li>
        </ul>
      </nav>
    </>
  );
}

//Exporting Header here so that we can import it in the App.js file
export default Header;
