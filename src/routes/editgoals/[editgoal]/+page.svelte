

<script>


    import Nav from "../../../lib/Nav.svelte";
    import MdModeEdit from 'svelte-icons/md/MdModeEdit.svelte'
    import FaCheck from 'svelte-icons/fa/FaCheck.svelte'

    // Data import here
    export let data;
    // Edit Goal Id Here and convert to float
    const editGoalId = parseFloat(data.data.editgoal);

    // Edit goal variables
    let editGoal = "";
    let editHow ="";
    let editDate ="";
    let editStudyTime =0;

    // Switch between goal functions
    let toggleGoal = false;
    let toggleHow = false;
    let toggleDate = false;
    let toggleStudyTime = false;

    // import svelte variables here
    import { onMount } from "svelte";

    /**
   * @type {any[]}
   */
    let posts = [];

    onMount(async ()=>{
        // API Call to load in dataset
        const res = await fetch("http://localhost:5000/api/getgoals");
        // load in data to variable
        posts = await res.json();
        posts = posts.filter(item=> item.id === editGoalId)
    })

    const editTask = async (/** @type {number} */ id, /** @type {string} */ check) =>{

            if(check ==="goal"){toggleGoal = !toggleGoal}
            else if(check ==="how"){toggleHow = !toggleHow}
            else if(check === "date"){toggleDate = !toggleDate}
            else if(check == "StudyTime"){toggleStudyTime = !toggleStudyTime}

            
        async function doPost (){

            const singlePost = posts.filter(item=> item.id === id);

            const res = await fetch(`http://localhost:5000/api/editgoals/{singlePost[0]._id}`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    id,
                    goal:editGoal.length >0 ? editGoal:singlePost[0].goal,
                    how:editHow.length > 0 ? editHow: singlePost[0].how,
                    date:singlePost[0].date,
                    setDate:editDate.length >0 ? editDate : singlePost[0].setDate,
                    studyTime:singlePost[0].studyTime
                })
            });

            doPost();
            // Change dates
            toggleGoal = !toggleGoal;
            toggleDate = !toggleDate;
            toggleHow = !toggleHow;
            toggleStudyTime = !toggleStudyTime;

    };

};





</script>

<Nav/>
<h1 class ="title">Edit Goals</h1>
    <div class ="parent">
    <form class ="form" >
    {#each posts as task}
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
            <label for="editDate"> Hours per a day: {task.studyTime}</label>
            <input
            class = {toggleStudyTime ? "displayStudy":"notDisplay"}
            type="date"
            bind:value={editStudyTime}
            />
            <button  class ="edit-icon" on:click ={()=> editTask(task.id, "StudyTime")}>
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

.displayDate ,.displayGoal, .displayHow, .displayStudy{
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