var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, {
            get: all[name],
            enumerable: true
        });
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
    value: true
}), mod);

// src/enhancedClients/ors2.ts
var ors2_exports = {};
__export(ors2_exports, {
    AgentCandidateInvitationContextState: () => AgentCandidateInvitationContextState,
    AtrfCreationTimeFrame: () => AtrfCreationTimeFrame,
    AtrfStatus: () => AtrfStatus,
    AwardingBodySystem: () => AwardingBodySystem,
    BandScoreType: () => BandScoreType,
    BatchExamFormat: () => BatchExamFormat,
    BatchIeltsModule: () => BatchIeltsModule,
    CandidateB2CErrorCodes: () => CandidateB2CErrorCodes,
    CandidateMarketingPreferences: () => CandidateMarketingPreferences,
    CandidateRegistrationHistoryType: () => CandidateRegistrationHistoryType,
    ComponentType: () => ComponentType,
    EnquiryOnResultsStatus: () => EnquiryOnResultsStatus,
    ExamFormat: () => ExamFormat,
    ExamMode: () => ExamMode,
    ExternalUserErrorCodes: () => ExternalUserErrorCodes,
    HelpShortCodes: () => HelpShortCodes,
    IeltsModule: () => IeltsModule,
    IwasFailSeverity: () => IwasFailSeverity,
    MarketingQuestionShortCode: () => MarketingQuestionShortCode,
    NotificationType: () => NotificationType,
    PreRegisterRequestPreregisterType: () => PreRegisterRequestPreregisterType,
    ProductType: () => ProductType,
    PromoCodeType: () => PromoCodeType,
    RegistrationDocumentFileStatus: () => RegistrationDocumentFileStatus,
    RegistrationDocumentStatus: () => RegistrationDocumentStatus,
    RegistrationDocumentType: () => RegistrationDocumentType,
    RegistrationStatus: () => RegistrationStatus,
    ResultDeliveryType: () => ResultDeliveryType,
    SalesChannels: () => SalesChannels,
    SelfServiceType: () => SelfServiceType,
    SpeakingFormat: () => SpeakingFormat,
    Tax: () => Tax,
    TimeTableSession: () => TimeTableSession,
    TransactionItemStatus: () => TransactionItemStatus,
    WhoPaysType: () => WhoPaysType,
    addressClient: () => addressClient,
    axios: () => axios,
    candidateClient: () => candidateClient,
    candidateDocumentClient: () => candidateDocumentClient,
    centreClient: () => centreClient,
    enquiryOnResultClient: () => enquiryOnResultClient,
    enumClient: () => enumClient,
    examResultClient: () => examResultClient,
    getRegistrationResultDeliveryDetailsClient: () => getRegistrationResultDeliveryDetailsClient,
    getRegistrationResultScoresClient: () => getRegistrationResultScoresClient,
    marketingQuestionsClient: () => marketingQuestionsClient,
    organisationClient: () => organisationClient,
    organisationCountryClient: () => organisationCountryClient,
    passwordClient: () => passwordClient,
    paymentClient: () => paymentClient,
    pricingClient: () => pricingClient,
    productFinderClient: () => productFinderClient,
    provisionalCandidateClient: () => provisionalCandidateClient,
    registerOrs2Interceptors: () => registerOrs2Interceptors,
    registrationClient: () => registrationClient,
    registrationDocumentClient: () => registrationDocumentClient,
    registrationEnquiryOnResultsReadClient: () => registrationEnquiryOnResultsReadClient,
    registrationEnquiryOnResultsSumbitClient: () => registrationEnquiryOnResultsSumbitClient,
    registrationGetInvitationContextStateClient: () => registrationGetInvitationContextStateClient,
    registrationNotificationClient: () => registrationNotificationClient,
    registrationReceivingOrganisationsClient: () => registrationReceivingOrganisationsClient,
    registrationTaxFeeCalculatorClient: () => registrationTaxFeeCalculatorClient,
    registrationTransferClient: () => registrationTransferClient,
    stedOrganisationClient: () => stedOrganisationClient,
    termsAndConditionsTypeClient: () => termsAndConditionsTypeClient,
    transactionClient: () => transactionClient,
    updateChildConsentSettingsClient: () => updateChildConsentSettingsClient,
    validationClient: () => validationClient
});
module.exports = __toCommonJS(ors2_exports);
var import_react_common = require("@britishcouncil/react-common");

// src/clients/ors2.ts
var import_axios = __toESM(require("axios"));
var axios = import_axios.default.create({
    baseURL: ""
});
var addressClient = {
    findAddressInCountry(isoCode, query, $config) {
        let url = "/api/addresses/country/{isoCode}/find";
        url = url.replace("{isoCode}", encodeURIComponent("" + isoCode));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                query: serializeQueryParam(query)
            }
        }, $config));
    }
};
var candidateClient = {
    changePassword(changePasswordModel, $config) {
        let url = "/api/candidates/password/change";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: changePasswordModel
        }, $config));
    },
    checkCurrentInvite($config) {
        let url = "/api/candidates/inviteparent/checkcurrentinvite";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    doesCandidateExist(email, $config) {
        let url = "/api/candidates/exists/{email}";
        url = url.replace("{email}", encodeURIComponent("" + email));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCandidate($config) {
        let url = "/api/candidates/basic";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCandidateAdditionalDetails($config) {
        let url = "/api/candidates/details/additional";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCandidateChildren($config) {
        let url = "/api/candidates/details/someoneelse/basic";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCandidateDetailsExtended($config) {
        let url = "/api/candidates/details/personal/extended";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCandidateDetailsForBooking($config) {
        let url = "/api/candidates/details/personal";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCandidateForDraftVerification($config) {
        let url = "/api/candidates/draft";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCandidateFromMCR($config) {
        let url = "/api/candidates/mcr";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCandidateRegistrationHistory(candidateRegistrationHistoryType, $config) {
        let url = "/api/candidates/registration/history/{candidateRegistrationHistoryType}";
        url = url.replace("{candidateRegistrationHistoryType}", encodeURIComponent("" + candidateRegistrationHistoryType));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCandidateRegistrations(candidateId, $config) {
        let url = "/api/candidates/{candidateId}/registrations";
        url = url.replace("{candidateId}", encodeURIComponent("" + candidateId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getMinorCandidate(id, $config) {
        let url = "/api/candidates/details/someoneelse/{id}";
        url = url.replace("{id}", encodeURIComponent("" + id));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getMinorCandidateExtended(id, $config) {
        let url = "/api/candidates/details/someone-else/{id}/extended";
        url = url.replace("{id}", encodeURIComponent("" + id));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getParentCandidateBasicsByMinor(minorId, $config) {
        let url = "/api/candidates/api/candidates/parentbasic/{minorId}";
        url = url.replace("{minorId}", encodeURIComponent("" + minorId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getProfile($config) {
        let url = "/api/candidates/profile";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getProfileDetails($config) {
        let url = "/api/candidates/profile/details";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getVerifiedDetails($config) {
        let url = "/api/candidates/verified";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    processInviteToken(parentInviteToken, $config) {
        let url = "/api/candidates/inviteparent/processinvitetoken";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            params: {
                parentInviteToken: serializeQueryParam(parentInviteToken)
            }
        }, $config));
    },
    requestInvite(req, $config) {
        let url = "/api/candidates/inviteparent/requestinvite";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: req
        }, $config));
    },
    resetPasswordAtFirstLogin(resetPasswordAtFirstLoginModel, $config) {
        let url = "/api/candidates/resetpasswordatfirstlogin";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: resetPasswordAtFirstLoginModel
        }, $config));
    },
    saveB2CCandidate(model, $config) {
        let url = "/api/candidates/B2C";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    },
    saveCandidateAdditionalDetails(model, $config) {
        let url = "/api/candidates/details/additional";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    },
    saveCandidateDetailsForBooking(model, $config) {
        let url = "/api/candidates/details/personal";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    },
    saveCandidateDetailsForBooking2(model, awardingBodySystem, productFamilyId, $config) {
        let url = "/api/candidates/details/personal/{awardingBodySystem}/{productFamilyId}";
        url = url.replace("{awardingBodySystem}", encodeURIComponent("" + awardingBodySystem));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    },
    saveCandidateDetailsForBookingWithName(model, $config) {
        let url = "/api/candidates/details/personal-with-name";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    },
    saveCandidateDetailsForBookingWithName2(model, awardingBodySystem, productFamilyId, $config) {
        let url = "/api/candidates/details/personal-with-name/{awardingBodySystem}/{productFamilyId}";
        url = url.replace("{awardingBodySystem}", encodeURIComponent("" + awardingBodySystem));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    },
    saveCandidateIDDetails(model, $config) {
        let url = "/api/candidates/details/id";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    },
    saveCandidateMissingDetails(missingDetails, $config) {
        let url = "/api/candidates/details/missing";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: missingDetails
        }, $config));
    },
    saveSomeoneElseDetailsForBooking(model, $config) {
        let url = "/api/candidates/details/someoneelse/personal";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    },
    setCandidateEmail(model, $config) {
        let url = "/api/candidates/setemail";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    },
    updateMarketingPreferences(marketingPreferences, $config) {
        let url = "/api/candidates/marketingpreferences/update/{marketingPreferences}";
        url = url.replace("{marketingPreferences}", encodeURIComponent("" + marketingPreferences));
        return axios.request(__spreadValues({
            url,
            method: "POST"
        }, $config));
    },
    updateSmsNotificationsAllowed(smsNotificationsAllowed, $config) {
        let url = "/api/candidates/sms-notifications/update/{smsNotificationsAllowed}";
        url = url.replace("{smsNotificationsAllowed}", encodeURIComponent("" + smsNotificationsAllowed));
        return axios.request(__spreadValues({
            url,
            method: "POST"
        }, $config));
    },
    validatePostCodeAndGetAddress(model, $config) {
        let url = "/api/candidates/details/validate/postcode";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    },
    verifyCandidateLastMarketingAnswers(candidateId, verifyCandidateMarketingAnswer, $config) {
        let url = "/api/candidates/{candidateId}/marketing-answers/verify";
        url = url.replace("{candidateId}", encodeURIComponent("" + candidateId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: verifyCandidateMarketingAnswer
        }, $config));
    },
    verifyInviteToken(parentInviteToken, $config) {
        let url = "/api/candidates/inviteparent/verifyinvitetoken";
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                parentInviteToken: serializeQueryParam(parentInviteToken)
            }
        }, $config));
    }
};
var candidateDocumentClient = {
    copyDocumentsIfEmptyFromLastRegistration(candidateId, documentType, $config) {
        let url = "/api/candidateDocument/{documentType}/candidate/{candidateId}/prepare";
        url = url.replace("{candidateId}", encodeURIComponent("" + candidateId));
        url = url.replace("{documentType}", encodeURIComponent("" + documentType));
        return axios.request(__spreadValues({
            url,
            method: "POST"
        }, $config));
    },
    deleteAll(candidateId, documentType, $config) {
        let url = "/api/candidateDocument/{documentType}/candidate/{candidateId}/all";
        url = url.replace("{candidateId}", encodeURIComponent("" + candidateId));
        url = url.replace("{documentType}", encodeURIComponent("" + documentType));
        return axios.request(__spreadValues({
            url,
            method: "DELETE"
        }, $config));
    },
    deleteDocument(candidateId, candidateDocumentId, $config) {
        let url = "/api/candidateDocument/{candidateDocumentId}/candidate/{candidateId}";
        url = url.replace("{candidateId}", encodeURIComponent("" + candidateId));
        url = url.replace("{candidateDocumentId}", encodeURIComponent("" + candidateDocumentId));
        return axios.request(__spreadValues({
            url,
            method: "DELETE"
        }, $config));
    },
    get(candidateId, documentType, $config) {
        let url = "/api/candidateDocument/{documentType}/candidate/{candidateId}";
        url = url.replace("{candidateId}", encodeURIComponent("" + candidateId));
        url = url.replace("{documentType}", encodeURIComponent("" + documentType));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    upload(candidateId, files, documentType, $config) {
        let url = "/api/candidateDocument/{documentType}/candidate/{candidateId}";
        url = url.replace("{candidateId}", encodeURIComponent("" + candidateId));
        url = url.replace("{documentType}", encodeURIComponent("" + documentType));
        const formDataBody = new FormData();
        if (!!files) {
            files.forEach((f) => formDataBody.append("files", f));
        }
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: formDataBody
        }, $config));
    },
    verifyDocuments(candidateId, documentType, $config) {
        let url = "/api/candidateDocument/{documentType}/candidate/{candidateId}/verify";
        url = url.replace("{candidateId}", encodeURIComponent("" + candidateId));
        url = url.replace("{documentType}", encodeURIComponent("" + documentType));
        return axios.request(__spreadValues({
            url,
            method: "POST"
        }, $config));
    }
};
var centreClient = {
    getCentreContactDetails(centreId, $config) {
        let url = "/api/centre/{centreId}/contact-details";
        url = url.replace("{centreId}", encodeURIComponent("" + centreId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCentreIdByRegistration(registrationId, $config) {
        let url = "/api/centre/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    isMobileNumberRequired(centreId, $config) {
        let url = "/api/is-mobile-number-required/{centreId}";
        url = url.replace("{centreId}", encodeURIComponent("" + centreId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var enquiryOnResultClient = {
    getDetails(registrationId, $config) {
        let url = "/api/enquiry-on-result/registration/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    uploadSupportingEvidenceFiles(registrationId, files, $config) {
        let url = "/api/enquiry-on-result/registration/{registrationId}/supporting-evidence/upload";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        const formDataBody = new FormData();
        if (!!files) {
            files.forEach((f) => formDataBody.append("files", f));
        }
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: formDataBody
        }, $config));
    }
};
var examResultClient = {
    getExamResultDeliveryDetails(registrationId, $config) {
        let url = "/api/exam-result/exam-result-delivery-details/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getTrfNumber(registrationId, $config) {
        let url = "/api/exam-result/tfr-number/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var marketingQuestionsClient = {
    getMarketingQuestions(awardingBodySystem, $config) {
        let url = "/api/marketingquestions";
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                awardingBodySystem: serializeQueryParam(awardingBodySystem)
            }
        }, $config));
    }
};
var organisationClient = {
    getOrganisationByAlias(alias, $config) {
        let url = "/api/organisation/alias/{alias}";
        url = url.replace("{alias}", encodeURIComponent("" + alias));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var organisationCountryClient = {
    getEorSettings(organisationCountryId, $config) {
        let url = "/api/organisationcountry/{organisationCountryId}/eorSettings";
        url = url.replace("{organisationCountryId}", encodeURIComponent("" + organisationCountryId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var passwordClient = {
    forgot(email, $config) {
        let url = "/api/password/forgot";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            params: {
                email: serializeQueryParam(email)
            }
        }, $config));
    },
    resetPassword(model, $config) {
        let url = "/api/password/reset";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    }
};
var paymentClient = {
    getTransactionsPaymentDetails(registrationId, transactionId, $config) {
        let url = "/api/registration/{registrationId}/payment/details/{transactionId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        url = url.replace("{transactionId}", encodeURIComponent("" + transactionId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getTransactionsPaymentDetailsForRegistration(registrationId, $config) {
        let url = "/api/registration/testtaker/payment/details/transactions/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    payOffline(registrationId, $config) {
        let url = "/api/registration/payment/offline/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST"
        }, $config));
    }
};
var pricingClient = {
    calculateProductPrice(productPricingRequest, $config) {
        let url = "/api/pricing";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: productPricingRequest
        }, $config));
    }
};
var productFinderClient = {
    getDistrictsForCountry(isoCode, $config) {
        let url = "/api/product-finder/countries/{isoCode}/districts";
        url = url.replace("{isoCode}", encodeURIComponent("" + isoCode));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getExamsForCountry(isoCode, productFinderGetExamsForCountryQuery, $config) {
        let url = "/api/product-finder/countries/{isoCode}/exams";
        url = url.replace("{isoCode}", encodeURIComponent("" + isoCode));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                districtId: serializeQueryParam(productFinderGetExamsForCountryQuery.districtId),
                from: serializeQueryParam(productFinderGetExamsForCountryQuery.from),
                to: serializeQueryParam(productFinderGetExamsForCountryQuery.to)
            }
        }, $config));
    },
    getProductFinderRegistrationData(plannedExamId, venueId, $config) {
        let url = "/api/registration/productfinder/{plannedExamId}";
        url = url.replace("{plannedExamId}", encodeURIComponent("" + plannedExamId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                venueId: serializeQueryParam(venueId)
            }
        }, $config));
    }
};
var provisionalCandidateClient = {
    acceptDraft(candidate, $config) {
        let url = "/api/provisionalcandidates/accept";
        return axios.request(__spreadValues({
            url,
            method: "PUT",
            data: candidate
        }, $config));
    },
    declineForLoggedCandidate($config) {
        let url = "/api/provisionalcandidates/decline";
        return axios.request(__spreadValues({
            url,
            method: "POST"
        }, $config));
    }
};
var registrationClient = {
    createRegistration(registrationRequest, $config) {
        let url = "/api/registrations/register";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: registrationRequest
        }, $config));
    },
    getMarketingInfo(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/marketing";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getRegistrationReview(id, $config) {
        let url = "/api/registrations/{id}/review";
        url = url.replace("{id}", encodeURIComponent("" + id));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    preRegister(req, $config) {
        let url = "/api/registrations/pre-register";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: req
        }, $config));
    }
};
var registrationDocumentClient = {
    createMedicalEvidence(registrationId, files, $config) {
        let url = "/api/registrations/{registrationId}/documents/medical-evidence";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        const formDataBody = new FormData();
        if (!!files) {
            files.forEach((f) => formDataBody.append("files", f));
        }
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: formDataBody
        }, $config));
    },
    createProofOfPayment(registrationId, files, productTypeId, subTypeId, $config) {
        let url = "/api/registrations/{registrationId}/documents/proof-of-payment";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        const formDataBody = new FormData();
        if (!!files) {
            files.forEach((f) => formDataBody.append("files", f));
        }
        if (!!productTypeId) {
            formDataBody.append("productTypeId", productTypeId.toString());
        }
        if (!!subTypeId) {
            formDataBody.append("subTypeId", subTypeId.toString());
        }
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: formDataBody
        }, $config));
    },
    getFileUrl(id, forceDownload, $config) {
        let url = "/api/registrations/file/{id}/url";
        url = url.replace("{id}", encodeURIComponent("" + id));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                forceDownload: serializeQueryParam(forceDownload)
            }
        }, $config));
    },
    getIdentityDocumentsFiles(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/documents-with-sas/identification";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getIdentityDocumentsWithStatuses(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/documents/identification";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getMedicalDocumentsWithStatuses(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/documents/medicalevidence";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getMedicalEvidenceDocumentsFiles(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/documents-with-sas/medicalevidence";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getProofOfPaymentDocumentsFiles(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/documents-with-sas/proofofpayments";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getProofOfPaymentDocumentsWithStatuses(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/documents/proofofpayments";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getRegistrationDocumentsStatus(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/documents/status";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getRegistrationMissingDocuments(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/documents/missing";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    removeFileFromDocument(fileId, $config) {
        let url = "/api/registrations/documents/files/{fileId}";
        url = url.replace("{fileId}", encodeURIComponent("" + fileId));
        return axios.request(__spreadValues({
            url,
            method: "DELETE"
        }, $config));
    },
    uploadFileForDocument(documentId, files, $config) {
        let url = "/api/registrations/documents/{documentId}/file";
        url = url.replace("{documentId}", encodeURIComponent("" + documentId));
        const formDataBody = new FormData();
        if (!!files) {
            files.forEach((f) => formDataBody.append("files", f));
        }
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: formDataBody
        }, $config));
    }
};
var registrationNotificationClient = {
    getNotifications(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/notifications";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    markNotificationsAsSeen(registrationId, notificationType, $config) {
        let url = "/api/registrations/{registrationId}/notifications/{notificationType}/mark-as-seen";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        url = url.replace("{notificationType}", encodeURIComponent("" + notificationType));
        return axios.request(__spreadValues({
            url,
            method: "POST"
        }, $config));
    }
};
var stedOrganisationClient = {
    getStedOrganisationByCountry(countryId, $config) {
        let url = "/api/stedorganisations/country/{countryId}";
        url = url.replace("{countryId}", encodeURIComponent("" + countryId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var termsAndConditionsTypeClient = {
    addConsentToAccountTermsAndConditions(request, $config) {
        let url = "/api/terms-and-conditions-types/consent/account";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    addConsentToRegistrationTermsAndConditions(request, registrationId, organisationCountryId, $config) {
        let url = "/api/terms-and-conditions-types/consent/registration/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request,
            params: {
                organisationCountryId: serializeQueryParam(organisationCountryId)
            }
        }, $config));
    },
    checkIfTermsAndConditionsUpdated(request, $config) {
        let url = "/api/terms-and-conditions-types/check";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    generateTermsAndConditionsPdf(request, $config) {
        let url = "/api/terms-and-conditions-types/pdf";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    getLastAcceptedTermsAndConditionsNewestVersionNumber(shortCode, productGroupShortCode, subSystemName, termsAndConditionsTypeGetLastAcceptedTermsAndConditionsNewestVersionNumberQuery, $config) {
        let url = "/api/terms-and-conditions-types/{shortCode}/product/shortcode/{productGroupShortCode}/subsystem/{subSystemName}/version/lastAccepted";
        url = url.replace("{shortCode}", encodeURIComponent("" + shortCode));
        url = url.replace("{productGroupShortCode}", encodeURIComponent("" + productGroupShortCode));
        url = url.replace("{subSystemName}", encodeURIComponent("" + subSystemName));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                registrationId: serializeQueryParam(termsAndConditionsTypeGetLastAcceptedTermsAndConditionsNewestVersionNumberQuery.registrationId),
                organisationCountryId: serializeQueryParam(termsAndConditionsTypeGetLastAcceptedTermsAndConditionsNewestVersionNumberQuery.organisationCountryId)
            }
        }, $config));
    },
    getPreviousAcceptedTermsAndConditionsNewestVersionNumber(shortCode, productGroupShortCode, subSystemName, termsAndConditionsTypeGetPreviousAcceptedTermsAndConditionsNewestVersionNumberQuery, $config) {
        let url = "/api/terms-and-conditions-types/{shortCode}/product/shortcode/{productGroupShortCode}/subsystem/{subSystemName}/version/previousAccepted";
        url = url.replace("{shortCode}", encodeURIComponent("" + shortCode));
        url = url.replace("{productGroupShortCode}", encodeURIComponent("" + productGroupShortCode));
        url = url.replace("{subSystemName}", encodeURIComponent("" + subSystemName));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                registrationId: serializeQueryParam(termsAndConditionsTypeGetPreviousAcceptedTermsAndConditionsNewestVersionNumberQuery.registrationId),
                organisationCountryId: serializeQueryParam(termsAndConditionsTypeGetPreviousAcceptedTermsAndConditionsNewestVersionNumberQuery.organisationCountryId)
            }
        }, $config));
    },
    getRegistrationTermsAndConditionsShortCode(registrationId, organisationCountryId, $config) {
        let url = "/api/terms-and-conditions-types/registration/{registrationId}/short-code";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                organisationCountryId: serializeQueryParam(organisationCountryId)
            }
        }, $config));
    },
    getTermsAndConditionsNewestVersionNumber(shortCode, productGroupShortCode, subSystemName, organisationCountryId, $config) {
        let url = "/api/terms-and-conditions-types/{shortCode}/product/shortcode/{productGroupShortCode}/subsystem/{subSystemName}/version";
        url = url.replace("{shortCode}", encodeURIComponent("" + shortCode));
        url = url.replace("{productGroupShortCode}", encodeURIComponent("" + productGroupShortCode));
        url = url.replace("{subSystemName}", encodeURIComponent("" + subSystemName));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                organisationCountryId: serializeQueryParam(organisationCountryId)
            }
        }, $config));
    }
};
var transactionClient = {
    getTransactionsForSpecifiedProductWithSpecifiedStatus(registrationId, transactionGetTransactionsForSpecifiedProductWithSpecifiedStatusQuery, $config) {
        let url = "/api/transaction/registration/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                productType: serializeQueryParam(transactionGetTransactionsForSpecifiedProductWithSpecifiedStatusQuery.productType),
                transactionStatus: serializeQueryParam(transactionGetTransactionsForSpecifiedProductWithSpecifiedStatusQuery.transactionStatus)
            }
        }, $config));
    }
};
var getRegistrationResultDeliveryDetailsClient = {
    getRegistrationResultDeliveryDetails(registrationId, $config) {
        let url = "/api/registrations/results/deliverydetails/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var getRegistrationResultScoresClient = {
    getRegistrationResultScores(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/results/scores";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var registrationEnquiryOnResultsReadClient = {
    getEoRDetails(registrationId, $config) {
        let url = "/api/registration/{registrationId}/eor/details";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var registrationEnquiryOnResultsSumbitClient = {
    createEoR(registrationId, model, $config) {
        let url = "/api/registration/{registrationId}/eor";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
        }, $config));
    }
};
var registrationGetInvitationContextStateClient = {
    getInvitationContextState($config) {
        let url = "/api/registration/invitationcontext/state";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var registrationReceivingOrganisationsClient = {
    addReceivingOrganisation(registrationId, request, $config) {
        let url = "/api/registrations/{registrationId}/receiving-organisations";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    cancelReceivingOrganisation(registrationId, selectionId, $config) {
        let url = "/api/registrations/{registrationId}/receiving-organisations/{selectionId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        url = url.replace("{selectionId}", encodeURIComponent("" + selectionId));
        return axios.request(__spreadValues({
            url,
            method: "DELETE"
        }, $config));
    },
    getReceivingOrganisationDetails(registrationId, selectionId, $config) {
        let url = "/api/registrations/{registrationId}/receiving-organisations/{selectionId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        url = url.replace("{selectionId}", encodeURIComponent("" + selectionId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    updateReceivingOrganisation(registrationId, selectionId, request, $config) {
        let url = "/api/registrations/{registrationId}/receiving-organisations/{selectionId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        url = url.replace("{selectionId}", encodeURIComponent("" + selectionId));
        return axios.request(__spreadValues({
            url,
            method: "PUT",
            data: request
        }, $config));
    }
};
var registrationTaxFeeCalculatorClient = {
    getComputedTaxesFeeForRegistration(registrationTaxFeeCalculatorGetComputedTaxesFeeForRegistrationQuery, $config) {
        let url = "/api/registration/computeTaxedFee";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            params: {
                orgCountryId: serializeQueryParam(registrationTaxFeeCalculatorGetComputedTaxesFeeForRegistrationQuery.orgCountryId),
                fee: serializeQueryParam(registrationTaxFeeCalculatorGetComputedTaxesFeeForRegistrationQuery.fee)
            }
        }, $config));
    }
};
var registrationTransferClient = {
    transferSpeaking(registrationId, speakingTransfer, $config) {
        let url = "/api/registrations/{registrationId}/speaking-transfer";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: speakingTransfer
        }, $config));
    }
};
var updateChildConsentSettingsClient = {
    updateChildConsentSettings(childConsent, $config) {
        let url = "/api/registrations/childconsent";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: childConsent
        }, $config));
    }
};
var validationClient = {
    getValidations($config) {
        let url = "/api/validation";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var enumClient = {
    getSpeakingFormat($config) {
        let url = "/api/enum/speakingformat";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};

function serializeQueryParam(obj) {
    if (obj === null || obj === void 0)
        return "";
    if (obj instanceof Date)
        return obj.toJSON();
    if (typeof obj !== "object" || Array.isArray(obj))
        return obj;
    return Object.keys(obj).reduce((a, b) => a.push(b + "=" + obj[b]) && a, []).join("&");
}
var CandidateMarketingPreferences = /* @__PURE__ */ ((CandidateMarketingPreferences2) => {
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["None"] = 0] = "None";
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["BcOnly"] = 1] = "BcOnly";
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["BcAndThird"] = 2] = "BcAndThird";
    return CandidateMarketingPreferences2;
})(CandidateMarketingPreferences || {});
var ExamFormat = /* @__PURE__ */ ((ExamFormat2) => {
    ExamFormat2[ExamFormat2["PB"] = 1] = "PB";
    ExamFormat2[ExamFormat2["CD"] = 2] = "CD";
    return ExamFormat2;
})(ExamFormat || {});
var RegistrationDocumentFileStatus = /* @__PURE__ */ ((RegistrationDocumentFileStatus2) => {
    RegistrationDocumentFileStatus2[RegistrationDocumentFileStatus2["Pending"] = 1] = "Pending";
    RegistrationDocumentFileStatus2[RegistrationDocumentFileStatus2["Approved"] = 2] = "Approved";
    RegistrationDocumentFileStatus2[RegistrationDocumentFileStatus2["Rejected"] = 3] = "Rejected";
    RegistrationDocumentFileStatus2[RegistrationDocumentFileStatus2["Reviewed"] = 4] = "Reviewed";
    RegistrationDocumentFileStatus2[RegistrationDocumentFileStatus2["Deleted"] = 5] = "Deleted";
    return RegistrationDocumentFileStatus2;
})(RegistrationDocumentFileStatus || {});
var AwardingBodySystem = /* @__PURE__ */ ((AwardingBodySystem2) => {
    AwardingBodySystem2[AwardingBodySystem2["CMDS"] = 1] = "CMDS";
    AwardingBodySystem2[AwardingBodySystem2["IWAS"] = 2] = "IWAS";
    return AwardingBodySystem2;
})(AwardingBodySystem || {});
var IeltsModule = /* @__PURE__ */ ((IeltsModule2) => {
    IeltsModule2[IeltsModule2["AC"] = 1] = "AC";
    IeltsModule2[IeltsModule2["GT"] = 2] = "GT";
    return IeltsModule2;
})(IeltsModule || {});
var RegistrationStatus = /* @__PURE__ */ ((RegistrationStatus2) => {
    RegistrationStatus2[RegistrationStatus2["Incomplete"] = 1] = "Incomplete";
    RegistrationStatus2[RegistrationStatus2["Confirmed"] = 2] = "Confirmed";
    RegistrationStatus2[RegistrationStatus2["Cancelled"] = 3] = "Cancelled";
    RegistrationStatus2[RegistrationStatus2["AwaitingResults"] = 4] = "AwaitingResults";
    RegistrationStatus2[RegistrationStatus2["HasResults"] = 5] = "HasResults";
    return RegistrationStatus2;
})(RegistrationStatus || {});
var EnquiryOnResultsStatus = /* @__PURE__ */ ((EnquiryOnResultsStatus2) => {
    EnquiryOnResultsStatus2[EnquiryOnResultsStatus2["New"] = 1] = "New";
    EnquiryOnResultsStatus2[EnquiryOnResultsStatus2["Cancelled"] = 2] = "Cancelled";
    EnquiryOnResultsStatus2[EnquiryOnResultsStatus2["Triggered"] = 3] = "Triggered";
    EnquiryOnResultsStatus2[EnquiryOnResultsStatus2["Completed"] = 4] = "Completed";
    EnquiryOnResultsStatus2[EnquiryOnResultsStatus2["Paid"] = 5] = "Paid";
    EnquiryOnResultsStatus2[EnquiryOnResultsStatus2["ResultsChanged"] = 6] = "ResultsChanged";
    EnquiryOnResultsStatus2[EnquiryOnResultsStatus2["ScoreEntered"] = 8] = "ScoreEntered";
    return EnquiryOnResultsStatus2;
})(EnquiryOnResultsStatus || {});
var PromoCodeType = /* @__PURE__ */ ((PromoCodeType2) => {
    PromoCodeType2[PromoCodeType2["None"] = 0] = "None";
    PromoCodeType2[PromoCodeType2["Discount"] = 1] = "Discount";
    PromoCodeType2[PromoCodeType2["OtherBenefit"] = 2] = "OtherBenefit";
    PromoCodeType2[PromoCodeType2["DiscountAndOtherBenefit"] = 3] = "DiscountAndOtherBenefit";
    return PromoCodeType2;
})(PromoCodeType || {});
var SpeakingFormat = /* @__PURE__ */ ((SpeakingFormat2) => {
    SpeakingFormat2[SpeakingFormat2["Live"] = 1] = "Live";
    SpeakingFormat2[SpeakingFormat2["Remote"] = 2] = "Remote";
    return SpeakingFormat2;
})(SpeakingFormat || {});
var SelfServiceType = /* @__PURE__ */ ((SelfServiceType2) => {
    SelfServiceType2[SelfServiceType2["Cancellation"] = 0] = "Cancellation";
    SelfServiceType2[SelfServiceType2["Transfer"] = 1] = "Transfer";
    return SelfServiceType2;
})(SelfServiceType || {});
var WhoPaysType = /* @__PURE__ */ ((WhoPaysType2) => {
    WhoPaysType2[WhoPaysType2["AgentOrTestTaker"] = 0] = "AgentOrTestTaker";
    WhoPaysType2[WhoPaysType2["Agent"] = 1] = "Agent";
    WhoPaysType2[WhoPaysType2["TestTaker"] = 2] = "TestTaker";
    return WhoPaysType2;
})(WhoPaysType || {});
var ComponentType = /* @__PURE__ */ ((ComponentType2) => {
    ComponentType2[ComponentType2["Listening"] = 1] = "Listening";
    ComponentType2[ComponentType2["Reading"] = 2] = "Reading";
    ComponentType2[ComponentType2["Writing"] = 3] = "Writing";
    ComponentType2[ComponentType2["Speaking"] = 4] = "Speaking";
    return ComponentType2;
})(ComponentType || {});
var CandidateRegistrationHistoryType = /* @__PURE__ */ ((CandidateRegistrationHistoryType2) => {
    CandidateRegistrationHistoryType2[CandidateRegistrationHistoryType2["Upcoming"] = 0] = "Upcoming";
    CandidateRegistrationHistoryType2[CandidateRegistrationHistoryType2["Completed"] = 1] = "Completed";
    CandidateRegistrationHistoryType2[CandidateRegistrationHistoryType2["All"] = 2] = "All";
    return CandidateRegistrationHistoryType2;
})(CandidateRegistrationHistoryType || {});
var RegistrationDocumentType = /* @__PURE__ */ ((RegistrationDocumentType2) => {
    RegistrationDocumentType2[RegistrationDocumentType2["SpecialArrangement"] = 1] = "SpecialArrangement";
    RegistrationDocumentType2[RegistrationDocumentType2["IdDocument"] = 2] = "IdDocument";
    RegistrationDocumentType2[RegistrationDocumentType2["AdditionalDocument"] = 3] = "AdditionalDocument";
    RegistrationDocumentType2[RegistrationDocumentType2["PaymentSlip"] = 4] = "PaymentSlip";
    return RegistrationDocumentType2;
})(RegistrationDocumentType || {});
var Tax = /* @__PURE__ */ ((Tax2) => {
    Tax2[Tax2["Rate"] = 1] = "Rate";
    Tax2[Tax2["Amount"] = 2] = "Amount";
    return Tax2;
})(Tax || {});
var ProductType = /* @__PURE__ */ ((ProductType2) => {
    ProductType2[ProductType2["Undefined"] = 0] = "Undefined";
    ProductType2[ProductType2["Transfer"] = 1] = "Transfer";
    ProductType2[ProductType2["ExamRegistration"] = 2] = "ExamRegistration";
    ProductType2[ProductType2["EnquiryOnResults"] = 3] = "EnquiryOnResults";
    ProductType2[ProductType2["Appeal"] = 4] = "Appeal";
    return ProductType2;
})(ProductType || {});
var TransactionItemStatus = /* @__PURE__ */ ((TransactionItemStatus2) => {
    TransactionItemStatus2[TransactionItemStatus2["Undefined"] = 0] = "Undefined";
    TransactionItemStatus2[TransactionItemStatus2["AwaitingPayment"] = 1] = "AwaitingPayment";
    TransactionItemStatus2[TransactionItemStatus2["Refunded"] = 3] = "Refunded";
    TransactionItemStatus2[TransactionItemStatus2["PartiallyRefunded"] = 4] = "PartiallyRefunded";
    TransactionItemStatus2[TransactionItemStatus2["Paid"] = 5] = "Paid";
    TransactionItemStatus2[TransactionItemStatus2["Cancelled"] = 6] = "Cancelled";
    return TransactionItemStatus2;
})(TransactionItemStatus || {});
var TimeTableSession = /* @__PURE__ */ ((TimeTableSession2) => {
    TimeTableSession2[TimeTableSession2["A"] = 1] = "A";
    TimeTableSession2[TimeTableSession2["P"] = 2] = "P";
    TimeTableSession2[TimeTableSession2["E"] = 3] = "E";
    TimeTableSession2[TimeTableSession2["D"] = 4] = "D";
    TimeTableSession2[TimeTableSession2["X"] = 5] = "X";
    return TimeTableSession2;
})(TimeTableSession || {});
var ExamMode = /* @__PURE__ */ ((ExamMode2) => {
    ExamMode2[ExamMode2["Full"] = 1] = "Full";
    ExamMode2[ExamMode2["OSR"] = 2] = "OSR";
    return ExamMode2;
})(ExamMode || {});
var PreRegisterRequestPreregisterType = /* @__PURE__ */ ((PreRegisterRequestPreregisterType2) => {
    PreRegisterRequestPreregisterType2[PreRegisterRequestPreregisterType2["Candidate"] = 0] = "Candidate";
    PreRegisterRequestPreregisterType2[PreRegisterRequestPreregisterType2["ExistingChild"] = 1] = "ExistingChild";
    PreRegisterRequestPreregisterType2[PreRegisterRequestPreregisterType2["NewChild"] = 2] = "NewChild";
    return PreRegisterRequestPreregisterType2;
})(PreRegisterRequestPreregisterType || {});
var AtrfCreationTimeFrame = /* @__PURE__ */ ((AtrfCreationTimeFrame2) => {
    AtrfCreationTimeFrame2[AtrfCreationTimeFrame2["BeforeIwasExport"] = 0] = "BeforeIwasExport";
    AtrfCreationTimeFrame2[AtrfCreationTimeFrame2["AfterIwasExport"] = 1] = "AfterIwasExport";
    AtrfCreationTimeFrame2[AtrfCreationTimeFrame2["AfterResults"] = 2] = "AfterResults";
    AtrfCreationTimeFrame2[AtrfCreationTimeFrame2["Unknown"] = 99] = "Unknown";
    return AtrfCreationTimeFrame2;
})(AtrfCreationTimeFrame || {});
var ResultDeliveryType = /* @__PURE__ */ ((ResultDeliveryType2) => {
    ResultDeliveryType2[ResultDeliveryType2["Post"] = 1] = "Post";
    ResultDeliveryType2[ResultDeliveryType2["TestCentre"] = 2] = "TestCentre";
    ResultDeliveryType2[ResultDeliveryType2["Online"] = 3] = "Online";
    ResultDeliveryType2[ResultDeliveryType2["Sms"] = 4] = "Sms";
    return ResultDeliveryType2;
})(ResultDeliveryType || {});
var RegistrationDocumentStatus = /* @__PURE__ */ ((RegistrationDocumentStatus2) => {
    RegistrationDocumentStatus2[RegistrationDocumentStatus2["Pending"] = 1] = "Pending";
    RegistrationDocumentStatus2[RegistrationDocumentStatus2["Approved"] = 2] = "Approved";
    RegistrationDocumentStatus2[RegistrationDocumentStatus2["Rejected"] = 3] = "Rejected";
    RegistrationDocumentStatus2[RegistrationDocumentStatus2["Reviewed"] = 4] = "Reviewed";
    RegistrationDocumentStatus2[RegistrationDocumentStatus2["Deleted"] = 5] = "Deleted";
    return RegistrationDocumentStatus2;
})(RegistrationDocumentStatus || {});
var NotificationType = /* @__PURE__ */ ((NotificationType2) => {
    NotificationType2[NotificationType2["Transfer"] = 0] = "Transfer";
    NotificationType2[NotificationType2["EnquiryOnResultsCompleted"] = 1] = "EnquiryOnResultsCompleted";
    NotificationType2[NotificationType2["EnquiryOnResultsRefunded"] = 2] = "EnquiryOnResultsRefunded";
    NotificationType2[NotificationType2["ResultsAvailable"] = 3] = "ResultsAvailable";
    NotificationType2[NotificationType2["TransferCancelled"] = 4] = "TransferCancelled";
    NotificationType2[NotificationType2["RefundRequestAccepted"] = 5] = "RefundRequestAccepted";
    NotificationType2[NotificationType2["RefundRequestRejected"] = 6] = "RefundRequestRejected";
    return NotificationType2;
})(NotificationType || {});
var AtrfStatus = /* @__PURE__ */ ((AtrfStatus2) => {
    AtrfStatus2[AtrfStatus2["New"] = 0] = "New";
    AtrfStatus2[AtrfStatus2["Completed"] = 1] = "Completed";
    return AtrfStatus2;
})(AtrfStatus || {});
var BandScoreType = /* @__PURE__ */ ((BandScoreType2) => {
    BandScoreType2[BandScoreType2["Listening"] = 0] = "Listening";
    BandScoreType2[BandScoreType2["Reading"] = 1] = "Reading";
    BandScoreType2[BandScoreType2["Writing"] = 2] = "Writing";
    BandScoreType2[BandScoreType2["Speaking"] = 3] = "Speaking";
    BandScoreType2[BandScoreType2["Overall"] = 4] = "Overall";
    BandScoreType2[BandScoreType2["LifeSkillsSpeaking"] = 5] = "LifeSkillsSpeaking";
    return BandScoreType2;
})(BandScoreType || {});
var AgentCandidateInvitationContextState = /* @__PURE__ */ ((AgentCandidateInvitationContextState2) => {
    AgentCandidateInvitationContextState2[AgentCandidateInvitationContextState2["Empty"] = 1] = "Empty";
    AgentCandidateInvitationContextState2[AgentCandidateInvitationContextState2["Erroneous"] = 2] = "Erroneous";
    AgentCandidateInvitationContextState2[AgentCandidateInvitationContextState2["Active"] = 3] = "Active";
    AgentCandidateInvitationContextState2[AgentCandidateInvitationContextState2["NotActive"] = 4] = "NotActive";
    return AgentCandidateInvitationContextState2;
})(AgentCandidateInvitationContextState || {});
var BatchExamFormat = /* @__PURE__ */ ((BatchExamFormat2) => {
    BatchExamFormat2[BatchExamFormat2["PaperBased"] = 1] = "PaperBased";
    BatchExamFormat2[BatchExamFormat2["ComputerDelivered"] = 2] = "ComputerDelivered";
    BatchExamFormat2[BatchExamFormat2["Both"] = 3] = "Both";
    return BatchExamFormat2;
})(BatchExamFormat || {});
var BatchIeltsModule = /* @__PURE__ */ ((BatchIeltsModule2) => {
    BatchIeltsModule2[BatchIeltsModule2["Academic"] = 1] = "Academic";
    BatchIeltsModule2[BatchIeltsModule2["GeneralTraining"] = 2] = "GeneralTraining";
    BatchIeltsModule2[BatchIeltsModule2["Both"] = 3] = "Both";
    return BatchIeltsModule2;
})(BatchIeltsModule || {});
var IwasFailSeverity = /* @__PURE__ */ ((IwasFailSeverity2) => {
    IwasFailSeverity2[IwasFailSeverity2["Warning"] = 0] = "Warning";
    IwasFailSeverity2[IwasFailSeverity2["Error"] = 1] = "Error";
    return IwasFailSeverity2;
})(IwasFailSeverity || {});
var ExternalUserErrorCodes = /* @__PURE__ */ ((ExternalUserErrorCodes2) => {
    ExternalUserErrorCodes2[ExternalUserErrorCodes2["FirstNameCannotBeEmpty"] = 0] = "FirstNameCannotBeEmpty";
    ExternalUserErrorCodes2[ExternalUserErrorCodes2["LastNameCannotBeEmpty"] = 1] = "LastNameCannotBeEmpty";
    ExternalUserErrorCodes2[ExternalUserErrorCodes2["EmailCannotBeEmpty"] = 2] = "EmailCannotBeEmpty";
    ExternalUserErrorCodes2[ExternalUserErrorCodes2["EmailIsInvalid"] = 3] = "EmailIsInvalid";
    ExternalUserErrorCodes2[ExternalUserErrorCodes2["AccountWithSameEmailAlreadyExists"] = 4] = "AccountWithSameEmailAlreadyExists";
    ExternalUserErrorCodes2[ExternalUserErrorCodes2["PasswordDoesNotMeetRequirements"] = 5] = "PasswordDoesNotMeetRequirements";
    ExternalUserErrorCodes2[ExternalUserErrorCodes2["UsernameIsInvalid"] = 6] = "UsernameIsInvalid";
    ExternalUserErrorCodes2[ExternalUserErrorCodes2["AccountWithSameUsernameAlreadyExist"] = 7] = "AccountWithSameUsernameAlreadyExist";
    ExternalUserErrorCodes2[ExternalUserErrorCodes2["UsernameCannotBeEmpty"] = 8] = "UsernameCannotBeEmpty";
    ExternalUserErrorCodes2[ExternalUserErrorCodes2["CannotModifyAzureB2CUserEmail"] = 9] = "CannotModifyAzureB2CUserEmail";
    return ExternalUserErrorCodes2;
})(ExternalUserErrorCodes || {});
var CandidateB2CErrorCodes = /* @__PURE__ */ ((CandidateB2CErrorCodes2) => {
    CandidateB2CErrorCodes2[CandidateB2CErrorCodes2["CandidateWithSameEmailAlreadyExistsButDoesNotHaveAccount"] = 0] = "CandidateWithSameEmailAlreadyExistsButDoesNotHaveAccount";
    CandidateB2CErrorCodes2[CandidateB2CErrorCodes2["AccountWithSameEmailAlreadyExists"] = 1] = "AccountWithSameEmailAlreadyExists";
    return CandidateB2CErrorCodes2;
})(CandidateB2CErrorCodes || {});
var HelpShortCodes = /* @__PURE__ */ ((HelpShortCodes2) => {
    HelpShortCodes2[HelpShortCodes2["Common_Questions_IELTS"] = 0] = "Common_Questions_IELTS";
    return HelpShortCodes2;
})(HelpShortCodes || {});
var MarketingQuestionShortCode = /* @__PURE__ */ ((MarketingQuestionShortCode2) => {
    MarketingQuestionShortCode2[MarketingQuestionShortCode2["Other"] = 0] = "Other";
    MarketingQuestionShortCode2[MarketingQuestionShortCode2["CountryOfNationality"] = 1] = "CountryOfNationality";
    MarketingQuestionShortCode2[MarketingQuestionShortCode2["MainLanguageSpoken"] = 2] = "MainLanguageSpoken";
    MarketingQuestionShortCode2[MarketingQuestionShortCode2["YearsOfStudyingEnglish"] = 3] = "YearsOfStudyingEnglish";
    MarketingQuestionShortCode2[MarketingQuestionShortCode2["EducationLevel"] = 4] = "EducationLevel";
    MarketingQuestionShortCode2[MarketingQuestionShortCode2["OccupationSector"] = 5] = "OccupationSector";
    MarketingQuestionShortCode2[MarketingQuestionShortCode2["ReasonForTakingTest"] = 6] = "ReasonForTakingTest";
    MarketingQuestionShortCode2[MarketingQuestionShortCode2["CountryBeingApplied"] = 7] = "CountryBeingApplied";
    MarketingQuestionShortCode2[MarketingQuestionShortCode2["OccupationLevel"] = 8] = "OccupationLevel";
    return MarketingQuestionShortCode2;
})(MarketingQuestionShortCode || {});
var SalesChannels = /* @__PURE__ */ ((SalesChannels2) => {
    SalesChannels2["Admin"] = "SALESCHANNEL~Admin";
    SalesChannels2["B2B"] = "SALESCHANNEL~B2B";
    SalesChannels2["B2C"] = "SALESCHANNEL~B2C";
    SalesChannels2["ExternalOrganisation"] = "SALESCHANNEL~ExternalOrganisation";
    return SalesChannels2;
})(SalesChannels || {});

// src/utils/adapters.ts
var import_axios_extensions = require("axios-extensions");
var addAdapters = (axios2, threshold = 3e3) => axios2.defaults.adapter = (0, import_axios_extensions.throttleAdapterEnhancer)((0, import_axios_extensions.cacheAdapterEnhancer)(axios2.defaults.adapter, {
    enabledByDefault: false
}), {
    threshold
});

// src/utils/retry.ts
var import_axios_retry = __toESM(require("axios-retry"));
var addRetry = (axios2, threshold = 3e3, retryCondition) => (0, import_axios_retry.default)(axios2, {
    retries: 1,
    retryDelay: () => threshold,
    retryCondition
});

// src/utils/interceptors/authInterceptor.ts
var UNAUTHORIZED = 401;
var LOGIN_URL = "/api/auth/";

function shouldAddAuthToken(url) {
    if (!url) {
        return false;
    }
    return url.indexOf("/") === 0 && url.indexOf(LOGIN_URL) !== 0;
}

function useAuthInterceptor(axios2, authActions) {
    axios2.interceptors.request.use((config) => {
        if (!shouldAddAuthToken(config.url)) {
            return config;
        }
        const authState = authActions.provideState();
        if (!authState || !authState.isLoggedIn) {
            return config;
        }
        if (config.headers) {
            config.headers.Authorization = "Bearer " + authState.accessToken;
        }
        return config;
    });
    axios2.interceptors.response.use((resp) => resp, (err) => {
        if (err.response && err.response.status === UNAUTHORIZED) {
            authActions.logout();
        }
        return Promise.reject(err);
    });
}

// src/utils/interceptors/deeplinkInterceptor.ts
var useDeeplinkInterceptor = (axios2, deepLinkActions) => {
    axios2.interceptors.request.use((conf) => {
        if (deepLinkActions) {
            const {
                deeplinkToken
            } = deepLinkActions.provideState();
            if (deeplinkToken && conf.headers) {
                conf.headers["x-app-invitation-context-token"] = deeplinkToken;
            }
        }
        return conf;
    }, (error) => {
        return Promise.reject(error);
    });
};

// src/utils/interceptors/i18nInterceptor.ts
var import_ors_translations = require("ors-translations");

function usei18nInterceptor(axios2) {
    axios2.interceptors.request.use((config) => {
        const lang = (0, import_ors_translations.useSelectedLang)();
        if (config.headers) {
            config.headers["X-Language-Code"] = lang;
            config.params = __spreadProps(__spreadValues({}, config.params), {
                lang
            });
        }
        return config;
    });
}

// src/utils/interceptors/orgInterceptor.ts
var useOrganisationInterceptor = (axios2, organisationActions) => {
    axios2.interceptors.request.use((conf) => {
        const {
            organisationId,
            organisationAlias,
            bcOrganisationAlias
        } = organisationActions.provideState();
        if (organisationAlias && organisationAlias !== bcOrganisationAlias && conf.headers) {
            conf.headers["X-Organisation-Alias"] = organisationAlias;
            if (organisationId) {
                conf.headers["X-Organisation"] = organisationId.toString();
            }
        }
        return conf;
    }, (error) => {
        return Promise.reject(error);
    });
};

// src/utils/interceptors/ors2ContextInterceptor.ts
var useOrs2ContextInterceptor = (axios2) => {
    axios2.interceptors.request.use((conf) => {
        if (conf.headers) {
            conf.headers["X-New-B2C-Context"] = "NewB2C";
        }
        return conf;
    }, (error) => {
        return Promise.reject(error);
    });
};

// src/utils/interceptors/premiumCodeInterceptor.ts
var getCookie = (name) => {
    const nameLenPlus = name.length + 1;
    return document.cookie.split(";").map((c) => c.trim()).filter((cookie) => cookie.substring(0, nameLenPlus) === name + "=").map((cookie) => decodeURIComponent(cookie.substring(nameLenPlus))).pop();
};
var usePremiumCodeInterceptor = (axios2) => {
    axios2.interceptors.request.use((conf) => {
        const premiumCode = getCookie("AffiliationPremiumCode") || void 0;
        if (premiumCode && conf.headers) {
            conf.headers["X-Premium-Code"] = premiumCode;
        }
        return conf;
    }, (error) => {
        return Promise.reject(error);
    });
};

// src/utils/interceptors/sentryInterceptor.ts
function useSentryInterceptor(axios2, loggerActions) {
    axios2.interceptors.response.use((resp) => resp, (err) => {
        var _a;
        const statusCode = ((_a = err.response) == null ? void 0 : _a.status) || 0;
        if (statusCode >= 500 || statusCode === 400 || statusCode === 403 || statusCode === 409 || statusCode === 422) {
            loggerActions.logFailedRequest(err);
        }
        return Promise.reject(err);
    });
}

// src/enhancedClients/ors2.ts
addAdapters(axios);
addRetry(axios);

function registerOrs2Interceptors(interceptorActions) {
    usei18nInterceptor(axios);
    useAuthInterceptor(axios, interceptorActions.authActions);
    (0, import_react_common.setupAuditInterceptor)(axios);
    useSentryInterceptor(axios, interceptorActions.loggerActions);
    useDeeplinkInterceptor(axios, interceptorActions.deepLinkActions);
    useOrganisationInterceptor(axios, interceptorActions.organisationActions);
    usePremiumCodeInterceptor(axios);
    useOrs2ContextInterceptor(axios);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AgentCandidateInvitationContextState,
    AtrfCreationTimeFrame,
    AtrfStatus,
    AwardingBodySystem,
    BandScoreType,
    BatchExamFormat,
    BatchIeltsModule,
    CandidateB2CErrorCodes,
    CandidateMarketingPreferences,
    CandidateRegistrationHistoryType,
    ComponentType,
    EnquiryOnResultsStatus,
    ExamFormat,
    ExamMode,
    ExternalUserErrorCodes,
    HelpShortCodes,
    IeltsModule,
    IwasFailSeverity,
    MarketingQuestionShortCode,
    NotificationType,
    PreRegisterRequestPreregisterType,
    ProductType,
    PromoCodeType,
    RegistrationDocumentFileStatus,
    RegistrationDocumentStatus,
    RegistrationDocumentType,
    RegistrationStatus,
    ResultDeliveryType,
    SalesChannels,
    SelfServiceType,
    SpeakingFormat,
    Tax,
    TimeTableSession,
    TransactionItemStatus,
    WhoPaysType,
    addressClient,
    axios,
    candidateClient,
    candidateDocumentClient,
    centreClient,
    enquiryOnResultClient,
    enumClient,
    examResultClient,
    getRegistrationResultDeliveryDetailsClient,
    getRegistrationResultScoresClient,
    marketingQuestionsClient,
    organisationClient,
    organisationCountryClient,
    passwordClient,
    paymentClient,
    pricingClient,
    productFinderClient,
    provisionalCandidateClient,
    registerOrs2Interceptors,
    registrationClient,
    registrationDocumentClient,
    registrationEnquiryOnResultsReadClient,
    registrationEnquiryOnResultsSumbitClient,
    registrationGetInvitationContextStateClient,
    registrationNotificationClient,
    registrationReceivingOrganisationsClient,
    registrationTaxFeeCalculatorClient,
    registrationTransferClient,
    stedOrganisationClient,
    termsAndConditionsTypeClient,
    transactionClient,
    updateChildConsentSettingsClient,
    validationClient
});