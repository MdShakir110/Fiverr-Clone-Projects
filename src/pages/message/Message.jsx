import React from 'react'
import './Message.scss';
import { Link } from 'react-router-dom';
import User from '../../assets/User.jpg'
import Ayan from '../../assets/Ayan.png'
const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> Ayan Raza
        </span>
        <div className="messages">
          <div className="item">
            <img src={Ayan} alt="" />
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, .</p>
          </div>
          <div className="item">
            <img src={Ayan} alt="" />
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration .</p>
          </div>
          <div className="item owner">
            <img src={User} alt="" />
            <p> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          </div>
          <div className="item">
            <img src={Ayan} alt="" />
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some which don't look even slightly believable.</p>
          </div>
          <div className="item owner">
            <img src={User} alt="" />
            <p> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is.</p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message