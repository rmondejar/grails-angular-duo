package library

import grails.rest.Resource

@Resource(uri='/api/authors', formats=['json'])
class Author {

    String name
    String surname

    static hasMany = [books: Book] //0 -> N

    static constraints = {
        name maxSize: 30, blank: false, nullable: false
        surname maxSize: 50, blank: false, nullable: false
    }
}
