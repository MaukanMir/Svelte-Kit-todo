<script>
    //Component imports here
    import Nav from "../../lib/Nav.svelte";
    // import icons here
    import FaTrashAlt from 'svelte-icons/fa/FaTrashAlt.svelte'
    // import svelte variables here
    import { onMount } from "svelte";

    /**
   * @type {any[]}
   */
    let posts = [];

    onMount(async ()=>{
        // API Call here
        const res = await fetch("http://localhost:5000/api/getgoals");
        // load in data to variable
        posts = await res.json();
        
    })


    const deleteTask  = async (/** @type {number} */ id) =>{


        await fetch(`http://localhost:5000/api/deletegoals/:${id}`, {
            method: 'DELETE',
            headers:{"Content-Type":"application/json"}
        })
        .then(response => response.json())
        .then(result => console.log(result))

    
    };

    
</script>

<Nav/>

<div class ="tasks">
    <h1>Tasks To Complete Today:</h1>
    {#each posts as task}
    <div class ="inside-tasks"> 
    <h2>Goal: {task.goal}</h2>
    <h2>Hours practicing per a day: {task.studyTime}</h2>
    <h2>Due Date: {task.date}</h2>
    <button class ="delete" on:click={() => deleteTask(task.id)}> <FaTrashAlt/> </button>
    </div>
    {/each}
</div>

<style>
    .tasks h1{
        font-size: 32px;
        margin:10px;
    }

    .tasks{
        display:flex;
        flex-direction: column;
        border: 4px solid black;
        margin:20px;
        border-radius: 20px;
    }

    .inside-tasks{
        border: 2px solid red;
        margin:10px;
        padding:10px;
        border-radius: 10px;
    }

    .delete{
        background-color: white;
        border:none;
        height: 30px;
    }

    .delete:hover{
        color:red;
    }
</style>