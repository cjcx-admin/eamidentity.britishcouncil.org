import { useEffect, useCallback, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Candidate } from 'ors-api/ors2';
import { loadCandidateExams, loadCandidateUkviExams } from './api';
import { getDateLocationUrl, unifySummary } from './helpers';
import { UnifiedExam, UnifiedTestTakerExams, useLocale } from 'common';
import { useSelector } from 'core';

export const useAllAccountTests = (
  candidates: Candidate[],
  mainCandidateSummary?: UnifiedTestTakerExams,
  preventRedirect?: boolean
) => {
  const { locale } = useLocale();
  const [allTests, setAllTests] = useState<UnifiedExam[]>([]);
  const [isChecking, setIsChecking] = useState(true);
  const [innerChecking, setInnerChecking] = useState(true);

  const navigate = useNavigate();
  const parentId = useSelector((state) => state.auth.profile?.id);
  const minors = candidates.filter((candidate) => candidate.isMinor);
  const mainCandidateTests: UnifiedExam[] = useMemo(() => {
    return [...(mainCandidateSummary?.past || []), ...(mainCandidateSummary?.upcoming || [])];
  }, [mainCandidateSummary]);

  const getAllExams = useCallback(async () => {
    if (mainCandidateTests.length > 1 || preventRedirect) return setInnerChecking(false);

    const totalTests: UnifiedExam[] = [...mainCandidateTests];

    for (const minor of minors) {
      if (totalTests.length > 1) break;

      let totalCandidateTests: UnifiedExam[] = [];

      const icExams = await loadCandidateExams(minor.id);
      const ukviExams = await loadCandidateUkviExams(minor.id);

      const summary = unifySummary(locale, icExams, ukviExams);

      summary.upcoming && totalCandidateTests.push(...summary?.upcoming);
      summary.past && totalCandidateTests.push(...summary?.past);

      totalTests.push(...totalCandidateTests);
    }

    setAllTests((prev) => [...prev, ...totalTests]);
    setInnerChecking(false);
  }, [mainCandidateTests, minors, locale, preventRedirect]);

  useEffect(() => {
    if (parentId && innerChecking && mainCandidateSummary) {
      getAllExams();
    }
  }, [getAllExams, parentId, innerChecking, mainCandidateSummary]);

  useEffect(() => {
    if (!innerChecking) {
      if (allTests.length === 1) {
        const { mode, registrationId } = allTests[0];

        return navigate(getDateLocationUrl(mode, registrationId));
      }
      setIsChecking(false);
    }
  }, [innerChecking, allTests, navigate]);

  return { isChecking };
};
