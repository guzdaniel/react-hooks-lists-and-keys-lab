import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksTags = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return (
  <nav>
    {linksTags}
  </nav>
  )
}

export default NavBar;
