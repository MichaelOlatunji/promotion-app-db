var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var accessorSchema = new Schema({
    
    accessorname:{type:String},
    accessoremail:{type:String},
    university: {type:String},
    email:{type: String},
    status: {
        type: String,
        enum: ['invitation sent', 'invitation received','paper sent','paper received']
    },
    approved: {
        type: Boolean,
        default: false
    }
})

var candidateSchema = new Schema({
    surname:{type: String},
    other:{type: String},
    email :{type: String},
    fac: {type: String},
    dep:{type: String},
    lev: {type: String},
    date: {type: String},
    accessor: [accessorSchema]
},{
        collection: 'candidates'
 })

module.exports = mongoose.model('Candidate', candidateSchema);