class Persona {
    constructor(documento, nombre, apellido, edad) {
        this.documento = documento
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

const personas = []

let documento, nombre, apellido, edad, validacion, continua
let accion, quitarDoc, quitarPos
do {
    accion = parseInt(prompt("Escriba el numero de la accion que desea realizar: \n1. Agregar cliente. \n2. Quitar cliente. \n3. Mostrar cliente. \n4. Ordenar clientes."))


    switch (accion) {
        case 1:
            do {
                do {
                    nombre = prompt("Ingrese el nombre:").toLocaleLowerCase()
                    apellido = prompt("Ingrese el apellido:").toLowerCase()
                } while (nombre.length == 0 || apellido.length == 0)

                do {
                    documento = parseInt(prompt("Ingrese el numero de documento:"))
                    edad = parseInt(prompt("Ingrese la edad:"))
                } while ((isNaN(documento) || isNaN(edad)) || (documento <= 0 || edad <= 0));

                const persona = new Persona(documento, nombre, apellido, edad)
                personas.push(persona)
                alert("Cliente agregado")
                console.log(personas)

                validacion = prompt("Desea igresar mas personas ? ").toLocaleLowerCase()
            } while (validacion != "no");
            break
        case 2:
                
                quitarDoc = parseInt(prompt("Ingrese el documento del cliente que desea eliminar:"))
                quitarDoc = personas.find((el) => el.documento === quitarDoc)
                quitarPos = personas.indexOf(quitarDoc)
                    if (quitarPos >=0) {
                        personas.splice(quitarPos, 1)
                        alert("Se elimino correctamente.")
                    } else alert("No se ha encontrado la persona que desea eliminar.")
                
                    console.log(personas)
            

            break
        case 4:
            personas.sort((a, b) => a.documento - b.documento)
            alert("Clientes ordenados por documento de menor a mayor")
            console.log(personas)
            break
        default:
            alert("Por favor, ingrese un numero valido")
            break
    }


    continua = prompt("Desea realizar otra operacion ?").toLocaleLowerCase()
} while (continua !== "no");
