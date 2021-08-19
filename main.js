const child={
    template:'#child',
    methods:{
        cbtn(){
            console.log(this.$parent.name)
            console.log(this.$root.name)
        }
    }
}

const cpn={
    template:"#cpn",
    data(){
        return{name:'我是cpn的name'}
    },
    components:{child}
}


new Vue({
    el:"#app",
    data(){
        return{name:"我是vue实例的name"}
    },
    components:{
        cpn
    }
})

// new Vue({
//     el:"#app",
//     components:{
//         cpn:{
//             template:"#cpn",
//             data(){
//                 return{name:'我是cpn的name'}
//             },
//             components:{
//                 child:{
//                     template:"#child",
//                     methods:{
//                     cbtn(){
//                         console.log(this.$parent.name)
//                         }
//                     } 
//                 }          
//             }
//         }
//     }
// })