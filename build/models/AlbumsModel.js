"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AlbumSchema = new mongoose_1.Schema({
    releaseDate: { type: Date, requiered: true },
    rating: { type: Number, requiered: true },
    title: { type: String, requiered: true },
    year: Number,
    createAt: { type: Date, default: Date.now }
});
exports.default = mongoose_1.model('Album', AlbumSchema);
