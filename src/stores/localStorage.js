import { writable } from "svelte/store";
import { browser } from "$app/environment";


export const token_name = writable({
    token:"",
    is_user_active:false,
    is_admin:false,
});

token_name.subscribe((user)=> browser && localStorage.setItem("token", user.token))