package foodapp

import grails.rest.RestfulController

class ManageAccountController extends RestfulController{

    static allowedMethods = [updatePhone: 'POST', updateLocation: 'POST', updateEmail: 'POST', addFriend: 'POST']

    ManageAccountController(){
        super(UserAccount)
    }

    def updatePhone(){
        def userName = params.userName
        def newPhone = params.newPhone
        UserAccount account = UserAccount.find{userName == userName} //find the user account of the logged in user

        if (account != null){
            def profile = account.userProfile //get their profile
            def infoFromProfile = profile.info //access their profile details
            infoFromProfile.phoneNumber = newPhone
            infoFromProfile.save(flush: true, failOnError: true)
            response.status = 200
        }
        else {
            response.status = 404
        }
    }

    def addFriend(){
        def userName = params.userName
        def friendToAdd = params.friend
        def account = UserAccount.findOrSaveByUserName(userName)
        def profile = account.userProfile
        def infoFromProfile = profile.info
        infoFromProfile.friends.addToFriends(friendToAdd)
        infoFromProfile.save(flush: true, failOnError: true)
    }

    def removeFriend(){
        def userName = params.userName
        def friendToRemove = params.friend
        def account = UserAccount.findOrSaveByUserName(userName)
        def profile = account.userProfile
        def infoFromProfile = profile.info
        infoFromProfile.friends.removeFromFriends(friendToRemove)
        infoFromProfile.save(flush: true, failOnError: true)
    }


    def updateLocation(){
        def userName = params.userName
        def newLocation = params.newLocation
        UserAccount account = UserAccount.find{userName == userName} //find the user account of the logged in user

        if (account != null){
            def profile = account.userProfile //get their profile
            def infoFromProfile = profile.info //access their profile details
            infoFromProfile.location = newLocation
            infoFromProfile.save(flush: true, failOnError: true)
            response.status = 200
        }
        else {
            response.status = 404
        }
    }

    def updateEmail(){
        def userName = params.userName
        def newEmail = params.newEmail
        UserAccount account = UserAccount.find{userName == userName} //find the user account of the logged in user

        if (account != null){
            def profile = account.userProfile //get their profile
            def infoFromProfile = profile.info //access their profile details
            infoFromProfile.email = newEmail
            infoFromProfile.save(flush: true, failOnError: true)
            response.status = 200
        }
        else {
            response.status = 404
        }
    }

    def index() { }
}
