import { useState } from "react";
import "./sass/Form.css";

const Form = () => {

  const handleForm = (event) => {
    event.preventDefault();
    setSubmittedForm(true);
    setTimeout(() => {
      setSubmittedForm(false);
    }, 5000);
  };

  const [submittedForm, setSubmittedForm] = useState(false);

  return (
    <div className="form">
      <div className="form__container">
        <h2 className="form__title2">CONTATO</h2>
        <h3 className="form__title1">
          Vamos <span className="text-highlight">conversar!</span>
        </h3>
        <p className="form__text1">
          Preencha o formulário abaixo para entrar em contato, ou pelos outros
          meios de comunicações abaixo.
        </p>
        <form
          className="form__body"
          onSubmit={handleForm}
          method="get"
          id="contact"
          action="/action_page.php"
        >
          <label className="form__label">
            Nome*
            <input
              required
              className="form__input"
              name="name"
              type="text"
              placeholder="Digite seu nome completo"
            ></input>
          </label>
          <label className="form__label">
            Empresa*
            <input
              required
              className="form__input"
              name="company"
              type="text"
              placeholder="Digite o nome da empresa"
            ></input>
          </label>
          <label className="form__label">
            Telefone*
            <input
              required
              className="form__input"
              name="phone"
              type="tel"
              placeholder="+55 (000) 9 9999-9999"
            ></input>
          </label>
          <label className="form__label">
            Sua mensagem*
            <textarea
              required
              className="form__input form__input__textarea"
              name="message"
              type="text"
              placeholder="Escreva aqui sua mensagem"
              rows={4}
            ></textarea>
          </label>
        </form>
        <button
          type="submit"
          form="contact"
          className={`button__submit ${submittedForm && "form__submitted"}`}
        >
          <p>{submittedForm ? "Enviado" : "Enviar"}</p>
        </button>
      </div>
    </div>
  );
};

export default Form;
