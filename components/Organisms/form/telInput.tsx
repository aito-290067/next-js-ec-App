import React, { ChangeEvent } from 'react'
import { useEffect } from 'react';

const Navigation = (props: any) => {

  if (props.value.length > 0) {
    return (
      <>
        <div className="py-2 text-gray-500 text-sm mb-8">
          <p>
            {(() => {
              if (props.value.includes("-")) {
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

const Error4 = (props: any) => {
  if ( props.errorFlag === "true") {
    if (props.value === "empty" || props.value === "init") {
      return (
        <>
          <label className="Error text-red-500  ml-3 text-sm">{props.text}</label>
        </>
      )
    } else if(props.value === "format-inccorect") {
      return (
        <label className="Error text-red-500  ml-3 text-sm">xxx-xxxx-xxxxの形式で入力してください</label>
      );
    }else{
      return <></>
    }
  }else{
    return <></>
  }
}

export const TelInput = (props: any) => {

  const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    props.SetTelValue(ev.target.value);
    
    if(!(ev.target.value)){
      props.SetTelErrorState("empty");  
    }else if(!(ev.target.value.includes("-"))){
      props.SetTelErrorState("format-inccorect");  
    }else{
      props.SetTelErrorState("ok");  
    }
 }

  return (
    <>
      <div className="my-5 ml-5">
        <div className="mb-2">
          <label htmlFor="name">電話番号 </label>
          <span className="bg-red-600 rounded-md p-1 text-sm text-white " style={{ fontSize: "12px" }}>必須</span>
          <Error4 
          value={props.telErrorState} 
          text="電話番号を入力してください"
          SetTelErrorState={props.SetTelErrorState}
          errorFlag={props. errorFlag} />

        </div>
        <div>
          <input type="text" className="name border mr-4 py-1 px-3 rounded-md w-full focus:outline-none focus:ring-2 z-1 h-10" id="name" required style={{ width: "430px" }}
            onChange={onChangeHandler}
            placeholder="例）123-1234-1234"
          />
        </div>
        <Navigation text="-（ハイフン）を含む形式" value={props.telValue} />

      </div>
    </>
  )
}