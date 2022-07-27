/**
 * getUserLocations - Get the user location of type
 * [longitude, latitude]
 * @returns 
 */
export const getUserLocation = async(): Promise<[number, number]> => {
    return new Promise( (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          ({coords}) => {
            resolve([coords.longitude, coords.latitude])
          },
          ( err ) => {
            alert('It wasn\'t possible get geolocation');
            console.log(err);
            reject();
          }
        );
    });
}



