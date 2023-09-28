export const MenuScreen = ({
	title,
	dialogue,
	onClick,
	buttonText,
}: {
	title: string;
	dialogue: string;
	onClick: () => void;
	buttonText: string;
}) => {
	return (
		<div className="container">
			<div className="header"> {title}</div>
			<div className="body">
				<div className="dialogueAndButton">
					<p>{dialogue}</p>
					<button onClick={onClick}>{buttonText}</button>
				</div>
			</div>
		</div>
	);
};
