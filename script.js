`use strict`;

const getMatchData = async () => {
  try {
    const response = await fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=49f51c47-7453-42d3-9cd8-ec6d9494d5c0&offset=0"
    );

    if (!response.status === "success") {
      return;
    }

    const data = await response.json();
    const matchesList = data.data;
    if (!matchesList) {
      return [];
    }

    const matchInfo = matchesList.map((data) => {
      return `${data.name}, ${data.status}`;
    });

    return matchInfo;
  } catch (error) {
    console.error(error);
  }
};

getMatchData().then((matchInfo) => {
  const list = document.getElementById("matches");
  list.innerHTML = matchInfo.map((data) => `<li>${data}</li>`);
  console.log(matchInfo);
});
