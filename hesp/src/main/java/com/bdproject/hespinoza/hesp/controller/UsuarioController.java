package com.bdproject.hespinoza.hesp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bdproject.hespinoza.hesp.model.entity.Usuario;
import com.bdproject.hespinoza.hesp.service.UsuarioService;

@RestController
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
        if (usId.getIdUsuario() != null) {
            return null;
        } else {
            //Usuario
            //usId.setUsuarioCreacion(LoginRequest.getUsuarioLogueado());
            //Fecha
            //sucId.setFechaCreacion(LocalDateTime.now());
            return usuarioService.guardar(usId);
        }

    }

    @PutMapping("/update_usuario/{id}")
    public Usuario updateUsuario(@PathVariable("id") Integer sId, @RequestBody Usuario updUs){
        Optional<Usuario> optionSuc = usuarioService.findById(sId);
        if (optionSuc.isPresent()) {
            Usuario us = optionSuc.get();
            us.setCarne(updUs.getCarne());
            us.setNombre(updUs.getNombre());
            us.setEmail(updUs.getEmail());
            us.setCarrera(updUs.getCarrera());
            us.setRol(updUs.getRol());
            us.setFechaRegistro(updUs.getFechaRegistro());
            us.setPassword(updUs.getPassword());
            //Actualizamos usuario
            //scl.setUsuarioModificacion(LoginRequest.getUsuarioLogueado());
            //Acuatlizamos la hora
            //scl.setFechaModificacion(LocalDateTime.now());
            return usuarioService.guardar(us);
        } else {
            return null;
        }
    }

    @DeleteMapping("/delete_usuario/{sId}")
    public void deleteUsuario(@PathVariable("sId") Integer Id){
        Optional<Usuario> sOption = usuarioService.findById(Id);
        sOption.ifPresent(usuarioService::delete);
    }

}
