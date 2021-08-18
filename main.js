const cpn={
    template:"#cpn",
    data(){
        return{
            name:'abcd'
        }
    },
    methods:{
        showmessage(){
            console.log("hello")
        }
    }
}

new Vue({
    el:"#app",
    components:{
        cpn
    },
    methods:{
        btn(){
            console.log(this.$refs.a.name)
        }
    }
})
