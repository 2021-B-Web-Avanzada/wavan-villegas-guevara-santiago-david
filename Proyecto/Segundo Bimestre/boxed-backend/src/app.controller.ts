import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import { getFirestore } from 'firebase-admin/firestore';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(){
    const db = getFirestore();
    const snapshot = await db.collection('prueba').get();
    const datos = [];
    snapshot.forEach((doc) => datos.push(doc.data()));
    return datos;
  }
}
