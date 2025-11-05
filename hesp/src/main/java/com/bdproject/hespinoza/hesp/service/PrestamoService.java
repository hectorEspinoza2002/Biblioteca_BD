package com.bdproject.hespinoza.hesp.service;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bdproject.hespinoza.hesp.model.entity.Libro;
import com.bdproject.hespinoza.hesp.model.entity.Prestamo;
import com.bdproject.hespinoza.hesp.model.repository.LibroRepository;
import com.bdproject.hespinoza.hesp.model.repository.PrestamoRepository;

import jakarta.transaction.Transactional;

@Service
public class PrestamoService {

    private final PrestamoRepository prestamoRepo;
    private final LibroRepository libroRepo;

    public PrestamoService(PrestamoRepository presRepo, LibroRepository libroRepo) {
        this.prestamoRepo = presRepo;
        this.libroRepo = libroRepo;
    }

    public List<Prestamo> findAll() {
        return prestamoRepo.findAll();
    }

    public Optional<Prestamo> findById(Integer id) {
        return prestamoRepo.findById(id);
    }

    public Prestamo guardar(Prestamo p) {
        return prestamoRepo.save(p);
    }

    public void delete(Prestamo pe) {
        prestamoRepo.delete(pe);
    }

    // 🟢 Método completo para registrar un préstamo
    @Transactional
    public Prestamo registrarPrestamo(Prestamo p) {
        Libro libro = libroRepo.findById(p.getId_libro().getIdLibro())
                .orElseThrow(() -> new RuntimeException("Libro no encontrado."));

        // ✅ Verificar disponibilidad
        if (libro.getEjemplaresDisponibles() <= 0) {
            throw new RuntimeException("No hay ejemplares disponibles del libro: " + libro.getTitulo());
        }

        // 🔹 Configurar fechas automáticamente
        p.setFechaPrestamo(LocalDateTime.now());
        if (p.getFechaDevolucionPrevista() == null) {
            // Por ejemplo, se presta por 7 días
            Calendar cal = Calendar.getInstance();
            cal.add(Calendar.DAY_OF_MONTH, 15);
            p.setFechaDevolucionPrevista(cal.getTime());
            //p.setFechaDevolucionPrevista(cal.getTime());
        }

        // 🔹 Actualizar disponibilidad del libro
        libro.setEjemplaresDisponibles(libro.getEjemplaresDisponibles() - 1);
        libroRepo.save(libro);

        // 🔹 Guardar préstamo
        return prestamoRepo.save(p);
    }

    // 🟡 Registrar devolución
    @Transactional
    public Prestamo registrarDevolucion(Integer idPrestamo) {
        Prestamo prestamo = prestamoRepo.findById(idPrestamo)
                .orElseThrow(() -> new RuntimeException("Préstamo no encontrado."));

        if (prestamo.getFechaDevolucionReal() != null) {
            throw new RuntimeException("Este préstamo ya fue devuelto.");
        }

        // 🔹 Registrar fecha de devolución
        prestamo.setFechaDevolucionReal(new Date());

        // 🔹 Aumentar ejemplares disponibles
        Libro libro = prestamo.getId_libro();
        libro.setEjemplaresDisponibles(libro.getEjemplaresDisponibles() + 1);
        libroRepo.save(libro);

        return prestamoRepo.save(prestamo);
    }

}
