"use client"
import {IKVideo} from "imagekitio-next"

import React from 'react'
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT
type VideoTypes = {
    path:string;
    className?:string
}

const Video = ({path,className}:VideoTypes) => {
  return (
    <IKVideo urlEndpoint={urlEndpoint} path={path} className={className}
    transformation={[{width:"1920",height:"1080"}]}
    controls
    />
  )
}

export default Video