import i18n from "i18next";
import { CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageActionTypes } from "./languageActions";

export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

//配置初始化数据 (app启动的时候store会同时启动，需要初始化数据)
const defaultState: LanguageState = {
  language: "en",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
};

//REDUCER: 以旧state换新state的过程, action就是如何处理state的指令
export default (state = defaultState, action: LanguageActionTypes) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload);
      return { ...state, language: action.payload };
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      };
    default:
      return state;
  }
};
