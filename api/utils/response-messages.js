export const ERROR = {}

ERROR.server = (error) => { 
    return { message: "Something went wrong...", error }} 

ERROR.serverError = (res, err) => res.status(500).json({ message: "Unauthorized...", err: err ?? null }) 

ERROR.unauthorized = (res) => res.status(401).json({ message: "Unauthorized..." }) 