"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtistsModel_1 = __importDefault(require("../models/ArtistsModel"));
class ArtistController {
    constructor() { }
    getArtists(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artists = yield ArtistsModel_1.default.find();
                return res.status(200).json(artists);
            }
            catch (e) {
                console.log(e);
                return res.status(500).json('Internal Server Error');
            }
        });
    }
    getArtist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artist = yield ArtistsModel_1.default.findOne({ _id: req.params.id }).populate('albums');
                res.status(200).json(artist);
            }
            catch (e) {
                console.log(e);
                return res.status(500).json('Something goes wrong.');
            }
        });
    }
    createArtist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstName, lastName, birthDate, albums } = req.body;
                const newArtist = new ArtistsModel_1.default({ firstName, lastName, birthDate, albums });
                yield newArtist.save();
                return res.status(200).json({ data: newArtist });
            }
            catch (e) {
                console.log(e);
                return res.status(500).json('Something goes wrong.');
            }
        });
    }
    updateArtist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const updArtist = yield ArtistsModel_1.default.findOneAndUpdate({ _id: id }, req.body, { new: true });
                res.status(200).json(updArtist);
            }
            catch (e) {
                console.log(e);
                return res.status(404).json('Something goes wrong.');
            }
        });
    }
    deleteArtist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield ArtistsModel_1.default.findOneAndDelete({ _id: id });
                res.status(200).json({ response: 'Album delete successfully' });
            }
            catch (e) {
                console.log(e);
                return res.status(404).json('Something goes wrong.');
            }
        });
    }
}
const artistController = new ArtistController();
exports.default = artistController;
