
<script>
    // import components here
    import Nav from "../lib/Nav.svelte";
    import Footer from "../lib/Footer.svelte"
    //import Store here
    import taskDataBase from "../stores/taskDataBase";

    // Dates
    let currentDate = new Date().toISOString().slice(0,10);
    let percentage_completed = 0;
    let remainingDays = 0;
    let totalHours = 1;
    console.log(new Date(currentDate))

</script>

<Nav/>

<div class ="parent">
    <h2>Goal Analysis</h2>
    {#each $taskDataBase as task}
        <div class ="inside-parent"> 
            <h2>Goal: {task.goal}</h2>
            <h2>Date: {task.date}</h2>
            <h2>Hours Alloted: {task.studyTime}</h2>
            <h2>Completed {percentage_completed}%</h2>
            <h2>Days Remaining: {remainingDays}</h2>
            <h2>Total Hours: {totalHours * (task.studyTime)}</h2>
            <p>{new Date(task.date.replace(/-/g,"/")) - new Date(currentDate.replace(/-/g,"/"))}</p>
        </div>
    {/each}
</div>

<Footer/>

<style>

    .parent{
        display: flex;
        flex-direction: column;
        align-items: center;
        height:100vh;
    }

    .inside-parent{
        justify-content: space-evenly;
    }

</style>

