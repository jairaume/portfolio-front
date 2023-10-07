import LangModule from "~/lang-modules/types";
import {common} from "~/lang-modules/modules/common/en-us";
import {pages} from "~/lang-modules/modules/pages/index-en-us";

export default defineI18nLocale( (): LangModule => {
    return {
        common,
        pages
    }
})