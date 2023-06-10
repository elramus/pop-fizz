import { Dispatch, FC, SetStateAction, useMemo } from "react"

import { css, Theme } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { shade } from "polished"

export interface BigButtonProps {
	isReady: boolean
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const BigButton: FC<BigButtonProps> = ({ isReady, isOpen, setIsOpen }) => {
	const buttonCss = useMemo(() => {
		const result = [baseButtonCss]

		if (isReady && isOpen === false) {
			result.push(visibleCss)
		}

		return result
	}, [isReady, isOpen])

	return (
		<button css={buttonCss} onClick={() => setIsOpen(true)}>
			<FontAwesomeIcon icon="code" color="white" size="4x" />
		</button>
	)
}

export const baseButtonCss = ({ color }: Theme) => css`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	border: 0;
	border-radius: 50%;
	height: 8rem;
	width: 8rem;
	background: ${color.teal};
	transform: scale(0);
	color: white;
	transition: transform 250ms cubic-bezier(0.11, 0.66, 0.32, 1.23),
		background-color 250ms ease-out;
	&:hover {
		background-color: ${shade(0.1, color.teal)};
		transform: scale(1.1);
	}
	&:focus {
		background-color: ${shade(0.3, color.teal)};
	}
`

export const visibleCss = () => css`
	transform: scale(1);
`
