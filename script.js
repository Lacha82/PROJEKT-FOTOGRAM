// #region Variablen
// Ordner, in dem die Fotos liegen (groß für den Dialog, klein für die Galerie).
const PHOTO_PATH = "./assets/img/";
const THUMBNAIL_PATH = "./assets/img/thumbnails/";

// Fotos aus assets/img: Dateiname ohne .jpg (= Titel im Dialog) und alt-Text.
const PHOTOS = [
  { name: "lake-alps-sunset", alt: "Lake with the Alps on the horizon at sunset" },
  { name: "alps-sunset-panorama", alt: "Golden sunset over the Alps behind a forest and houses" },
  { name: "lake-alps-birds", alt: "Grey lake with birds and snowy Alps in the distance" },
  { name: "lake-promenade", alt: "Stone lake promenade with autumn trees" },
  { name: "lake-meadow", alt: "Meadow and trees with a view of the lake under a blue sky" },
  { name: "ferry-lake", alt: "Ferry on the lake under dramatic clouds" },
  { name: "konstanz-harbour", alt: "Harbour of Konstanz with the Imperia statue and a boat" },
  { name: "konstanz-imperia", alt: "Konstanz harbour entrance with the Imperia statue and ships" },
  { name: "tree-sunrise", alt: "Tree silhouette in front of an orange sunrise" },
  { name: "sunset-field", alt: "Field with a fence and trees at sunset" },
  { name: "forest-valley", alt: "Green forest valley with hills under a cloudy sky" },
  { name: "cloudy-treetops", alt: "Grey clouds over green treetops and houses" },
  { name: "cloudy-view", alt: "Cloudy sky over trees and a hilly horizon" },
  { name: "house-blue-sky", alt: "White house with cars under a blue sky with small clouds" },
  { name: "palace-garden", alt: "Pink baroque palace behind green trees" },
  { name: "sea-beach", alt: "Man standing in the waves on a sandy beach" },
  { name: "warsaw-palace-of-culture", alt: "Palace of Culture and Science in Warsaw on a sunny day" },
  { name: "warsaw-skyscrapers", alt: "Modern skyscrapers in Warsaw behind green trees" },
  { name: "warsaw-neon-sign", alt: "Colourful neon sign spelling Warszawa at night" },
  { name: "warsaw-castle-square", alt: "Sigismund's Column and the Royal Castle in Warsaw" },
  { name: "warsaw-castle-square-dusk", alt: "Castle Square in Warsaw at dusk" },
  { name: "warsaw-old-town-night", alt: "Warsaw Old Town seen from above at night" },
  { name: "warsaw-skyline-night", alt: "Warsaw skyline with lit towers at night" },
  { name: "warsaw-rooftops-night", alt: "Old town rooftops in front of the Warsaw skyline at night" },
  { name: "warsaw-night-panorama", alt: "Night panorama of Warsaw with a light beam in the sky" },
  { name: "halloween-house", alt: "House with colourful Halloween decoration at night" },
  { name: "steak-dinner", alt: "Steak with sauce on a blue plate at a restaurant table" },
  { name: "campfire", alt: "Campfire burning in the dark" }
];

let currentIndex = 0;
// #endregion


function render() {
  const galleryRef = document.getElementById("gallery");
  galleryRef.innerHTML = "";
  for (let index = 0; index < PHOTOS.length; index++) {
    galleryRef.innerHTML += getThumbnailTemplate(index);
  }
}

function openDialog(index) {
  const dialogRef = document.getElementById("photoDialog");
  currentIndex = index;
  fillDialog();
  dialogRef.showModal();
}





function closeDialog() {
  const dialogRef = document.getElementById("photoDialog");
  dialogRef.close();
}


function stopBubbling(event) {
  event.stopPropagation();
}


function showNextPhoto() {
  currentIndex++;
  if (currentIndex >= PHOTOS.length) {
    currentIndex = 0;
  }
  fillDialog();
}


function showPreviousPhoto() {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = PHOTOS.length - 1;
  }
  fillDialog();
}



render();

