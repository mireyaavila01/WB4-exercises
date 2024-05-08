"use strict";

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];
  

   
   function getStartDate(courses, lookCourseId){
    let matching = [];

    for(let i= 0; i < courses.length; i++){
        if (courses[i].CourseId == lookCourseId){
            matching.push(courses[i].StartDate);
        }
    }
    return matching;
   }

   console.log("The start date for PROG200 " + getStartDate(courses,"PROG200"));

   function getTitle(courses, lookCourseId){
    let matching = [];

    for(let i= 0; i < courses.length; i++){
        if (courses[i].CourseId == lookCourseId){
            matching.push(courses[i].Title);
        }
    }
    return matching;
   }
   console.log("The title of the PROJ500 course is " + getTitle(courses,"PROJ500"));


   function getTitlesCost(courses, lookCostFee){
    let matching = [];
    let courseFee = Number(lookCostFee);
    for(let i =0; i < courses.length; i++){
        if(courses[i].Fee <= courseFee){
            matching.push(courses[i].Title);
        }
    
    }
       return matching;
   }
    console.log("The titles of the courses that cost $50 or less are " + getTitlesCost(courses, "50.00"));
  

   function getClassMeets(courses, lookLoaction){
    let matching = [];
    let nameLocation = lookLoaction;
    for (let i = 0; i < courses.length; i++){
        if (courses[i].Location == nameLocation){
            matching.push(courses[i].CourseId);
        }
    }
    return matching;
   }

   console.log("The classes that meet in Classrom 1 are " + getClassMeets(courses, "Classroom 1"));

   


  