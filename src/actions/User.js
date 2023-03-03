import axios from "axios";

const client = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BACKEND_LINK,
})

export const incVisitCount = () => async (dispatch) => {
    try {
        dispatch({
            type: "INC_VISITOR_COUNT_REQUEST",
        });

        const {data} = await client.get("/admin/inccount");

        dispatch({
            type: "INC_VISITOR_COUNT_SUCCESS",
            payload: {message: data.message, visitors: data.vistorData.visitors, allVisitors: data.vistorData.allVisitors},
        });
    } catch (error) {
        dispatch({
            type: "INC_VISITOR_COUNT_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const getUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "GET_USER_REQUEST",
        });

        const {data} = await client.get("/admin/user");

        dispatch({
            type: "GET_USER_SUCCESS",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "GET_USER_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const login = (userName, password) => async (dispatch) => {
    try {
        dispatch({
            type: "LOGIN_REQUEST",
        });

        const {data} = await client.post("/admin/login", {
            userName, password
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: "LOGOUT_REQUEST",
        });

        const {data} = await client.get("/admin/logout");

        dispatch({
            type: "LOGOUT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "LOGOUT_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LOAD_USER_REQUEST",
        });

        const {data} = await client.get("/admin/me");

        dispatch({
            type: "LOAD_USER_SUCCESS",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "LOAD_USER_FAILURE",
            payload: error.response.data.message,
        });
    }
}


export const updateLoginDetails = (userName, password) => async (dispatch) => {
    try {
        dispatch({
            type: "UPDATE_LOGIN_REQUEST",
        });

        const {data} = await client.put("/admin/update-login-details", { userName, password }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "UPDATE_LOGIN_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "UPDATE_LOGIN_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const updateHome = (home) => async (dispatch) => {
    try {
        dispatch({
            type: "UPDATE_HOME_REQUEST",
        });

        const {data} = await client.put("/admin/update-home-details", { home }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "UPDATE_HOME_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "UPDATE_HOME_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const updateAbout = (about) => async (dispatch) => {
    try {
        dispatch({
            type: "UPDATE_ABOUT_REQUEST",
        });

        const {data} = await client.put("/admin/update-about-details", { about }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "UPDATE_ABOUT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "UPDATE_ABOUT_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const updateSkillImages = (skillsCubeImg) => async (dispatch) => {
    try {
        dispatch({
            type: "UPDATE_SKILL_IMAGE_REQUEST",
        });

        const {data} = await client.put("/admin/update-skill-images", { skillsCubeImg }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "UPDATE_SKILL_IMAGE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "UPDATE_SKILL_IMAGE_FAILURE",
            payload: error.response.data.message,
        });
    }
}


export const addEducationTimeline = (title, description, startdate, enddate) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_EDUCATION_TIMELINE_REQUEST",
        });

        const {data} = await client.post("/admin/update/education-timeline/add", {
            title, description, startdate, enddate
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "ADD_EDUCATION_TIMELINE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_EDUCATION_TIMELINE_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const deleteEducationTimeline = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_EDUCATION_TIMELINE_REQUEST",
        });

        const {data} = await client.delete(`/admin/update/education-timeline/delete/${id}`);

        dispatch({
            type: "DELETE_EDUCATION_TIMELINE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_EDUCATION_TIMELINE_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const editEducationTimeline = (id, title, description, startdate, enddate) => async (dispatch) => {
    try {
        dispatch({
            type: "EDIT_EDUCATION_TIMELINE_REQUEST",
        });

        const {data} = await client.put(`/admin/update/education-timeline/edit/${id}`, {
            title, description, startdate, enddate
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "EDIT_EDUCATION_TIMELINE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "EDIT_EDUCATION_TIMELINE_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const addWorkTimeline = (title, description, startdate, enddate) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_WORK_TIMELINE_REQUEST",
        });

        const {data} = await client.post("/admin/update/work-timeline/add", {
            title, description, startdate, enddate
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "ADD_WORK_TIMELINE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_WORK_TIMELINE_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const deleteWorkTimeline = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_WORK_TIMELINE_REQUEST",
        });

        const {data} = await client.delete(`/admin/update/work-timeline/delete/${id}`);

        dispatch({
            type: "DELETE_WORK_TIMELINE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_WORK_TIMELINE_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const editWorkTimeline = (id, title, description, startdate, enddate) => async (dispatch) => {
    try {
        dispatch({
            type: "EDIT_WORK_TIMELINE_REQUEST",
        });

        const {data} = await client.put(`/admin/update/work-timeline/edit/${id}`, {
            title, description, startdate, enddate
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "EDIT_WORK_TIMELINE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "EDIT_WORK_TIMELINE_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const addSkill = (name) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_SKILL_REQUEST",
        });

        const {data} = await client.post("/admin/update/skills/add", {
            name
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "ADD_SKILL_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_SKILL_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const deleteSkill = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_SKILL_REQUEST",
        });

        const {data} = await client.delete(`/admin/update/skills/delete/${id}`);

        dispatch({
            type: "DELETE_SKILL_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_SKILL_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const editSkill = (id, name) => async (dispatch) => {
    try {
        dispatch({
            type: "EDIT_SKILL_REQUEST",
        });

        const {data} = await client.put(`/admin/update/skill/edit/${id}`, { name }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "EDIT_SKILL_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "EDIT_SKILL_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const addKnownLanguage = (name) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_KNOWN_LANGUAGE_REQUEST",
        });

        const {data} = await client.post("/admin/update/known-language/add", { name }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "ADD_KNOWN_LANGUAGE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_KNOWN_LANGUAGE_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const deleteKnownLanguage = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_KNOWN_LANGUAGE_REQUEST",
        });

        const {data} = await client.delete(`/admin/update/known-language/delete/${id}`);

        dispatch({
            type: "DELETE_KNOWN_LANGUAGE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_KNOWN_LANGUAGE_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const editKnownLanguage = (id, name) => async (dispatch) => {
    try {
        dispatch({
            type: "EDIT_KNOWN_LANGUAGE_REQUEST",
        });

        const {data} = await client.put(`/admin/update/known-language/edit/${id}`, { name }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "EDIT_KNOWN_LANGUAGE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "EDIT_KNOWN_LANGUAGE_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const addFrontendProject = (title, techstack, image, gitLink, demoLink) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_FRONTEND_PROJECT_REQUEST",
        });

        const {data} = await client.post("/admin/update/frontend-project/add", {
            title, techstack, image, gitLink, demoLink
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "ADD_FRONTEND_PROJECT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_FRONTEND_PROJECT_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const deleteFrontendProject = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_FRONTEND_PROJECT_REQUEST",
        });

        const {data} = await client.delete(`/admin/update/frontend-project/delete/${id}`);

        dispatch({
            type: "DELETE_FRONTEND_PROJECT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_FRONTEND_PROJECT_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const addFullstackProject = (title, techstack, image, gitLink, demoLink) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_FULLSTACK_PROJECT_REQUEST",
        });

        const {data} = await client.post("/admin/update/fullstack-project/add", {
            title, techstack, image, gitLink, demoLink
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "ADD_FULLSTACK_PROJECT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_FULLSTACK_PROJECT_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const deleteFullstackProject = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_FULLSTACK_PROJECT_REQUEST",
        });

        const {data} = await client.delete(`/admin/update/fullstack-project/delete/${id}`);

        dispatch({
            type: "DELETE_FULLSTACK_PROJECT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_FULLSTACK_PROJECT_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const addBackendProject = (title, techstack, image, gitLink, demoLink) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_BACKEND_PROJECT_REQUEST",
        });

        const {data} = await client.post("/admin/update/backend-project/add", {
            title, techstack, image, gitLink, demoLink
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "ADD_BACKEND_PROJECT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_BACKEND_PROJECT_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const deleteBackendProject = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_BACKEND_PROJECT_REQUEST",
        });

        const {data} = await client.delete(`/admin/update/backend-project/delete/${id}`);

        dispatch({
            type: "DELETE_BACKEND_PROJECT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_BACKEND_PROJECT_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const addSocialLinks = (name, link, color, icon) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_SOCIAL_LINKS_REQUEST",
        });

        const {data} = await client.post("/admin/update/social-link/add", {
            name, link, color, icon
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "ADD_SOCIAL_LINKS_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_SOCIAL_LINKS_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const deleteSocialLinks = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_SOCIAL_LINKS_REQUEST",
        });

        const {data} = await client.delete(`/admin/update/social-link/delete/${id}`);

        dispatch({
            type: "DELETE_SOCIAL_LINKS_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_SOCIAL_LINKS_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const addFeedback = (name, email, message) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_CONTACT_US_REQUEST",
        });

        const {data} = await client.post("/admin/add/feedback", {
            name, email, message
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "ADD_CONTACT_US_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_CONTACT_US_FAILURE",
            payload: error.response.data.message,
        });
    }
}
export const deleteFeedback = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_CONTACT_US_REQUEST",
        });

        const {data} = await client.delete(`/admin/delete/feedback/${id}`);

        dispatch({
            type: "DELETE_CONTACT_US_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_CONTACT_US_FAILURE",
            payload: error.response.data.message,
        });
    }
}
