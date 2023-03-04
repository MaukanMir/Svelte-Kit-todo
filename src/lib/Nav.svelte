<script>
    // Svelte store import here
    import {userDataBase} from "../stores/userDataBase"

    
</script>

<body>
<nav>

    <div class="nav">
        <button> <a href="/">Home</a></button>

        <div class="goals">
            <button> <a href="/goals">Goals</a></button>
            <ul>
                <li><a href="/goals">Create Goals</a></li>
                <li><a href="/editgoals">Edit Goals</a></li>
                <li><a href="/goalstats">Stats</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>

        </div>
    </div>




    <!-- {#each $userDataBase as user}
    <a href="/">GoalsCrusher</a>
    <a href="/goals">Goals</a>
    <ul class ="dropdown">
    <li> <a href="/editgoals">Edit Goals</a> </li>
    <li> <a href="/creategoals">Create Goals</a> </li>
    <li> <a href="/goalstats">Goal Stats</a> </li>
    {#if !user}
    <li> <a href="/register">Register</a> </li>
    {:else if user}
    <li> <a href="/profile">{user[0].toUpperCase() + user.substring(1)}</a> </li>
    {:else}
    <li> <a href="/login">Login</a> </li>
    {/if}
    </ul>
    {/each} -->
</nav>
</body>

<style>

    body{
        font-family: sans-serif;
    }


</style>