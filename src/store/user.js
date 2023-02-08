import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({ 
    username: '',
    firstName:'Leonardo',
    lastName:'Rivera',
    linkedIn:'https://www.linkedin.com/in/luis-leonardo-rivera-4a7a03136/',
    github:'https://github.com/LeonardoRiveraITC'
   }),
  getters: {
    fullName: (state) => state.firstName+' '+state.lastName,
    getUserName:(state)=>state.username,
    getFirstName:(state)=>state.firstName,
    getLastName:(state)=>state.lastName,
    getLinkedIn:(state)=>state.linkedIn,
    getGithub:(state)=>state.github,
  },
  actions: {
    setGithub(ghub){
      this.github=ghub
    },
    setLinkedin(ldin){
      this.linkedIn=ldin
    },
    setFullName(fname,lname){
      this.fullName=fname;
      this.lastName=lname;
    },
    login(user) {
      //fetch user from backend
      this.username=user
      //set response to store
    },
    logout(){
      //clean token and userdata
      this.username=''
    }
  },
});