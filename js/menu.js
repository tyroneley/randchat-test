window.onload = function() {
    // Initialize Firebase

    class homepage{
      home(){
        document.body.innerHTML = ''
        this.create_title()
        this.create_general_button()
        this.create_compsci_button()
        this.create_gdnm_button()
        this.create_comms_button()
        // this.create_image()
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

      create_general_button(){
        var parent = this;

        var button_container = document.createElement('div')
        button_container.setAttribute('id', 'menu_button_container')
  
        var button = document.createElement('button')
        button.setAttribute('id', 'menu_button')
        button.innerHTML = 'General Chat'

        button.classList.add('enabled')
        button.onclick = function() {
          window.location.href = 'main.html'
        }
        
        button_container.append(button)
        document.body.append(button_container)
      }

      create_compsci_button(){
        var parent = this;

        var button_container = document.createElement('div')
        button_container.setAttribute('id', 'menu_button_container')
  
        var button = document.createElement('button')
        button.setAttribute('id', 'menu_button')
        button.innerHTML = 'Computer Science Chat'

        button.classList.add('enabled')
        button.onclick = function() {
          window.location.href = 'compsci.html'
        }
        
        button_container.append(button)
        document.body.append(button_container)
      }

      create_gdnm_button(){
        var parent = this;
  
        var button_container = document.createElement('div')
        button_container.setAttribute('id', 'menu_button_container')
  
        var button = document.createElement('button')
        button.setAttribute('id', 'menu_button')
        button.innerHTML = 'Graphic Design & Media Chat'

        button.classList.add('enabled')
        button.onclick = function() {
          window.location.href = 'gdnm.html'
        }
        
        button_container.append(button)
        document.body.append(button_container)
      }

      create_comms_button(){
        var parent = this;
  
        var button_container = document.createElement('div')
        button_container.setAttribute('id', 'menu_button_container')
  
        var button = document.createElement('button')
        button.setAttribute('id', 'menu_button')
        button.innerHTML = 'Communications Chat'

        button.classList.add('enabled')
        button.onclick = function() {
          window.location.href = 'comms.html'
        }
        
        button_container.append(button)
        document.body.append(button_container)
      }

      create_image() {
        var img_container = document.createElement('div')
        img_container.setAttribute('id', 'img_container')

        var img = document.createElement('img')
        img.src = 'assets/binuschat_img.png'
        img.setAttribute('id', 'img_class')

        img_container.append(img)
        document.body.append(img_container)
      }
    }
    
    var app = new homepage()
    app.home()
  }