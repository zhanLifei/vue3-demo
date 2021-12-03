import { reactive } from 'vue'
import { IState } from './state'

function updateCode(state: IState) {
    return (code: string) => {
        state.code = code
    }
}

function updateToken(state: IState) {
    return (token: string) => {
        state.token = token
    }
}

function updateUser(state: IState) {
    return (user: any) => {
        state.user = user
    }
}

/**
 * 创建Action
 * @param state
 */
export function createAction(state: IState) {
    return {
        updateToken: updateToken(state),
        updateCode: updateCode(state),
        updateUser: updateUser(state)
    }
}
