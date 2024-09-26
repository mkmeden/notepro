import axios from "axios";
import { create } from "zustand";


const authStore = create((set) => ({
  loggedIn: null,
  loginForm: {
    email: "",
    password: "",
  },
  signUpForm: {
    name : "",
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    const { loginForm } = authStore.getState();

    set({
      loginForm: {
        ...loginForm,
        [name]: value,
      },
    });
  },

  updateSignUpForm: (e) => {
    const { name, value } = e.target;
    const { signUpForm } = authStore.getState();

    set({
      signUpForm: {
        ...signUpForm,
        [name]: value,
      },
    });
  },

  login: async (e) => {
    e.preventDefault();
    const { loginForm } = authStore.getState();

    const res = await axios.post("/login", loginForm);

    set({
      loggedIn: true,
    });

    set({
      loginForm: {
        email: "",
        password: "",
      },
    });
  },

  signup: async (e) => {

    e.preventDefault();
    const { signUpForm } = authStore.getState();
    const res = await axios.post("/signup", signUpForm, {
      withCredential: true,
    });

    set({
      signUpForm: {
        name : "",
        email: "",
        password: "",
      },
    });
  },

  checkAuth: async () => {
    try {
      const res = await axios.get("/check-auth");
      set({ loggedIn: true });
    } catch (error) {
      set({ loggedIn: false });
      
    }
  },


  logout  : async () =>{
    await axios.get('/logout' )
    set({loggedIn : false, 
        loginForm: {
          email : "", 
          password : ""
          
        }

    })
  }
}));

export default authStore;
