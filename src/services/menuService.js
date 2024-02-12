import enroladinhoMignonImg from '../assets/images/pratos/enroladinho-mignon.jpeg';
import casal20Img from '../assets/images/pratos/casal-20.jpeg';
import burguerPicanhaImg from '../assets/images/pratos/burguer-picanha.jpeg';
import fishChipsImg from '../assets/images/pratos/fish-chips.jpeg';
import risotoCamaraoTrufadoImg from '../assets/images/pratos/risoto-camarao-trufado.jpeg';

import brownieImg from '../assets/images/sobremesas/brownie.jpeg';
import cocadaFornoImg from '../assets/images/sobremesas/cocada-forno.jpeg';
import petitGateauImg from '../assets/images/sobremesas/petit-gateau.jpeg';

import aguaSemGasImg from '../assets/images/bebidas/agua-sem-gas.jpeg';
import aguaComGasImg from '../assets/images/bebidas/agua-com-gas.jpeg';
import cocaColaImg from '../assets/images/bebidas/coca-cola.jpeg';
import guaranaImg from '../assets/images/bebidas/guarana.jpeg';
import heinekenImg from '../assets/images/bebidas/heineken.jpeg';

const menu = [
	{
		id: 1,
		name: 'Enroladinho de Salsicha',
		price: 'R$ 64,90',
		image: enroladinhoMignonImg,
		description: 'Finíssimas fatias de filé mignon enroladas no parmesão',
		category: 0
	},
	{
		id: 2,
		name: 'Casal 20',
		price: 'R$ 29,00',
		image: casal20Img,
		description: 'Casal perfeito pão de alho caseiro e linguiça toscana grill',
		category: 0
	},
	{
		id: 3,
		name: 'Burguer de Picanha',
		price: 'R$ 44,90',
		image: burguerPicanhaImg,
		description: 'Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon',
		category: 0
	},
	{
		id: 4,
		name: 'Fish and Chips',
		price: 'R$ 79,90',
		image: fishChipsImg,
		description: 'Iscas de Peixe Empanada na Farinha Panko e Flocos de Milho e Batata Frita Palito',
		category: 0
	},
	{
		id: 5,
		name: 'Risoto de Camarão Trufado',
		price: 'R$ 72,90',
		image: risotoCamaraoTrufadoImg,
		description: 'Arroz Arbóreo, camarões salteados no azeite trufado e crocantes de panko',
		category: 0
	},
	{
		id: 6,
		name: 'Brownie',
		price: 'R$ 32,90',
		image: brownieImg,
		description: 'Delicioso brownie caseiro, sorvete de creme, calda quente de chocolate',
		category: 1
	},
	{
		id: 7,
		name: 'Cocada de Forno',
		price: 'R$ 32,90',
		image: cocadaFornoImg,
		description: 'Cremosa cocada de coco torrado, doce de leite argentino e sorvete de creme',
		category: 1
	},
	{
		id: 8,
		name: 'Petit Gateau',
		price: 'R$ 34,90',
		image: petitGateauImg,
		description: 'Bolo quente recheado com ganache de chocolate, leite condensado e castanha de caju',
		category: 1
	},
	{
		id: 9,
		name: 'Água sem gás',
		price: 'R$ 6,90',
		image: aguaSemGasImg,
		description: '310ml',
		category: 2
	},
	{
		id: 10,
		name: 'Água com gás',
		price: 'R$ 6,90',
		image: aguaComGasImg,
		description: '310ml',
		category: 2
	},
	{
		id: 11,
		name: 'Coca-Cola',
		price: 'R$ 8,90',
		image: cocaColaImg,
		description: '290ml',
		category: 2
	},
	{
		id: 12,
		name: 'Guaraná Antártica',
		price: 'R$ 8,50',
		image: guaranaImg,
		description: '350ml',
		category: 2
	},
	{
		id: 13,
		name: 'Heineken',
		price: 'R$ 15,90',
		image: heinekenImg,
		description: '355ml',
		category: 2
	}
]

export const menuByCategory = (category) => {
	return menu.filter(item => item.category === category)
}