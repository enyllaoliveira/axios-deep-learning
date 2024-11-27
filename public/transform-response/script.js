const formFind = document.querySelector("[data-form-find]");

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  const options = {
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.isTransformed = true;
      data.name = "oi";
      // se eu quisesse remover algo, poderia:
      // delete data.address;
      return data;
    }),
  };

  axios.get(url, options).then(printResponse);
};

formFind.addEventListener("submit", handleFindSubmit);
