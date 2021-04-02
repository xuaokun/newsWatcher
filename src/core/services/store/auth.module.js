import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()//开发暂时关闭哦
  // isAuthenticated: true
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise((resolve,reject) => {
      ApiService.post("/api2/login", credentials)
        .then(({ data }) => {
          console.log("Here what post returns", data);
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch((e) => {
          context.commit(SET_ERROR, e);
          reject(e);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("/api2/register", credentials)
        .then(({ data }) => {
          console.log(data);
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch((e) => {
          context.commit(SET_ERROR, e);
        });
    });
  },
  [VERIFY_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("/api2/verify")
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
        })
        .catch((e) => {
          context.commit(SET_ERROR, e);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_PASSWORD](context, payload) {
    const password = payload;

    return ApiService.put("password", password).then(({ data }) => {
      context.commit(SET_PASSWORD, data);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
    state.user = {};
    state.isAuthenticated = false;
    JwtService.destroyToken();
  },
  [SET_AUTH](state, user) {
    console.log(user)
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  [SET_PASSWORD](state, password) {
    state.user.password = password;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
