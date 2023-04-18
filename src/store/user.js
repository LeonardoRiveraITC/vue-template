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
  },
  actions: {
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