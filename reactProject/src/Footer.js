import { Link } from "react-router-dom";
function Footer() {
  return (
    <>

      <li>
        <Link to={{ pathname: "/home" }} style={{ textDecoration: "none" }}> Home </Link>
      </li>
      <li>
        <Link to={{ pathname: "/login" }} style={{ textDecoration: "none" }}> Login </Link>
      </li>
      <li>
        <Link to={{ pathname: "/contact" }} style={{ textDecoration: "none" }}> Contact </Link>
      </li>
      <li>
        <Link to={{ pathname: "/about" }} style={{ textDecoration: "none" }}> About </Link>
      </li>
      <li>
        <Link to={{ pathname: "/profile" }} style={{ textDecoration: "none" }}> Profile </Link>
      </li>
      <li>
        <Link to={{ pathname: "/contact/list" }} style={{ textDecoration: "none" }}>Contact List </Link>
      </li>
      <li>
        <Link to={{ pathname: "/contact/update" }} style={{ textDecoration: "none" }}>Update Contact </Link>
      </li>
    </>
  );
}
export default Footer;