import { candidateClient as ors2CandidateClient } from 'ors-api/ors2';
import { candidateClient as ukviCandidateClient } from 'ors-api/ukvi';
import { registrationClient } from 'ors-api/iol';
import { logger } from 'ors-utils';

export const loadMainCandidate = async () => {
  const response = await ors2CandidateClient.getCandidate();
  return response.data;
};

export const loadMinorsCandidates = async () => {
  const response = await ors2CandidateClient.getCandidateChildren();
  return response.data;
};

export const loadCandidateExams = async (candidateId: number) => {
  const response = await ors2CandidateClient.getCandidateRegistrations(candidateId);
  return response.data;
};

export const loadCandidateIolExams = async () => {
  const response = await registrationClient.getTestTakerRegistrations();
  return response.data;
};

export const loadCandidateUkviExams = async (candidateId: number) => {
  const response = await ukviCandidateClient.getCandidateRegistrations(candidateId);
  return response.data;
};

export const loadCandidateFromMcr = async () => {
  try {
    const { data: candidateDetails } = await ors2CandidateClient.getCandidateFromMCR();
    return candidateDetails;
  } catch (err) {
    logger.logError(err as Error);
    return undefined;
  }
};
