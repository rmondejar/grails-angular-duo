package library

import grails.rest.Resource

@Resource(uri='/api/books', formats=['json'])
class Book {

    static def genres = ['Drama', 'Romance', 'Terror', 'SciFi', 'Comedy']

    String title
    String genre
    Date releaseDate

    static belongsTo = [author:Author]

    static constraints = {
        title maxSize: 150, blank: false, nullable: false
        genre blank: false, nullable: false, inList:genres
        releaseDate max: new Date()
    }
}

