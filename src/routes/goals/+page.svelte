<script>
    //Component imports here
    import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte"
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

    // Delete task functionality 
    async function deleteTask(/** @type {number} */ id){
        // Find deleted post
        const deletedpost = posts.filter(item=> item.id === id);
        //Filter posts here
        posts = posts.filter(item => item.id != id)
        console.log(deletedpost)
        // update database here
        const res = await fetch("http://localhost:5000/api/deletegoals/" + deletedpost[0]._id, {
            method: 'DELETE'
        }).then(response =>{
            if(!response.ok){console.log("opps")}
            else{console.log("success");}
        })
        
    
    };

</script>
<body>
<Nav/>

<div class ="tasks">
    <h1>Tasks To Complete Today:</h1>
    {#each posts as task}
    <div class ="inside-tasks"> 
    <h2>Goal: {task.goal}</h2>
    <h2>Hours practicing per a day: {task.studyTime}</h2>
    <h2>Start Date: {task.date}</h2>
    <h2>Due Date: {task.setDate}</h2>
    <button class ="delete" on:click={() => deleteTask(task.id)}> <FaTrashAlt/> </button>
    </div>
    {/each}
</div>
<Footer/>
</body>

<style>
    body{
        background-color:#000036;
    }
    .tasks h1{
        font-size: 32px;
        margin:10px;
    }

    .tasks{
        display:flex;
        flex-direction: column;
        /* border: 4px solid whitesmoke; */
        margin:20px;
        border-radius: 20px;
        color:whitesmoke;
    }

    .inside-tasks{
        border: 2px solid red;
        margin:10px;
        padding:10px;
        border-radius: 10px;
        color:whitesmoke;
    }

    .delete{
        color: white;
        border:none;
        height: 30px;
        background-color:#000036;
    }

    .delete:hover{
        color:red;
    }
</style>