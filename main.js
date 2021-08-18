const cpn = {
    template:"#cpn",
    data(){
        return{
            cars:[
                {name:'热门'},
                {name:'手机'},
                {name:'电脑'},
                {name:'电视'}
            ] 
        }
    },
    methods:{
        zi(item){
            this.$emit('ziclick',item)
        }
    }
}

new Vue({
    el:"#app",
    components:{
        cpn
    },
    methods:{
        fuclick(item){
            console.log('zi',item)
        }
    }
})