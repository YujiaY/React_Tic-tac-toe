const initialState = {
    search: '',
    unit: 'c',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_VALUE':
            return {
                ...state,
                search: action.value,
            };

        case 'TOGGLE_UNIT':
            const unit = state.unit === 'c' ? 'f' : 'c';

            return {
                ...state,
                unit,
            };

        default:
          return state
      }
};
