import 'isomorphic-unfetch'
export async function getCellarShowTimesForDate(date) {
  const body = {
    date: date,
    init: false,
    endpoint: 'getShowtimes'
  }
  return fetch('http://www.comedycellar.com/v3/reservation/api/', {
    method: 'post',
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(body => body.showtimes)
}


