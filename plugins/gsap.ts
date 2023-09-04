import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Observer } from 'gsap/Observer'
import { Draggable } from 'gsap/Draggable'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export default defineNuxtPlugin(() => {
    gsap.registerPlugin(Observer, ScrollTrigger, Draggable, ScrollToPlugin)

    return {
        provide: {
            gsap,
            Observer,
            ScrollTrigger,
            Draggable,
        }
    }
})