function ApiUrl(identify) {
  const urlBase = "https://fr.dofus.dofapi.fr/classes/";
  const url = `${urlBase}${identify}`;

  return url;
}

export default ApiUrl;
