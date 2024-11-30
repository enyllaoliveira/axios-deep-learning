const formFind = document.querySelector("[data-form-find]");

const controller = new AbortController();
const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);

  const id = data.get("id");
  const url = apiUser(id);

  const options = {
    signal: controller.signal,
  };

  axios.get(url, options).then(printResponse);
  setTimeout(() => {
    controller.abort();
  }, 100);
};

formFind.addEventListener("submit", handleFindSubmit);

// útil em requisições do tipo handleChange que ao digitar já vai fazendo requisição ao back, otimizando as requisições.
