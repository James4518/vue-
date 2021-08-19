const child={
    template:'#child',
    methods:{
        cbtn(){
            console.log(this.$parent.name)
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