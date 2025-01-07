/* - Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno. */

import os from 'node:os'

const getDataInterfaz = () => {
    const dataInterfaz = os.networkInterfaces()

    for (const nombreInterfaz in dataInterfaz) {
        console.log(`Interface ${nombreInterfaz}:`);

        dataInterfaz[nombreInterfaz].forEach((data) => {
            console.log(`Familia: ${data.family}`);
            console.log(`Dirección: ${data.address}`);
            console.log(`Interno: ${data.internal}`);
            console.log("- - - - -");            
        })
        
    }
}

export { getDataInterfaz }
