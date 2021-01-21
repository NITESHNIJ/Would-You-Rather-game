import { RECEIVE_USERS } from '../actions/users';
import { SAVE_QUESTION_ANS, ADD_QUESTION } from '../actions/questions'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_QUESTION_ANS:
            return {
                ...state,
                [action.userID]: {
                    ...state[action.userID],
                    answers: {
                        ...state[action.userID].answers,
                        [action.questionID]: action.answer
                    }
                }

            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }

            }
        default:
            return state
    }
}