const express = require("express")
const path = require("path")
const fs = require("fs");
const Router = express.Router();

const _ = require("lodash")

Router.get("/", function(req,res){
    try{
        let companies = JSON.parse(fs.readFileSync(path.join(__dirname,'./data/companies.json')));
        res.json(
            {   
                total: companies.length,
                "companies":companies
            })
    }catch(e){
        res.json({ERROR:"EROR FOUND"})
    }
   
})

Router.get("/:id", function(req,res){
    try{
        const id = req.params.id;
        let companies = JSON.parse(fs.readFileSync(path.join(__dirname,'./data/companies.json')));
    
        let company_found = {};
    
        companies.map((company, index) =>{
            if(company.id == id){
                company_found = company
            }
        })
    
        if(_.isEmpty(company_found)){
            return res.json("Not Found");
        }
    
        res.json({
            company: company_found
        })
    }catch(e){
        res.json({ERROR:"EROR FOUND"})
    }
})

module.exports = Router;