import type { Variants, TargetAndTransition } from 'framer-motion';

export type AnimationVariant = Variants;

export type HoverAnimation = TargetAndTransition;

export interface DirectAnimation {
    x?: number | string | Array<number | string>;
    y?: number | string | Array<number | string>;
    opacity?: number | Array<number>;
    scale?: number | Array<number>;
    rotate?: number | Array<number>;
    [key: string]: unknown;
}

export interface AnimationTransition {
    duration?: number;
    delay?: number;
    ease?: string | Array<number>;
    type?: string;
    stiffness?: number;
    damping?: number;
    mass?: number;
    repeat?: number | 'Infinity';
    repeatType?: 'loop' | 'reverse' | 'mirror';
    [key: string]: unknown;
}
