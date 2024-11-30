const formFind = document.querySelector("[data-form-find]");

axios.interceptors.request.use(
  function (config) {
    console.log("request", config);
    config.url = config.url + "?teste";

    return config;
  },
  function (error) {
    console.log("error", error);

    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    console.log("response", response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);

  const id = data.get("id");
  const url = apiUser(id);

  axios.get(url).then(printResponse);
};

formFind.addEventListener("submit", handleFindSubmit);
