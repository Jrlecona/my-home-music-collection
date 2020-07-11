import {Schema, model} from 'mongoose'

const ArtistSchema = new Schema({
    firstName: {type: String, requiered: true},
    lastName: {type: String, requiered: true},
    birthDate: {type: Date, requiered: true},
    createAt: {type: Date, default: Date.now},
    albums: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }]
});

export default model('Artist', ArtistSchema);