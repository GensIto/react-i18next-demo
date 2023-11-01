import { useEffect } from "react";
import "./i18n";
import { Trans, useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  // デバック用
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const locale = queryParams.get("locale");

    if (locale) {
      i18n.changeLanguage(locale);
    }
  }, [i18n]);
  //

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>
        <Trans i18nKey='description.part1'>
          To get started, edit src/App.js <br /> and save to reload.
        </Trans>
      </p>
      <p>{t("description.part2")}</p>
    </div>
  );
}
