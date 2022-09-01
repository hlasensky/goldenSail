import {
	useTransition,
	useSpring,
	useChain,
	config,
	animated,
	useSpringRef,
} from "@react-spring/web";

const DropDown = (props) => {
	const transApi = useSpringRef();
	const springApi = useSpringRef();

	const propsAnimationDropDown = useTransition(
		props.open ? props.technologies : [],
		{
			ref: transApi,
			trail: 50,
			from: { opacity: 0, display: "none" },
			enter: { opacity: 1, display: "block" },
			leave: { opacity: 0, display: "none" },
		}
	);

	useChain(props.open ? [springApi, transApi] : [transApi, springApi], [
		0,
		props.open ? 0.1 : 0.6,
	]);

	return propsAnimationDropDown((style, items) => (
		<animated.li className="liTechnologies" style={style}>{items}</animated.li>
	));
};

export default DropDown;
