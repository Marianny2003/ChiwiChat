const initialState = {
    usuario: 'Chiwi123',
    email: 'chiwiChat@gmail.com',
    profileImage: null,
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PROFILE':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default profileReducer;
  