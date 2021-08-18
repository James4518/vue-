const cpn={
    template:"#cpn",
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
            console.log(this.$children)
            this.$children[0].showmessage()
        }
    }
})
