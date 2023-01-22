<script>
    import Nav from "../../lib/Nav.svelte";
    import taskDataBase from "../../stores/taskDataBase";

    let editGoal = "";
    let editHow ="";
    let editDate ="";


    const editTask = () =>{

    };
    
</script>

<Nav/>
    <div class ="parent">
    <form class ="form" on:submit|preventDefault={editTask}>
    {#each $taskDataBase as task}
        <div class = "inside-form">
            <label for="goal">Original Goal: {task.goal}</label>
            <input
            type="text"
            />
        </div>

        <div class = "inside-form">
            <label for="editHow"> Original How: {task.how}</label>
            <input
            type="text"
            />
        </div>

        <div class = "inside-form">
            <label for="editDate"> Original Date: {task.date}</label>
            <input
            type="date"
            />
        </div>
        {/each}
    </form>
</div>



<style>

    .parent{
        display:flex;
        flex-direction: column;
        border: 6px solid maroon;
        margin-top:20px;
    }
.form{
    display:flex;
    flex-direction: column;
    margin:10px;
}

.inside-form label{
    font-size: 20px;
}

.inside-form{
    display:flex;
    flex-direction:row;
    border: 2px solid black;
    margin:10px;
    padding:10px;
}
</style>