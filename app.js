const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
   
  </head>
  <body>
   <!DOCTYPE html>
<html>
<head>
	<title>Ajout Livre</title>
	
	<style type="text/css">
		body{
    		background: #e1edf4;
		}
    </style>
    <!-- Barre de menu -->
    <ul>
        <li><a href="admin.php">Admin</a></li>
        <li><a href="consult.php">Nos Livres</a></li>
        <li><a href="acceuil.html">Home</a></li>
	</ul>
</head>
<body>


	<div class="form" align="center">
		<h1>Ajout Livre</h1>
	<fieldset>
		<table>
			<tr>
				<td> <label for="Titre">Titre: </label></td>
				<td>
					<input type="text" name="Titre" id="Titre">
				</td>
			</tr>
			<tr>
				<td><label for="id">Identifiant: </label></td>
				<td><input type="texte" name="id" id="id"></td>
			</tr>
			<tr>
				<td><label for="Auteur">Auteur: </label></td>
				<td><input type="texte" name="Auteur" id="Auteur"></td>
			</tr>
			<tr>
				<td><label for="Langue">Langue: </label></td>
				<td><input type="texte" name="Langue" id="Langue"></td>
			</tr>
			<tr>
				<td><label for="Categorie">Categorie: </label></td>
				<td><input type="texte" name="Categorie" id="Categorie"></td>
			</tr>
			<tr>
				<td><label for="file">Image: </label></td>
				<td><input type="file" name="file" id="file"></td>
			</tr>
			<tr>
				<td><input type="submit" name="valider" value="Valider"> </td>
				<td><input type="submit" name="annuler" value="Reset"> </td>
			</tr>
		</table>

		
	</fieldset>
	</div>
	</form>
</body>
</html>
  </body>
</html>
`
