const mongoose = require('mongoose')

const piadaSchema = mongoose.Schema({
    nome:{
        type:String,
        required:true
    },
    historia:{
        type:String,
        required:true
    },
    autor:{
        type:String,
        default:"Anônimo"
    },
    data:{
        type:Date,
        default: Date.now()
    }
})

piadaSchema.virtual('id').get(function(){
    return this._id.toHexString()
})
piadaSchema.set('toJSON',{
    virtuals:true
})

exports.Piada = mongoose.model('Piada',piadaSchema)
