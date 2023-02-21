import axios from "axios";

export const getUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "GET_USER_REQUEST",
        });

        const {data} = await axios.get("/admin/user");

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

        const {data} = await axios.post("/admin/login", {
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

        const {data} = await axios.get("/admin/logout");

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

        const {data} = await axios.get("/admin/me");

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

export const updateUser = (userName, password, skillsCubeImg, about) => async (dispatch) => {
    try {
        dispatch({
            type: "UPDATE_USER_REQUEST",
        });

        const {data} = await axios.put("/admin/update-details", {
            userName, password, skillsCubeImg, about
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "UPDATE_USER_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "UPDATE_USER_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const addEducationTimeline = (title, description, startdate, enddate) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_EDUCATION_TIMELINE_REQUEST",
        });

        const {data} = await axios.post("/admin/update/education-timeline/add", {
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

        const {data} = await axios.delete(`/admin/update/education-timeline/delete/${id}`);

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


export const addWorkTimeline = (title, description, startdate, enddate) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_WORK_TIMELINE_REQUEST",
        });

        const {data} = await axios.post("/admin/update/work-timeline/add", {
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

        const {data} = await axios.delete(`/admin/update/work-timeline/delete/${id}`);

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


export const addSkill = (name) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_SKILL_REQUEST",
        });

        const {data} = await axios.post("/admin/update/skills/add", {
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

        const {data} = await axios.delete(`/admin/update/skills/delete/${id}`);

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


export const addKnownLanguage = (name) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_KNOWN_LANGUAGE_REQUEST",
        });

        const {data} = await axios.post("/admin/update/known-language/add", {
            name
        }, {
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

        const {data} = await axios.delete(`/admin/update/known-language/delete/${id}`);

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


export const addFrontendProject = (title, description, image, gitLink, demoLink) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_FRONTEND_PROJECT_REQUEST",
        });

        const {data} = await axios.post("/admin/update/frontend-project/add", {
            title, description, image, gitLink, demoLink
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
        console.log(error);
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

        const {data} = await axios.delete(`/admin/update/frontend-project/delete/${id}`);

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


export const addFullstackProject = (title, description, image, gitLink, demoLink) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_FULLSTACK_PROJECT_REQUEST",
        });

        const {data} = await axios.post("/admin/update/fullstack-project/add", {
            title, description, image, gitLink, demoLink
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

        const {data} = await axios.delete(`/admin/update/fullstack-project/delete/${id}`);

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


export const addBackendProject = (title, description, image, gitLink, demoLink) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_BACKEND_PROJECT_REQUEST",
        });

        const {data} = await axios.post("/admin/update/backend-project/add", {
            title, description, image, gitLink, demoLink
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

        const {data} = await axios.delete(`/admin/update/backend-project/delete/${id}`);

        dispatch({
            type: "DELETE_BACKEND_PROJECT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: "DELETE_BACKEND_PROJECT_FAILURE",
            payload: error.response.data.message,
        });
    }
}

export const contactus = (name, email, message) => async (dispatch) => {
    try {
        dispatch({
            type: "CONTACT_US_REQUEST",
        });

        const {data} = await axios.post("/admin/contact", {
            name, email, message
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        dispatch({
            type: "CONTACT_US_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "CONTACT_US_FAILURE",
            payload: error.response.data.message,
        });
    }
}
