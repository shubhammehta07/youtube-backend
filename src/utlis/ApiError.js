class ApiError extends Error {
    constructor(
        statusCode,
        message="something went wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode;
        this.data=null;
        this.message=message;
        this.succcess=false;
        this.error=errors;


        if(statck){
            this.stack=statck;
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}