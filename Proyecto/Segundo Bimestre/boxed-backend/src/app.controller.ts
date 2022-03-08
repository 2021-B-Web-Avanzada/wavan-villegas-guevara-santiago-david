import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('usuario/nuevo')
  registrarUsuario(@Body() body, @Res() response: Response) {
    this.appService
      .registrarUsuario(body)
      .then((data) => {
        response.status(201).send();
      })
      .catch((err) => {
        response.status(501).send(err);
      });
  }

  @Get('usuario/:email')
  consultarUsuario(@Param() params, @Res() response: Response) {
    this.appService
      .leerUsuario(params.email as string)
      .then((data) => {
        response.status(200).send(data.data());
      })
      .catch((err) => {
        response.status(501).send(err);
      });
  }

  @Get('operador/:email')
  consultarOperador(@Param() params, @Res() response: Response) {
    this.appService
      .leerOperador(params.email as string)
      .then((data) => {
        response.status(200).send(data.data());
      })
      .catch((err) => {
        response.status(501).send(err);
      });
  }

  @Get('almacen/:id')
  consultarAlmacen(@Param() params, @Res() response: Response) {
    this.appService
      .leerAlmacen(params.id as string)
      .then((data) => {
        response.status(200).send(data.data());
      })
      .catch((err) => {
        response.status(501).send(err);
      });
  }
}
