import { useState } from "react"
import { Banner, Menu, Nav } from "../components"
import { menuByCategory } from "../services/menuService"

export default function Home() {
	const [activePage, setActivePage] = useState(0);

	return (
		<>
			<Banner />

			<Nav
				setActivePage={setActivePage}
				items={[
					{ id: 0, title: 'Pratos Principais' },
					{ id: 1, title: 'Sobremesas' },
					{ id: 2, title: 'Bebidas' }
				]}
			/>

			<Menu
				items={menuByCategory(activePage)}
			/>
	</>
	)
}