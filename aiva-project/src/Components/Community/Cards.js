import React,{useState} from 'react'
import classNames  from 'classnames'
import {CSSTransition} from 'react-transition-group' 


export default function Cards() {

  const [showCard,setShowCard] = useState(false)

  function toggleShowCard () {
    setShowCard(prevState => !prevState)
  }

  return (
    <section className='card'>
        <h2 className = 'card--title'>Title</h2>
        <button onClick = {toggleShowCard} className='card--button'>{showCard ? "Hide information" : "Learn more!"}</button>
        <CSSTransition
          in = {showCard}
          unmountOnExit
          timeout={500}
          classNames="card-primary"
        >
          <div>
            <p className= 'recommandation'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </CSSTransition>
    </section>
  )
}
