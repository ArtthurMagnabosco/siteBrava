import { useEffect, useState } from "react";
import "./sass/Form.css";
import buttonArrow from "../../assets/imagens/icons/buttonArrow.svg";
import sentCheck from "../../assets/imagens/icons/sentCheck.svg";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "StaticForms - Contato Brava",
    honeypot: "",
    message: "",
    replyTo: "felipe@wecode.digital",
    accessKey: "d51e8e2c-19f1-497e-b5a0-486af15bc604",
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const updateContact = useEffect(() => {
    setContact({
      ...contact,
      name,
      $company: company,
      phone,
      message,
    });
  }, [name, company, phone, message]);

  const handleForm = async (event) => {
    event.preventDefault();

    await fetchApi();

    setTimeout(() => {
      setSubmittedForm(true);
      resetForm();
    }, 2000);

    setTimeout(() => {
      setSubmittedForm(false);
    }, 5000);

    async function fetchApi() {
      try {
        const res = await fetch("https://api.staticforms.xyz/submit", {
          method: "POST",
          body: JSON.stringify(contact),
          headers: { "Content-Type": "application/json" },
        });

        const json = res.json();

        if (json.success) {
          setResponse({
            type: "success",
            message: "Thank you for reaching out to us.",
          });
        } else {
          setResponse({
            type: "error",
            message: json.message,
          });
        }
      } catch (e) {
        console.log("An error occurred", e);
        setResponse({
          type: "error",
          message: "An error occurred while submitting the form.",
        });
      }
    }
  };

  const resetForm = () => {
    setName("");
    setCompany("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="form">
      <div className="form__container">
        <div className="form__header">
          <h2 className="form__title2">CONTATO</h2>
          <div className="form__text">
            <h3 className="form__title1">
              Vamos <span className="text-highlight">conversar!</span>
            </h3>
            <p className="form__paragraph">
              Preencha o formulário abaixo para entrar em contato, ou pelos
              outros meios de comunicações abaixo.
            </p>
          </div>
        </div>
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
          <button
            type="submit"
            form="contact"
            className={`button__submit ${submittedForm && "form__submitted"}`}
          >
            <p className="button__submit__text">
              {submittedForm ? "Enviado" : "Enviar"}
            </p>
            <img
              src={submittedForm ? sentCheck : buttonArrow}
              className="button__submit__icon"
              alt=""
            ></img>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
