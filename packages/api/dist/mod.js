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

// src/enhancedClients/mod.ts
var mod_exports = {};
__export(mod_exports, {
    AccessArrangementType: () => AccessArrangementType,
    AgentCandidateInvitationContextState: () => AgentCandidateInvitationContextState,
    AwardingBodySystem: () => AwardingBodySystem,
    BandScoreType: () => BandScoreType,
    BatchExamFormat: () => BatchExamFormat,
    BatchIeltsModule: () => BatchIeltsModule,
    CandidateMarketingPreferences: () => CandidateMarketingPreferences,
    ComponentType: () => ComponentType,
    CustomInvoiceTypes: () => CustomInvoiceTypes,
    EnabledOption: () => EnabledOption,
    EorRequestStatus: () => EorRequestStatus,
    ExamFormat: () => ExamFormat,
    ExamModule: () => ExamModule,
    ExamOptionType: () => ExamOptionType,
    HelpRequestType: () => HelpRequestType,
    HowPaidType: () => HowPaidType,
    IeltsModule: () => IeltsModule,
    ProductFamilies: () => ProductFamilies,
    ProductType: () => ProductType,
    ProductsInCentre: () => ProductsInCentre,
    ReceivingOrganisationMethodOfDelivery: () => ReceivingOrganisationMethodOfDelivery,
    RegistrationReceivingOrganisationStatus: () => RegistrationReceivingOrganisationStatus,
    RegistrationStatus: () => RegistrationStatus,
    ResultDeliveryType: () => ResultDeliveryType,
    ResultStatus: () => ResultStatus,
    SortDirection: () => SortDirection,
    SpeakingFormat: () => SpeakingFormat,
    SpeakingFormat2: () => SpeakingFormat2,
    TestRange: () => TestRange,
    TestType: () => TestType,
    TimeTableSession: () => TimeTableSession,
    WhoPaysType: () => WhoPaysType,
    awardingBodySystemsClient: () => awardingBodySystemsClient,
    axios: () => axios,
    cancellationRequestsClient: () => cancellationRequestsClient,
    candidatesClient: () => candidatesClient,
    candidatesEnglishOnlineClient: () => candidatesEnglishOnlineClient,
    centresClient: () => centresClient,
    countriesClient: () => countriesClient,
    districtExamsClient: () => districtExamsClient,
    districtsClient: () => districtsClient,
    familyRelationshipClient: () => familyRelationshipClient,
    featureFlagsClient: () => featureFlagsClient,
    invitationContextClient: () => invitationContextClient,
    nonClosestVenueReasonClient: () => nonClosestVenueReasonClient,
    organisationCountriesClient: () => organisationCountriesClient,
    organisationsClient: () => organisationsClient,
    preparationMaterialsClient: () => preparationMaterialsClient,
    productsClient: () => productsClient,
    receivingOrganisationsClient: () => receivingOrganisationsClient,
    registerModInterceptors: () => registerModInterceptors,
    registrationAccessArrangementsClient: () => registrationAccessArrangementsClient,
    registrationAlertsClient: () => registrationAlertsClient,
    registrationAllowedActionsClient: () => registrationAllowedActionsClient,
    registrationCancellationRequestsClient: () => registrationCancellationRequestsClient,
    registrationClient: () => registrationClient,
    registrationDocumentsClient: () => registrationDocumentsClient,
    registrationEnquiryOnResultsClient: () => registrationEnquiryOnResultsClient,
    registrationGelIntegrationClient: () => registrationGelIntegrationClient,
    registrationHelpInfoClient: () => registrationHelpInfoClient,
    registrationOneSkillRetakeClient: () => registrationOneSkillRetakeClient,
    registrationReceivingOrganisationsClient: () => registrationReceivingOrganisationsClient,
    registrationTransactionsClient: () => registrationTransactionsClient,
    registrationTransferRequestClient: () => registrationTransferRequestClient,
    reservationClient: () => reservationClient,
    specialArrangementClient: () => specialArrangementClient,
    termsAndConditionsClient: () => termsAndConditionsClient,
    ukviOnRequestsClient: () => ukviOnRequestsClient
});
module.exports = __toCommonJS(mod_exports);
var import_react_common = require("@britishcouncil/react-common");
var import_axios_retry2 = require("axios-retry");

// src/clients/mod.ts
var import_axios = __toESM(require("axios"));
var import_qs = __toESM(require("qs"));
var axios = import_axios.default.create({
    baseURL: "/modernisation",
    paramsSerializer: (params) => import_qs.default.stringify(params, {
        arrayFormat: "repeat"
    })
});
var awardingBodySystemsClient = {
    getAllCountries(awardingBodySystem, productFamilyId, $config) {
        let url = "/api/awarding-body-systems/{awardingBodySystem}/countries/{productFamilyId}";
        url = url.replace("{awardingBodySystem}", encodeURIComponent("" + awardingBodySystem));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getAllGenders(awardingBodySystem, productFamilyId, $config) {
        let url = "/api/awarding-body-systems/{awardingBodySystem}/genders/{productFamilyId}";
        url = url.replace("{awardingBodySystem}", encodeURIComponent("" + awardingBodySystem));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getAllMarketingQuestions(awardingBodySystem, productFamilyId, $config) {
        let url = "/api/awarding-body-systems/{awardingBodySystem}/marketing-questions/{productFamilyId}";
        url = url.replace("{awardingBodySystem}", encodeURIComponent("" + awardingBodySystem));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getAllVisaTypes(awardingBodySystem, productFamilyId, $config) {
        let url = "/api/awarding-body-systems/{awardingBodySystem}/visa-types/{productFamilyId}";
        url = url.replace("{awardingBodySystem}", encodeURIComponent("" + awardingBodySystem));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getAvailableIds(awardingBodySystem, organisationCountryId, productFamilyId, $config) {
        let url = "/api/awarding-body-systems/{awardingBodySystem}/organisation-countries/{organisationCountryId}/available-ids/{productFamilyId}";
        url = url.replace("{awardingBodySystem}", encodeURIComponent("" + awardingBodySystem));
        url = url.replace("{organisationCountryId}", encodeURIComponent("" + organisationCountryId));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCountryAvailableGenders(awardingBodySystem, productFamilyId, countryId, $config) {
        let url = "/api/awarding-body-systems/{awardingBodySystem}/genders/{productFamilyId}/{countryId}";
        url = url.replace("{awardingBodySystem}", encodeURIComponent("" + awardingBodySystem));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        url = url.replace("{countryId}", encodeURIComponent("" + countryId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var cancellationRequestsClient = {
    getCancellationReasons($config) {
        let url = "/api/cancellation-requests/reasons";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var centresClient = {
    getCentreConfiguration(centreId, $config) {
        let url = "/api/centres/{centreId}/configuration";
        url = url.replace("{centreId}", encodeURIComponent("" + centreId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getCentrePaymentMethods(centreId, productFamilyId, registrationId, $config) {
        let url = "/api/centres/{centreId}/payment-methods/{productFamilyId}";
        url = url.replace("{centreId}", encodeURIComponent("" + centreId));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                registrationId: serializeQueryParam(registrationId)
            }
        }, $config));
    },
    getCommonQuestionsHelpContent(centreId, $config) {
        let url = "/api/centres/{centreId}/help-contents/common-questions";
        url = url.replace("{centreId}", encodeURIComponent("" + centreId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var countriesClient = {
    getCountryExamDates(countryId, productFamilyId, request, $config) {
        let url = "/api/countries/{countryId}/exams/{productFamilyId}/exam-dates";
        url = url.replace("{countryId}", encodeURIComponent("" + countryId));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    getCountrySettings(countryId, $config) {
        let url = "/api/countries/{countryId}/settings";
        url = url.replace("{countryId}", encodeURIComponent("" + countryId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getExamCountries(productFamilyId, $config) {
        let url = "/api/countries/exams/{productFamilyId}";
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getExamCountryByIsoCode(productFamilyId, isoCode2, $config) {
        let url = "/api/countries/{isoCode2}/exams/{productFamilyId}";
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        url = url.replace("{isoCode2}", encodeURIComponent("" + isoCode2));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getIeltsReadyMemberAreaAvailability($config) {
        let url = "/api/countries/ielts-ready-member-area/availability";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getResidencyConfirmationSettings($config) {
        let url = "/api/countries/residency-confirmation-settings";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var districtExamsClient = {
    getExamDistricts(productFamilyId, request, $config) {
        let url = "/api/district-exams/{productFamilyId}";
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    getExamDistrictsCoords(productFamilyId, request, $config) {
        let url = "/api/district-exams/coords/{productFamilyId}";
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    }
};
var districtsClient = {
    getDistrictExamDates(productFamilyId, request, $config) {
        let url = "/api/districts/exams/{productFamilyId}/exam-dates";
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    getExamDistricts(productFamilyId, districtsGetExamDistrictsQuery, $config) {
        let url = "/api/districts/exams/{productFamilyId}";
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                countryId: serializeQueryParam(districtsGetExamDistrictsQuery.countryId),
                ieltsModule: serializeQueryParam(districtsGetExamDistrictsQuery.ieltsModule),
                examOptionType: serializeQueryParam(districtsGetExamDistrictsQuery.examOptionType),
                organisationId: serializeQueryParam(districtsGetExamDistrictsQuery.organisationId)
            }
        }, $config));
    }
};
var familyRelationshipClient = {
    getFamilyRelationships($config) {
        let url = "/api/family-relationships/all";
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
var invitationContextClient = {
    get($config) {
        let url = "/api/invitation-context";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var nonClosestVenueReasonClient = {
    getNonClosestVenueReasons($config) {
        let url = "/api/non-closest-venue-reasons/all";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var organisationCountriesClient = {
    getOrganisationCountryConfiguration(organisationCountryId, productFamilyId, $config) {
        let url = "/api/organisation-countries/{organisationCountryId}/configuration/{productFamilyId}";
        url = url.replace("{organisationCountryId}", encodeURIComponent("" + organisationCountryId));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var organisationsClient = {
    getOrganisationConfiguration(productFamilyId, alias, $config) {
        let url = "/api/organisations/configuration/{productFamilyId}";
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                alias: serializeQueryParam(alias)
            }
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
    },
    getPreparationMaterials(registrationId, $config) {
        let url = "/api/preparation-materials/{registrationId}";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var productsClient = {
    getAvailableGenders(productId, countryId, $config) {
        let url = "/api/products/{productId}/genders/{countryId}";
        url = url.replace("{productId}", encodeURIComponent("" + productId));
        url = url.replace("{countryId}", encodeURIComponent("" + countryId));
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
    }
};
var receivingOrganisationsClient = {
    getAll(receivingOrganisationsGetAllQuery, $config) {
        let url = "/api/receiving-organisations";
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                productId: serializeQueryParam(receivingOrganisationsGetAllQuery.productId),
                page: serializeQueryParam(receivingOrganisationsGetAllQuery.page),
                pageSize: serializeQueryParam(receivingOrganisationsGetAllQuery.pageSize),
                search: serializeQueryParam(receivingOrganisationsGetAllQuery.search),
                countryId: serializeQueryParam(receivingOrganisationsGetAllQuery.countryId)
            }
        }, $config));
    },
    getLimits(organisationCountryId, $config) {
        let url = "/api/receiving-organisations/organisation-countries/{organisationCountryId}/limits";
        url = url.replace("{organisationCountryId}", encodeURIComponent("" + organisationCountryId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var registrationAccessArrangementsClient = {
    getRegistrationAccessArrangements(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/access-arrangements";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var registrationAlertsClient = {
    getAlerts(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/alerts";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
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
    createIeltsRegistration(request, $config) {
        let url = "/api/registrations/ielts";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    createUkviRegistration(request, $config) {
        let url = "/api/registrations/ukvi";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
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
    getPaymentStatus(registrationId, paymentId, $config) {
        let url = "/api/registrations/{registrationId}/payments/{paymentId}/status";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        url = url.replace("{paymentId}", encodeURIComponent("" + paymentId));
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
                returnUrl: serializeQueryParam(registrationPayOnlineQuery.returnUrl)
            }
        }, $config));
    },
    payOnlineExamRegistration(registrationId, returnUrl, $config) {
        let url = "/api/registrations/{registrationId}/pay-online";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            params: {
                returnUrl: serializeQueryParam(returnUrl)
            }
        }, $config));
    }
};
var registrationDocumentsClient = {
    updateIdentificationDocument(registrationId, files, idsOfFilesToRemove, $config) {
        let url = "/api/registrations/{registrationId}/registration-documents/identity";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        const formDataBody = new FormData();
        if (!!files) {
            files.forEach((f) => formDataBody.append("files", f));
        }
        if (!!idsOfFilesToRemove) {
            idsOfFilesToRemove.forEach((f) => formDataBody.append("idsOfFilesToRemove", f));
        }
        return axios.request(__spreadValues({
            url,
            method: "POST",
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
    getOfflinePaymentNote(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/enquiry-on-results/offline-payment-note";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getSettings(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/enquiry-on-results/settings";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
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
var registrationOneSkillRetakeClient = {
    getAvailableDistricts(registrationId, componentType, $config) {
        let url = "/api/registrations/{registrationId}/one-skill-retakes/available-districts";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                componentType: serializeQueryParam(componentType)
            }
        }, $config));
    },
    getExamDates(registrationId, registrationOneSkillRetakeGetExamDatesQuery, $config) {
        let url = "/api/registrations/{registrationId}/one-skill-retakes/exam-dates";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                componentType: serializeQueryParam(registrationOneSkillRetakeGetExamDatesQuery.componentType),
                districtIds: serializeQueryParam(registrationOneSkillRetakeGetExamDatesQuery.districtIds)
            }
        }, $config));
    },
    getLrwDistrictExams(registrationId, registrationOneSkillRetakeGetLrwDistrictExamsQuery, $config) {
        let url = "/api/registrations/{registrationId}/one-skill-retakes/district-exams/lrw";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                districtIds: serializeQueryParam(registrationOneSkillRetakeGetLrwDistrictExamsQuery.districtIds),
                from: serializeQueryParam(registrationOneSkillRetakeGetLrwDistrictExamsQuery.from),
                to: serializeQueryParam(registrationOneSkillRetakeGetLrwDistrictExamsQuery.to)
            }
        }, $config));
    },
    getSpeakingDistrictExams(registrationId, registrationOneSkillRetakeGetSpeakingDistrictExamsQuery, $config) {
        let url = "/api/registrations/{registrationId}/one-skill-retakes/district-exams/speaking";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                districtIds: serializeQueryParam(registrationOneSkillRetakeGetSpeakingDistrictExamsQuery.districtIds),
                from: serializeQueryParam(registrationOneSkillRetakeGetSpeakingDistrictExamsQuery.from),
                to: serializeQueryParam(registrationOneSkillRetakeGetSpeakingDistrictExamsQuery.to)
            }
        }, $config));
    },
    requestOneSkillRetake(registrationId, request, $config) {
        let url = "/api/registrations/{registrationId}/one-skill-retakes/request";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    reserveOneSkillRetake(registrationId, request, $config) {
        let url = "/api/registrations/{registrationId}/one-skill-retakes/reserve";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
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
var registrationTransactionsClient = {
    getPaymentConfirmationReceipt(registrationId, transactionId, productType, $config) {
        let url = "/api/registrations/{registrationId}/transactions/{transactionId}/payment-confirmation-receipt";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        url = url.replace("{transactionId}", encodeURIComponent("" + transactionId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                productType: serializeQueryParam(productType)
            }
        }, $config));
    },
    getUnpaidTransactions(registrationId, productType, $config) {
        let url = "/api/registrations/{registrationId}/transactions/unpaid";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                productType: serializeQueryParam(productType)
            }
        }, $config));
    }
};
var registrationTransferRequestClient = {
    getAvailableSpeakingSlots(registrationId, registrationTransferRequestGetAvailableSpeakingSlotsQuery, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests/available-speaking-slots";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                userLatitude: serializeQueryParam(registrationTransferRequestGetAvailableSpeakingSlotsQuery.userLatitude),
                userLongitude: serializeQueryParam(registrationTransferRequestGetAvailableSpeakingSlotsQuery.userLongitude)
            }
        }, $config));
    },
    getDistrictExamDates(registrationId, districtIds, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests/exam-dates";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                districtIds: serializeQueryParam(districtIds)
            }
        }, $config));
    },
    getDistrictExams(registrationId, request, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests/district-exams";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    getExamDistricts(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests/districts";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getOsrDistrictExamDates(registrationId, districtIds, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests/osr/exam-dates";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                districtIds: serializeQueryParam(districtIds)
            }
        }, $config));
    },
    getOsrExamDistricts(registrationId, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests/osr/districts";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    },
    getOsrLrwDistrictExams(registrationId, request, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests/osr/district-exams/lrw";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    getOsrSpeakingDistrictExams(registrationId, request, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests/osr/district-exams/speaking";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    submitOsrLrwTransferRequest(registrationId, request, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests/osr/lrw";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    submitOsrSpeakingTransferRequest(registrationId, request, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests/osr/speaking";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    submitSpeakingTransferRequest(registrationId, request, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests/speaking-transfer";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    submitTransferRequest(registrationId, request, $config) {
        let url = "/api/registrations/{registrationId}/transfer-requests";
        url = url.replace("{registrationId}", encodeURIComponent("" + registrationId));
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    }
};
var reservationClient = {
    reserveExistingChild(request, $config) {
        let url = "/api/reservations/existing-child";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    reserveMyself(request, $config) {
        let url = "/api/reservations/myself";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    },
    reserveNewChild(request, $config) {
        let url = "/api/reservations/new-child";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    }
};
var specialArrangementClient = {
    getSpecialArrangements($config) {
        let url = "/api/special-arrangements/all";
        return axios.request(__spreadValues({
            url,
            method: "GET"
        }, $config));
    }
};
var termsAndConditionsClient = {
    getTermsAndConditions(shortCode, productFamilyId, termsAndConditionsGetTermsAndConditionsQuery, $config) {
        let url = "/api/terms-and-conditions/{shortCode}/{productFamilyId}";
        url = url.replace("{shortCode}", encodeURIComponent("" + shortCode));
        url = url.replace("{productFamilyId}", encodeURIComponent("" + productFamilyId));
        return axios.request(__spreadValues({
            url,
            method: "GET",
            params: {
                organisationCountryId: serializeQueryParam(termsAndConditionsGetTermsAndConditionsQuery.organisationCountryId),
                version: serializeQueryParam(termsAndConditionsGetTermsAndConditionsQuery.version),
                isLifeSkills: serializeQueryParam(termsAndConditionsGetTermsAndConditionsQuery.isLifeSkills)
            }
        }, $config));
    }
};
var ukviOnRequestsClient = {
    addTestRequest(request, $config) {
        let url = "/api/ukvi-on-requests";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            data: request
        }, $config));
    }
};
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
    }
};
var candidatesEnglishOnlineClient = {
    createEnglishOnlineAccount(candidatesEnglishOnlineCreateEnglishOnlineAccountQuery, $config) {
        let url = "/api/candidates/english-online/create-account";
        return axios.request(__spreadValues({
            url,
            method: "POST",
            params: {
                countryId: serializeQueryParam(candidatesEnglishOnlineCreateEnglishOnlineAccountQuery.countryId),
                expectedTargetScore: serializeQueryParam(candidatesEnglishOnlineCreateEnglishOnlineAccountQuery.expectedTargetScore)
            }
        }, $config));
    },
    generateEnglishOnlineExternalLink($config) {
        let url = "/api/candidates/english-online/generate-external-link";
        return axios.request(__spreadValues({
            url,
            method: "POST"
        }, $config));
    }
};

function serializeQueryParam(obj) {
    if (obj === null || obj === void 0)
        return void 0;
    if (obj instanceof Date)
        return obj.toJSON();
    if (typeof obj !== "object" || Array.isArray(obj))
        return obj;
    return Object.keys(obj).reduce((a, b) => a.push(b + "=" + obj[b]) && a, []).join("&");
}
var AwardingBodySystem = /* @__PURE__ */ ((AwardingBodySystem2) => {
    AwardingBodySystem2[AwardingBodySystem2["CMDS"] = 1] = "CMDS";
    AwardingBodySystem2[AwardingBodySystem2["IWAS"] = 2] = "IWAS";
    return AwardingBodySystem2;
})(AwardingBodySystem || {});
var ExamFormat = /* @__PURE__ */ ((ExamFormat2) => {
    ExamFormat2[ExamFormat2["PB"] = 1] = "PB";
    ExamFormat2[ExamFormat2["CD"] = 2] = "CD";
    return ExamFormat2;
})(ExamFormat || {});
var ExamModule = /* @__PURE__ */ ((ExamModule2) => {
    ExamModule2[ExamModule2["AC"] = 1] = "AC";
    ExamModule2[ExamModule2["GT"] = 2] = "GT";
    return ExamModule2;
})(ExamModule || {});
var ExamOptionType = /* @__PURE__ */ ((ExamOptionType2) => {
    ExamOptionType2[ExamOptionType2["IELTSLRW"] = 23795] = "IELTSLRW";
    ExamOptionType2[ExamOptionType2["IELTSCDLRW"] = 26944] = "IELTSCDLRW";
    ExamOptionType2[ExamOptionType2["IELTSUKVILRW"] = 5e4] = "IELTSUKVILRW";
    ExamOptionType2[ExamOptionType2["IELTSCDUKVILRW"] = 50001] = "IELTSCDUKVILRW";
    ExamOptionType2[ExamOptionType2["LifeSkillsA1"] = 50002] = "LifeSkillsA1";
    ExamOptionType2[ExamOptionType2["LifeSkillsA2"] = 50003] = "LifeSkillsA2";
    ExamOptionType2[ExamOptionType2["LifeSkillsB1"] = 50004] = "LifeSkillsB1";
    return ExamOptionType2;
})(ExamOptionType || {});
var SpeakingFormat = /* @__PURE__ */ ((SpeakingFormat3) => {
    SpeakingFormat3[SpeakingFormat3["Live"] = 1] = "Live";
    SpeakingFormat3[SpeakingFormat3["Remote"] = 2] = "Remote";
    return SpeakingFormat3;
})(SpeakingFormat || {});
var TimeTableSession = /* @__PURE__ */ ((TimeTableSession2) => {
    TimeTableSession2[TimeTableSession2["A"] = 1] = "A";
    TimeTableSession2[TimeTableSession2["P"] = 2] = "P";
    TimeTableSession2[TimeTableSession2["E"] = 3] = "E";
    TimeTableSession2[TimeTableSession2["D"] = 4] = "D";
    TimeTableSession2[TimeTableSession2["X"] = 5] = "X";
    return TimeTableSession2;
})(TimeTableSession || {});
var SortDirection = /* @__PURE__ */ ((SortDirection2) => {
    SortDirection2[SortDirection2["Undefined"] = 0] = "Undefined";
    SortDirection2[SortDirection2["Asc"] = 1] = "Asc";
    SortDirection2[SortDirection2["Desc"] = 2] = "Desc";
    return SortDirection2;
})(SortDirection || {});
var IeltsModule = /* @__PURE__ */ ((IeltsModule2) => {
    IeltsModule2[IeltsModule2["AC"] = 1] = "AC";
    IeltsModule2[IeltsModule2["GT"] = 2] = "GT";
    return IeltsModule2;
})(IeltsModule || {});
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
var WhoPaysType = /* @__PURE__ */ ((WhoPaysType2) => {
    WhoPaysType2[WhoPaysType2["AgentOrTestTaker"] = 0] = "AgentOrTestTaker";
    WhoPaysType2[WhoPaysType2["Agent"] = 1] = "Agent";
    WhoPaysType2[WhoPaysType2["TestTaker"] = 2] = "TestTaker";
    return WhoPaysType2;
})(WhoPaysType || {});
var AgentCandidateInvitationContextState = /* @__PURE__ */ ((AgentCandidateInvitationContextState2) => {
    AgentCandidateInvitationContextState2[AgentCandidateInvitationContextState2["Empty"] = 1] = "Empty";
    AgentCandidateInvitationContextState2[AgentCandidateInvitationContextState2["Erroneous"] = 2] = "Erroneous";
    AgentCandidateInvitationContextState2[AgentCandidateInvitationContextState2["Active"] = 3] = "Active";
    AgentCandidateInvitationContextState2[AgentCandidateInvitationContextState2["NotActive"] = 4] = "NotActive";
    return AgentCandidateInvitationContextState2;
})(AgentCandidateInvitationContextState || {});
var EnabledOption = /* @__PURE__ */ ((EnabledOption2) => {
    EnabledOption2[EnabledOption2["Disabled"] = 1] = "Disabled";
    EnabledOption2[EnabledOption2["Enabled"] = 2] = "Enabled";
    EnabledOption2[EnabledOption2["EnabledAndMandatory"] = 3] = "EnabledAndMandatory";
    return EnabledOption2;
})(EnabledOption || {});
var ReceivingOrganisationMethodOfDelivery = /* @__PURE__ */ ((ReceivingOrganisationMethodOfDelivery2) => {
    ReceivingOrganisationMethodOfDelivery2[ReceivingOrganisationMethodOfDelivery2["Edelivery"] = 0] = "Edelivery";
    ReceivingOrganisationMethodOfDelivery2[ReceivingOrganisationMethodOfDelivery2["Postal"] = 1] = "Postal";
    return ReceivingOrganisationMethodOfDelivery2;
})(ReceivingOrganisationMethodOfDelivery || {});
var ComponentType = /* @__PURE__ */ ((ComponentType2) => {
    ComponentType2[ComponentType2["Listening"] = 1] = "Listening";
    ComponentType2[ComponentType2["Reading"] = 2] = "Reading";
    ComponentType2[ComponentType2["Writing"] = 3] = "Writing";
    ComponentType2[ComponentType2["Speaking"] = 4] = "Speaking";
    return ComponentType2;
})(ComponentType || {});
var AccessArrangementType = /* @__PURE__ */ ((AccessArrangementType2) => {
    AccessArrangementType2[AccessArrangementType2["ExtraTime25"] = 1] = "ExtraTime25";
    AccessArrangementType2[AccessArrangementType2["ExtraTime50"] = 2] = "ExtraTime50";
    AccessArrangementType2[AccessArrangementType2["Exemption"] = 3] = "Exemption";
    return AccessArrangementType2;
})(AccessArrangementType || {});
var RegistrationStatus = /* @__PURE__ */ ((RegistrationStatus2) => {
    RegistrationStatus2[RegistrationStatus2["Incomplete"] = 1] = "Incomplete";
    RegistrationStatus2[RegistrationStatus2["Confirmed"] = 2] = "Confirmed";
    RegistrationStatus2[RegistrationStatus2["Cancelled"] = 3] = "Cancelled";
    RegistrationStatus2[RegistrationStatus2["AwaitingResults"] = 4] = "AwaitingResults";
    RegistrationStatus2[RegistrationStatus2["HasResults"] = 5] = "HasResults";
    return RegistrationStatus2;
})(RegistrationStatus || {});
var ResultDeliveryType = /* @__PURE__ */ ((ResultDeliveryType2) => {
    ResultDeliveryType2[ResultDeliveryType2["Post"] = 1] = "Post";
    ResultDeliveryType2[ResultDeliveryType2["TestCentre"] = 2] = "TestCentre";
    ResultDeliveryType2[ResultDeliveryType2["Online"] = 3] = "Online";
    ResultDeliveryType2[ResultDeliveryType2["Sms"] = 4] = "Sms";
    return ResultDeliveryType2;
})(ResultDeliveryType || {});
var HowPaidType = /* @__PURE__ */ ((HowPaidType2) => {
    HowPaidType2[HowPaidType2["Myself"] = 1] = "Myself";
    HowPaidType2[HowPaidType2["AnotherPerson"] = 2] = "AnotherPerson";
    HowPaidType2[HowPaidType2["Company"] = 3] = "Company";
    HowPaidType2[HowPaidType2["Agent"] = 4] = "Agent";
    HowPaidType2[HowPaidType2["Centre"] = 5] = "Centre";
    return HowPaidType2;
})(HowPaidType || {});
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
var HelpRequestType = /* @__PURE__ */ ((HelpRequestType2) => {
    HelpRequestType2[HelpRequestType2["OtherEnquiry"] = 0] = "OtherEnquiry";
    HelpRequestType2[HelpRequestType2["Complaint"] = 1] = "Complaint";
    return HelpRequestType2;
})(HelpRequestType || {});
var ProductType = /* @__PURE__ */ ((ProductType2) => {
    ProductType2[ProductType2["Undefined"] = 0] = "Undefined";
    ProductType2[ProductType2["Transfer"] = 1] = "Transfer";
    ProductType2[ProductType2["ExamRegistration"] = 2] = "ExamRegistration";
    ProductType2[ProductType2["EnquiryOnResults"] = 3] = "EnquiryOnResults";
    ProductType2[ProductType2["Appeal"] = 4] = "Appeal";
    return ProductType2;
})(ProductType || {});
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
var SpeakingFormat2 = /* @__PURE__ */ ((SpeakingFormat22) => {
    SpeakingFormat22[SpeakingFormat22["InPerson"] = 1] = "InPerson";
    SpeakingFormat22[SpeakingFormat22["VideoCall"] = 2] = "VideoCall";
    return SpeakingFormat22;
})(SpeakingFormat2 || {});
var RegistrationReceivingOrganisationStatus = /* @__PURE__ */ ((RegistrationReceivingOrganisationStatus2) => {
    RegistrationReceivingOrganisationStatus2[RegistrationReceivingOrganisationStatus2["New"] = 0] = "New";
    RegistrationReceivingOrganisationStatus2[RegistrationReceivingOrganisationStatus2["CancellationRequested"] = 1] = "CancellationRequested";
    RegistrationReceivingOrganisationStatus2[RegistrationReceivingOrganisationStatus2["CancellationConfirmed"] = 2] = "CancellationConfirmed";
    RegistrationReceivingOrganisationStatus2[RegistrationReceivingOrganisationStatus2["AcceptedByCambridge"] = 3] = "AcceptedByCambridge";
    RegistrationReceivingOrganisationStatus2[RegistrationReceivingOrganisationStatus2["DeliveryRequested"] = 4] = "DeliveryRequested";
    return RegistrationReceivingOrganisationStatus2;
})(RegistrationReceivingOrganisationStatus || {});
var TestRange = /* @__PURE__ */ ((TestRange2) => {
    TestRange2[TestRange2["Within28Days"] = 1] = "Within28Days";
    TestRange2[TestRange2["Within2Months"] = 2] = "Within2Months";
    TestRange2[TestRange2["Within3Months"] = 3] = "Within3Months";
    TestRange2[TestRange2["MoreThan3Months"] = 4] = "MoreThan3Months";
    return TestRange2;
})(TestRange || {});
var TestType = /* @__PURE__ */ ((TestType2) => {
    TestType2[TestType2["AC"] = 1] = "AC";
    TestType2[TestType2["GT"] = 2] = "GT";
    TestType2[TestType2["LFSKA1"] = 3] = "LFSKA1";
    TestType2[TestType2["LFSKA2"] = 4] = "LFSKA2";
    TestType2[TestType2["LFSKB1"] = 5] = "LFSKB1";
    return TestType2;
})(TestType || {});
var CandidateMarketingPreferences = /* @__PURE__ */ ((CandidateMarketingPreferences2) => {
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["None"] = 0] = "None";
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["BcOnly"] = 1] = "BcOnly";
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["BcAndThird"] = 2] = "BcAndThird";
    return CandidateMarketingPreferences2;
})(CandidateMarketingPreferences || {});
var ProductsInCentre = /* @__PURE__ */ ((ProductsInCentre2) => {
    ProductsInCentre2["IELTSAcademicPaperBase"] = "PF~IELTS.EX~IELTS.PR_MOD~AC.PR_FMT~PB";
    ProductsInCentre2["IELTSGeneralTrainingPaperBase"] = "PF~IELTS.EX~IELTS.PR_MOD~GT.PR_FMT~PB";
    ProductsInCentre2["IELTSAcademicComputerDelivered"] = "PF~IELTS.EX~IELTS.PR_MOD~AC.PR_FMT~CD";
    ProductsInCentre2["IELTSGeneralTrainingComputerDelivered"] = "PF~IELTS.EX~IELTS.PR_MOD~GT.PR_FMT~CD";
    ProductsInCentre2["IELTSOsrAcademicComputerDelivered"] = "PF~IELTS.EX~IELTS.PR_MOD~AC.PR_FMT~CD.PR_PMD~OSR";
    ProductsInCentre2["IELTSOsrGeneralTrainingComputerDelivered"] = "PF~IELTS.EX~IELTS.PR_MOD~GT.PR_FMT~CD.PR_PMD~OSR";
    ProductsInCentre2["UKVIAcademicPaperBase"] = "PF~UKVI.EX~IELTS.PR_MOD~AC.PR_FMT~PB";
    ProductsInCentre2["UKVIGeneralTrainingPaperBase"] = "PF~UKVI.EX~IELTS.PR_MOD~GT.PR_FMT~PB";
    ProductsInCentre2["UKVIAcademicComputerDelivered"] = "PF~UKVI.EX~IELTS.PR_MOD~AC.PR_FMT~CD";
    ProductsInCentre2["UKVIGeneralTrainingComputerDelivered"] = "PF~UKVI.EX~IELTS.PR_MOD~GT.PR_FMT~CD";
    ProductsInCentre2["UKVIOsrAcademicComputerDelivered"] = "PF~UKVI.EX~IELTS.PR_MOD~AC.PR_FMT~CD.PR_PMD~OSR";
    ProductsInCentre2["UKVIOsrGeneralTrainingComputerDelivered"] = "PF~UKVI.EX~IELTS.PR_MOD~GT.PR_FMT~CD.PR_PMD~OSR";
    ProductsInCentre2["UKVILifeSkillsA1"] = "PF~UKVI.EX~LIFESKILLS.PR_LV~A1";
    ProductsInCentre2["UKVILifeSkillsA2"] = "PF~UKVI.EX~LIFESKILLS.PR_LV~A2";
    ProductsInCentre2["UKVILifeSkillsB1"] = "PF~UKVI.EX~LIFESKILLS.PR_LV~B1";
    return ProductsInCentre2;
})(ProductsInCentre || {});
var ProductFamilies = /* @__PURE__ */ ((ProductFamilies2) => {
    ProductFamilies2["IeltsOnline"] = "PF~IeltsOnline";
    ProductFamilies2["UkviOnline"] = "PF~UkviOnline";
    ProductFamilies2["IELTS"] = "PF~IELTS";
    ProductFamilies2["REX"] = "PF~REX";
    ProductFamilies2["UKVI"] = "PF~UKVI";
    return ProductFamilies2;
})(ProductFamilies || {});
var CustomInvoiceTypes = /* @__PURE__ */ ((CustomInvoiceTypes2) => {
    CustomInvoiceTypes2["TaiwanDuplicateUniformPaperInvoice"] = "TW_DUPLICATE_UNIFORM_PAPER_INVOICE";
    CustomInvoiceTypes2["TaiwanTriplicateUniformPaperInvoice"] = "TW_TRIPLICATE_UNIFORM_PAPER_INVOICE";
    CustomInvoiceTypes2["TaiwanDonateElectronicInvoice"] = "TW_DONATE_ELECTRONIC_INVOICE";
    CustomInvoiceTypes2["TaiwanMobileBarcodeCarrier"] = "TW_DUPLICATE_UNIFORM_ELECTRONIC_INVOICE_MOBILE_BARCODE_CARRIER";
    CustomInvoiceTypes2["TaiwanCitizenDigitalCertificateCarrier"] = "TW_DUPLICATE_UNIFORM_ELECTRONIC_INVOICE_CITIZEN_DIGITAL_CERTIFICATE_CARRIER";
    return CustomInvoiceTypes2;
})(CustomInvoiceTypes || {});

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

// src/enhancedClients/mod.ts
var retryCondition = (error) => {
    var _a;
    if (((_a = error.response) == null ? void 0 : _a.status) === 409) {
        return true;
    }
    return (0, import_axios_retry2.isNetworkOrIdempotentRequestError)(error);
};
addAdapters(axios);
addRetry(axios, void 0, retryCondition);

function registerModInterceptors(interceptorActions) {
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
    AccessArrangementType,
    AgentCandidateInvitationContextState,
    AwardingBodySystem,
    BandScoreType,
    BatchExamFormat,
    BatchIeltsModule,
    CandidateMarketingPreferences,
    ComponentType,
    CustomInvoiceTypes,
    EnabledOption,
    EorRequestStatus,
    ExamFormat,
    ExamModule,
    ExamOptionType,
    HelpRequestType,
    HowPaidType,
    IeltsModule,
    ProductFamilies,
    ProductType,
    ProductsInCentre,
    ReceivingOrganisationMethodOfDelivery,
    RegistrationReceivingOrganisationStatus,
    RegistrationStatus,
    ResultDeliveryType,
    ResultStatus,
    SortDirection,
    SpeakingFormat,
    SpeakingFormat2,
    TestRange,
    TestType,
    TimeTableSession,
    WhoPaysType,
    awardingBodySystemsClient,
    axios,
    cancellationRequestsClient,
    candidatesClient,
    candidatesEnglishOnlineClient,
    centresClient,
    countriesClient,
    districtExamsClient,
    districtsClient,
    familyRelationshipClient,
    featureFlagsClient,
    invitationContextClient,
    nonClosestVenueReasonClient,
    organisationCountriesClient,
    organisationsClient,
    preparationMaterialsClient,
    productsClient,
    receivingOrganisationsClient,
    registerModInterceptors,
    registrationAccessArrangementsClient,
    registrationAlertsClient,
    registrationAllowedActionsClient,
    registrationCancellationRequestsClient,
    registrationClient,
    registrationDocumentsClient,
    registrationEnquiryOnResultsClient,
    registrationGelIntegrationClient,
    registrationHelpInfoClient,
    registrationOneSkillRetakeClient,
    registrationReceivingOrganisationsClient,
    registrationTransactionsClient,
    registrationTransferRequestClient,
    reservationClient,
    specialArrangementClient,
    termsAndConditionsClient,
    ukviOnRequestsClient
});