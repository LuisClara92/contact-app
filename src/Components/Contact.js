import React from 'react'
import './Contact.css'

//Contact app should receives props to render the information 

export default function Contact(props) {
  return (

    <div className="Contact">
      <div className={props.status ? "shadow-online" : "shadow-offline"}>
        <img className="avatar" src={props.avatar} alt="" />
        <div>
          <h4 className="name">{props.nickName}</h4>
          <div className="status">
            <div className={props.status ? "status-online" : "status-offline"}></div>
            <div
              className={
                props.status ? "status-color-online" : "status-color-offline"
              }
            ></div>
            <p className="status-text"> {props.status ? "Online" : "Offline"} </p>
          </div>
        </div>
      </div>
    </div>
  );
}