import {Request, Response } from 'express'

import Album from '../models/AlbumsModel'

class AlbumController {

    constructor(){}

    async getAlbums(req: Request, res: Response) : Promise<Response> {
        try{
            const albums = await Album.find();
            return res.status(200).json(albums);
        } 
        catch(e){
            console.log(e)
            return res.status(500).json('Internal Server Error');
        }
        
     }

     async getAlbum(req: Request, res: Response) : Promise<Response> {
        try{
            const album = await Album.findOne({_id: req.params.id});
            res.status(200).json(album);
        }
        catch(e){
            console.log(e)
            return res.status(500).json('Something goes wrong.');
        }
    }

     async createAlbum(req: Request, res: Response) : Promise<Response>  {
        try{
            const {releaseDate, rating, title, year} = req.body;
            const newAlbum = new Album({releaseDate, rating, title, year});
            await newAlbum.save();
            return res.status(200).json({data: newAlbum});
        }
        catch(e){
            console.log(e)
            return res.status(500).json('Something goes wrong.');
        }
     }

     async updateAlbum(req: Request, res: Response) : Promise<any> {
        try{
            const id = req.params.id ;
            const updAlbum = await Album.findOneAndUpdate({ _id: id }, req.body, {new: true});
            res.status(200).json(updAlbum);
        }
        catch(e){
            console.log(e)
            return res.status(404).json('Something goes wrong.');
        }
     }

     async deleteAlbum(req: Request, res: Response) : Promise<any>  {
        try{
            const id = req.params.id ;
            await Album.findOneAndDelete({ _id: id });
            res.status(200).json({response: 'Album delete successfully'});
        }
        catch(e){
            console.log(e)
            return res.status(404).json('Something goes wrong.');
        }

     }

     async findAlbum(req: Request, res: Response) : Promise<Response>  {
        try{
            const searchFields = req.body;
            const albumFinded =  await Album.find(searchFields);
            return res.status(200).json({data: albumFinded});
        }
        catch(e){
            console.log(e)
            return res.status(500).json('Something goes wrong.');
        }
     }

}

const albumController = new AlbumController();
export default albumController;