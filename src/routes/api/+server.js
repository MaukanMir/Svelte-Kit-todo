// get request to get all goals

export async function get(){

    const body = await fetch("http://localhost:500/api/getgoals");
    return {
        status:200,
        body:{body},
        
    }
}

// @ts-ignore
export const POST asnyc = () =>{
    
    const body = fetch("http://localhost:5000/api/creategoals")

    console.log(body);
    return new Response(JSON.stringify(
        {
            message:"Success"
        }), 
    {
        status:200
    }
    );
}