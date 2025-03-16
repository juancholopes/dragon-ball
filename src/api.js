const BASE_URL = "https://www.dragonball-api.com/api"

const fetchCharacters = async () => {
    const response = await fetch(`${BASE_URL}/characters`)
    return response.json()
}