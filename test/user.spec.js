const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')
describe('ONG', ()=>{
    beforeEach(async ()=>{
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })
    it('shoud be able to create new ONG', async ()=>{
        const response = await request(app).post('/ongs').send({ 
            name: "teste",
	        email: "teste@apad.com",
	        whatsapp: "1111111111",
	        city: "Rio do Sul",
	        uf: "SC"
        })
        console.log(response.body)
    })
})