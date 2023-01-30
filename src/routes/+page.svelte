
<script>
    // import components here
    import Nav from "../lib/Nav.svelte";
    import Footer from "../lib/Footer.svelte"
    //import Store here
    import taskDataBase from "../stores/taskDataBase";
    // Dates
    let currentTime = new Date(new Date().toISOString().slice(0,10)).getTime();
    let percentage_completed = 0;
    let oneDay = (1000 * 3600 * 24);

</script>

<Nav/>

<div class ="parent">
    <h2>Goal Analysis</h2>
    {#each $taskDataBase as task}
        <div class ="inside-parent"> 
            <h2>Goal: {task.goal}</h2>
            <h2>Start Date:{task.setDate}</h2>
            <h2> Due Date: {task.date}</h2>
            <h2>Hours Alloted: {task.studyTime}</h2>
            <h2>Total Hours Logged: { Math.round(Math.abs(new Date(task.setDate).getTime() - currentTime) / oneDay) }</h2>
            <h2>Days Remaining: {Math.round(Math.abs(new Date(task.date).getTime() - currentTime) / oneDay)}</h2>
            <h2>Percentage Completed: {Math.round(Math.abs(new Date(task.date).getTime() - currentTime) / oneDay) * 100}%</h2>

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

