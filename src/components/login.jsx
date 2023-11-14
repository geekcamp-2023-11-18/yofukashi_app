import sky from "../imgs/sky.jpg";
import logo from "../imgs/header_logo.png";
import "./login.css";
import styled from "@emotion/styled";
import { Button,Paper,TextField } from "@mui/material";

const login = ({ onChildEvent }) =>{

    const login = () => {
        console.log("success login")
        onChildEvent()
    }

    const signup = () => {
        console.log("success signup")
        onChildEvent()
    }

    return(
        <>
            <img src={sky} alt="sky" className="login-img"/>
            <div className="login-position">
                <div className="login-choose-div">
                    <StyledPaper>
                    <form className='form'>
                        <img src={logo} alt="logo"/>
                        <TextField label="メールアドレス" variant="standard" className="text"/>
                        <TextField label="パスワード" variant="standard" className="text" type="password" />
                        <center><Button className="login btn" onClick={login}>ログイン</Button></center>
                        <center><Button className="signup btn" onClick={signup}>新規会員登録</Button></center>
                    </form>
                    </StyledPaper>
                </div>
            </div>
        </>
    )
}

const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  .form {
    width: 60%;
    margin: 1rem;
    text-align: center;
  }
  .text {
    width: 100%;
    margin: 0.5rem 0;
  }
  .btn {
    width: 60%;
    color: white;
    text-align: center;
    margin: 1.5rem 0;
  }
  .login {
    background-color: lightseagreen;
  }
  .signup {
    background-color: #06579b;
  }
`;

export default login;