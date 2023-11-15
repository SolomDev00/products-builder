/**
 * - Best Tool to Slice any text for [ Articles, Cards, etc ] ..
 * @param {string} txt - The input text to be sliced.
 * @param {number} [max = 50] - The maximum length before truncation.
 * @returns The sliced text, with an ellipsis ( ... ) appended truncated.
 */
export function txtSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) {
    return `${txt.slice(0, max)} ...`;
  }
  return txt;
}
