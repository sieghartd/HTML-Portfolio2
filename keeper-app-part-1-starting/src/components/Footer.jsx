import React from "react";
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
function Footer() {
  var date = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright ⓒ{date}</p>
    </footer>
  );
}

export default Footer;
