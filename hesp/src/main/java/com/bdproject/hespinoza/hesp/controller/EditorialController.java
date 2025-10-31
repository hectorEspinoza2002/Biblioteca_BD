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

import com.bdproject.hespinoza.hesp.model.entity.Editorial;
import com.bdproject.hespinoza.hesp.service.EditorialService;

@RestController
@CrossOrigin(origins = "*") 
public class EditorialController {

    @Autowired
    private EditorialService editorialService;

    @GetMapping("/list_editorial")
    public List<Editorial> listarTodos() {
        return editorialService.findAll();
    }

    @GetMapping("/list_editorial/{id}")
    public Optional<Editorial> obtenerPorId(@PathVariable Integer id) {
        return editorialService.findById(id);
    }

    @PostMapping("/create_editorial")
    public Editorial createEditorial(@RequestBody Editorial edit) {
        if (edit.getIdEditorial() != null ) {
            return null;
        } else {
            //Usuario
            //sucId.setUsuarioCreacion(LoginRequest.getUsuarioLogueado());
            //Fecha
            //sucId.setFechaCreacion(LocalDateTime.now());
            return editorialService.guardar(edit);
        }

    }

    @PutMapping("/update_editorial/{id}")
    public Editorial updateEditorial(@PathVariable("id") Integer sId, @RequestBody Editorial updateEditorial){
        Optional<Editorial> optEdit = editorialService.findById(sId);
        if (optEdit.isPresent()) {
            Editorial e = optEdit.get();
            e.setNombre(updateEditorial.getNombre());
            e.setPais(updateEditorial.getPais());
            //Actualizamos usuario
            //scl.setUsuarioModificacion(LoginRequest.getUsuarioLogueado());
            //Acuatlizamos la hora
            //scl.setFechaModificacion(LocalDateTime.now());
            return editorialService.guardar(e);
        } else {
            return null;
        }
    }

    @DeleteMapping("/delete_editorial/{sId}")
    public void deleteSucursal(@PathVariable("sId") Integer Id){
        Optional<Editorial> sOption = editorialService.findById(Id);
        sOption.ifPresent(editorialService::delete);
    }

}
