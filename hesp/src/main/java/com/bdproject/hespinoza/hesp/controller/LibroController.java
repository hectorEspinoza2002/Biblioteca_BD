package com.bdproject.hespinoza.hesp.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.bdproject.hespinoza.hesp.model.entity.Libro;
import com.bdproject.hespinoza.hesp.service.LibroService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
//@RequestMapping("/metroproyectos/estado")
@CrossOrigin(origins = "*") 
public class LibroController {

    @Autowired
    private LibroService libroService;

    @GetMapping("/list_libro")
    public List<Libro> listarTodos() {
        return libroService.findAll();
    }

    @GetMapping("/list_libro/{id}")
    public Optional<Libro> obtenerPorId(@PathVariable Integer id){
        return libroService.findById(id);
    }

    @PostMapping("/create_libro")
    public Libro createLibro(@RequestBody Libro libId){
        if (libId.getIdLibro() != null && libroService.findById(libId.getIdLibro()).isPresent()) {
            return null;
        } else {
            libId.setFechaCreacion(LocalDateTime.now());
            return libroService.guardar(libId);
        }
    }

    @PutMapping("/update_libro/{id}")
    public Libro updateLibro(@PathVariable("id") Integer libroId, @RequestBody Libro updateLibro){
        Optional<Libro> optionLib = libroService.findById(libroId);
        if (optionLib.isPresent()) {
            Libro lb = optionLib.get();
            //lb.setIdLibro(updateLibro.getIdLibro());
            lb.setIsbn(updateLibro.getIsbn());
            lb.setTitulo(updateLibro.getTitulo());
            lb.setAnioPublicacion(updateLibro.getAnioPublicacion());
            lb.setFotografia(updateLibro.getFotografia());
            lb.setEditorial(updateLibro.getEditorial());
            lb.setSerie(updateLibro.getSerie());
            return libroService.guardar(lb);
        } else {
            return null;
        }
    }

    @DeleteMapping("/delete_libro/{libId}")
    public void deleteLibro(@PathVariable("libId") Integer id){
        Optional<Libro> opLib = libroService.findById(id);
        opLib.ifPresent(libroService::delete);
    }
    

}
