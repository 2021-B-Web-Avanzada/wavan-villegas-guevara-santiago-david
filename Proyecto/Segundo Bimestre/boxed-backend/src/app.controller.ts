import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { Paquete } from './interfaces/Paquete';
import { Estado } from './interfaces/Estado';

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

  @Post('usuario/:email/paquete/nuevo')
  generarPaquete(
    @Body() body,
    @Param('email') identificador: string,
    @Res() resopnse: Response,
  ) {
    this.appService
      .registrarPaquete(body, identificador)
      .then((data) => {
        resopnse.status(201).send();
      })
      .catch((err) => {
        resopnse.status(501).send(err);
      });
  }

  @Get('usuario/:email/paquetes')
  listarPaquetesUsuario(
    @Param('email') email: string,
    @Res() response: Response,
  ) {
    this.appService
      .leerPaquetesDeUsuario(email)
      .then((data) => {
        const listaPaquetes: Paquete[] = [];
        data.forEach((documento) => {
          listaPaquetes.push(documento.data() as Paquete);
        });
        response.status(200).send(listaPaquetes);
      })
      .catch((err) => {
        response.status(501).send(err);
      });
  }

  @Get('usuario/:email/paquete/:idPaquete/estados')
  listarEstadosPaqueteUsuario(
    @Param('email') email: string,
    @Param('idPaquete') idPaquete: string,
    @Res() response: Response,
  ) {
    this.appService
      .consultarEstadosPaquete(idPaquete, email)
      .then((datos) => {
        const listaEstados: Estado[] = [];
        datos.forEach((doc) => {
          listaEstados.push(doc.data() as Estado);
        });
        response.status(200).send(listaEstados);
      })
      .catch((err) => {
        response.status(501).send(err);
      });
  }
}
