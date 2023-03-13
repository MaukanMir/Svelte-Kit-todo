<script>

// import components here
import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte"
    // svelte components imported here
    import {onMount} from "svelte";
    // Svelte store import here
    import {userDataBase} from "../../stores/userDataBase";
    import {get} from "svelte/store"
    // Svelte routing imports here
    import { goto } from '$app/navigation'
    // import svg here
    import flame_icon from "./flame-icon.svg"
    
    const user = get(userDataBase)[0]
    console.log("user is" + user)
    /**
   * @type {any[]}
   */
    let posts = [];

    /**
   * @type {any[]}
   */

    let interval = []; 

    // As soon as the page loads, goals will be viewed.
    onMount(async ()=>{
        // API Call HERE
        if(user){
            const res = await fetch("http://localhost:5000/api/getgoals/find/" + user);
            const interval_res = await fetch("http://localhost:5000/api/streak/find/" + user);
        // load in data to variable
        posts = await res.json();
        interval = await interval_res.json();
        }else{
            goto("/register")
        }
    });

    // reload component
    async function update(){
        if(user){
        const res = await fetch("http://localhost:5000/api/getgoals/find/" + user);
        // load in data to variable
        posts = await res.json();
        }
    };

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
            update();

    };


    const markAsComplete = async (username, id, index)=>{



    };

    const calcInterval = async()=>{


        const checkInterval = ()=>{
            const currTime = new Date();
            const pastTime = interval.length >0 ? new Date(interval[0].interval):new Date();
            let diff = (currTime.getTime() - pastTime.getTime())/1000;
            diff /= (60 *60);

            return diff <= 8 ? true: false;

        }

        const updateStreak = async(check)=>{

            const res = await fetch("http://localhost:5000/api/streak/update/" + user,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    username:user,
                    interval:new Date(),
                    streak: check === true ? interval[0].streak+1:0,
                })
            })

            console.log(res.status)

        }
        // Check time period
        const check = checkInterval();
        // Make api call here
        updateStreak(check);

    };
</script>

<!--HTML Components-->

<body>
    <Nav/>
    {#each interval as stats}
    <div class="check-in">
    <h1 class ="header">Click to Extend the Streak!</h1>
    <button on:click ={()=> calcInterval()} class ="img-button">
        <img alt="fire" class="logo-icon" src={flame_icon}/>
    </button>
        <h2 class ="daily-streak"> {"Daily Streak: " + stats.streak}</h2>
        <h2 class = { window ? "display":"notDisplay"}>Check in again in 8 hours</h2>
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
        height: 100vh;
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

    .notDisplay{
        display: none;
    }

    .display{
        color:red;
        margin-top:20px;
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
</style>