

const BACKEND_URL = 'http://localhost:8080/api/v1/'

export async function getProducts() {
    const response = await fetch(BACKEND_URL + "cars");
    if (response.ok) return response.json();
    throw response;
  }


