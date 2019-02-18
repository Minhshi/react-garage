// TODO: add and export your own actions
export function fetchCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: "FETCH_CARS",
    payload: promise
  };
}

export function addCar(garage, car, callback) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const request = fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car)
  })
    .then(response => response.json())
    .then(callback);

  return {
    type: "ADD_CAR",
    payload: request
  };
}

export function fetchCar(id) {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${id}`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: "FETCH_CAR",
    payload: promise
  };
}

export function deleteCar(history, car) {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${car.id}`;
  fetch(url, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(() => history.push(""));
  return {
    type: "DELETE_CAR",
    payload: car
  };
}
