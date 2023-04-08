<script>
// @ts-nocheck

    // Component imports here
    import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte";
    // Date conversions here
    let startDate = new Date().toISOString().slice(0,10);
    let changeDate = "";
    //Svelte store components import here
    import {get} from "svelte/store";
    import {userSession} from "../../stores/userSession";
    //svelte import here
    import {goto} from "$app/navigation";

    let user = null;

    userSession.subscribe(storeValue => {
    if (storeValue.user) {
      user = storeValue.user;
    }
});

    console.log(user)
    // stores objects here
    let goal = "";
    let how ="";
    let studyTime =0;

    //Send user back to home page
    async function load(){

        if(!user){ goto("/register");}
    }

    load();

    //toggle classes
    let toggle = false;

    const addTask = async () =>{
        const id = Math.random();
        async function doPost (){
            const res = await fetch("http://localhost:5000/api/creategoals",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    userId:user,
                    id,
                    goal,
                    how,
                    date:startDate,
                    setDate:changeDate,
                    studyTime,
                    checkIn:0
                })
            })
            const json = await res.json();
            const result = JSON.stringify(json);
            console.log(json, result)
        };
        doPost();
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

<body>
<Nav/>

<div class="header-class">
    <h1>Create A Goal!</h1>
</div>

<!--Start of initial submit-->
<div class ="grid"> 
<form  class ="form" on:submit|preventDefault={addTask}>

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
        bind:value={changeDate}
        id="complete"
        />
    </div>
    <div>
    <button class ="btn">Add Goal</button>
    <div/>
    </form>
</div>

<h3 class={toggle ? "displaySubmit": "notDisplay"}>Task Submitted!</h3>
<Footer/>
</body>

<style>

    body{
        background-color: #1e1e1e;
        font-family: sans-serif;
    }

    .header-class h1{
        color:#fff;
        margin-left: 30px;
        margin-top: 40px;
    }
    .form{
        
        display:flex;
        flex-direction: column;
        width: 100%;
        padding: 10px;
        height:100vh;
        color:whitesmoke;
        margin-top: 10px;
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
        border: 2px solid blueviolet;
        margin: 10px;
        border-radius: 10px;
        margin-top: 20px;
    }

.btn{
    margin-top: 30px;
    background-color: blueviolet;
    color:white;
    border-radius: 10px;
    cursor: pointer;
    padding:20px;
    width:200px;
    font-size: 1.2em;
    border: none;

}

.btn:hover{
color:#fff;
background-color: green;
}

.grid{
    display:flex;
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