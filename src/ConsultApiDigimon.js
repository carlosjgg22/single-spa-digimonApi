export const ConsultarApiDigimon = async () => {
    try {
        const url = "https://www.digi-api.com/api/v1/digimon";
        const responseApi = await fetch(url);
    
        if (!responseApi.ok) {
          throw new Error("Error al obtener los datos de la API");
        }
    
        const responseJson = await responseApi.json();
        const dataDigimons = responseJson.content;
    
        return dataDigimons;
      } catch (error) {
        console.error("Error en la función ConsultarApiDigimon:", error);
        return []; // o maneja el error de la manera que consideres apropiada
      }
    };
    
    
    
    
    
    


