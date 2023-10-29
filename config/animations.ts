export const HomeAnimation = {
    initial: {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            type:"tween",
            ease: "easeInOut",
            duration: 1,
        },
    },
};