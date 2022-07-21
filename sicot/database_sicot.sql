CREATE DATABASE sicot;

USE sicot;

CREATE TABLE rol(
    idRol TINYINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    CONSTRAINT pk_rol_id PRIMARY KEY(idRol)
);


CREATE TABLE person(
    idPerson INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(50) NOT NULL,
      lastName VARCHAR(50) NOT NULL,
      CONSTRAINT pk_person_id PRIMARY KEY(idPerson)
);

CREATE TABLE user(
    idUser INT NOT NULL AUTO_INCREMENT,
    user VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    rol TINYINT NOT NULL,
    person INT NOT NULL,
    CONSTRAINT pk_user_id PRIMARY KEY(idUser),
    FOREIGN KEY (rol) REFERENCES rol(idRol),
    FOREIGN KEY (person) REFERENCES person(idPerson)
);


CREATE TABLE periodo(
    idPeriodo TINYINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    CONSTRAINT pk_periodo_id PRIMARY KEY(idPeriodo)
);

CREATE  TABLE tablaIsr(
    idIsr INT NOT NULL AUTO_INCREMENT,
    limiteI DOUBLE(11,2),
    limiteS DOUBLE(11,2) NOT NULL,
    cuota DOUBLE(11,2) NOT NULL,
    excedente DOUBLE(11,2) NOT NULL,
    periodo TINYINT NOT NULL,
    CONSTRAINT pk_tablaIsr_id PRIMARY KEY(idIsr),
    FOREIGN KEY (periodo) REFERENCES periodo(idPeriodo)
);

CREATE TABLE subsidio(
    idSubsidio INT NOT NULL AUTO_INCREMENT,
    limInf DOUBLE(11,2) NOT NULL,
    limSup DOUBLE(11,2) NOT NULL,
    cuota DOUBLE(11,2) NOT NULL,
    periodo TINYINT NOT NULL,
    CONSTRAINT pk_subsidio_id PRIMARY KEY(idSubsidio),
    FOREIGN KEY (periodo) REFERENCES periodo(idPeriodo)
);

CREATE TABLE entidad(
    idEntidad TINYINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    CONSTRAINT pk_entidad_id PRIMARY KEY(idEntidad)
);

CREATE TABLE empresa(
    idEmpresa INT NOT NULL AUTO_INCREMENT,
    razon VARCHAR(50) NOT NULL,
    rfc VARCHAR(50) NOT NULL,
    regPat VARCHAR(50) NOT NULL,
    prima DOUBLE(11,5) NOT NULL,
    entidad TINYINT NOT NULL,
    impNom DOUBLE(11,2) NOT NULL,
    CONSTRAINT pk_empresa_id PRIMARY KEY(idEmpresa),
    FOREIGN KEY (entidad) REFERENCES entidad(idEntidad)
);

INSERT INTO rol(idRol, name) VALUES (1,'admin');
INSERT INTO rol(idRol, name) VALUES (2,'person');


INSERT INTO entidad(name) VALUE ('Aguascalientes');
INSERT INTO entidad(name) VALUE ('Baja California');
INSERT INTO entidad(name) VALUE ('Baja California Sur');
INSERT INTO entidad(name) VALUE ('Campeche');
INSERT INTO entidad(name) VALUE ('Chiapas');
INSERT INTO entidad(name) VALUE ('Chihuahua');
INSERT INTO entidad(name) VALUE ('CDMX');
INSERT INTO entidad(name) VALUE ('Coahuila');
INSERT INTO entidad(name) VALUE ('Colima');
INSERT INTO entidad(name) VALUE ('Durango');
INSERT INTO entidad(name) VALUE ('Guanajuato');
INSERT INTO entidad(name) VALUE ('Guerrero');
INSERT INTO entidad(name) VALUE ('Hidalgo');
INSERT INTO entidad(name) VALUE ('Jalisco');
INSERT INTO entidad(name) VALUE ('México');
INSERT INTO entidad(name) VALUE ('Michoacán');
INSERT INTO entidad(name) VALUE ('Morelos');
INSERT INTO entidad(name) VALUE ('Nayarit');
INSERT INTO entidad(name) VALUE ('Nuevo León');
INSERT INTO entidad(name) VALUE ('Oaxaca');
INSERT INTO entidad(name) VALUE ('Puebla');
INSERT INTO entidad(name) VALUE ('Querétaro');
INSERT INTO entidad(name) VALUE ('Quintana Roo');
INSERT INTO entidad(name) VALUE ('San Luis Potosí');
INSERT INTO entidad(name) VALUE ('Sinaloa');
INSERT INTO entidad(name) VALUE ('Sonora');
INSERT INTO entidad(name) VALUE ('Tabasco');
INSERT INTO entidad(name) VALUE ('Tamaulipas');
INSERT INTO entidad(name) VALUE ('Tlaxcala');
INSERT INTO entidad(name) VALUE ('Veracruz');
INSERT INTO entidad(name) VALUE ('Yucatan');
INSERT INTO entidad(name) VALUE ('Zacatecas');


INSERT INTO person(name, lastName) VALUES ('Marcos','Bailón');


INSERT INTO user(user, password, rol, person) VALUES ('sigamex@sigamex.com','sigamex',1,1);