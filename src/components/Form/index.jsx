import { useState } from "react";
import "./sass/Form.css";

const Form = () => {
  const handleForm = (event) => {
    event.preventDefault();
    setSubmittedForm(true);
    console.log({name, company, phone, message})
    setTimeout(() => {
      setSubmittedForm(false);
    }, 5000);
  };

  const [submittedForm, setSubmittedForm] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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
              className="form__input"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
              name="name"
              type="text"
              placeholder="Digite seu nome completo"
            ></input>
          </label>
          <label className="form__label">
            Empresa*
            <input
              className="form__input"
              onChange={(event) => setCompany(event.target.value)}
              value={company}
              required
              name="company"
              type="text"
              placeholder="Digite o nome da empresa"
            ></input>
          </label>
          <label className="form__label">
            Telefone*
            <input
              className="form__input"
              onChange={(event) => setPhone(event.target.value)}
              value={phone}
              required
              name="phone"
              type="tel"
              placeholder="+55 (000) 9 9999-9999"
            ></input>
          </label>
          <label className="form__label">
            Sua mensagem*
            <textarea
              className="form__input form__input__textarea"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              required
              name="message"
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
