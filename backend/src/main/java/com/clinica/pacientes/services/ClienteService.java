package com.clinica.pacientes.services;

import java.util.List;
import java.util.stream.Collectors;

import com.clinica.pacientes.dto.PacienteDTO;
import com.clinica.pacientes.models.Paciente;
import com.clinica.pacientes.repository.PacienteRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class ClienteService {
    
    @Autowired
    private PacienteRepository repository;

    public List<PacienteDTO> findAll() {
        List<Paciente> result = repository.findAll();
        return result.stream().map(x-> new PacienteDTO(x)).collect(Collectors.toList());
    }
}
