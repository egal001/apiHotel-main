const faker = require("faker")
class recepcionistaService{
  constructor(){
    this.recepcionstas = []
    this.generarRecepcionista()
  }
  generarRecepcionista(){
     const limite = 10
     for (let index = 0; index < limite; index++) {
       this.recepcionstas.push({
        codE: faker.datatype.uuid(),
        nombre: faker.name.firstName(),
        apellidoP: faker.name.lastName(),
        apellidoM: faker.name.lastName(),
        contrasenia: faker.internet.password(),
        correo: faker.internet.email(),
        direccion: faker.address.streetAddress(),
        telefono: faker.phone.phoneNumber()
       })
     }
  }
  create(Recepcionista){
    Recepcionista.codE = faker.datatype.uuid();
    this.recepcionstas.push(Recepcionista)
  }
  update(id,Recepcionista){
    const Update = this.findBy(id)
    if(Update != undefined){
      Update.nombre = (Recepcionista.nombre != undefined)? Recepcionista.nombre: Update.nombre
      Update.apellidoP = (Recepcionista.apellidoP != undefined)?Recepcionista.apellidoP:Update.apellidoP
      Update.apellidoM = (Recepcionista.apellidoM != undefined)?Recepcionista.apellidoM:Update.apellidoM
      Update.contrasenia = (Recepcionista.contrasenia != undefined)?Recepcionista.contrasenia:Update.contrasenia
      Update.correo = (Recepcionista.correo != undefined)?Recepcionista.correo:Update.correo
      Update.direccion = (Recepcionista.direccion != undefined)?Recepcionista.direccion:Update.direccion
      Update.telefono = (Recepcionista.telefono != undefined)?Recepcionista.telefono:Update.telefono
    }
  }
  delete(id){
    const Eliminar = this.findBy(id)
    if(Eliminar != undefined){
      this.recepcionstas.splice(this.recepcionstas.indexOf(Eliminar),1)
    }
    // else{
    //   console.log("No existe recepcionista)
    // }
  }
  findAll(){
    return this.recepcionstas
  }
  findBy(id){
    return this.recepcionstas.find(item => item.codE === id)
  }
}

module.exports = recepcionistaService
