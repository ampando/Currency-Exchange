export default class CoinService {
  static async getExchange(conversion_rate) {
    try {
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${conversion_rate}&appid=${process.env.API_KEY}latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}