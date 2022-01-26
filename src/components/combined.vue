<template>
  <div>{{repositories}}===>{{searchQuery}}</div>
</template>

<script>
import { toRefs } from "vue";
import useUserRepositories from '@/composables/useUserRepositories'
import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'
export default {
    props: {
        user: {
            type: Array,
            required: true
        }
    },
    setup (props) {
        let {user} = toRefs(props)
        
        const { repositories, getUserRepositories } = useUserRepositories(user)
        const {
        searchQuery,
        repositoriesMatchingSearchQuery
        } = useRepositoryNameSearch(repositories)
        
        return {
            // 因为我们并不关心未经过滤的仓库
            // 我们可以在 `repositories` 名称下暴露过滤后的结果
            repositories: repositoriesMatchingSearchQuery,
            getUserRepositories,
            searchQuery,
        }
    }
}
</script>

<style>

</style>