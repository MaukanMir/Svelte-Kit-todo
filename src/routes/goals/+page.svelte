<script>
    // Component imports here
    import Nav from "../../lib/Nav.svelte";
    // taskDatavabase imports here
    import taskDataBase from "../../stores/taskDataBase";
    // svelte imports here

    // Date conversions here
    let dateObject = new Date();
    let month = dateObject.getMonth() +1;
    let day = dateObject.getDate();
    let year = dateObject.getFullYear();
    let fullDate = month +"/" + day +"/" + year;
    let startDate = new Date().toISOString().slice(0,10);
    let endDate = new Date().toISOString().slice(0,10);
    // let finish = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);

    // stores objects here
    let goal = "";
    let how ="";
    let studyTime =0;

    //toggle classes
    let toggle = false;


    const addTask = () =>{
        const newGoals = 
            {
                id: Math.random(),
                goal,
                how,
                date:startDate,
                studyTime,
            }
        taskDataBase.update(currentPolls =>{
            return [ ...currentPolls,newGoals]
        })

        goal ="";
        how =""
        studyTime =0;
        startDate = new Date().toISOString().slice(0,10);

        setTimeout(()=>{
            toggle = !toggle;
        }, 2000)

        toggle = !toggle;
        
    };


</script>


<Nav/>

<!--Start of initial submit-->
<div class ="grid"> 
<form class ="form" on:submit|preventDefault={addTask}>

    <!--Goals here-->
    <div class ="inside-form"> 
        <label for ="goal"> Enter goal: </label>
        <input
        type ="text"
        placeholder="Learn a new language"
        required
        id ="goal"
        bind:value={goal}
        />
    </div>
    <!--How here-->
        <div class ="inside-form"> 
        <label for ="how"> How to acheive: </label>
        <input
        type ="text"
        placeholder="Studying one hour per a day"
        required
        bind:value={how}
        id="how"
        />
        </div>

        <!--studyTime Her-->
        <div class="inside-form"> 
        <label for ="how"> Hours per day: </label>
        <input
        type ="number"
        required
        bind:value={studyTime}
        id="how"
        />
    </div>

    <!-- Duration here -->
    <div class ="inside-form">
        <label for ="complete"> Goal Duration: </label>
        <input
        type ="date"
        required
        bind:value={startDate}
        id="complete"
        />
    </div>
    <div>
    <button class ="btn">Add task</button>
    <div/>
    </form>
</div>

<h3 class={toggle ? "displaySubmit": "notDisplay"}>Task Submitted!</h3>





<style>

    .form{
        
        display:flex;
        flex-direction: column;
        width: 100%;
        padding: 10px;
    }

    .inside-form input{
        margin: 10px;
        border-radius: 10px;
        width: 100%;
        padding:10px;
    }

    .form label{
        margin:10px;
        font-size: 1.2rem;
        padding:10px;

    }

    .inside-form{
        display: flex;
        border: 2px solid royalblue;
        /* margin: 20px; */
    }

.btn{
    margin:10px;
    background-color: maroon;
    color:white;
    border-radius: 10px;
    cursor: pointer;
    padding:5px;

}

.btn:hover{
color:black;
background-color: white;
}

.grid{
    display:flex;
    border: 8px solid black;
    margin-top:20px;
    justify-content: space-between;
}

.displaySubmit{
    color:green;
}

.notDisplay{
    display:none
}

</style>