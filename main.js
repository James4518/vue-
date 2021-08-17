new Vue({
    el:"#app",
    data:{
    sites:[
        {text:'baidu'},
        {text:'alibaba'},
        {text:'taobao'}
    ]}
})

Vue.component('todo-item',{
props:["todo"],
template:"<li>{{todo.text}}</li>"
})

