const chai= require("chai")
const chaiHttp = require("chai-http");
const { response } = require("express");
const server = require("../app");
chai.should()
chai.use(chaiHttp)

describe("Data route test", function(){
 //  get / test
 it("test to check / ", (done)=>{
  chai.request('http://localhost:3000')
  .get("/")
  .end((err, response)=>{
   response.body.should.be.a("object");
   response.should.have.status(200);
   response.body.should.have.property("status")
   done();
  })
 })

 //  post /data test

  it("test to check post of /data with data", (done)=>{
   const data = {
    data : "any string"
   }
  chai.request('http://localhost:3000')
  .post("/data")
  .send(data)
  .end((err, response)=>{

   response.body.should.be.a("array");
   response.should.have.status(200);
   response.body.length.should.not.equal(0)
   done();
  })
})


  it("test to check post of /data with empty text", (done)=>{
   const data = ""
  chai.request('http://localhost:3000')
  .post("/data")
  .send(data)
  .end((err, response)=>{

  
   response.should.have.status(400);
   response.body.should.have.property("error")
   done();
  })
 })

 //  get /data testing

  it("test to check get of /data ", (done)=>{
  chai.request('http://localhost:3000')
  .get("/data")
  .end((err, response)=>{
   response.body.should.be.a("array");
   response.should.have.status(200);
   response.body.length.should.not.equal(0);
   done();
  })
 })

 // to test when no data is return

   it("test to check get of /data with empty data", (done)=>{
  chai.request('http://localhost:3000')
  .get("/data")
  .end((err, response)=>{
   response.body.should.be.a("array");
   response.should.have.status(400);
   response.body.length.should.equal(0);
   done();
  })
 })

})
// /user api

//  user signup
describe("user signup test", ()=>{
  it("user signup successfull", (done)=>{
    const crendential = {
      email : "babatunakinwale@yahoo.com",
      password: "123456789"
    }
    chai.request("http://localhost:3000")
    .post("/user/signup")
    .send(crendential)
    .end((err, response)=>{
    response.should.have.status(200);
    response.body.should.have.property("session");
    done()
    })
  })

  // user already exist
    it("user already exist", (done)=>{
    const crendential = {
      email : "babatunakinwale@yahoo.com",
      password: "123456789"
    }
    chai.request("http://localhost:3000")
    .post("/user/signup")
    .send(crendential)
    .end((err, response)=>{
    response.should.have.status(400);
    response.body.should.have.property("error");
    done();
    })
  })
    // entering of empty details or email without "@" and password greter than 3 characters
    it("user signup with empty details", (done)=>{
    const crendential = {
      email : "",
      password: ""
    }
    chai.request("http://localhost:3000")
    .post("/user/signup")
    .send(crendential)
    .end((err, response)=>{
    response.should.have.status(401);
    response.body.should.have.property("error");
    done();
    })
  })

    it("user signup with invalid email", (done)=>{
    const crendential = {
      email : "adewaleesho",
      password: "123455"
    }
    chai.request("http://localhost:3000")
    .post("/user/signup")
    .send(crendential)
    .end((err, response)=>{
    response.should.have.status(401);
    response.body.should.have.property("error");
    done();
    })
  })
      // entering of empty details or email without 
    it("user signup with valid email but short password", (done)=>{
    const crendential = {
      email : "adewale@roemichs.com",
      password: "12"
    }
    chai.request("http://localhost:3000")
    .post("/user/signup")
    .send(crendential)
    .end((err, response)=>{
    response.should.have.status(401);
    response.body.should.have.property("error");
    done();
    })
  })
})

//  user login
describe("user login test", ()=>{

  it("sign in with correct credentials", (done)=>{
    const crendential = {
      email : "babatunakinwale@yahoo.com",
      password: "123456789"
    }
    chai.request("http://localhost:3000")
    .post("/user/login")
    .send(crendential)
    .end((err, response)=>{
    response.should.have.status(200);
    response.body.should.have.property("session");
    done()
    })
  })

    it("login with wrong password", (done)=>{
    const crendential = {
      email : "babatunakinwale@yahoo.com",
      password: "1234567"
    }
    chai.request("http://localhost:3000")
    .post("/user/login")
    .send(crendential)
    .end((err, response)=>{
    response.should.have.status(400);
    response.body.should.have.property("error");
    done();
    })
  })
      it("login with wrong email", (done)=>{
    const crendential = {
      email : "babatunakinwale@yah.com",
      password: "1234567"
    }
    chai.request("http://localhost:3000")
    .post("/user/login")
    .send(crendential)
    .end((err, response)=>{
    response.should.have.status(400);
    response.body.should.have.property("error");
    done();
    })
  })
    // entering of empty details or email without "@" and password greter than 3 characters

})
