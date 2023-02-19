import { writable } from "svelte/store";

const userDataBase = writable([
    {
        userId:""
    },
]);

export default userDataBase;