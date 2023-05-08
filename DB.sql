CREATE DATABASE CorreoDB;

USE CorreoDB;

CREATE TABLE Usuario(
  correo varchar(50) PRIMARY KEY,
  nombreCompleto varchar(50) NOT NULL,
  contrasena varchar(50) NOT NULL
);

CREATE TABLE Correo(
  idCorreo int AUTO_INCREMENT PRIMARY KEY,
  asunto varchar(50),
  contenido text,
  usuarioEnvia varchar(50),
  FOREIGN KEY (usuarioEnvia) REFERENCES Usuario(correo)
);

CREATE TABLE UsuarioRecibeCorreo(
  correoUsuario varchar(50),
  idCorreo int,
  PRIMARY KEY(correoUsuario,idCorreo),
  FOREIGN KEY (correoUsuario) REFERENCES Usuario(correo),
  FOREIGN KEY (idCorreo) REFERENCES Correo(idCorreo)
);

ALTER TABLE Correo ADD enviado bit;

CREATE TABLE Imagen(
  idImagen int AUTO_INCREMENT PRIMARY KEY,
  url varchar(100) NOT NULL,
  idCorreo int,
  FOREIGN KEY (idCorreo) REFERENCES Correo(idCorreo)
);
