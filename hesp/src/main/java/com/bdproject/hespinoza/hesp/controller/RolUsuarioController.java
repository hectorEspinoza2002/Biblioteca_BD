package com.bdproject.hespinoza.hesp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bdproject.hespinoza.hesp.model.entity.RolUsuario;
import com.bdproject.hespinoza.hesp.service.RolUsuarioService;

@RestController
@CrossOrigin(origins = "*") 
public class RolUsuarioController {

    @Autowired
    private RolUsuarioService rolUsService;

    @GetMapping("/list_rol")
    public List<RolUsuario> listarTodos() {
        return rolUsService.findAll();
    }

    @GetMapping("/list_rol/{id}")
    public Optional<RolUsuario> obtenerPorId(@PathVariable Integer id) {
        return rolUsService.findById(id);
    }

    @PostMapping("/create_rol")
    public RolUsuario createRol(@RequestBody RolUsuario sucId) {
        if (sucId.getIdRol() != null && rolUsService.findById(sucId.getIdRol()).isPresent()) {
            return null;
        } else {
            //Usuario
            //sucId.setUsuarioCreacion(LoginRequest.getUsuarioLogueado());
            //Fecha
            //sucId.setFechaCreacion(LocalDateTime.now());
            return rolUsService.guardar(sucId);
        }

    }

    @PutMapping("/update_rol/{id}")
    public RolUsuario updateRol(@PathVariable("id") Integer sId, @RequestBody RolUsuario updateS){
        Optional<RolUsuario> optionSuc = rolUsService.findById(sId);
        if (optionSuc.isPresent()) {
            RolUsuario scl = optionSuc.get();
            scl.setNombreRol(updateS.getNombreRol());
            //Actualizamos usuario
            //scl.setUsuarioModificacion(LoginRequest.getUsuarioLogueado());
            //Acuatlizamos la hora
            //scl.setFechaModificacion(LocalDateTime.now());
            return rolUsService.guardar(scl);
        } else {
            return null;
        }
    }

    @DeleteMapping("/delete_rol/{sId}")
    public void deleteRol(@PathVariable("sId") Integer Id){
        Optional<RolUsuario> sOption = rolUsService.findById(Id);
        sOption.ifPresent(rolUsService::delete);
    }

}
