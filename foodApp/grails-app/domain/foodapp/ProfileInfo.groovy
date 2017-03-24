package foodapp

class ProfileInfo {

    String email
    String phoneNumber
    String location
    String tastes = []
    FriendList friends = []

    static belongsTo = [profile : Profile]

    static constraints = {
    }
}