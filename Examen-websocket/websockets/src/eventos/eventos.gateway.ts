import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {Server, Socket} from 'socket.io';



var salaActual=1;
var jugadores=0;
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
            message: {},

        @ConnectedSocket()
            socket: Socket
    ) {
        jugadores+=1;

        if(jugadores>2){
            jugadores=1;
            salaActual+=1;
        }


        socket.join(salaActual.toString());


        const mensajeAEnviar={
            jugador:jugadores,
            sala:salaActual,
        }as any;

        socket.broadcast
            .to(salaActual.toString())
            .emit(
                'escucharEventoUnirseSala',
                mensajeAEnviar

            );
        socket.emit(
            'escucharEventoUnirseSala',
            mensajeAEnviar

        );

        return 'ok';

    }

    @SubscribeMessage('enviarListo')
    enviarListo(
        @MessageBody()
            message: {
            posicionBarcosEnemigos:number[],
            idSala:string
        },

        @ConnectedSocket()
            socket: Socket
    ) {


        const mensajeAEnviar={
            posicionBarcosEnemigos:message.posicionBarcosEnemigos

        }as any;

        socket.broadcast
            .to(message.idSala)
            .emit(
                'escucharEnviarListo',
                mensajeAEnviar

            );


        return 'ok';

    }

    @SubscribeMessage('enviarAtaque')
    enviarAtaque(
        @MessageBody()
            message: {
            posicion:number,
            idSala:string
        },

        @ConnectedSocket()
            socket: Socket
    ) {


        const mensajeAEnviar={
            posicion:message.posicion

        }as any;

        socket.broadcast
            .to(message.idSala)
            .emit(
                'recibirAtaque',
                mensajeAEnviar

            );


        return 'ok';

    }


    @SubscribeMessage('enviarDerrota')
    enviarDerrota(
        @MessageBody()
            message: {
            idSala:string
        },

        @ConnectedSocket()
            socket: Socket
    ) {


        const mensajeAEnviar={

        }as any;

        socket.broadcast
            .to(message.idSala)
            .emit(
                'recibirDerrota',
                mensajeAEnviar

            );


        return 'ok';

    }





}
