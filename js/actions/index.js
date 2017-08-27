import { loginAttempt, createAccountAttempt, logOut, updateAccountAttempt } from './userActions';
import { addLoanLocal, deleteLoanLocal, editLoanLocal } from './loanActions';
import { submitSurvey } from './surveyActions';
import { addEmailToMailChimp } from './mailChimpSignUpActions'

const actions = {
    loginAttempt,
    createAccountAttempt,
    logOut,
    addLoanLocal,
    deleteLoanLocal,
    editLoanLocal,
    submitSurvey,
    updateAccountAttempt,
    addEmailToMailChimp
}

export default actions;
