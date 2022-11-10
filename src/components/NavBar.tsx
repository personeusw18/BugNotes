import "./../fonts.css";

export function NavBar () {

  const h1Styles = {
    color: "#ECECEC",
    fontFamily: 'Cedarville Cursive'
  }
  const navStyles = {
    width: "100%",
    height: "200px",
    display: "flex",
    margin: 0,
    padding: 0,
    background: "#45425A"
  }
  const pinkCircleStyle = {
    background: "#6C7D47",
    width: "20px",
    position: "absolute"
  }




  return (
    <div style={navStyles}>
      <h1 style={h1Styles}>Bug Notes</h1>
    </div>
  )
}