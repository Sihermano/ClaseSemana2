interface Pedido 
{
    nombre : string
    cantidad : number 
}

class Cliente   //por convención siempre para nombrar las clases la primera en mayúsculas
{
    realizarPedido(mozo : Mozo, pedido : Pedido)  //aquí es el porque de nombrar las clases con mayúsculas, el minúscula es argumento
    {
        mozo.recibirPedido(pedido);   // <--- El momento donde se origina el mensaje
    }
}

class Mozo
{
    recibirPedido(pedido : Pedido) : void  //con esto definimos un método, el void es opcional
    {
            console.log("Se recibio el pedido")
    }
}

//con let definimos una variable
let main = () => {
    let cliente = new Cliente()
    let mozo : Mozo = new Mozo()
    let pedido : Pedido = {
        nombre : "Ceviche",
        cantidad : 2
    }//con esto usamos el interface

    cliente.realizarPedido(mozo, pedido)
} 

//ejecutar función main, si no lo coloco, nunca se va a ejecutar la función
main()