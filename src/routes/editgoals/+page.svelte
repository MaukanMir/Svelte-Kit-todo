<script>
    import Nav from "../../lib/Nav.svelte";
    import taskDataBase from "../../stores/taskDataBase";
    import MdModeEdit from 'svelte-icons/md/MdModeEdit.svelte'
    import FaCheck from 'svelte-icons/fa/FaCheck.svelte'

    // Edit goal variables
    let editGoal = "";
    let editHow ="";
    let editDate ="";

    // Switch between goal functions
    let toggleGoal = false;
    let toggleHow = false;
    let toggleDate = false;

    const editTask = (/** @type {number} */ id, /** @type {string} */ check) =>{

        taskDataBase.update(currentGoals =>{
        if(check =="how"){
            toggleHow = !toggleHow;
        }else if(check =="goal"){
            toggleGoal = !toggleGoal;
        }else{
            toggleDate = !toggleDate
        }
        currentGoals.map(item=>{
        
            if(item.id === id){
                item.goal = editGoal.length >0 ? editGoal: item.goal;
                item.how = editHow.length > 0 ? editHow:item.how;
                item.date = editDate.length >0 ? editDate:item.date;
            }
            
        })
        return [...currentGoals]
        });
    };

</script>

<Nav/>
<h1 class ="title">Edit Goals</h1>
    <div class ="parent">
    <form class ="form" >
    {#each $taskDataBase as task}
    <h1 class ="section-header">Goal:</h1>
        <div class = "inside-form">
            <label for="goal">Original Goal: {task.goal}</label>
            <input
            class ={toggleGoal ? "displayGoal":"notDisplay"}
            type="text"
            bind:value={editGoal}
            />
            
            <button  class ="edit-icon" on:click ={()=> editTask(task.id, "goal")}>
                <div class ="outer-button">
                    <div class="edit-icon-signal">
                        <MdModeEdit/>
                    </div>
                    <div class ="check">
                        <FaCheck/>
                    </div>
                </div> 
        </button>
        </div>

        <div class = "inside-form">
            <label for="editHow"> Original How: {task.how}</label>
            <input
            class ={toggleHow ? "displayHow":"notDisplay"}
            type="text"
            bind:value={editHow}
            />
            <button  class ="edit-icon" on:click ={()=> editTask(task.id, "how")}>
                <div class ="outer-button">
                    <div class="edit-icon-signal">
                        <MdModeEdit/>
                    </div>
                    <div class ="check">
                        <FaCheck/>
                    </div>
                </div> 
        </button>
        </div>

        <div class = "inside-form">
            <label for="editDate"> Original Date: {task.date}</label>
            <input
            class = {toggleDate ? "displayDate":"notDisplay"}
            type="date"
            bind:value={editDate}
            />
            <button  class ="edit-icon" on:click ={()=> editTask(task.id, "date")}>
                <div class ="outer-button">
                    <div class="edit-icon-signal">
                        <MdModeEdit/>
                    </div>
                    <div class ="check">
                        <FaCheck/>
                    </div>
                </div> 
        </button>
        </div>

        {/each}
    </form>
</div>


<style>

    .section-header{
        margin:10px;
        display: flex;
        justify-content: center;
        color:salmon;
    }
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
    border-radius: 20px;
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
    height: 40px;
    margin: 0 10px;
    cursor:pointer;
    background-color: white;
    border:none;
}

.edit-icon-signal:hover{
    color:red;
}

.edit-icon-signal{
    height: 40px;
    margin: 0 10px;
    cursor:pointer;
    background-color: white;
    border:none;
}

.outer-button{
    display:flex;
    height: 30px;
    margin: 0px 10px;
    cursor:pointer;
    background-color: white;
    border:none;
    justify-content: space-evenly;
}

.check{
    height: 40px;
    margin: 0 10px;
    cursor:pointer;
    background-color: white;
    border:none;
    justify-content: center;
}

.check:hover{
    color:green;
}
</style>