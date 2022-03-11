import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { Paquete } from './interfaces/Paquete';
import { Estado } from './interfaces/Estado';
import { Almacen } from './interfaces/Almacen';

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

  @Get('almacenes')
  listarAlmacenes(@Res() response: Response) {
    this.appService
      .listarAlamecenes()
      .then((data) => {
        const listaAlmacenes: Almacen[] = [];
        data.forEach((doc) => {
          listaAlmacenes.push(doc.data() as Almacen);
        });
        response.status(HttpStatus.OK).send(listaAlmacenes);
      })
      .catch((err) => {
        response.status(501).send();
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
    @Query('filter') filtrar = false,
  ) {
    this.appService
      .leerPaquetesDeUsuario(email, filtrar)
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

  @Put('usuario/:email/paquete/:idPaquete/peso')
  registrarPesoPaquete(
    @Body() body,
    @Param('email') idUsuario: string,
    @Param('idPaquete') idPaquete: string,
    @Res() response: Response,
  ) {
    this.appService
      .actualizarPesoPaquete(idUsuario, idPaquete, body.peso)
      .then((data) => {
        response.status(200).send();
      })
      .catch((err) => {
        response.status(501).send(err);
      });
  }

  @Put('almacen/:idAlmacen/paquete/:idPaquete/peso')
  actualizarPesoPaqueteAlmacen(
    @Body() body,
    @Param('idAlmacen') idAlmacen: string,
    @Param('idPaquete') idPaquete: string,
    @Res() response: Response,
  ) {
    this.appService
      .actualizarPesoPaqueteEnAlmacen(idPaquete, idAlmacen, body.peso)
      .then((data) => {
        response.status(200).send();
      })
      .catch((err) => {
        response.status(501).send(err);
      });
  }

  @Put('usuario/:email/paquete/:idPaquete/pago')
  actualizarPagoPaquete(
    @Param('email') idUsuario: string,
    @Param('idPaquete') idPaquete: string,
    @Res() response: Response,
  ) {
    this.appService
      .actualizarPago(idUsuario, idPaquete)
      .then((data) => {
        response.status(HttpStatus.OK).send();
      })
      .catch((err) => {
        response.status(501).send();
      });
  }

  @Get('almacen/:id/paquetes')
  listarPaquetesAlmacen(
    @Param('id') idAlmacen: string,
    @Res() response: Response,
  ) {
    this.appService
      .listarPaquetesPorAlmacen(idAlmacen)
      .then((data) => {
        return this.appService.listarEstadosyPaquetesEnAlmacen(data);
      })
      .then((listaPaquetesyEstado) => {
        response.status(HttpStatus.OK).send(listaPaquetesyEstado);
      })
      .catch((err) => {
        console.log(err);
        response.status(501).send(err);
      });
  }

  @Put('estado/:idEstado/comentario/nuevo')
  actualizarComentario(
    @Param('idEstado') idEstado: string,
    @Res() response: Response,
    @Body() comentario,
  ) {
    this.appService
      .anadirComentarioEstado(idEstado, comentario.comentario)
      .then((data) => {
        response.status(HttpStatus.OK).send();
      })
      .catch((err) => response.status(501).send(err));
  }

  @Get('usuario/:email/paquete/:idPaquete/ultimoEstado')
  consultarUltimoEstado(
    @Param('email') emailUsuario: string,
    @Param('idPaquete') idPaquete: string,
    @Res() response: Response,
  ) {
    this.appService
      .consultarUltimoEstadoPaquetePorUsuario(emailUsuario, idPaquete)
      .then((data) => {
        const ultimoEstado = data.data() as Estado;
        response.status(HttpStatus.OK).send(ultimoEstado);
      })
      .catch((err) => {
        response.status(501).send(err);
      });
  }

  @Post('almacen/:idAlmacen/paquete/:idPaquete/estado/nuevo')
  registrarEstoEnAlmacen(
    @Body() body,
    @Param('idAlmacen') idAlmacen: string,
    @Param('idPaquete') idPaquete: string,
    @Res() response: Response,
  ) {
    this.appService
      .registrarEstadoAlmacen(idPaquete, idAlmacen, body)
      .then((data) => {
        response.status(HttpStatus.OK).send();
      })
      .catch((err) => {
        response.status(501).send(err);
      });
  }
}
