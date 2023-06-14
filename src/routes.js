export class Router {
    constructor() {
        this.getRoutes = {};
    }

    add(routeName, url, background){
        this.getRoutes[routeName] = {url, background}
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        const links = document.querySelectorAll('ul li a');
        links.forEach(link => {
            link.classList.remove('active');
        });

        const target = event.target || event.srcElement;
        target.classList.add('active');
      
        window.history.pushState({}, "", event.target.href)
      
        this.handle()
      
    }


    handle(){
        const {pathname} = window.location
        const route = this.getRoutes[pathname] || this.getRoutes[404]


        fetch(route.url)
        .then(data => data.text())
        .then(html => {

            document.getElementById('app').innerHTML = html

            this.changeBackground(route.background)

            
        })

        console.log(pathname)
        
    }

    changeBackground(background) {
        const body = document.body;
        body.style.background = background;
    
    }


}
