import loadJsonFile from "../utils/loadJsonFile.mjs";
import getLabelValues from "../utils/getLabelValues.mjs"

const data = await loadJsonFile("./database/dados.json");
const labels = ["Educação", "Saúde"];

export const values = getLabelValues(labels, data);

export const setup = {
  labels: labels,
  datasets: [{
    label: 'Transferencias por função',
    data: values,
    fill: false,
    backgroundColor: [
      'rgba(75, 192, 192, 0.2)',
      'rgba(255, 99, 132, 0.2)'
    ],
    borderColor: [
      'rgb(75, 192, 192)',
      'rgb(255, 99, 132)'
    ],
    borderWidth: 1, 
  }]
};

export const config = {
  type: 'bar',
  data: setup
};