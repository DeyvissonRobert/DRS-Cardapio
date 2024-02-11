import { useState } from 'react';
import './App.css';
import Hashtaurante from "./assets/Restaurante.jpg";
import { Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';


export function App() {
        const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
        const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

        return <>
                <img src={Hashtaurante} alt="" className="capa" />
                <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
                <div className='menu'>
                        {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
                </div>
        </>
}