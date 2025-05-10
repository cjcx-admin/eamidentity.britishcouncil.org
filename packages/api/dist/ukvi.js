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

// src/enhancedClients/ukvi.ts
var ukvi_exports = {};
__export(ukvi_exports, {
    AwardingBodySystem: () => AwardingBodySystem,
    BandScoreType: () => BandScoreType,
    CandidateB2CErrorCodes: () => CandidateB2CErrorCodes,
    CandidateMarketingPreferences: () => CandidateMarketingPreferences,
    ComponentType: () => ComponentType,
    ExamCode: () => ExamCode,
    ExamFormat: () => ExamFormat,
    ExamMode: () => ExamMode,
    ExamOptionCode: () => ExamOptionCode,
    ExternalUserErrorCodes: () => ExternalUserErrorCodes,
    HelpShortCodes: () => HelpShortCodes,
    IeltsModule: () => IeltsModule,
    IeltsModuleEnum: () => IeltsModuleEnum,
    MarketingQuestionShortCode: () => MarketingQuestionShortCode,
    NotificationType: () => NotificationType,
    PreRegisterRequestPreregisterType: () => PreRegisterRequestPreregisterType,
    ProductType: () => ProductType,
    RegistrationDocumentFileStatus: () => RegistrationDocumentFileStatus,
    RegistrationDocumentStatus: () => RegistrationDocumentStatus,
    RegistrationDocumentType: () => RegistrationDocumentType,
    RegistrationStatus: () => RegistrationStatus,
    ResultDeliveryType: () => ResultDeliveryType,
    SalesChannels: () => SalesChannels,
    SpeakingFormat: () => SpeakingFormat,
    Tax: () => Tax,
    TransactionItemStatus: () => TransactionItemStatus,
    WhoPaysType: () => WhoPaysType,
    axios: () => axios,
    canaryClient: () => canaryClient,
    candidateClient: () => candidateClient,
    centreClient: () => centreClient,
    enumClient: () => enumClient,
    examResultClient: () => examResultClient,
    featureFlagsClient: () => featureFlagsClient,
    paymentClient: () => paymentClient,
    productFinderClient: () => productFinderClient,
    registerUkviInterceptors: () => registerUkviInterceptors,
    registrationClient: () => registrationClient,
    registrationDocumentClient: () => registrationDocumentClient,
    registrationNotificationClient: () => registrationNotificationClient,
    registrationStedOrganisationClient: () => registrationStedOrganisationClient,
    stedOrganisationClient: () => stedOrganisationClient,
    termsAndConditionsClient: () => termsAndConditionsClient,
    validationClient: () => validationClient
});
module.exports = __toCommonJS(ukvi_exports);
var import_react_common = require("@britishcouncil/react-common");

// src/clients/ukvi.ts
var import_axios = __toESM(require("axios"));
var axios = import_axios.default.create({
    baseURL: "/ukvi"
});
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
var canaryClient = {
    getOk($config) {
        let url = "/api/canary";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var candidateClient = {
    getCandidateChildren($config) {
        let url = "/api/candidates/details/someoneelse/basic";
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
    getParentCandidateBasicsByMinor(minorId, $config) {
        let url = "/api/candidates/parentbasic/{minorId}";
        url = url.replace("{minorId}", encodeURIComponent("" + minorId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
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
    saveCandidateIDDetails(model, $config) {
        let url = "/api/candidates/details/id";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: model
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
var featureFlagsClient = {
    getAll($config) {
        let url = "/api/features/all";
        return axios.request(__spreadValues({
            url,
            method: "GET"
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
var productFinderClient = {
    getDistrictsForCountry(isoCode, $config) {
        let url = "/api/product-finder/countries/{isoCode}/districts";
        url = url.replace("{isoCode}", encodeURIComponent("" + isoCode));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getExams(isoCode, productFinderGetExamsQuery, $config) {
        let url = "/api/product-finder/countries/{isoCode}/exams";
        url = url.replace("{isoCode}", encodeURIComponent("" + isoCode));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                districtId: serializeQueryParam(productFinderGetExamsQuery.districtId),
                from: serializeQueryParam(productFinderGetExamsQuery.from),
                to: serializeQueryParam(productFinderGetExamsQuery.to)
            }
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
    getProductFinderRegistrationData(districtExamId, venueId, $config) {
        let url = "/api/registration/productfinder/{districtExamId}/{venueId}";
        url = url.replace("{districtExamId}", encodeURIComponent("" + districtExamId));
        url = url.replace("{venueId}", encodeURIComponent("" + venueId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getRegistrationResultDeliveryDetails(registrationId, $config) {
        let url = "/api/registrations/results/deliverydetails/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getRegistrationResultScores(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/results/scores";
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
    },
    updateChildConsentSettings(childConsent, $config) {
        let url = "/api/registrations/childconsent";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: childConsent
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
    createProofOfPayment(registrationId, files, $config) {
        let url = "/api/registrations/{registrationId}/documents/proof-of-payment";
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
    getMedicalDocumentsFiles(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/documents-with-sas/medical-evidence";
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
    getProofOfPaymentDocumentsFiles(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/documents-with-sas/proof-of-payments";
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
var registrationStedOrganisationClient = {
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
var termsAndConditionsClient = {
    addConsentToRegistrationTermsAndConditions(request, registrationId, organisationCountryId, $config) {
        let url = "/api/terms-and-conditions/consent/registration/{registrationId}";
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
        let url = "/api/terms-and-conditions/pdf";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    getLastAcceptedTermsAndConditionsNewestVersionNumber(shortCode, productGroupShortCode, subSystemName, termsAndConditionsGetLastAcceptedTermsAndConditionsNewestVersionNumberQuery, $config) {
        let url = "/api/terms-and-conditions-types/{shortCode}/product/shortcode/{productGroupShortCode}/subsystem/{subSystemName}/version/lastAccepted";
        url = url.replace("{shortCode}", encodeURIComponent("" + shortCode));
        url = url.replace("{productGroupShortCode}", encodeURIComponent("" + productGroupShortCode));
        url = url.replace("{subSystemName}", encodeURIComponent("" + subSystemName));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                registrationId: serializeQueryParam(termsAndConditionsGetLastAcceptedTermsAndConditionsNewestVersionNumberQuery.registrationId),
                organisationCountryId: serializeQueryParam(termsAndConditionsGetLastAcceptedTermsAndConditionsNewestVersionNumberQuery.organisationCountryId)
            }
        }, $config));
    },
    getRegistrationTermsAndConditionsShortCode(registrationId, organisationCountryId, $config) {
        let url = "/api/terms-and-conditions/registration/{registrationId}/short-code";
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
        let url = "/api/terms-and-conditions/{shortCode}/product/shortcode/{productGroupShortCode}/subsystem/{subSystemName}/version";
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
var ExamFormat = /* @__PURE__ */ ((ExamFormat2) => {
    ExamFormat2[ExamFormat2["PB"] = 1] = "PB";
    ExamFormat2[ExamFormat2["CD"] = 2] = "CD";
    return ExamFormat2;
})(ExamFormat || {});
var CandidateMarketingPreferences = /* @__PURE__ */ ((CandidateMarketingPreferences2) => {
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["None"] = 0] = "None";
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["BcOnly"] = 1] = "BcOnly";
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["BcAndThird"] = 2] = "BcAndThird";
    return CandidateMarketingPreferences2;
})(CandidateMarketingPreferences || {});
var RegistrationDocumentFileStatus = /* @__PURE__ */ ((RegistrationDocumentFileStatus2) => {
    RegistrationDocumentFileStatus2[RegistrationDocumentFileStatus2["Pending"] = 1] = "Pending";
    RegistrationDocumentFileStatus2[RegistrationDocumentFileStatus2["Approved"] = 2] = "Approved";
    RegistrationDocumentFileStatus2[RegistrationDocumentFileStatus2["Rejected"] = 3] = "Rejected";
    RegistrationDocumentFileStatus2[RegistrationDocumentFileStatus2["Reviewed"] = 4] = "Reviewed";
    RegistrationDocumentFileStatus2[RegistrationDocumentFileStatus2["Deleted"] = 5] = "Deleted";
    return RegistrationDocumentFileStatus2;
})(RegistrationDocumentFileStatus || {});
var RegistrationStatus = /* @__PURE__ */ ((RegistrationStatus2) => {
    RegistrationStatus2[RegistrationStatus2["Incomplete"] = 1] = "Incomplete";
    RegistrationStatus2[RegistrationStatus2["Confirmed"] = 2] = "Confirmed";
    RegistrationStatus2[RegistrationStatus2["Cancelled"] = 3] = "Cancelled";
    RegistrationStatus2[RegistrationStatus2["AwaitingResults"] = 4] = "AwaitingResults";
    RegistrationStatus2[RegistrationStatus2["HasResults"] = 5] = "HasResults";
    return RegistrationStatus2;
})(RegistrationStatus || {});
var SpeakingFormat = /* @__PURE__ */ ((SpeakingFormat2) => {
    SpeakingFormat2[SpeakingFormat2["Live"] = 1] = "Live";
    SpeakingFormat2[SpeakingFormat2["Remote"] = 2] = "Remote";
    return SpeakingFormat2;
})(SpeakingFormat || {});
var RegistrationDocumentType = /* @__PURE__ */ ((RegistrationDocumentType2) => {
    RegistrationDocumentType2[RegistrationDocumentType2["SpecialArrangement"] = 1] = "SpecialArrangement";
    RegistrationDocumentType2[RegistrationDocumentType2["IdDocument"] = 2] = "IdDocument";
    RegistrationDocumentType2[RegistrationDocumentType2["AdditionalDocument"] = 3] = "AdditionalDocument";
    RegistrationDocumentType2[RegistrationDocumentType2["PaymentSlip"] = 4] = "PaymentSlip";
    return RegistrationDocumentType2;
})(RegistrationDocumentType || {});
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
var Tax = /* @__PURE__ */ ((Tax2) => {
    Tax2[Tax2["Rate"] = 1] = "Rate";
    Tax2[Tax2["Amount"] = 2] = "Amount";
    return Tax2;
})(Tax || {});
var IeltsModuleEnum = /* @__PURE__ */ ((IeltsModuleEnum2) => {
    IeltsModuleEnum2[IeltsModuleEnum2["Ac"] = 1] = "Ac";
    IeltsModuleEnum2[IeltsModuleEnum2["Gt"] = 2] = "Gt";
    return IeltsModuleEnum2;
})(IeltsModuleEnum || {});
var AwardingBodySystem = /* @__PURE__ */ ((AwardingBodySystem2) => {
    AwardingBodySystem2[AwardingBodySystem2["CMDS"] = 1] = "CMDS";
    AwardingBodySystem2[AwardingBodySystem2["IWAS"] = 2] = "IWAS";
    return AwardingBodySystem2;
})(AwardingBodySystem || {});
var PreRegisterRequestPreregisterType = /* @__PURE__ */ ((PreRegisterRequestPreregisterType2) => {
    PreRegisterRequestPreregisterType2[PreRegisterRequestPreregisterType2["Candidate"] = 0] = "Candidate";
    PreRegisterRequestPreregisterType2[PreRegisterRequestPreregisterType2["ExistingChild"] = 1] = "ExistingChild";
    PreRegisterRequestPreregisterType2[PreRegisterRequestPreregisterType2["NewChild"] = 2] = "NewChild";
    return PreRegisterRequestPreregisterType2;
})(PreRegisterRequestPreregisterType || {});
var IeltsModule = /* @__PURE__ */ ((IeltsModule2) => {
    IeltsModule2[IeltsModule2["AC"] = 1] = "AC";
    IeltsModule2[IeltsModule2["GT"] = 2] = "GT";
    return IeltsModule2;
})(IeltsModule || {});
var ExamOptionCode = /* @__PURE__ */ ((ExamOptionCode2) => {
    ExamOptionCode2[ExamOptionCode2["IELTSUKVI"] = 1] = "IELTSUKVI";
    ExamOptionCode2[ExamOptionCode2["IELTSCDUKVI"] = 2] = "IELTSCDUKVI";
    ExamOptionCode2[ExamOptionCode2["LFSKA1"] = 3] = "LFSKA1";
    ExamOptionCode2[ExamOptionCode2["LFSKA2"] = 4] = "LFSKA2";
    ExamOptionCode2[ExamOptionCode2["LFSKB1"] = 5] = "LFSKB1";
    return ExamOptionCode2;
})(ExamOptionCode || {});
var ExamCode = /* @__PURE__ */ ((ExamCode2) => {
    ExamCode2[ExamCode2["IELTS"] = 1] = "IELTS";
    ExamCode2[ExamCode2["IELTSCD"] = 2] = "IELTSCD";
    ExamCode2[ExamCode2["IELTSUKVI"] = 3] = "IELTSUKVI";
    ExamCode2[ExamCode2["IELTSCDUKVI"] = 4] = "IELTSCDUKVI";
    ExamCode2[ExamCode2["LFSKA1"] = 5] = "LFSKA1";
    ExamCode2[ExamCode2["LFSKA2"] = 6] = "LFSKA2";
    ExamCode2[ExamCode2["LFSKB1"] = 7] = "LFSKB1";
    return ExamCode2;
})(ExamCode || {});
var ExamMode = /* @__PURE__ */ ((ExamMode2) => {
    ExamMode2[ExamMode2["Full"] = 1] = "Full";
    ExamMode2[ExamMode2["OSR"] = 2] = "OSR";
    return ExamMode2;
})(ExamMode || {});
var ResultDeliveryType = /* @__PURE__ */ ((ResultDeliveryType2) => {
    ResultDeliveryType2[ResultDeliveryType2["Post"] = 1] = "Post";
    ResultDeliveryType2[ResultDeliveryType2["TestCentre"] = 2] = "TestCentre";
    ResultDeliveryType2[ResultDeliveryType2["Online"] = 3] = "Online";
    ResultDeliveryType2[ResultDeliveryType2["Sms"] = 4] = "Sms";
    return ResultDeliveryType2;
})(ResultDeliveryType || {});
var BandScoreType = /* @__PURE__ */ ((BandScoreType2) => {
    BandScoreType2[BandScoreType2["Listening"] = 0] = "Listening";
    BandScoreType2[BandScoreType2["Reading"] = 1] = "Reading";
    BandScoreType2[BandScoreType2["Writing"] = 2] = "Writing";
    BandScoreType2[BandScoreType2["Speaking"] = 3] = "Speaking";
    BandScoreType2[BandScoreType2["Overall"] = 4] = "Overall";
    BandScoreType2[BandScoreType2["LifeSkillsSpeaking"] = 5] = "LifeSkillsSpeaking";
    return BandScoreType2;
})(BandScoreType || {});
var RegistrationDocumentStatus = /* @__PURE__ */ ((RegistrationDocumentStatus2) => {
    RegistrationDocumentStatus2[RegistrationDocumentStatus2["Pending"] = 1] = "Pending";
    RegistrationDocumentStatus2[RegistrationDocumentStatus2["Approved"] = 2] = "Approved";
    RegistrationDocumentStatus2[RegistrationDocumentStatus2["Rejected"] = 3] = "Rejected";
    RegistrationDocumentStatus2[RegistrationDocumentStatus2["Reviewed"] = 4] = "Reviewed";
    RegistrationDocumentStatus2[RegistrationDocumentStatus2["Deleted"] = 5] = "Deleted";
    return RegistrationDocumentStatus2;
})(RegistrationDocumentStatus || {});
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

// src/enhancedClients/ukvi.ts
addAdapters(axios);
addRetry(axios);

function registerUkviInterceptors(interceptorActions) {
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
    AwardingBodySystem,
    BandScoreType,
    CandidateB2CErrorCodes,
    CandidateMarketingPreferences,
    ComponentType,
    ExamCode,
    ExamFormat,
    ExamMode,
    ExamOptionCode,
    ExternalUserErrorCodes,
    HelpShortCodes,
    IeltsModule,
    IeltsModuleEnum,
    MarketingQuestionShortCode,
    NotificationType,
    PreRegisterRequestPreregisterType,
    ProductType,
    RegistrationDocumentFileStatus,
    RegistrationDocumentStatus,
    RegistrationDocumentType,
    RegistrationStatus,
    ResultDeliveryType,
    SalesChannels,
    SpeakingFormat,
    Tax,
    TransactionItemStatus,
    WhoPaysType,
    axios,
    canaryClient,
    candidateClient,
    centreClient,
    enumClient,
    examResultClient,
    featureFlagsClient,
    paymentClient,
    productFinderClient,
    registerUkviInterceptors,
    registrationClient,
    registrationDocumentClient,
    registrationNotificationClient,
    registrationStedOrganisationClient,
    stedOrganisationClient,
    termsAndConditionsClient,
    validationClient
});