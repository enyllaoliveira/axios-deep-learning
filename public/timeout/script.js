const formFind = document.querySelector("[data-form-find]");

const controller = new AbortController();
const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);

  const id = data.get("id", "slow");
  const url = apiUser(id);

  const options = {
    timeout: 3000,
  };
  axios
    .get(url, options)
    .then(printResponse)
    .catch((e) => {
      console.log("deu errado", e.message);
    });
};

formFind.addEventListener("submit", handleFindSubmit);
