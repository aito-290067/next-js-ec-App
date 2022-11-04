import React from 'react'
import style from "../../styles/input.module.css"
import { GreenButton } from 'components/greenButton'
import { MailInput } from 'components/form/mailInput'
import { PasswordInput } from 'components/form/passwordInput'
import { useState } from 'react'

export const Home = () => {
  const [mailValue, SetMailValue] = useState("");
  const [mailErrorState, SetMailErrorState] = useState("init");

  const [passwordValue, SetPasswordValue] = useState("");
  const [passwordErrorState, SetPasswordErrorState] = useState("init");

  const [errorFlag, SetErrorFlag] = useState("false");

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
                onClick={() => {
                  SetErrorFlag("true");

                  if (mailErrorState === "ok" &&
                      passwordErrorState === "ok"
                  ){
                    console.log("")
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
