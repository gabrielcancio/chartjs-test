export default function getLabelValues(labels, database) {
  return labels.map(
    label => database
      .filter(item => item.funcao === label)
      .length
  );
}