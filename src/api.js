const BASE_URL = "https://dragonball-api.com/api";

const fetchCharacters = async () => {
  const response = await fetch(`${BASE_URL}/characters/?limit=18`);
  return response.json();
};

export default fetchCharacters;
