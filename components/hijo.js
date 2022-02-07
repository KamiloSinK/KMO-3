Vue.component('hijo',{
    template: //html
    `
     <div class="py-5 bg-success">
        <h4>Componente hijo: {{numero}}</h4>
        <h3>Nombre: {{nombre}}</h3>
     </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'Camilo'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre)
    }
})