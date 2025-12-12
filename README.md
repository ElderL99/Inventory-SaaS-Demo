# 📦 Inventory SaaS Demo

Demo funcional de un **SaaS de gestión de inventario**, construido con **Next.js (App Router) y TypeScript**, enfocado en mostrar **arquitectura real, UX profesional y diseño mobile-first**, listo para conectarse a un backend en el futuro.

Este proyecto está pensado como **demo comercial** para presentar a clientes.

---

## 🚀 Características principales

- ✅ Dashboard con métricas generales
- 📦 Gestión de productos
- ➕ Registro de **Entradas**
- ➖ Registro de **Salidas**
- 📊 Stock calculado dinámicamente a partir de movimientos
- 👤 Registro de usuario, fecha y hora en cada movimiento
- 🪟 Modales para creación de registros
- 📱 **Mobile-first** (sm / md / lg)
- 📋 Tablas responsivas con scroll interno
- 🧠 Store en memoria simulando backend
- 🧱 Arquitectura lista para API real

---

## 🧠 Concepto de stock (importante)

El stock **NO se modifica directamente** en los productos.

Se calcula dinámicamente a partir de:

- stock inicial
- entradas
- salidas

Esto replica el comportamiento de un **sistema real de inventarios**.

---

## 🛠️ Tecnologías usadas

- **Next.js 16** (App Router)
- **TypeScript**
- **React**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide Icons**
- **clsx**
- **uuid**

---

## 📁 Estructura del proyecto

```
/app
  /dashboard
    layout.tsx
    page.tsx
    /products
    /entries
    /exits

/src
  /components
    /layout
    /ui
  /DB          # Datos mock iniciales (seed)
  /lib
    store.ts   # Store en memoria (backend simulado)
    inventory.ts
```

---

## 📱 Mobile-First

El proyecto está diseñado **desde móvil hacia desktop**:

- Mobile: layout compacto, scroll interno en tablas
- Tablet: más columnas visibles
- Desktop: vista completa del dashboard

Se evita el scroll horizontal global, manteniendo una UX limpia.

---

## ▶️ Instalación y uso

```bash
git clone <repo-url>
cd inventory-saas-demo
npm install
npm run dev
```

Luego abre:

```
http://localhost:3000/dashboard
```

---

## 🧩 Estado actual

✔ Demo funcional  
✔ UI lista para mostrar a clientes  
✔ Arquitectura preparada para backend real  
❌ Persistencia (por ahora en memoria)

---

## 🔮 Próximos pasos (planeados)

- Persistencia en `localStorage` o backend
- Autenticación de usuarios
- Roles (admin / user)
- Exportación a Excel / PDF
- API real (Express / NestJS)

---

## 📌 Nota

Este proyecto es una **demo técnica y visual**.  
Los datos se almacenan en memoria y se reinician al recargar la página.

---

## 👨‍💻 Autor

**LC Inova**  
Desarrolladora de software
Proyecto creado como base para SaaS comerciales y demostraciones a clientes.
