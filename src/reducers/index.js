import { combineReducers } from 'redux';
import FontReducer from './FontReducer';
import {
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import AppNavigator from '../navigation/AppNavigator';

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
    font: FontReducer,
    nav: navReducer,
});

const rootReducer = (state, action) => {
    let newState = state;
    if (action.type === 'logout_success') {
        newState = undefined;
    }
    return appReducer(newState, action);
};

export default rootReducer;
