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