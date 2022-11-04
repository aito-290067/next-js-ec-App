import React, { ChangeEvent } from 'react'

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

const Error1 = (props: any) => {
  
  if ( props.errorFlag === "true") {
    if (props.value === "empty" || props.value === "init" ) {
      return (
        <>
          <label className="Error text-red-500  ml-3 text-sm">{props.text}</label>
        </>
      )
    } else {
      return (
        <></>
      );
    }
  }else{
    return <></>
  }
}

export const AddressInput = (props: any) => {
  const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    props.SetAddressValue(ev.target.value);
    
    if(!(ev.target.value)){
      props.SetAddressErrorState("empty");  
    }else{
      props.SetAddressErrorState("ok");  
    }
 }

  return (
    <>
       <div className="my-5 ml-5">
            <div className="mb-2">
              <label htmlFor="name">住所 </label>
              <span className="bg-red-600 rounded-md p-1 text-sm text-white " style={{ fontSize: "12px" }}>必須</span>
              <Error1 
              text="住所を入力してください" 
              value={props.addressErrorState}
              errorFlag={ props.errorFlag} />
            </div>
            <div>
              <input type="text" className="name border mr-4 py-1 px-3 rounded-md w-full " id="name" required style={{ width: "430px" }} onChange={onChangeHandler}/>
            </div>
          </div>
    </>
  )
}
