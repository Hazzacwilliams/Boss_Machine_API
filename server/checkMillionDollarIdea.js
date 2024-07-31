const checkMillionDollarIdea = (req, res, next) => {
    const { numWeeks, weeklyRevenue } = req.body;
    if(!numWeeks || !weeklyRevenue || isNaN(numWeeks) || isNaN(weeklyRevenue)){
        return res.status(400).send();
    }
    const totalRevenue = numWeeks * weeklyRevenue;
    if(totalRevenue < 1000000){
        return res.status(400).send();
    } 
    next();
};






// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
