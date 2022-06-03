export default class CoinService {
  static async getExchange(rate) {
    try {
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}latest/USD`);
      if (!response.ok) {
      throw Error(response);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }  
  }
}