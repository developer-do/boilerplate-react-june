import axios from "axios";
import _ from "lodash";
import { apiAddress } from "lib/config";

let apiList = {
  home: "/",
  usersList: "/api/users/list",
};

apiList = _.reduce(
  apiList,
  (acc, item, key) => {
    acc[key] = apiAddress + item;
    return acc;
  },
  {}
);

export function getUsers() {
  return axios.get(apiList.usersList);
}
export function getHome() {
  return axios.get(apiList.home);
}
