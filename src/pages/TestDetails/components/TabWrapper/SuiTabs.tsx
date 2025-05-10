import { FC, PropsWithChildren } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { OptionSnapshot, ValueProps, ValueSnapshot } from 'react-select-search';
import { MdWarning } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import cn from 'classnames';
import styled from '@emotion/styled';
import { DropdownIcon, SearchAndSelect } from 'ors-ui';

import { AlertAction } from './AlertBar/models';
import { TabName } from './models';

export interface SuiTab {
  title: string;
  to: TabName;
  active?: boolean;
  hide?: boolean;
  link?: string;
}

interface SuiTabsProps extends PropsWithChildren {
  tabs: SuiTab[];
  activeActions?: AlertAction[];
}

export const SuiTabs: FC<SuiTabsProps> = ({ tabs, activeActions, children }) => {
  const { t } = useTranslation();

  const activeTab = tabs.find((tab) => tab.active);
  const navigate = useNavigate();
  const location = useLocation();

  const mapTabsToOptions = (tabs: SuiTab[]) =>
    tabs.map((tab) => {
      const showActionBadge =
        !tab.active && activeActions?.some((a) => a.routes?.tabName === tab?.to);

      return {
        name: `${tab.title} `,
        value: tab.title,
        type: showActionBadge ? 'showActionBadge' : '',
      };
    });

  return (
    <div className="bc-tabs bc-processed">
      <nav className={cn('bc-tabs-nav hidden-sm', 'bc-tabs-' + tabs.length)}>
        <ul role="tablist">
          {tabs.map((tab) => {
            const showActionBadge =
              !tab.active && activeActions?.some((a) => a.routes?.tabName === tab?.to);
            const tabClasses = cn({
              'is-active': tab.active,
              'has-badge': showActionBadge,
            });

            return (
              <li data-testid={tab.to} key={tab.to} role="tab" className={tabClasses}>
                <Link to={location.pathname + `/../${tab.to}`}>
                  <span>{tab.title}</span>
                </Link>
                {showActionBadge && (
                  <AlertBadgeAbsolute>
                    <MdWarning aria-hidden="true" />
                  </AlertBadgeAbsolute>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <SelectWrap className="form-group hidden-md hidden-lg">
        <SearchAndSelect
          id="mobiletabs"
          value={activeTab?.title}
          options={mapTabsToOptions(tabs)}
          renderValue={(valueProps: ValueProps, snapshot: ValueSnapshot, className: string) =>
            renderVal(valueProps, className, t)
          }
          renderOption={renderOpt}
          onChange={(selectedValue: any) =>
            navigate(location.pathname + `/../${tabs.find((t) => t.title === selectedValue)?.to}`)
          }
        />
      </SelectWrap>

      <div className="tab-contents">{children}</div>
    </div>
  );
};

const renderVal = (valueProps: any, className: string, t?: TFunction) => (
  <div {...valueProps} className={className} id={valueProps.value}>
    <b>{valueProps.value || (t && t('APPB2C.common.basic.loading'))}</b>
    <DropdownIcon aria-hidden="true" />
  </div>
);

const renderOpt = (props: any, option: any, snapshot: OptionSnapshot, className: string) => (
  <button {...props} className={className} type="button">
    <OptionContainer>
      <span>{option.name}</span>
      {option.type === 'showActionBadge' && (
        <AlertBadge>
          <MdWarning aria-hidden="true" />
        </AlertBadge>
      )}
    </OptionContainer>
  </button>
);

export const SelectWrap = styled.div`
  margin: -30px -20px 0 !important;
  padding: 20px 20px 0;
  background: #e5eff8;
`;

export const StyledTabs = styled.div`
  .bc-tabs-nav {
    border-bottom: 0 none;
  }
  .bc-tabs-nav ul > li {
    background: transparent;
    border: 0 none;
    position: relative;
    padding-top: 2px;

    & > a > span {
      font-weight: 400;
    }

    &.is-active {
      padding-top: 0;
      border-top: 2px solid #005cb9;
      background: #e5eff8;
    }

    &.has-badge {
      border-left: 1px solid white;
      border-right: 1px solid white;
      border-radius: 0 6px 0 0;
      background: #fff1ce;
    }
  }

  .tab-contents {
    background: #e5eff8;
    padding: 30px 20px 20px;

    @media (max-width: 849px) {
      margin: 0 -20px;
      padding: 30px 0 20px;
    }
  }
`;

export const AlertBadge = styled.div`
  > svg {
    margin-left: 6px;
    fill: #e4b800;
  }
`;

export const AlertBadgeAbsolute = styled(AlertBadge)`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 8px;
  width: 6px;
  border-radius: 50%;
  background: white;
  z-index: 1;

  > svg {
    margin: -6px;
    vertical-align: top;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
