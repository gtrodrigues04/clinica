package com.clinica.pacientes.repository;


import java.util.Optional;

import com.clinica.pacientes.models.Medico;

import org.springframework.data.jpa.repository.JpaRepository;


public interface MedicoRepository extends JpaRepository<Medico, String> {
    
    public Optional<Medico> findByCPF(String CPF);
}
