import {ProductList} from "../components/ProductList.jsx";
import {Pagination} from "../components/Pagination.jsx";

export const Products = () => {
	/*dummy product list*/
	// eslint-disable-next-line no-unused-vars
	const products = [
		{
			id: 1,
			title : "test the",
			body: "da badi",
		},
		{
			id: 2,
			title : "test the 1",
			body: "da badi",
		},
		{
			id: 3,
			title : "test the 2",
			body: "da badi",
		},

	];
	return (
		<>
			<div className="max-w-4xl mx-auto">
				<h1 className="text-2xl text-center my-5 font-bold underline">
					Products
				</h1>
				<ProductList products={products}/>
				<div className="flex items-center justify-between my-5">
					<Pagination/>
					<h1>Loading</h1>
				</div>
			</div>
		</>
	)
}