import { getEpisodes,getEpisodeInfo} from "./api.js";
async function init() {
//header
 
const  header= document.getElementById("header");
header.textContent = "Rick and Morty API";
const h1 = document.createElement("h");
header.appendChild(h1);
header.style.marginLeft = "30px"
header.style.fontSize= "40px"
header.style.paddingBottom = "50px"
header.style.borderStyle = "outset"
header.style.borderLeftWidth = "40px"
header.style.borderLeftColor = "white"
header.style.backgroundColor = "white"


 
    //sidebar
  const episode = await getEpisodeInfo();
  const sidebar = document.getElementById("sidebar");
    episode.results.forEach(async ({ id, url }) => {
    const newEpisode = document.createElement("div");
    newEpisode.classList.add("side-bar")
    const episodeLink = document.createElement("a");
    episodeLink.href = url;
    episodeLink.textContent = "Episode " + id ;
    newEpisode.appendChild(episodeLink);
    sidebar.appendChild(newEpisode);
    sidebar.style.marginLeft = "30px"
    sidebar.style.lineHeight = "2"


 });
 
  ///Button
   let btn = document.createElement("button");
  btn.innerHTML = "reload episodes";
  //btn.addEventListener( );
  sidebar.appendChild(btn);
  
  ///Maincontainer

  const character= await getEpisodes();
  episodes.results.forEach(async ({character,episode,  }) => {
  
  //EpisodeTitle
    const EpisodeTitle = document.getElementById("EpisodeTitle");
    EpisodeTitle.textContent= episode.name;
  //airdate
    const airdate= document.getElementById("airdate");
    airdate.textContent= character.air_date + "|" + character.episode;

 });

          
  
 
    
    



}

init();

