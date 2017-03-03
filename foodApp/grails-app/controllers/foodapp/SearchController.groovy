package foodapp

import grails.rest.RestfulController
import foodapp.YelpAPI

class SearchController extends RestfulController {

    static allowedMethods = [searchRestaurants: 'GET']
    static responseFormats = ['String']

    SearchController(){
        super(RestaurantSearch)
    }

    def index() { }

    def searchRestaurants() {

        /* Search term and location */
        String term = params.searchTerm
        String location = params.location

        /* Authentication credentials for our app */
        String c_key = "xemf3Y2VeAFbwwCWCR1xBA"
        String c_secret = "3OIrLzmdfOEk45BLcyEZDOXDReg"
        String token = "bSrUGKfPTmLhABYi15sjU47ZkEBE21Jh"
        String token_secret = "pYF2IvuRcr0BQZLPbeD9bQJ5F8E"

        YelpAPI yelp = new YelpAPI(c_key, c_secret, token, token_secret)
        def result = yelp.searchForBusinessesByLocation(term, location)
        System.out.print(result) //just prints the result so far
        response.status = 200
    }
}
