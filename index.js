const autos = require('./modules/autos');
const personas = require('./modules/personas');

const concesionaria = {
   autos: autos,
   buscarAuto : function (patente){
   for (const i of concesionaria.autos) {
      if(i.patente === patente){
       return i 
     }
    }
    for (const i of concesionaria.autos) {
       if(i.patente != patente){
        return null 
      }
     }
    },
    venderAuto : function (patente){
       let autoAVender = concesionaria.buscarAuto(patente);
        autoAVender.vendido = true ; 
        return ''
    },
    autosParaLaVenta : function(){
        let autos = concesionaria.autos; 
       return autos.filter(autos => autos.vendido === false); 

    },
    autosNuevos : function(){
        let autos = concesionaria.autosParaLaVenta();
        return autos.filter(autos => autos.km < 100); 
    },
    listaDeVentas : function(){
        let lista = []
        for (const i of concesionaria.autos) {
            if(i.vendido){
             lista.push(i.precio)
            }
        }
        return lista
    },
    totalDeVentas : function(){
        let lista = concesionaria.listaDeVentas()
       return lista.length > 0 ? lista.reduce((a,b)=> a+b) : 0 ;
    },
    puedeComprar : function(auto,persona){
   let precioCuota = auto.precio / auto.cuotas ; 
   return persona.capacidadDePagoEnCuotas >= precioCuota && persona.capacidadDePagoTotal >= auto.precio;        
    },
    autosQuePuedeComprar : function (persona){
    let autos = concesionaria.autosParaLaVenta(); 
    let autosQueSi = []
    for(const i of autos){
    if(concesionaria.puedeComprar(i,persona) == true ){
       autosQueSi.push(i) 
            }
        }
        return autosQueSi; 
     }
};

console.log(concesionaria.venderAuto('APL123'));
console.log(concesionaria.buscarAuto('APL123')); 
console.log(concesionaria.venderAuto('JJK116'))
console.log(concesionaria.buscarAuto('JJK116'));
console.log(concesionaria.autosParaLaVenta());
console.log(concesionaria.autosNuevos());
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas());
console.log(concesionaria.puedeComprar(autos[1],personas[1] ));
console.log(concesionaria.autosQuePuedeComprar(personas[1] ));

