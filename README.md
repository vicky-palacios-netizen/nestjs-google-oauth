# TP: Autenticación OAuth2 con Google en NestJS

Microservicio backend desarrollado con **NestJS** que implementa el flujo completo de autenticación federada con **Google OAuth2**. El sistema autentica al usuario, persiste su información en una base de datos **SQLite** (vía Prisma ORM) y devuelve un **JWT** firmado para proteger rutas privadas.

---

## 🎯 Características

- Autenticación con **Google OAuth2** usando Passport.js.
- Persistencia híbrida: soporta usuarios locales (email/password) y federados (Google).
- Emisión de **JSON Web Token (JWT)** firmado tras login exitoso.
- Sin duplicación de usuarios: si el email ya existe, se vincula la cuenta de Google al registro existente.
- Arquitectura modular de NestJS (`AuthModule`, `UsersModule`, `PrismaModule`).
- Variables sensibles gestionadas con `.env` y `@nestjs/config`.

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| Node.js | 18+ | Runtime |
| NestJS | 11.x | Framework backend |
| Passport.js | 0.7+ | Estrategia OAuth2 |
| Prisma ORM | 6.x | Acceso a datos |
| SQLite | 3.x | Base de datos |
| JWT | 11.x | Firma de tokens |

---

## 📋 Requisitos previos

- **Node.js** v18 o superior.
- **npm**.
- Una cuenta de **Google**.
- Credenciales OAuth2 creadas en [Google Cloud Console](https://console.cloud.google.com/).

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/nestjs-google-oauth.git
cd nestjs-google-oauth
