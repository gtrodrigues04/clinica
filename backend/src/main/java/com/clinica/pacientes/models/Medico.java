package com.clinica.pacientes.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;


@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Getter
@Setter
@Entity
@Table(name = "tb_medico")
public class Medico {
   

    @Column
    private String nome;
    
    @Id
    @PrimaryKeyJoinColumn
    @Column(unique=true)
    private String CPF;
    
    @Column
    private String senha;
}
