<script>
// @ts-nocheck
    // Component imports here
    import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte";
    // import svelte variables here
    import { onMount } from "svelte";
    //Svelte store components import here
    import {userSession} from "../../stores/userSession"
    let user;

    userSession.subscribe(storeValue => {
if (storeValue.user) {
    user = storeValue.user;
}
});

    let posts = [];
    let toggle = false;

    onMount(async ()=>{
        if(user){
        // API Call to load in dataset
        const res = await fetch("http://localhost:5000/api/getgoals/find/" + user);
        // load in data to variable
        posts = await res.json();
        if(posts.length ===0){toggle = !toggle}
        }
        else{
            toggle = !toggle;
        }

    });
</script>

<body>
<Nav/>

<div class ="center"> 
<div class ="edit-goals">
    <h1> Click To Edit Goal: </h1>
    {#each posts as task}

    <h2> 
        <a href ={`/editgoals/${task.id}`}> {task.goal}
        </a> 
    </h2>
    {/each}
</div>
</div>

<div class ="center"> 
<div class = {toggle ? "display": "notDisplay"}>
    <h2>You currently have no goals. </h2>
    <h3>
        Click <a href="/creategoals"> Here </a> to get started!
    </h3>
</div>
</div>

</body>
<Footer/>
<style>

    body{
        background-color: #1e1e1e;
        height:100vh;
        margin: 0;
        padding: 0;
    }



.edit-goals{
    color:#fff;
    border-radius: 10px;
    flex:2;
    margin:20px;
    padding:20px;
}

.edit-goals > h2{
    border-bottom: 4px solid blueviolet;
    margin-bottom:30px;
}

.edit-goals a{
    text-decoration: none;
    color: #fff;
}

.edit-goals a:hover{
    color:#fff;
}

.center{
    display: flex;
    justify-content: center;
    margin: 40px;
    align-items: center;
}

.display{
    background-color: white;
    color:blueviolet;
    height: 400px;
    width: 450px;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.notDisplay{
    display:none;
}

</style>