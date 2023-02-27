
<script>
    // import components here
    import Nav from "../lib/Nav.svelte";
    import Footer from "../lib/Footer.svelte"
    // svelte components imported here
    import {onMount} from "svelte";
    // Svelte store import here
    import {userDataBase} from "../stores/userDataBase";
    import {get} from "svelte/store"
    // Svelte routing imports here
    import { goto } from '$app/navigation'


</script>
<body>
<Nav/>

<div class ="container">
    <section class ="header">

        <h1 class ="header-h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestias nesciunt ducimus sit..</h1>

            <p class ="p-tag">We broke the code to make your life easier</p>
    </section>

</div>

<Footer/>

</body>

<style>

    body{
        background-color: #1e1e1e;
        color:white;
        font-family: sans-serif;
    }

    .header{
        margin:20px;
    }

    .header-h1{
        font-size: 2.5em;
        width:400px;
        margin-left: 90px;

    }

    .p-tag{
        margin-left: 90px;
    }







</style>

