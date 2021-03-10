# useFetch

Use fetch sirve para realizar una petición HTTP del tipo GET a un servidor

Ejemplo de uso:

```
    const url = 'endpoint de una api';
    const { data: null, loading: true, error: null } = useFetch(url);
```