import React, { useState,useEffect } from 'react'

import './profile.css'
import Header from './Header'
import Main from './Main'
import CreatePost from './Post/CreatePost.tsx'
import httpClient from '../../httpClient'

export default function Profile() {

    const [profileData,setProfileData] = useState({
      username:"",
      image:"",
      rank:0,
      followers:0,
      following:0,
    })
    useEffect(() => 
    async () => {
    try {
      const resp = await httpClient.get("/@me")
      setProfileData(prevState => ({
        ...prevState,
        username: resp.data.username
      }))
    }
    catch(e) {
      console.log("Not authenticated")
    }
  },[])
  const [post,setPost] = useState(false)

  const togglePost = () => {
     
    setPost(prevPost => !prevPost)
  }
  return (
    <div className='profile-page'>
      <Header profileData = {profileData} />
      <Main togglePost = {togglePost}/>

      {post && <CreatePost 
        profileData = {profileData}
        togglePost = {togglePost} 
      /> }
    </div>
  )
}
