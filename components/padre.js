Vue.component('padre', {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <h3>{{nombrePadre}}</h3>
        <button class="btn btn-primary" @click="numeroPadre++">+</button>
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
        
    </div>
    `,
    data(){
        return{
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
})