import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
	animationOne: {
		x: [0, 30, -30, 0],
		y: [0, -20, -40, 0],
		scale: [1, 1.3, 0.7, 1],
		rotate: [0, 180, 360],
		transition: {
			x: {
				duration: 2.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
			y: {
				duration: 2.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
			scale: {
				duration: 2.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
			rotate: {
				duration: 2.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	},
	animationTwo: {
		x: [0, 25, 0, -25, 0],
		y: [0, -15, -30, -15, 0],
		scale: [1, 1.4, 1, 1.4, 1],
		rotate: [0, 90, 180, 270, 360],
		transition: {
			x: {
				duration: 2.5,
				repeat: Infinity,
				ease: "easeInOut",
			},
			y: {
				duration: 2.5,
				repeat: Infinity,
				ease: "easeInOut",
			},
			scale: {
				duration: 2.5,
				repeat: Infinity,
				ease: "easeInOut",
			},
			rotate: {
				duration: 2.5,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	},
	animationThree: {
		x: [0, 20, -20, 20, -20, 0],
		y: [0, -10, -20, -30, -20, 0],
		scale: [1, 1.2, 0.8, 1.5, 0.6, 1],
		rotate: [0, 120, 240, 360],
		transition: {
			x: {
				duration: 3.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
			y: {
				duration: 3.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
			scale: {
				duration: 3.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
			rotate: {
				duration: 3.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	},
	animationFour: {
		x: [0, 15, 0, -15, 0, 15, 0, -15, 0],
		y: [0, -25, -50, -25, 0, -25, -50, -25, 0],
		scale: [1, 1.6, 0.4, 1.6, 1, 1.6, 0.4, 1.6, 1],
		rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
		transition: {
			x: {
				duration: 4.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
			y: {
				duration: 4.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
			scale: {
				duration: 4.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
			rotate: {
				duration: 4.0,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	},
};

const Loader = ({ isFullScreen = false }) => {
	const [animation, cycleAnimation] = useCycle(
		"animationOne",
		"animationTwo",
		"animationThree",
		"animationFour"
	);

	if (isFullScreen) {
		return (
			<div className="loader-container">
				<motion.div
					className="loader"
					variants={loaderVariants}
					animate={animation}
					transition={{
						duration: 0.3,
						ease: "easeInOut",
					}}
				></motion.div>
				<motion.p
					className="loading-text"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					Loading your delicious pizza...
				</motion.p>
				<motion.div
					className="loader-controls"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
				>
					<button
						onClick={() => cycleAnimation()}
						className="loader-button"
					>
						Switch Animation
					</button>
				</motion.div>
			</div>
		);
	}

	return (
		<div className="loader-inline">
			<motion.div
				className="loader-small"
				variants={loaderVariants}
				animate={animation}
				transition={{
					duration: 0.3,
					ease: "easeInOut",
				}}
			></motion.div>
			<motion.p
				className="loading-text-small"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
			>
				Preparing your pizza experience...
			</motion.p>
			<motion.button
				onClick={() => cycleAnimation()}
				className="loader-button-small"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
			>
				Switch Animation
			</motion.button>
		</div>
	);
};

export default Loader;
