// export function lantitudLongitude() {
//     let result;
//     if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
//             result = {
//                 Latitude: latitude,
//                 Longitude: longitude,
//                 message: 'Successfully obtained latitude and longitude.'
//             }
//             console.log(result);
//             return result;
//         }, function (error) {
//             result = {
//                 Latitude: 'Error',
//                 Longitude: 'Error',
//                 message: 'Please allow your browser to access your location'
//             }
//             console.error("Error getting location: " + error.message, result);
//             return result;
//         });
//     } else {
//         result = {
//             Latitude: 'Error',
//             Longitude: 'Error',
//             message: 'Please allow your browser to access your location'
//         }
//         console.log("Geolocation is not available in this browser.");
//         console.log(result);
//         return result;
//     }

// }

export async function lantitudLongitude2() {
    let result;
    try {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            result = {
                Latitude: latitude,
                Longitude: longitude,
                message: 'Successfully obtained latitude and longitude.'
            }
            console.log(result);
            return result;
        })
    } catch (error) {
        console.error("Error getting location: " + error.message);
        result = {
            Latitude: 'Error',
            Longitude: 'Error',
            message: 'Please allow your browser to access your location'
        }
        console.log("Geolocation is not available in this browser.");
        console.log(result);
        return result;
    }

}

export async function getLatitudeLongitude() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const result = {
                    latitude: latitude,
                    longitude: longitude,
                    message: 'Successfully obtained latitude and longitude.'
                };
                // console.log(result);
                resolve(result);
            },
            (error) => {
                // console.error("Error getting location: " + error.message);
                const result = {
                    latitude: 'Error',
                    longitude: 'Error',
                    message: 'Please allow your browser to access your location'
                };
                // console.log("Geolocation is not available in this browser.");
                console.error(error);
                resolve(result);
            }
        );
    });
}

// To use this function and obtain the result, you can call it as follows:

