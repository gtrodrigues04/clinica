package com.clinica.pacientes.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.clinica.pacientes.models.Paciente;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PacienteDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String Nome;
    private String CPF;
    private LocalDate Date_nasc;
    private Double Altura;
    private Double Peso;
    private String UF;

    public PacienteDTO() {

    }

    public PacienteDTO(Paciente entity) {
        id = entity.getId();
        Nome = entity.getNome();
        CPF = entity.getCPF();
        Date_nasc = entity.getDate_nasc();
        Altura = entity.getAltura();
        Peso = entity.getAltura();
        UF = entity.getUF();
    }
}
