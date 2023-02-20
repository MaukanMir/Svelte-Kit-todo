import {writable} from "svelte/store";

// Save user information, making it easier for api calls
export const userInfoDb = writable([
    {
        _id:"",
        username:"",
        email:""
    }
])

export default userInfoDb;