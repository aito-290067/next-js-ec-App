import React from 'react'
import style from "../../styles/input.module.css"
import { GreenButton } from 'components/Atoms/greenButton'
import { useState } from 'react'
import { MailInput } from 'components/Organisms/form/mailInput'
import { TelInput } from 'components/Organisms/form/telInput'
import { ZipInput } from 'components/Organisms/form/zipInput'
import { AddressInput } from 'components/Organisms/form/addressInput'
import { PasswordInput } from 'components/Organisms/form/passwordInput'
import { NameInput } from 'components/Organisms/form/nameInput'
import { AlternateEmail } from '@material-ui/icons'
import { ConfirmPasswordInput } from 'components/Organisms/form/confirmPassword'
import { useRouter } from 'next/router'





export const Home = () => {

  const router = useRouter();

  const [lastNameValue, SetLastNameValue] = useState("");
  const [lastNameErrorState, SetLastNameErrorState] = useState("init");

  const [firstNameValue, SetFirstNameValue] = useState("");
  const [firstNameErrorState, SetFirstNameErrorState] = useState("init");


  const [mailValue, SetMailValue] = useState("");
  const [mailErrorState, SetMailErrorState] = useState("init");

  const [telValue, SetTelValue] = useState("");
  const [telErrorState, SetTelErrorState] = useState("init");

  const [zipValue, SetZipValue] = useState("");
  const [zipErrorState, SetZipErrorState] = useState("init");

  const [addressValue, SetAddressValue] = useState("");
  const [addressErrorState, SetAddressErrorState] = useState("init");

  const [passwordValue, SetPasswordValue] = useState("");
  const [passwordErrorState, SetPasswordErrorState] = useState("init");

  const [confirmPasswordValue, SetConfirmPasswordValue] = useState("");
  const [confirmPasswordErrorState, SetConfirmPasswordErrorState] = useState("init");

  const [errorFlag, SetErrorFlag] = useState("false");

const clear = () => {
  SetLastNameErrorState("init")
  SetFirstNameErrorState("init")
  SetMailErrorState("init")
  SetTelErrorState("init")
  SetZipErrorState("init")
  SetAddressErrorState("init")
  SetPasswordErrorState("init")
  SetConfirmPasswordErrorState("init")

  SetLastNameValue("")
  SetFirstNameValue("")
  SetMailValue("")
  SetTelValue("")
  SetZipValue("")
  SetAddressValue("")
  SetPasswordValue("")
  SetConfirmPasswordValue("")


  SetErrorFlag("false");
}


 const register = () => {
  if (
    firstNameErrorState === "ok" &&
    lastNameErrorState === "ok" &&
    mailErrorState === "ok" &&

    telErrorState === "ok" &&
    zipErrorState === "ok" &&
    addressErrorState === "ok" &&
    passwordErrorState === "ok" &&
    confirmPasswordErrorState === "ok"
    ) {


      const data = {
        name: `${lastNameValue} ${firstNameValue}`,
        mail: mailValue,
        zip: zipValue,
        address: addressValue,
        tel: telValue,
        password: passwordValue
      };

      fetch(`http://localhost:8000/users`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((response) => {
        return response.json();
      }).then((data) => {
        alert("登録が完了いたしました。");
      }).then(() => {
        router.push("/users/login");
      })
    
  } else {
    SetErrorFlag("true");
  }
  
 }


  return (
    <>
      {/* <div className=" flex flex-wrap justify-center items-center mt-7">
        <h1 className="text-bold" style={{ 
          color: "#75ad9d",
           fontSize: "30px" }}>会員登録</h1>
      </div> */}

      <div className="container flex flex-wrap justify-center items-center mx-auto py-5 px-5 bg-white-100 my-12">

        <form  className="bg-gray-50 p-4 rounded-xl">
          <h2 className="my-5 ml-5 text-xl text-gray-500 ">基本情報</h2>
          <hr className="border border-1 border-gray-300 bg-gray-300" />

          <NameInput
            lastNameValue={lastNameValue} SetLastNameValue={SetLastNameValue}
            firstNameValue={firstNameValue}
            SetFirstNameValue={SetFirstNameValue}

            firstNameErrorState={firstNameErrorState} SetFirstNameErrorState={SetFirstNameErrorState}
            lastNameErrorState={lastNameErrorState}
            SetLastNameErrorState={SetLastNameErrorState}
            errorFlag={errorFlag}
          />
          <hr />


          <MailInput
            mailValue={mailValue}
            SetMailValue={SetMailValue}
            mailErrorState={mailErrorState} SetMailErrorState={SetMailErrorState}
            errorFlag={errorFlag}
            displayFlag={true}
          />
          <hr />

          <TelInput
            telValue={telValue} SetTelValue={SetTelValue} telErrorState={telErrorState} SetTelErrorState={SetTelErrorState}
            errorFlag={errorFlag}
          />
          <hr />

          <ZipInput
            zipValue={zipValue} SetZipValue={SetZipValue} zipErrorState={zipErrorState} SetZipErrorState={SetZipErrorState}
            errorFlag={errorFlag}
          />
          <hr />

          <AddressInput
            addressValue={addressValue}
            SetAddressValue={SetAddressValue} addressErrorState={addressErrorState} SetAddressErrorState={SetAddressErrorState}
            errorFlag={errorFlag}
          />
          <hr />

          <PasswordInput
            passwordValue={passwordValue} SetPasswordValue={SetPasswordValue}
            passwordErrorState={passwordErrorState} SetPasswordErrorState={SetPasswordErrorState}
            errorFlag={errorFlag}
            displayFlag={true}

            confirmPasswordValue={confirmPasswordValue}
            SetConfirmPasswordErrorState={SetConfirmPasswordErrorState}
          />
          <hr />

          <ConfirmPasswordInput
            confirmPasswordValue={confirmPasswordValue} SetConfirmPasswordValue={SetConfirmPasswordValue} confirmPasswordErrorState={confirmPasswordErrorState} SetConfirmPasswordErrorState={SetConfirmPasswordErrorState}
            errorFlag={errorFlag}

            passwordValue={passwordValue}
          />


          <div className="items-center justify-center flex flex-wrap my-4 ">

            <button type="button" className="text-white px-6 py-2 rounded-md text-sm mr-3 mt-5" style={{ backgroundColor: "#75ad9d", border: "solid 1px #75ad9d" }}
              onClick={register}
            >登録</button>


            <button type="reset" className="text-gray-900 px-4 py-2 rounded-md text-sm mt-5" style={{ color: "#75ad9d", border: "solid 1px #75ad9d" }} onClick={clear}>クリア</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Home;
