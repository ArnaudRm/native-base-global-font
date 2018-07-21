
const INITIAL_STATE = {
    size: 'small',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_FONT_SIZE':
            return {...state, size: action.payload};
        default:
            return state;
    }
}
