const Discussion   = require("../models/Discussion.js");


const getalldiscussion =async (req, res) => {

    const all_discussion = await Discussion.find({});
    res.status(200).json({
        "status": "success",
        "data": all_discussion
    })
   
}

const creatediscussion = async (req, res) => {

    try{
    const discussion = await Discussion.create(req.body);
    res.status(200).json({
        "message": 'Discussion added successfully',
        "discussion_id": discussion._id,
        "status": 'success'
    });
    }catch(err){
        res.status(404).json({
            "status": 'fail',
            "message": err.message
        });
    }
}

/*

Taskdelete Controller

/api/v1/discussion/delete/:id

1. delete the discussion with given id in req.params.

Response --> 

1. Success

200 Status code
json = {
  status: 'success',
  message: 'Discussion deleted successfully'
}

2. Discussion Doesnot exist

403 Status Code
json = {
    "status": 'fail',
    "message": 'Given Discussion doesnot exist'
}

3. Something went wrong

404 Status Code
json = {
    "status": 'fail',
    "message": error message
}

*/

const deletediscussion = async (req, res) => {

    //Write your code here.

}

module.exports = { getalldiscussion, creatediscussion, deletediscussion };