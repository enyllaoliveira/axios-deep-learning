const formFind = document.querySelector("[data-form-find]");

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);

  const id = data.get("id", "slow");
  const url = apiUser(id);

  const configObject = {
    baseURL: API_BASE,
    url: `users/${id}`,
    method: "GET",
  };
  axios(configObject).get(url).then(printResponse);
};

formFind.addEventListener("submit", handleFindSubmit);
