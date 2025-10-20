const BASE_URL = "https://dragonballapp.vercel.app";

const fetchCharacters = async () => {
  const response = await fetch(`${BASE_URL}/dragonball`);
  return response.json();
};

export default fetchCharacters;
