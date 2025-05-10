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

// src/enhancedClients/iol.ts
var iol_exports = {};
__export(iol_exports, {
    AlertType: () => AlertType,
    BandScoreType: () => BandScoreType,
    CandidateMarketingPreferences: () => CandidateMarketingPreferences,
    EorRequestStatus: () => EorRequestStatus,
    ExamModule: () => ExamModule,
    HelpRequestType: () => HelpRequestType,
    IELTSProducts: () => IELTSProducts,
    IdentityDocumentStatus: () => IdentityDocumentStatus,
    NotificationType: () => NotificationType,
    ProductType: () => ProductType,
    ReceivingOrganisationMethodOfDelivery: () => ReceivingOrganisationMethodOfDelivery,
    RegistrationDocumentType: () => RegistrationDocumentType,
    RegistrationReceivingOrganisationStatus: () => RegistrationReceivingOrganisationStatus,
    RegistrationStatus: () => RegistrationStatus,
    ResultStatus: () => ResultStatus,
    SelfServiceType: () => SelfServiceType,
    TransactionItemStatus: () => TransactionItemStatus,
    axios: () => axios,
    candidatesClient: () => candidatesClient,
    featuresClient: () => featuresClient,
    preparationMaterialsClient: () => preparationMaterialsClient,
    productsClient: () => productsClient,
    receivingOrganisationsClient: () => receivingOrganisationsClient,
    registerIolInterceptors: () => registerIolInterceptors,
    registrationAllowedActionsClient: () => registrationAllowedActionsClient,
    registrationCancellationRequestsClient: () => registrationCancellationRequestsClient,
    registrationClient: () => registrationClient,
    registrationDocumentsClient: () => registrationDocumentsClient,
    registrationEnquiryOnResultsClient: () => registrationEnquiryOnResultsClient,
    registrationGelIntegrationClient: () => registrationGelIntegrationClient,
    registrationHelpInfoClient: () => registrationHelpInfoClient,
    registrationNotificationsClient: () => registrationNotificationsClient,
    registrationReceivingOrganisationsClient: () => registrationReceivingOrganisationsClient,
    registrationTestTakerClient: () => registrationTestTakerClient,
    reservationClient: () => reservationClient
});
module.exports = __toCommonJS(iol_exports);
var import_react_common = require("@britishcouncil/react-common");
var import_axios_retry2 = require("axios-retry");

// src/clients/iol.ts
var import_axios = __toESM(require("axios"));
var axios = import_axios.default.create({
    baseURL: "/ielts-online"
});
var candidatesClient = {
    getCandidateExistingRegistrations(candidateId, examDate, $config) {
        let url = "/api/candidates/{candidateId}/existing-registration/{examDate}";
        url = url.replace("{candidateId}", encodeURIComponent("" + candidateId));
        url = url.replace("{examDate}", encodeURIComponent("" + examDate));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCandidateRegistrationsBasicInformation($config) {
        let url = "/api/candidates/registration-basic-information";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getVerifiedDetails(productId, $config) {
        let url = "/api/candidates";
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                productId: serializeQueryParam(productId)
            }
        }, $config));
    }
};
var featuresClient = {
    get($config) {
        let url = "/api/features";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var preparationMaterialsClient = {
    getCandidatePreparationMaterials($config) {
        let url = "/api/preparation-materials";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var productsClient = {
    get(productId, $config) {
        let url = "/api/products/{productId}/id-types";
        url = url.replace("{productId}", encodeURIComponent("" + productId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCountries(productId, $config) {
        let url = "/api/products/{productId}/countries";
        url = url.replace("{productId}", encodeURIComponent("" + productId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getGenders(productId, $config) {
        let url = "/api/products/{productId}/genders";
        url = url.replace("{productId}", encodeURIComponent("" + productId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getLrwExamDates(productId, $config) {
        let url = "/api/products/{productId}/exams";
        url = url.replace("{productId}", encodeURIComponent("" + productId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getLrwSessionsWithSpeakingSlots(productId, lrwSessionIds, $config) {
        let url = "/api/products/{productId}/exams/sessions";
        url = url.replace("{productId}", encodeURIComponent("" + productId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                lrwSessionIds: serializeQueryParam(lrwSessionIds)
            }
        }, $config));
    },
    getMarketingQuestions(productId, $config) {
        let url = "/api/products/{productId}/marketing-questions";
        url = url.replace("{productId}", encodeURIComponent("" + productId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    isAnyAvailable(productId, $config) {
        let url = "/api/products/{productId}/exams/availability";
        url = url.replace("{productId}", encodeURIComponent("" + productId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var receivingOrganisationsClient = {
    getAll(receivingOrganisationsGetAllQuery, $config) {
        let url = "/api/receiving-organisations";
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                page: serializeQueryParam(receivingOrganisationsGetAllQuery.page),
                pageSize: serializeQueryParam(receivingOrganisationsGetAllQuery.pageSize),
                search: serializeQueryParam(receivingOrganisationsGetAllQuery.search),
                productId: serializeQueryParam(receivingOrganisationsGetAllQuery.productId),
                countryId: serializeQueryParam(receivingOrganisationsGetAllQuery.countryId)
            }
        }, $config));
    }
};
var registrationAllowedActionsClient = {
    getAllowedRegistrationActions(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/actions";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getAllowedRegistrationReceivingOrganisationsActions(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/receiving-organisations/actions";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var registrationCancellationRequestsClient = {
    createCancellationRequest(registrationId, files, cancellationReasonId, additionalInformation, bankAccountHolderName, bankName, bankAccountNumber, bankBranchCountry, bankBranchAddressLine1, bankBranchAddressLine2, bankBranchAddressLine3, bankBranchPostCode, bankBranchCity, iBANNumber, sortCode, swiftCode, bankAccountHolderEmail, bankAccountHolderAddressLine1, bankAccountHolderAddressLine2, bankAccountHolderAddressLine3, bankAccountHolderPostCode, bankAccountHolderCity, bankAccountHolderCountryOfResidence, $config) {
        let url = "/api/registrations/{registrationId}/cancellation-request";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        const formDataBody = new FormData();
        if (!!files) {
            files.forEach((f) => formDataBody.append("files", f));
        }
        if (!!cancellationReasonId) {
            formDataBody.append("cancellationReasonId", cancellationReasonId.toString());
        }
        if (!!additionalInformation) {
            formDataBody.append("additionalInformation", additionalInformation);
        }
        if (!!bankAccountHolderName) {
            formDataBody.append("bankAccountHolderName", bankAccountHolderName);
        }
        if (!!bankName) {
            formDataBody.append("bankName", bankName);
        }
        if (!!bankAccountNumber) {
            formDataBody.append("bankAccountNumber", bankAccountNumber);
        }
        if (!!bankBranchCountry) {
            formDataBody.append("bankBranchCountry", bankBranchCountry);
        }
        if (!!bankBranchAddressLine1) {
            formDataBody.append("bankBranchAddressLine1", bankBranchAddressLine1);
        }
        if (!!bankBranchAddressLine2) {
            formDataBody.append("bankBranchAddressLine2", bankBranchAddressLine2);
        }
        if (!!bankBranchAddressLine3) {
            formDataBody.append("bankBranchAddressLine3", bankBranchAddressLine3);
        }
        if (!!bankBranchPostCode) {
            formDataBody.append("bankBranchPostCode", bankBranchPostCode);
        }
        if (!!bankBranchCity) {
            formDataBody.append("bankBranchCity", bankBranchCity);
        }
        if (!!iBANNumber) {
            formDataBody.append("iBANNumber", iBANNumber);
        }
        if (!!sortCode) {
            formDataBody.append("sortCode", sortCode);
        }
        if (!!swiftCode) {
            formDataBody.append("swiftCode", swiftCode);
        }
        if (!!bankAccountHolderEmail) {
            formDataBody.append("bankAccountHolderEmail", bankAccountHolderEmail);
        }
        if (!!bankAccountHolderAddressLine1) {
            formDataBody.append("bankAccountHolderAddressLine1", bankAccountHolderAddressLine1);
        }
        if (!!bankAccountHolderAddressLine2) {
            formDataBody.append("bankAccountHolderAddressLine2", bankAccountHolderAddressLine2);
        }
        if (!!bankAccountHolderAddressLine3) {
            formDataBody.append("bankAccountHolderAddressLine3", bankAccountHolderAddressLine3);
        }
        if (!!bankAccountHolderPostCode) {
            formDataBody.append("bankAccountHolderPostCode", bankAccountHolderPostCode);
        }
        if (!!bankAccountHolderCity) {
            formDataBody.append("bankAccountHolderCity", bankAccountHolderCity);
        }
        if (!!bankAccountHolderCountryOfResidence) {
            formDataBody.append("bankAccountHolderCountryOfResidence", bankAccountHolderCountryOfResidence);
        }
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: formDataBody
        }, $config));
    }
};
var registrationClient = {
    create(request, $config) {
        let url = "/api/registrations";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    createHelpRequest(registrationId, candidateStatement, helpRequestType, $config) {
        let url = "/api/registrations/{registrationId}/help-request";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: candidateStatement,
            params: {
                helpRequestType: serializeQueryParam(helpRequestType)
            }
        }, $config));
    },
    createTransferRequest(registrationId, candidateStatement, $config) {
        let url = "/api/registrations/{registrationId}/transfer-request";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: candidateStatement
        }, $config));
    },
    get(registrationId, $config) {
        let url = "/api/registrations/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getPaymentRegistrationSummary(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/payments/registration-summary";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getPaymentStatus(registrationId, paymentId, $config) {
        let url = "/api/registrations/{registrationId}/payments/{paymentId}/status";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        url = url.replace("{paymentId}", encodeURIComponent("" + paymentId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getProductSettings(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/product-settings";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getRegistrationTransactions(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/transactions";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getResultsDownloadUrl(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/official-results/download-url";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getScores(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/official-results/scores";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getTestTakerRegistrations($config) {
        let url = "/api/registrations";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getTrfNumber(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/trf-number";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    payOnline(registrationId, transactionId, registrationPayOnlineQuery, $config) {
        let url = "/api/registrations/{registrationId}/transactions/{transactionId}/pay-online";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        url = url.replace("{transactionId}", encodeURIComponent("" + transactionId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            params: {
                productType: serializeQueryParam(registrationPayOnlineQuery.productType),
                returnUrlVirtualPath: serializeQueryParam(registrationPayOnlineQuery.returnUrlVirtualPath)
            }
        }, $config));
    }
};
var registrationDocumentsClient = {
    getIdentityDocument(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/documents/identity-document";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    updateId(registrationId, filesToAdd, idTypeId, idNumber, idIssuingAuthority, expiryDate, idsOfFilesToRemove, facePhotoFileName, $config) {
        let url = "/api/registrations/{registrationId}/documents/identity-document";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        const formDataBody = new FormData();
        if (!!filesToAdd) {
            filesToAdd.forEach((f) => formDataBody.append("filesToAdd", f));
        }
        if (!!idTypeId) {
            formDataBody.append("idTypeId", idTypeId.toString());
        }
        if (!!idNumber) {
            formDataBody.append("idNumber", idNumber);
        }
        if (!!idIssuingAuthority) {
            formDataBody.append("idIssuingAuthority", idIssuingAuthority);
        }
        if (!!expiryDate) {
            formDataBody.append("expiryDate", expiryDate);
        }
        if (!!idsOfFilesToRemove) {
            idsOfFilesToRemove.forEach((f) => formDataBody.append("idsOfFilesToRemove", f));
        }
        if (!!facePhotoFileName) {
            formDataBody.append("facePhotoFileName", facePhotoFileName);
        }
        return axios.request(__spreadValues({
            url,
            method: "PUT",
            data: formDataBody
        }, $config));
    }
};
var registrationEnquiryOnResultsClient = {
    getDetails(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/enquiry-on-results/details";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getEorLetterFileUrl(registrationId, forceDownload, $config) {
        let url = "/api/registrations/{registrationId}/enquiry-on-results/eor-letter";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                forceDownload: serializeQueryParam(forceDownload)
            }
        }, $config));
    },
    submitEorRequest(registrationId, request, $config) {
        let url = "/api/registrations/{registrationId}/enquiry-on-results";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    }
};
var registrationGelIntegrationClient = {
    getExternalLink(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/gel-integration/external-link";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var registrationHelpInfoClient = {
    get(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/help-info";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var registrationNotificationsClient = {
    getAlerts(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/notifications/alerts";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getNotifications(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/notifications";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    markNotificationAsSeen(registrationId, notificationType, $config) {
        let url = "/api/registrations/{registrationId}/notifications/{notificationType}/mark-as-seen";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        url = url.replace("{notificationType}", encodeURIComponent("" + notificationType));
        return axios.request(__spreadValues({
            url,
            method: "POST"
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
    editReceivingOrganisation(registrationId, selectionId, request, $config) {
        let url = "/api/registrations/{registrationId}/receiving-organisations/{selectionId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        url = url.replace("{selectionId}", encodeURIComponent("" + selectionId));
        return axios.request(__spreadValues({
            url,
            method: "PUT",
            data: request
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
    getReceivingOrganisations(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/receiving-organisations";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var registrationTestTakerClient = {
    editTestTakerContactDetails(registrationId, contactDetailsRequest, $config) {
        let url = "/api/registrations/{registrationId}/test-taker";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "PUT",
            data: contactDetailsRequest
        }, $config));
    }
};
var reservationClient = {
    create(request, $config) {
        let url = "/api/reservations";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    get($config) {
        let url = "/api/reservations";
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
var ExamModule = /* @__PURE__ */ ((ExamModule2) => {
    ExamModule2[ExamModule2["AC"] = 1] = "AC";
    ExamModule2[ExamModule2["GT"] = 2] = "GT";
    return ExamModule2;
})(ExamModule || {});
var ReceivingOrganisationMethodOfDelivery = /* @__PURE__ */ ((ReceivingOrganisationMethodOfDelivery2) => {
    ReceivingOrganisationMethodOfDelivery2[ReceivingOrganisationMethodOfDelivery2["Edelivery"] = 0] = "Edelivery";
    ReceivingOrganisationMethodOfDelivery2[ReceivingOrganisationMethodOfDelivery2["Postal"] = 1] = "Postal";
    return ReceivingOrganisationMethodOfDelivery2;
})(ReceivingOrganisationMethodOfDelivery || {});
var RegistrationStatus = /* @__PURE__ */ ((RegistrationStatus2) => {
    RegistrationStatus2[RegistrationStatus2["Incomplete"] = 0] = "Incomplete";
    RegistrationStatus2[RegistrationStatus2["Cancelled"] = 1] = "Cancelled";
    RegistrationStatus2[RegistrationStatus2["Confirmed"] = 2] = "Confirmed";
    RegistrationStatus2[RegistrationStatus2["HasResults"] = 3] = "HasResults";
    return RegistrationStatus2;
})(RegistrationStatus || {});
var SelfServiceType = /* @__PURE__ */ ((SelfServiceType2) => {
    SelfServiceType2[SelfServiceType2["Cancellation"] = 0] = "Cancellation";
    SelfServiceType2[SelfServiceType2["Transfer"] = 1] = "Transfer";
    return SelfServiceType2;
})(SelfServiceType || {});
var RegistrationDocumentType = /* @__PURE__ */ ((RegistrationDocumentType2) => {
    RegistrationDocumentType2[RegistrationDocumentType2["SpecialArrangement"] = 1] = "SpecialArrangement";
    RegistrationDocumentType2[RegistrationDocumentType2["IdDocument"] = 2] = "IdDocument";
    RegistrationDocumentType2[RegistrationDocumentType2["AdditionalDocument"] = 3] = "AdditionalDocument";
    RegistrationDocumentType2[RegistrationDocumentType2["PaymentSlip"] = 4] = "PaymentSlip";
    return RegistrationDocumentType2;
})(RegistrationDocumentType || {});
var ProductType = /* @__PURE__ */ ((ProductType2) => {
    ProductType2[ProductType2["Undefined"] = 0] = "Undefined";
    ProductType2[ProductType2["Transfer"] = 1] = "Transfer";
    ProductType2[ProductType2["ExamRegistration"] = 2] = "ExamRegistration";
    ProductType2[ProductType2["EnquiryOnResults"] = 3] = "EnquiryOnResults";
    ProductType2[ProductType2["Appeal"] = 4] = "Appeal";
    return ProductType2;
})(ProductType || {});
var HelpRequestType = /* @__PURE__ */ ((HelpRequestType2) => {
    HelpRequestType2[HelpRequestType2["OtherEnquiry"] = 0] = "OtherEnquiry";
    HelpRequestType2[HelpRequestType2["Complaint"] = 1] = "Complaint";
    return HelpRequestType2;
})(HelpRequestType || {});
var ResultStatus = /* @__PURE__ */ ((ResultStatus2) => {
    ResultStatus2[ResultStatus2["Unconfirmed"] = 0] = "Unconfirmed";
    ResultStatus2[ResultStatus2["Confirmed"] = 1] = "Confirmed";
    ResultStatus2[ResultStatus2["Validated"] = 2] = "Validated";
    ResultStatus2[ResultStatus2["PendingReview"] = 3] = "PendingReview";
    ResultStatus2[ResultStatus2["Withheld"] = 4] = "Withheld";
    ResultStatus2[ResultStatus2["PermanentlyWithheld"] = 5] = "PermanentlyWithheld";
    ResultStatus2[ResultStatus2["Absent"] = 6] = "Absent";
    ResultStatus2[ResultStatus2["Released"] = 7] = "Released";
    ResultStatus2[ResultStatus2["Incomplete"] = 8] = "Incomplete";
    return ResultStatus2;
})(ResultStatus || {});
var BandScoreType = /* @__PURE__ */ ((BandScoreType2) => {
    BandScoreType2[BandScoreType2["Listening"] = 0] = "Listening";
    BandScoreType2[BandScoreType2["Reading"] = 1] = "Reading";
    BandScoreType2[BandScoreType2["Writing"] = 2] = "Writing";
    BandScoreType2[BandScoreType2["Speaking"] = 3] = "Speaking";
    BandScoreType2[BandScoreType2["Overall"] = 4] = "Overall";
    BandScoreType2[BandScoreType2["LifeSkillsSpeaking"] = 5] = "LifeSkillsSpeaking";
    return BandScoreType2;
})(BandScoreType || {});
var TransactionItemStatus = /* @__PURE__ */ ((TransactionItemStatus2) => {
    TransactionItemStatus2[TransactionItemStatus2["Undefined"] = 0] = "Undefined";
    TransactionItemStatus2[TransactionItemStatus2["AwaitingPayment"] = 1] = "AwaitingPayment";
    TransactionItemStatus2[TransactionItemStatus2["Refunded"] = 3] = "Refunded";
    TransactionItemStatus2[TransactionItemStatus2["PartiallyRefunded"] = 4] = "PartiallyRefunded";
    TransactionItemStatus2[TransactionItemStatus2["Paid"] = 5] = "Paid";
    TransactionItemStatus2[TransactionItemStatus2["Cancelled"] = 6] = "Cancelled";
    return TransactionItemStatus2;
})(TransactionItemStatus || {});
var IdentityDocumentStatus = /* @__PURE__ */ ((IdentityDocumentStatus2) => {
    IdentityDocumentStatus2[IdentityDocumentStatus2["NotVerified"] = 0] = "NotVerified";
    IdentityDocumentStatus2[IdentityDocumentStatus2["Accepted"] = 1] = "Accepted";
    IdentityDocumentStatus2[IdentityDocumentStatus2["Rejected"] = 2] = "Rejected";
    return IdentityDocumentStatus2;
})(IdentityDocumentStatus || {});
var EorRequestStatus = /* @__PURE__ */ ((EorRequestStatus2) => {
    EorRequestStatus2[EorRequestStatus2["Submitted"] = 0] = "Submitted";
    EorRequestStatus2[EorRequestStatus2["Completed"] = 1] = "Completed";
    EorRequestStatus2[EorRequestStatus2["Cancelled"] = 2] = "Cancelled";
    EorRequestStatus2[EorRequestStatus2["Processing"] = 3] = "Processing";
    EorRequestStatus2[EorRequestStatus2["Confirmed"] = 4] = "Confirmed";
    EorRequestStatus2[EorRequestStatus2["AwaitingResponse"] = 5] = "AwaitingResponse";
    EorRequestStatus2[EorRequestStatus2["AcceptedByCambridge"] = 6] = "AcceptedByCambridge";
    EorRequestStatus2[EorRequestStatus2["RejectedByCambridge"] = 7] = "RejectedByCambridge";
    EorRequestStatus2[EorRequestStatus2["CommunicationFailed"] = 8] = "CommunicationFailed";
    EorRequestStatus2[EorRequestStatus2["Rejected"] = 9] = "Rejected";
    return EorRequestStatus2;
})(EorRequestStatus || {});
var AlertType = /* @__PURE__ */ ((AlertType2) => {
    AlertType2[AlertType2["RegistrationPayment"] = 0] = "RegistrationPayment";
    AlertType2[AlertType2["EnquiryOnResultsPayment"] = 1] = "EnquiryOnResultsPayment";
    AlertType2[AlertType2["TransferPayment"] = 2] = "TransferPayment";
    AlertType2[AlertType2["RegistrationProofOfPaymentUpload"] = 3] = "RegistrationProofOfPaymentUpload";
    AlertType2[AlertType2["EnquiryOnResultsProofOfPaymentUpload"] = 4] = "EnquiryOnResultsProofOfPaymentUpload";
    AlertType2[AlertType2["IdDocumentUpload"] = 5] = "IdDocumentUpload";
    AlertType2[AlertType2["MedicalEvidenceUpload"] = 6] = "MedicalEvidenceUpload";
    AlertType2[AlertType2["RegistrationProofOfPaymentReupload"] = 7] = "RegistrationProofOfPaymentReupload";
    AlertType2[AlertType2["EnquiryOnResultsProofOfPaymentReupload"] = 8] = "EnquiryOnResultsProofOfPaymentReupload";
    AlertType2[AlertType2["IdDocumentReupload"] = 9] = "IdDocumentReupload";
    AlertType2[AlertType2["MedicalEvidenceReupload"] = 10] = "MedicalEvidenceReupload";
    return AlertType2;
})(AlertType || {});
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
var RegistrationReceivingOrganisationStatus = /* @__PURE__ */ ((RegistrationReceivingOrganisationStatus2) => {
    RegistrationReceivingOrganisationStatus2[RegistrationReceivingOrganisationStatus2["New"] = 0] = "New";
    RegistrationReceivingOrganisationStatus2[RegistrationReceivingOrganisationStatus2["CancellationRequested"] = 1] = "CancellationRequested";
    RegistrationReceivingOrganisationStatus2[RegistrationReceivingOrganisationStatus2["CancellationConfirmed"] = 2] = "CancellationConfirmed";
    RegistrationReceivingOrganisationStatus2[RegistrationReceivingOrganisationStatus2["AcceptedByCambridge"] = 3] = "AcceptedByCambridge";
    RegistrationReceivingOrganisationStatus2[RegistrationReceivingOrganisationStatus2["DeliveryRequested"] = 4] = "DeliveryRequested";
    return RegistrationReceivingOrganisationStatus2;
})(RegistrationReceivingOrganisationStatus || {});
var IELTSProducts = /* @__PURE__ */ ((IELTSProducts2) => {
    IELTSProducts2["OnlineAC"] = "PF~IeltsOnline.EX~IELTSONLINE.PR_MOD~AC";
    IELTSProducts2["OnlineGT"] = "PF~IeltsOnline.EX~IELTSONLINE.PR_MOD~GT";
    IELTSProducts2["UkviOnlineAC"] = "PF~UkviOnline.EX~IELTSONLINE.PR_MOD~AC";
    IELTSProducts2["UkviOnlineGT"] = "PF~UkviOnline.EX~IELTSONLINE.PR_MOD~GT";
    return IELTSProducts2;
})(IELTSProducts || {});

// src/utils/adapters.ts
var import_axios_extensions = require("axios-extensions");
var addAdapters = (axios2, threshold = 3e3) => axios2.defaults.adapter = (0, import_axios_extensions.throttleAdapterEnhancer)((0, import_axios_extensions.cacheAdapterEnhancer)(axios2.defaults.adapter, {
    enabledByDefault: false
}), {
    threshold
});

// src/utils/retry.ts
var import_axios_retry = __toESM(require("axios-retry"));
var addRetry = (axios2, threshold = 3e3, retryCondition2) => (0, import_axios_retry.default)(axios2, {
    retries: 1,
    retryDelay: () => threshold,
    retryCondition: retryCondition2
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

// src/enhancedClients/iol.ts
var retryCondition = (error) => {
    var _a;
    if (((_a = error.response) == null ? void 0 : _a.status) === 409) {
        return true;
    }
    return (0, import_axios_retry2.isNetworkOrIdempotentRequestError)(error);
};
addAdapters(axios);
addRetry(axios, void 0, retryCondition);

function registerIolInterceptors(interceptorActions) {
    usei18nInterceptor(axios);
    useAuthInterceptor(axios, interceptorActions.authActions);
    (0, import_react_common.setupAuditInterceptor)(axios);
    useSentryInterceptor(axios, interceptorActions.loggerActions);
    usePremiumCodeInterceptor(axios);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AlertType,
    BandScoreType,
    CandidateMarketingPreferences,
    EorRequestStatus,
    ExamModule,
    HelpRequestType,
    IELTSProducts,
    IdentityDocumentStatus,
    NotificationType,
    ProductType,
    ReceivingOrganisationMethodOfDelivery,
    RegistrationDocumentType,
    RegistrationReceivingOrganisationStatus,
    RegistrationStatus,
    ResultStatus,
    SelfServiceType,
    TransactionItemStatus,
    axios,
    candidatesClient,
    featuresClient,
    preparationMaterialsClient,
    productsClient,
    receivingOrganisationsClient,
    registerIolInterceptors,
    registrationAllowedActionsClient,
    registrationCancellationRequestsClient,
    registrationClient,
    registrationDocumentsClient,
    registrationEnquiryOnResultsClient,
    registrationGelIntegrationClient,
    registrationHelpInfoClient,
    registrationNotificationsClient,
    registrationReceivingOrganisationsClient,
    registrationTestTakerClient,
    reservationClient
});