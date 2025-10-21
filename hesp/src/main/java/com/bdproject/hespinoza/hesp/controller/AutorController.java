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

import com.bdproject.hespinoza.hesp.model.entity.Autor;
import com.bdproject.hespinoza.hesp.service.AutorService;

@RestController
public class AutorController {

    @Autowired
    private AutorService autorService;

    @GetMapping("/list_autor")
    public List<Autor> listarTodos() {
        return autorService.findAll();
    }

    @GetMapping("/list_autor/{id}")
    public Optional<Autor> obtenerPorId(@PathVariable Integer id) {
        return autorService.findById(id);
    }

    @PostMapping("/create_autor")
    public Autor createAutor(@RequestBody Autor autor) {
        if (autor.getIdAutor() != null) {
            return null;
        } else {
            //Usuario
            //autor.setUsuarioCreacion(LoginRequest.getUsuarioLogueado());
            //Fecha
            //autor.setFechaCreacion(LocalDateTime.now());
            return autorService.guardar(autor);
        }

    }

    @PutMapping("/update_autor/{id}")
    public Autor updateSucursal(@PathVariable("id") Integer sId, @RequestBody Autor updateAutor){
        Optional<Autor> optAuto = autorService.findById(sId);
        if (optAuto.isPresent()) {
            Autor a = optAuto.get();
            
            a.setNombre(updateAutor.getNombre());
            a.setNacionalidad(updateAutor.getNacionalidad());
            a.setFechaNacimiento(updateAutor.getFechaNacimiento());
            
            //Actualizamos usuario
            //scl.setUsuarioModificacion(LoginRequest.getUsuarioLogueado());
            //Acuatlizamos la hora
            //scl.setFechaModificacion(LocalDateTime.now());
            return autorService.guardar(a);
        } else {
            return null;
        }
    }

    @DeleteMapping("/delete_autor/{sId}")
    public void deleteSucursal(@PathVariable("sId") Integer Id){
        Optional<Autor> autOption = autorService.findById(Id);
        autOption.ifPresent(autorService::delete);
    }

}
