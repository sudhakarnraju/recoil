import { atom } from "recoil";

export default atom({
  key: "authContext", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
