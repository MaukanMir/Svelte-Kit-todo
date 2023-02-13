<script>
    import Nav from "../../lib/Nav.svelte";
    import MdModeEdit from 'svelte-icons/md/MdModeEdit.svelte'
    import FaCheck from 'svelte-icons/fa/FaCheck.svelte'

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
    })



</script>

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
<style>

h2 > a{
    text-decoration: none;
    color:blueviolet;
    cursor: pointer;
    margin-left: 30px;
}

h2 > a:hover{
    color:orangered
}

</style>