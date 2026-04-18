export const getImageURL = imageParameter => {
    return new URL(`../assets/planet-images/${imageParameter}`, import.meta.url).href
}