package com.clinica.pacientes.controller;

import java.util.List;
import java.util.Optional;

import com.clinica.pacientes.models.Enfermeiro;
import com.clinica.pacientes.repository.EnfermeiroRepository;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/enfermeiros")
public class EnfermeiroController {
    
    @Autowired
    private EnfermeiroRepository enfermeiroRepository;
    private final PasswordEncoder encoder;

    @GetMapping
    public List<Enfermeiro> listar() {
        return enfermeiroRepository.findAll();
    }

    @GetMapping("/{enfermeiroId}")
    public ResponseEntity<Enfermeiro> found(@PathVariable String enfermeiroId) {
        Optional<Enfermeiro> enfermeiro = enfermeiroRepository.findById(enfermeiroId);

        if(enfermeiro.isPresent()) {
            return ResponseEntity.ok(enfermeiro.get());
        }

        return ResponseEntity.notFound().build();
    } 

    @PutMapping("/{enfermeiroId}")
    public ResponseEntity<Enfermeiro> atualizar(@PathVariable String enfermeiroId, @RequestBody Enfermeiro enfermeiro) {
        if (!enfermeiroRepository.existsById(enfermeiroId)) {
            return ResponseEntity.notFound().build();
        }

        enfermeiro.setLogin(enfermeiroId);
        enfermeiro = enfermeiroRepository.save(enfermeiro);
        
        return ResponseEntity.ok(enfermeiro);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Enfermeiro adicionar(@RequestBody Enfermeiro enfermeiro) {
        enfermeiro.setCPF(encoder.encode(enfermeiro.getCPF()));
        enfermeiro.setSenha(encoder.encode(enfermeiro.getSenha()));
        return enfermeiroRepository.save(enfermeiro);
    }

    @DeleteMapping("/{enfermeiroId}")
    public ResponseEntity<Void> remove(@PathVariable String enfermeiroId) {
        if (!enfermeiroRepository.existsById(enfermeiroId)) {
            return ResponseEntity.notFound().build();
        };

        enfermeiroRepository.deleteById(enfermeiroId);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/validarSenha") 
    public ResponseEntity<Boolean> validarSenha(@RequestParam String login,
                                                @RequestParam String senha) {
        Optional<Enfermeiro> optLogin = enfermeiroRepository.findByLogin(login);
        if (optLogin.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
        }

        Enfermeiro enfermeiro= optLogin.get();
        boolean valid = encoder.matches(senha, enfermeiro.getSenha());
 
        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(valid);
    }
}