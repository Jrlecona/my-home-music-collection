import {Request, Response } from 'express'

import Artist from '../models/ArtistsModel'

class ArtistController {

    constructor(){}

    async getArtists(req: Request, res: Response) : Promise<Response> {
        try{
            const artists = await Artist.find();
            return res.status(200).json(artists);
        } 
        catch(e){
            console.log(e)
            return res.status(500).json('Internal Server Error');
        }
        
     }

     async getArtist(req: Request, res: Response) : Promise<Response> {
        try{
            const artist = await Artist.findOne({_id: req.params.id}).populate('albums');
            res.status(200).json(artist);
        }
        catch(e){
            console.log(e)
            return res.status(500).json('Something goes wrong.');
        }
    }

     async createArtist(req: Request, res: Response) : Promise<Response>  {
        try{
            const {firstName, lastName, birthDate, albums} = req.body;
            const newArtist = new Artist({firstName, lastName, birthDate, albums});
            await newArtist.save();
            return res.status(200).json({data: newArtist});
        }
        catch(e){
            console.log(e)
            return res.status(500).json('Something goes wrong.');
        }
     }

     async updateArtist(req: Request, res: Response) : Promise<any> {
        try{
            const id = req.params.id ;
            const updArtist = await Artist.findOneAndUpdate({ _id: id }, req.body, {new: true});
            res.status(200).json(updArtist);
        }
        catch(e){
            console.log(e)
            return res.status(404).json('Something goes wrong.');
        }
     }

     async deleteArtist(req: Request, res: Response) : Promise<any>  {
        try{
            const id = req.params.id ;
            await Artist.findOneAndDelete({ _id: id });
            res.status(200).json({response: 'Album delete successfully'});
        }
        catch(e){
            console.log(e)
            return res.status(404).json('Something goes wrong.');
        }

     }

}

const artistController = new ArtistController();
export default artistController;