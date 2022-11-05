import React, { ChangeEvent, useEffect } from 'react'


const Navigation = (props: any) => {

  if (props.value.length > 0) {
    return (
      <>
        <div className="py-2 text-gray-500 text-sm ">
          <p>
            {(() => {
              if (props.value.length >= 8 && props.value.length <= 12) {
                return (
                  <>
                    <span className="material-symbols-outlined 
                  rounded-full mr-3 text-white translate-y-1.5
                  "
                      style={{ backgroundColor: "#75ad9d" }}
                    >
                      check_circle
                    </span>
                  </>
                );
              } else {
                return (
                  <>
                    <span className="material-symbols-outlined 
                  rounded-full mr-3 text-white translate-y-1.5 bg-gray-300
                  ">
                      check_circle
                    </span>
                  </>
                );
              }
            }
            )()}
            {props.text}
          </p>
        </div>
      </>
    )
  } else {
    return (
      <></>
    )
  }
}

const Error = (props: any) => {
  if (props.errorFlag === "true") {

    if (props.value === "empty" || props.value === "init") {
      return (
        <>
          <label className="Error text-red-500  ml-3 text-sm">{props.text}</label>
        </>
      )
    } else if (props.value === "format-inccorect") {
      return (
        <label className="Error text-red-500  ml-3 text-sm">8文字以上12文字以下で入力してください</label>
      );
    } else if (props.value === "mismatch") {
      return (
        <label className="Error text-red-500  ml-3 text-sm">パスワードが一致しません</label>
      );
    }
    else {
      return <></>
    }

  } else {
    return <></>
  }
}

export const PasswordInput = (props: {
  SetPasswordValue: any, SetPasswordErrorState: any, confirmPasswordValue: any,
  SetConfirmPasswordErrorState: any,
  passwordErrorState: any,
  passwordValue: any,
  errorFlag: any,
  displayFlag: boolean
}) => {

  const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    props.SetPasswordValue(ev.target.value);

    if (!(ev.target.value)) {
      props.SetPasswordErrorState("empty")
    } else if (ev.target.value.length < 8 || ev.target.value.length > 12) {
      props.SetPasswordErrorState("format-inccorect")
    } else {
      props.SetPasswordErrorState("ok")
    }

    if (props.displayFlag == true) {
      if (ev.target.value !== props.confirmPasswordValue) {
        props.SetConfirmPasswordErrorState("mismatch")
      } else if (ev.target.value === props.confirmPasswordValue) {
        props.SetConfirmPasswordErrorState("ok")
      }
    }
  }

  const NavigationDisplay = (props: any) => {
    if (props.displayFlag === "true") {
      return (
        <>
          <Navigation text="8文字以上16文字以内" value={props.passwordValue} />
        </>
      )
    } else {
      return <></>
    }
  }

  return (
    <>
      <div className="my-5 ml-5">
        <div className="mb-2">
          <label htmlFor="name">パスワード </label>
          <span className="bg-red-600 rounded-md p-1 text-sm text-white " style={{ fontSize: "12px" }}>必須</span>
          <Error
            text="パスワードを入力してください"
            value={props.passwordErrorState}
            confirmPasswordValue={props.confirmPasswordValue}
            SetPasswordErrorState={props.SetPasswordErrorState}
            errorFlag={props.errorFlag}
          
          />
        </div>
        <div>
          <input type="text" className="name border mr-4 py-1 px-3 rounded-md w-full " id="name" required style={{ width: "430px" }} onChange={onChangeHandler} />
        </div>

        <NavigationDisplay displayFlag={props.displayFlag} />

      </div>
    </>
  )
}
