package com.bdproject.hespinoza.hesp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bdproject.hespinoza.hesp.model.entity.Usuario;
import com.bdproject.hespinoza.hesp.model.repository.UsuarioRepository;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepo;

    public UsuarioService(UsuarioRepository eRepo) {
        this.usuarioRepo = eRepo;
    }

    public List<Usuario> findAll() {
        return usuarioRepo.findAll();
    }

    public Optional<Usuario> findById(Integer id) {
        return usuarioRepo.findById(id);
    }

    public Usuario guardar(Usuario us) {
        return usuarioRepo.save(us);
    }

    public void delete(Usuario ud) {
        usuarioRepo.delete(ud);
    }

    /*

    public boolean validarLogin(String idUsuario, String password) {
        System.out.println("Intentos de login para: " + idUsuario);
        Optional<Usuario> usuarioOpt = usuarioRepo.findById(idUsuario);

        if (usuarioOpt.isEmpty()) {
            return false;
        }

        Usuario usuario = usuarioOpt.get();
        System.out.println("Status usuario: " + usuario.getIdStatusUsuario().getIdStatusUsuario());
        System.out.println("Intentos: " + usuario.getIntentosDeAcceso());

        // 🔹 Validar si ya está bloqueado
        if (usuario.getIdStatusUsuario() != null
                && usuario.getIdStatusUsuario().getIdStatusUsuario() == 2) {
            System.out.println("Usuario " + idUsuario + " ya está bloqueado");
            return false;
        }

        // obtenemos la empresa desde la sucursal
        Empresa empresa = usuario.getIdSucursal().getEmpresa();
        int maxIntentos = empresa.getPasswordIntentosAntesDeBloquear() != null
                ? empresa.getPasswordIntentosAntesDeBloquear()
                : 5;

        String passwordEncriptado = encriptarPassword(password);

        // 🔹 Si la contraseña es correcta
        if (passwordEncriptado.equals(usuario.getPassword())) {
            usuario.setIntentosDeAcceso(0); // resetear intentos
            usuarioRepo.save(usuario);
            return true;
        }

        // 🔹 Si la contraseña es incorrecta
        int intentos = usuario.getIntentosDeAcceso() == null ? 0 : usuario.getIntentosDeAcceso();
        usuario.setIntentosDeAcceso(intentos + 1);

        // validar contra el numero de intentos configurado en empresa
        if (usuario.getIntentosDeAcceso() >= maxIntentos) {
            StatusUsuario statusBloqueado = statusUsuarioService.obtenerStatusPorId(2);
            usuario.setIdStatusUsuario(statusBloqueado);
            System.out.println("Usuario " + idUsuario + " ha sido bloqueado por intentos fallidos");
        }

        usuarioRepo.save(usuario);
        return false;
    }
         */

}
