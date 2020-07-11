 import {Schema, model} from 'mongoose'

 const AlbumSchema = new Schema({
     releaseDate: {type: Date, requiered: true},
     rating: {type: Number, requiered: true},
     title: {type: String, requiered: true},
     year: Number,
     createAt: {type: Date, default: Date.now}
 });

export default model('Album', AlbumSchema);