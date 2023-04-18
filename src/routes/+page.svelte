
<script>
// @ts-nocheck

    // import components here
    import Nav from "../lib/Nav.svelte";
    import Footer from "../lib/Footer.svelte"
    import {userSession} from "../stores/userSession"
    // import Svelte icons here
    import IoIosArrowRoundForward from 'svelte-icons/io/IoIosArrowRoundForward.svelte'

    let user;
    userSession.subscribe(storeValue => {

    if (storeValue.user) {
        user = storeValue.user
    }

});

</script>
<body>
<Nav/>
<div class ="container">
    <div class="section-divider-div">
    <section class ="header">
        <h1 class ="header-h1">Accomplish your goals like never before. 
            With Our software, you can always stay on track.</h1>
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
            <h3>Login, create, edit, check-In and track the status of your goals</h3>
            <p>Begin your day with checking in your progress, see how many hours, days and goals you have smashed.</p>

            <div class="wrap-icon"> 
            <button class ="inner-button-l">
                <div class ="arrow-icon"> 
                <span>Login</span>
                <a class ="login" href ={ user ? "/profile":"/login"}><IoIosArrowRoundForward/> </a>
                </div>
            </button>
            </div>
        </div>

        <div class="inner-r">
            <h3>Register today and get started on all your goals.</h3>
            <p>Register now and begin mapping out your goals, want to become a designer? Content Creator? Neuroscientist?</p>
            <div class="wrap-icon"> 
            <button class ="inner-button-r">
                <div class ="arrow-icon"> 
                    <span>Register</span>
                    <a class ="reg" href={ user ? "/profile" :"/register"}><IoIosArrowRoundForward/></a>
                    </div>
            </button>
            </div>
        </div>

        <div class ="text-divder">
            <h3>Always Stay On Track & Never Miss A Beat.</h3>
            <p>The seemingly impossible has now become possible with our software.
            <br>
            <br>
            No more disorganization, feeling like you have made no progress. 
            With our system, you'll see the work you're putting in.
            Once you track your progression for your long term aspirations, 
            you'll become a Beliver.</p>
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
        margin: 0;
        padding: 0;
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
        color:		#fff; 
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

