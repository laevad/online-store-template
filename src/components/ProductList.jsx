// eslint-disable-next-line react/prop-types
export const ProductList = ({products}) => {
	return (
		<>
			<div className="grid gap-4 md:grid-cols-3">
				{/* eslint-disable-next-line react/prop-types */}
				{products.map((product) => (
					<div key={product.id} className="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src={product.image} alt={product.title} className="object-cover w-full h-48"/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{product.title}</h2>
							<div className="justify-between card-actions">
								<span className="badge badge-outline">
									{/*peso sign*/}
									&#8369;
									{product.price}</span>
							</div>
							{/*	preview details */}
							<p className="text-sm">{product.description}</p>

						</div>
						<div className="card-footer mb-3">
							{/*	view and add to card: spce between*/}
							<div className="justify-between card-actions">
								<button className="btn btn-outline btn-sm">
									{/*view detail icon*/}
									&#128269;
									View
								</button>
								<button className="btn btn-primary btn-sm">
									{/*	add to cart icon*/}
									&#128722;
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				))}

			</div>
		</>
	)
}