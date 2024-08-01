import axios from 'axios';
export const get_currency = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/melkamu372/jsondb/master/currency.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Optionally re-throw the error if you want to handle it further up the chain
  }
};
