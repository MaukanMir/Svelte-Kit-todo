<script>
    // Svelte store import here
    import {userDataBase} from "../stores/userDataBase"

    
</script>

<nav class ="test">
    {#each $userDataBase as user}
    <a href="/">Home</a>
    <a href="/goals">Goals</a>
    <a href="/editgoals">Edit Goals</a>
    <a href="/creategoals">Create Goals</a>
    {#if !user}
    <a href="/register">Register</a>
    {:else}
    <a href="/login">Login</a>
    {/if}
    {/each}
</nav>

<style>
    .test{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #000036;
        padding: 20px;
        border-radius: 2%;
        height:100px;
        border: 4px solid white;
    }

    .test a{
        text-decoration: none;
        font-size: 1.5rem;
        color:white;
    }

    a:hover{
        color: red;
    }

</style>