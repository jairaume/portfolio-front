import LangModule from "~/lang-modules/types";
import {common} from "~/lang-modules/modules/common/en-us";

export default defineI18nLocale( (): LangModule => {
    return {
        common
    }
})