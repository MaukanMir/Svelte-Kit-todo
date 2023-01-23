<script>
    import Nav from "../../lib/Nav.svelte";
    import taskDataBase from "../../stores/taskDataBase";
</script>

<Nav/>

<div class ="tasks">
    <h1>Tasks To Complete Today:</h1>

    {#each $taskDataBase as task}
    <div class ="inside-tasks"> 
    <h2>Goal: {task.goal}</h2>
    <h2>Hours practicing per a day: {task.studyTime}</h2>
    <h2>Due Date: {task.date}</h2>
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
        border: 6px solid black;
        margin:20px;
    }

    .inside-tasks{
        border: 3px solid red;
        margin:10px;
        padding:10px;
    }
</style>