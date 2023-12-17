// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

window.onload = function() {
    class BinusChat{
      home(){
        document.body.innerHTML = ''
        this.create_title()
        this.create_join_form()
      }
      
      create_title(){
        var title_container = document.createElement('div')
        title_container.setAttribute('id', 'title_container')
        var title_inner_container = document.createElement('div')
        title_inner_container.setAttribute('id', 'title_inner_container')
  
        var title = document.createElement('h1')
        title.setAttribute('id', 'title')
        title.textContent = 'BinusChat'

        var img_container = document.createElement('div')
        img_container.setAttribute('id', 'img_container')

        var img = document.createElement('img')
        img.src = 'assets/binuschat_logo.png'
        img.setAttribute('id', 'img_class')
        
        img_container.append(img)
        title_inner_container.append(img_container)
        title_container.append(title_inner_container)
        document.body.append(title_container)
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
        join_button.disabled = true
        join_input.onkeyup  = function(){
          if(join_input.value.length > 0){
            join_button.disabled = false
            join_button.style.backgroundColor = "#1D3354";
            join_button.onclick = function(){
              parent.save_name(join_input.value)
              join_container.remove()
              window.location.href = "menu.html"
            }
          } else {
            join_button.style.backgroundColor = "#fff";
            join_button.disabled = true
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

      save_name(name){
        localStorage.setItem('name', name)
      }

      get_name(){
        if(localStorage.getItem('name') != null){
          return localStorage.getItem('name')
        }else{
          this.home()
          return null
        }
      }
    }
    
    var app = new BinusChat()
    
    if(app.get_name() != null){
      window.location.href = "menu.html"
    }
  }