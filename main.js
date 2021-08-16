new Vue({
    el:"#app"
})

Vue.component('child',{
props:["message"],
template:"<div>{{message}}</div>"
})

