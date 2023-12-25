import { useState } from 'react'
export const Contact = () =>{
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col items-center justify-center text-custom w-full p-1 m-0">
      <h1 className="text-white size-text-briefcase font-bold">Contact</h1>
    </div>
    <div className="flex flex-col items-center justify-center text-white w-full p-20 m-0">
      <form id="form" className="flex flex-col justify-centertext-custom lg:w-1/3 w-full text-custom">

              <label htmlFor="from_name" className="form-label text-custom">
                Nombres:
              </label>
              <input type="text" placeholder='nombres' className="form-control bg-custom mb-4" id="from_name" name="from_name" />

              <label htmlFor="from_apellido" className="form-label">
                Apellidos:
              </label>
              <input type="text" placeholder='apellidos' className="form-control bg-custom mb-4" id="from_apellido" name="from_apellido" />

              <label htmlFor="from_email" className="form-label">
                Email:
              </label>
              <input type="text" placeholder='email' className="form-contro mb-4" id="from_email" name="from_email" />

              <label htmlFor="from_asunto" className="form-label">
                Asunto:
              </label>
              <input type="text" placeholder='asunto' className="form-control bg-custom mb-4" id="from_asunto" name="from_asunto" />


            <label htmlFor="message" className="form-label">
              Mensaje:
            </label>

              <input className="form-control bg-custom mb-4" type="text" placeholder='mensaje' name="message" id="message" />
            
          <div className="mb-3">
            <div className="g-recaptcha mb-4" data-sitekey="6LeAtNgnAAAAAAIQjf5Ei1t7ZwmJY5aPv1dmlPXe" id="dynamic-content-container">
              Captcha
            </div>
          </div>
          <div className="mb-3">
            <input type="submit" value="Enviar" id="button" className="btn bg-white text-black" />
          </div>
      </form>
    </div>
    </>
  )
}
let isFormEventAttached = false;
document.addEventListener("click", function(event) {
  const target = event.target;

  if (target.classList.contains("btn")) {

    if (!isFormEventAttached) {
      isFormEventAttached = true;
      const form = document.getElementById('form')
              form.addEventListener('submit', handleFormSubmit)
  
    }
  }
});

function handleFormSubmit(event) {
  event.preventDefault();

  const btn = document.getElementById('button');
  btn.value = 'Enviando...';

  const serviceID = 'default_service';
 const templateID = 'template_9z9nrrc';

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          btn.value = 'Enviar';
          //alert('Sent!');
      })
      .catch((err) => {
          btn.value = 'Enviar';
          //alert(JSON.stringify(err));
      });
}
