package com.clinica.pacientes.controller;

import java.util.List;
import java.util.Optional;

import com.clinica.pacientes.models.Medico;
import com.clinica.pacientes.repository.MedicoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
@RequestMapping("/medicos")
public class MedicoController {
   
   
    @Autowired
    private MedicoRepository medicoRepository;
    private final PasswordEncoder encoder; 

    @GetMapping
    public List<Medico> listar() {
        return medicoRepository.findAll();
    }

    @GetMapping("/{medicoId}")
    public ResponseEntity<Medico> found(@PathVariable String medicoId) {
        Optional<Medico> medico = medicoRepository.findById(medicoId);

        if(medico.isPresent()) {
            return ResponseEntity.ok(medico.get());
        }

        return ResponseEntity.notFound().build();
    } 

    @PutMapping("/{medicoId}")
    public ResponseEntity<Medico> atualizar(@PathVariable String medicoId, @RequestBody Medico medico) {
        if (!medicoRepository.existsById(medicoId)) {
            return ResponseEntity.notFound().build();
        }

        medico.setCPF(medicoId);
        medico = medicoRepository.save(medico);
        
        return ResponseEntity.ok(medico);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Medico adicionar(@RequestBody Medico medico) {
        medico.setSenha(encoder.encode(medico.getSenha()));
        medico.setCPF(encoder.encode(medico.getCPF()));
        return medicoRepository.save(medico);
    }

    @DeleteMapping("/{medicoId}")
    public ResponseEntity<Void> remove(@PathVariable String medicoId) {
        if (!medicoRepository.existsById(medicoId)) {
            return ResponseEntity.notFound().build();
        };

        medicoRepository.deleteById(medicoId);

        return ResponseEntity.noContent().build();
    }
}