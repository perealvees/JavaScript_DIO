//Conta Bancária

class ContaBancária {
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

