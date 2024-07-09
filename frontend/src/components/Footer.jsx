import React from 'react'

const Footer = () => {
  return (
    <footer >
      <div className="banner">
        <div className="title">
          <h1>KING'S</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder='E-email' />
            <button >Subscribe</button>
          </div>
          <p>Sign up with your email to recieve news and updates</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer