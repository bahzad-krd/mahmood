// app.component.ts
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 
  @ViewChild('m') m!: NgForm; // Ensure the reference is properly defined
 
  programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++']; 
  experienceLevels = ['Beginner', 'Intermediate', 'Advanced']; 
 
  conferm = false; 
  confermName: string = ''; 
  confermExperience: string = ''; 
 
  submitForm() { 
    this.conferm = true; 
    if (this.m && this.m.form) { 
      this.confermName = this.m.form.value.username; 
      this.confermExperience = this.m.form.value.experience; 
    } 
  } 
} 

