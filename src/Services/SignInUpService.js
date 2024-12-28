import { PublicAxios } from "./AxiosHandler";

class SignInUpService {
  static endPoint = "login";
  static endPoint1 = "signup";
  static signInPost(body) {
    return PublicAxios.post(`${SignInUpService.endPoint}`, body);
  }
  static signUpPost(body) {
    return PublicAxios.post(`${SignInUpService.endPoint1}`, body);
  }
}
export default SignInUpService;
