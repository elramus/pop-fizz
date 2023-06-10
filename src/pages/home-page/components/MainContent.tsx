import { Dispatch, FC, SetStateAction } from "react"

import { css } from "@emotion/react"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { shade } from "polished"

import { headshot } from "../../../assets"
import { AnimatedEntrance } from "../../../components"
import { colors } from "../../../styles"

export interface MainContentProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const MainContent: FC<MainContentProps> = ({ isOpen, setIsOpen }) => {
	return (
		<>
			<div css={[baseContainerCss, isOpen ? expandedContainerCss : undefined]}>
				<button onClick={() => setIsOpen(false)} css={closeButtonCss}>
					<FontAwesomeIcon icon={["fal", "times"]} fontSize="1.25rem" />
				</button>

				{isOpen && (
					<AnimatedEntrance delay={250} duration={450}>
						<div css={headshotContainerCss} />
					</AnimatedEntrance>
				)}

				{isOpen && (
					<>
						<AnimatedEntrance transition="fade" delay={150} duration={500}>
							<p css={blurbCss}>
								<strong>Hey there!</strong> My name is Luke and I'm a software
								engineer and UI/UX designer. Currently I work at{" "}
								<a href="https://postera.ai" target="_blank" rel="noreferrer">
									PostEra
								</a>{" "}
								on a platform to accelerate small-molecule drug discovery with
								machine learning.
							</p>
						</AnimatedEntrance>
					</>
				)}
			</div>

			{isOpen && (
				<AnimatedEntrance transition="down" delay={450} duration={550}>
					<div css={contactContainerCss}>
						<a href="https://github.com/elramus" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a
							href="https://www.linkedin.com/in/lukeramus"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</AnimatedEntrance>
			)}
		</>
	)
}

const baseContainerCss = css`
	position: relative;
	box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
	padding: 2.25rem 2.5rem;
	width: 32rem;
	max-width: 85vw;
	border-radius: 30px;
	transform: scale(0);
	opacity: 0;
	transition-duration: 400ms;
	transition-timing-function: cubic-bezier(0, 0.9, 0.22, 1.06);
	transition-property: transform, opacity;
	background-color: white;
`
const closeButtonCss = css`
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	padding: 0;
	border: 0;
	opacity: 0.25;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	transition: opacity 0.2s ease-out, background 0.2s ease-out;
	&:hover {
		opacity: 1;
		background: #ddd;
	}
`
const expandedContainerCss = css`
	transform: scale(1);
	opacity: 1;
`
const blurbCss = css`
	font-size: 22px;
	@media (max-width: 768px) {
		font-size: 18px;
	}
`
const headshotContainerCss = css`
	position: absolute;
	top: -11rem;
	left: 50%;
	transform: translateX(-50%);
	background-image: url(${headshot});
	background-size: 100%;
	border-radius: 1px solid #eee;
	height: 6rem;
	width: 6rem;
	border-radius: 50%;
	:after {
		content: "";
		position: absolute;
		height: 2.5rem;
		top: 100%;
		left: 50%;
		border-left: 1px solid #eee;
	}
	@media (max-width: 768px) {
		height: 5rem;
		width: 5rem;
		top: -10rem;
	}
`
const contactContainerCss = css`
	position: absolute;
	bottom: -7rem;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: 1.25rem;
	border: 1px solid #eee;
	border-radius: 30px;
	padding: 0.75rem 2rem;
	background-color: white;
	a {
		font-size: 1.5rem;
		color: ${colors.teal};
		&:hover {
			color: ${shade(0.25, colors.teal)};
		}
	}
	&:after {
		content: "";
		position: absolute;
		height: 3.1rem;
		bottom: 100%;
		left: 50%;
		border-left: 1px solid #eee;
	}
`
