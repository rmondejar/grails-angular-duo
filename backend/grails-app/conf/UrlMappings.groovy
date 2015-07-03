import grails.util.Environment

class UrlMappings {

    static mappings = {

        "/$controller/$action?/$id?(.$format)?" {
            constraints { // apply constraints here
            }
        }

        "/api/books"(resources:"book")
        "/api/authors"(resources:"author")

        if (Environment.current == Environment.DEVELOPMENT) {
            "/"(view: "/index") // yeoman index will be placed here
            "500"(view: '/error') // yeoman index here
        }
        else {
            "/"(uri: "/index.html") // yeoman index will be placed here
            "500"(uri: '/index.html/#/error') // yeoman index here
        }
    }
}
