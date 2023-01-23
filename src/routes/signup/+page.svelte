<script>
    import Nav from "../../lib/Nav.svelte";
    import taskDataBase from "../../stores/taskDataBase";
    import MdModeEdit from 'svelte-icons/md/MdModeEdit.svelte'

    let editGoal = "";
    let editHow ="";
    let editDate ="";


    let toggleGoal = false;
    let toggleHow = false;
    let toggleDate = false;

    const editTask = (/** @type {number} */ id, /** @type {string} */ check, /** @type {boolean}*/ toggle) =>{

        console.log(id,check,toggle)
        
        toggle = !toggle;


    };

    const submitEdit = () =>{

        // taskDataBase.update(currentGoals =>{

        //     return [...currentGoals]
        // })

        // setTimeout(()=>{
        //     toggle = !toggle;
        // },2000)

        // toggle = !toggle;
    }

</script>

<Nav/>
<h1 class ="title">Edit Goals</h1>
    <div class ="parent">
    <form class ="form">
    {#each $taskDataBase as task}
        <div class = "inside-form">
            <label for="goal">Original Goal: {task.goal}</label>
            <input
            class ={toggleGoal ? "displayGoal":"notDisplay"}
            type="text"
            bind:value={editGoal}
            />
            <button  class ="edit-icon" on:click ={()=> editTask(task.id, "goal", toggleGoal)}> <MdModeEdit/> </button>
        </div>

        <div class = "inside-form">
            <label for="editHow"> Original How: {task.how}</label>
            <input
            class ={toggleHow ? "displayHow":"notDisplay"}
            type="text"
            bind:value={editHow}
            />
            <button class ="edit-icon" on:click ={()=> editTask(task.id, "how", toggleHow)} > <MdModeEdit/> </button>
        </div>

        <div class = "inside-form">
            <label for="editDate"> Original Date: {task.date}</label>
            <input
            class = {toggleDate ? "displayDate":"notDisplay"}
            type="date"
            bind:value={editDate}
            />
        <button class ="edit-icon" on:click ={()=> editTask(task.id, "date", toggleDate)} > <MdModeEdit/> </button>
        </div>
        {/each}
        <div> 
        <button class ="btn">Submit</button>
        </div>
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

.notDisplay{
    display: none;
}

.displayDate ,.displayGoal, .displayHow{
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

.btn{
    background-color: maroon;
    color:white;
    border-radius: 6px;
    padding:10px;
    width: 80px;
}
</style>