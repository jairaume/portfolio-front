import LangModule from "~/lang-modules/types";
import {common} from "~/lang-modules/modules/common/fr-fr";
import {pages} from "~/lang-modules/modules/pages/index-fr-fr";

export default defineI18nLocale( (): LangModule => {
    return {
        common,
        pages
    }
})