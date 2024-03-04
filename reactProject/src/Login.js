function Login() {
    return (

        <>
            <h1> Login</h1>
            <form action="/success/login">
                <label for="fname">Email Id </label>
                <input type="email" id="fname" name="firstname" placeholder="Email.." /><br />
                <label for="lname">Password</label>
                <input type="password" id="lname" name="lastname" placeholder="Password.." /><br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}
export default Login;