package com.clinica.pacientes.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;


@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Getter
@Setter
@Entity
@Table(name = "tb_enfermeiro")
public class Enfermeiro {
   

    @Column
    @NonNull
    private String nome;
    
    @Id
    @PrimaryKeyJoinColumn
    @Column(unique = true)
    private String CPF;
    
    @Column
    @NonNull
    private String senha;
}
