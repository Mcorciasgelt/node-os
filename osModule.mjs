/* - Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer */

import os from 'node:os'

const mb = 1024**2

const getData = () => {
    const data = {
        Name : os.type(),
        Type : os.platform(),
        Version : os.version(),
        Arch : os.arch(),
        CPUs : os.cpus().length,
        TotalMemory : (os.totalmem()/mb).toFixed(2),
        FreeMemory : (os.freemem()/mb).toFixed(2)
    }

    console.log(data)
}

getData()

export { getData }