import { Link } from 'react-router-dom';

function Header() {
    return (
        <>


            <span style={{ color: "red" }}>&nbsp;&nbsp;<Link to={{ pathname: "/home" }} style={{ textDecoration: "none" }}> Home </Link></span>


            <span>  <Link to={{ pathname: "/login" }} style={{ textDecoration: "none" }}> &nbsp;&nbsp;Login </Link></span>


            <span>  <Link to={{ pathname: "/contact" }} style={{ textDecoration: "none" }}> &nbsp;&nbsp;Contact </Link></span>


            <span>  <Link to={{ pathname: "/about" }} style={{ textDecoration: "none" }}> &nbsp;&nbsp;About </Link></span>

            <span>  <Link to={{ pathname: "/profile" }} style={{ textDecoration: "none" }}>&nbsp;&nbsp; Profile </Link></span>

            <span>  <Link to={{ pathname: "/contact/list" }} style={{ textDecoration: "none" }}>&nbsp;&nbsp;Contact List </Link></span>

            <span>  <Link to={{ pathname: "/contact/update" }} style={{ textDecoration: "none" }}>&nbsp;&nbsp;Update Contact </Link></span>


        </>
    );
}
export default Header;