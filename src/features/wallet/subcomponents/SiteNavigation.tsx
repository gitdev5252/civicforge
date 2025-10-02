import { FC, ReactElement } from "react";
import { useTranslation } from "react-i18next";

import useAppRouteParams from "../../../hooks/useAppRouteParams";
import { AppRoutes, standAloneRoutes } from "../../../routes";
import {
  Container,
  NavigationLink,
  NavigationNavLink,
} from "./SiteNavigation.styles";

interface NavigationProps {
  className?: string;
}

const SiteNavigation: FC<NavigationProps> = ({ className }): ReactElement => {
  const { t } = useTranslation();
  const appRouteParams = useAppRouteParams();

  return (
    <Container className={className}>
      {standAloneRoutes.includes(appRouteParams.route as AppRoutes) && (
        <>
          <NavigationNavLink to="/">{t("common.trade")}</NavigationNavLink>|
        </>
      )}
      <NavigationLink href="#">{t("common.coders")}</NavigationLink>
      <NavigationLink href="#">{t("common.voters")}</NavigationLink>
      <NavigationLink href="#">{t("common.stats")}</NavigationLink>
    </Container>
  );
};

export default SiteNavigation;
