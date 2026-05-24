class ApiError extends Error{
    constructor(
        statusCode,
        message = "SomeThing is Worng!",
        error = [],
        stack = ""
    ) {
        this.statusCode = statusCode;
        this.message = message;
        this.error = error;
        this.data = null;
        this.success = false;
        if(stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export { ApiError };