<script>
// @ts-nocheck

// import components here
import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte"
    // svelte components imported here
    import {onMount} from "svelte";
    // Svelte store import here
    import {userSession} from "../../stores/userSession"
    // Svelte routing imports here
    import { goto } from '$app/navigation'
    // import svg here
    import flame_icon from "./flame-icon.svg"
    
    let user;

    let posts = [];
    let interval = []; 
    let window = false;
    let dailySteak;
    let statsDoc = [];

    const checkInterval = ()=>{
        if(interval){
            const currTime = new Date();
            const pastTime = interval.length >0 ? new Date(interval[0].interval):new Date();
            let diff = (currTime.getTime() - pastTime.getTime()) / 3600000;
            return (diff >= 8 && diff <= 24);
        }
        return false;
        }
    
    const loadData = async () => {
        const res = await fetch("http://localhost:5000/api/getgoals/find/" + user);
        const interval_res = await fetch("http://localhost:5000/api/streak/find/" + user);
        const statsDocRes = await fetch("http://localhost:5000/api/stats/getAllStats/" + user)
        posts = await res.json();
        statsDoc = await statsDocRes.json();
        interval = await interval_res.json()
        window = checkInterval();
}

    // As soon as the page loads, goals will be viewed.
    onMount(async ()=>{

        userSession.subscribe(storeValue =>{
        if(storeValue.user){
            user = storeValue.user;
            dailySteak = storeValue.dailySteak;
        }else{
            goto("/register")
        }
    })
    if(user){
        await loadData()
    }else{
        goto("/register")
    }
    });

    // Check in button fix here
    const onCheck = async(username,id, index) =>{
        //Save client info here
        const clientInfo = posts[index];
        // Update checkIn
        clientInfo.checkIn +=1;
        // Update user information from db
        const res = await fetch("http://localhost:5000/api/editgoals/" + clientInfo._id,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    userId:clientInfo.userId,
                    id:clientInfo.id,
                    goal:clientInfo.goal,
                    how:clientInfo.how,
                    date:clientInfo.date,
                    studyTime:clientInfo.studyTime,
                    checkIn:clientInfo.checkIn,

                })
            });
            const json = await res.json();
            await loadData()
    };


    const markAsComplete = async (username, id, index)=>{

        const goal_post = posts[index];
        const diff_time = Math.abs(new Date().getTime() - new Date(goal_post.setDate).getTime())
        const diffDays = Math.round(diff_time/ (24*60*60*1000))

        const res = await fetch("http://localhost:5000/api/editgoals/" + goal_post._id,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    userId:user,
                    id:goal_post.id,
                    goal:goal_post.goal,
                    how:goal_post.how,
                    date:goal_post.date,
                    studyTime:goal_post.studyTime,
                    checkIn:goal_post.checkIn,
                    completed:true,
                })
            });

        const stats_result = await fetch("http://localhost:5000/api/stats/updateStat/" + statsDoc[0]._id,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                user,
                goalCompleted:[
                    {
                    goal:goal_post.goal,
                    startDate:goal_post.startDate,
                    endDate:new Date(),
                    studyTime:goal_post.checkIn,
                    numberOfDays:diffDays
                    }
                ],
                numberOfGoalsCompleted:statsDoc[0].numberOfGoalsCompleted+1,
                hoursStudied:goal_post.checkIn * goal_post.studyTime,
                studyStreak:goal_post.checkIn
            })
        });
        await loadData()
    };

    const calcInterval = async()=>{
        const updateStreak = async(check)=>{
            const res = await fetch("http://localhost:5000/api/streak/update/" + interval[0]._id,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    username:user,
                    interval:new Date(),
                    streak: check === true ? interval[0].streak+1:0,
                })
            })
        }
        // Check time period
        const check = checkInterval();
        // Make api call here
        updateStreak(check);
        window = checkInterval();
        await loadData()
    };
</script>
<!--HTML Components-->

<body>
    <Nav/>
    {#each interval as stats}
    <div class="check-in">
    {#if !window}
    <h2 class = "display">Check in again in 8 hours</h2>
    <h2>Your Current Streak is: { stats.streak > 1 ? stats.streak.toString() + " days in a row": stats.streak.toString() +" day in a row."}</h2>
    {:else}
    <h1 class ="header">Click to Extend the Streak!</h1>
    <button on:click ={()=> calcInterval()} class ="img-button">
        <img alt="fire" class="logo-icon" src={flame_icon}/>
    </button>
        <h2 class ="daily-streak"> {"Daily Streak: " + stats.streak}</h2>
    {/if}
    </div>
    {/each}
    
    <div class ="parent">
        {#each posts as task, index}
            <div class ="inside-parent"> 
                <h3>Goal: {task.goal}</h3>
                <h3>Start Date:{task.date}</h3>
                <h3> Due Date: {task.setDate}</h3>
                <h3>Hours Alloted: {task.studyTime}</h3>
                <h3>Study Streak: {task.checkIn}</h3>
                <div class ="button-format"> 
                <button class ="finish" on:click={()=> onCheck(task.username, task.id, index)}>Check In</button>
                <button class ="finish" on:click={()=> markAsComplete(task.username, task.id, index)}>Mark As Complete</button>
                <p class ="goalStatus">Goal Status:</p>
                <p class = {task.completed ? "completed":"NotCompleted"}>{task.completed ? "Completed":"Not Completed"}</p>
                </div>
            </div>
    
        {/each}
        {#if posts.length ===0}
        <div class ="posts-delete"> 
            <h1>You Currently do not have any Goals</h1>
            <a href="/creategoals">Click Here to get <strong> Started! </strong> </a>
        </div>
        {/if}
    </div>
    </body>
    <Footer/>
<style>

body{
        background-color: #1e1e1e;
        color:white;
        font-family: sans-serif;
        height: 120vh;
        margin: 0;
        padding: 0;
    }

    .check-in{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .logo-icon{
        height:150px;
        width:200px;
        margin-top:30px;
        cursor: pointer;
    }

    .img-button{
        background-color: #1e1e1e;
        border:none;
        cursor:pointer;
    }

    .daily-streak{
        color:#fff;
        margin-bottom: 80px;
    }

    .display{
        color:red;
        margin-top:20px;
        margin-bottom: 30px;
    }


    .parent{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .inside-parent{
        background-color: white;
        border-radius:10px;
        color:blueviolet;
        flex: 0 1 calc(25% - 1em);
        margin:10px;
        padding:20px;
    }

    .inside-parent h3{
        border-bottom: 3px solid blueviolet;
        margin-bottom:10px;
    }


    .finish{
        color:white;
        background-color: blueviolet;
        border-radius: 10px;
        padding:5px;
        cursor: pointer;
        padding:5px;
        margin:10px 0px;
    }


    .finish:hover{
        background-color: green;
    }

    .button-format{
        display: flex;
        flex-direction: column;
    }

    .posts-delete{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 60px;
    }

    .posts-delete a{
        text-decoration: none;
        color:#fff;
        font-size: 1.5em;
        margin-top: 50px;
    }

    .posts-delete strong{
        color:blueviolet;
    }

    .NotCompleted{
        color:red;
        text-align: center;
        font-size: 20px;
    }

    .completed{
        color:red;
        text-align: center;
        font-size: 20px;
    }

    .goalStatus{
        text-align: center;
        font-size: 20px;
    }

</style>