// TODO: arregla typos de "error", maneja caso de error y exito
// export async function getPlants(): Promise<any> {
//     return [];
// }



export const getPlants = async () =>{
    try{
        const plants = await fetch('http://192.168.131.101:8080/dca/swagger-ui/index.html').then(res =>res.json);
        return plants;
    }
    catch(error){
        return error; 
    }
}