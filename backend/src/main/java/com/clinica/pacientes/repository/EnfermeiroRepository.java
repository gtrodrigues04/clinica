package com.clinica.pacientes.repository;


import java.util.Optional;

import com.clinica.pacientes.models.Enfermeiro;

import org.springframework.data.jpa.repository.JpaRepository;


public interface EnfermeiroRepository extends JpaRepository<Enfermeiro, String> {
    
    public Optional<Enfermeiro> findByLogin(String Login);
    public Optional<Enfermeiro> findBySenha(String Senha);
}
