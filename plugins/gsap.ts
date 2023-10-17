import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export default defineNuxtPlugin(() => {
    gsap.registerPlugin(ScrollTrigger, Draggable, ScrollToPlugin)

    return {
        provide: {
            gsap,
            ScrollTrigger,
            Draggable,
        }
    }
})