import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {Server, Socket} from 'socket.io';


var rooms={};
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
            message: {salaID:string},
        @ConnectedSocket()
            socket: Socket
    ) {
        if (rooms[message.salaID] == undefined) {
            rooms[message.salaID]  = 1;
        } else {
            rooms[message.salaID] ++;
        }
        
        socket.join(message.salaID);


        const mensajeAEnviar: any={
            mensaje:rooms[message.salaID]
        };
        socket.emit(
                'escucharEventoUnirseSala',
                mensajeAEnviar

            );

        return 'ok';
    }




}
