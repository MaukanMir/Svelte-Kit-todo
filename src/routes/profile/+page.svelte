<script>
    // import svelte componets here
    import Nav from "../../lib/Nav.svelte";
    import Footer from "../../lib/Footer.svelte";
    // import svelte store componets here
    import {userDataBase} from "../../stores/userDataBase";
    import {get} from "svelte/store";

    let user = get(userDataBase)[0];

</script>

<!--HTML Components Begin Here-->
<body>

    <Nav/>

    

    <Footer/>
</body>


<style>

</style>