import http, {IncomingMessage , ServerResponse} from 'http'

const port:number = 4000

interface IMessage{
    message: string
    success: boolean
    data: null|{}|{}[]
}

const server = http.createServer((req:IncomingMessage , res: ServerResponse) =>{
    const status = 404
    res.setHeader('contect-type' , 'application/jason')
})