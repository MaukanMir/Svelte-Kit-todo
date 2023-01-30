
<script>
    // import components here
    import Nav from "../lib/Nav.svelte";
    import Footer from "../lib/Footer.svelte"
    //import Store here
    import taskDataBase from "../stores/taskDataBase";

    // Dates
    let currentTime = new Date(new Date().toISOString().slice(0,10)).getTime();
    let percentage_completed = 0;
    let remainingDays = 0;
    let totalHours = 1;
    let oneDay = (1000 * 3600 * 24);



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
            <h2>Total Hours: {1 * (task.studyTime)}</h2>
            <h2>Total Days Left: {Math.round(Math.abs(new Date(task.date).getTime() - currentTime) / oneDay)}</h2>

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

