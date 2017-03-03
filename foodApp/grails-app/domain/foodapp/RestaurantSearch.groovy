package foodapp

class RestaurantSearch {

    static mapWith = "mongo"
    String searchTerm = "thai"
    String location = "London, ON"
    String c_key = "xemf3Y2VeAFbwwCWCR1xBA"
    String c_secret = "3OIrLzmdfOEk45BLcyEZDOXDReg"
    String token = "bSrUGKfPTmLhABYi15sjU47ZkEBE21Jh"
    String token_secret = "pYF2IvuRcr0BQZLPbeD9bQJ5F8E"

    static constraints = {
    }

    def getTerms(){
        return searchTerm
    }

    def getLocation(){
        return location
    }

}
