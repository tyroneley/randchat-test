// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtbY08t2J9EZB-NQzdWXrTk9nhDQQT-6g",
  authDomain: "randchat-3e40e.firebaseapp.com",
  databaseURL: "https://randchat-3e40e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "randchat-3e40e",
  storageBucket: "randchat-3e40e.appspot.com",
  messagingSenderId: "986532650253",
  appId: "1:986532650253:web:8d438cd7a019c82d526444"
};

window.onload = function() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.database()
    class BinusChat{
      home(){
        document.body.innerHTML = ''
        this.create_title()
        this.create_join_form()
      }

      chat(){
        this.create_title()
        this.create_chat()
      }
      create_title(){
        var title_container = document.createElement('div')
        title_container.setAttribute('id', 'title_container')
        var title_inner_container = document.createElement('div')
        title_inner_container.setAttribute('id', 'title_inner_container')
  
        var title = document.createElement('h1')
        title.setAttribute('id', 'title')
        title.textContent = 'Communications'

        var menu_container = document.createElement('div')
        menu_container.setAttribute('id', 'header_button_container')

        var button = document.createElement('button')
        button.setAttribute('id', 'header_button')
        button.innerHTML = 'General Chat'

        var button2 = document.createElement('button')
        button2.setAttribute('id', 'header_button')
        button2.innerHTML = 'Computer Science Chat'

        var button3 = document.createElement('button')
        button3.setAttribute('id', 'header_button')
        button3.innerHTML = 'Graphic Design & Media Chat'

        var button4 = document.createElement('button')
        button4.setAttribute('id', 'header_button')
        button4.innerHTML = 'Communications Chat'

        button.onclick = function() {
          window.location.href = 'main.html'
        }

        button.addEventListener('mouseover', () => {
          button.style.backgroundColor = '#355687'
        })

        button.addEventListener('mouseout', () => {
          button.style.backgroundColor = '#1D3354'
        })

        button2.onclick = function() {
          window.location.href = 'compsci.html'
        }

        button2.addEventListener('mouseover', () => {
          button2.style.backgroundColor = '#355687'
        })

        button2.addEventListener('mouseout', () => {
          button2.style.backgroundColor = '#1D3354'
        })

        button3.onclick = function() {
          window.location.href = 'gdnm.html'
        }

        button3.addEventListener('mouseover', () => {
          button3.style.backgroundColor = '#355687'
        })

        button3.addEventListener('mouseout', () => {
          button3.style.backgroundColor = '#1D3354'
        })

        button4.onclick = function() {
          window.location.href = 'comms.html'
        }

        button4.addEventListener('mouseover', () => {
          button4.style.backgroundColor = '#355687'
        })

        button4.addEventListener('mouseout', () => {
          button4.style.backgroundColor = '#1D3354'
        })
        
        title_inner_container.append(title)
        title_container.append(title_inner_container)
        menu_container.append(button, button2, button3, button4)
        document.body.append(title_container, menu_container)
      }
      create_join_form(){
        var parent = this;
  
        var join_container = document.createElement('div')
        join_container.setAttribute('id', 'join_container')
        var join_inner_container = document.createElement('div')
        join_inner_container.setAttribute('id', 'join_inner_container')
  
        var join_button_container = document.createElement('div')
        join_button_container.setAttribute('id', 'join_button_container')
  
        var join_button = document.createElement('button')
        join_button.setAttribute('id', 'join_button')
        join_button.innerHTML = 'Join <i class="fas fa-sign-in-alt"></i>'
  
        var join_input_container = document.createElement('div')
        join_input_container.setAttribute('id', 'join_input_container')
  
        var join_input = document.createElement('input')
        join_input.setAttribute('id', 'join_input')
        join_input.setAttribute('maxlength', 15)
        join_input.placeholder = 'What\'s your nickname?'
        join_input.onkeyup  = function(){
          if(join_input.value.length > 0){
            join_button.classList.add('enabled')
            join_button.style.backgroundColor = "#1D3354";
            join_button.onclick = function(){
              parent.save_name(join_input.value)
              join_container.remove()
              parent.create_chat()
            }
          } else {
            join_button.classList.remove('enabled')
          }
        }

        join_button_container.append(join_button)
        join_input_container.append(join_input)
        join_inner_container.append(join_input_container, join_button_container)
        join_container.append(join_inner_container)
        document.body.append(join_container)
      }
      
      create_load(container_id){
        var parent = this;
        var container = document.getElementById(container_id)
        container.innerHTML = ''
  
        var loader_container = document.createElement('div')
        loader_container.setAttribute('class', 'loader_container')
  
        var loader = document.createElement('div')
        loader.setAttribute('class', 'loader')
  
        loader_container.append(loader)
        container.append(loader_container)
  
      }

      create_chat(){
        var parent = this;
        var title_container = document.getElementById('title_container')
        var title = document.getElementById('title')
        title_container.classList.add('chat_title_container')
        title.classList.add('chat_title')
  
        var chat_container = document.createElement('div')
        chat_container.setAttribute('id', 'chat_container')
  
        var chat_inner_container = document.createElement('div')
        chat_inner_container.setAttribute('id', 'chat_inner_container')
  
        var chat_content_container = document.createElement('div')
        chat_content_container.setAttribute('id', 'chat_content_container')
  
        var chat_input_container = document.createElement('div')
        chat_input_container.setAttribute('id', 'chat_input_container')
  
        var chat_input_send = document.createElement('button')
        chat_input_send.setAttribute('id', 'chat_input_send')
        chat_input_send.setAttribute('disabled', true)
        chat_input_send.innerHTML = `Send`
  
        var chat_input = document.createElement('input')
        chat_input.setAttribute('id', 'chat_input')
        chat_input.setAttribute('maxlength', 1000)
        chat_input.placeholder = `${parent.get_name()}. Say whatever you want however you want.`
        chat_input.onkeyup  = function(){
          if(chat_input.value.length > 0){
            chat_input_send.removeAttribute('disabled')
            chat_input_send.classList.add('enabled')
            chat_input_send.onclick = function(){
              chat_input_send.setAttribute('disabled', true)
              chat_input_send.classList.remove('enabled')
              if(chat_input.value.length <= 0){
                return
              }
              parent.create_load('chat_content_container')
              parent.send_message(chat_input.value)
              chat_input.value = ''
              chat_input.focus()
            }

            var input_to_listen = document.getElementById("chat_input");
    
            input_to_listen.addEventListener("keyup", function(event) {
              if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("chat_input_send").click();
              }
        }); 
          }else{
            chat_input_send.classList.remove('enabled')
          }
        }
  
        var chat_logout_container = document.createElement('div')
        chat_logout_container.setAttribute('id', 'chat_logout_container')
  
        var chat_logout = document.createElement('button')
        chat_logout.setAttribute('id', 'chat_logout')
        chat_logout.textContent = `Your nickname is ${parent.get_name()} • Logout`
        chat_logout.onclick = function(){
          window.location.href = 'index.html'
          localStorage.clear()
        }
  
        chat_logout_container.append(chat_logout)
        chat_input_container.append(chat_input, chat_input_send)
        chat_inner_container.append(chat_content_container, chat_input_container, chat_logout_container)
        chat_container.append(chat_inner_container)
        document.body.append(chat_container)
        parent.create_load('chat_content_container')
        parent.refresh_chat()
      }

      save_name(name){
        localStorage.setItem('name', name)
      }
      send_message(message){
        var parent = this
        if(parent.get_name() == null && message == null){
          return
        }

        db.ref('comms/').once('value', function(message_object) {
          var index = parseFloat(message_object.numChildren()) + 1
          db.ref('comms/' + `message_${index}`).set({
            name: parent.get_name(),
            message: message,
            index: index
          })
          .then(function(){
            parent.refresh_chat()
          })
        })
      }

      get_name(){
        if(localStorage.getItem('name') != null){
          return localStorage.getItem('name')
        }else{
          this.home()
          return null
        }
      }

      refresh_chat(){
        var chat_content_container = document.getElementById('chat_content_container')
        db.ref('comms/').on('value', function(messages_object) {
          chat_content_container.innerHTML = ''
          if(messages_object.numChildren() == 0){
            return
          }
  
          var messages = Object.values(messages_object.val());
          var guide = [] 
          var unordered = []
          var ordered = []
  
          for (var i, i = 0; i < messages.length; i++) {
            guide.push(i+1)
            unordered.push([messages[i], messages[i].index]);
          }
  
          guide.forEach(function(key) {
            var found = false
            unordered = unordered.filter(function(item) {
              if(!found && item[1] == key) {
                ordered.push(item[0])
                found = true
                return false
              }else{
                return true
              }
            })
          })
  
          ordered.forEach(function(data) {
            var name = data.name
            var message = data.message
  
            var message_container = document.createElement('div')
            message_container.setAttribute('class', 'message_container')
  
            var message_inner_container = document.createElement('div')
            message_inner_container.setAttribute('class', 'message_inner_container')
  
            var message_user_container = document.createElement('div')
            message_user_container.setAttribute('class', 'message_user_container')
  
            var message_user = document.createElement('p')
            message_user.setAttribute('class', 'message_user')
            message_user.textContent = `${name}`
  
            var message_content_container = document.createElement('div')
            message_content_container.setAttribute('class', 'message_content_container')
  
            var message_content = document.createElement('p')
            message_content.setAttribute('class', 'message_content')
            message_content.textContent = `${message}`
  
            message_user_container.append(message_user)
            message_content_container.append(message_content)
            message_inner_container.append(message_user_container, message_content_container)
            message_container.append(message_inner_container)
  
            chat_content_container.append(message_container)
          });
          chat_content_container.scrollTop = chat_content_container.scrollHeight;
      })
  
      }
    }
    
    var app = new BinusChat()
    
    if(app.get_name() != null){
      app.chat()
    }
  }