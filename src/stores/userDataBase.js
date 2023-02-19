import { writable } from "svelte/store";

export const userDataBase = writable([
    {
        userId:""
    },
]);

export default userDataBase;