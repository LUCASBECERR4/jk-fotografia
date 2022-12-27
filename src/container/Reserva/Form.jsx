import React from 'react'
import emailjs from 'emailjs-com'

import './Form.scss'

const Form = () => {

  function enviarEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_4k1xdko', 'template_i3aocvr', e.target, 'NnW9Zvzv3hHlCRkSh').then(res=>{
      alert("se ha enviado correctamente");
      console.log(res)
    })
  }

  return (
    <div className='container'>

        <form onSubmit={enviarEmail}>

          <div className='form-tiem'>
             <label htmlFor="name">Nombre</label>
             <input type="text"
              name='name'
              className='name' 
              placeholder='Tu Nombre...'
              required
              />
          </div>

          {/* <div className='form-tiem'>
             <label htmlFor="lastname">Apellido</label>
             <input type="text"
              name='lastname'
              className='name'
              placeholder='Tu Apellido...'
              required
              />
          </div> */}

          <div className='form-tiem'>
             <label htmlFor="email">Email</label>
             <input type="text" 
              name='email'
              className='name' 
              placeholder='Tu Email...'
              required
              />
          </div>

          <div className='form-tiem'>
          <label htmlFor="meetingtime">Turno</label>
            <input type="date" 
             id="meetingtime"
             name="meetingtime"
             min="2022-06-07"
             max="2025-06-14"
             required
             >
            </input>
          </div>

          <div className='textarea form-item'>
            <label htmlFor='message'>Mensaje</label>
             <textarea name="message" id=""
               cols="30" 
               rows="5"
               placeholder='Tu mensaje...'
               required
               >
             </textarea>
          </div>

          

          <div className='btn'>
            <button type='submit'>Enviar</button>
          </div>

        </form>

      </div>
  )
}

export default Form