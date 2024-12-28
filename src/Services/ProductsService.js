import { PublicAxios } from "./AxiosHandler";

class ProductsService {
  static endPoint = "products";
  static getAll() {
    return PublicAxios.get(`${ProductsService.endPoint}`);
  }
  static getLimitProducts(count) {
    return PublicAxios.get(`${ProductsService.endPoint}?limit=${count}`);
  }
  static getSortedProducts(type) {
    return PublicAxios.get(`${ProductsService.endPoint}?sort=${type}`);
  }
}
export default ProductsService;
