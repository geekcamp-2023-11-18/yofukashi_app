import sky from "../imgs/sky.jpg";
import logo from "../imgs/header_logo.png";
import "./login.css";
import styled from "@emotion/styled";
import { useState } from "react";
import { Button,Paper,TextField } from "@mui/material";
import { collection,getDocs,setDoc,doc, addDoc, updateDoc,getDoc } from "firebase/firestore"; 
import {signupWithEmail,signinWithEmail,db,storage} from "./firebases/firebaseConfig.jsx";

const login = ({ onChildEvent }) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   /**
   * サインイン処理
   *
   * @param {Event} event
   */
    const signin = async (event) => {
        event.preventDefault();
        console.log(email);
        const uid = await signinWithEmail(email, password); // Make sure signupWithEmail is implemented correctly.
        console.log(uid);
        if(uid != "ERR"){
          changeLoginStatus(uid)
          onChildEvent()
          console.log("success signin")
        }
      }

      /* サインイン後の処理 */
      //サインインステータスをtrueに変更
      const changeLoginStatus = async (uid) => {
        const userRef = collection(db, "Users");
        const loginIDRef = doc(userRef, uid);
        const userDoc = await getDoc(loginIDRef);
        const loginStatus = userDoc.data().LoginStatus;
        console.log(loginStatus);
        await updateDoc(loginIDRef, {
          LoginStatus: true,
        });
      }


    /**
     * サインアップ処理
     *
     * @param {Event} event
     */
    const signup = async (event) => {
      event.preventDefault();
      console.log(email);
      const uid = await signupWithEmail(email, password); // Make sure signupWithEmail is implemented correctly.
      console.log(uid);
      if(uid != "ERR"){
        addUserInfo(uid)
        onChildEvent()
        console.log("success signup")
      }
    }

      /* サインアップ後の処理 */
      //ユーザー情報を追加
      const addUserInfo = async (uid) => {
        await setDoc(doc(db, "Users", uid), {
          AllNightState : 0,
          LoginStatus : true,
        });
        const userRef = collection(db, "Users");
        const loginIDRef = doc(userRef, uid);
        const AllNightLibraryRef = doc(collection(loginIDRef, "AllNightState"),"init");
        const documetn = {
            init: 0,
        }
        await setDoc(AllNightLibraryRef, documetn);
      }

    return(
        <>
            <img src={sky} alt="sky" className="login-img"/>
            <div className="login-position">
                <div className="login-choose-div">
                    <StyledPaper>
                    <form className='form'>
                        <img src={logo} alt="logo"/>
                        <TextField label="メールアドレス" value={email} onChange={(event) => setEmail(event.target.value)} variant="standard" className="text"/>
                        <TextField label="パスワード" value={password} onChange={(event) => setPassword(event.target.value)} variant="standard" className="text" type="password" />
                        <center><Button className="login btn" onClick={signin} >ログイン</Button></center>
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