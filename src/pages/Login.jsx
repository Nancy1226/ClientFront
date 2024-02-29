import FormLogin from "../components/organisms/FormLogin";
import Sections from "../components/molecules/Sections";
import "../assets/styles/Forms.css"

function Login() {

    return ( 
    <>
        <div className="container" id="container">
            <FormLogin />
            <Sections/>
        </div>
    </>
    );
}

export default Login;