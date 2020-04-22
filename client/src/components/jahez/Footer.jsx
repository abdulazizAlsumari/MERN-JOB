import React from "react";
import "./app.css";


export default function Footer(props) {
 
 
    let handleClick = (event)=>()=>{
    var target = event.target.getAttribute('href').replace('#', '.');
    if (typeof Element.prototype.scrollIntoView === 'function') {
      event.preventDefault();
      return document.querySelector(target).scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
  return (
   <>
   {props.register? <div className="slide-footer">
      <blockquote>910ths © 2018</blockquote>
      <footer>
        العلامات التجارية والصور الواردة في هذه الصفحة محفوظة لأصحابها.
      </footer>
    </div>
    : 
      <div className="slide-footer">
      <a
        className="icon-button light-next"
        href="#register"
        onClick={handleClick}
      ></a>
    </div>
    }
    </>
  );
}
