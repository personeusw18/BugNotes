import "./../fonts.css"
import { Link } from "wouter"

export function NavBar () {

  const h1Styles = {
    width: "100%",
    color: "#ECECEC",
    fontFamily: 'Cedarville Cursive',
    fontSize: "4rem",
    margin: 0,
    padding: 0,
  }
  
  const linkStyles = {
    color: "#ECECEC",
    fontFamily: 'Cedarville Cursive',
    fontSize: "2rem",
    textDecoration: "underline",
    margin: 0,
    padding: 0,
  }

  const navBarStyles = {
    width: "100%",
    height: "150px",
    display: "flex",
    background: "#45425A",
  }

  const navItemsStyles = {
    width: "80%",
    height: "150px",
    margin: "10px auto",
    display: "flex",
    alignItems: "baseline",

  }

  const navLinkStyles = {
    display: "flex",
    width: "50%",
    margin: "0",
    // height: "100%",
    justifyContent: "space-between",
    
  }


  // const pinkCircleStyles = {
  //   background: "#6C7D47",
  //   width: "10rem",
  //   height: "10rem",
  //   borderRadius: "100%",
    
  //   top: 10,
  //   left: 40
  // }




  return (
    <div style={navBarStyles}>
      {/* <div style={pinkCircleStyles}></div>
      <div style={pinkCircleStyles}></div>
      <div style={pinkCircleStyles}></div> */}
      
      <div style={navItemsStyles}>
        <h1 id="title" style={h1Styles}>Bug Notes</h1>
        <div id="nav-links" style={navLinkStyles}>
          <Link href="/:name" style={linkStyles}>Profile</Link>
          <Link href="/about" style={linkStyles}>About</Link>
          <Link href="/contact" style={linkStyles}>Contact</Link>
        </div>
      </div>
    </div>
  )
}