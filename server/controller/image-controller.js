import File from "../models/file.js"


export const uploadImage = async(req, res) => {
    const fileobj = {
        path: req.file.path,
        name: req.file.originalname

    }
    try{
        const file = await File.create(fileobj)

        return res.status(200).json({path:`http://localhost:8080/file/${file._id}`})


    }catch(err){
        console.error(err.message)
        res.status(500).json({error: err.message})
    }



}
export const downloadImage = async(req, res) => {
    try{
        const file = await File.findById(req.params.id)
        file.downloadContent++;
        await file.save()

        res.download(file.path, file.name)

    }catch(err){
        console.error(err.message)
        return res.status(500).json({error: err.message})

    }
}