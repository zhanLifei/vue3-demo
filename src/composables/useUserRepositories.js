import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories(user){
    
    const repositories = ref([])
    const getUserRepositories = async () => {
        repositories.value = await fetchUserRepositories(user.value)
    }
    function fetchUserRepositories(val){
        return val
    }
    onMounted(getUserRepositories)
    // 在 user prop 的响应式引用上设置一个侦听器
    watch(user, getUserRepositories)

    return {
        repositories,
        getUserRepositories
    }
}