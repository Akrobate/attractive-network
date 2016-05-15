import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

//import { BootstrapDirectives } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'my-app',
    template: `
           <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- Add your site or application content here -->
    <div class="container">
      <div class="header">
        <ul class="nav nav-pills pull-right">
          <li is-active="active" >
          	<a style="" ng-href="#/"><span class="glyphicon glyphicon-home"></span></a></li>
          	
          	
            <li is-active="active" if-connected="show"><a style="" ng-href="#/dashboard"><span class="glyphicon glyphicon-scale"></span></a></li>
          <li is-active="active" if-connected="show"><a style="" ng-href="#/propositions"><span class="glyphicon glyphicon-list-alt"></span></a></li>
          <li is-active="active" if-connected="show"><a style="" ng-href="#/myprofile"><span class="glyphicon glyphicon-user"></span></a></li>

          <li is-active="active"><a ng-href="#/about">About</a></li>

          <li is-active="active"  if-connected="show"><a style="color:red" ng-href="#/logout"><span style="color:red" class=" glyphicon  glyphicon-off"></span></a></li>
          <li is-active="active"  if-connected="hide"><a style="" ng-href="#/myprofile"><span class=" glyphicon glyphicon-record"></span></a></li>         
          

        </ul>
        <h3 class="text-muted">
        	<span style="color:red" if-connected="show" class=" glyphicon glyphicon-record"></span>
			<span if-connected="hide" class=" glyphicon glyphicon-record"></span> 
			NuitLiquide
		</h3>
      </div>

      <my-component></my-component>
      
      <div class="footer">
        <p><span class="glyphicon glyphicon-heart"></span> from the NuitLiquide team - 2016</p>
      </div>
    </div>

        `,
      directives: [AppComponent]
})

export class Application { }
