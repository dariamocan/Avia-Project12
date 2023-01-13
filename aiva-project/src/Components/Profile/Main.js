import React from 'react'

import classNames from 'classnames'
import { Link } from 'react-router-dom'
export default function Main(props) {

    return (
        <main className='profile-main'>

            <div className='energy'>
                <h3>Congratulations!   You saved 0 energy this month!</h3>
                <Link to = '/usage'><button>Go to usage</button></Link>
            </div>
            <div className='group' >
                <button onClick={props.togglePost}>Create a new post</button>
            </div>
        
        </main>
  )
}
