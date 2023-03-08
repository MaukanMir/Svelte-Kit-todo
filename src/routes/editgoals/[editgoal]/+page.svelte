

<script>

    // component here
    import Nav from "../../../lib/Nav.svelte";
    import MdModeEdit from 'svelte-icons/md/MdModeEdit.svelte'
    import FaCheck from 'svelte-icons/fa/FaCheck.svelte'
    import Footer from "../../../lib/Footer.svelte"



    // Data import here
    export let data;
    // Edit Goal Id Here and convert to float
    const editGoalId = parseFloat(data.data.editgoal);
    // Edit goal variables
    let editGoal = "";
    let editHow ="";
    let editDate ="";
    let editStudyTime =0;

    //Svelte store components import here
    import {get} from "svelte/store";
    import {userDataBase} from "../../../stores/userDataBase";

    const user = get(userDataBase)[0];

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
        const res = await fetch("http://localhost:5000/api/getgoals/find/" + user);
        // load in data to variable
        posts = await res.json();
        posts = posts.filter(item=> item.id === editGoalId)
    })

    const editTask = async (/** @type {number} */ id, /** @type {string} */ check) =>{
            console.log(check, toggleGoal)
            if(check ==="goal"){toggleGoal = !toggleGoal}
            else if(check ==="how"){toggleHow = !toggleHow}
            else if(check === "date"){toggleDate = !toggleDate}
            else if(check == "StudyTime"){toggleStudyTime = !toggleStudyTime}

            
        async function doPost (){
            const singlePost = posts.filter(item=> item.id === id);
            console.log(singlePost[0]._id)
            const res = await fetch("http://localhost:5000/api/editgoals/" + singlePost[0]._id,{
                method:"PUT",
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
        };

        doPost();
        if(posts[0].length >0){

            posts = posts.map(item=> {
                    posts[0].length >0 ? id:item.id,
                    editGoal.length >0 ? editGoal:item.goal,
                    editHow.length > 0 ? editHow: item.how,
                    item.date,
                    editDate.length >0 ? editDate : item.setDate,
                    item.studyTime
        })
        }
        
};

console.log(posts)


</script>
<body>

<Nav/>

<div class ="header">
<h1>Edit Goals</h1>
</div>
<div class="center-div">

<div class="container-form">
    {#each posts as post}
    <form class ="form">

        <div class="inner-form"> 
        <label for="edit_goal">Edit Goal: {post.goal}</label>
        <input
        type="text"
        required
        placeholder="Edit Goal"
        />
    </div>

    <div class="inner-form"> 
        <label for="edit_how">Edit How: {post.how}</label>
        <input
        type="text"
        required
        placeholder="Edit How"
        />
    </div>
    <div class="inner-form"> 
        <label for="edit_study_time">Edit Hours Per Day: {post.studyTime}</label>
        <input
        type="Number"
        required
        placeholder="0"
        />
    </div>
    <div class="inner-form"> 
        <label for="edit_due_date">Edit Due Date: {post.setDate}</label>
        <input
        type="date"
        required
        placeholder="0"
        />
    </div>
    <div class="button-container">
        <button class ="submit-form">Submit</button>
    </div>  
    </form>
    {/each}
</div>
</div>


<Footer/>
</body>



<style>
    body{
        background-color: #1e1e1e;
        height:100vh;
    }

    .center-div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:1.3em;
    }

    .container-form{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        background-color: #1e1e1e;
        height:700px;
        width:700px;
        border-radius: 10px;
    }

    .form{
        display: flex;
        flex-direction: column;
        background-color: #1e1e1e;
        border-radius: 10px;
        color:#fff;
        border: 3px solid blueviolet;
        padding: 70px;
    }
    .inner-form{
        display:flex;
        flex-direction: column;
        margin-bottom: 20px;
        border-radius: 5px;
    }

    .inner-form label{
        margin-bottom: 10px ;
        font-size: 1.5em;
    }

    .inner-form input{
        border-radius: 10px;
        padding:10px;
        color:blueviolet;
        font-size: 1em;
    }

    .button-container{
        display: flex;
        flex-direction: column;
    }

    .submit-form{
        color:#fff;
        background-color: blueviolet;
        border-radius: 10px;
        border:none;
        height: 40px;
        width:500px;
        margin-top: 15px;
    }

    .submit-form:hover{
        background-color:green;
    }
    
</style>