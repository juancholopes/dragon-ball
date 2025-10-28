const BASE_URL = "https://dragonballapp.vercel.app";

const fetchCharacters = async (saga, type) => {
  // Construir URL: type + saga (sin barra entre ellos)
  // Para dragones: /dragons (saga está vacío)
  // Para personajes: /dragonballz, /dragonballsuper, /dragonballgt
  const url = `${BASE_URL}/${type}${saga}`;
  
  const response = await fetch(url);
  return response.json();
};

export default fetchCharacters;
