import React from "react";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a
					href="https://www.linkedin.com/in/zechao-lin/"
					target="_blank"
					rel="noreferrer"
					className="app__flex"
				>
					<BsLinkedin />
				</a>
			</div>
			<div>
				<a
					href="https://github.com/Mrcode3"
					target="_blank"
					rel="noreferrer"
					className="app__flex"
				>
					<BsGithub />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
