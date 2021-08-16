new Vue({
    el:"#app",
    data:{
        msg:'hello'
    }
})

Vue.component('child',{
props:["message"],
template:"<div>{{message}}</div>"
})

