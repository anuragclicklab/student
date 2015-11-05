/** Insert Data **/
exports.setData = function (usermodel,data, callback) { //return callback(null,data);
    new usermodel(data).save(function (err, resultData) {
        if(err) {
            return callback(err);
        }else{
           var result = resultData.toObject();
           var cv ={'id':result._id} //console.log("dd",cv); //delete result.__v;
          return callback(null, result);
        }
    });
};
/** fetch data **/
exports.getData = function (model, query, projection, options, callback) { //console.log("DAO",model);

    model.find(query, projection, options, function (err, data) {
        if (err) {
            logger.error("Get Data", err);
            return callback(err);
        }
        return callback(null, data);
    }); //.select({email : 1, fullName : 1, password: 1});
};

/** fetch data with selected fileds **/
exports.getDataSelectedFields = function (model, query, projection, options,selectedfields ,callback) { //console.log("DAO",model);

    model.find(query, projection, options, function (err, data) {
        if (err) {
           return callback(err);
        }else{
            return callback(null, data);
        }
    }).select(selectedfields);
};

/** fetch data **/
exports.getData_conditions = function (model, conditions1,callback) { //console.log("DAO",conditions1);
     model.find({$and:conditions1}, function(err,docs) {
        if(err)
            return callback(err);
        else
            console.log("DAOcc",docs);
         callback(null,docs)
    });
};
/** update **/
exports.update_data = function (model, conditions, update, options, callback) {
    model.update(conditions, update, options, function (err, result) {
        console.log(err);
        if (err) {
            return callback(err);
        }else{
          return callback(null,result);
        }
    });
};
/** find and update **/
exports.findOneAndUpdateData = function (model, conditions, update, options, callback) {
    model.findOneAndUpdate(conditions, update, options, function (error, result) {
        console.log(error);
        if (error) {
         return callback(error);
        }else{
        return callback(null, result);
        }
    })
};

/** Delete Data  **/
exports.deleteData = function (model, conditions, callback) {
   model.remove(conditions, function (err, removed) {
        if(err) {
          return callback(err);
        }else{
          return callback(null, removed);
        }
   });
};

exports.deleteData_one = function (model, conditions, callback1) {
    model.remove = function remove (conditions, callback) {
        if ('function' === typeof conditions) {
            callback = conditions;
            conditions = {};
        }
        // get the mongodb collection object
        var mq = new Query({}, {}, this, this.collection);
        return mq.remove(callback);
    };
};

exports.push_subcategories = function (model,conditions,data,callback){
    console.log("dd",conditions); console.log("data",data); //return callback(null,data);
 model.update(conditions,{$addToSet:data},function(err,result) {
     if (err){
         return callback(error);
     }else{
      return callback(null,result);
     }
  });
}

exports.getDatausingpopulate = function (model, query, projection, options, callback) {
    model.find(query, projection,options).populate('subcategories').exec(function(err,result){
        if(err){
            throw err; //do something with error
        } else {
            callback(result);
        }
    });
};

exports.userdetaillist = function (model, query, projection, options, callback) {
    model.find(query, projection,options).populate('studentId').populate('adminId').exec(function(err,result){
        if(err){
            throw err; //do something with error
        } else {
            callback(result);
        }
    });
}