import {Request, Response} from "express";

export class Routes {       
  public routes(app): void {          
    app.route('/')
    .get((req: Request, res: Response) => {            
      res.status(200).send({
        message: 'GET request successfulll!!!!'
      })
    })               

    app.route('/pergunta')
    .get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfull.'
      })
    })
    .post((req: Request, res: Response) => {
      res.status(200).send({
        message: 'POST request successfull.'
      })
    })
    app.route('/pergunta/:perguntaId')
    .get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfull'
      })
    })
    .put((req: Request, res: Response) => {
      res.status(200).send({
        message: 'PUT request successfull.'
      })
    })
    .delete((req: Request, res: Response) => {
      res.status(200).send({
        message: 'DEL request successfull.'
      })
    })

  }
}
