 import {test,expect} from "@playwright/test"
 test ("api testing",async({request})=>{


    const Response = await request.get(
       'https://jsonplaceholder.typicode.com/users'
    )

  expect(Response.status()).toBe(200)
  
   const respbody = await Response.json()
   expect(respbody.length).toBeGreaterThan(0)

   console.log(respbody)

})

test('Create a  post API', async ({ request }) => {

const resnpost = await request.post('https://jsonplaceholder.typicode.com/users',

    {
     headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              
    },
           data : {
          name: "devendra",
           email: "deve@gmail.com"
         }
        }   
    )


expect(resnpost.status()).toBe(201)

const resbody = await resnpost.json()

expect(resbody.name).toBe('devendra');
    expect(resbody.email).toBe('deve@gmail.com');

    console.log(resbody)
})





        

    


