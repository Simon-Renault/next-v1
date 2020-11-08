
interface IgridProps{
	deco? : boolean
}

export default function Grid({deco} : IgridProps){
	return (
		<div className="grid">
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
		</div>
	)
}