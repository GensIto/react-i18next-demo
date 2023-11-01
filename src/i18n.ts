import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // HTTPバックエンドを使用
  .use(initReactI18next) // i18nextとreact-i18nextを連携させる
  .init({
    backend: {
      // 翻訳ファイルの読み込み先のパスを指定
      loadPath: "/language/{{lng}}/translation.json",
    },
    lng: "ja", // デフォルトの言語を設定
    fallbackLng: "en", // デフォルトの言語が利用不可の場合のフォールバック言語
    interpolation: {
      escapeValue: false, // reactは既にXSSを防止しているのでエスケープは不要
    },
  });

export default i18n;
