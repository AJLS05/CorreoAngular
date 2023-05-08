module.exports = function(app,con){
  app.post('/registrarse',function(req,res){
    var correo = '\''+req.body.correo+'\'';
    var contrasena = '\''+req.body.contrasena+'\'';
    var nombreCompleto = '\''+req.body.nombreCompleto+'\'';
    var query = 'insert into Usuario(correo,contrasena,nombreCompleto) values('+correo+','+contrasena+','+nombreCompleto+')';
    con.query(query,function(error,resultado){
      if(error){
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.send(JSON.stringify("Error"));
        res.end();
      }else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.send(JSON.stringify(req.body.nombreCompleto));
        res.end();
      }
    });
  });

  app.post('/autenticar',function(req,res){
    var correo = '\''+req.body.correo+'\'';
    var contrasena = '\''+req.body.contrasena+'\'';
    var query = 'SELECT correo,nombreCompleto FROM Usuario WHERE correo='+correo+' AND contrasena='+contrasena;
    con.query(query,function(error,resultado){
      if(error){
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.send(JSON.stringify("Error en el servidor"));
        res.end();
      }else{
        if(resultado.length > 0){
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          res.send(JSON.stringify(resultado));
          res.end();
        }else{
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 401;
          res.send(JSON.stringify("Error: No existe un usuario con esa contraseña"));
          res.end();
        }
      }
    });
  });
};
