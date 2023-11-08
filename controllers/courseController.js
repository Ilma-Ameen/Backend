// const express = require('express') //import express
// const route = express.Router()  //express se router ka function laye
const { SendResponse } = require("../helpers/helpers");
const coursemodel = require("../models/coursemodel");

const courses = [
  {
    id: 1,
    name: "Graphic Designing",
    shortName: "Graphic Design",
    fee: 1500,
  },
  {
    id: 2,
    name: "MERN Stack Development",
    shortName: "MERN Stack",
    fee: 2500,
  },
  {
    id: 3,
    name: "Python Programming",
    shortName: "Python",
    fee: 1200,
  },
  {
    id: 4,
    name: "Web Development",
    shortName: "Web Dev",
    fee: 2000,
  },
  {
    id: 5,
    name: "Java Programming",
    shortName: "Java",
    fee: 1800,
  },
  {
    id: 6,
    name: "Data Science",
    shortName: "Data Science",
    fee: 3000,
  },
  {
    id: 7,
    name: "iOS App Development",
    shortName: "iOS Dev",
    fee: 2800,
  },
  {
    id: 8,
    name: "Android App Development",
    shortName: "Android Dev",
    fee: 2700,
  },
  {
    id: 9,
    name: "Cloud Computing",
    shortName: "Cloud Computing",
    fee: 2200,
  },
  {
    id: 10,
    name: "Network Security",
    shortName: "Net Security",
    fee: 2600,
  },
  {
    id: 11,
    name: "Full Stack Web Development",
    shortName: "Full Stack Dev",
    fee: 2300,
  },
];

const CourseController = {
  add: async(req, res) => {
    try{
    let { name, shortName, fee } = req.body;
    let obj = { name, shortName, fee };

    let errArr = [];

    if (!obj.name) {
      errArr.push("Required Name");
    }
    if (!obj.shortName) {
      errArr.push("Required Short Name");
    }

    if (errArr.length > 0) {
      res.status(400).send(SendResponse(false, "Validation Error !", errArr));
    } else {
      // obj.id = courses.length + 1;
      let course = new coursemodel(obj);
      let result = await course.save();
      res.status(200).send(SendResponse(true,"Data Added Successfully", result));
    }
  } catch(e){
    res.status(500).send(SendResponse(false,"Interanl Server Error", e));
  }
  },
  
  edit: async (req, res) => {
    try {
        let id = req.params.id;
        let { name, shortName, fee } = req.body;
        
        if (!name || !shortName || !fee) {
            return res.status(400).send(SendResponse(false, "Required fields are missing."));
        }

        let updatedCourse = {
            name,
            shortName,
            fee,
        };

        const result = await coursemodel.findByIdAndUpdate(id, updatedCourse, { new: true });
        
        if (!result) {
            return res.status(404).send(SendResponse(false, "Course not found."));
        }

        res.status(200).send(SendResponse(true, "Data Updated Successfully", result));
    } catch (error) {
        res.status(500).send(SendResponse(false, "Internal Server Error", error));
    }
},
  
  get: async (req, res) => {
    try{
      let result = await  coursemodel.find();
      res.status(200).send(SendResponse(true,"",result));
    }catch(e){
      res.status(500).send(SendResponse(false,"Internal server error", e));
    }
  },
  getById: async (req, res) => {
    try{
    let id = req.params.id;
    let result = await coursemodel.findById(id);
    res.status(200).send(SendResponse(true,"",result));
    }catch(e){
      res.status(500).send(SendResponse(false,"Internal server error", e));
    }
  },
  //   let obj = courses.find((x) => x.id == id);
  //   if (obj) {
  //     res.send({
  //       isSuccessfull: true,
  //       data: obj,
  //       message: "",
  //     });
  //   } else {
  //     res.send({
  //       isSuccessfull: true,
  //       data: null,
  //       message: "No Data Found",
  //     });
  //   }
  // },
  
  del: (req, res) => {
    try {
        let id = req.params.id;
        coursemodel.findByIdAndDelete(id).then(() => {
            res.status(200).send(SendResponse(true, "Data Deleted Successfully"));
        }).catch((err) => {
            res.status(500).send(SendResponse(false, "Internal server error", err));
        });
    } catch (error) {
        res.status(500).send(SendResponse(false, "Internal Server Error", error));
    }
 },
};

module.exports = CourseController;




//datavase access ->  Network Address -> Allow access for anywhere ->  CONFIRM 

//DATABSDE PER CONNECT  -> COMPASS 

// get: (req, res) => {
//   res.send(courses);
// },
// try:{
// getById: asyn (req, res) => {
//   let id = req.params.id;

//   let obj = courses.find((x) => x.id == id);
//   if (obj) {
//     res.send({
//       isSuccessfull: true,
//       data: obj,
//       message: "",
//     });
//   } else {
//     res.send({
//       isSuccessfull: true,
//       data: null,
//       message: "No Data Found",
//     });
//   }
// },
// del: (req,res) => {
//   try{
//     let id = req.params.id;
//     CourseModel.findByIdAndDelete(id).then()=>{
//       res.send(SendResponse(true,""))
//     }).catch(()=>{
//       res.status.
//     })
//     }
//   }
// },
// };