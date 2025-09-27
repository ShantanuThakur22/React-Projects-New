
import conf from '../conf/conf';
import { Client, Account,ID} from 'appwrite';

export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteprojectid)

        this.account= new Account(this.client)
    }
    async createAccount ({email,password,name}){
        try {
           const useraccount= await this.account(ID.unique(),email,password,name)
           if(useraccount){
            //Call another method
            return this.login({email,password})
           }
           else{
            return useraccount
           }
        } catch (error) {
            throw error
        }
    }
    async login({email,password}){
        try {
         return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error",error);
            
        }
        return null
    }
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error",error);
        }
    }
}


const authservice = new AuthService()

export default authservice


// The Super Simple Story:
// This is like having a super smart robot friend who works at your favorite clubhouse!
// What the robot does:

// 🆕 "Want to join our club?" → createAccount() helps new kids become members and automatically lets them in
// 🚪 "Show me your card!" → login() checks if you're really a member and opens the door
// 🤔 "Who's here right now?" → getCurrentUser() tells you who's currently in the clubhouse
// 👋 "Time to go home?" → logout() safely helps you leave and locks up behind you

// The cool part: Once you create this robot, it remembers the clubhouse address and has all the right permissions. So everyone in your app can use the SAME robot to help with joining, entering, checking, and leaving!
// In real life: Instead of a clubhouse, it's your app. Instead of membership cards, it's user accounts. But the robot does the exact same job - helping people sign up, log in, see who they are, and log out safely! 🚀
// The magic word async: This means "Hey robot, this might take a while, so don't make everyone wait. Do your thing and tell us when you're done!" ⏰