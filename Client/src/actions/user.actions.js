import { userConstants } from '../constants';

export function successAction(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
export function failureAction(error) { return { type: userConstants.LOGIN_FAILURE, error } }

export function logountAction() { return { type: userConstants.LOGOUT } }