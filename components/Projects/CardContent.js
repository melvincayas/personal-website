const CardContent = ({ project }) => {
	return (
		<div className="card-content">
			<div className="content">
				<p className="title mb-2 is-4">{project.title}</p>
				<p>{project.content}</p>
			</div>
		</div>
	);
};

export default CardContent;
