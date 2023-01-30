import { writable } from "svelte/store";

const taskDataBase = writable([
    {
        id:1,
        goal:"Become a bad ass front end developer",
        how:"Study one hour per a day, practicing css skills.",
        date:new Date().toISOString().slice(0,10),
        setDate: new Date().toISOString().slice(0,10),
        studyTime:1,
    },
]);

export default taskDataBase;