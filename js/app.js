var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

  var app2 = new Vue({
      el:'#app2',
      data:{
          message:'you load this bage in ' + new Date().toLocaleString(),
      }
  })

  var app3 =new Vue({
      el:"#app-3",
      data:{
          soon:false,
      }
  })

  var app4= new Vue({
      el:"#app4",
      data:{
          todos:[
              {text:'fathi'},
              {text:'ali'},
              {text:'mosa'}
          ]
      }
  })

  var app5 = new Vue({
      el:"#app5",
      data:{
          message:"hi am not clicked yet",
      },
      methods:{
        getMessage : function(){
            this.message = 'you click me'
        }
      }
  })

  var app6 = new Vue({
    el:"#app6",
    data:{
        message :"type here" , 
    }
  })


  Vue.component('todo-item' , {
      props:['todo'],
      tamplete:['<li> todo.text </li>']
  })

  var app7 = new Vue({
      el : "#app7",
      data:{
          message:"come fom li"
      }
  })