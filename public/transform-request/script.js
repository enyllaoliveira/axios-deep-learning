const formUser = document.querySelector("[data-form-user]");

const transformRequest = (data, headers) => {
  headers.authorization = "Bearer Token";

  return data;
};
const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formUser);
  const url = apiUser();

  const options = {
    transformRequest: [...axios.defaults.transformRequest, transformRequest],
  };

  axios.post(url, options).then(printResponse);
};

formUser.addEventListener("submit", handleFindSubmit);
