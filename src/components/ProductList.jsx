// eslint-disable-next-line react/prop-types
export const ProductList = ({products}) => {
	return (
		<>
			<div className="grid gap-4 md:grid-cols-3">
				{/* eslint-disable-next-line react/prop-types */}
				{products.map((product) => (
					<div key={product.id} className="card w-full bg-base-100 shadow-xl">
						<div className="card-body">
							<p>#post{product.id}</p>
							<h2 className="card-title">{product.title}</h2>
							<p className="text-gray-700">{product.body}</p>
						</div>
					</div>
				))}

			</div>
		</>
	)
}