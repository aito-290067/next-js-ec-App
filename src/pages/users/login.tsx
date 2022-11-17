import React, { useEffect } from 'react'
import style from "../../styles/input.module.css"
import { GreenButton } from 'components/Atoms/greenButton'
import { MailInput } from 'components/Organisms/form/mailInput'
import { PasswordInput } from 'components/Organisms/form/passwordInput'
import { useState } from 'react'
import { useRouter } from 'next/router'


export const Home = () => {
  const [mailValue, SetMailValue] = useState("");
  const [mailErrorState, SetMailErrorState] = useState("init");

  const [passwordValue, SetPasswordValue] = useState("");
  const [passwordErrorState, SetPasswordErrorState] = useState("init");

  const [errorFlag, SetErrorFlag] = useState("false");
  // ログイン状態
  const [loginStatus, SetLoginStatus] = useState(false)

  const [gestIdValue, SetGestIdValue] = useState("")
  const [cartStatus, SetCartStatus] = useState("")

  const router = useRouter();


  useEffect(()=>{

    const splitCookie = document.cookie.split(';');
    const list = [];

  for (let i = 0; i < splitCookie.length; i++) {
    list.push(splitCookie[i].split('='));
  }
  
  list.map((data, index) => {
    if (data.includes("login")) {
      SetLoginStatus(true)
    }
    // ゲストID付与
    if (data.includes(" gestId")) {
      SetGestIdValue(data[1]);
    }

    if (data.includes(" carts")) {
      SetCartStatus(data[1]);
    }
  })
},[])
  
  const loginStatusRegister = (props: any) => {

    // ログインしているか判定
    if (loginStatus === false) {
      console.log(`put前 ${gestIdValue}`)
      const data = {
        name: props[0].name,
        mail: props[0].mail,
        zip: props[0].zip,
        address: props[0].address,
        tel: props[0].tel,
        password: props[0].password,
        status: "login",
        gestId: gestIdValue
      };


      // ログインstatus追加
      fetch(`http://localhost:8000/users/${props[0].id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
      }).then(() => {
        if(cartStatus === "confirm"){
          router.push("/carts/confirm");
          document.cookie = 'status=shopping; max-age=0; path=/';
        }else{
          router.push("/items");
        }
      }).then(() => {
        alert("ログインしました。");
          document.cookie = "status=login; path=/;";
      })

    } else {
      alert("既にログインしています")
    }

  }



  return (
    <>
      {/* <div className=" flex flex-wrap justify-center items-center mt-7">
        <h1 className="text-bold " style={{ color: "#75ad9d", fontSize: "30px" }}>ログイン</h1>
      </div> */}

      <div className="container flex flex-wrap justify-center items-center mx-auto py-5 px-5 bg-white-100 my-12">

        <div className="bg-gray-50 p-4 rounded-xl ">

          <form action="" className="">
            <MailInput
              mailErrorState={mailErrorState}
              mailValue={mailValue}
              errorFlag={errorFlag}
              SetMailErrorState={SetMailErrorState}
              SetMailValue={SetMailValue}
              displayFlag={false}
            />

            <PasswordInput
              SetPasswordValue={SetPasswordValue}
              SetPasswordErrorState={SetPasswordErrorState}
              confirmPasswordValue={passwordValue}
              SetConfirmPasswordErrorState={passwordErrorState}
              passwordErrorState={passwordErrorState}
              passwordValue={passwordValue}
              errorFlag={errorFlag}
              displayFlag={false}
            />

            <div className="icontainer flex flex-wrap justify-center items-center ">

              <button type="button" className="text-white px-12 py-2 rounded-md text-sm mr-3" style={{ backgroundColor: "#75ad9d" }}
                onClick={async () => {
                  SetErrorFlag("true");

                  if (mailErrorState === "ok" &&
                    passwordErrorState === "ok"
                  ) {
                    console.log("")
                    await fetch(`http://localhost:8000/users?mail=${mailValue}&&password=${passwordValue}`)
                      .then(response => response.json())
                      .then((data) => {
                        if (data.length === 0) {
                          alert("メールアドレスかパスワードが違います。");
                        } else {
                          if (data[0].mail === mailValue && data[0].password === passwordValue) {
                            // alert("ログインしました。");
                            loginStatusRegister(data)
                            // console.log(data)
                          } else {
                            alert("メールアドレスかパスワードが違います。");
                          }
                        }
                      })
                    // .catch(error => {
                    //   alert("メールアドレスかパスワードが違います。c");
                    // });

                  }

                }}
              >ログイン</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}




export default Home;
