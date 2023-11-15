export default function newBlankAttempt() {
  // @ts-ignore always call from browser
  const blank = document.createElement("canvas").getContext("2d").getImageData(0, 0, 1, 1);
  return {
    date: new Date(),
    work: blank,
    error: blank,
    questions: blank,
    rois: [],
  }
}
