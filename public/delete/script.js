const formFind = document.querySelector("[data-form-find]");
const formUser = document.querySelector("[data-form-user]");

const handleFindUser = (e) => {
  e.preventDefault();
  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  axios.get(url).then(printResponse).then(populate);
};

const handleUserSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formUser);
  const id = data.get("id");
  const url = apiUser(id);

  axios.delete(url, data).then(printResponse);
};

formFind.addEventListener("submit", handleFindUser);
formUser.addEventListener("submit", handleUserSubmit);
