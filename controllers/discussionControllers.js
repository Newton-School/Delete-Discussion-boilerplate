const Discussion   = require("../models/discussion.js");


const getAllDiscussion =async (req, res) => {

    const allDiscussion = await Discussion.find({});
    res.status(200).json({
        status: 'success',
        data: allDiscussion
    })
   
}

const createDiscussion = async (req, res) => {

    try{
    const discussion = await Discussion.create(req.body);
    res.status(200).json({
        message: 'Discussion added successfully',
        discussion_id: discussion._id,
        status: 'success'
    });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }
}

/*

deletediscussion Controller


2. delete the discussion with given id in req.params.

Response --> 

1. Success

200 Status code
json = {
  status: 'success',
  message: 'Discussion deleted successfully'
}

2. Discussion Doesnot exist

404 Status Code
json = {
    status: 'fail',
    message: 'Given Discussion doesn't exist'
}

3. Something went wrong

500 Status Code
json = {
    status: 'fail',
    message: error message
}

*/

const deleteDiscussion = async (req, res) => {


    //Write your code here.

}

module.exports = { getAllDiscussion, createDiscussion, deleteDiscussion };