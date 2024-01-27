const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  }
};

export { asyncHandler };

// another approch

// const asyncHandler=(func)=> async(req,res,next)=>{
//     try {
//         await func(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             massage:err.massage
//         })
//     }
// }
