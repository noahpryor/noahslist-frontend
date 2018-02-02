import 'isomorphic-unfetch'

import qs from "query-string"
const baseUrl = "https://api.stubsites.com/api/v1/laughstub/showtimes"
export async function getStandupNyShowTimesForDate(date) {
  console.log(date)
  const endDate = addDay(date)
  const query = {
    endDate: endDate,
    startDate: date,
    venueId: 71,
    itemsPerPage: 100,
    sortBy: 'datetime'
  }
  const url = `${baseUrl}?${qs.stringify(query)}`
  console.log(url)
  return fetch(url).then(response => response.json())
    .then(body => {
      return body.data.showtimes
    })
}

// stubsites api requires a start and and end date
const addDay = (dateString) => {
  const [year, month, day] = dateString.split('-');
  const date = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)))
  date.setDate(date.getDate() + 1)
  return date.toISOString().split("T")[0]
}

