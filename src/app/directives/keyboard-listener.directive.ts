import { HostListener, Directive} from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Directive({
  selector: '[keyboardListener]'
})
export class KeyboardListener {
  private keyboardSubject: Subject<KeyboardEvent>;
  
  constructor (){
    this.keyboardSubject = new Subject<KeyboardEvent>();
  }

  @HostListener('window:keyup', ['$event'] )
  onKeyEvent(event: KeyboardEvent): void{
      console.log("pressed");
      this.keyboardSubject.next(event);
  }

  public getKeyboardSubject(): Observable<KeyboardEvent>{
    return this.keyboardSubject.asObservable();
  }
}