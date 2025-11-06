package com.bdproject.hespinoza.hesp.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bdproject.hespinoza.hesp.model.entity.EstadoPrestamo;
import com.bdproject.hespinoza.hesp.model.entity.Libro;
import com.bdproject.hespinoza.hesp.model.entity.Prestamo;
import com.bdproject.hespinoza.hesp.model.repository.EstadoPrestamoRepository;
import com.bdproject.hespinoza.hesp.model.repository.LibroRepository;
import com.bdproject.hespinoza.hesp.model.repository.PrestamoRepository;

import jakarta.transaction.Transactional;

@Service
public class PrestamoService {

    private final PrestamoRepository prestamoRepo;
    private final LibroRepository libroRepo;
    private final EstadoPrestamoRepository estadoRepo;

    public PrestamoService(PrestamoRepository presRepo, LibroRepository libroRepo,
            EstadoPrestamoRepository estadoRepo) {
        this.prestamoRepo = presRepo;
        this.libroRepo = libroRepo;
        this.estadoRepo = estadoRepo;
    }

    public List<Prestamo> findAll() {
        return prestamoRepo.findAll();
    }

    public Optional<Prestamo> findById(Integer id) {
        return prestamoRepo.findById(id);
    }

    /*
     * public List<Prestamo> findByUsuarioId(Integer idUsuario) {
     * return prestamoRepo.findByUsuarioIdUsuario(idUsuario);
     * }
     */

    public Prestamo guardar(Prestamo p) {
        return prestamoRepo.save(p);
    }

    public void delete(Prestamo pe) {
        prestamoRepo.delete(pe);
    }

    // 🟢 Método completo para registrar un préstamo
    @Transactional
    public Prestamo registrarPrestamo(Prestamo p) {
        Libro libro = libroRepo.findById(p.getLibro().getIdLibro())
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
            cal.add(Calendar.DAY_OF_MONTH, 3);
            p.setFechaDevolucionPrevista(cal.getTime());
            // p.setFechaDevolucionPrevista(cal.getTime());
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
        Libro libro = prestamo.getLibro();
        libro.setEjemplaresDisponibles(libro.getEjemplaresDisponibles() + 1);
        libroRepo.save(libro);

        return prestamoRepo.save(prestamo);
    }

    public List<Prestamo> findByUsuarioId(Integer idUsuario) {
        List<Prestamo> prestamos = prestamoRepo.findByUsuarioIdUsuario(idUsuario);

        EstadoPrestamo activo = estadoRepo.findByNombre("Activo");
        EstadoPrestamo devuelto = estadoRepo.findByNombre("Devuelto");
        EstadoPrestamo atrasado = estadoRepo.findByNombre("Atrasado");

        LocalDate hoy = LocalDate.now();

        for (Prestamo p : prestamos) {
            if (p.getFechaDevolucionReal() != null) {
                p.setEstado(devuelto);
            } else if (p.getFechaDevolucionPrevista().toInstant()
                    .atZone(ZoneId.systemDefault())
                    .toLocalDate()
                    .isBefore(hoy)) {
                p.setEstado(atrasado);
            } else {
                p.setEstado(activo);
            }
        }

        // Guardamos los posibles cambios
        prestamoRepo.saveAll(prestamos);
        return prestamos;
    }

}
