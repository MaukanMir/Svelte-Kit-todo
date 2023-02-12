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

<div>
    <h1> Edit Goals </h1>
    {#each posts as task}

    <h2> 
        <a href ={`/editgoals/${task.id}`}> {task.goal}
        </a> 
    </h2>
    {/each}
</div>
<style>


</style>