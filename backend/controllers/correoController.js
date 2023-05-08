module.exports = function(app,con){
  app.post('/correosRecibidos',function(req,res){
    var correo = '\''+req.body.correo+'\'';
    var query = 'SELECT * FROM UsuarioRecibeCorreo UC INNER JOIN Correo C ON UC.idCorreo=C.idCorreo WHERE UC.correoUsuario='+correo;
    con.query(query,function(error,resultado){
      if(error){
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.send(JSON.stringify("Error en el servidor"));
        res.end();
      }else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.send(JSON.stringify(resultado));
        res.end();
      }
    });
  });

  /*app.post('/correo',function(req,res){
    var usuarioEnvia = '\''+req.body.usuarioEnvia+'\'';
    var asunto = '\''+req.body.asunto+'\'';
    var contenido = '\''+req.body.contenido+'\'';
    var query = 'insert into Correo(asunto,contenido,usuarioEnvia) values('+asunto+','+contenido+
    ','+usuarioEnvia+')';
    con.query(query,function(error,resultado){
      if(error){
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.send(JSON.stringify("Error en el servidor en primera query"));
        res.end();
      }else{
        var idCorreo = resultado.insertId;
        var destinatarios = req.body.destinatarios;
        var bandera = false;
        for(var i=0; i<destinatarios.length; i++){
          if(bandera)
            break;
          var destinatario = '\''+destinatarios[i]+'\'';
          var query2 = 'insert into UsuarioRecibeCorreo(correoUsuairo,idCorreo) values('+
          destinatario+','+idCorreo+')';
          con.query(query2,function(error,resultado){
            if(error){
              console.log(error);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 500;
              res.send(JSON.stringify("Error en el servidor en segunda query"));
              res.end();
              bandera = true;
            }else if(i === destinatarios.length-1){
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.send(JSON.stringify("Enviado"));
              res.end();
            }
          });
        }
      }
    });
  });*/

  app.post('/correo',function(req,res){
    var usuarioEnvia = '\''+req.body.usuarioEnvia+'\'';
    var asunto = '\''+req.body.asunto+'\'';
    var contenido = '\''+req.body.contenido+'\'';
    var query = 'insert into Correo(asunto,contenido,usuarioEnvia) values('+asunto+','+contenido+
    ','+usuarioEnvia+')';
    con.query(query,function(error,resultado){
      if(error){
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.send(JSON.stringify("Error en el servidor"));
        res.end();
      }else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.send(JSON.stringify(resultado.insertId));
        res.end();
      }
    });
  });

  app.post('/UsuarioCorreo',function(req,res){
    var idCorreo = req.body.idCorreo;
    var correoUsuario = '\''+req.body.correoUsuario+'\'';
    var query = 'insert into UsuarioRecibeCorreo(idCorreo,correoUsuario) values('+
    +idCorreo+','+correoUsuario+')';
    con.query(query,function(error,resultado){
      if(error){
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.send(JSON.stringify("Error en el servidor"));
        res.end();
      }else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.send(JSON.stringify("Enviado"));
        res.end();
      }
    });
  });

  app.post('/correosEnviados',function(req,res){
    var correo = '\''+req.body.correo+'\'';
    var query = 'SELECT * FROM Correo WHERE usuarioEnvia='+correo;
    con.query(query,function(error,resultado){
      if(error){
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.send(JSON.stringify("Error en el servidor"));
        res.end();
      }else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.send(JSON.stringify(resultado));
        res.end();
      }
    });
  });

  app.post('/imagenesCorreo',function(req,res){
    var idCorreo = req.body.idCorreo;
    var query = 'SELECT url FROM Imagen WHERE idCorreo='+idCorreo;
    con.query(query,function(error,resultado){
      if(error){
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.send(JSON.stringify("Error en el servidor"));
        res.end();
      }else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.send(JSON.stringify(resultado));
        res.end();
      }
    });
  });

  app.post('/imagenCorreo',function(req,res){
    var idCorreo = req.body.idCorreo;
    var url = '\''+req.body.url+'\'';
    var query = 'insert into Imagen(idCorreo,url) values('+idCorreo+','+url+')';
    con.query(query,function(error,resultado){
      if(error){
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.send(JSON.stringify("Error en el servidor"));
        res.end();
      }else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.send(JSON.stringify("Agregada"));
        res.end();
      }
    });
  });
};
 
