import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import IndexSignUp from "../../components/IndexSignUp";
import '../../assets/style/signup.css';
;

function SignUp() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main>
        <div id="login-user">
          <h2>Sign up</h2>
          <IndexSignUp />
          {/* <button className="SignUp" type="submit">Sign me up</button> */}
        </div>
      </main>
      
    </Fragment>
  );
}

export default SignUp;
