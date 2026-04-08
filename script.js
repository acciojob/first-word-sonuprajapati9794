function firstWord(str) {
  if (!str) return "";

  // Trim leading spaces
  str = str.trim();

  const index = str.indexOf(" ");

  // If no space found, return entire string
  return index === -1 ? str : str.slice(0, index);
}