import {Ref} from "vue";

/**
 * Workaround for onMounted to tackle page transition issues
 * Credit: https://github.com/nuxt/nuxt/issues/13471#issuecomment-1449898517
 * Issue: https://github.com/nuxt/nuxt/issues/13471
 * Pull request on Vue 3 project: https://github.com/vuejs/core/pull/5952
 * @param el
 * @param listener
 * @param checkTimeLimit
 */
export const useSafeOnMounted = (el: Ref<HTMLElement | undefined>, listener: () => void, checkTimeLimit = 500) => {
    if (process.client) {
        const checkInterval = 100;
        let checksLeft = checkTimeLimit / checkInterval;

        const check = () => {
            if (el.value?.isConnected) {
                listener();
            } else if (checksLeft > 0) {
                setTimeout(check, checkInterval);
                checksLeft--;
            }
        };

        onMounted(() => {
            check();
        });
    }
}