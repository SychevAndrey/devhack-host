import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class UsernameService {
    public name: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
    public surname: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
}
