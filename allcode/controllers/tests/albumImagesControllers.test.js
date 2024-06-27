const request = require("supertest");
const app = require("../../server");
const dotenv = require("dotenv").config();
const supabase = require("../../mocks/supabaseClient");

jest.mock("../../mocks/supabaseClient")


describe('get album images', () => {
    const token = process.env.TEST_TOKEN;
    it('successfully enters an album page', async ()=> {
        const albumid = 23;
        const response = (await request(app).get(`http://localhost:5001/albums/${albumid}`)).headers({'Authorization': `Bearer: ${token}`})
        expect(response).toNotBe(null)
    })
})