create database controle_embalagens;

use controle_embalagens;

create table emabalagem {
    id_embalagem int primary key auto_increment,
    descricao varchar(200),
    material varchar(150),
    capacidade varchar(100)
};

create table maquina {
    id_maquina int primary key auto_increment,
    nome varchar(150),
    patrimonio varchar(150) not null,
    status_maquina varchar(150)
};

create table operador {
    id_operador int primary key auto_increment,
    nome varchar(150),
    matricula varchar(150),
    turno varchar(150)
};