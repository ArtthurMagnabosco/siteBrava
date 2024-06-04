import { useEffect, useState } from "react";
import buttonArrow from "../../assets/imagens/icons/buttonArrow.svg";
import sentCheck from "../../assets/imagens/icons/sentCheck.svg";
import "./sass/Form.css";

const Form = ({ home }) => {
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
    accessKey: "7277fb36-e05f-47ef-86ff-d0bf291ca2a8",
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
      setSubmittedForm(false);
      setResponse({
        type: "",
        message: "",
      });
    }, 5000);

    async function fetchApi() {
      try {
        const res = await fetch("https://api.staticforms.xyz/submit", {
          method: "POST",
          body: JSON.stringify(contact),
          headers: { "Content-Type": "application/json" },
        });

        const json = await res.json();

        if (json.success) {
          setResponse({
            type: "success",
            message: "Enviado",
          });
          resetForm();
        } else {
          setResponse({
            type: "error",
            message: "Erro ao enviar",
          });
        }
      } catch (e) {
        console.log("An error occurred", e);
        setResponse({
          type: "error",
          message: "Erro ao enviar",
        });
      } finally {
        setSubmittedForm(true);
      }
    }
  };

  const resetForm = () => {
    setName("");
    setCompany("");
    setPhone("");
    setMessage("");
  };

  // const phoneMask = (phone) => {
  //   if (phone.length === 11 && Number(phone)) {
  //     const ddd = phone.slice(0, 2);
  //     const firstPart = phone.slice(2, 7);
  //     const secPart = phone.slice(7, 11);
  //     const fixedPhone = `(${ddd}) ${firstPart}-${secPart}`;
  //     return fixedPhone;
  //   }
  //   if (phone.length === 10 && Number(phone)) {
  //     const ddd = phone.slice(0, 2);
  //     const firstPart = phone.slice(2, 6);
  //     const secPart = phone.slice(6, 10);
  //     const fixedPhone = `(${ddd}) ${firstPart}-${secPart}`;
  //     return fixedPhone;
  //   }
  // };

  return (
    <div className="form">
      <div className="form__container">
        <div className="form__header">
          {home ? (
            <p className="form__title2">Contato</p>
          ) : (
            <h2 className="form__title2">Contato</h2>
          )}
          <div className="form__text">
            {home ? (
              <h2 className="form__title1">
                Vamos <span className="text-highlight">conversar!</span>
              </h2>
            ) : (
              <h1 className="form__title1">
                Vamos <span className="text-highlight">conversar!</span>
              </h1>
            )}
            <p className="form__paragraph">
              Preencha o formulário para que possamos entrar em contato ou nos
              mande uma mensagem pelos canais abaixo:
            </p>
          </div>
        </div>
        <form
          className="form__body"
          onSubmit={handleForm}
          method="get"
          id="contact"
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
              // onBlur={(event) => setPhone(phoneMask(event.target.value))}
              inputMode="numeric"
              value={phone}
              required
              name="phone"
              type="tel"
              placeholder="(00) 9 9999-9999"
              maxLength={15}
              minLength={10}
            // pattern="([0-9]{2}) [0-9]{4,5}-[0-9]{4}"
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
              {submittedForm ? response.message : "Enviar"}
            </p>
            <img
              src={response.type == "success" ? sentCheck : buttonArrow}
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