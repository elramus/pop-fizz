import { FC, ReactNode, useMemo } from "react"

import { css, keyframes } from "@emotion/react"

export interface AnimatedEntranceProps {
	children: ReactNode
	duration?: number
	easing?: string
	delay?: number
	transition?: "up" | "down" | "left" | "right" | "fade"
	fade?: boolean
}

export const AnimatedEntrance: FC<AnimatedEntranceProps> = ({
	children,
	duration,
	easing,
	delay,
	transition = "up",
	fade = true,
}) => {
	function getTransform(transformDirection: AnimatedEntranceProps["transition"]) {
		switch (transformDirection) {
			case "up": {
				return "translateY(1rem)"
			}
			case "down": {
				return "translateY(-1rem)"
			}
			case "left": {
				return "translateX(50%)"
			}
			case "right": {
				return "translateX(-50%)"
			}
			case "fade": {
				return "translateX(0)"
			}
			default: {
				return "translateX(0)"
			}
		}
	}

	const animatedEntranceComputedStyle = useMemo(() => {
		return css`
			animation-duration: ${duration ? `${duration}ms` : "500ms"};
			animation-timing-function: ${easing ? easing : "ease-out"};
			animation-delay: ${delay ? `${delay}ms` : "0ms"};
			transform: ${getTransform(transition)};
			opacity: ${fade ? 0 : 1};
		`
	}, [delay, transition, duration, easing, fade])

	return <div css={[animatedEntranceBaseStyle, animatedEntranceComputedStyle]}>{children}</div>
}

const moveToPosition = keyframes`
  to {
    opacity: 1;
    transform: unset;
  }
`

const animatedEntranceBaseStyle = css`
	position: relative;
	animation-name: ${moveToPosition};
	animation-fill-mode: forwards;
`
