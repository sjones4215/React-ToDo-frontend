const BACKEND_URL = 'http://localhost:8080/api/v1/cars'

export async function getProducts() {
  const response = await fetch(BACKEND_URL);
  if (response.ok) return response.json();
  throw response;
}

export async function getProduct(id) {
  const response = await fetch(BACKEND_URL + id);
  if (response.ok) return response.json();
  throw response;
}


