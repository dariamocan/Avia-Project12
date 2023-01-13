import React from 'react'
import { Link} from 'react-router-dom'


import test from '../../images/test.jpg'


export default function Header(props) {

  return (
    <header className='profile-header'>
        <img className = 'profile-picture' src = {props.profileData.image} alt = 'profile picture'/>
        <section className='left-section'>
            <div className='top'>
                <p className='username'>{props.profileData.username}</p>
                <Link to={'/account/edit'}><button className='edit-profile-button'>Edit Profile</button></Link>
            </div>
            <div className='bottom'>
                <p className='number-posts'>Rank {props.profileData.rank}</p>
                <p className='followers'>Followers {props.profileData.followers}</p>
                <p className='following'>Following {props.profileData.following}</p>
            </div>
        </section>
    </header>
  )
}
