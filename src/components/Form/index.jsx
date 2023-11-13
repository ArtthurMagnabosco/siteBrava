

const Form = () => {

    return (
        <div className="form">
            <div className={"form__container"}>
                <h2 className={"form__title2"}>CONTATO</h2>
                <h3 className={"form__title1"}>
                  Vamos <span className={"text-highlight"}>conversar!</span>
                </h3>
                <p className={"form__text1"}>
                  Preencha o formulário abaixo para entrar em contato, ou pelos
                  outros meios de comunicações abaixo.
                </p>
                <form method="get" id="contact" action="/action_page.php">
                  <label>
                    Nome*{" "}
                    <input
                      name="name"
                      type="text"
                      placeholder="Digite seu nome completo"
                    ></input>
                  </label>
                  <label>
                    Empresa*{" "}
                    <input
                      name="company"
                      type="text"
                      placeholder="Digite o nome da empresa"
                    ></input>
                  </label>
                  <label>
                    Telefone*{" "}
                    <input
                      name="phone"
                      type="phone"
                      placeholder="+55 (000) 9 9999-9999"
                    ></input>
                  </label>
                  <label>
                    Sua mensagem*{" "}
                    <textarea
                      name="message"
                      type="text"
                      placeholder="Escreva aqui sua mensagem"
                    ></textarea>
                  </label>
                </form>
                <button type="submit" form="contact" className="button__submit">
                  Enviar
                </button>
              </div>
        </div>
        
    )
}

export default Form