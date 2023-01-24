
<script>
    // import components here
    import Nav from "../lib/Nav.svelte";
    //import Store here
    import taskDataBase from "../stores/taskDataBase";

    // Dates
    let currentDate = "";
    let percentage_completed;
    let remainingDays;
    let today;
    let totalHours;


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
            <h2>Total Hours: {totalHours}</h2>
        </div>
    {/each}
</div>

<style>

    .parent{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .inside-parent{
        justify-content: space-evenly;
    }

</style>

