export default async function loadJsonFile(path) {
  const response = await fetch(path);
  const data = await response.json();

  return data;
}