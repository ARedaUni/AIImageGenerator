const request = require('supertest');
const server = require("../../server");


it("receives a valid prompt", async () => {
    const res = await request(server).post('/images/generateImage').send({prompt: "footballer"});
    expect(res.statusCode).toEqual(200)
    //expect(res.body).toEqual("https")
})


