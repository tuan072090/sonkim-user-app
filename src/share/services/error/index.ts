import { CustomError } from 'ts-custom-error'

class MyError extends CustomError {
    public message:string;
    public status: number|string;
    public code: number|string;
    public errors: any[] = []

    constructor(message: string, status: number|string, code?: number|string, errors?: any[]) {
        super(message)
        this.message = message
        this.status = status
        this.code = code ? code : 0
        this.errors = errors ? errors : []
    }
}

export default MyError
