export default {
    SET_TOKEN(state, token){
        localStorage.setItem('accessToken', token);
        state.token = token;
    },
    REMOVE_TOKEN(state){
        localStorage.removeItem('accessToken');
        state.token = null;
    },
}