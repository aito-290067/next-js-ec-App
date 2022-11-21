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

const Error = (props: any) => {
  
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

  let address = ""

  if(props.ordererAddress){
    address = props.ordererAddress
  }else{
    address =  props.addressValue
  }

  const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    props.SetAddressValue(ev.target.value);

    if(props.SetOrdererAddress){
      props.SetOrdererAddress(ev.target.value);
    }
    
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
              <label htmlFor="address">住所 </label>
              <span className="bg-red-600 rounded-md p-1 text-sm text-white " style={{ fontSize: "12px" }}>必須</span>
              <Error
              text="住所を入力してください" 
              value={props.addressErrorState}
              errorFlag={ props.errorFlag} />
            </div>
            <div>
              <input type="text" className="address border mr-4 py-1 px-3 rounded-md w-full h-10 focus:outline-none focus:ring-2 z-1" id="address" required style={{ width: "430px" }} onBlur={onChangeHandler}
              placeholder="例）東京都中央区"
              defaultValue={address}
              autoComplete="street-address"
              />
              

            </div>
          </div>
    </>
  )
}
