import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ 
    storage,
 })

// import multer from 'multer';

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/temp'); // Destination folder
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + '-' + file.originalname); // Unique filename
//   }
// });

// const upload = multer({
//   storage,
//   fileFilter: function (req, file, cb) {
//     const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
//     if (!allowedTypes.includes(file.mimetype)) {
//       return cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'));
//     }
//     cb(null, true); // Allow the upload
//   }
// });

// export { upload };
