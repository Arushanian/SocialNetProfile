import { userConstants } from '../constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.USER_IS_FETCHED:
            return {
                ...state,
                user: action.user
            }
        case userConstants.GETALL_SUCCESS:
            return {
                ...state,
                items: action.users
            };
        case userConstants.GETALL_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}