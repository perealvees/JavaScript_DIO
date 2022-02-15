//Conta Bancária

class ContaBancaria {
    constructor (agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numerogencia;
    this.tipo = tipo;
    this._saldo = saldo;
    }

    get saldo () {
    return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operação Negada';
        }
    this._saldo = this.saldo - valor; 
    return this._saldo  ; 
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this.cartaoCredito;
    }

    set cartaoCredito(valor){
        this.cartaoCredito = valor;
    }
}


class ContaPoupanca{
    constructor(agencia, numero, saldo, ) {
        super(agencia, numero, saldo);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria{
    constructor(agencia, numero, saldo, ) {
        super(agencia, numero, saldo);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operação Negada";
        }

        this._saldo = this._saldo - valor;
    }
}

