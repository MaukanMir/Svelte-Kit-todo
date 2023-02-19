import { writable } from "svelte/store";

export const userDataBase = writable([
    {
        user:""
    },
]);

export default userDataBase;