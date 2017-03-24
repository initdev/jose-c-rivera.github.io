package foodapp

import com.mongodb.util.JSON
import grails.rest.RestfulController

class CreateProfileController extends RestfulController{

    static allowedMethods = [create: 'POST']
    static responseFormats = ['json']

    CreateProfileController(){
        super(Profile)
    }

    def index() { }

    def create(){
        def user = params.userName
        def emailAddress = params.email
        def userLocation = params.location
        def userNumber = params.phoneNumber
        def userTastes = params.value
        System.out.print(userTastes)
        // We would search for the account in the DB here
        //def account = UserAccount.find{userName == userName}
        def account = UserAccount.find{userName == user}
        if(account != null){
            def profile = account.getProfile()
            profile.info = new ProfileInfo(email: emailAddress, phoneNumber: userNumber,
                            location: userLocation, tastes: userTastes)
            profile.save(flush: true, failOnError: true)
            response.status = 200
        }
        else{
            //just for testing take out later
            System.out.print('Cannot find parent account....' + user)
            // Unprocessable Entity --> request was understood, syntax good but still failed
            response.status = 422
        }
    }
}
