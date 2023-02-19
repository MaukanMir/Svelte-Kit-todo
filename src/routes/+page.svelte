
<script>
    // import components here
    import Nav from "../lib/Nav.svelte";
    import Footer from "../lib/Footer.svelte"
    // svelete components imported here
    import {onMount} from "svelte";
    // Svelte store import here
    import {userDataBase} from "../stores/userDataBase";
    import {get} from "svelte/store"

    const user = get(userDataBase)[0]
    console.log(user)
    // Dates
    let currentTime = new Date(new Date().toISOString().slice(0,10)).getTime();
    let oneDay = (1000 * 3600 * 24);
    /**
   * @type {any[]}
   */
    let posts = [];

    onMount(async ()=>{
        // API Call here
        if(user){
            const res = await fetch("http://localhost:5000/api/getgoals/find/" + user[0]);
        // load in data to variable
        posts = await res.json();
        }
    });
</script>
<body>
<Nav/>

<div class ="parent">
    <h2>Goal Analysis</h2>
    {#each posts as task}
        <div class ="inside-parent"> 
            <h2>Goal: {task.goal}</h2>
            <h2>Start Date:{task.date}</h2>
            <h2> Due Date: {task.setDate}</h2>
            <h2>Hours Alloted: {task.studyTime}</h2>
            <h2>Total Hours Logged: { Math.round(Math.abs(new Date(task.setDate).getTime() - currentTime) / oneDay) * task.studyTime }</h2>
            <h2>Days Remaining: {Math.round(Math.abs(new Date(task.date).getTime() - currentTime) / oneDay)}</h2>
            <h2>Percentage Completed: {  Math.round(Math.abs(new Date(task.date).getTime() - currentTime)/ oneDay ) / Math.round(Math.abs(new Date(task.setDate).getTime() - currentTime) / oneDay)}%</h2>
        </div>
    {/each}
</div>

<Footer/>

</body>

<style>

    body{
        background-color: #000036;
        color:white;
    }

    .parent{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .inside-parent{
        justify-content: space-evenly;
        border: 6px solid white;
        margin:10px;
    }

    .inside-parent h2{
        margin: 20px 10px;
        padding: 10px;
        display: flex;
        justify-content: center;
    }

    .inside-parent h2:hover{
        color:white;
        cursor: pointer;
        background-color: black;
    }

</style>

