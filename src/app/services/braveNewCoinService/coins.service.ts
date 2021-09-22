import { Injectable  } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Coins } from'../../models/coin.model';

import { environment } from '../../../environments/environment'

@Injectable({
    providedIn: 'root'
})

export class CoinService {

    constructor(
        private http: HttpClient
    ){}

    getAllCoins() {
        return this.http.get<Coins[]>(`${environment.url_API}/`);
    }

    getCoinCode( code: string) {
        return this.http.get<Coins>(`${environment.url_API}/getCoin/${code}`);
    }
}