// TODO: add and export your own actions
export function fetchCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`
  const promise = fetch(url)
                  .then(response => response.json())
  return {
    type: "FETCH_CARS",
    payload: promise
  }
}
