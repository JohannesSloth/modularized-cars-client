import { URL } from "../index.js"

//We will add errorhandling in the class
export async function showAll() {
    const allCars = await fetch(URL).then(r => r.json())
    const tableRows = allCars.map(car => `
        <tr>
          <td>${car.id}</td>
          <td>${car.brand}</td>
          <td>${car.model}</td>
          <td>${car.pricePrDay}</td>
        </tr>
      `
    ).join("")
    document.getElementById("tbl-cars-body").innerHTML = tableRows
  }