import React from 'react'
import "./app.css";
import Input from '../Input';
const Form=(props)=> {
    return (
        <>
         <form onSubmit={props.handler} id="form">
              <div className="form-fields">
                <div className="form-group form-group-medium">
                  <input
                    type="text"
                    id="full-name"
                    placeholder="الاسم الكامل*"
                    required
                  />
                </div>
                <div className="form-group form-group-medium">
                  <input
                    type="text"
                    id="mobile"
                    placeholder="رقم الجوال*"
                    required
                  />
                </div>
                <div className="form-group form-group-medium">
                  <input
                    type="email"
                    id="email"
                    placeholder="البريد الالكتروني*"
                    required
                  />
                </div>
              </div>
              <div className="form-fields">
                <div className="form-group form-group-medium">
                  <input type="text" id="city" placeholder="المدينة*" required />
                </div>
                <div className="form-group form-group-medium">
                  <input
                    type="text"
                    id="district"
                    placeholder="الحي السكني*"
                    required
                  />
                </div>
              </div>
              <div className="form-fields">
                <div className="form-group form-group-medium">
                  <input
                    type="text"
                    id="type-of-food"
                    placeholder="نوع الطعام*"
                    required
                  />
                </div>
              </div>
              <div className="form-fields">
                <div className="form-group form-group-medium">
                  <label className="checkbox-inline">
                    هل انت موافق على وضع لوحة مضيئة بمقاس0.5x0.5 تتحتوي على "910"
                    على جدار منزلك؟
                    <input type="checkbox" id="billboard" required />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-fields">
                <div className="form-group form-group-medium">
                  <label className="checkbox-inline">
                    هل أنت جاهز لتسليم الطبق خلال 20 دقيقة من استلام الطلب؟
                    <input
                      type="checkbox"
                      id="preparation"
                      required
                      defaultChecked
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-button">
                <input
                  id="submit"
                  className="button"
                  type="submit"
                  value="أرسِل الطلب"
                />
              </div>
            </form>
        </>
    )
}
export default Form ;