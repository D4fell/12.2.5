import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { CoinService } from '../../services/braveNewCoinService/coins.service';
import { Coins } from'../../models/coin.model';
import { FormControl, Validators } from "@angular/forms";

@Component({
    selector:'app-coin',
    templateUrl: './coin.component.html',
    styleUrls: ['./coin.component.sass']
})
export class CoinComponent implements OnChanges, OnInit {

    coins: Coins[] = []
    amount: FormControl;
    change: FormControl;
    originCoin = new FormControl(false);
    
    constructor(
        private coinService: CoinService
    ) {
        this.amount = new FormControl('',[
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(10),
            Validators.pattern("^[0-9]*$")
        ]);
        this.amount.valueChanges
        .subscribe(value => {
            console.log(value,'Valueeee')
        });

        this.change = new FormControl('',[

        ]);
        this.change.valueChanges
        .subscribe( change => {
            console.log(change,'change')
        })
        
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges');
        console.log( 'changes' );       
    }

    ngOnInit(){
        this.fetchCoins();
    }

    fetchCoins() {
        this.coinService.getAllCoins()
        .subscribe( coins => {
            this.coins = coins;
            console.log( coins, '<------ COINS ------>');
        })
    }
}