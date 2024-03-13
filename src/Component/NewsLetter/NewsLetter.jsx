import React from 'react'
import './NewsLetter.css'
function NewsLetter()  {
  return (
    <div className='newsLetter'>
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribe to our newletter and stay update</p>
      <div>
        <input type="emial" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
export default NewsLetter;