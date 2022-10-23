const express = require("express")
const path = require("path")
const fs = require("fs");
const Router = express.Router();

const _ = require("lodash")

Router.get("/", function(req,res){
    try{
        let advocates = JSON.parse(fs.readFileSync(path.join(__dirname,'./data/advocates.json')));

        // each page can have 2 advocates
        // calculate which data range to send for page = value ... --- ... if page == 2 ? advocates[start: 2, end: 3] 
        if(parseInt(req.query.limit) <= 0 || parseInt(req.query.page) <= 0){
            console.log("DICK")
            return res.json({ERROR:"You can't put page<0 or limit<0"})
        }
        let query = req.query.query || "";
        let limit = parseInt(req.query.limit) || 2;
        let page = parseInt(req.query.page) || 1;

        // if limit only
        if(req.query.query === undefined && req.query.limit !== undefined && req.query.page === undefined){
             let limit_applied_data = []
            for(let i = 0;i < limit;i++){
                limit_applied_data.push(advocates[i])
            }
            // query_found = limit_applied_data;
            // console.log(limit_applied_data)
    
            let final_data = limit_applied_data.filter(n => n)
        

            return res.json({
                results: final_data.length,
                limit: limit,
                total_pages: Math.round(advocates.length / 2 + 0.1),
                page: page,
                advocates:final_data,
            })   
        }

        // if no ? = data
        if(req.query.query === undefined && req.query.limit === undefined && req.query.page === undefined){
            res.json({
                results: advocates.length,
                limit: limit,
                total_pages: Math.round(advocates.length / 2 + 0.1),
                page: page,
                advocates: [advocates[0], advocates[1]],
            })
        }else{
            // get query params
    
            // quyer the serach and get data first
            let query_found = []
    
            if(query === ""){
                query_found = advocates;
            }else{
                advocates.map(person=>{
                    if(person.name.toLowerCase().includes(query.toLowerCase())){
                        query_found.push(person)
                    }
                })
             
            }
    
            // filter quyer_found with (limit/pages)
            // filter data with pages
            let page_applied_data = []
            // 0 1 - page 1
            // 2 3 - page 2
            // 4 5 - page 3
            // 6 7 - page 4
            let skip_times = (page-1)*2;
            
            let index_data_store = []
    
            for(let i = 0;i < page * 2; i++){
                
                if(skip_times <= 0){
                    index_data_store.push(i)
                }
                skip_times -= 1;
            }      
    
            index_data_store.map(index=>{
                page_applied_data.push(query_found[index])
            })
            
            // filter data with limit
            let limit_applied_data = []
            for(let i = 0;i < limit;i++){
                limit_applied_data.push(page_applied_data[i])
            }
            // query_found = limit_applied_data;
            // console.log(limit_applied_data)
    
            let final_data = limit_applied_data.filter(n => n)
        

            res.json({
                results: final_data.length,
                limit: limit,
                total_pages: Math.round(advocates.length / 2 + 0.1),
                page: page,
                advocates:final_data,
            })         
        }
    }
    catch(e){
        res.json({ERROR:"ERROR FOUND"})
    }   
})

Router.get("/user/:id", function(req,res){
    try{
        const id = req.params.id;
        let advocates = JSON.parse(fs.readFileSync(path.join(__dirname,'./data/advocates.json')));
    
        let advocates_found = {};
    
        advocates.map((advocate, index) =>{
            if(advocate.id == id){
                advocates_found = advocate
            }
        })
    
        if(_.isEmpty(advocates_found)){
            return res.json("Not Found");
        }
    
        res.json({
            advocate: advocates_found
        })
    }catch(e){
        res.json({ERROR:"ERROR FOUND"})
    }
   
})

Router.get("/:username", (req,res)=>{
    try{
        const username = req.params.username;
        let advocates = JSON.parse(fs.readFileSync(path.join(__dirname,'./data/advocates.json')));
    
        let advocates_found = {};
    
        advocates.map((advocate, index) =>{
            if(advocate.username == username){
                advocates_found = advocate
            }
        })
    
        if(_.isEmpty(advocates_found)){
            return res.json("Not Found");
        }
    
        res.json({
            advocate: advocates_found
        })
    }catch(e){
        res.json({ERROR:"ERROR FOUND"})
    }
   


})

module.exports = Router;