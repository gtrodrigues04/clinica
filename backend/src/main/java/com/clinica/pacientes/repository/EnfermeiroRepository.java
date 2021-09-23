package com.clinica.pacientes.repository;


import com.clinica.pacientes.models.Enfermeiro;

import org.springframework.data.jpa.repository.JpaRepository;


public interface EnfermeiroRepository extends JpaRepository<Enfermeiro, String> {
    
}
