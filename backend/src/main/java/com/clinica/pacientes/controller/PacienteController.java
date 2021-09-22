package com.clinica.pacientes.controller;

import java.util.List;
import java.util.Optional;

import com.clinica.pacientes.models.Paciente;
import com.clinica.pacientes.repository.PacienteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/pacientes")
public class PacienteController {
    
    @Autowired
    private PacienteRepository pacienteRepository;

    @GetMapping
    public List<Paciente> listar() {
        return pacienteRepository.findAll();
    }

    @GetMapping("/{pacienteId}")
    public ResponseEntity<Paciente> found(@PathVariable Long pacienteId) {
        Optional<Paciente> paciente = pacienteRepository.findById(pacienteId);

        if(paciente.isPresent()) {
            return ResponseEntity.ok(paciente.get());
        }

        return ResponseEntity.notFound().build();
    } 

    @PutMapping("/{pacienteId}")
    public ResponseEntity<Paciente> atualizar(@PathVariable Long pacienteId, @RequestBody Paciente paciente) {
        if (!pacienteRepository.existsById(pacienteId)) {
            return ResponseEntity.notFound().build();
        }

        paciente.setId(pacienteId);
        paciente = pacienteRepository.save(paciente);
        
        return ResponseEntity.ok(paciente);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Paciente adicionar(@RequestBody Paciente paciente) {
        return pacienteRepository.save(paciente);
    }

    @DeleteMapping("/{pacienteId}")
    public ResponseEntity<Void> remove(@PathVariable Long pacienteId) {
        if (!pacienteRepository.existsById(pacienteId)) {
            return ResponseEntity.notFound().build();
        };

        pacienteRepository.deleteById(pacienteId);

        return ResponseEntity.noContent().build();
    }
}
