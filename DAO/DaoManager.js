/** Insert Data **/
exports.setData = function (usermodel,data, callback) {
    //console.log("DAo");
    //console.log(model);
    new usermodel(data).save(function (err, resultData) {

        if (err) {
           console.log("error"+err);
           // logger.error("SET DATA: ", err);
            return callback(err);
        }

        var result = resultData.toObject();
       console.log(result._id);
        //delete result.__v;
        //callback(null, result);

    });
};
/** fetch data **/
exports.getData = function (model, query, projection, options, callback) {

    model.find(query, projection, options, function (err, data) {
        if (err) {
            logger.error("Get Data", err);
            return callback(err);
        }
        return callback(null, data);
    });
};
/** update **/
exports.update_data = function (model, conditions, update, options, callback) {
    model.update(conditions, update, options, function (err, result) {
        if (err) {
            //logger.error("Update Query: ", err);
            return callback(err);
        }else{
            console.log("result staretr");
            console.log(result);
         callback(null,result);
            console.log("result end");
        //return callback(null, result);
        }
    });
};