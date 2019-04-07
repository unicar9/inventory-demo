var app = require("../index")
var chai = require("chai")
var request = require("supertest")

var expect = chai.expect

describe("Malls API Integration Tests", function() {
    let mall = {
        name: "test mall name",
        address: "test mall address"
    }
  
    describe("Create mall ", function() {
        it("should create a mall", function(done) {
            request(app)
            .post("/api/malls")
            .send(mall)
            .end(function(err, res) {
                expect(res.statusCode).to.equal(201)
                expect(res.body.name).to.equal("test mall name")
                expect(res.body.address).to.equal("test mall address")
                mall = res.body
                done()
            })
        })
    })
  
    describe("Get all malls", function() {
        it("should get all malls", function(done) {
            request(app)
            .get("/api/malls")
            .end(function(err, res) {
                expect(res.statusCode).to.equal(201)
                expect(res.body).to.be.an("array")
                done()
            })
        })
    })
    
    describe("Get a mall by id", function() {
        it("should get a mall", function(done) {
            request(app)
            .get("/api/malls/" + mall._id)
            .end(function(err, res) {
                expect(res.statusCode).to.equal(201)
                expect(res.body.name).to.equal("test mall name")
                done()
            })
        })
    })
  
    describe("Update a mall by id", function() {
        it("should modify a mall", function(done) {
            mall.name = "New mall name"
            request(app)
            .put("/api/malls/" + mall._id)
            .send(mall)
            .end(function(err, res) {
                expect(res.body.name).to.equal("New mall name")
                expect(res.statusCode).to.equal(201)
                done()
            })
        })
    })
    
    describe("Delete a mall by id", function() {
        it("should delete a mall", function(done) {
            request(app)
            .delete("/api/malls/" + mall._id)
            .end(function(err, res) {
                expect(res.statusCode).to.equal(200)
                expect(res.body.message).to.equal("Shopping center deleted successfully!")
                done()
            })
        })
    })
})