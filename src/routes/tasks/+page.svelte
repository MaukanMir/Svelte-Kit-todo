<script>
    import Nav from "../../lib/Nav.svelte";
    import taskDataBase from "../../stores/taskDataBase";
    import FaTrashAlt from 'svelte-icons/fa/FaTrashAlt.svelte'


    const deleteTask = (/** @type {number} */ id) =>{

        taskDataBase.update(currentData =>{
            currentData = currentData.filter(item=> item.id != id)
            return [...currentData]
        });
    };
</script>

<Nav/>

<div class ="tasks">
    <h1>Tasks To Complete Today:</h1>

    {#each $taskDataBase as task}
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