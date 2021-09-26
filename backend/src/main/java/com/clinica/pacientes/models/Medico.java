package com.clinica.pacientes.models;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;


import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;



@Getter
@Setter
@Entity
@Table(name = "tb_medicos")
public class Medico {
   
    @Id
    @PrimaryKeyJoinColumn
    private String login;

    @NonNull
    @Column
    private String nome;
    
    @NonNull
    @Column
    private String CPF;
    
    @NonNull
    @Column
    private String senha;
}
