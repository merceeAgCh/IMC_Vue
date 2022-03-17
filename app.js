const Titulo = {
    template:`
        <h1>Calculadora de IMC y Grasa Corporal.</h1>
    `
}

const app = Vue.createApp({
    components:{
        Titulo
    },
    template: `
        <Titulo/>
        <h3>Para calcular el Indice de Masa Corporal, debes ingresar tu peso y estatura.</h3>
        <div>
            <p>Ingresa tu peso</p>
            <input type="number"><br>
            <p>Ingresa tu estatura</p>
            <input type="number"> <br> <br>
            <button @click="calcularIMC">Calcular</button> {{ imc }}
        </div>
        <h3>Para calcular tu Grasa Corporal, proporciona los siguientes datos.</h3>
        <div>
            <p>Selecciona tu sexo y posteriormente ingresa tu edad.</p>
            <input type="radio" v-model="value" :value="femenino" /> {{value}}
            <input type="radio" v-model="value" :value="masc" /> {{value}}
        </div>
    ` ,
    data(){
        return {
            value: 'femenino'
        }
    } 
    /*,
    methods:{
         calcularIMC(peso, estatura){
            imc = peso / (estatura * estatura);
            return imc;
        },
        obtenerGC(edad,  sexo){
            if("hombre".equals(sexo)){
                gc=1.2*imc+0.23*edad-10.8*1-5.4;
			return gc;
            }else{
                gc=1.2*imc+0.23*edad-10.8*0-5.4;
			return gc;
            }
        }
    }  */
}).mount('#app');