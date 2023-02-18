<script>
    // Svelte Component imports here
    import Nav from "../../lib/Nav.svelte"
    
    
    // Login variables here
    let username ="";
    let password ="";
    </script>
    
    
    <!--HTML COMPONENTS HERE-->
    <Nav/>
    
    <div class ="container">
    
        <form class ="form">
            <label for ="username">Enter Username: </label>
            <input
            type ="text"
            placeholder="username"
            required
            id ="username"
            bind:value={username}
            />
            <label for ="password">Enter Password: </label>
            <input
            type ="password"
            placeholder="password"
            required
            id ="password"
            bind:value={password}
            />
        </form>
    
    </div>
    
    
    <style>
    
    </style>