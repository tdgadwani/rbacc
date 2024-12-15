// const BASE_URL = "http://localhost:4000";
const BASE_URL = "https://rbac-6h9e.onrender.com";

const USER_ROUTER = BASE_URL + "/api/v1/user";
const QNA_ROUTER = BASE_URL + "/api/v1/qna";
const COMMENT_ROUTER = BASE_URL + "/api/v1/comment";

export const SIGNUP_USER = USER_ROUTER + "/signup";
export const LOGIN_USER = USER_ROUTER + "/login";
export const LOGOUT_USER = USER_ROUTER + "/logout";

export const FETCH_QUESTIONS = QNA_ROUTER + "/fetchQuestions";
export const POST_QUESTION = QNA_ROUTER + "/postQuestion";
export const DELETE_QUESTION = QNA_ROUTER + "/deleteQuestion";
export const APPROVE_QUESTION = QNA_ROUTER + "/approveQuestion";
export const APPROVED_QUESTIONS = QNA_ROUTER + "/approvedQuestions";
export const PENDING_QUESTIONS = QNA_ROUTER + "/pendingQuestions";
export const EDIT_QUESTION = QNA_ROUTER + "/editQuestion";

export const POST_COMMENT = COMMENT_ROUTER + "/postComment";
export const FETCH_COMMENTS = COMMENT_ROUTER + "/fetchComments";
