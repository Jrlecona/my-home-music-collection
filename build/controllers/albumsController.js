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
const AlbumsModel_1 = __importDefault(require("../models/AlbumsModel"));
class AlbumController {
    constructor() { }
    getAlbums(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const albums = yield AlbumsModel_1.default.find();
                return res.status(200).json(albums);
            }
            catch (e) {
                console.log(e);
                return res.status(500).json('Internal Server Error');
            }
        });
    }
    getAlbum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const album = yield AlbumsModel_1.default.findOne({ _id: req.params.id });
                res.status(200).json(album);
            }
            catch (e) {
                console.log(e);
                return res.status(500).json('Something goes wrong.');
            }
        });
    }
    createAlbum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { releaseDate, rating, title, year } = req.body;
                const newAlbum = new AlbumsModel_1.default({ releaseDate, rating, title, year });
                yield newAlbum.save();
                return res.status(200).json({ data: newAlbum });
            }
            catch (e) {
                console.log(e);
                return res.status(500).json('Something goes wrong.');
            }
        });
    }
    updateAlbum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const updAlbum = yield AlbumsModel_1.default.findOneAndUpdate({ _id: id }, req.body, { new: true });
                res.status(200).json(updAlbum);
            }
            catch (e) {
                console.log(e);
                return res.status(404).json('Something goes wrong.');
            }
        });
    }
    deleteAlbum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield AlbumsModel_1.default.findOneAndDelete({ _id: id });
                res.status(200).json({ response: 'Album delete successfully' });
            }
            catch (e) {
                console.log(e);
                return res.status(404).json('Something goes wrong.');
            }
        });
    }
    findAlbum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const searchFields = req.body;
                const albumFinded = yield AlbumsModel_1.default.find(searchFields);
                return res.status(200).json({ data: albumFinded });
            }
            catch (e) {
                console.log(e);
                return res.status(500).json('Something goes wrong.');
            }
        });
    }
}
const albumController = new AlbumController();
exports.default = albumController;
