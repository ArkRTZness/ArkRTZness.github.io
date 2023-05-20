function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // Acceso exitoso con Google, puedes obtener el usuario result.user
      })
      .catch(function(error) {
        // Error durante el inicio de sesión con Google
        console.log(error);
      });
  }
  