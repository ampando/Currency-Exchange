export async function getExchange() {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
    let jsonResponse;
    if (response.ok) {
      jsonResponse = await response.json();
    } else {
      jsonResponse = false; 
    }
    return jsonResponse;
  } catch (error) {
    return error.message;
  }
}
