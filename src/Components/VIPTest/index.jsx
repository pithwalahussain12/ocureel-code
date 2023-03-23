import React from 'react'
import "./style.css"

const Index = () => {
  return (
    <div className='VIP__container'>
      <h1 className='VIP__caption'>We have a few spots left in our VIP test group!</h1>
        <form action="">
            <input type="text" placeholder='Name'/> <br />
            <input type="text" placeholder='Email'/> <br />
            <textarea name="" id="" className="VIP__discription" cols="10" rows="4" placeholder='Do you have an iOS device? Tell us why you should be in our VIP test group before Ocureel is released to public.'/>
            <button>Send</button>
        </form>
    </div>
  )
}

export default Index