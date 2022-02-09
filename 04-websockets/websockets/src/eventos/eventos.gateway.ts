import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import {Server, Socket} from 'socket.io';

@WebSocketGateway(
    8080,
    {
        cors: {
            origin: '*',
        }
    })
export class EventosGateway {
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
            message: { nombre: string },
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.broadcast
            .emit(
                'escucharEventoHola',
                {
                    mensaje: 'Bienvenido ' + message.nombre
                });
        return 'ok';
    }


    @SubscribeMessage('unirseSala')
    unirseSala(
        @MessageBody()
            message: { salaID:string,nombre:string},
        @ConnectedSocket()
            socket: Socket
    ) {
        socket.join(message.salaID);
        const mensajeAEnviar: any={
            mensaje:'Bienvenido'+message.nombre
        };
        socket.broadcast
            .to(message.salaID)
            .emit(
                'escucharEventoUnirseSala',
                mensajeAEnviar

            );

        return 'ok';
    }

    @SubscribeMessage('enviarMensaja')
    enviarMensaja(
        @MessageBody()
            message: { salaID:string,nombre:string,mensaje:string},
        @ConnectedSocket()
            socket: Socket
    ) {
        const nuevoMensaje={
            nombre:message.nombre,
            mensaje: message.mensaje,
            salaId:message.salaID

        } as any;

        socket.broadcast
            .to(message.salaID)
            .emit(
                'escucharEventoMensajeSala',
                nuevoMensaje

            );

        return 'ok';
    }


}