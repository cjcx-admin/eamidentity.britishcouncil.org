var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
    AFFILIATION_PREMIUM_CODE_KEY: () => AFFILIATION_PREMIUM_CODE_KEY,
    AZURE_B2C_ACCOUNT_IDP: () => AZURE_B2C_ACCOUNT_IDP,
    CookieManager: () => CookieManager,
    E_VISA_ID: () => E_VISA_ID,
    E_VISA_PREFIX: () => E_VISA_PREFIX,
    F2F_NAME: () => F2F_NAME,
    ORGANISATION_ALIAS: () => ORGANISATION_ALIAS,
    ProductGroupSubSystemId: () => ProductGroupSubSystemId,
    TermsShortCodeEnum: () => TermsShortCodeEnum,
    VCS_NAME: () => VCS_NAME,
    appSettings: () => appSettings,
    checkIfProductIdMatchRegContext: () => checkIfProductIdMatchRegContext,
    converters: () => converters,
    countryIsoCode2: () => countryIsoCode2,
    defUploadConfig: () => defUploadConfig,
    downloadFile: () => downloadFile,
    examTypeDescription: () => examTypeDescription,
    examTypeDictionary: () => examTypeDictionary,
    formatCityPostCode: () => formatCityPostCode,
    formatSurname: () => formatSurname,
    generalLinks: () => generalLinks,
    getArrivalTime: () => getArrivalTime,
    getCtxFromProductId: () => getCtxFromProductId,
    getDraftProcessReturnUrl: () => getDraftProcessReturnUrl,
    getDraftProcessUrl: () => getDraftProcessUrl,
    getExamDetailsFromProductId: () => getExamDetailsFromProductId,
    getGA4PurchaseEvent: () => getGA4PurchaseEvent,
    getIdNumber: () => getIdNumber,
    getOrganisationAlias: () => getOrganisationAlias,
    getProductGroupSubSystemId: () => getProductGroupSubSystemId,
    getRegContext: () => getRegContext,
    getSearchParamSuffix: () => getSearchParamSuffix,
    groupVenueExams: () => groupVenueExams,
    hasOrganisationInUrl: () => hasOrganisationInUrl,
    icLinks: () => icLinks,
    includesInUrl: () => includesInUrl,
    iolLinks: () => iolLinks,
    isAdult: () => isAdult,
    isInCentre: () => isInCentre,
    isLifeSkillsExam: () => isLifeSkillsExam,
    localeFns: () => localeFns,
    logger: () => logger,
    makeTermsUrl: () => makeTermsUrl,
    preparePaymentMethods: () => preparePaymentMethods,
    removeHtmlTags: () => removeHtmlTags,
    sanitiseCountryIsoCode2: () => sanitiseCountryIsoCode2,
    storeOrganisationAliasInLS: () => storeOrganisationAliasInLS,
    useUppy: () => useUppy
});
module.exports = __toCommonJS(src_exports);

// src/hooks/useUppy.ts
var import_react = require("react");
var import_core = __toESM(require("@uppy/core"));
var import_file_input = __toESM(require("@uppy/file-input"));
var import_thumbnail_generator = __toESM(require("@uppy/thumbnail-generator"));
var import_react_i18next = require("react-i18next");
var import_react_common2 = require("@britishcouncil/react-common");

// src/helpers/dateAndTime/localeFns.tsx
var import_luxon = require("luxon");
var import_ors_translations = require("ors-translations");
var defaultFormat = {
    year: "numeric",
    month: "long",
    day: "numeric"
};
var localeFns = (locale, timeZoneId) => {
    const timeZone = timeZoneId != null ? timeZoneId : "UTC";
    const selectedLocale = locale || import_ors_translations.defaultLanguage;
    const localeTime = (time, formatOpts) => time ? import_luxon.DateTime.fromISO(time, {
        zone: timeZone,
        setZone: !timeZoneId
    }).toLocaleString(formatOpts != null ? formatOpts : import_luxon.DateTime.TIME_SIMPLE, {
        locale: selectedLocale
    }) : "\u2014";
    const localeDate = (date, formatOpts, format) => {
        if (!date) {
            return "\u2014";
        }
        const dateString = typeof date === "string" ? date : import_luxon.DateTime.fromJSDate(date).toISODate();
        const dateTime = import_luxon.DateTime.fromISO(dateString || "", {
            zone: timeZone,
            setZone: !timeZoneId
        });
        if (format) {
            return dateTime.toFormat(format);
        }
        return dateTime.toLocaleString(__spreadValues(__spreadValues({}, defaultFormat), formatOpts), {
            locale: selectedLocale
        });
    };
    const localeTimeFromDate = (date, formatOpts) => {
        if (!date) {
            return "\u2014";
        }
        const dateString = typeof date === "string" ? date : import_luxon.DateTime.fromJSDate(date, {
            zone: timeZoneId
        }).toISO();
        const timeLocal = import_luxon.DateTime.fromISO(dateString || "", {
            zone: timeZoneId
        }).toISOTime({
            includeOffset: false,
            suppressMilliseconds: true
        });
        return localeTime(timeLocal || "", formatOpts);
    };
    return {
        localeTime,
        localeDate,
        localeTimeFromDate
    };
};

// src/helpers/dateAndTime/getArrivalTime.ts
var import_luxon2 = require("luxon");
var import_ors_translations2 = require("ors-translations");
var getArrivalTime = (time, offset = 30, locale = import_ors_translations2.defaultLanguage) => {
    var _a;
    if (!time) {
        return "\u2014";
    }
    const {
        localeTime
    } = localeFns(locale);
    const arrival = (_a = import_luxon2.DateTime.fromISO(time, {
        locale
    }).minus({
        minutes: offset
    }).toISOTime()) == null ? void 0 : _a.split(".")[0];
    return localeTime(arrival);
};

// src/helpers/downloadFile.ts
var downloadFile = (data, fileName) => {
    const url = window.URL.createObjectURL(new Blob([data], {
        type: "application/pdf"
    }));
    let a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.setAttribute("download", fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

// src/helpers/draftProcess.ts
var getDraftProcessUrl = (currentUrl) => `/ttp/verification-and-update/${currentUrl.replaceAll("/", "$")}`;
var getDraftProcessReturnUrl = (returnUrl) => returnUrl.replaceAll("$", "/");

// src/helpers/examType.ts
var import_i18next = __toESM(require("i18next"));
var import_iol = require("ors-api/iol");
var import_mod = require("ors-api/mod");
var examTypeDictionary = () => ({
    ors: {
        ac: import_i18next.default.t("APPB2C.common.examType.ors.ac"),
        gt: import_i18next.default.t("APPB2C.common.examType.ors.gt"),
        osr: {
            ac: import_i18next.default.t("APPB2C.common.examType.ors.osr.ac"),
            gt: import_i18next.default.t("APPB2C.common.examType.ors.osr.gt")
        }
    },
    iol: {
        ac: import_i18next.default.t("APPB2C.common.examType.iol.ac"),
        gt: import_i18next.default.t("APPB2C.common.examType.iol.gt")
    },
    uol: {
        ac: import_i18next.default.t("APPB2C.common.examType.uol.ac"),
        gt: import_i18next.default.t("APPB2C.common.examType.uol.gt")
    },
    ukvi: {
        ac: import_i18next.default.t("APPB2C.common.examType.ukvi.ac"),
        gt: import_i18next.default.t("APPB2C.common.examType.ukvi.gt"),
        lfska1: import_i18next.default.t("APPB2C.common.examType.ukvi.lfska1.v2"),
        lfska2: import_i18next.default.t("APPB2C.common.examType.ukvi.lfska2.v2"),
        lfskb1: import_i18next.default.t("APPB2C.common.examType.ukvi.lfskb1.v2"),
        osr: {
            ac: import_i18next.default.t("APPB2C.common.examType.ukvi.osr.ac"),
            gt: import_i18next.default.t("APPB2C.common.examType.ukvi.osr.gt")
        }
    }
});
var examTypeDescription = (productId) => {
    switch (productId) {
        case import_iol.IELTSProducts.OnlineAC:
            return examTypeDictionary().iol.ac;
        case import_iol.IELTSProducts.OnlineGT:
            return examTypeDictionary().iol.gt;
        case import_iol.IELTSProducts.UkviOnlineAC:
            return examTypeDictionary().uol.ac;
        case import_iol.IELTSProducts.UkviOnlineGT:
            return examTypeDictionary().uol.gt;
        case import_mod.ProductsInCentre.IELTSAcademicPaperBase:
        case import_mod.ProductsInCentre.IELTSAcademicComputerDelivered:
            return examTypeDictionary().ors.ac;
        case import_mod.ProductsInCentre.IELTSGeneralTrainingPaperBase:
        case import_mod.ProductsInCentre.IELTSGeneralTrainingComputerDelivered:
            return examTypeDictionary().ors.gt;
        case import_mod.ProductsInCentre.UKVIAcademicPaperBase:
        case import_mod.ProductsInCentre.UKVIAcademicComputerDelivered:
            return examTypeDictionary().ukvi.ac;
        case import_mod.ProductsInCentre.UKVIGeneralTrainingPaperBase:
        case import_mod.ProductsInCentre.UKVIGeneralTrainingComputerDelivered:
            return examTypeDictionary().ukvi.gt;
        case import_mod.ProductsInCentre.UKVILifeSkillsA1:
            return examTypeDictionary().ukvi.lfska1;
        case import_mod.ProductsInCentre.UKVILifeSkillsA2:
            return examTypeDictionary().ukvi.lfska2;
        case import_mod.ProductsInCentre.UKVILifeSkillsB1:
            return examTypeDictionary().ukvi.lfskb1;
        case import_mod.ProductsInCentre.IELTSOsrAcademicComputerDelivered:
            return examTypeDictionary().ors.osr.ac;
        case import_mod.ProductsInCentre.IELTSOsrGeneralTrainingComputerDelivered:
            return examTypeDictionary().ors.osr.gt;
        case import_mod.ProductsInCentre.UKVIOsrAcademicComputerDelivered:
            return examTypeDictionary().ukvi.osr.ac;
        case import_mod.ProductsInCentre.UKVIOsrGeneralTrainingComputerDelivered:
            return examTypeDictionary().ukvi.osr.gt;
        default:
            return productId;
    }
};
var getCtxFromProductId = (productId) => {
    if (!productId)
        return "";
    return productId.toLowerCase().includes("online") ? "iol" : productId.toLowerCase().includes("ukvi") ? "ukvi" : "ors";
};
var isInCentre = (productId) => {
    return Object.values(import_mod.ProductsInCentre).includes(productId);
};

// src/helpers/fileUploadConfig.ts
var defUploadConfig = {
    minNumberOfFiles: 1,
    maxNumberOfFiles: 4,
    maxFileSize: 5 * 1024 * 1024,
    allowedFileTypes: [".pdf", ".jpg", ".jpeg", ".gif", ".png", ".heic"]
};

// src/helpers/getOrganisationAlias.ts
var import_react_common = require("@britishcouncil/react-common");
var import_ors_translations3 = require("ors-translations");
var orgRegex = /organi(z|s)ation/g;
var ORGANISATION_ALIAS = "ORGANISATION_ALIAS";

function getOrganisationAlias() {
    var _a;
    const aliasFromUrl = (_a = (0, import_react_common.getUrlSearchParam)("organisation")) != null ? _a : (0, import_react_common.getUrlSearchParam)("organization");
    const ieltsUsaAlias = (0, import_ors_translations3.isIeltsUsaContextUrl)() ? import_ors_translations3.ieltsUsaSpecific.organisationAlias : null;
    return aliasFromUrl != null ? aliasFromUrl : ieltsUsaAlias;
}
var hasOrganisationInUrl = () => {
    const hasOrg = window.location.search.match(orgRegex);
    return !!hasOrg;
};

function storeOrganisationAliasInLS() {
    const alias = getOrganisationAlias();
    alias && import_react_common.SimpleLS.write(ORGANISATION_ALIAS, alias);
}

// src/helpers/getSearchParamSuffix.ts
var getSearchParamSuffix = (params) => {
    const searchParams = params != null ? params : new URLSearchParams();
    const organisationAlias = getOrganisationAlias();
    organisationAlias && searchParams.append("organisation", organisationAlias);
    const searchParamsToAppend = searchParams.toString();
    return searchParamsToAppend ? `?${searchParamsToAppend}` : "";
};

// src/helpers/includesInUrl.ts
var includesInUrl = (includedRoute) => {
    return location.pathname.includes(includedRoute);
};

// src/helpers/logger.ts
var Sentry = __toESM(require("@sentry/react"));
var logger = {
    logError: (err) => {
        if (logger.shouldLogAsFailedRequest(err, "Unknown")) {
            return;
        }
        Sentry.captureException(err);
    },
    ignored400Urls: ["/api/candidates/exists"],
    ignored404Urls: [
        "/api/countries",
        "/api/candidates/exists",
        "/api/candidates/{ID}/existing-registration",
        "/api/candidates/mcr"
    ],
    logFailedRequest: (resp) => {
        var _a, _b;
        if (!resp) {
            return;
        }
        const regexpId = /\d+/g;
        let url = ((_a = resp.response) == null ? void 0 : _a.config.url) || "Unknown";
        const ids = Array.from(url.matchAll(regexpId), (m) => `${m[0]}`);
        url = url.replaceAll(regexpId, "{ID}");
        if (logger.shouldLogAsFailedRequest(resp, url)) {
            const statusCode = ((_b = resp.response) == null ? void 0 : _b.status) || parseInt(resp.code || "");
            Sentry.withScope((scope) => {
                var _a2;
                if (resp.config.headers) {
                    scope.setTags({
                        status: statusCode,
                        requestId: resp.config.headers["X-Request-Id"] || "",
                        sessionId: resp.config.headers["X-Session-Id"] || ""
                    });
                    let validationErrorCode = "";
                    if ((_a2 = resp.response) == null ? void 0 : _a2.data) {
                        scope.setContext("Response", {
                            response: JSON.stringify(resp.response.data)
                        });
                        const respData = resp.response.data;
                        if (respData.errors && respData.errors.length > 0 && respData.errors[0].errorCode) {
                            validationErrorCode = respData.errors[0].errorCode;
                            scope.setTags({
                                validationErrorCode
                            });
                        }
                    }
                    if ((ids == null ? void 0 : ids.length) > 0) {
                        scope.setContext("IDs", {
                            response: JSON.stringify(ids)
                        });
                    }
                    resp.name = `API Error (${statusCode}) - ${url} ${validationErrorCode}`.trim();
                    Sentry.captureException(resp);
                }
            });
        }
    },
    shouldLogAsFailedRequest: (err, url) => {
        var _a;
        if (!!(err == null ? void 0 : err.isAxiosError)) {
            const statusCode = ((_a = err == null ? void 0 : err.response) == null ? void 0 : _a.status) || parseInt((err == null ? void 0 : err.code) || "");
            return statusCode >= 500 || statusCode === 400 && !~logger.ignored400Urls.indexOf(url) || statusCode === 404 && !~logger.ignored404Urls.indexOf(url) || statusCode === 403 || statusCode === 409 || statusCode === 422;
        }
        return false;
    },
    logFileUploadError: (file, error) => {
        Sentry.withScope((scope) => {
            var _a;
            scope.setTags({
                eventType: "FileUploadError",
                fileUploadError: error.message
            });
            if (file) {
                scope.setTags({
                    fileExtension: file.extension,
                    fileSize: file.size,
                    fileUploadError: error.message
                });
                scope.setContext("File", {
                    metaName: (_a = file.meta) == null ? void 0 : _a.type,
                    name: file.name,
                    fileExtension: file.extension,
                    size: file.size,
                    type: file.type,
                    source: file.source
                });
            }
            error.name = "File upload error";
            Sentry.captureException(error);
        });
    },
    logMissingTranslationKey(lngs, ns, key) {
        Sentry.withScope((scope) => {
            scope.setTags({
                eventType: "MissingTranslationKey",
                lngs: JSON.stringify(lngs),
                namespace: ns,
                key
            });
            const error = new Error();
            error.name = `Missing Translation Key - ${key}`;
            Sentry.captureException(error);
        });
        if (process.env.NODE_ENV === "development" || document.location.host.includes(".dev.")) {
            console.error(`Missing Translation Key - ${key}`);
        }
    }
};

// src/helpers/makeTermsUrl.ts
var baseUrl = "";
var ukviUrl = "/ukvi";
var termsRoute = "/terms-and-conditions/:shortCode/:organisationCountryId/:version";
var makeTermsUrl = ({
    shortCode,
    organisationCountryId = "",
    version = "",
    isLifeSkills = false,
    withBase = false,
    isUkvi = (shortCode == null ? void 0 : shortCode.includes("UKVI")) || (shortCode == null ? void 0 : shortCode.includes("Skills")) || isLifeSkills || false
}) => {
    const fullTermsRoute = isUkvi ? ukviUrl + termsRoute : termsRoute;
    const route = withBase ? baseUrl + fullTermsRoute : fullTermsRoute;
    const url = route.replace(":shortCode", shortCode).replace(":organisationCountryId", sanitizeNumberParam(organisationCountryId)).replace(":version", sanitizeNumberParam(version)).replace("//", "/").replace(/\/$/, "");
    const searchParams = new URLSearchParams();
    isUkvi && isLifeSkills && searchParams.append("isLifeSkills", "true");
    return url + getSearchParamSuffix(searchParams);
};
var sanitizeNumberParam = (param) => {
    const toNumber = Number(param) || void 0;
    return toNumber ? String(toNumber) : "";
};

// src/helpers/preparePaymentMethods.ts
var import_luxon3 = require("luxon");
var import_ors2 = require("ors-api/ors2");

function preparePaymentMethods(allMethods, curTime, examDate, examFormat2) {
    const offlinePayment = allMethods.find((m) => !m.isOnline);
    if (!offlinePayment || !examFormat2 || !examDate) {
        return allMethods;
    }
    let offlineDeadline = import_luxon3.DateTime.fromISO(curTime);
    const date = import_luxon3.DateTime.fromISO(examDate);
    if (examFormat2 === import_ors2.ExamFormat.CD) {
        offlineDeadline = offlineDeadline.plus({
            hours: offlinePayment.offlinePaymentAvailabilityHoursForComputerDelivery
        });
    } else {
        offlineDeadline = offlineDeadline.plus({
            days: offlinePayment.offlinePaymentAvailabilityDays
        });
    }
    if (offlineDeadline >= date) {
        return allMethods.filter((m) => m.isOnline);
    }
    return allMethods;
}

// src/helpers/removeHtmlTags.ts
var import_dompurify = __toESM(require("dompurify"));
var removeHtmlTags = (html) => html ? import_dompurify.default.sanitize(html).replace(/(<([^>]+)>)/gi, "").replace(/&amp;/gi, "&") : void 0;

// src/helpers/country.ts
var countryIsoCode2 = {
    UNITED_STATES_OF_AMERICA: "US",
    UNITED_KINGDOM: "GB",
    PAKISTAN: "PK",
    HONG_KONG: "HK",
    TAIWAN: "TW",
    SPAIN: "ES",
    FRANCE: "FR",
    BELARUS_UKVI_ONLY: "XY",
    BELARUS: "BY",
    JERSEY: "JE",
    GUERNSEY: "GG",
    ISLE_OF_MAN: "IM"
};

// src/helpers/urls.ts
var iolLinks = {
    findTest: "https://takeielts.britishcouncil.org/take-ielts/book",
    iolInfo: "https://takeielts.britishcouncil.org/take-ielts/book/ielts-online",
    aiConsent: "https://takeielts.britishcouncil.org/take-ielts/book/ielts-online",
    deviceReq: "https://takeielts.britishcouncil.org/take-ielts/book/ielts-online/requirements",
    orgAcceptsIol: "https://takeielts.britishcouncil.org/ielts-recognising-organisations/recognise-ielts",
    termsConditions: "https://takeielts.britishcouncil.org/sites/default/files/ielts_online_terms_and_conditions.pdf",
    cancelPolicy: "https://takeielts.britishcouncil.org/take-ielts/book/ielts-online/cancellations-refunds",
    privacy: "https://takeielts.britishcouncil.org/take-ielts/book/ielts-online/privacy-notice",
    footer: {
        termsOfUseUrl: "https://takeielts.britishcouncil.org/terms-use",
        accessibilityUrl: "https://takeielts.britishcouncil.org/accessibility",
        privacyAndCookiesUrl: "https://takeielts.britishcouncil.org/privacy-cookies",
        dataProtectionUrl: "https://www.britishcouncil.org/privacy-cookies/data-protection"
    },
    uol: {
        termsConditions: "https://takeielts.britishcouncil.org/sites/default/files/ukvi_ielts_online_terms_and_conditions.pdf"
    }
};
var icLinks = {
    specialRequirements: "https://takeielts.britishcouncil.org/take-ielts/book/special-arrangements",
    ieltsDifference: "https://takeielts.britishcouncil.org/take-ielts/book/paper-computer",
    takeIelts: "https://takeielts.britishcouncil.org/take-ielts",
    contactUs: "https://www.britishcouncil.org/contact/local-office",
    privacy: "https://www.britishcouncil.org/privacy",
    childProtection: "https://www.britishcouncil.org/organisation/transparency/policies/child-protection",
    whichIelts: "https://takeielts.britishcouncil.org/take-ielts/which-ielts-test",
    whichUkvi: "https://takeielts.britishcouncil.org/take-ielts/which-ielts-test/ukvi",
    ukVisaTypeInfo: "https://www.gov.uk/check-uk-visa",
    aboutOsr: "https://takeielts.britishcouncil.org/take-ielts/one-skill-retake",
    organisationsAcceptOsr: "https://takeielts.britishcouncil.org/take-ielts/one-skill-retake/organisations",
    usa: {
        usaHowToRegister: "https://www.ielts.org/usa/online-registration-in-the-usa",
        contactUs: "https://go.ieltsusa.org/TestCenterNetwork"
    }
};
var generalLinks = {
    ieltsResults: "https://takeielts.britishcouncil.org/take-ielts/ielts-results-scores",
    ieltsUsaResults: "https://www.ielts.org/en-us/for-test-takers/results",
    complaintInfo: "https://www.britishcouncil.org/contact/complaints"
};

// src/helpers/personalDetails.ts
var import_luxon4 = require("luxon");
var isAdult = (dob, adultAge = 18) => Math.abs(import_luxon4.DateTime.fromISO(dob).diffNow("years").years) >= adultAge;

// src/helpers/consts.ts
var AZURE_B2C_ACCOUNT_IDP = "azureadb2c";
var AFFILIATION_PREMIUM_CODE_KEY = "AffiliationPremiumCode";

// src/helpers/productGroupSubSystem.ts
var import_mod2 = require("ors-api/mod");
var getProductGroupSubSystemId = (productFamilyId, organisationId, examOptionType) => {
    switch (examOptionType) {
        case import_mod2.ExamOptionType.LifeSkillsA1:
        case import_mod2.ExamOptionType.LifeSkillsA2:
        case import_mod2.ExamOptionType.LifeSkillsB1:
            return organisationId && organisationId > 0 ? ProductGroupSubSystemId.LifeSkillsB2COrg : ProductGroupSubSystemId.LifeSkillsB2C;
        default:
            return productFamilyId === import_mod2.ProductFamilies.UKVI ? organisationId && organisationId > 0 ? ProductGroupSubSystemId.UkviB2COrg : ProductGroupSubSystemId.UkviB2C : organisationId && organisationId > 0 ? ProductGroupSubSystemId.IeltsB2COrg : ProductGroupSubSystemId.IeltsB2C;
    }
};
var ProductGroupSubSystemId = /* @__PURE__ */ ((ProductGroupSubSystemId2) => {
    ProductGroupSubSystemId2[ProductGroupSubSystemId2["IeltsB2C"] = 4] = "IeltsB2C";
    ProductGroupSubSystemId2[ProductGroupSubSystemId2["IeltsB2COrg"] = 8] = "IeltsB2COrg";
    ProductGroupSubSystemId2[ProductGroupSubSystemId2["UkviB2C"] = 9] = "UkviB2C";
    ProductGroupSubSystemId2[ProductGroupSubSystemId2["LifeSkillsB2C"] = 12] = "LifeSkillsB2C";
    ProductGroupSubSystemId2[ProductGroupSubSystemId2["UkviB2COrg"] = 15] = "UkviB2COrg";
    ProductGroupSubSystemId2[ProductGroupSubSystemId2["LifeSkillsB2COrg"] = 16] = "LifeSkillsB2COrg";
    return ProductGroupSubSystemId2;
})(ProductGroupSubSystemId || {});

// src/helpers/sanitiseCountryIsoCode2.ts
var sanitiseCountryIsoCode2 = (isoCode2) => {
    return (isoCode2 == null ? void 0 : isoCode2.toUpperCase()) === countryIsoCode2.BELARUS_UKVI_ONLY ? countryIsoCode2.BELARUS : isoCode2;
};

// src/helpers/getDataFromProductId.ts
var import_iol2 = require("ors-api/iol");
var import_mod3 = require("ors-api/mod");
var isLifeSkillsExam = (productId) => {
    switch (productId) {
        case import_mod3.ProductsInCentre.UKVILifeSkillsA1:
        case import_mod3.ProductsInCentre.UKVILifeSkillsA2:
        case import_mod3.ProductsInCentre.UKVILifeSkillsB1:
            return true;
        default:
            return false;
    }
};
var getRegContext = (productId) => {
    switch (productId) {
        case import_mod3.ProductsInCentre.UKVILifeSkillsA1:
        case import_mod3.ProductsInCentre.UKVILifeSkillsA2:
        case import_mod3.ProductsInCentre.UKVILifeSkillsB1:
        case import_mod3.ProductsInCentre.UKVIAcademicComputerDelivered:
        case import_mod3.ProductsInCentre.UKVIAcademicPaperBase:
        case import_mod3.ProductsInCentre.UKVIGeneralTrainingComputerDelivered:
        case import_mod3.ProductsInCentre.UKVIGeneralTrainingPaperBase:
        case import_mod3.ProductsInCentre.UKVIOsrAcademicComputerDelivered:
        case import_mod3.ProductsInCentre.UKVIOsrGeneralTrainingComputerDelivered:
            return "ukvi";
        case import_mod3.ProductsInCentre.IELTSAcademicComputerDelivered:
        case import_mod3.ProductsInCentre.IELTSAcademicPaperBase:
        case import_mod3.ProductsInCentre.IELTSGeneralTrainingComputerDelivered:
        case import_mod3.ProductsInCentre.IELTSGeneralTrainingPaperBase:
        case import_mod3.ProductsInCentre.IELTSOsrAcademicComputerDelivered:
        case import_mod3.ProductsInCentre.IELTSOsrGeneralTrainingComputerDelivered:
            return "ors";
        case import_iol2.IELTSProducts.OnlineAC:
        case import_iol2.IELTSProducts.OnlineGT:
        case import_iol2.IELTSProducts.UkviOnlineAC:
        case import_iol2.IELTSProducts.UkviOnlineGT:
            return "iol";
        default:
            return "ors";
    }
};
var checkIfProductIdMatchRegContext = ({
    productId,
    context
}) => {
    return getRegContext(productId) === context;
};
var getExamDetailsFromProductId = (productId) => {
    switch (productId) {
        case import_mod3.ProductsInCentre.UKVIAcademicComputerDelivered:
        case import_mod3.ProductsInCentre.IELTSOsrAcademicComputerDelivered:
        case import_mod3.ProductsInCentre.IELTSAcademicComputerDelivered:
            return {
                examFormat: "CD",
                examType: "AC"
            };
        case import_mod3.ProductsInCentre.UKVIAcademicPaperBase:
        case import_mod3.ProductsInCentre.IELTSAcademicPaperBase:
            return {
                examFormat: "PB",
                examType: "AC"
            };
        case import_mod3.ProductsInCentre.UKVIGeneralTrainingComputerDelivered:
        case import_mod3.ProductsInCentre.IELTSOsrGeneralTrainingComputerDelivered:
        case import_mod3.ProductsInCentre.IELTSGeneralTrainingComputerDelivered:
            return {
                examFormat: "CD",
                examType: "GT"
            };
        case import_mod3.ProductsInCentre.UKVIGeneralTrainingPaperBase:
        case import_mod3.ProductsInCentre.IELTSGeneralTrainingPaperBase:
            return {
                examFormat: "PB",
                examType: "GT"
            };
        case import_mod3.ProductsInCentre.UKVILifeSkillsA1:
            return {
                examFormat: "LFSKA1",
                examType: ""
            };
        case import_mod3.ProductsInCentre.UKVILifeSkillsA2:
            return {
                examFormat: "LFSKA2",
                examType: ""
            };
        case import_mod3.ProductsInCentre.UKVILifeSkillsB1:
            return {
                examFormat: "LFSKB1",
                examType: ""
            };
        case import_iol2.IELTSProducts.UkviOnlineAC:
        case import_iol2.IELTSProducts.OnlineAC:
            return {
                examFormat: "IOL",
                examType: "AC"
            };
        case import_iol2.IELTSProducts.OnlineGT:
        case import_iol2.IELTSProducts.UkviOnlineGT:
            return {
                examFormat: "IOL",
                examType: "GT"
            };
        default:
            return {
                examFormat: "",
                examType: ""
            };
    }
};

// src/helpers/groupVenueExams.ts
var groupVenueExams = (availableExams, hideVenues) => {
    if (!availableExams || availableExams.length === 0)
        return [];
    if (hideVenues)
        return [availableExams];
    const exam = [];
    let venueGroup = [];
    let prevousVenueId = availableExams[0].venueId;
    for (const districtExam of availableExams) {
        if (districtExam.venueId !== prevousVenueId) {
            exam.push(venueGroup);
            venueGroup = [];
            prevousVenueId = districtExam.venueId;
        }
        venueGroup.push(districtExam);
    }
    exam.push(venueGroup);
    return exam;
};

// src/helpers/terms.ts
var TermsShortCodeEnum = /* @__PURE__ */ ((TermsShortCodeEnum2) => {
    TermsShortCodeEnum2["Global_IELTS_Account_Registration"] = "Global_IELTS_Account_Registration";
    TermsShortCodeEnum2["Global_IELTS_CD"] = "Global_IELTS_CD";
    TermsShortCodeEnum2["Global_IELTS"] = "Global_IELTS";
    TermsShortCodeEnum2["Global_EoR"] = "Global_EoR";
    TermsShortCodeEnum2["Global_UKVI"] = "Global_UKVI";
    TermsShortCodeEnum2["Global_IELTS_UKVI_PB"] = "Global_IELTS_UKVI_PB";
    TermsShortCodeEnum2["Global_IELTS_UKVI_CD"] = "Global_IELTS_UKVI_CD";
    TermsShortCodeEnum2["Global_IELTS_UKVI_LifeSkills"] = "Global_IELTS_UKVI_LifeSkills";
    TermsShortCodeEnum2["Global_IELTS_Cancellation_Policy"] = "Global_IELTS_Cancellation_Policy";
    TermsShortCodeEnum2["Global_IELTS_Cancellation_Policy_CD"] = "Global_IELTS_Cancellation_Policy_CD";
    TermsShortCodeEnum2["Global_IELTS_UKVI_Cancellation_Policy_CD"] = "Global_IELTS_UKVI_Cancellation_Policy_CD";
    TermsShortCodeEnum2["Global_IELTS_UKVI_Cancellation_Policy_PB"] = "Global_IELTS_UKVI_Cancellation_Policy_PB";
    TermsShortCodeEnum2["Global_IELTS_UKVI_Cancellation_Policy_LifeSkills"] = "Global_IELTS_UKVI_Cancellation_Policy_LifeSkills";
    TermsShortCodeEnum2["GLOBAL_IELTS_CD_OSR"] = "GLOBAL_IELTS_CD_OSR";
    TermsShortCodeEnum2["Global_IELTS_UKVI_CD_OSR"] = "Global_IELTS_UKVI_CD_OSR";
    TermsShortCodeEnum2["IELTS_USA_ACCOUNT_TCS"] = "IELTS_USA_ACCOUNT_TCS";
    return TermsShortCodeEnum2;
})(TermsShortCodeEnum || {});

// src/helpers/idDetails.ts
var E_VISA_PREFIX = "eVISA-";
var E_VISA_ID = 16;
var getIdNumber = (idTypeId, idNumber) => {
    if (idTypeId == E_VISA_ID && idNumber && !idNumber.startsWith(E_VISA_PREFIX)) {
        return E_VISA_PREFIX + idNumber;
    }
    return idNumber != null ? idNumber : "";
};

// src/hooks/useUppy.ts
var useUppy = (uploadConfig, enabled = true, trigger = false, initFiles = void 0) => {
    const uppyId = "proofOfEvidence";
    const {
        t
    } = (0, import_react_i18next.useTranslation)();
    const [loading, setLoading] = (0, import_react.useState)(false);
    const [error, setError] = (0, import_react.useState)(false);
    const {
        allowedFileTypes,
        maxFileSize,
        maxNumberOfFiles,
        minNumberOfFiles
    } = __spreadValues(__spreadValues({}, defUploadConfig), uploadConfig);
    const refs = (0, import_react.useMemo)(() => Array.apply(null, Array(maxNumberOfFiles)).map(() => (0, import_react.createRef)()), [maxNumberOfFiles]);
    const uppy = (0, import_react.useMemo)(() => (0, import_core.default)({
        id: uppyId,
        autoProceed: false,
        allowMultipleUploads: Number(maxNumberOfFiles) > 1 ? true : false,
        restrictions: {
            maxFileSize,
            allowedFileTypes,
            minNumberOfFiles,
            maxNumberOfFiles
        },
        locale: {
            strings: {
                youCanOnlyUploadFileTypes: t("APPB2C.common.fileUpload.requirements") + " " + (allowedFileTypes == null ? void 0 : allowedFileTypes.join(", ").replace(/\./g, "").toUpperCase()),
                exceedsSize: t("APPB2C.common.fileUpload.exceededSize")
            }
        }
    }), [allowedFileTypes, maxFileSize, maxNumberOfFiles, minNumberOfFiles]);
    (0, import_react.useEffect)(() => {
        if (!enabled || !initFiles || !initFiles.length) {
            return;
        }
        const fetchFile = (docFile, i) => {
            const uppyFiles = uppy.getFiles();
            const source = `file${i}`;
            if (uppyFiles.length < Number(maxNumberOfFiles) && docFile.url) {
                setLoading(true);
                setError(false);
                fetch(docFile.url).then((response) => response.blob()).then((blob) => {
                    const fileName = `${source}.${blob.type.split("/")[1]}`;
                    const fileExist = uppyFiles.find((f) => f.name === fileName);
                    !fileExist && uppy.addFile({
                        id: source,
                        name: fileName,
                        type: blob.type,
                        data: blob,
                        source,
                        meta: {
                            reusedFile: true,
                            candidateDocumentId: docFile.id,
                            isApproved: docFile.status === "approved"
                        }
                    });
                    setLoading(false);
                }).catch((e) => {
                    setLoading(false);
                    setError(true);
                });
            }
        };
        initFiles.forEach((file, i) => fetchFile(file, i + 1));
    }, [initFiles, uppy, enabled, maxNumberOfFiles]);
    (0, import_react.useEffect)(() => {
        if (!enabled) {
            return;
        }
        const mountFilePreviews = () => {
            for (let i = 1; i <= Number(maxNumberOfFiles); i++) {
                const ref = refs[i - 1];
                if (uppy.getPlugin(`file${i}`) === null) {
                    uppy.use(import_file_input.default, {
                        id: `file${i}`,
                        target: ref.current,
                        locale: {
                            strings: {
                                chooseFiles: t("APPB2C.common.fileUpload.cta")
                            }
                        }
                    });
                }
                if (uppy.getPlugin(`file${i}-preview`) === null) {
                    uppy.use(import_thumbnail_generator.default, {
                        id: `file${i}-preview`,
                        thumbnailWidth: 400,
                        waitForThumbnailsBeforeUpload: false
                    });
                }
            }
        };
        mountFilePreviews();
    }, [enabled, maxNumberOfFiles, uppy]);
    (0, import_react_common2.useDebouncedEffect)(() => {
        if (!enabled) {
            return;
        }
        const mountUploadButtons = () => {
            for (let i = 1; i <= Number(maxNumberOfFiles); i++) {
                const ref = refs[i - 1];
                const refCurr = ref.current;
                refCurr && !refCurr.hasChildNodes() && uppy.getPlugin(`file${i}`).mount(refCurr, import_file_input.default);
            }
        };
        mountUploadButtons();
    }, 500, [enabled, trigger]);
    (0, import_react.useEffect)(() => {
        if (!enabled) {
            return;
        }
        uppy.on("restriction-failed", (file, error2) => {
            logger.logFileUploadError(file, error2);
        });
    }, [enabled, uppy]);
    return [uppy, refs, loading, error];
};

// src/settings/loadAppSettings.ts
var import_luxon5 = require("luxon");
var import_react_common3 = require("@britishcouncil/react-common");
var APPSETTINGS_VERSION = 2;
var APPSETTINGS_SS_KEY = "APPSETTINGS_DATA";
var APPSETTINGS_EXPIRATION_TIME = 600;
var loadAppSettings = async (filename, subdirectory) => {
    const storedSettings = import_react_common3.SS.read(APPSETTINGS_SS_KEY, {
        timestamp: "",
        app: "",
        value: void 0
    });
    const {
        version,
        app,
        value
    } = storedSettings;
    const timestamp = import_luxon5.DateTime.fromISO(storedSettings.timestamp);
    const diff = import_luxon5.DateTime.now().diff(timestamp, "seconds").seconds;
    const notExpired = version === APPSETTINGS_VERSION && diff < APPSETTINGS_EXPIRATION_TIME && !!value && app === subdirectory;
    let json;
    if (notExpired) {
        json = value;
    } else {
        const response = await fetch(filename);
        json = await response.json();
        import_react_common3.SS.write(APPSETTINGS_SS_KEY, {
            version: APPSETTINGS_VERSION,
            timestamp: import_luxon5.DateTime.now().toISO(),
            app: subdirectory,
            value: json
        });
    }
    return json;
};

// src/settings/appSettings.ts
var appSettings = async (appConfig, initSentry, appEnv) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const env = appEnv || process.env.REACT_APP_ENV;
    const appSettingsEnv = env ? env === "local" || env === "mock" ? env : "tenant" : "";
    const appSettings2 = await loadAppSettings(appConfig.subdirectory + "/appsettings" + (appSettingsEnv ? "." + appSettingsEnv : "") + ".json", appConfig.subdirectory);
    const config = {
        gtmCode: "GTM-BBLG",
        appVersion: appSettings2.appVersion,
        sentryEnvironment: appSettings2.sentryEnvironment,
        environment: appSettings2.environment,
        instrumentationKey: appSettings2.instrumentationKey,
        ieltsUsaUrl: appSettings2.ieltsUsaUrl,
        sentryUri: appSettings2.sentryUri,
        userManager: appSettings2.userManager,
        liveAgentChat: appSettings2.liveAgentChat,
        ApplyBoardWidget: appSettings2.ApplyBoardWidget,
        Wootric: appSettings2.Wootric,
        googleReCaptcha: appSettings2.googleReCaptcha,
        Crowdin: appSettings2.Crowdin,
        supportedLanguages: appSettings2.supportedLanguages
    };
    if (config.appVersion.indexOf("#") === 0) {
        config.appVersion = "0.0.0";
    }
    if (((_a = config.sentryEnvironment) == null ? void 0 : _a.indexOf("#")) === 0) {
        config.sentryEnvironment = "development";
    }
    if (((_b = config.sentryUri) == null ? void 0 : _b.indexOf("#")) === 0) {
        config.sentryUri = null;
    }
    if (((_c = config.ieltsUsaUrl) == null ? void 0 : _c.indexOf("#{tenant}#")) > 0 && env) {
        config.ieltsUsaUrl = config.ieltsUsaUrl.replace("#{tenant}#", env);
    }
    if (((_d = config.userManager.authority) == null ? void 0 : _d.indexOf("#{tenant}#")) > 0 && env) {
        config.userManager.authority = config.userManager.authority.replace("#{tenant}#", env);
    }
    if (((_e = config.userManager.authority) == null ? void 0 : _e.indexOf("#")) === 0) {
        config.userManager.authority = "http://localhost/idp";
        config.userManager.redirect_uri = `http://localhost/callback`;
        config.userManager.post_logout_redirect_uri = `http://localhost`;
        config.userManager.silent_redirect_uri = `http://localhost/silent-redirect.html`;
    }
    if (((_f = config.liveAgentChat.buttonId) == null ? void 0 : _f.indexOf("#")) === 0) {
        config.liveAgentChat.buttonId = "";
        config.liveAgentChat.deploymentId = "";
        config.liveAgentChat.instanceId = "";
        config.liveAgentChat.organizationId = "";
        config.liveAgentChat.salesforceURL = "";
        config.liveAgentChat.surveysUrl = "";
        config.liveAgentChat.devName = "";
    }
    if (((_g = config.ApplyBoardWidget.js) == null ? void 0 : _g.indexOf("#")) === 0) {
        config.ApplyBoardWidget.js = "";
        config.ApplyBoardWidget.css = "";
    }
    if (((_h = config.Wootric.account_token) == null ? void 0 : _h.indexOf("#")) === 0) {
        config.Wootric.account_token = "";
    }
    if (((_i = config.googleReCaptcha.siteKey) == null ? void 0 : _i.indexOf("#")) === 0) {
        config.googleReCaptcha.siteKey = "";
    }
    if (((_j = config.Crowdin.project) == null ? void 0 : _j.indexOf("#")) === 0) {
        config.Crowdin.project = "";
    }
    if (((_k = config.supportedLanguages) == null ? void 0 : _k.indexOf("#")) === 0) {
        config.supportedLanguages = "";
    }
    window.version = config.appVersion;
    initSentry(config);
    return config;
};

// src/formatters/index.tsx
var formatSurname = (surname) => surname !== "-" ? surname : "";
var formatCityPostCode = (city, postCode) => [city, postCode].filter(Boolean).join(", ");

// src/converters/index.ts
var import_ors22 = require("ors-api/ors2");
var import_mod4 = require("ors-api/mod");
var import_iol3 = require("ors-api/iol");
var F2F_NAME = "Face to face";
var VCS_NAME = "Video call at the test centre";
var speakingFormat = {
    fromSpeakingFormat: (val) => ({
        toCode: () => {
            if (val === import_ors22.SpeakingFormat.Remote)
                return "vcs";
            if (val === import_ors22.SpeakingFormat.Live)
                return "f2f";
            return null;
        },
        toGtmCode: () => {
            if (val === import_ors22.SpeakingFormat.Remote)
                return "vcs";
            if (val === import_ors22.SpeakingFormat.Live)
                return "face2face";
        },
        toName: () => {
            if (val === import_ors22.SpeakingFormat.Remote)
                return VCS_NAME;
            if (val === import_ors22.SpeakingFormat.Live)
                return F2F_NAME;
        },
        toNewEnum: () => {
            if (val === import_ors22.SpeakingFormat.Remote)
                return import_mod4.SpeakingFormat2.VideoCall;
            if (val === import_ors22.SpeakingFormat.Live)
                return import_mod4.SpeakingFormat2.InPerson;
        }
    }),
    fromSpeakingFormatCode: (val) => ({
        toEnum: () => {
            if (val === null || val === void 0) {
                return null;
            }
            const lowerVal = val.toLowerCase();
            if (lowerVal === "vcs")
                return import_ors22.SpeakingFormat.Remote;
            if (lowerVal === "f2f" || lowerVal === "face2face")
                return import_ors22.SpeakingFormat.Live;
            return null;
        }
    })
};
var ieltsModule = {
    fromIeltsModule: (val) => ({
        toCode: () => {
            if (val === import_mod4.BatchIeltsModule.Academic || val === import_ors22.IeltsModule.AC)
                return "ac";
            if (val === import_mod4.BatchIeltsModule.GeneralTraining || val === import_ors22.IeltsModule.GT)
                return "gt";
            return null;
        },
        toName: () => {
            if (val === import_mod4.BatchIeltsModule.Academic || val === import_ors22.IeltsModule.AC)
                return "Academic";
            if (val === import_mod4.BatchIeltsModule.GeneralTraining || val === import_ors22.IeltsModule.GT)
                return "General Training";
            return null;
        }
    }),
    fromExamTypeCode: (val) => ({
        toIeltsModuleEnum: () => {
            if (val === null || val === void 0) {
                return null;
            }
            const lowerVal = val.toLowerCase();
            if (lowerVal === "ac")
                return import_ors22.IeltsModule.AC;
            if (lowerVal === "gt")
                return import_ors22.IeltsModule.GT;
            return null;
        },
        toIeltsProductsEnum: (flow) => {
            if (val === null || val === void 0 || flow === "ors") {
                return null;
            }
            const lowerVal = val.toLowerCase();
            if (lowerVal === "ac")
                return flow === "iol" ? import_iol3.IELTSProducts.OnlineAC : import_iol3.IELTSProducts.UkviOnlineAC;
            if (lowerVal === "gt")
                return flow === "iol" ? import_iol3.IELTSProducts.OnlineGT : import_iol3.IELTSProducts.UkviOnlineGT;
            return null;
        }
    })
};
var examFormat = {
    fromExamFormat: (val) => ({
        toCode: () => {
            if (val === import_ors22.ExamFormat.CD)
                return "cd";
            if (val === import_ors22.ExamFormat.PB)
                return "pb";
            return null;
        }
    }),
    fromBatchExamFormat: (val) => ({
        toEnum: () => {
            if (val === import_mod4.BatchExamFormat.ComputerDelivered)
                return import_ors22.ExamFormat.CD;
            if (val === import_mod4.BatchExamFormat.PaperBased)
                return import_ors22.ExamFormat.PB;
        }
    })
};
var timeTableSession = {
    fromTimeTableSessionCode: (val) => ({
        toCode: () => {
            if (!val) {
                return null;
            }
            switch (val.toLowerCase()) {
                case "a":
                    return "AM";
                case "b":
                case "p":
                    return "PM";
                case "e":
                    return "Evening";
                default:
                    return "AllDay";
            }
        },
        toEnum: () => {
            if (!val) {
                return null;
            }
            switch (val.toLowerCase()) {
                case "a":
                    return import_ors22.TimeTableSession.A;
                case "b":
                case "p":
                    return import_ors22.TimeTableSession.P;
                case "e":
                    return import_ors22.TimeTableSession.E;
                default:
                    return import_ors22.TimeTableSession.D;
            }
        }
    })
};
var properUtcDate = {
    fromUncertainUtcDate: (val) => ({
        toProperUtcDate: () => {
            if (!val) {
                return void 0;
            }
            return val.includes("Z") ? val : val + "Z";
        }
    })
};
var converters = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, speakingFormat), ieltsModule), examFormat), timeTableSession), properUtcDate);

// src/cookie/cookieManager.ts
function getCookie(name) {
    const nameLenPlus = name.length + 1;
    return document.cookie.split(";").map((c) => c.trim()).filter((cookie) => cookie.substring(0, nameLenPlus) === name + "=").map((cookie) => decodeURIComponent(cookie.substring(nameLenPlus))).pop();
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

function eraseCookie(name) {
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
var CookieManager = {
    getCookie,
    setCookie,
    eraseCookie
};

// src/gtm/sharedGtmEvents.ts
var import_react_common4 = require("@britishcouncil/react-common");
var getGA4PurchaseEvent = (event) => {
    var _a, _b, _c, _d, _e, _f;
    const {
        productId,
        examType,
        examFormat: examFormat2
    } = event;
    return {
        transaction_id: event.refNumber,
        value: (_a = event.testPrice) != null ? _a : 0,
        currency: event.currency,
        tax: (_b = event.taxPrice) != null ? _b : 0,
        items: [{
            item_name: getProdName(event),
            item_id: "ORS",
            price: (_c = event.testPrice) != null ? _c : 0,
            item_brand: "IELTS",
            item_category: productId ? getExamDetailsFromProductId(productId).examType : (_d = examType == null ? void 0 : examType.toUpperCase()) != null ? _d : "",
            item_variant: productId ? getExamDetailsFromProductId(productId).examFormat : ((_e = converters.fromExamFormat(examFormat2).toCode()) != null ? _e : "").toUpperCase(),
            quantity: 1,
            coupon: (_f = event.coupon) != null ? _f : ""
        }]
    };
};

function getProdName(event) {
    var _a;
    const countryGtm = import_react_common4.SimpleLS.read("GTM_COUNTRY_DETAILS");
    const c = (countryGtm == null ? void 0 : countryGtm.name) || event.centreName || "";
    const type = (_a = examTypeDescription(event.productId)) != null ? _a : "IELTS";
    return `${type}-${c}-${event.location}`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AFFILIATION_PREMIUM_CODE_KEY,
    AZURE_B2C_ACCOUNT_IDP,
    CookieManager,
    E_VISA_ID,
    E_VISA_PREFIX,
    F2F_NAME,
    ORGANISATION_ALIAS,
    ProductGroupSubSystemId,
    TermsShortCodeEnum,
    VCS_NAME,
    appSettings,
    checkIfProductIdMatchRegContext,
    converters,
    countryIsoCode2,
    defUploadConfig,
    downloadFile,
    examTypeDescription,
    examTypeDictionary,
    formatCityPostCode,
    formatSurname,
    generalLinks,
    getArrivalTime,
    getCtxFromProductId,
    getDraftProcessReturnUrl,
    getDraftProcessUrl,
    getExamDetailsFromProductId,
    getGA4PurchaseEvent,
    getIdNumber,
    getOrganisationAlias,
    getProductGroupSubSystemId,
    getRegContext,
    getSearchParamSuffix,
    groupVenueExams,
    hasOrganisationInUrl,
    icLinks,
    includesInUrl,
    iolLinks,
    isAdult,
    isInCentre,
    isLifeSkillsExam,
    localeFns,
    logger,
    makeTermsUrl,
    preparePaymentMethods,
    removeHtmlTags,
    sanitiseCountryIsoCode2,
    storeOrganisationAliasInLS,
    useUppy
});