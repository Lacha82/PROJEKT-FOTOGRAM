/**
 * Gibt das HTML für ein Thumbnail zurück: ein Button mit dem kleinen Foto.
 * Der Button ist per Tab erreichbar und öffnet die Großansicht.
 * @param {number} index - Stelle des Fotos im Array PHOTOS
 * @returns {string} HTML des Thumbnails
 */
function getThumbnailTemplate(index) {
  return `
    <button class="thumbnail-button" onclick="openDialog(${index})" aria-haspopup="dialog" aria-controls="photoDialog">
      <img class="thumbnail" src="${THUMBNAIL_PATH}${PHOTOS[index].name}.jpg" alt="${PHOTOS[index].alt}" width="150" height="150">
    </button>
  `;
}
