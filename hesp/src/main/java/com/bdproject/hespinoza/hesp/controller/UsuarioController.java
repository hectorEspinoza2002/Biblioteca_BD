package com.bdproject.hespinoza.hesp.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bdproject.hespinoza.hesp.model.entity.RolUsuario;
import com.bdproject.hespinoza.hesp.model.entity.Usuario;
import com.bdproject.hespinoza.hesp.service.UsuarioService;

@RestController
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/list_usuario")
    public List<Usuario> listarTodos() {
        return usuarioService.findAll();
    }

    @GetMapping("/list_usuario/{id}")
    public Optional<Usuario> obtenerPorId(@PathVariable Integer id) {
        return usuarioService.findById(id);
    }

    @PostMapping("/create_usuario")
    public Usuario createUsuario(@RequestBody Usuario usId) {
        if (usId.getIdUsuario() != null && usuarioService.findById(usId.getIdUsuario()).isPresent()) {
            return null;
        } else {
            usId.setFechaCreacion(LocalDate.now());
            return usuarioService.guardar(usId);
        }
    }

    @PutMapping("/update_usuario/{id}")
    public Usuario updateUsuario(@PathVariable("id") Integer sId, @RequestBody Usuario updUs) {
        Optional<Usuario> optionSuc = usuarioService.findById(sId);
        if (optionSuc.isPresent()) {
            Usuario us = optionSuc.get();
            us.setCarne(updUs.getCarne());
            us.setNombre(updUs.getNombre());
            us.setEmail(updUs.getEmail());
            us.setCarrera(updUs.getCarrera());
            us.setRol(updUs.getRol());
            us.setFechaCreacion(updUs.getFechaCreacion());
            us.setPassword(updUs.getPassword());
            return usuarioService.guardar(us);
        } else {
            return null;
        }
    }

    @DeleteMapping("/delete_usuario/{sId}")
    public void deleteUsuario(@PathVariable("sId") Integer Id) {
        Optional<Usuario> sOption = usuarioService.findById(Id);
        sOption.ifPresent(usuarioService::delete);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Usuario nuevoUsuario) {
        try {
            // Asignar rol "ESTUDIANTE" automáticamente
            RolUsuario rolEstudiante = new RolUsuario();
            rolEstudiante.setIdRol(1); // ID del rol ESTUDIANTE
            nuevoUsuario.setRol(rolEstudiante);

            nuevoUsuario.setFechaCreacion(LocalDate.now());
            // Aquí puedes aplicar hash a la contraseña si deseas (por ahora texto plano)
            return ResponseEntity.ok(usuarioService.guardar(nuevoUsuario));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error al registrar usuario: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credenciales) {
        String email = credenciales.get("email");
        String password = credenciales.get("password");

        if (email == null || password == null) {
            return ResponseEntity.badRequest().body("Faltan campos requeridos");
        }

        Optional<Usuario> usuarioOpt = usuarioService.findByEmail(email.trim().toLowerCase());
        if (usuarioOpt.isPresent()) {
            Usuario usuario = usuarioOpt.get();
            if (usuario.getPassword().equals(password)) {
                return ResponseEntity.ok(usuario);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña incorrecta");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
        }
    }

}
