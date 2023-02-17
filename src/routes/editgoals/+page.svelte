<script>
    import Nav from "../../lib/Nav.svelte";

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
</body>

<style>

    body{
        background-color: #000036;
        margin:10px;
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

</style>