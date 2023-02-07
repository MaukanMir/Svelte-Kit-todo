// get request to get all goals

// @ts-ignore
export async function GET(){

    const body = await fetch("http://localhost:5000/api/getgoals");
    return {
        status:200,
        body:{body},
        
    }
}

// @ts-ignore
export async function POST() {

    const body = await fetch("http://localhost:5000/api/creategoals");
    
    return new Response(JSON.stringify(
        {
            message:"Success"
        }), 
    {
        status:200
    }
    );
}