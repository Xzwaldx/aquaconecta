import React, { useState } from "react";
import "../Registration.css";

export default function Registration() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    password: "",
    confirm: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccess("");
  }

  function validate() {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Ingresa tu nombre completo";
    if (!form.address.trim()) next.address = "Ingresa tu direccion";
    if (!form.email.trim()) next.email = "Ingresa tu correo";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) next.email = "Correo no válido";

    if (!form.password) next.password = "Crea una contraseña";
    else if (form.password.length < 6) next.password = "Mínimo 6 caracteres";

    if (!form.confirm) next.confirm = "Confirma tu contraseña";
    else if (form.confirm !== form.password) next.confirm = "Las contraseñas no coinciden";

    if (!form.terms) next.terms = "Debes aceptar los Términos";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setSuccess("Cuenta creada correctamente.");
    setForm({ fullName: "", email: "", password: "", confirm: "", terms: false });
  }

  return (
    <div className="container">
      <h1>Registro de Usuario</h1>
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <input type="text" name="fullName" value={form.fullName} onChange={handleChange} />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <label>Correo electrónico</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Direccion</label>
        <input type="text" name="address" value={form.address} onChange={handleChange} />
        {errors.address && <p className="error">{errors.address}</p>}

        <label>Contraseña</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Confirmar contraseña</label>
        <input type="password" name="confirm" value={form.confirm} onChange={handleChange} />
        {errors.confirm && <p className="error">{errors.confirm}</p>}

        <div className="terms">
          <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
          <span>Acepto los términos y condiciones</span>
        </div>
        {errors.terms && <p className="error">{errors.terms}</p>}

        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
}