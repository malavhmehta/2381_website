export const getEvents = (teams: number[], season: number) => {
  let reqUrl = `https://www.robotevents.com/api/v2/events?eventTypes%5B%5D=tournament&season%5B5D=${season}`
  teams.forEach((team) => {
    reqUrl += `&team%5B%5D=${team}`
  });

  fetch(reqUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

  console.log(reqUrl);
}