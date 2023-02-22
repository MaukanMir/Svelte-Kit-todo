
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

<h1 class ="header">Goal Analysis</h1>

<div class ="parent">
    {#each posts as task}
        <div class ="inside-parent"> 
            <h3>Goal: {task.goal}</h3>
            <h3>Start Date:{task.date}</h3>
            <h3> Due Date: {task.setDate}</h3>
            <h3>Hours Alloted: {task.studyTime}</h3>
            <h3>Total Hours Logged: { Math.round(Math.abs(new Date(task.setDate).getTime() - currentTime) / oneDay) * task.studyTime }</h3>
            <h3>Days Remaining: {Math.round(Math.abs(new Date(task.date).getTime() - currentTime) / oneDay)}</h3>
            <h3>Percentage Completed: {  Math.round(Math.abs(new Date(task.date).getTime() - currentTime)/ oneDay ) / Math.round(Math.abs(new Date(task.setDate).getTime() - currentTime) / oneDay)}%</h3>
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

    .header{
        text-align: center;
    }

    .parent{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .inside-parent{
        display: flex;
        flex-wrap:wrap;
        border: 6px solid white;
        margin:10px;
        background-color: white;
        border-radius:10px;
        color:#000036;
        flex:2;
    }

    .inside-parent h2{
        margin: 20px 10px;
        padding: 10px;
        display: flex;
        border-bottom: 6px solid #000036;
    }

    .inside-parent h2:hover{
        color:white;
        cursor: pointer;
        background-color: red;
    }

</style>

