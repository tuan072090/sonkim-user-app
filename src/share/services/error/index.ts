import { CustomError } from 'ts-custom-error'

class MyError extends CustomError {
    public message:string;
    public status: number;
    public code = 0;
    public errors: any[] = []

    constructor(message: string, status: number, code?: number, errors?: any[]) {
        super(message)
        this.message = message
        this.status = status
        this.code = code ? code : 0
        this.errors = errors ? errors : []
    }
}

export default MyError
