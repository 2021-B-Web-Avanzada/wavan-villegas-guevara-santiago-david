const functions = require("firebase-functions");
const admin = require("firebase-admin");

const express = require("express");
const cors = require("cors");
const e = require("express");

const app = express();



admin.initializeApp({
    credential: admin.credential.cert("./permisosFirebase.json"),
  });

const db=admin.firestore();
//crear empresa
app.post('/empresa',async(req,res)=>{
    const empresaRef= db.collection("empresa").doc();
    await empresaRef.set(req.body).
    then(()=>{
        res.status(200).send();
    })
    .catch((err)=>{
        res.status(500).send();
    })
});


//buscar empresa por id
app.get('/empresa/:emp_id',async (req,res) => {


    const empresaRef= db.collection("empresa")
    .doc(req.params.emp_id);

    await empresaRef.get()
    .then((documento)=>{
        if(documento.exists){
           

            const idDoc={
                
                id:documento.id
            }

            const datosRecogidos={ 
                ...idDoc,
                ...documento.data()
            
            };
           
            res.status(200).json(datosRecogidos);

        }else{
            res.status(500).send();
        }
    })
});

//listar empresas
app.get('/empresas',async (req,res) => {


    const empresasRef = db.collection("empresa");

    await empresasRef.get().then((documentos=>{
        var arregloEmpresas=[];

        documentos.docs.forEach((doc)=>{
            
                const idDoc={
            
                    id:doc.id
                }
    
                const datosRecogidos={ 
                    ...idDoc,
                    ...doc.data()
                
                };
                arregloEmpresas.push(datosRecogidos);
            }
                
        );
       
        res.status(200).json(arregloEmpresas);
    
    })).catch((err)=>{
        res.status(500).send();
    })
    
    });
//eliminar empresa por id

app.delete('/empresa/:emp_id', async(req,res)=>{
    const empresasRef=db.collection("empresa")
    .doc(req.params.emp_id);
    empresasRef.delete()
    .then(()=>{
        res.status(200).send();
    })
    .catch((err)=>{
        res.status(500).send();
    });
});

//editar empresa por id

app.put('/empresa/:emp_id', async(req,res)=>{
    const empresaRef=db.collection("empresa").doc(req.params.emp_id);

    await empresaRef.update(req.body)
    .then(()=>{
        res.status(200).send();
    })
    .catch((err)=>{
        res.status(500).send();
    });;
    

});
//crear videojuego
app.post('/empresa/:emp_id/juego',async(req,res)=>{
    const juegoRef= db.collection("empresa")
    .doc(req.params.emp_id)
    .collection("juego")
    .doc();
    await juegoRef.set(req.body)
    .then(()=>{
        res.status(200).send();
    })
    .catch((err)=>{
        res.status(500).send();
    })
});



//buscar juego por id
app.get('/empresa/:emp_id/juego/:jue_id',async (req,res) => {


    const juegoRef= db.collection("empresa")
    .doc(req.params.emp_id)
    .collection("juego")
    .doc(req.params.jue_id);

    await juegoRef.get()
    .then((documento)=>{
        if(documento.exists){
           

            const idDoc={
                
                id:documento.id
            }

            const datosRecogidos={ 
                ...idDoc,
                ...documento.data()
            
            };
           
            res.status(200).json(datosRecogidos);

        }else{
            res.status(500).send();
        }
    })
});


//listar juegos
app.get('/empresa/:emp_id/juegos',async (req,res) => {


    const juegoRef = db.collection("empresa")
    .doc(req.params.emp_id)
    .collection("juego");

    await juegoRef.get().then((documentos=>{
        var arregloJuegos=[];

        documentos.docs.forEach((doc)=>{
            
                const idDoc={
            
                    id:doc.id
                }
    
                const datosRecogidos={ 
                    ...idDoc,
                    ...doc.data()
                
                };
                arregloJuegos.push(datosRecogidos);
            }
                
        );
       
        res.status(200).json(arregloJuegos);
    
    })).catch((err)=>{
        res.status(500).send();
    })
    
    });

    //eliminar juego por id

app.delete('/empresa/:emp_id/juego/:jue_id', async(req,res)=>{
    const empresasRef=db.collection("empresa")
    .doc(req.params.emp_id)
    .collection("juego")
    .doc(req.params.jue_id);
    empresasRef.delete()
    .then(()=>{
        res.status(200).send();
    })
    .catch((err)=>{
        res.status(500).send();
    });
});

//editar juego por id

app.put('/empresa/:emp_id/juego/:jue_id', async(req,res)=>{
    const juegoRef=db.collection("empresa")
    .doc(req.params.emp_id)
    .collection("juego")
    .doc(req.params.jue_id);

    await juegoRef.update(req.body)
    .then(()=>{
        res.status(200).send();
    })
    .catch((err)=>{
        res.status(500).send();
    });;
    

});

exports.app=functions.https.onRequest(app);