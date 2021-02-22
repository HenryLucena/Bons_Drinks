import React, { Component } from 'react';

export class FormularioContato extends Component {
    render() {
        return (
            <div>
                <form>
                    <label for="Nome">Nome</label>
                    <input type='text' name='Nome'></input>
                    <label for='Email'> Email </label>
                    <input type='text' name='Email'></input>
                    <label for='Mensagem'> Mensagem</label>
                    <input type='text' name='Mensagem'></input>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}

