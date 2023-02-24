import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
}

export const userReducer = createReducer(initialState, {
    GET_USER_REQUEST: (state) => {
        state.loading = true;
    },
    GET_USER_SUCCESS: (state, action) => {
        state.loading = false;
        state.user = action.payload; 
    },
    GET_USER_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },

    CLEAR_ERROR: (state) => {
        state.error = null
    },
});

export const loginReducer = createReducer({}, {
    LOGIN_REQUEST: (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    LOGIN_SUCCESS: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = action.payload; 
        state.user = action.payload.user; 
    },
    LOGIN_FAILURE: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload; 
    },

    LOGOUT_REQUEST: (state) => {
        state.loading = true;
    },
    LOGOUT_SUCCESS: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload; 
    },
    LOGOUT_FAILURE: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload; 
    },

    LOAD_USER_REQUEST: (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    LOAD_USER_SUCCESS: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    LOAD_USER_FAILURE: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload; 
    },

    CLEAR_ERROR: (state) => {
        state.error = null
    },
    CLEAR_MESSAGE: (state) => {
        state.message = null
    },
});

export const updateReducer = createReducer({}, {    
    UPDATE_LOGIN_REQUEST: (state) => {
        state.loading = true;
    },
    UPDATE_LOGIN_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    UPDATE_LOGIN_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    
    UPDATE_HOME_REQUEST: (state) => {
        state.loading = true;
    },
    UPDATE_HOME_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    UPDATE_HOME_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    
    UPDATE_ABOUT_REQUEST: (state) => {
        state.loading = true;
    },
    UPDATE_ABOUT_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    UPDATE_ABOUT_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },

    UPDATE_SKILL_IMAGE_REQUEST: (state) => {
        state.loading = true;
    },
    UPDATE_SKILL_IMAGE_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    UPDATE_SKILL_IMAGE_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    

    ADD_EDUCATION_TIMELINE_REQUEST: (state) => {
        state.loading = true;
    },
    ADD_EDUCATION_TIMELINE_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    ADD_EDUCATION_TIMELINE_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    DELETE_EDUCATION_TIMELINE_REQUEST: (state) => {
        state.loading = true;
    },
    DELETE_EDUCATION_TIMELINE_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    DELETE_EDUCATION_TIMELINE_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },

    ADD_WORK_TIMELINE_REQUEST: (state) => {
        state.loading = true;
    },
    ADD_WORK_TIMELINE_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    ADD_WORK_TIMELINE_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    DELETE_WORK_TIMELINE_REQUEST: (state) => {
        state.loading = true;
    },
    DELETE_WORK_TIMELINE_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    DELETE_WORK_TIMELINE_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },


    ADD_SKILL_REQUEST: (state) => {
        state.loading = true;
    },
    ADD_SKILL_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    ADD_SKILL_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    DELETE_SKILL_REQUEST: (state) => {
        state.loading = true;
    },
    DELETE_SKILL_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    DELETE_SKILL_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    EDIT_SKILL_REQUEST: (state) => {
        state.loading = true;
    },
    EDIT_SKILL_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    EDIT_SKILL_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },

    
    ADD_KNOWN_LANGUAGE_REQUEST: (state) => {
        state.loading = true;
    },
    ADD_KNOWN_LANGUAGE_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    ADD_KNOWN_LANGUAGE_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    DELETE_KNOWN_LANGUAGE_REQUEST: (state) => {
        state.loading = true;
    },
    DELETE_KNOWN_LANGUAGE_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    DELETE_KNOWN_LANGUAGE_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    EDIT_KNOWN_LANGUAGE_REQUEST: (state) => {
        state.loading = true;
    },
    EDIT_KNOWN_LANGUAGE_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    EDIT_KNOWN_LANGUAGE_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },

    ADD_FRONTEND_PROJECT_REQUEST: (state) => {
        state.loading = true;
    },
    ADD_FRONTEND_PROJECT_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    ADD_FRONTEND_PROJECT_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    DELETE_FRONTEND_PROJECT_REQUEST: (state) => {
        state.loading = true;
    },
    DELETE_FRONTEND_PROJECT_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    DELETE_FRONTEND_PROJECT_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },

    ADD_FULLSTACK_PROJECT_REQUEST: (state) => {
        state.loading = true;
    },
    ADD_FULLSTACK_PROJECT_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    ADD_FULLSTACK_PROJECT_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    DELETE_FULLSTACK_PROJECT_REQUEST: (state) => {
        state.loading = true;
    },
    DELETE_FULLSTACK_PROJECT_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    DELETE_FULLSTACK_PROJECT_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    
    ADD_BACKEND_PROJECT_REQUEST: (state) => {
        state.loading = true;
    },
    ADD_BACKEND_PROJECT_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    ADD_BACKEND_PROJECT_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    DELETE_BACKEND_PROJECT_REQUEST: (state) => {
        state.loading = true;
    },
    DELETE_BACKEND_PROJECT_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    DELETE_BACKEND_PROJECT_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },

    ADD_SOCIAL_LINKS_REQUEST: (state) => {
        state.loading = true;
    },
    ADD_SOCIAL_LINKS_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    ADD_SOCIAL_LINKS_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },
    DELETE_SOCIAL_LINKS_REQUEST: (state) => {
        state.loading = true;
    },
    DELETE_SOCIAL_LINKS_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    DELETE_SOCIAL_LINKS_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },

    
    ADD_CONTACT_US_REQUEST: (state) => {
        state.loading = true;
    },
    ADD_CONTACT_US_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    ADD_CONTACT_US_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },

    DELETE_CONTACT_US_REQUEST: (state) => {
        state.loading = true;
    },
    DELETE_CONTACT_US_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload; 
    },
    DELETE_CONTACT_US_FAILURE: (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    },

    CLEAR_ERROR: (state) => {
        state.error = null
    },
    CLEAR_MESSAGE: (state) => {
        state.message = null
    },
});