import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/braveNewCoinService/coins.service';
import { Coins } from'../../models/coin.model';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.sass']
})
export class CoinListComponent implements OnInit {

  coins: Coins[] = []
  displayedColumns: string[] = ['Nombre', 'Precio', 'Criptomoneda', 'Convertir'];
  
  constructor(
    private coinService: CoinService
  ) { }

  ngOnInit(){
    this.fetchCoins();
}

fetchCoins() {
    this.coinService.getAllCoins()
    .subscribe( coins => {
      this.coins = coins;
    });
}
}
