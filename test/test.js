var chai = require('chai')
var chaiHttp = require('chai-http')
chai.use(chaiHttp);
chai.should()
var server = require('../Server/server');
var fs = require('fs')
function readFile() {
    var obj = fs.readFileSync('/home/bridgeit/ChatApp/test/testData.json')
    var data = JSON.parse(obj);
    return data;
}
var data = readFile();

describe('Register Page',() => {
    it('registeration successfully',(done) => {
        chai.request(server).post('/register').send(data.registration).end((err,res) =>{
        if(err)
        {
            console.log("expect ==>",err)
            err.should.have.status(400);
        }
        else
        {
            console.log('expect Body ==>',res.body)
            res.should.have.status(200);
        }

describe('Login User', () => {
    it("login success",(done) => {
        chai.request(server).post("/login").send(data.login).end((err,res) => {
        if(err)
        {
            console.log('expect Body ==>',err)
            err.should.have.status(400)
        }
        else
        {
            console.log('expect Body ==>',res.body);
            res.should.have.status(200);
        }

describe("forget Password",() => {
    it("token generated",(done) => {
        chai.request(server).post('/forgetPassword').send(data.forgetPassword).end((err,res) => {
            if(err)
            {
                console.log("expect Body ==>",err)
                err.should.have.status(400)
            }
            else
            {
                console.log("expect Body ==>",res.body)
                res.should.have.status(200)
            }
            
done();               
})
})                                                    
})
done();
})
})
})
done();
})
})
})
