<script>
    import Nav from "../../lib/Nav.svelte";
    import taskDataBase from "../../stores/taskDataBase";
    import MdModeEdit from 'svelte-icons/md/MdModeEdit.svelte'

    let editGoal = "";
    let editHow ="";
    let editDate ="";


    const editTask = () =>{

        
        taskDataBase.update(currentGoals =>{

            return [...currentGoals]
        })

    };

</script>

<Nav/>
<h1 class ="title">Edit Goals</h1>
    <div class ="parent">
    <form class ="form" on:submit|preventDefault={editTask}>
    {#each $taskDataBase as task}
        <div class = "inside-form">
            <label for="goal">Original Goal: {task.goal}</label>
            <!-- <input
            class =""
            type="text"
            /> -->
            <button class ="edit-icon"> <MdModeEdit/> </button>
        </div>

        <div class = "inside-form">
            <label for="editHow"> Original How: {task.how}</label>
            <!-- <input
            class =""
            type="text"
            /> -->
            <button class ="edit-icon"> <MdModeEdit/> </button>
        </div>

        <div class = "inside-form">
            <label for="editDate"> Original Date: {task.date}</label>
            <!-- <input
            class =""
            type="date"
            /> -->
        <button class ="edit-icon"> <MdModeEdit/> </button>
        </div>
        {/each}
    </form>
</div>


<style>
    .title{
        text-align: center;
    }
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
    margin: 10px;
}

.inside-form input{
    width: 100%;
    border-radius: 6px;
    font-size: 16px;
}

.inside-form{
    display:flex;
    flex-direction:row;
    border: 2px solid black;
    margin:10px;
    padding:10px;
}

.edit-icon{
    height: 50px;
    margin: 10px;
    cursor:pointer;
    background-color: white;
    border:none;
}

.edit-icon:hover{
    color:red;
}
</style>