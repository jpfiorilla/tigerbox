const asyncActionType = (actionType) => ({
    PENDING: `${actionType}_PENDING`,
    SUCCESS: `${actionType}_SUCCESS`,
    FAILURE: `${actionType}_FAILURE`
});

export const LOGIN = asyncActionType('LOGIN');
export const LOGOUT = 'LOGOUT';

export const CART_ADD = 'CART_ADD';
export const CART_REMOVE = 'CART_REMOVE';

export const CART_SET = 'CART_SET';