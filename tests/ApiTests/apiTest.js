// To run tes - npx mocha .\tests\ApiTests\apiTest.js --timeout=20000
const axios = require('axios');
const assert = require('assert');

describe("To verify Get method for single user details",async()=>{
    it("Get single user",async()=>{
        const response = await axios.get('https://reqres.in/api/users/2', { 
            headers: {
                'Content-Type': 'application/json',
            }
        });
    const actualStatus = response.status;
    console.log("status code: ", actualStatus);
    assert.strictEqual(actualStatus,200);
    let responseBody = response.data; 
    console.log("response body for get call:::", responseBody);
    assert.strictEqual(responseBody.data.email,"janet.weaver@reqres.in");
    assert.strictEqual(responseBody.data.first_name,"Janet");
    assert.strictEqual(responseBody.data.last_name,"Weaver");
    })
});

describe("To verify post method for user create successfully", () => {
    it("To verify create new user successfully", async () => {
        var response = await axios.post(`https://reqres.in/api/register`,
            {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            })
        const actualStatus = response.status;
        console.log("status code: ", actualStatus);
        assert.strictEqual(actualStatus,200);
        assert.strictEqual(response.data.id,4);
        assert.strictEqual(response.data.token,"QpwL5tke4Pnpja7X4");
        console.log("response body for post call:::", response.data);
    })
});

describe("To verify put method for update user", () => {
    it("To verify update user", async () => {
        var response = await axios.put(`https://reqres.in/api/users/2`,
            {
                "name": "morpheus",
                "job": "zion resident"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            })
        const actualStatus = response.status;
        console.log("status code: ", actualStatus);
        assert.strictEqual(actualStatus,200);
        assert.strictEqual(response.data.name,"morpheus");
        assert.strictEqual(response.data.job,"zion resident");
        console.log("response body for put call:::", response.data);
    })
});

describe("To verify delete method", () => {
    it("To verify delete method", async () => {
        var response = await axios.delete(`https://reqres.in/api/users/2`,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            })
        const actualStatus = response.status;
        console.log("status code: ", actualStatus);
        assert.strictEqual(actualStatus,204);
    })
});
