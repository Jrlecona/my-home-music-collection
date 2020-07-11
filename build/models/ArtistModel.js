"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ArtistSchema = new mongoose_1.Schema({
    firstName: { type: String, requiered: true },
    lastName: { type: String, requiered: true },
    birthDate: { type: Date, requiered: true },
    createAt: { type: Date, default: Date.now }
});
exports.default = mongoose_1.model('Artist', ArtistSchema);
