
export const mediaController = {}

mediaController.getImage = async (req, res) => {
    res.status(200).json("image...")
}

mediaController.postImage = async (req, res) => {
    try {
        const imageUrl = req.file.path

        // await db.saveImage(imageUrl)

        res.status(201).json({ imageUrl })
    } catch (error) {
        res.status(500).json("Something went wrong...")
    }

}
