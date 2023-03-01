import {configureStore} from '@reduxjs/toolkit';
import { loginReducer, updateReducer, userReducer, visitorStatsReducer } from './reducers/User';

const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        update: updateReducer,
        visitorStat: visitorStatsReducer
    }
});

export default store;