async function getEpisodes() {
  const url = "https://rickandmortyapi.com/api/episode";

  const response = await fetch(url);
  const results  = await response.json();
  return results;
}
async function getEpisodeInfo() {
  const url = "https://rickandmortyapi.com/api/character";

  const response = await fetch(url);
  const results  = await response.json();
  return results;
}



export { getEpisodes,getEpisodeInfo};
