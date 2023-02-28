<script>

// import components here
import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte"
    // svelte components imported here
    import {onMount} from "svelte";
    // Svelte store import here
    import {userDataBase} from "../../stores/userDataBase";
    import {get} from "svelte/store"
    // Svelte routing imports here
    import { goto } from '$app/navigation'
    
    const user = get(userDataBase)[0]
    console.log(user)
    console.log("user is" + user)
    // Dates
    let currentTime = new Date(new Date().toISOString().slice(0,10)).getTime();
    let oneDay = (1000 * 3600 * 24);
    /**
   * @type {any[]}
   */
    let posts = [];

    // As soon as the page loads, goals will be viewed.
    onMount(async ()=>{
        // API Call HERE
        if(user){
            const res = await fetch("http://localhost:5000/api/getgoals/find/" + user);
        // load in data to variable
        posts = await res.json();
        }
    });

    // Check in button fix here
    const onCheck = async(username,id) =>{

    };

    const onSubmit = async (username, id)=>{


    };

</script>

<!--HTML Components-->

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
                <!-- 
                <h3>Total Hours Logged: { Math.round(Math.abs(new Date(task.setDate).getTime() - currentTime) / oneDay) * task.studyTime }</h3>
                <h3>Days Remaining: {Math.round(Math.abs(new Date(task.date).getTime() - currentTime) / oneDay)}</h3>
                <h3>Percentage Completed: {  Math.round(Math.abs(new Date(task.date).getTime() - currentTime)/ oneDay ) / Math.round(Math.abs(new Date(task.setDate).getTime() - currentTime) / oneDay)}%</h3>
                -->
                <div class ="button-format"> 
                <button class ="finish" on:click={()=> onCheck(task.username, task.id)}>Check In</button>
                <button class ="finish" on:click={()=> onSubmit(task.username, task.id)}>Mark As Complete</button>
                </div>
            </div>
    
        {/each}
    </div>
    
    
    <Footer/>
    
    </body>



<style>

body{
        background-color: #1e1e1e;
        color:white;
    }

    .header{
        text-align: center;
    }
    .parent{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .inside-parent{
        background-color: white;
        border-radius:10px;
        color:blueviolet;
        flex: 0 1 calc(25% - 1em);
        margin:10px;
        padding:20px;
    }

    .inside-parent h3{
        border-bottom: 3px solid blueviolet;
        margin-bottom:10px;
    }


    .finish{
        color:white;
        background-color: blueviolet;
        border-radius: 10px;
        padding:5px;
        cursor: pointer;
        padding:5px;
        margin:10px 0px;
    }

    .finish:hover{
        background-color: green;
    }

    .button-format{
        display: flex;
        flex-direction: column;
    }
</style>