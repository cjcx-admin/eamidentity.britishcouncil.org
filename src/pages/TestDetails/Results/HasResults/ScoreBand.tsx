import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { BcCheckbox, BcRadio, Card } from '@britishcouncil/react-solas-ors3';

import { RequestedActiveOneSkillRetakeDto } from 'ors-api/mod';
import { BandScoreType } from 'ors-api/ors2';
import { Tooltip } from 'ors-ui';
import { converters, getScoreName } from 'common';
import {
  ScoreListeningIcon,
  ScoreReadingIcon,
  ScoreSpeakingIcon,
  ScoreWritingIcon,
} from './ResultsIcons';
import { OriginalScoreToRetake } from '../Osr/hooks/useScoreToRetake';
import { OsrBandScoreInfo } from '../Osr/components/OsrBandScoreInfo';
import EorBandScoreInfo from './EorBandScoreInfo';

interface Props {
  bandScoreType: BandScoreType;
  score: number;
  isOverall?: boolean;
  isSelectable?: boolean;
  isRemarked?: boolean;
  checked?: boolean;
  radios?: boolean;
  toggleSelection?: (checked: boolean) => void;
  originalScoreToRetake?: OriginalScoreToRetake;
  activeOsrRequest?: RequestedActiveOneSkillRetakeDto;
  noResults?: boolean;
  explanationsContext?: boolean;
  notSelectableReason?: string;
}

const maxScore = 9;

export const ScoreBand = ({
  bandScoreType,
  score,
  isOverall = false,
  isSelectable = false,
  isRemarked = false,
  checked,
  radios,
  originalScoreToRetake,
  toggleSelection,
  activeOsrRequest,
  noResults,
  explanationsContext,
  notSelectableReason,
}: Props) => {
  const { t } = useTranslation();

  const isMaxScore = score >= maxScore;
  const isOsrActive = originalScoreToRetake?.bandScoreType === bandScoreType;
  const isOsrActiveRequest =
    !!activeOsrRequest?.component &&
    activeOsrRequest?.component === converters.fromBandScoreType(bandScoreType).toComponentType();
  const isOverallBandActive =
    !activeOsrRequest &&
    bandScoreType === BandScoreType.Overall &&
    !noResults &&
    !!originalScoreToRetake?.originalOverallScore;
  const showNotSelectableTooltip = !isSelectable && notSelectableReason;
  const tooltipId = showNotSelectableTooltip ? `tooltip-${bandScoreType}` : '';
  const scoreName = getScoreName(bandScoreType);

  return (
    <SmallCard
      isSelectable={isSelectable}
      checked={checked}
      isDisabled={isMaxScore}
      radios={radios}
      activeOsr={isOsrActive || isOverallBandActive || isOsrActiveRequest}
      {...(showNotSelectableTooltip ? { 'data-tooltip-id': tooltipId } : {})}
    >
      <CheckboxWrapper
        isSelectable={isSelectable}
        isDisabled={isMaxScore}
        checked={checked}
        radios={radios}
        toggleSelection={toggleSelection}
      >
        <Band
          title={isMaxScore ? t('APPB2C.registration.results.eor.preDeadline.maxScore') : ''}
          className={`band ${isOverall ? 'large bold' : ''} ${isRemarked ? 'bold' : ''}`}
        >
          <div className="band-name">
            {!isOverall && <div className="band-icon">{getScoreIcon(bandScoreType)}</div>}
            <div>{scoreName ? t(scoreName) : undefined}</div>
          </div>
          <div className="band-score-osr">
            {!explanationsContext && <EorBandScoreInfo bandScoreType={bandScoreType} />}
            {(isOsrActive || isOsrActiveRequest) && (
              <OsrBandScoreInfo
                originalScore={originalScoreToRetake?.score}
                osrScore={score}
                activeOsrRequest={activeOsrRequest}
                noResults={noResults}
              />
            )}
            {isOverallBandActive && (
              <OsrBandScoreInfo
                originalScore={originalScoreToRetake?.originalOverallScore}
                osrScore={score}
                activeOsrRequest={activeOsrRequest}
                noResults={noResults}
              />
            )}
            {score.toPrecision(2)}
          </div>
        </Band>
      </CheckboxWrapper>
      {showNotSelectableTooltip && <Tooltip id={tooltipId} label={notSelectableReason} />}
    </SmallCard>
  );
};

const getScoreIcon = (scoreType: BandScoreType) => {
  switch (scoreType) {
    case BandScoreType.Listening:
      return <ScoreListeningIcon />;
    case BandScoreType.Reading:
      return <ScoreReadingIcon />;
    case BandScoreType.Writing:
      return <ScoreWritingIcon />;
    case BandScoreType.Speaking:
      return <ScoreSpeakingIcon />;

    default:
      return '';
  }
};

const Band = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.bold {
    font-weight: bold;

    [dir='rtl'] & {
      font-weight: 500;
    }
  }

  .band {
    &-icon {
      width: 36px;
      height: 22px;
    }
    &-name {
      display: flex;
      align-items: center;
    }
    &-score {
      text-align: right;
      font-weight: bold;
      align-self: flex-end;

      [dir='rtl'] & {
        font-weight: 500;
      }
    }
  }

  .band-score-osr {
    display: flex;
    align-items: center;
  }
`;

const SmallCard = styled(Card, { shouldForwardProp: isPropValid })<{
  isSelectable?: boolean;
  isDisabled?: boolean;
  checked?: boolean;
  radios?: boolean;
  activeOsr?: boolean;
}>`
  padding: ${(props) => (props.isSelectable ? '0' : '12px 18px')};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25)
    ${(props) => props.checked && ', 0px 0px 0px 1px #005cb9 inset'};
  background-color: ${(props) => props.checked && '#f2f7fb'};
  background-color: ${(props) => props.activeOsr && '#fcf8e3'};

  &:focus-within {
    box-shadow: ${(props) =>
      props.isSelectable && '0px 1px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 0px 1px #005cb9 inset'};
  }

  & + & {
    margin-top: 8px;
  }

  .checkbox,
  .radio {
    margin: 0;

    label {
      display: block;
      padding: 12px 18px 12px 52px;
      cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};

      input {
        margin-top: -10px;
        box-shadow: none !important;
        left: 16px;

        &:checked {
          box-shadow: none !important;
        }
      }

      .band {
        padding-top: 2px;
      }

      [dir='rtl'] & {
        padding: 12px 52px 12px 18px;
      }
    }
  }

  .react-tooltip {
    z-index: 100;
  }
`;

interface WrapperProps {
  isSelectable: boolean;
  isDisabled: boolean;
  children: JSX.Element;
  checked?: boolean;
  radios?: boolean;
  toggleSelection?: (checked: boolean) => void;
}

const CheckboxWrapper = ({
  isSelectable,
  isDisabled,
  children,
  checked,
  radios,
  toggleSelection,
}: WrapperProps) =>
  isSelectable ? (
    radios ? (
      <BcRadio
        onChange={() => toggleSelection && toggleSelection(!checked)}
        value={1}
        checkedValue={checked ? 1 : 0}
      >
        {children}
      </BcRadio>
    ) : (
      <BcCheckbox
        checked={!!checked}
        handleChange={(checked) => toggleSelection && toggleSelection(checked)}
        disabled={isDisabled}
      >
        {children}
      </BcCheckbox>
    )
  ) : (
    children
  );
