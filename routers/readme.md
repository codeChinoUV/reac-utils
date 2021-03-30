# Componentes para manejar las rutas privadas y las rutas publicas

Ejemplo de uso 

```
<Router>
    <div>
        <Switch>
            <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={isLoggin} />
            <PrivateRoute exact path="/" component={JournalScreen} isAuthenticated={isLoggin} />

            <Redirect to="/auth/login" />
        </Switch>
    </div>
</Router>
```