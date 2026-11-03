// #region Variablen
/** Ordner, in dem die Fotos liegen (groß für den Dialog, klein für die Galerie). */
const PHOTO_PATH = "./assets/img/";
const THUMBNAIL_PATH = "./assets/img/thumbnails/";

/** Fotos aus assets/img: Dateiname ohne .jpg (= Titel im Dialog) und alt-Text. */
const PHOTOS = [
  { name: "alaska", alt: "Snowy mountains and a glacier lake with ice floes in Alaska" },
  { name: "anime", alt: "Anime-style city street at night with neon lights" },
  { name: "atmosphere", alt: "Dark storm clouds in a grey sky" },
  { name: "blue", alt: "Blue tit sitting on a thin branch" },
  { name: "hurricane", alt: "Hurricane seen from space above the earth" },
  { name: "lake", alt: "Mountain lake with snowy slopes and pine trees" },
  { name: "moorente", alt: "Ferruginous duck spreading its wings on the water" },
  { name: "sea", alt: "Person standing on a rock in the sea at night" },
  { name: "snow", alt: "Snow bunting sitting on dark rocks" },
  { name: "snow-leopard", alt: "Two snow leopard cubs on a rock" },
  { name: "travel", alt: "Snowy mountain peaks under a blue sky" },
  { name: "winter", alt: "Frosted tree in a snowy landscape" }
];

let currentIndex = 0;
// #endregion

// #region Galerie
/** Rendert alle Fotos aus PHOTOS als Thumbnails in die Galerie. */
function render() {
  const galleryRef = document.getElementById("gallery");
  galleryRef.innerHTML = "";
  for (let index = 0; index < PHOTOS.length; index++) {
    galleryRef.innerHTML += getThumbnailTemplate(index);
  }
}
// #endregion

// #region Dialog
/**
 * Öffnet die Großansicht für ein Foto.
 * @param {number} index - Stelle des Fotos im Array PHOTOS
 */
function openDialog(index) {
  currentIndex = index;
  fillDialog();
  document.getElementById("photoDialog").showModal();
}

/** Schreibt Titel, großes Bild, alt-Text und Zähler des aktuellen Fotos in den Dialog. */
function fillDialog() {
  const photo = PHOTOS[currentIndex];
  const imageRef = document.getElementById("dialogImage");
  document.getElementById("dialogTitle").innerText = photo.name;
  imageRef.setAttribute("src", PHOTO_PATH + photo.name + ".jpg");
  imageRef.setAttribute("alt", photo.alt);
  document.getElementById("photoCounter").innerText = `${currentIndex + 1}/${PHOTOS.length}`;
}

/** Schließt die Großansicht. */
function closeDialog() {
  document.getElementById("photoDialog").close();
}

/**
 * Verhindert, dass ein Klick im Dialog den Dialog schließt.
 * @param {Event} event - Klick-Event
 */
function stopBubbling(event) {
  event.stopPropagation();
}

/** Zeigt das nächste Foto, nach dem letzten wieder das erste. */
function showNextPhoto() {
  currentIndex++;
  if (currentIndex >= PHOTOS.length) {
    currentIndex = 0;
  }
  fillDialog();
}

/** Zeigt das vorherige Foto, vor dem ersten wieder das letzte. */
function showPreviousPhoto() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = PHOTOS.length - 1;
  }
  fillDialog();
}
// #endregion

// #region Aufruf
render();
// #endregion
