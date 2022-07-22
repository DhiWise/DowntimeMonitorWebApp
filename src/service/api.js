import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {},
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
//const corsUrl = "https://cors-anywhere.herokuapp.com/";
export const getStatus = ({
  url = "",
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url,
    method: "get",
    params,
    headers,
    data,
  });
};

export const postBAasAItLazrUlP2GZvhmDlSV = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://cors-anywhere.herokuapp.com/https://hooks.slack.com/services/[your slack webhook setups url]`,
    method: "post",
    params,
    headers,
    data: { text: data.service.toUpperCase() +" Is Down !" },
  });
};
