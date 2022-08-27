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
			from: { opacity: 0 },
			enter: { opacity: 1 },
			leave: { opacity: 0 },
		}
	);

	useChain(props.open ? [springApi, transApi] : [transApi, springApi], [
		0,
		props.open ? 0.1 : 0.6,
	]);

	return propsAnimationDropDown((style, item) => (
		<animated.li style={style}>{item}</animated.li>
	));
};

export default DropDown;
