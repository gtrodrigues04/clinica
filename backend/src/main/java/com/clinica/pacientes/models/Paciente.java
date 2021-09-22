package com.clinica.pacientes.models;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Getter
@Setter
@Entity
@Table(name = "tb_pacientes")
public class Paciente {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column
    @NonNull
    private String CPF; 

    @Column
    @NonNull
    LocalDate date_nasc;

    @Column 
    @NonNull
    String Nome;

    @Column
    @NonNull
    Double Peso;

    @Column 
    @NonNull
    Double Altura;
}
