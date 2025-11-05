package com.bdproject.hespinoza.hesp.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.bdproject.hespinoza.hesp.model.entity.Prestamo;
import com.bdproject.hespinoza.hesp.service.PrestamoService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*") 
public class PrestamoController {

    private final PrestamoService prestamoService;

    public PrestamoController(PrestamoService prestamoService) {
        this.prestamoService = prestamoService;
    }

    @GetMapping
    public List<Prestamo> listar() {
        return prestamoService.findAll();
    }

    @PostMapping("/prestamos")
    public ResponseEntity<?> registrarPrestamo(@RequestBody Prestamo p) {
        try {
            Prestamo nuevo = prestamoService.registrarPrestamo(p);
            return ResponseEntity.ok(nuevo);
        } catch (RuntimeException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @PutMapping("/devolver/{id}")
    public ResponseEntity<?> devolver(@PathVariable Integer id) {
        try {
            Prestamo devuelto = prestamoService.registrarDevolucion(id);
            return ResponseEntity.ok(devuelto);
        } catch (RuntimeException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        prestamoService.findById(id).ifPresent(prestamoService::delete);
        return ResponseEntity.ok("Préstamo eliminado correctamente.");
    }

/*
    @Autowired
    private PrestamoService prestamoService;

    @GetMapping("/list_prestamo")
    public List<Prestamo> listarTodos(){
        return prestamoService.findAll();
    }

    @GetMapping("/list_prestamo/{id}")
    public Optional<Prestamo> obtenerPorId(@PathVariable Integer id){
        return prestamoService.findById(id);
    }

    @PostMapping("/create_prestamo")
    public Prestamo createPrestamo(@RequestBody Prestamo prestId){
        if (prestId.getIdPrestamo() != null) {
            return null;
        } else {
            return prestamoService.guardar(prestId);
        }
    }
 */
}
   