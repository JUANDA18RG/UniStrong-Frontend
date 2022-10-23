export default (string) => {
  if (!string) return;

  return string.replaceAll(/(^\w)|((\s|\-)\w)/g, (match) =>
    match.toUpperCase()
  );
};
