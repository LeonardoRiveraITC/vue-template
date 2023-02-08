import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const username = ref('')
  const name = ref('Leonardo')
  const lastName = ref('Rivera')
  const linkedIn = ref('')
  const github = ref('')
  const fullName = computed(() => name.value + lastName.value)
  function login(user) { 
    username.value=user
  }

  return { count, name, doubleCount, increment }
})