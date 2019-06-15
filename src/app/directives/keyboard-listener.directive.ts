import { Directive, HostListener, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Directive({
  selector: '[keyboardListener]'
})

@Injectable()
export class KeyboardListener {
  private keyboardSubject: Subject<String>;
  
  constructor (){
    this.keyboardSubject = new Subject<String>();
  }

  @HostListener('window:keyup', ['$event'] )
  onKeyEvent(event: KeyboardEvent): void{
      this.keyboardSubject.next(event.key);
  }

  public getKeyboardSubject(): Observable<String>{
    return this.keyboardSubject.asObservable();
  }
}