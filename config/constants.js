var STUDENT_STATUS = {
    DISABLED: 'Disabled',
    ENABLED: 'Enabled',
    PASSOUT: 'PassOut',
    PURSUING:'Pursuing'
};
var JOB_STATUS = {
    DISABLED: 'Disabled',
    ENABLED: 'Enabled',
    PUBLISHED: 'Published',
    UNPUBLISHED:'Unpublished'
};
var SUBCATEGORY_STATUS = {
    DISABLED: 'Disabled',
    ENABLED: 'Enabled',
};
var CATEGORY_STATUS = {
    DISABLED: 'Disabled',
    ENABLED: 'Enabled',
};
var USER_STATUS = {
    DISABLED: 'Disabled',
    ENABLED: 'Enabled',
};
var USER_TYPE = {
    STUDENT: 'student',
    ADMIN: 'admin',
    FACULTY:'faculty'
};
var filedirectory_path= {'directorypath':__dirname + "/../uploads/" };

module.exports = {
    STUDENT_STATUS: STUDENT_STATUS,
    JOB_STATUS:JOB_STATUS,
    CATEGORY_STATUS:CATEGORY_STATUS,
    SUBCATEGORY_STATUS:SUBCATEGORY_STATUS,
    USER_STATUS:USER_STATUS,
    USER_TYPE:USER_TYPE,
    filedirectory_path:filedirectory_path,
};