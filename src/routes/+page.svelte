
<script>
    // import components here
    import Nav from "../lib/Nav.svelte";
    import Footer from "../lib/Footer.svelte"
    // import svelte components imported here
    import {onMount} from "svelte";
    // import Svelte store import here
    import {userDataBase} from "../stores/userDataBase";
    import {get} from "svelte/store"
    // import Svelte routing imports here
    import { goto } from '$app/navigation'
    // import Svelte icons here
    import IoIosArrowRoundForward from 'svelte-icons/io/IoIosArrowRoundForward.svelte'


</script>
<body>
<Nav/>

<div class ="container">

    <div class="section-divider-div">
    <section class ="header">
        <h1 class ="header-h1">Accomplish your goals like never before. 
            With Our software, you can stay on track.</h1>
            <h3 class ="p-tag">We broke the code to make your life easier</h3>
    </section>

    <section class ="section-graphic">
        <div class="graphic">
            <div class="inner-graphic">
                <h1>The Journey Begins Here</h1>
            </div>
        </div>
    </section>

    </div>


    <div class="card-container">
        <div class="inner-l">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, reiciendis.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam 
                similique dolorum commodi eligendi 
                sit dicta, sed modi nulla amet? Deleniti.</p>

            <div class="wrap-icon"> 
            <button class ="inner-button-l">
                <div class ="arrow-icon"> 
                <span>Login</span>
                <a class ="login" href ="/login"><IoIosArrowRoundForward/> </a>
                </div>
            </button>
            </div>
        </div>

        <div class="inner-r">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, reiciendis.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam 
                similique dolorum commodi eligendi 
                sit dicta, sed modi nulla amet? Deleniti.</p>
            <div class="wrap-icon"> 
            <button class ="inner-button-r">
                <div class ="arrow-icon"> 
                    <span>Register</span>
                    <a class ="reg" href="/register"><IoIosArrowRoundForward/></a>
                    </div>
            </button>
            </div>
        </div>

        <div class ="text-divder">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellendus tempore
            <br>
            <br>
            cum in, quidem libero facilis qui consequuntur magni voluptatibus. 
            Quia ipsa deserunt 
            accusamus magni? Harum dolor quis nam excepturi?</p>

        </div>

    </div>


</div>

<Footer/>

</body>

<style>

    body{
        background-color: #1e1e1e;
        color:white;
        font-family: sans-serif;
    }

    .section-divider-div{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .section-graphic{
        position: relative;
    }

    .inner-graphic{
        position: absolute;
        height:450px;
        width: 650px; 
        margin: 0;
        z-index: -1;
        background-color: #1e1e1e;
        border-radius: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        padding:20px;

    }

    .inner-graphic h1{
        position: absolute;
        margin: 0;
        z-index: -1;
        color:	#7F00FF; 
        background-color: #1e1e1e;
        border-radius: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3em;
    }

    .graphic{
        background-color: #fff;
        height:550px;
        width: 750px; 
        border-radius: 10px;
        opacity: 0.7; 
    }

    .header{
        margin-top: 90px;
    }

    .header-h1{
        font-size: 2.5em;
        width:400px;
        margin-left: 0px;

    }
    .p-tag{
        margin-left: 0px;
    }

    .card-container{
        display: flex;
        justify-content: space-evenly;
        margin-top: 50px;
    }

    .inner-l h3, .inner-r{
        width:300px;
    }

    .inner-l p, .inner-r p{
        width:300px;
    }

    .inner-l{
        border: 3px solid blue;
        padding:20px;
        height: 300px;
        border-radius: 5px;
    }

    .inner-r{
        border: 3px solid #F75D59;
        padding:20px;
        height:300px;
        border-radius: 5px;
    }


    .inner-button-l{
        padding: 10px;
        background-color: blue;
        color:#fff;
        border:none;
        border-radius: 5px;
        margin-top: 20px;
        width:200px;
    }

    .inner-button-r{
        padding: 10px;
        background-color: #F75D59;
        color:#fff;
        border:none;
        border-radius: 5px;
        margin-top: 20px;
        width:200px;
    }

    .inner-button-r:hover{
        color:#F75D59;
        background-color: #fff;
    }

    .inner-button-l:hover{
        color:blue;
        background-color: #fff;
    }

    .text-divder p{
        width:300px;
    }

    .text-divder{
        align-items: center;
        margin-top: 120px;
    }

    .arrow-icon{
        display: inline-flex;
        align-items: center;
    }

    .arrow-icon span{
        font-size:16px;
    }

    .arrow-icon a{
        height:30px;
        cursor: pointer;
        text-decoration: none;
        color:white;
    }

    .login:hover{
        color:blue
    }

    .reg:hover{
        color:#F75D59;
        text-decoration:none;

    }









</style>

