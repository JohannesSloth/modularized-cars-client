import { URL } from "../settings.js"

export function addOne() {
    document.getElementById("bnt-submit-new-car").onclick = makeNewCar

    async function makeNewCar() {
      const newCar = {}
      newCar.brand = document.getElementById("input-brand").value
      newCar.model = document.getElementById("input-model").value
      newCar.pricePrDay = document.getElementById("input-price-pr-day").value

      //Now newCar contains all required fields (mathces the DTO on the backend) and values
      const options = {}
      options.method = "POST"
      options.headers = { "Content-type": "application/json" }
      options.body = JSON.stringify(newCar)
      const addedCar = await fetch(URL, options).then(handleHttpErrors)

      document.getElementById("returned-new-car").innerText = JSON.stringify(addedCar, null, 2)
    }
  }