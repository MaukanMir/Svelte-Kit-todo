<script>
    // Component imports here
    import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte";
    
    // import svelte variables here
    import { onMount } from "svelte";
    //Svelte store components import here
    import {get} from "svelte/store";
    import {userDataBase} from "../../stores/userDataBase";

    const user = get(userDataBase)[0];

    /**
   * @type {any[]}
   */
    let posts = [];
    let toggle = false;

    onMount(async ()=>{
        if(user){
        
        // API Call to load in dataset
        const res = await fetch("http://localhost:5000/api/getgoals/find/" + user[0]);
        // load in data to variable
        posts = await res.json();
        }
        else{
            toggle = !toggle;
        }

    });



</script>

<body>
<Nav/>

<div>
    <h1> Click To Edit Goal: </h1>
    {#each posts as task}

    <h2> 
        <a href ={`/editgoals/${task.id}`}> {task.goal}
        </a> 
    </h2>
    {/each}
</div>
<div class = {toggle ? "display": "notDisplay"}>
    <h2>You currently have no goals. </h2>
    <h3>
        Click <a href="/creategoals"> Here </a> to get started!
    </h3>
</div>

</body>
<Footer/>
<style>

    body{
        background-color: #000036;
        margin:10px;
        height:100vh;
    }

    h1{
        margin-left: 10px;
        color:white;
    }

h2 > a{
    text-decoration: none;
    color:white;
    cursor: pointer;
    margin-left: 30px;
}

h2 > a:hover{
    color:orangered
}

.display{
    background-color: white;
    color:#000036;
    height: 400px;
    width: 450px;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
}

.notDisplay{
    display:none;
}

</style>