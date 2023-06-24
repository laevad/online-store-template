// eslint-disable-next-line react/prop-types
export const ProductList = ({products}) => {
	return (
		<>
			<div className="grid gap-3 md:grid-cols-3">
				{/* eslint-disable-next-line react/prop-types */}
				{products.map((product) => (
					<div key={product.id} className="card w-full bg-base-100 shadow-xl">
						<figure>
							<img src={product.image} alt={product.title} className="object-cover w-full h-48"/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{product.title}</h2>
							{/*	eclipses details */}
							<p className="line-clamp-3">{product.description}</p>
							{/*	view and add to card*/}
							<div className="card-actions">
								<button className="btn btn-primary">Add to cart</button>
								<button className="btn btn-ghost">View</button>
							</div>
							{/*category with tag icon*/}
							<div className="badge badge-outline badge-accent">{product.category}</div>
						</div>
					</div>
				))}

			</div>
		</>
	)
}