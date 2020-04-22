import React from 'react'
import Footer from './Footer'
import Form from './Form'
import "./app.css";
export default function Register() {

  
    return (
        <>
        <a name="register"></a>
        <section id="register" className="slide register">
          <div className="slide-header"></div>
          <div className="slide-content" id="initial-register">
            <div className="description">
              <h2>معلومات الأسره </h2>
            </div>
           <Form />
          </div>
          <Footer register="register"/>
        </section>
        </>
    )
}
