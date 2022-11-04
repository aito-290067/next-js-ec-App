import React, { ChangeEvent } from 'react'
import { useEffect } from 'react';

const Navigation = (props: any) => {

  if (props.value.length > 0) {
    return (
      <>
        <div className="py-2 text-gray-500 text-sm mb-8">
          <p>
            {(() => {
              if (props.value.includes("@")) {
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

const Error2 = (props: any) => {
  if (props.errorFlag === "true" ) {
    if (props.value === "empty" || props.value === "init") {
      return (
        <>
          <label className="Error text-red-500  ml-3 text-sm">{props.text}</label>
        </>
      )
    } else if (props.value === "format-inccorect") {
      return (
        <label className="Error text-red-500  ml-3 text-sm">xxx@xxxxの形式で入力してください</label>
      );
    } else {
      return <></>
    }
  } else {
    return <></>
  }
}



export const MailInput = (props: { SetMailErrorState:any, SetMailValue: any ,errorFlag:any,mailErrorState :any, mailValue:any ,displayFlag:any}) => {

  const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    props.SetMailValue(ev.target.value);
    
    if(!(ev.target.value)){
      props.SetMailErrorState("empty");  
    }else if(!(ev.target.value.includes("@"))){
      props.SetMailErrorState("format-inccorect");  
    }else{
      props.SetMailErrorState("ok");  
    }
 }

 const NavigationDisplay = (props :any) =>{
  if(props.displayFlag === "true"){
    return(
      <>
        <Navigation value={props.mailValue} text="@を含む形式" />
      </>
    )
    }else{
      return <></>
    }
}

  return (
    <>
      <div className="my-5 ml-5">
        <div className="mb-2">
          <label htmlFor="name">メールアドレス </label>
          <span className="bg-red-600 rounded-md p-1 text-sm text-white " style={{ fontSize: "12px" }}>必須</span>
          <Error2
            value={props.mailErrorState}
            text="メールアドレスを入力してください"
            SetMailErrorState={props.SetMailErrorState}
            errorFlag={props.errorFlag} />
        </div>
        <div>
          <input type="text" className="name border mr-4 py-1 px-3 rounded-md w-full " id="name" required style={{ width: "430px" }} onChange={onChangeHandler} />
        </div>

        <NavigationDisplay displayFlag={props.displayFlag} />

      </div>
    </>
  )
}
