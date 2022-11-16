import useSWR, { useSWRConfig} from 'swr';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";


const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const UserInfomation = (props: any) => {


  const router = useRouter();
  const { data, error, mutate } = useSWR(
    `http://localhost:8000/users?gestId=${props.gestIdValue}`,
    fetcher
  );

  console.log(props.gestIdValue)
  if (error) return (
    <div></div>
  );

  if (!data) return (
    <></>
    
    );
    
    props.SetOrdererName(data[0].name)
    props.SetOrdererMail(data[0].mail)
    props.SetOrdererAddress(data[0].address)
    props.SetOrdererTel(data[0].tel)

  return (

          <div className="mb-1 rounded-md">
            <div className="grid gap-1 grid-cols-7  h-24 ">
              <p className=' items-center flex justify-center col-span-2'>お届け先</p>
              <div className="col-span-4 items-center flex ">
                <ul>
                  <li>{data[0].name}　様</li>
                  <li>〒{data[0].zip}</li>
                  <li>{data[0].address}</li>
                  <li>{data[0].tel}</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>

  )
}
