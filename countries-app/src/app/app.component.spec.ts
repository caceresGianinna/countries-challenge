import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
 let comp: AppComponent;
 let fixture: ComponentFixture<AppComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

  }));

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

 
});
