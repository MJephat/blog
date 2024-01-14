import express from "express"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser"
import multer from "multer"
import cors from "cors"


const app = express();

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin:"*"
}));

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, '../blog/public/upload')
    },
    filename: function (req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
})

const upload = multer({ storage })

app.post('https://blog-n3sa-server.vercel.app/api/upload', upload.single('file'), function (req, res) {
    const file = req.file;
    // console.log(file.size);
    console.log("Done uploading");
    res.status(200).json(file.filename)
})



app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)


app.listen(8080,() =>{
    console.log("Connected")
})