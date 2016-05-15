import {Component} from '@angular/core';
//import {  } from 'ng2-bootstrap/ng2-bootstrap';



@Component({
    selector: 'my-component',
    template: `
        <h1>My First Angular 2333 App</h1>
        <div class="jumbotron">
            <h1>
            <span class="text-muted">Nuit</span><strong><span style="color:orange">Li</span><span style="color:black">qui</span><span style="color:red">de</span></strong>
        </h1>
        <p class="lead">
            Donnez votre avis sur des propositions à travers une éxpérience de démocratie liquide
        </p>
        </div>


<div class="row" >
		<div class="col-md-4">
			<p class="lead">
     			Première visite?
  			</p>
  			<p>
  				Commencez par vous créer un compte. Cela ne prend que quelques minutes.
  			</p>
		</div>
		<div class="col-md-4">
			<div class="well well-lg" >
				<p class="lead">
		 			Connectez vous
	  			</p>				
			
				<form role="form">
				  <div class="form-group">
					<label for="exampleInputEmail1">Login</label>
					<input 	type="text" 
							name="login_connect" 
							value="" 
							class="form-control" 
							id="exampleInputEmail1"  
							placeholder="Enter email" 
							/>
				  </div>
				  <div class="form-group">
					<label for="exampleInputPassword1">Mot de passe</label>
					<input 	type="password" 
							name="password_connect" 
							class="form-control" 
							id="exampleInputPassword1" 
							placeholder="Password" 
							/>
				  </div>
				  <button type="submit" class="btn btn-default">Connection</button>
				</form>
			</div>
		</div>
		
		
		
		<div class="col-md-4">
			<div class="well well-lg" >
				<p class="lead">
		 			Inscription
	  			</p>				
				
				  <div class="form-group">
					<label for="exampleInputEmail1">Email</label>
					<input 	type="text" class="form-control" id="registrationMail" 	placeholder="Enter email" />
				  </div>
				  <div class="form-group">
					<label for="registrationPassword">Mot de passe</label>
					<input 	type="password" 
							name="password_register"  
							class="form-control" 
							id="registrationPassword" 
							/>
				  </div>
				  
				  <div class="form-group ">
					<label for="registrationPassword2">Mot de passe</label>
					<input 	type="password" 
							name="password_register" 
							class="form-control" 
							id="registrationPassword2" 
							placeholder="Confirmation"
						 />
				  </div>
				  <div>
					  <span class="btn btn-default">Corrigez les erreurs</span>				  
				  </div>
				  <div>
					  <button type="submit" class="btn btn-default">Valider votre inscription</button>
				  </div>
			</div>
		</div>

</div>
        `,
    directives: []
})

export class AppComponent { }
