# TP de pruebas unitarias con Node.js y Jest

Abrí la guía `GUIA_TP.md` o el documento Word que acompaña este proyecto.

Requisitos: Node.js 22 o superior, npm y acceso a internet para instalar Jest.

Desde esta carpeta:

```sh
npm install
npm test
```

El primer test debe fallar porque las funciones de `src/tienda.js` están pendientes. Los `test.todo` son tareas que debés sustituir por pruebas reales.

Completá la implementación y las pruebas siguiendo los contratos y los casos de la guía. No hay una solución incluida en este proyecto.

Comandos útiles:

```sh
npm run test:watch
npm run test:coverage
```

Para la entrega, agregá a este README una breve explicación de lo que probaste, una falla que hayas provocado y cómo la corregiste. Incluí `package-lock.json`, que se genera al instalar. Excluí `node_modules` y `coverage`.

## Lo que probe
pude ver que tenia 1 test real y varios pendientes
al pasar los test.todo a un test real, me di cuenta que me daba errores en algunos por haber dejado tienda.js con funciones vacias
pase todos los test.todo a tests que funcionaban y corregi las funciones vacias hasta que todas me den en verde

En el paso 5 de la parte 3 del trabajo, las que detectó al cambiar ese 100 por un 10 fueron 3 tests:
1- Aplica 20% a 10000 centavos
2- Aplica 100% a 10000 centavos
3- Aplica 15% a 10001 centavos

