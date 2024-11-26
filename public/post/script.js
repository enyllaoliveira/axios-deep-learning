const formUser = document.querySelector("[data-form-user]");

const handleFormUser = (e) => {
  e.preventDefault();

  const data = getFormData(formUser);

  const url = apiUser();

  axios.post(url, data).then(printResponse);

  console.log(Object.fromEntries(data));
};
formUser.addEventListener("submit", handleFormUser);
