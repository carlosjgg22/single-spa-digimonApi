export const ConsultarApiDigimon = async () => {
  const url = "https://www.digi-api.com/api/v1/digimon";

  const responseApi = await fetch(url);
  const responseJson = await responseApi.json();
  const dataDigimons = responseJson.content;

  return await dataDigimons;
};
