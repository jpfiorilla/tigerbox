import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.userData, action) {
	switch(action.type) {
		case types.SUBMIT_LOANS_REMOTE_SUCCESS:
			return action.userData;
		case types.SUBMIT_LOANS_REMOTE_FAILURE:
			return { ...state, message: action.message };
		case types.ADD_LOAN_REMOTE_SUCCESS:
			return action.userData;
		case types.ADD_LOAN_REMOTE_FAILURE:
			return { ...state, message: action.message };
		case types.ADD_LOAN_LOCAL:
			return { ...state, loans: [...state.loans, action.loanObject] };
		case types.EDIT_LOAN_LOCAL:
			state.loans[action.loanObjectWithIndex.editLoanIndex] = action.loanObjectWithIndex;
			delete state.loans[action.loanObjectWithIndex.editLoanIndex].selected;
			delete state.loans[action.loanObjectWithIndex.editLoanIndex].editLoanIndex;
			return state;
		case types.DELETE_LOAN_LOCAL:
			state.loans.splice(action.index, 1);
			return { ...state, loans: state.loans };
		case types.CREATE_ACCOUNT_SUCCESS:
			return action.userData;
		case types.CREATE_ACCOUNT_FAILURE:
			return { ...state, error: action.error };
		case types.LOGIN_SUCCESS:
			return action.userData;
		case types.LOGIN_FAILURE:
			return {...state, message: action.message};
		case types.LOGOUT:
			localStorage.removeItem('email');
			localStorage.removeItem('password');
			return action.userData;
		case types.SURVEY_SUBMIT:
			return { ...state, surveyData: action.surveyData }
		case types.SURVEY_SUBMIT_SUCCESS:
			return action.userData;
		case types.UPDATE_ACCOUNT_SUCCESS:
			return state;
		case types.UPDATE_ACCOUNT_FAILURE:
			return state;
		default:
			return state;
	}
}