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




}
