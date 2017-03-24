package foodapp

import grails.rest.RestfulController
import grails.converters.*

class ViewAccountController extends RestfulController{

    static allowedMethods = [view: 'GET']
    static responseFormats = ['json']

    ViewAccountController(){
        super(UserAccount)
    }

    def index() { }

    def view(){
        def userName = params.userName
//        System.out.println('attempting to view: ' + userName)
        UserAccount account = UserAccount.find{userName == userName}

        if (account != null){
//            System.out.println('account: ' + account + ' with profile: ' + account.userProfile)
            def profile = account.userProfile
            def infoFromProfile = profile.info
//            System.out.println('Profile: ' + profile + ' has profileInfo: ' + infoFromProfile)
//            System.out.println('phone: ' + infoFromProfile.phoneNumber)
//            System.out.println('location: ' + infoFromProfile.location)
//            System.out.println('email: ' + infoFromProfile.email)
            def result = [result: infoFromProfile]
            response.setContentType("application/json")

            response.status = 200

            render result as JSON
        }
        else{
            System.out.print('User not found')
            response.status = 404
        }
    }


}