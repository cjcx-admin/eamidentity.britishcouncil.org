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
var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
        if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
            target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(source)) {
            if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
                target[prop] = source[prop];
        }
    return target;
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
    Acknowledgements: () => Acknowledgements,
    AddressFormFields: () => AddressFormFields,
    AnimatedButton: () => AnimatedButton,
    AnswerInvalid: () => AnswerInvalid,
    ApiErrorPage: () => ApiErrorPage,
    ApiErrorsAlert: () => ApiErrorsAlert,
    ApplyBoardWidget: () => ApplyBoardWidget,
    ArrivalTime: () => ArrivalTime,
    BcSelect: () => BcSelect,
    CalendarCrossedIcon: () => CalendarCrossedIcon,
    CalendarIcon: () => CalendarIcon,
    CandidateMarketingPreferences: () => CandidateMarketingPreferences,
    CandidateMarketingPreferencesDefault: () => CandidateMarketingPreferencesDefault,
    CandidateMarketingPreferencesEnum: () => CandidateMarketingPreferencesEnum,
    CentreContactInfo: () => CentreContactInfo,
    ChangeHeading: () => ChangeHeading,
    ChangePassword: () => ChangePassword,
    ChildAfterTest: () => ChildAfterTest,
    ChildConsent: () => ChildConsent,
    CrowdinContext: () => CrowdinContext,
    CustomCalendar: () => CustomCalendar,
    DateField: () => DateField,
    Desc: () => Desc,
    Divider: () => Divider5,
    DropdownIcon: () => DropdownIcon,
    EnabledOption: () => EnabledOption,
    ErrorPage: () => ErrorPage,
    ExamDateTime: () => ExamDateTime,
    ExamFormat: () => import_ors24.ExamFormat,
    ExamFormatIcon: () => ExamFormatIcon,
    ExamTypeText: () => ExamTypeText,
    ExpiryDate: () => ExpiryDate,
    ExtendedApiError: () => ExtendedApiError,
    ExternalLink: () => ExternalLink,
    Footer: () => Footer,
    FormattedPrice: () => FormattedPrice,
    Header: () => Header,
    HtmlTextRaw: () => HtmlTextRaw,
    InvoiceConsents: () => InvoiceConsents,
    InvoiceSubtypes: () => InvoiceSubtypes,
    InvoiceTypes: () => InvoiceTypes,
    IolDetailsCard: () => IolDetailsCard,
    LabeledFormattedPrice: () => LabeledFormattedPrice,
    LanguageSwitcher: () => LanguageSwitcher,
    LinkButton: () => LinkButton5,
    LoadingCard: () => LoadingCard,
    MapLink: () => MapLink,
    MarketingPreferences: () => MarketingPreferences,
    MissingDataModal: () => MissingDataModal,
    MobileField: () => MobileField,
    Modal: () => Modal,
    NearEndMsg: () => NearEndMsg,
    NewPasswordField: () => NewPasswordField,
    NewTermsAccount: () => NewTermsAccount,
    NewTermsModal: () => NewTermsModal,
    NotLinkedVenueNote: () => NotLinkedVenueNote,
    Notification: () => Notification,
    OrderAcknowledgement: () => OrderAcknowledgement,
    PageErrors: () => PageErrors,
    PageHeading: () => PageHeading,
    RetakeBadge: () => RetakeBadge,
    SearchAndSelect: () => SearchAndSelect,
    SectionHeader: () => SectionHeader,
    SelectField: () => SelectField,
    SpeakingFormat: () => import_ors23.SpeakingFormat,
    SpeakingFormatIcon: () => SpeakingFormatIcon,
    SpeakingIcon: () => SpeakingIcon,
    SpeakingSlotSelector: () => SpeakingSlotSelector,
    SpeakingSlots: () => SpeakingSlots,
    TermsAndConditionsNotes: () => TermsAndConditionsNotes,
    TestCard: () => TestCard,
    TestCardContent: () => TestCardContent,
    TestDateTimeContainer: () => TestDateTimeContainer,
    TestDetailsCard: () => TestDetailsCard,
    TimeSeparator: () => TimeSeparator,
    TimesUpModal: () => TimesUpModal,
    Tooltip: () => Tooltip,
    UploadIdProofInstruction: () => UploadIdProofInstruction,
    UploadIdProofOCRGuidance: () => UploadIdProofOCRGuidance,
    ValError: () => ValError,
    ValidatedButton: () => ValidatedButton,
    VenueSearchResultsWrapper: () => VenueSearchResultsWrapper,
    VenueTitle: () => VenueTitle,
    WideReadOnlyField: () => WideReadOnlyField,
    WootricSurvey: () => WootricSurvey,
    ackFormInitValue: () => ackFormInitValue,
    acknowledgement: () => acknowledgement,
    apieErrorConverters: () => apieErrorConverters,
    breakpoints: () => breakpoints,
    changePasswordErrorCodes: () => changePasswordErrorCodes,
    commonErrorCodes: () => commonErrorCodes,
    commonErrorProps: () => commonErrorProps,
    commonMaxLengths: () => commonMaxLengths,
    contactDetails: () => contactDetails,
    errors: () => errors,
    extractApiErrors: () => extractApiErrors,
    formSchema: () => formSchema2,
    getChildConsentFormSchema: () => getChildConsentFormSchema,
    getChildConsentInitialValues: () => getChildConsentInitialValues,
    getCommonPayerModel: () => getCommonPayerModel,
    getEorPayerModel: () => getEorPayerModel,
    getHowPaid: () => getHowPaid,
    getInitialValues: () => getInitialValues,
    getLocalizedCountries: () => getLocalizedCountries,
    getMobileNumberCountry: () => getMobileNumberCountry,
    getOsrPayerInformation: () => getOsrPayerInformation,
    getOsrPayerModel: () => getOsrPayerModel,
    getPayerDetailsUkvi: () => getPayerDetailsUkvi,
    getPayerModel: () => getPayerModel,
    getPayerOption: () => getPayerOption,
    getReceiver: () => getReceiver,
    getValidatedMobileNumber: () => getValidatedMobileNumber,
    getWootricFormatDate: () => getWootricFormatDate,
    initApiData: () => initApiData,
    invoiceConsent: () => invoiceConsent,
    marketingPrefsValidation: () => marketingPrefsValidation,
    mobileNumberValidation: () => mobileNumberValidation,
    preparePickups: () => preparePickups,
    reduceMultipleErrorSources: () => reduceMultipleErrorSources,
    selectedCountryLanguageSettings: () => selectedCountryLanguageSettings,
    useActiveCountryLanguageSettings: () => useActiveCountryLanguageSettings,
    validationRulesI18n: () => validationRulesI18n
});
module.exports = __toCommonJS(src_exports);

// src/core/models.ts
var initApiData = {
    isLoading: false
};

// src/components/addressAutocomplete/index.tsx
var import_react2 = __toESM(require("react"));
var import_react_common = require("@britishcouncil/react-common");
var import_react_solas_ors3 = require("@britishcouncil/react-solas-ors3");
var import_styled2 = __toESM(require("@emotion/styled"));
var import_ors_translations = require("ors-translations");
var import_ors2 = require("ors-api/ors2");

// src/components/addressAutocomplete/SuggestionsList.tsx
var import_react = __toESM(require("react"));
var import_styled = __toESM(require("@emotion/styled"));
var SuggestionsList = ({
    suggestions,
    handleSelect,
    setShowList,
    manualOption = "Enter address manually"
}) => /* @__PURE__ */ import_react.default.createElement(List, null, /* @__PURE__ */ import_react.default.createElement("li", {
    className: "form-control",
    onClick: () => setShowList(false)
}, /* @__PURE__ */ import_react.default.createElement("i", null, manualOption)), suggestions.map((s, index) => /* @__PURE__ */ import_react.default.createElement("li", {
    className: "form-control",
    key: index,
    onClick: () => handleSelect(s)
}, s.freeformAddress)));
var List = import_styled.default.ul `
  position: absolute;
  z-index: 2;
  width: 100%;
  top: 76px;
  margin: 0;
  border: 1px solid #b3b3b3;
  li {
    margin: 0;
    border: none;
    border-radius: 0;
    cursor: pointer;
    &:hover {
      background: #ecf5ff;
    }
  }
`;

// src/components/addressAutocomplete/index.tsx
var AddressFormFields = ({
    isoCode,
    isAutoFillAddressEnabled,
    fields,
    showStateField = false,
    labels,
    testIds,
    spellingSubnote
}) => {
    const [suggestions, setSuggestions] = (0, import_react2.useState)();
    const [showList, setShowList] = (0, import_react2.useState)(false);
    const isIeltsUsa = (0, import_ors_translations.hasIeltsUsaUrl)();
    const query = fields.addressLine1.value;
    (0, import_react_common.useDebouncedEffect)(() => {
        async function fetchData() {
            if (isoCode && query && isAutoFillAddressEnabled) {
                try {
                    const response = await import_ors2.addressClient.findAddressInCountry(isoCode, query);
                    setSuggestions(response.data);
                } catch (e) {}
            }
        }
        fetchData();
    }, 300, [isoCode, query, isAutoFillAddressEnabled]);
    const handleSelect = (0, import_react2.useCallback)((selected) => {
        var _a, _b, _c, _d, _e;
        setShowList(false);
        fields.addressLine1.onChange(selected.streetNameAndNumber || ((_a = selected.freeformAddress) == null ? void 0 : _a.split(",")[0]) || "");
        fields.addressLine2.onChange((_b = selected.countrySecondarySubdivision) != null ? _b : "");
        fields.addressLine3.onChange(isIeltsUsa ? "" : selected.countrySubdivisionName || selected.countrySubdivision || "");
        isIeltsUsa && fields.state.onChange((_c = selected.countrySubdivisionName) != null ? _c : "");
        fields.town.onChange((_d = selected.municipality) != null ? _d : "");
        fields.postcode.onChange((_e = selected.postalCode) != null ? _e : "");
    }, [fields, isIeltsUsa]);
    return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(Address, {
        className: "address-more"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
        "data-testid": "address-autocomplete-field"
    }, /* @__PURE__ */ import_react2.default.createElement(import_react_solas_ors3.TextField, __spreadProps(__spreadValues({
        label: labels.postalLines,
        "data-testid": testIds == null ? void 0 : testIds.addressLine1
    }, fields.addressLine1), {
        onFocus: () => setShowList(true),
        onBlur: () => {
            fields.addressLine1.onBlur();
            setTimeout(() => setShowList(false), 100);
        },
        subnote: spellingSubnote == null ? void 0 : spellingSubnote.address
    })), showList && suggestions && suggestions.length > 0 && /* @__PURE__ */ import_react2.default.createElement(SuggestionsList, {
        suggestions,
        handleSelect,
        setShowList,
        manualOption: labels.manualOption
    })), /* @__PURE__ */ import_react2.default.createElement(import_react_solas_ors3.TextField, __spreadValues({
        "data-testid": testIds == null ? void 0 : testIds.addressLine2
    }, fields.addressLine2)), /* @__PURE__ */ import_react2.default.createElement(import_react_solas_ors3.TextField, __spreadValues({
        "data-testid": testIds == null ? void 0 : testIds.addressLine3
    }, fields.addressLine3))), /* @__PURE__ */ import_react2.default.createElement(import_react_solas_ors3.TextField, __spreadValues({
        label: labels.town,
        "data-testid": testIds == null ? void 0 : testIds.town,
        subnote: spellingSubnote == null ? void 0 : spellingSubnote.city
    }, fields.town)), showStateField && /* @__PURE__ */ import_react2.default.createElement(import_react_solas_ors3.TextField, __spreadValues({
        label: labels.state,
        "data-testid": testIds == null ? void 0 : testIds.state
    }, fields.state)), /* @__PURE__ */ import_react2.default.createElement(import_react_solas_ors3.TextField, __spreadValues({
        label: labels.zip,
        "data-testid": testIds == null ? void 0 : testIds.zip
    }, fields.postcode)));
};
var Address = import_styled2.default.div `
  position: relative;
  @media (min-width: 850px) {
    .form-group {
      margin-bottom: 15px;
    }
  }
`;

// src/components/AnimatedButton.tsx
var import_react3 = __toESM(require("react"));
var import_styled3 = __toESM(require("@emotion/styled"));
var import_bs = require("react-icons/bs");
var AnimatedButton = (_a) => {
    var _b = _a,
        {
            icon,
            title,
            description,
            onClick,
            disabled = false
        } = _b,
        props = __objRest(_b, [
            "icon",
            "title",
            "description",
            "onClick",
            "disabled"
        ]);
    return /* @__PURE__ */ import_react3.default.createElement(StyledBtn, __spreadProps(__spreadValues({}, props), {
        onClick: disabled ? () => null : onClick,
        disabled
    }), /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "content"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "icon"
    }, icon), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "title notranslate"
    }, /* @__PURE__ */ import_react3.default.createElement("b", null, title)), description)), /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "arrow-button"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
        className: "arrow"
    }, /* @__PURE__ */ import_react3.default.createElement(import_bs.BsChevronRight, null))));
};
var StyledBtn = import_styled3.default.button `
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  pointer-events: ${({ disabled }) => disabled ? "none" : "auto"};
  opacity: ${({ disabled }) => disabled ? 0.5 : "unset"};
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  border: none;
  text-align: left;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;
  margin: 24px 0;

  [dir='rtl'] & {
    text-align: right;
  }

  .content {
    width: 100%;
    display: flex;
    margin: 24px;
    color: #3b4244;
    flex-direction: row;

    .icon {
      height: auto;
      margin-right: 24px;
      align-self: center;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 24px;
      }

      > svg {
        max-width: 56px;
        transition: transform 0.3s ease-in-out;
      }
    }

    @media screen and (max-width: 568px) {
      flex-direction: column;

      .icon {
        align-self: flex-start;

        > svg {
          max-width: 40px;
        }
      }
    }

    .title {
      color: #005cb9;
    }
  }

  .arrow-button {
    flex: 1 1 100px;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;

    .arrow {
      color: #005cb9;
      transition: transform 0.3s ease-in-out;

      > svg {
        width: 2em;
        height: 2em;
      }
    }
  }

  &:hover {
    background: #d5f0ff;
    text-decoration: none;

    .arrow {
      transform: translateX(5px);
    }
    .icon > svg {
      transform: scale(1.1);

      [dir='rtl'] &:not(.svg-ltr-only) {
        transform: scale(-1.1, 1.1);
      }
    }
  }

  &:active {
    background-color: #86efff;
  }

  &:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 6px rgba(1, 156, 238, 0.5);
  }
`;

// src/components/apiErrorAlert/ApiErrorAlert.tsx
var import_react4 = __toESM(require("react"));
var import_react_i18next = require("react-i18next");
var import_styled4 = __toESM(require("@emotion/styled"));
var import_react_common2 = require("@britishcouncil/react-common");
var import_react_solas_ors32 = require("@britishcouncil/react-solas-ors3");
var ApiErrorsAlert = (_a) => {
    var _b = _a,
        {
            apiError,
            children,
            errors: errors2,
            forceShow,
            i18n,
            clearErrors
        } = _b,
        props = __objRest(_b, [
            "apiError",
            "children",
            "errors",
            "forceShow",
            "i18n",
            "clearErrors"
        ]);
    const {
        t
    } = (0, import_react_i18next.useTranslation)();
    const i18nDefault = {
        errorTitle: t("APPB2C.common.basic.errors.title"),
        defaultErrorMsg: t("APPB2C.common.basic.errors.unknown"),
        networkErrorMsg: t("APPB2C.common.basic.errors.network")
    };
    const trans = __spreadValues(__spreadValues({}, i18nDefault), i18n);
    const uniqueErrors = [...new Set(errors2)].filter((e) => !!e);
    const isNoNetworkError = apiError === import_react_common2.ApiError.NoNetwork;
    (0, import_react4.useEffect)(() => {
        clearErrors && clearErrors();
    }, [clearErrors]);
    if (!apiError && !errors2 && !forceShow)
        return null;
    return /* @__PURE__ */ import_react4.default.createElement(import_react_solas_ors32.BcAlert, __spreadProps(__spreadValues({
        style: props.extended ? __spreadValues({
            marginBottom: "30px"
        }, props.style) : __spreadValues({}, props.style)
    }, props), {
        type: "danger",
        title: trans.errorTitle
    }), /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, uniqueErrors && uniqueErrors.length > 0 && uniqueErrors.map((err, i) => /* @__PURE__ */ import_react4.default.createElement(ErrorLine, {
        key: i
    }, err)) || (!children ? isNoNetworkError ? trans.networkErrorMsg : trans.defaultErrorMsg : null), children));
};
var ErrorLine = import_styled4.default.p `
  margin-bottom: 0px !important;

  & + p {
    margin-top: 10px;
  }
`;

// src/components/apiErrorAlert/parseApiErrors.ts
var import_react_common4 = require("@britishcouncil/react-common");

// src/components/apiErrorAlert/models.ts
var import_react_common3 = require("@britishcouncil/react-common");
var ExtendedApiError = __spreadProps(__spreadValues({}, import_react_common3.ApiError), {
    RequestEntityTooLarge: 5
});

// src/components/apiErrorAlert/parseApiErrors.ts
var AnswerInvalid = "AnswerInvalid";
var extractApiErrors = (payload) => {
    var _a, _b, _c, _d, _e;
    if (!payload) {
        return null;
    }
    if (payload === "Network Error" || isObject(payload) && "message" in payload && payload.message === "Network Error") {
        return {
            status: import_react_common4.ApiError.NoNetwork,
            errors: []
        };
    }
    const statusCode = isObject(payload) && ("errorCode" in payload && payload.errorCode || "status" in payload && payload.status || "response" in payload && payload.response && isObject(payload.response) && "status" in payload.response && ((_a = payload.response) == null ? void 0 : _a.status));
    if (isObject(payload) && "data" in payload && (payload == null ? void 0 : payload.data) && isObject(payload.data)) {
        const errorList = "errors" in payload.data && payload.data.errors || "error" in payload.data && ((_b = payload == null ? void 0 : payload.data) == null ? void 0 : _b.error);
        return {
            status: parseCode(statusCode),
            errors: errorList && Array.isArray(errorList) ? errorList.map((err) => ({
                code: getCode(err),
                message: getMessage(err)
            })) : [{
                code: getCode(errorList),
                message: getMessage(errorList)
            }]
        };
    }
    if (isObject(payload) && "response" in payload && payload.response && isObject(payload.response) && "data" in payload.response && ((_c = payload.response) == null ? void 0 : _c.data) && isObject(payload.response.data)) {
        const errorList = "errors" in payload.response.data && payload.response.data.errors || "error" in payload.response.data && ((_e = (_d = payload.response) == null ? void 0 : _d.data) == null ? void 0 : _e.error);
        return {
            status: parseCode(statusCode),
            errors: errorList && Array.isArray(errorList) ? errorList.map((err) => ({
                code: getCode(err),
                message: getMessage(err),
                property: getProperty(err)
            })) : [{
                code: getCode(errorList),
                message: getMessage(errorList),
                property: getProperty(errorList)
            }]
        };
    }
    return {
        status: parseCode(statusCode),
        errors: []
    };
};
var isObject = (val) => typeof val === "object";
var getCode = (err) => err && isObject(err) && "errorCode" in err ? !isObject(err.errorCode) ? String(err.errorCode) : null : err && isObject(err) && "code" in err ? !isObject(err.code) ? String(err.code) : null : JSON.stringify(err).includes("marketingQuestionOptionIds") ? AnswerInvalid : null;
var getMessage = (err) => err && isObject(err) && "message" in err ? String(err.message) : null;
var getProperty = (err) => err && isObject(err) && "propertyName" in err && !isObject(err.propertyName) ? String(err.propertyName) : null;

function parseCode(statusCode) {
    const code = parseInt(statusCode);
    if (code >= 500)
        return import_react_common4.ApiError.ServerError;
    if (code === 401)
        return import_react_common4.ApiError.Unauthorized;
    if (code === 413)
        return ExtendedApiError.RequestEntityTooLarge;
    if (code >= 400)
        return import_react_common4.ApiError.BadRequest;
    return import_react_common4.ApiError.None;
}

// src/components/auth/ChangePassword.tsx
var import_react15 = __toESM(require("react"));
var import_react_i18next11 = require("react-i18next");
var yup3 = __toESM(require("yup"));
var import_react_forms3 = require("@britishcouncil/react-forms");
var import_react_solas = require("@britishcouncil/react-solas");
var import_react_solas_ors313 = require("@britishcouncil/react-solas-ors3");

// src/components/PageHeading.tsx
var import_react5 = __toESM(require("react"));
var import_styled5 = __toESM(require("@emotion/styled"));
var import_react_solas_ors33 = require("@britishcouncil/react-solas-ors3");
var PageHeading = ({
    heading,
    children,
    stepsText
}) => {
    return /* @__PURE__ */ import_react5.default.createElement(MainContainerWrapper, null, children, stepsText && /* @__PURE__ */ import_react5.default.createElement(Steps, {
        "data-testid": "step"
    }, stepsText), /* @__PURE__ */ import_react5.default.createElement(StyledHeading, {
        className: "page-header",
        "data-testid": "page-heading"
    }, /* @__PURE__ */ import_react5.default.createElement("h1", null, heading)));
};
var Steps = import_styled5.default.div `
  font-size: 0.9em;
  margin-top: -10px;
`;
var MainContainerWrapper = (0, import_styled5.default)(import_react_solas_ors33.MainContainer)
`
  @media (min-width: 850px) {
    max-width: 958px;
  }
`;
var StyledHeading = import_styled5.default.div `
  :after {
    content: ' ';
    position: absolute;
    bottom: -12px;
    width: 32px;
    left: 0;
    height: 1px;
    border-bottom: 4px solid #23085a;

    [dir='rtl'] & {
      right: 0;
    }
  }
  margin-bottom: 40px;

  @media (min-width: 850px) {
    :after {
      bottom: -25px;
      width: 58px;
    }
    margin-bottom: 0;
  }

  @media (min-width: 850px) {
    h1 {
      margin: 0 0 1.6em;
    }
  }
`;

// src/components/commonTranslated/validationRules.tsx
var validationRules_exports = {};
__export(validationRules_exports, {
    acceptTermsAndConditions: () => acceptTermsAndConditions,
    addressField: () => addressField,
    confirmEmail: () => confirmEmail,
    dateOfBirth: () => dateOfBirth,
    email: () => email,
    firstName: () => firstName,
    idNumber: () => idNumber,
    lastName: () => lastName,
    mobileNumber: () => mobileNumber,
    newPassword: () => newPassword,
    requiredMaxLengthString: () => requiredMaxLengthString,
    requiredNumber: () => requiredNumber,
    requiredString: () => requiredString
});
var import_i18next4 = __toESM(require("i18next"));
var import_react_forms2 = require("@britishcouncil/react-forms");

// src/validation/apiErrorConverters/index.ts
var import_i18next = __toESM(require("i18next"));

// src/validation/apiErrorConverters/apiErrorCodes.ts
var commonErrorCodes = /* @__PURE__ */ ((commonErrorCodes2) => {
    commonErrorCodes2["RegularExpressionValidator"] = "RegularExpressionValidator";
    commonErrorCodes2["PropertyValidationError"] = "PropertyValidationError";
    commonErrorCodes2["PredicateValidator"] = "PredicateValidator";
    commonErrorCodes2["NotEmptyValidator"] = "NotEmptyValidator";
    commonErrorCodes2["NotNullValidator"] = "NotNullValidator";
    commonErrorCodes2["LengthValidator"] = "LengthValidator";
    commonErrorCodes2["EmailValidator"] = "EmailValidator";
    return commonErrorCodes2;
})(commonErrorCodes || {});
var commonErrorProps = /* @__PURE__ */ ((commonErrorProps2) => {
    commonErrorProps2["email"] = "email";
    commonErrorProps2["firstName"] = "firstName";
    commonErrorProps2["surname"] = "surname";
    commonErrorProps2["streetAddress1"] = "streetAddress1";
    commonErrorProps2["streetAddress2"] = "streetAddress2";
    commonErrorProps2["streetAddress3"] = "streetAddress3";
    commonErrorProps2["streetAddress4"] = "streetAddress4";
    commonErrorProps2["addressLine1"] = "addressLine1";
    commonErrorProps2["addressLine2"] = "addressLine2";
    commonErrorProps2["addressLine3"] = "addressLine3";
    commonErrorProps2["addressLine4"] = "addressLine4";
    commonErrorProps2["town"] = "town";
    commonErrorProps2["postCode"] = "postCode";
    commonErrorProps2["state"] = "state";
    commonErrorProps2["idExpiry"] = "idExpiry";
    commonErrorProps2["idNumber"] = "idNumber";
    commonErrorProps2["issuingAuthority"] = "issuingAuthority";
    return commonErrorProps2;
})(commonErrorProps || {});
var changePasswordErrorCodes = /* @__PURE__ */ ((changePasswordErrorCodes2) => {
    changePasswordErrorCodes2["password"] = "password";
    return changePasswordErrorCodes2;
})(changePasswordErrorCodes || {});

// src/validation/apiErrorConverters/helpers.ts
var reduceMultipleErrorSources = (errors2) => errors2.reduce((acc, cur) => {
    var _a, _b;
    if (acc == null ? void 0 : acc.length)
        return [...acc, ...(_a = cur == null ? void 0 : cur.errors) != null ? _a : []];
    return ((_b = cur == null ? void 0 : cur.errors) == null ? void 0 : _b.length) ? cur.errors : void 0;
}, void 0);

// src/validation/apiErrorConverters/index.ts
var errors = {
    tErrorMessageResetPassword: (error) => {
        if (!error)
            return void 0;
        return ((error == null ? void 0 : error.errors) || []).map((e) => {
            switch (e.property) {
                case "idNumber" /* idNumber */ :
                    return import_i18next.default.t("APPB2C.auth.changePassword.error.wrongIdNumber");
                case "password" /* password */ :
                    return import_i18next.default.t("APPB2C.auth.changePassword.error.wrongPassword");
                default:
                    return null;
            }
        });
    }
};
var apieErrorConverters = __spreadValues(__spreadValues({}, errors), commonErrorCodes);

// src/validation/commonMaxLengths.ts
var commonMaxLengths = {
    name: 50,
    address: 100,
    postCode: 20
};

// src/validation/contactDetails.ts
var yup2 = __toESM(require("yup"));
var import_i18next3 = __toESM(require("i18next"));
var import_react_forms = require("@britishcouncil/react-forms");
var import_ors_translations2 = require("ors-translations");

// src/validation/mobileNumber.ts
var yup = __toESM(require("yup"));
var import_i18next2 = __toESM(require("i18next"));
var mobileNumberValidation = (id, bypassValidation) => bypassValidation ? validationRulesI18n.mobileNumber() : yup.string().required(import_i18next2.default.t("APPB2C.common.basic.forms.requiredMessage")).test("is-mobile-valid", import_i18next2.default.t("APPB2C.common.basic.forms.validMobile"), (value) => {
    var _a, _b, _c;
    const el = document.getElementById(id);
    const iti = el ? window.intlTelInputGlobals.getInstance(el) : void 0;
    const isProperNumberType = [
        (_a = window.intlTelInputUtils) == null ? void 0 : _a.numberType.MOBILE,
        (_b = window.intlTelInputUtils) == null ? void 0 : _b.numberType.FIXED_LINE_OR_MOBILE
    ].some((nt) => nt === (iti == null ? void 0 : iti.getNumberType()));
    const isValid = (_c = iti == null ? void 0 : iti.isValidNumber()) != null ? _c : true;
    return iti ? isValid && isProperNumberType : true;
}).max(20, import_i18next2.default.t("APPB2C.common.basic.forms.mobileLength"));
var getValidatedMobileNumber = (mobileInputId, formValue) => {
    const el = document.getElementById(mobileInputId);
    const validatedMobileNumber = el ? window.intlTelInputGlobals.getInstance(el).getNumber() : formValue;
    return validatedMobileNumber;
};
var getLocalizedCountries = (countries) => countries == null ? void 0 : countries.filter((c) => !!c.isoCode2).reduce((prev, cur) => __spreadProps(__spreadValues({}, prev), {
    [cur.isoCode2.toLowerCase()]: cur.name
}), {});
var getMobileNumberCountry = (mobileInputId) => {
    var _a;
    const el = document.getElementById(mobileInputId);
    const mobileNumberCountry = el ? (_a = window.intlTelInputGlobals.getInstance(el).getSelectedCountryData()) == null ? void 0 : _a.iso2 : "";
    return mobileNumberCountry;
};

// src/validation/contactDetails.ts
var fiveDigitsRegex = /\b\d{5}\b/g;
var contactDetails = ({
    isMobileRequired = true,
    mobileInputId = "",
    bypassMobileValidation = false,
    isAddressPostalCodeRequired,
    isAddressStateRequired,
    errors: errors2
}) => {
    const validatePostcode = () => {
        const isRequiredUSA = isAddressPostalCodeRequired && (0, import_ors_translations2.isIeltsUsaContextUrl)();
        const isRequiredNotUsa = isAddressPostalCodeRequired && !(0, import_ors_translations2.isIeltsUsaContextUrl)();
        if (errors2 == null ? void 0 : errors2.zipNotExistent) {
            return yup2.string().test("show error when zip doesn't exist", "zipNotExistent", function(value) {
                const {
                    path,
                    createError
                } = this;
                return createError({
                    path,
                    message: import_i18next3.default.t("APPB2C.common.basic.forms.postCodeNotFound")
                });
            });
        }
        if (isRequiredUSA) {
            return yup2.string().required(import_i18next3.default.t("APPB2C.common.basic.forms.requiredMessage")).matches(fiveDigitsRegex, {
                message: import_i18next3.default.t("APPB2C.common.basic.forms.postCodeMessage")
            });
        }
        if (isRequiredNotUsa) {
            return yup2.string().required(import_i18next3.default.t("APPB2C.common.basic.forms.requiredMessage")).max(commonMaxLengths.postCode, import_i18next3.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
                count: commonMaxLengths.postCode
            })).matches(import_react_forms.validationRules.windows1252.regex, {
                message: import_i18next3.default.t("APPB2C.common.basic.forms.unsupportedChars"),
                excludeEmptyString: true
            });
        }
        return yup2.string().max(commonMaxLengths.postCode, import_i18next3.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
            count: commonMaxLengths.postCode
        })).matches(import_react_forms.validationRules.windows1252.regex, {
            message: import_i18next3.default.t("APPB2C.common.basic.forms.unsupportedChars"),
            excludeEmptyString: true
        });
    };
    return {
        countryId: validationRulesI18n.requiredString(),
        addressLine1: validationRulesI18n.addressField().required(import_i18next3.default.t("APPB2C.common.basic.forms.requiredMessage")),
        addressLine2: validationRulesI18n.addressField(),
        addressLine3: validationRulesI18n.addressField(),
        town: validationRulesI18n.addressField().required(import_i18next3.default.t("APPB2C.common.basic.forms.requiredMessage")),
        postcode: validatePostcode(),
        state: isAddressStateRequired ? validationRulesI18n.addressField().required(import_i18next3.default.t("APPB2C.common.basic.forms.requiredMessage")) : validationRulesI18n.addressField().notRequired(),
        mobile: isMobileRequired === false ? mobileNumberValidation(mobileInputId, bypassMobileValidation).notRequired() : mobileNumberValidation(mobileInputId, bypassMobileValidation)
    };
};

// src/components/commonTranslated/validationRules.tsx
var newPassword = () => {
    return import_react_forms2.validationRules.newPasswordI18n({
        required: import_i18next4.default.t("APPB2C.common.basic.forms.requiredMessage"),
        maxLength: import_i18next4.default.t("APPB2C.common.account.details.psw.requirements.maxLength"),
        weakPassword: import_i18next4.default.t("APPB2C.common.account.details.psw.requirements.tooWeak")
    });
};
var email = () => {
    return import_react_forms2.validationRules.emailI18n({
        required: import_i18next4.default.t("APPB2C.common.basic.forms.requiredMessage"),
        maxLength: import_i18next4.default.t("APPB2C.common.account.details.email.maxLength"),
        validEmail: import_i18next4.default.t("APPB2C.common.account.details.email.validEmail")
    });
};
var confirmEmail = () => {
    return import_react_forms2.validationRules.confirmEmailI18n({
        required: import_i18next4.default.t("APPB2C.common.basic.forms.requiredMessage"),
        mismatch: import_i18next4.default.t("APPB2C.common.account.details.email.mismatch")
    });
};
var mobileNumber = () => {
    return import_react_forms2.validationRules.mobileNumberI18n({
        required: import_i18next4.default.t("APPB2C.common.basic.forms.requiredMessage"),
        maxLength: import_i18next4.default.t("APPB2C.common.basic.forms.mobileLength"),
        validNumber: import_i18next4.default.t("APPB2C.common.basic.forms.validMobile")
    });
};
var firstName = () => {
    return import_react_forms2.validationRules.firstNameI18n({
        required: import_i18next4.default.t("APPB2C.common.basic.forms.requiredMessage"),
        maxLength: import_i18next4.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
            count: commonMaxLengths.name
        }),
        onlyLatin: import_i18next4.default.t("APPB2C.common.basic.forms.onlyLatin")
    });
};
var lastName = () => {
    return import_react_forms2.validationRules.lastNameI18n({
        requiredNoSurmane: import_i18next4.default.t("APPB2C.common.basic.forms.requiredNoSurmane"),
        maxLength: import_i18next4.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
            count: commonMaxLengths.name
        }),
        onlyLatin: import_i18next4.default.t("APPB2C.common.basic.forms.onlyLatin")
    });
};
var addressField = () => {
    return import_react_forms2.validationRules.addressFieldI18n(import_i18next4.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
        count: commonMaxLengths.address
    }));
};
var idNumber = () => {
    return import_react_forms2.validationRules.idNumberI18n({
        required: import_i18next4.default.t("APPB2C.common.basic.forms.requiredMessage"),
        regexMismatch: import_i18next4.default.t("APPB2C.common.basic.forms.idNumber"),
        maxLength: import_i18next4.default.t("APPB2C.common.basic.forms.idMaxLength")
    });
};
var dateOfBirth = (props) => {
    const schema = import_react_forms2.validationRules.dateOfBirthI18n({
        required: import_i18next4.default.t("APPB2C.common.basic.forms.requiredMessage"),
        dateOutOfRange: import_i18next4.default.t("APPB2C.common.basic.forms.dobOutOfRange")
    }).max(props.maxDate, props.isIol ? import_i18next4.default.t("APPB2C.common.basic.forms.dobMinIol") : props.isMinor ? import_i18next4.default.t("APPB2C.common.basic.forms.minorDobMin") : import_i18next4.default.t("APPB2C.common.basic.forms.dobMin"));
    return props.isMinor && !!props.minDate ? schema.min(props.minDate, import_i18next4.default.t("APPB2C.common.basic.forms.minorDobMax")) : schema;
};
var acceptTermsAndConditions = () => {
    return import_react_forms2.validationRules.acceptTermsAndConditionsI18n(import_i18next4.default.t("APPB2C.common.basic.forms.requiredMessage"));
};
var requiredString = () => {
    return import_react_forms2.validationRules.requiredStringI18n(import_i18next4.default.t("APPB2C.common.basic.forms.requiredMessage"));
};
var requiredNumber = () => {
    return import_react_forms2.validationRules.requiredNumberI18n(import_i18next4.default.t("APPB2C.common.basic.forms.requiredMessage"));
};
var requiredMaxLengthString = (maxLength) => {
    return import_react_forms2.validationRules.requiredStringI18n(import_i18next4.default.t("APPB2C.common.basic.forms.requiredMessage")).max(maxLength, import_i18next4.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
        count: maxLength
    }));
};

// src/components/commonTranslated/ApiErrorPage.tsx
var import_react6 = __toESM(require("react"));
var import_react_i18next2 = require("react-i18next");
var import_react_solas_ors34 = require("@britishcouncil/react-solas-ors3");
var ApiErrorPage = (_a) => {
    var _b = _a,
        {
            children
        } = _b,
        props = __objRest(_b, [
            "children"
        ]);
    const {
        t
    } = (0, import_react_i18next2.useTranslation)();
    return /* @__PURE__ */ import_react6.default.createElement(import_react_solas_ors34.ApiErrorPage, __spreadValues({
        title: t("APPB2C.common.basic.errors.title"),
        errorMessage: t("APPB2C.common.basic.errors.unknown")
    }, props), children);
};

// src/components/commonTranslated/BcSelect.tsx
var import_react7 = __toESM(require("react"));
var import_react_i18next3 = require("react-i18next");
var import_react_solas_ors35 = require("@britishcouncil/react-solas-ors3");
var BcSelect = (_a) => {
    var props = __objRest(_a, []);
    const {
        t
    } = (0, import_react_i18next3.useTranslation)();
    return /* @__PURE__ */ import_react7.default.createElement(import_react_solas_ors35.BcSelect, __spreadValues({
        i18n: {
            loading: t("APPB2C.common.basic.loading")
        }
    }, props));
};

// src/components/commonTranslated/DateField.tsx
var import_react8 = __toESM(require("react"));
var import_react_i18next4 = require("react-i18next");
var import_react_solas_ors36 = require("@britishcouncil/react-solas-ors3");
var DateField = (_a) => {
    var props = __objRest(_a, []);
    const {
        t,
        i18n: {
            language
        }
    } = (0, import_react_i18next4.useTranslation)();
    return /* @__PURE__ */ import_react8.default.createElement(import_react_solas_ors36.DateField, __spreadValues({
        i18n: {
            day: t("APPB2C.common.basic.dateField.day"),
            month: t("APPB2C.common.basic.dateField.month"),
            months: t("APPB2C.common.basic.dateField.months"),
            year: t("APPB2C.common.basic.dateField.year")
        },
        locale: language
    }, props));
};

// src/components/commonTranslated/ExternalLink.tsx
var import_react9 = __toESM(require("react"));
var import_react_i18next5 = require("react-i18next");
var import_styled6 = __toESM(require("@emotion/styled"));
var import_react_solas_ors37 = require("@britishcouncil/react-solas-ors3");
var ExternalLink = (_a) => {
    var _b = _a,
        {
            children
        } = _b,
        props = __objRest(_b, [
            "children"
        ]);
    const {
        t
    } = (0, import_react_i18next5.useTranslation)();
    return /* @__PURE__ */ import_react9.default.createElement(StyledCommonExternalLink, __spreadValues({
        i18n: {
            title: t("APPB2C.common.basic.externalLinkTitle")
        }
    }, props), children);
};
var StyledCommonExternalLink = (0, import_styled6.default)(import_react_solas_ors37.ExternalLink)
`
  :focus {
    outline: none;
    color: #000;
  }

  [dir='rtl'] & {
    font-weight: 100;
  }
`;

// src/components/commonTranslated/LoadingCard.tsx
var import_react10 = __toESM(require("react"));
var import_react_i18next6 = require("react-i18next");
var import_styled7 = __toESM(require("@emotion/styled"));
var import_react_solas_ors38 = require("@britishcouncil/react-solas-ors3");
var LoadingCard = (_a) => {
    var _b = _a,
        {
            children
        } = _b,
        props = __objRest(_b, [
            "children"
        ]);
    const {
        t
    } = (0, import_react_i18next6.useTranslation)();
    return /* @__PURE__ */ import_react10.default.createElement(StyledCommonLoadingCard, __spreadValues({
        title: t("APPB2C.common.basic.loading")
    }, props), children);
};
var StyledCommonLoadingCard = (0, import_styled7.default)(import_react_solas_ors38.LoadingCard)
`
  .icon {
    [dir='rtl'] & {
      margin: 5px 0 0 25px;
    }
  }
`;

// src/components/commonTranslated/Modal.tsx
var import_react11 = __toESM(require("react"));
var import_react_i18next7 = require("react-i18next");
var import_react_solas_ors39 = require("@britishcouncil/react-solas-ors3");
var import_ors_translations3 = require("ors-translations");
var Modal = (_a) => {
    var _b = _a,
        {
            children
        } = _b,
        props = __objRest(_b, ["children"]);
    const {
        t
    } = (0, import_react_i18next7.useTranslation)();
    const dir = (0, import_ors_translations3.useSelectedLangDirection)();
    return /* @__PURE__ */ import_react11.default.createElement(import_react_solas_ors39.Modal, __spreadValues({
        dir,
        i18n: {
            hide: t("APPB2C.common.bookTest.filters.modal.hide")
        }
    }, props), children);
};

// src/components/commonTranslated/NewPasswordField.tsx
var import_react12 = __toESM(require("react"));
var import_react_i18next8 = require("react-i18next");
var import_react_solas_ors310 = require("@britishcouncil/react-solas-ors3");
var NewPasswordField = (_a) => {
    var _b = _a,
        {
            children
        } = _b,
        props = __objRest(_b, [
            "children"
        ]);
    const {
        t
    } = (0, import_react_i18next8.useTranslation)();
    return /* @__PURE__ */ import_react12.default.createElement(import_react_solas_ors310.NewPasswordField, __spreadValues({
        inputDir: "ltr",
        i18n: {
            showPassword: t("APPB2C.common.account.details.psw.show")
        },
        passwordRequirementsI18n: {
            levels: {
                "0": t("APPB2C.common.account.details.psw.requirements.levels.0"),
                "1": t("APPB2C.common.account.details.psw.requirements.levels.1"),
                "2": t("APPB2C.common.account.details.psw.requirements.levels.2"),
                "3": t("APPB2C.common.account.details.psw.requirements.levels.3"),
                "4": t("APPB2C.common.account.details.psw.requirements.levels.4")
            },
            ok: t("APPB2C.common.account.details.psw.requirements.ok"),
            mustHave: t("APPB2C.common.account.details.psw.requirements.mustHave"),
            shouldHave: t("APPB2C.common.account.details.psw.requirements.shouldHave"),
            strength: t("APPB2C.common.account.details.psw.requirements.strength"),
            reqs: {
                length: t("APPB2C.common.account.details.psw.requirements.reqs.length"),
                lower: t("APPB2C.common.account.details.psw.requirements.reqs.lower"),
                upper: t("APPB2C.common.account.details.psw.requirements.reqs.upper"),
                number: t("APPB2C.common.account.details.psw.requirements.reqs.number"),
                special: t("APPB2C.common.account.details.psw.requirements.reqs.special")
            }
        }
    }, props), children);
};

// src/components/commonTranslated/PageErrors.tsx
var import_react13 = __toESM(require("react"));
var import_react_i18next9 = require("react-i18next");
var import_react_solas_ors311 = require("@britishcouncil/react-solas-ors3");
var PageErrors = (_a) => {
    var _b = _a,
        {
            children
        } = _b,
        props = __objRest(_b, ["children"]);
    const {
        t
    } = (0, import_react_i18next9.useTranslation)();
    return /* @__PURE__ */ import_react13.default.createElement(import_react_solas_ors311.PageErrors, __spreadValues({
        i18n: {
            errorTitle: t("APPB2C.common.basic.errors.title"),
            defaultErrorMsg: t("APPB2C.common.basic.errors.unknown")
        }
    }, props), children);
};

// src/components/commonTranslated/SelectField.tsx
var import_react14 = __toESM(require("react"));
var import_react_i18next10 = require("react-i18next");
var import_react_solas_ors312 = require("@britishcouncil/react-solas-ors3");
var SelectField = (_a) => {
    var props = __objRest(_a, []);
    const {
        t
    } = (0, import_react_i18next10.useTranslation)();
    return /* @__PURE__ */ import_react14.default.createElement(import_react_solas_ors312.SelectField, __spreadValues({
        i18n: {
            choose: t("APPB2C.common.basic.choose")
        }
    }, props));
};

// src/components/commonTranslated/index.ts
var validationRulesI18n = validationRules_exports;

// src/components/auth/ChangePassword.tsx
var formSchema = () => yup3.object().shape({
    idNumber: validationRulesI18n.requiredString(),
    password: validationRulesI18n.newPassword()
});
var initialValues = {
    idNumber: "",
    password: ""
};
var ChangePassword = ({
    resetPassFn,
    onSuccess,
    i18n
}) => {
    const {
        t
    } = (0, import_react_i18next11.useTranslation)();
    const [processing, setProcessing] = (0, import_react15.useState)(false);
    const [errors2, setError] = (0, import_react15.useState)();
    const i18nDefault = {
        heading: t("APPB2C.auth.changePassword.title"),
        idNote: t("APPB2C.auth.changePassword.id.note"),
        idLabel: t("APPB2C.auth.changePassword.id.label"),
        warn: t("APPB2C.auth.changePassword.id.warn"),
        passNote: t("APPB2C.auth.changePassword.pass.note"),
        passLabel: t("APPB2C.auth.changePassword.pass.label"),
        cta: t("APPB2C.auth.changePassword.cta")
    };
    const wording = __spreadValues(__spreadValues({}, i18nDefault), i18n);
    const handleChange = (0, import_react15.useCallback)(async ({
        idNumber: idNumber2,
        password
    }) => {
        setError(void 0);
        setProcessing(true);
        const trimmedId = idNumber2 == null ? void 0 : idNumber2.trim();
        const trimmedPass = password == null ? void 0 : password.trim();
        try {
            await resetPassFn({
                idNumber: trimmedId,
                password: trimmedPass
            });
        } catch (error) {
            const err = extractApiErrors(error);
            setError(apieErrorConverters.tErrorMessageResetPassword(err));
            setProcessing(false);
            return;
        }
        onSuccess();
    }, [onSuccess, resetPassFn, wording.error]);
    const {
        formik,
        fields
    } = (0, import_react_forms3.useForm)(formSchema(), initialValues, handleChange);
    return /* @__PURE__ */ import_react15.default.createElement("form", {
        onSubmit: formik.handleSubmit,
        onReset: formik.handleReset
    }, /* @__PURE__ */ import_react15.default.createElement(PageHeading, {
        "data-testid": "page-heading",
        heading: wording.heading
    }), /* @__PURE__ */ import_react15.default.createElement(import_react_solas_ors313.PageContainer, null, /* @__PURE__ */ import_react15.default.createElement("p", {
        "data-testid": "text-idNumber"
    }, wording.idNote), /* @__PURE__ */ import_react15.default.createElement(import_react_solas_ors313.TextField, __spreadProps(__spreadValues({
        label: wording.idLabel,
        disabled: processing
    }, fields.idNumber), {
        id: "idNumber",
        "data-testid": "idNumber"
    })), /* @__PURE__ */ import_react15.default.createElement(import_react_solas_ors313.Quote, {
        title: ""
    }, wording.warn), /* @__PURE__ */ import_react15.default.createElement(import_react_solas_ors313.Divider, null), /* @__PURE__ */ import_react15.default.createElement("p", {
        "data-testid": "text-password"
    }, wording.passNote), /* @__PURE__ */ import_react15.default.createElement(NewPasswordField, __spreadProps(__spreadValues({
        inputDir: "ltr",
        label: wording.passLabel,
        disabled: processing
    }, fields.password), {
        id: "password",
        "data-testid": "password"
    })), /* @__PURE__ */ import_react15.default.createElement(import_react_solas_ors313.Divider, null), /* @__PURE__ */ import_react15.default.createElement(import_react_solas.Button, {
        "data-testid": "change-password-button",
        type: "submit",
        intent: "primary",
        loading: processing,
        disabled: processing
    }, wording.cta)), errors2 && /* @__PURE__ */ import_react15.default.createElement(ApiErrorsAlert, {
        extended: true,
        errors: errors2,
        style: {
            marginBottom: "20px"
        }
    }));
};

// src/components/calendar/CustomCalendar.tsx
var import_react_i18next19 = require("react-i18next");
var import_react26 = __toESM(require("react"));

// src/components/calendar/ChooseDates.tsx
var import_react24 = __toESM(require("react"));
var import_react_i18next17 = require("react-i18next");
var import_luxon = require("luxon");
var import_lodash_es2 = require("lodash-es");
var import_react_day_picker2 = require("react-day-picker");
var import_react_solas5 = require("@britishcouncil/react-solas");

// src/components/calendar/CalendarRoot.tsx
var import_react23 = __toESM(require("react"));
var import_react_day_picker = require("react-day-picker");
var import_lodash_es = require("lodash-es");
var import_ors_translations5 = require("ors-translations");

// src/components/calendar/SelectionSummary.tsx
var import_react22 = __toESM(require("react"));
var import_react_i18next16 = require("react-i18next");
var import_classnames2 = __toESM(require("classnames"));
var import_styled10 = __toESM(require("@emotion/styled"));
var import_react_common5 = require("@britishcouncil/react-common");
var import_react_solas_ors317 = require("@britishcouncil/react-solas-ors3");

// src/layout/Header/index.tsx
var React17 = __toESM(require("react"));
var import_react17 = require("react");
var import_react_i18next12 = require("react-i18next");
var import_react_router_dom = require("react-router-dom");
var import_classnames = __toESM(require("classnames"));
var import_styled8 = __toESM(require("@emotion/styled"));
var import_is_prop_valid = __toESM(require("@emotion/is-prop-valid"));
var import_react_solas2 = require("@britishcouncil/react-solas");

// src/layout/cssBreakpoints.ts
var breakpoints = {
    "screen-xs-max": 567,
    "screen-sm-min": 568,
    "screen-sm-max": 849,
    "screen-md-min": 850,
    "screen-md-max": 1023,
    "screen-lg-min": 1024
};

// src/layout/Header/Favicons.tsx
var import_react16 = __toESM(require("react"));
var import_react_helmet = require("react-helmet");
var Favicons = ({
    faviconUrl
}) => {
    return /* @__PURE__ */ import_react16.default.createElement(import_react_helmet.Helmet, null, /* @__PURE__ */ import_react16.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: faviconUrl || "https://bccdn.britishcouncil.org/favicons/b2c/apple-touch-icon.png"
    }), /* @__PURE__ */ import_react16.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: faviconUrl || "https://bccdn.britishcouncil.org/favicons/b2c/favicon-32x32.png"
    }), /* @__PURE__ */ import_react16.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: faviconUrl || "https://bccdn.britishcouncil.org/favicons/b2c/favicon-16x16.png"
    }), /* @__PURE__ */ import_react16.default.createElement("link", {
        rel: "mask-icon",
        href: faviconUrl || "https://bccdn.britishcouncil.org/favicons/b2c/safari-pinned-tab.svg",
        color: "#5bbad5"
    }));
};

// src/layout/Header/index.tsx
var Header = (_a) => {
    var _b = _a,
        {
            link: Link3
        } = _b,
        props = __objRest(_b, ["link"]);
    const [isOpen, toggleOpen] = (0, import_react17.useState)(false);
    const toggleClick = () => toggleOpen((isOpen2) => !isOpen2);
    const closeMenu = () => toggleOpen(false);
    const headerClasses = (0, import_classnames.default)("navbar", {
        "bc-navbar-microsite": props.micrositeStyle,
        "navbar-default": props.slim,
        "navbar-slim": !props.slim,
        "navbar-inverse": props.inverse,
        "bc-attached": props.attached,
        "navbar-with-border": props.hasBorderBottom,
        "compact-mobile-mode": props.compactMobileMode
    });
    const linksPresent = !!props.children;
    let logoStyle = {};
    if (props.logoUrl) {
        logoStyle = {
            backgroundImage: "url(" + props.logoUrl + ")"
        };
    }
    return /* @__PURE__ */ React17.createElement(React17.Fragment, null, /* @__PURE__ */ React17.createElement(Favicons, {
        faviconUrl: props.faviconUrl
    }), /* @__PURE__ */ React17.createElement(import_react_solas2.MobileMenuContext.Provider, {
        value: {
            closeMenu
        }
    }, /* @__PURE__ */ React17.createElement(StyledHeader, {
        className: headerClasses,
        hasCustomLogo: !!props.logoUrl,
        hideBranding: props.hideBranding
    }, /* @__PURE__ */ React17.createElement(import_react_solas2.SimpleContainer, {
        size: props.size,
        centered: props.centered
    }, /* @__PURE__ */ React17.createElement("div", {
        className: "navbar-header"
    }, /* @__PURE__ */ React17.createElement("div", {
        className: "navbar-brand"
    }, /* @__PURE__ */ React17.createElement(StyledLink, {
        to: "/",
        className: "bc-brand-logo",
        style: logoStyle,
        "aria-label": "Go to the main page"
    }, "British Council"), props.extraLogoUrl ? /* @__PURE__ */ React17.createElement("img", {
        src: props.extraLogoUrl
    }) : null, props.additionalTitle ? /* @__PURE__ */ React17.createElement(StyledAppName, null, props.additionalTitle) : null)), linksPresent && /* @__PURE__ */ React17.createElement(HamburgerLink, {
        onClick: toggleClick,
        isOpen
    }), linksPresent && /* @__PURE__ */ React17.createElement("div", {
        role: "navigation",
        className: isOpen ? "menu-show" : ""
    }, props.children)))));
};

function HamburgerLink(props) {
    const {
        t
    } = (0, import_react_i18next12.useTranslation)();
    return /* @__PURE__ */ React17.createElement("div", {
        className: "bc-btn-navbar-group",
        role: "group"
    }, /* @__PURE__ */ React17.createElement("button", {
        type: "button",
        onClick: props.onClick,
        className: `btn bc-btn-menu bc-menu-toggle ${props.isOpen ? "open" : ""}`
    }, /* @__PURE__ */ React17.createElement("span", {
        className: "menu-label",
        "data-testid": "menu-nav-button"
    }, t("APPB2C.common.basic.menu")), /* @__PURE__ */ React17.createElement("div", {
        className: "menu-icon"
    }, /* @__PURE__ */ React17.createElement("span", null), /* @__PURE__ */ React17.createElement("span", null), /* @__PURE__ */ React17.createElement("span", null), /* @__PURE__ */ React17.createElement("span", null))));
}
var StyledHeader = (0, import_styled8.default)("header", {
    shouldForwardProp: import_is_prop_valid.default
})
`
  .menu-show > .nav.navbar-nav {
    display: block;
  }

  &.compact-mobile-mode {
    @media (max-width: ${breakpoints["screen-sm-max"]}px) {
      border-top-width: 5px;
    }
  }

  &.navbar .navbar-brand {
    display: flex;
    justify-content: space-between;
    visibility: ${({ hideBranding }) => hideBranding ? "hidden" : "visible"};
  }

  && .navbar-header .navbar-brand .bc-brand-logo::before {
    display: ${({ hasCustomLogo }) => hasCustomLogo ? "none" : "block"};
    width: ${({ hasCustomLogo }) => hasCustomLogo ? "initial" : "245px;"};
  }
`;
var StyledAppName = import_styled8.default.span `
  font-size: 24px;
  line-height: 34px;
  margin-left: 150px;
  padding-left: 0;
  color: #fff;
`;
var StyledLink = (0, import_styled8.default)(import_react_router_dom.Link)
`
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 6px rgba(1, 156, 238, 0.5);
  }
`;

// src/layout/Footer.tsx
var React18 = __toESM(require("react"));
var import_react_i18next13 = require("react-i18next");
var import_react_solas_ors314 = require("@britishcouncil/react-solas-ors3");
var import_ors_utils = require("ors-utils");
var Footer = ({
    orgSpecificData,
    iolLinks
}) => {
    const footerUrls = iolLinks != null ? iolLinks : {
        accessibilityUrl: orgSpecificData == null ? void 0 : orgSpecificData.accessibilityUrl,
        dataProtectionUrl: orgSpecificData == null ? void 0 : orgSpecificData.dataProtectionUrl,
        privacyAndCookiesUrl: orgSpecificData == null ? void 0 : orgSpecificData.privacyAndCookiesUrl,
        termsOfUseUrl: orgSpecificData == null ? void 0 : orgSpecificData.termsOfUseUrl
    };
    const footerText = (0, import_ors_utils.removeHtmlTags)(orgSpecificData == null ? void 0 : orgSpecificData.footerText);
    const {
        t
    } = (0, import_react_i18next13.useTranslation)();
    const i18n_footer = {
        termsOfUse: t("APPB2C.common.footer.terms.termsOfUse"),
        accessibility: t("APPB2C.common.footer.terms.accessibility"),
        privacyAndCookies: t("APPB2C.common.footer.terms.privacyAndCookies"),
        dataProtection: t("APPB2C.common.footer.terms.dataProtection"),
        copyrightLine1: footerText != null ? footerText : t("APPB2C.common.footer.terms.copyrightLine1"),
        copyrightLine2: footerText ? "" : t("APPB2C.common.footer.terms.copyrightLine2")
    };
    return /* @__PURE__ */ React18.createElement(import_react_solas_ors314.Footer, __spreadProps(__spreadValues({
        slim: true
    }, footerUrls), {
        copyrightOwner: orgSpecificData == null ? void 0 : orgSpecificData.copyrightOwnerText,
        i18n: i18n_footer
    }));
};

// src/layout/ErrorPage.tsx
var import_react18 = __toESM(require("react"));
var import_react_i18next14 = require("react-i18next");
var import_react_solas3 = require("@britishcouncil/react-solas");
var import_react_solas_ors315 = require("@britishcouncil/react-solas-ors3");
var import_ors_translations4 = require("ors-translations");
var ErrorPage = ({
    orgSpecificData,
    logoUrl,
    faviconUrl,
    extraLogoUrl,
    link: Link3
}) => {
    const {
        t
    } = (0, import_react_i18next14.useTranslation)();
    const dir = (0, import_ors_translations4.useSelectedLangDirection)();
    return /* @__PURE__ */ import_react18.default.createElement(import_react_solas3.SolasLayout, {
        id: "app-container",
        ieltsBranding: true,
        slogan: "ielts",
        flex: true,
        dir
    }, /* @__PURE__ */ import_react18.default.createElement(Header, {
        slogan: "IELTS",
        slim: true,
        compactMobileMode: true,
        link: Link3,
        logoUrl,
        faviconUrl,
        extraLogoUrl
    }), /* @__PURE__ */ import_react18.default.createElement("div", {
        className: "app-contents"
    }, /* @__PURE__ */ import_react18.default.createElement(import_react_solas_ors315.BcAlert, {
        type: "danger",
        extended: true,
        title: t("APPB2C.common.basic.notLoading.title")
    }, /* @__PURE__ */ import_react18.default.createElement("div", null, t("APPB2C.common.basic.notLoading.note")), /* @__PURE__ */ import_react18.default.createElement(import_react_solas3.Button, {
        intent: "primary",
        style: {
            marginTop: "2em"
        },
        onClick: () => window.location.reload()
    }, t("APPB2C.common.basic.notLoading.refresh")))), /* @__PURE__ */ import_react18.default.createElement(Footer, {
        orgSpecificData
    }));
};

// src/layout/modals/NewTermsAndConditions/NewTermsAccount.tsx
var import_react21 = __toESM(require("react"));

// src/layout/modals/NewTermsAndConditions/useNewTermsAccount.ts
var import_react19 = require("react");
var import_ors22 = require("ors-api/ors2");
var import_ors_utils2 = require("ors-utils");
var useNewTermsAccount = ({
    accountTermsAndConditionsShortCode = import_ors_utils2.TermsShortCodeEnum.Global_IELTS_Account_Registration,
    enableCheck
}) => {
    const [termsAccepted, setTermsAccepted] = (0, import_react19.useState)(true);
    const [processing, setProcessing] = (0, import_react19.useState)(false);
    const [hasError, setHasError] = (0, import_react19.useState)(false);
    const request = (0, import_react19.useMemo)(() => ({
        shortCode: accountTermsAndConditionsShortCode,
        productGroupShortCode: "IELTS",
        subSystemName: "B2C"
    }), [accountTermsAndConditionsShortCode]);
    const link = (0, import_ors_utils2.makeTermsUrl)({
        shortCode: request.shortCode
    });
    const checkForNewTerms = (0, import_react19.useCallback)(async () => {
        try {
            const areActualTermsAccepted = await import_ors22.termsAndConditionsTypeClient.checkIfTermsAndConditionsUpdated(request);
            setTermsAccepted(areActualTermsAccepted.data);
        } catch (error) {
            setTermsAccepted(true);
        }
    }, [request]);
    const checkIeltsTerms = async () => {
        const response = await import_ors22.termsAndConditionsTypeClient.checkIfTermsAndConditionsUpdated(__spreadProps(__spreadValues({}, request), {
            productGroupShortCode: "IELTS"
        }));
        return response.data ? null : await import_ors22.termsAndConditionsTypeClient.addConsentToAccountTermsAndConditions(__spreadProps(__spreadValues({}, request), {
            productGroupShortCode: "IELTS"
        }));
    };
    const onSubmit = (0, import_react19.useCallback)(async () => {
        try {
            setProcessing(true);
            await import_ors22.termsAndConditionsTypeClient.addConsentToAccountTermsAndConditions(request);
            await checkIeltsTerms();
            await checkForNewTerms();
            setProcessing(false);
        } catch (error) {
            setProcessing(false);
            setHasError(true);
        }
    }, [checkForNewTerms, request]);
    (0, import_react19.useEffect)(() => {
        enableCheck && checkForNewTerms();
    }, [checkForNewTerms, enableCheck]);
    return {
        link,
        onSubmit,
        show: !termsAccepted,
        processing,
        hasError
    };
};

// src/layout/modals/NewTermsAndConditions/NewTermsModal.tsx
var import_react20 = __toESM(require("react"));
var import_react_i18next15 = require("react-i18next");
var import_styled9 = __toESM(require("@emotion/styled"));
var import_react_solas4 = require("@britishcouncil/react-solas");
var import_react_solas_ors316 = require("@britishcouncil/react-solas-ors3");
var NewTermsModal = ({
    show,
    processing,
    link,
    onSubmit,
    hasError,
    context,
    modalProps
}) => {
    const [checked, setChecked] = (0, import_react20.useState)(false);
    const {
        t
    } = (0, import_react_i18next15.useTranslation)();
    return /* @__PURE__ */ import_react20.default.createElement(Modal, __spreadValues({
        intent: "gray",
        show,
        title: t("APPB2C.common.modals.newTermsAndConditions.title"),
        showHideLink: false,
        isLoading: processing,
        onExit: () => null
    }, modalProps), /* @__PURE__ */ import_react20.default.createElement(Root, null, /* @__PURE__ */ import_react20.default.createElement("div", null, /* @__PURE__ */ import_react20.default.createElement("div", null, t("APPB2C.common.modals.newTermsAndConditions.note")), /* @__PURE__ */ import_react20.default.createElement(import_react_solas_ors316.TnCCheckbox, {
        label: "Terms and conditions",
        name: "terms",
        value: checked,
        onChange: setChecked,
        onBlur: () => null,
        touched: true,
        error: ""
    }, t("APPB2C.common.modals.newTermsAndConditions.checkboxNote", {
        context
    }), " ", /* @__PURE__ */ import_react20.default.createElement(ExternalLink, {
        href: link,
        "data-testid": "new-terms"
    }, t("APPB2C.common.modals.newTermsAndConditions.checkboxTC")))), /* @__PURE__ */ import_react20.default.createElement("footer", null, /* @__PURE__ */ import_react20.default.createElement(import_react_solas4.Button, {
        intent: "primary",
        onClick: onSubmit,
        disabled: !checked,
        loading: processing,
        type: "button"
    }, t("APPB2C.common.modals.newTermsAndConditions.cta")), hasError && /* @__PURE__ */ import_react20.default.createElement("div", {
        className: "help-block errors"
    }, t("APPB2C.common.modals.newTermsAndConditions.error")))));
};
var Root = import_styled9.default.div `
  & > div {
    margin: -26px -20px;
    padding: 20px 30px 10px 30px;
    background: #e5eff8;
  }

  .checkbox {
    margin-top: 20px;
  }

  &&& footer {
    margin-top: 50px;
    button {
      margin: 0;
      width: 100%;
    }
    .errors {
      color: #a94442;
    }
  }
`;

// src/layout/modals/NewTermsAndConditions/NewTermsAccount.tsx
var NewTermsAccount = ({
    enableAccountTermsCheck = true,
    accountTermsAndConditionsShortCode
}) => {
    const props = useNewTermsAccount({
        accountTermsAndConditionsShortCode,
        enableCheck: enableAccountTermsCheck
    });
    return /* @__PURE__ */ import_react21.default.createElement(NewTermsModal, __spreadProps(__spreadValues({}, props), {
        context: "account"
    }));
};

// src/components/calendar/SelectionSummary.tsx
var SelectionSummary = ({
    fromDate,
    toDate,
    onClear = () => null,
    localeDateFunction
}) => {
    const {
        t
    } = (0, import_react_i18next16.useTranslation)();
    const ref = (0, import_react22.useRef)(null);
    const isSticky = (0, import_react_common5.useSticky)(ref);
    const isSingleDaySelected = toDate && (fromDate == null ? void 0 : fromDate.toDateString()) === toDate.toDateString();
    return /* @__PURE__ */ import_react22.default.createElement(Root2, {
        className: (0, import_classnames2.default)("sticky", {
            floats: isSticky
        }),
        ref
    }, !fromDate ? /* @__PURE__ */ import_react22.default.createElement(PleaseSelect, null, t("APPB2C.common.findTest.dates.pleaseSelect")) : isSingleDaySelected ? /* @__PURE__ */ import_react22.default.createElement(import_react22.default.Fragment, null, /* @__PURE__ */ import_react22.default.createElement("div", null, `${t("APPB2C.common.findTest.dates.selected")}:`, /* @__PURE__ */ import_react22.default.createElement("b", null, localeDateFunction(fromDate))), /* @__PURE__ */ import_react22.default.createElement(import_react_solas_ors317.LinkButton, {
        "data-testid": "clear-selection",
        onClick: onClear
    }, t("APPB2C.common.findTest.dates.clear"))) : /* @__PURE__ */ import_react22.default.createElement(import_react22.default.Fragment, null, /* @__PURE__ */ import_react22.default.createElement("div", null, `${t("APPB2C.common.findTest.dates.from")}:`, /* @__PURE__ */ import_react22.default.createElement("b", null, localeDateFunction(fromDate))), toDate ? /* @__PURE__ */ import_react22.default.createElement("div", null, ` ${t("APPB2C.common.findTest.dates.to")}:`, /* @__PURE__ */ import_react22.default.createElement("b", null, localeDateFunction(toDate))) : null, /* @__PURE__ */ import_react22.default.createElement(import_react_solas_ors317.LinkButton, {
        "data-testid": "clear-selection",
        onClick: onClear
    }, t("APPB2C.common.findTest.dates.clear"))));
};
var Root2 = import_styled10.default.div `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: #e5eff8;
  z-index: 2;
  padding: 10px 45px;
  margin: 0 -45px;

  &.sticky {
    position: sticky;
    top: 0;

    &.floats {
      box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.25);
    }
  }

  b {
    color: #000;
    font-size: 1.2em;
    margin-left: 8px;

    &:first-of-type {
      margin-right: 20px;
    }
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
  }

  @media (max-width: ${breakpoints["screen-md-min"]}px) {
    padding: 10px 20px;
    margin: 0 -20px;
  }
`;
var PleaseSelect = import_styled10.default.div `
  padding: 3px 0 2px;
`;

// src/components/calendar/styles.ts
var import_styled11 = __toESM(require("@emotion/styled"));
var CalendarWrapper = import_styled11.default.div `
  position: relative;
  background: #fff;
  border-radius: 6px;
  padding: 20px 20px 0;
  margin: 0 -40px 20px -40px;

  table {
    background-color: inherit !important;
  }

  @media screen and (max-width: 849px) {
    border-radius: 0;
    margin: 0;
  }

  .rdp {
    display: inline-block;
    font-size: 1rem;
  }

  .rdp-multiple_months {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    outline: none;
  }

  .rdp-months {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 0;
  }

  .rdp-month {
    display: table;
    border-spacing: 0;
    user-select: none;
    border-collapse: separate;
    border-spacing: 0 6px;
  }

  .rdp-nav_button {
    position: absolute;
    top: 45%;
    padding: 20px;
    border: none;
    border-radius: 50%;
    background-size: 45%;
    background-repeat: no-repeat;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    z-index: 1;

    &:hover {
      opacity: 0.8;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 6px rgba(1, 156, 238, 0.5);
    }

    &_previous {
      left: -20px;
      background-position: 8px center;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');
    }

    &_next {
      right: -20px;
      background-position: 13px center;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');
    }

    &:disabled {
      display: none;
    }

    > svg {
      display: none;
    }

    @media screen and (max-width: 567px) {
      top: 25%;
    }
  }

  .rdp-caption {
    display: table-caption;
    margin-bottom: 0.5em;
    padding: 0 0.5em;
    text-align: left;

    & > div {
      font-size: 1.15em;
      color: #54565a;
      font-weight: bold;

      [dir='rtl'] & {
        font-weight: 500;
      }
    }
  }

  .rdp-head {
    display: table-header-group;
    margin-top: 1em;
  }

  .rdp-head_row {
    display: table-row;
  }

  .rdp-head_cell {
    display: table-cell;
    padding: 0.5em;
    text-align: center;
    font-size: 0.875em;
    border-bottom: 1px solid #ccc;
    max-width: 39px;

    background: none;
  }

  .rdp-cell {
    padding: 6px 0 0;
  }

  .rdp-day {
    width: 100%;
    padding: 0.5em;
    line-height: 1.25em;
    vertical-align: middle;
    text-align: center;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0 6px rgba(1, 156, 238, 0.5);
    }

    &:disabled {
      color: #dce0e0;
      cursor: default;
    }

    &.available {
      color: #000;
      font-weight: bold;
      text-decoration: underline;

      [dir='rtl'] & {
        font-weight: 500;
      }
    }

    &.preSelected {
      background-color: #f0f8ff !important;
    }

    &.onlyFromSelected {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
  }

  .rdp:disabled .rdp-cell {
    cursor: default;
  }

  .rdp-day_selected:not(:disabled):not(.rdp-day_outside) {
    position: relative;

    background-color: #005cb9;
    color: #cbe5ff;

    &.available {
      color: #fff !important;
    }
  }

  .rdp-day_selected:not(:disabled):not(.rdp-day_outside):hover {
    background-color: darken (#005cb9, 5%);
    color: #fff;
  }

  .rdp-day:not(.rdp-day_disabled):not(.rdp-day_selected):not(.rdp-day_outside):hover {
    background-color: #f0f8ff;
    border-radius: 0;
  }

  .single .rdp-day_selected {
    border-radius: 50%;
  }

  .range .rdp-day_range_start {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  .range .rdp-day_range_end {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
`;

// src/components/calendar/CalendarRoot.tsx
var CalendarRoot = ({
    fromDate,
    toDate,
    availableDates,
    onChange,
    onClear,
    singleSelect,
    localeDateFunction,
    currentLang
}) => {
    const firstDate = (0, import_lodash_es.min)(availableDates);
    const lastDate = (0, import_lodash_es.max)(availableDates);
    const disabledDays = {
        before: firstDate,
        after: lastDate
    };
    const modifiers = {
        available: availableDates ? availableDates : [],
        preSelected: !toDate && fromDate && {
            after: fromDate
        } || [],
        onlyFromSelected: !toDate && fromDate ? fromDate : []
    };
    const modifiersClassNames = {
        available: "available",
        preSelected: "preSelected",
        onlyFromSelected: "onlyFromSelected"
    };
    const CommonDayPicker = (_a) => {
        var props = __objRest(_a, []);
        return /* @__PURE__ */ import_react23.default.createElement(import_react_day_picker.DayPicker, __spreadValues({
            locale: (0, import_ors_translations5.getDateFnLocale)(currentLang),
            dir: "ltr",
            numberOfMonths: 2,
            disabled: disabledDays,
            fromMonth: firstDate,
            toMonth: lastDate,
            defaultMonth: fromDate != null ? fromDate : firstDate,
            modifiers,
            modifiersClassNames,
            onDayClick: onChange
        }, props));
    };
    (0, import_react23.useEffect)(() => {
        const dayNames = Array.from(document.getElementsByClassName("rdp-head_cell"));
        const dayNumbers = Array.from(document.getElementsByClassName("rdp-tbody"));
        [...dayNames, ...dayNumbers].forEach((e) => e.classList.add("notranslate"));
    }, []);
    return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement(SelectionSummary, {
        fromDate,
        toDate,
        onClear,
        localeDateFunction
    }), /* @__PURE__ */ import_react23.default.createElement(CalendarWrapper, null, singleSelect ? /* @__PURE__ */ import_react23.default.createElement(CommonDayPicker, {
        mode: "single",
        className: "single",
        selected: fromDate
    }) : /* @__PURE__ */ import_react23.default.createElement(CommonDayPicker, {
        mode: "range",
        className: "range",
        selected: {
            from: fromDate,
            to: toDate
        }
    })));
};

// src/components/calendar/ChooseDates.tsx
var initRange = (datesRange) => {
    if (datesRange === void 0) {
        return {
            from: void 0,
            to: void 0
        };
    }
    return {
        from: import_luxon.DateTime.fromISO(datesRange[0]).toJSDate(),
        to: import_luxon.DateTime.fromISO(datesRange[1]).toJSDate()
    };
};
var ChooseDates = ({
    datesRange,
    singleSelect,
    onChange,
    availableDates = [],
    noExamsAvailableInSelectedDates,
    localeDateFunction,
    currentLang
}) => {
    var _a;
    const {
        t
    } = (0, import_react_i18next17.useTranslation)();
    const nonNullDatesRange = (datesRange == null ? void 0 : datesRange.some(Boolean)) ? datesRange : void 0;
    const [range, setRange] = (0, import_react24.useState)(initRange(nonNullDatesRange));
    const avDates = availableDates.map((e) => import_luxon.DateTime.fromISO(e).toJSDate());
    const firstDate = (0, import_lodash_es2.min)(avDates);
    const lastDate = (0, import_lodash_es2.max)(avDates);
    const firstAvailableDate = (0, import_lodash_es2.min)([firstDate, range.from]);
    const lastAvailableDate = (0, import_lodash_es2.max)([lastDate, range.to]);
    const handleDatesChange = (0, import_react24.useCallback)((day) => {
        day.setHours(0, 0, 0, 0);
        if (singleSelect) {
            setRange({
                from: day,
                to: day
            });
            onChange([day, day]);
        } else {
            const newRange = (0, import_react_day_picker2.addToRange)(day, range);
            newRange ? setRange(newRange) : setRange({
                from: void 0,
                to: void 0
            });
            const toDate = (newRange == null ? void 0 : newRange.to) || lastAvailableDate;
            newRange && newRange.from && toDate && onChange([newRange.from, toDate]);
        }
    }, [lastAvailableDate, onChange, range, singleSelect]);
    const onClear = (0, import_react24.useCallback)(() => {
        setRange(initRange(void 0));
        onChange(void 0);
    }, [onChange]);
    return /* @__PURE__ */ import_react24.default.createElement(import_react24.default.Fragment, null, /* @__PURE__ */ import_react24.default.createElement(CalendarRoot, {
        fromDate: range.from,
        toDate: range.to,
        availableDates: avDates,
        onChange: handleDatesChange,
        onClear,
        fromMonth: firstAvailableDate,
        toMonth: lastAvailableDate,
        month: (_a = range.from) != null ? _a : firstAvailableDate,
        singleSelect,
        localeDateFunction,
        currentLang
    }), noExamsAvailableInSelectedDates && /* @__PURE__ */ import_react24.default.createElement(import_react_solas5.Alert, {
        type: "warning"
    }, t("APPB2C.common.findTest.dates.noDatesSelected")));
};

// src/components/calendar/ShowDatesRadios.tsx
var import_react25 = __toESM(require("react"));
var import_react_i18next18 = require("react-i18next");
var import_react_solas_ors318 = require("@britishcouncil/react-solas-ors3");
var ShowDatesRadios = ({
    showAllDates,
    chooseDatesDisabled,
    onChange
}) => {
    const {
        t
    } = (0, import_react_i18next18.useTranslation)();
    return /* @__PURE__ */ import_react25.default.createElement("div", {
        className: "form-group"
    }, /* @__PURE__ */ import_react25.default.createElement(import_react_solas_ors318.BcRadio, {
        checkedValue: 0,
        value: Number(showAllDates),
        disabled: chooseDatesDisabled,
        name: "chooseDates",
        "data-testid": "choose-dates",
        onChange: () => onChange(false)
    }, t("APPB2C.common.findTest.dates.showDateRange")), /* @__PURE__ */ import_react25.default.createElement(import_react_solas_ors318.BcRadio, {
        checkedValue: 1,
        value: Number(showAllDates),
        name: "allDates",
        "data-testid": "all-dates",
        onChange: () => onChange(true)
    }, t("APPB2C.common.findTest.dates.showAll")));
};

// src/components/calendar/CustomCalendar.tsx
var CustomCalendar = ({
    showAllDates,
    chooseDatesDisabled,
    handleAllDatesToggle,
    datesRange,
    availableDates,
    onDatesChange,
    localeDateFunction,
    noExamsAvailableInSelectedDates,
    singleSelect,
    currentLang
}) => {
    const {
        t
    } = (0, import_react_i18next19.useTranslation)();
    return /* @__PURE__ */ import_react26.default.createElement(import_react26.default.Fragment, null, /* @__PURE__ */ import_react26.default.createElement("h2", {
        "data-testid": "subtitle"
    }, t("APPB2C.common.findTest.dates.title")), handleAllDatesToggle && /* @__PURE__ */ import_react26.default.createElement(ShowDatesRadios, {
        showAllDates,
        chooseDatesDisabled,
        onChange: handleAllDatesToggle
    }), !showAllDates && /* @__PURE__ */ import_react26.default.createElement("div", {
        className: "form-group"
    }, /* @__PURE__ */ import_react26.default.createElement(ChooseDates, {
        datesRange,
        singleSelect,
        availableDates,
        onChange: onDatesChange,
        localeDateFunction,
        noExamsAvailableInSelectedDates,
        currentLang
    })));
};

// src/components/childConsent/ChildConsent.tsx
var import_react30 = __toESM(require("react"));
var import_react_i18next20 = require("react-i18next");
var import_react_solas_ors322 = require("@britishcouncil/react-solas-ors3");

// src/components/childConsent/model.ts
var ChildAfterTest = /* @__PURE__ */ ((ChildAfterTest2) => {
    ChildAfterTest2["NotSet"] = "";
    ChildAfterTest2["CanLeaveOnItsOwn"] = "1";
    ChildAfterTest2["IWillPickHim"] = "2";
    ChildAfterTest2["SomeoneElseWillPick"] = "3";
    return ChildAfterTest2;
})(ChildAfterTest || {});

// src/components/childConsent/ChildAfterTestRadios.tsx
var import_react27 = __toESM(require("react"));
var import_react_solas_ors319 = require("@britishcouncil/react-solas-ors3");
var ChildConsentRadios = (_a) => {
    var _b = _a,
        {
            i18n
        } = _b,
        props = __objRest(_b, ["i18n"]);
    return /* @__PURE__ */ import_react27.default.createElement("div", {
        className: "form-group"
    }, /* @__PURE__ */ import_react27.default.createElement("label", null, i18n.context), /* @__PURE__ */ import_react27.default.createElement(import_react_solas_ors319.RadioGroup, __spreadProps(__spreadValues({}, props), {
        radios: [{
                checkValue: "1" /* CanLeaveOnItsOwn */ ,
                label: i18n.option1,
                testId: "can-leave-on-its-own"
            },
            {
                checkValue: "2" /* IWillPickHim */ ,
                label: i18n.option2,
                testId: "i-will-pick-him"
            },
            {
                checkValue: "3" /* SomeoneElseWillPick */ ,
                label: i18n.option3,
                testId: "someone-else"
            }
        ]
    })));
};

// src/components/childConsent/GuardiansList.tsx
var import_react29 = __toESM(require("react"));
var import_formik = require("formik");
var import_react_solas_ors321 = require("@britishcouncil/react-solas-ors3");

// src/components/childConsent/GuardianForm.tsx
var import_react28 = __toESM(require("react"));
var import_styled12 = __toESM(require("@emotion/styled"));
var import_react_solas_ors320 = require("@britishcouncil/react-solas-ors3");
var GuardianForm = ({
    title,
    guardian,
    relationships,
    canRemove,
    onRemove,
    i18n,
    isFirstNameSurnameOrder
}) => {
    return /* @__PURE__ */ import_react28.default.createElement(import_react28.default.Fragment, null, canRemove && /* @__PURE__ */ import_react28.default.createElement(import_react_solas_ors320.Divider, null), /* @__PURE__ */ import_react28.default.createElement("h2", null, canRemove && /* @__PURE__ */ import_react28.default.createElement(StyledRemoveBtn, {
        type: "button",
        className: "pull-right",
        onClick: onRemove
    }, i18n.remove), title), isFirstNameSurnameOrder && /* @__PURE__ */ import_react28.default.createElement(import_react_solas_ors320.TextField, __spreadValues({
        inputDir: "ltr",
        "data-testid": "guardian-first-name",
        label: i18n.firstName
    }, guardian.firstName)), /* @__PURE__ */ import_react28.default.createElement(import_react_solas_ors320.LastNameField, __spreadProps(__spreadValues({
        inputDir: "ltr"
    }, guardian.surname), {
        label: i18n.lastName,
        noLastNameLabel: i18n.noLastName,
        dataTestId: "guardian-last-name"
    })), !isFirstNameSurnameOrder && /* @__PURE__ */ import_react28.default.createElement(import_react_solas_ors320.TextField, __spreadValues({
        inputDir: "ltr",
        "data-testid": "guardian-first-name",
        label: i18n.firstName
    }, guardian.firstName)), /* @__PURE__ */ import_react28.default.createElement(SelectField, __spreadValues({
        label: i18n.relationship,
        options: (relationships == null ? void 0 : relationships.map((e) => ({
            id: e.name || "",
            name: e.name || ""
        }))) || []
    }, guardian.relationship)), /* @__PURE__ */ import_react28.default.createElement(import_react_solas_ors320.TextField, __spreadValues({
        "data-testid": "guardian-phone",
        label: i18n.phone,
        subnote: i18n.phoneNote
    }, guardian.telephone)));
};
var StyledRemoveBtn = (0, import_styled12.default)(import_react_solas_ors320.LinkButton)
`
  font-size: 18px;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
`;

// src/components/childConsent/GuardiansList.tsx
var GuardiansList = ({
    formik,
    pickups,
    relationships,
    i18n,
    isFirstNameSurnameOrder
}) => {
    return /* @__PURE__ */ import_react29.default.createElement(import_formik.FormikProvider, {
        value: formik
    }, /* @__PURE__ */ import_react29.default.createElement(import_formik.FieldArray, {
        name: "pickups",
        validateOnChange: false,
        render: (arrayHelper) => /* @__PURE__ */ import_react29.default.createElement(import_react29.default.Fragment, null, pickups.length > 0 && pickups.map((g, index) => /* @__PURE__ */ import_react29.default.createElement(GuardianForm, {
            key: index,
            title: index === 0 ? i18n.title1 : i18n.title2,
            guardian: g,
            canRemove: index > 0,
            onRemove: () => arrayHelper.remove(index),
            relationships,
            i18n,
            isFirstNameSurnameOrder
        })), pickups.length < 2 && /* @__PURE__ */ import_react29.default.createElement(import_react_solas_ors321.LinkButton, {
            onClick: () => arrayHelper.push({
                firstName: "",
                relationship: "",
                surname: "",
                telephone: ""
            })
        }, i18n.add))
    }));
};

// src/components/childConsent/ChildConsent.tsx
var ChildConsent = (_a) => {
    var _b = _a,
        {
            fields,
            formik,
            childName,
            familyRelationships,
            childProtectionPolicyUrl,
            i18n,
            children,
            isFirstNameSurnameOrder
        } = _b,
        props = __objRest(_b, [
            "fields",
            "formik",
            "childName",
            "familyRelationships",
            "childProtectionPolicyUrl",
            "i18n",
            "children",
            "isFirstNameSurnameOrder"
        ]);
    const {
        t
    } = (0, import_react_i18next20.useTranslation)();
    const i18nDefault = {
        pleaseNote: t("APPB2C.common.basic.pleaseNote"),
        warning: t("APPB2C.registration.testTaker.childConsent.warning"),
        somebodyElseNote: t("APPB2C.registration.testTaker.childConsent.somebodyElse.note"),
        somebodyElseConfirm: t("APPB2C.registration.testTaker.childConsent.somebodyElse.confirmCheckbox"),
        somebodyElseConfirmText1: t("APPB2C.registration.testTaker.childConsent.somebodyElse.confirmText.1"),
        somebodyElseConfirmText2: t("APPB2C.registration.testTaker.childConsent.somebodyElse.confirmText.2"),
        somebodyElsePolicy: t("APPB2C.registration.testTaker.childConsent.somebodyElse.policy"),
        radios: {
            context: t("APPB2C.registration.testTaker.childConsent.context"),
            option1: t("APPB2C.registration.testTaker.childConsent.options.1"),
            option2: t("APPB2C.registration.testTaker.childConsent.options.2"),
            option3: t("APPB2C.registration.testTaker.childConsent.options.3")
        },
        guardian: {
            title1: t("APPB2C.registration.testTaker.childConsent.somebodyElse.title.1"),
            title2: t("APPB2C.registration.testTaker.childConsent.somebodyElse.title.2"),
            add: t("APPB2C.registration.testTaker.childConsent.somebodyElse.add"),
            remove: t("APPB2C.common.general.remove"),
            firstName: t("APPB2C.common.startPage.missing.ttData.firstName"),
            lastName: t("APPB2C.common.startPage.missing.ttData.lastName"),
            noLastName: t("APPB2C.registration.testTaker.childConsent.somebodyElse.noLastName"),
            relationship: t("APPB2C.registration.testTaker.childConsent.somebodyElse.relationship"),
            phone: t("APPB2C.registration.testTaker.childConsent.somebodyElse.phone"),
            phoneNote: t("APPB2C.registration.testTaker.childConsent.somebodyElse.phoneNote")
        }
    };
    const trans = __spreadValues(__spreadValues({}, i18nDefault), i18n);
    return /* @__PURE__ */ import_react30.default.createElement("div", __spreadValues({}, props), /* @__PURE__ */ import_react30.default.createElement(import_react_solas_ors322.Quote, {
        intent: "warning",
        title: trans.pleaseNote
    }, trans.warning), children && /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, children, " ", /* @__PURE__ */ import_react30.default.createElement(import_react_solas_ors322.Divider, null)), /* @__PURE__ */ import_react30.default.createElement(ChildConsentRadios, __spreadProps(__spreadValues({}, fields.childAfterTest), {
        i18n: trans.radios
    })), fields.childAfterTest.value === "3" /* SomeoneElseWillPick */ && /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, /* @__PURE__ */ import_react30.default.createElement("p", {
        className: "small"
    }, trans.somebodyElseNote), /* @__PURE__ */ import_react30.default.createElement(GuardiansList, {
        formik,
        pickups: fields.pickups,
        relationships: familyRelationships,
        i18n: trans.guardian,
        isFirstNameSurnameOrder
    }), /* @__PURE__ */ import_react30.default.createElement(import_react_solas_ors322.Divider, null), trans.somebodyElseConfirmText1, " ", /* @__PURE__ */ import_react30.default.createElement("b", null, childName), " ", trans.somebodyElseConfirmText2, /* @__PURE__ */ import_react30.default.createElement(import_react_solas_ors322.TnCCheckbox, __spreadValues({}, fields.confirmGuardians), /* @__PURE__ */ import_react30.default.createElement("b", null, trans.somebodyElseConfirm)), /* @__PURE__ */ import_react30.default.createElement(ExternalLink, {
        href: childProtectionPolicyUrl != null ? childProtectionPolicyUrl : ""
    }, trans.somebodyElsePolicy)));
};

// src/components/childConsent/validation.ts
var yup4 = __toESM(require("yup"));
var import_i18next5 = __toESM(require("i18next"));
var defaultFamilyRelationship = "Other";
var pickupSchema = () => yup4.object().shape({
    firstName: validationRulesI18n.firstName(),
    surname: validationRulesI18n.lastName(),
    relationship: validationRulesI18n.requiredString(),
    telephone: validationRulesI18n.mobileNumber()
});
var getChildConsentFormSchema = () => yup4.object().shape({
    childAfterTest: validationRulesI18n.requiredString(),
    confirmGuardians: yup4.boolean().when("childAfterTest", (childAfterTest, schema) => {
        return childAfterTest === "3" /* SomeoneElseWillPick */ ? schema.required(import_i18next5.default.t("APPB2C.common.basic.forms.requiredMessage")).oneOf([true], import_i18next5.default.t("APPB2C.common.basic.forms.requiredMessage")) : schema;
    }),
    pickups: yup4.array().when("childAfterTest", (childAfterTest, schema) => {
        return childAfterTest === "3" /* SomeoneElseWillPick */ ? schema.of(pickupSchema()) : schema;
    })
});
var getChildConsentInitialValues = (pickups, childAfterTest) => ({
    childAfterTest: childAfterTest || "" /* NotSet */ ,
    confirmGuardians: false,
    pickups: getPickups(pickups || [])
});

function getPickups(pickups) {
    if (pickups.length !== 0) {
        return pickups.map((e) => ({
            firstName: e.firstName || "",
            surname: e.surname || "",
            telephone: e.telephone || "",
            relationship: e.relationship || ""
        }));
    }
    return [{
        firstName: "",
        surname: "",
        telephone: "",
        relationship: ""
    }];
}
var preparePickups = (childAfterTest, pickups, parent) => {
    switch (childAfterTest) {
        default: return [];
        case "2" /* IWillPickHim */ :
                return parent ? [{
                id: 0,
                registrationId: 0,
                firstName: parent == null ? void 0 : parent.firstName,
                surname: parent == null ? void 0 : parent.surname,
                relationship: (parent == null ? void 0 : parent.familyRelationship) || defaultFamilyRelationship,
                telephone: parent == null ? void 0 : parent.mobile
            }] : [];
        case "3" /* SomeoneElseWillPick */ :
                return pickups.filter((e) => !!e.relationship).map((e) => __spreadProps(__spreadValues({}, e), {
                id: 0,
                registrationId: 0
            }));
    }
};

// src/components/crowdin/CrowdinContext.tsx
var import_react31 = __toESM(require("react"));
var import_ors_translations6 = require("ors-translations");

// src/components/crowdin/scripts.ts
var scripts = async (project) => {
    const windowCrowdin = window;
    windowCrowdin._jipt = [];
    windowCrowdin._jipt.push(["project", project]);
    windowCrowdin._jipt.push(["domain", "britishcouncil"]);
    const script = document.createElement("script");
    script.setAttribute("src", "//cdn.crowdin.com/jipt/jipt.js");
    document.body.appendChild(script);
};

// src/components/crowdin/CrowdinContext.tsx
var CrowdinContext = ({
    isProd,
    project
}) => {
    const lang = (0, import_ors_translations6.useSelectedLang)();
    const show = !isProd && lang === import_ors_translations6.pseudoLanguage && !!project;
    const loadScritpts = async () => {
        await scripts(project);
    };
    (0, import_react31.useEffect)(() => {
        show && loadScritpts();
    }, [project]);
    return /* @__PURE__ */ import_react31.default.createElement(import_react31.default.Fragment, null);
};

// src/components/formattedPrice/index.tsx
var import_react32 = __toESM(require("react"));
var import_react_intl = require("react-intl");
var FormattedPrice = ({
    value,
    currencyIsoCode,
    className,
    showFraction = false,
    intl
}) => {
    if (value === void 0) {
        return null;
    }
    return /* @__PURE__ */ import_react32.default.createElement(import_react_intl.RawIntlProvider, {
        value: intl
    }, /* @__PURE__ */ import_react32.default.createElement("span", {
        className
    }, /* @__PURE__ */ import_react32.default.createElement(import_react_intl.FormattedNumber, {
        value,
        minimumFractionDigits: showFraction ? 2 : Number.isInteger(value) ? 0 : 2,
        maximumFractionDigits: 2
    }), " ", currencyIsoCode));
};

// src/components/marketingPreferences/validation.ts
var yup5 = __toESM(require("yup"));
var import_i18next6 = __toESM(require("i18next"));
var import_react_forms4 = require("@britishcouncil/react-forms");

// src/components/marketingPreferences/model.ts
var CandidateMarketingPreferencesDefault = /* @__PURE__ */ ((CandidateMarketingPreferencesDefault2) => {
    CandidateMarketingPreferencesDefault2[CandidateMarketingPreferencesDefault2["NotSpecified"] = -1] = "NotSpecified";
    return CandidateMarketingPreferencesDefault2;
})(CandidateMarketingPreferencesDefault || {});
var CandidateMarketingPreferences = /* @__PURE__ */ ((CandidateMarketingPreferences2) => {
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["None"] = 0] = "None";
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["BcOnly"] = 1] = "BcOnly";
    CandidateMarketingPreferences2[CandidateMarketingPreferences2["BcAndThird"] = 2] = "BcAndThird";
    return CandidateMarketingPreferences2;
})(CandidateMarketingPreferences || {});
var CandidateMarketingPreferencesEnum = __spreadValues(__spreadValues({}, CandidateMarketingPreferencesDefault), CandidateMarketingPreferences);

// src/components/marketingPreferences/validation.ts
var marketingPrefsValidation = () => yup5.number().required(import_i18next6.default.t("APPB2C.common.basic.forms.requiredMessage")).oneOf(import_react_forms4.validationRules.enumToWhitelist(CandidateMarketingPreferencesEnum, CandidateMarketingPreferencesEnum.NotSpecified), import_i18next6.default.t("APPB2C.common.basic.forms.requiredMessage"));

// src/components/marketingPreferences/MarketingPreferences.tsx
var import_react34 = __toESM(require("react"));
var import_react_i18next21 = require("react-i18next");
var import_styled14 = __toESM(require("@emotion/styled"));
var import_react_solas_ors323 = require("@britishcouncil/react-solas-ors3");
var import_ors_utils3 = require("ors-utils");

// src/components/HtmlTextRaw.tsx
var import_react33 = __toESM(require("react"));
var import_dompurify = __toESM(require("dompurify"));
var import_styled13 = __toESM(require("@emotion/styled"));
var HtmlTextRaw = ({
    htmlText,
    className
}) => {
    var sanitizedMsg = (0, import_react33.useMemo)(() => ({
        __html: import_dompurify.default.sanitize(htmlText || "", {
            ADD_ATTR: ["target"]
        })
    }), [htmlText]);
    return /* @__PURE__ */ import_react33.default.createElement(HtmlText, {
        dangerouslySetInnerHTML: sanitizedMsg,
        className: className ? className : void 0
    });
};
var HtmlText = import_styled13.default.span `
  ul li {
    list-style: initial;
    margin-left: 20px;

    ul li {
      list-style: circle;
    }
  }
  ol li {
    list-style: number;
    margin-left: 20px;
  }
`;

// src/components/marketingPreferences/MarketingPreferences.tsx
var MarketingPreferences = (_a) => {
    var _b = _a,
        {
            formProps,
            preferences,
            i18n,
            hideOptions = false,
            noticeSummary,
            noticeFull
        } = _b,
        props = __objRest(_b, [
            "formProps",
            "preferences",
            "i18n",
            "hideOptions",
            "noticeSummary",
            "noticeFull"
        ]);
    const {
        t
    } = (0, import_react_i18next21.useTranslation)();
    const i18nDefault = {
        bcOnly: (0, import_ors_utils3.removeHtmlTags)(preferences == null ? void 0 : preferences.marketingPreferenceOrganisationOnly) || t("APPB2C.common.startPage.missing.marketing.opts.BcOnly"),
        bcAndThirdParties: (0, import_ors_utils3.removeHtmlTags)(preferences == null ? void 0 : preferences.marketingPreferenceOrganisationAndThird) || t("APPB2C.common.startPage.missing.marketing.opts.BcAndThirdParties"),
        doNotSend: (0, import_ors_utils3.removeHtmlTags)(preferences == null ? void 0 : preferences.marketingPreferenceNone) || t("APPB2C.common.startPage.missing.marketing.opts.DoNotSend"),
        main: t("APPB2C.common.startPage.missing.marketing.notes.main"),
        full1: t("APPB2C.common.startPage.missing.marketing.notes.full1"),
        full2: t("APPB2C.common.startPage.missing.marketing.notes.full2"),
        link: t("APPB2C.common.startPage.missing.marketing.notes.link"),
        full3: t("APPB2C.common.startPage.missing.marketing.notes.full3"),
        show: t("APPB2C.common.basic.expando.show"),
        collapse: t("APPB2C.common.basic.expando.collapse")
    };
    const trans = __spreadValues(__spreadValues({}, i18nDefault), i18n);
    return /* @__PURE__ */ import_react34.default.createElement(StyledDiv, __spreadValues({}, props), !hideOptions && /* @__PURE__ */ import_react34.default.createElement(import_react_solas_ors323.RadioGroup, __spreadProps(__spreadValues({}, formProps), {
        radios: [{
                checkValue: 1 /* BcOnly */ ,
                label: trans.bcOnly,
                testId: "marketing-bc-only"
            },
            {
                checkValue: 2 /* BcAndThird */ ,
                label: trans.bcAndThirdParties,
                testId: "marketing-third-parties"
            },
            {
                checkValue: 0 /* None */ ,
                label: trans.doNotSend,
                testId: "marketing-do-not-send"
            }
        ]
    })), /* @__PURE__ */ import_react34.default.createElement(HtmlTextRaw, {
        className: "small",
        htmlText: noticeSummary || trans.main
    }), /* @__PURE__ */ import_react34.default.createElement(import_react_solas_ors323.ExpandoText, {
        collapseText: trans.collapse,
        expandText: trans.show,
        "data-testid": "marketing-preferences-notice"
    }, noticeFull ? /* @__PURE__ */ import_react34.default.createElement(HtmlTextRaw, {
        className: "small",
        htmlText: noticeFull
    }) : /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, /* @__PURE__ */ import_react34.default.createElement("p", {
        className: "small"
    }, trans.full1), /* @__PURE__ */ import_react34.default.createElement("p", {
        className: "small"
    }, trans.full2, " ", /* @__PURE__ */ import_react34.default.createElement(ExternalLink, {
        href: "https://takeielts.britishcouncil.org/contact"
    }, trans.link)), /* @__PURE__ */ import_react34.default.createElement("p", {
        className: "small"
    }, trans.full3))));
};
var StyledDiv = import_styled14.default.div `
  p {
    margin-bottom: 0.5em;
  }
  .expando-control {
    font-size: 0.9em;
  }
`;

// src/components/missingDataModal/MissingDataModal.tsx
var import_react35 = __toESM(require("react"));
var import_react36 = require("react");
var import_react_router_dom2 = require("react-router-dom");
var import_react_i18next22 = require("react-i18next");
var import_styled15 = __toESM(require("@emotion/styled"));
var import_react_solas6 = require("@britishcouncil/react-solas");
var import_react_forms5 = require("@britishcouncil/react-forms");
var import_react_solas_ors324 = require("@britishcouncil/react-solas-ors3");
var import_react_solas_ors325 = require("@britishcouncil/react-solas-ors3");

// src/components/missingDataModal/validation.ts
var yup6 = __toESM(require("yup"));
var import_luxon2 = require("luxon");
var getInitialValues = (profile) => {
    var _a, _b, _c;
    return {
        firstName: (_a = profile == null ? void 0 : profile.firstName) != null ? _a : "",
        lastName: (_b = profile == null ? void 0 : profile.surname) != null ? _b : "",
        dateOfBirth: (_c = profile == null ? void 0 : profile.dob) != null ? _c : "",
        acceptIeltsTermsAndConditions: false
    };
};
var formSchema2 = () => yup6.object().shape({
    firstName: validationRulesI18n.firstName(),
    lastName: validationRulesI18n.lastName(),
    dateOfBirth: validationRulesI18n.dateOfBirth({
        maxDate: import_luxon2.DateTime.now().minus({
            years: 18
        }).toJSDate()
    }),
    acceptIeltsTermsAndConditions: validationRulesI18n.acceptTermsAndConditions()
});

// src/components/missingDataModal/MissingDataModal.tsx
var MissingDataModal = ({
    show,
    testTaker,
    onSubmit,
    onCancel,
    dataTestId,
    isIol,
    termsLink,
    termsLinkIol,
    isTtp
}) => {
    const {
        t
    } = (0, import_react_i18next22.useTranslation)();
    const i18n = {
        title: t("APPB2C.common.startPage.missing.ttData.title"),
        line1: t("APPB2C.common.startPage.missing.ttData.line1"),
        line2: t("APPB2C.common.startPage.missing.ttData.line2"),
        line3: t("APPB2C.common.startPage.missing.ttData.line3"),
        cta: t("APPB2C.common.startPage.missing.ttData.cta"),
        cancel: t("APPB2C.common.startPage.missing.cancel"),
        firstName: t("APPB2C.common.startPage.missing.ttData.firstName"),
        lastName: t("APPB2C.common.startPage.missing.ttData.lastName"),
        dob: t("APPB2C.common.startPage.missing.ttData.dob"),
        noLastNameLabel: t("APPB2C.common.startPage.missing.ttData.noLastName")
    };
    const {
        formik,
        fields
    } = (0, import_react_forms5.useForm)(formSchema2(), getInitialValues(testTaker), onSubmit);
    const goAboveCookieBanner = (0, import_react36.useCallback)(() => {
        setTimeout(() => {
            var _a;
            const modalParent = (_a = document.getElementById("react-aria-modal-dialog")) == null ? void 0 : _a.parentElement;
            modalParent == null ? void 0 : modalParent.style.setProperty("z-index", "2147483646");
        }, 0);
    }, []);
    return /* @__PURE__ */ import_react35.default.createElement(Modal, {
        show,
        title: i18n.title,
        onExit: () => null,
        footer: /* @__PURE__ */ import_react35.default.createElement(Footer2, {
            onSubmit: formik.handleSubmit,
            i18n,
            onCancel
        }),
        showHideLink: false,
        onShow: goAboveCookieBanner,
        dataTestId
    }, /* @__PURE__ */ import_react35.default.createElement(ModalBody, null, /* @__PURE__ */ import_react35.default.createElement("p", null, i18n.line1), /* @__PURE__ */ import_react35.default.createElement("p", null, i18n.line2), /* @__PURE__ */ import_react35.default.createElement("p", null, i18n.line3), /* @__PURE__ */ import_react35.default.createElement(StyledForm, null, /* @__PURE__ */ import_react35.default.createElement(import_react_solas_ors325.TextField, __spreadValues({
        inputDir: "ltr",
        label: i18n.firstName
    }, fields.firstName)), /* @__PURE__ */ import_react35.default.createElement(import_react_solas_ors325.LastNameField, __spreadValues({
        inputDir: "ltr",
        label: i18n.lastName,
        noLastNameLabel: i18n.noLastNameLabel
    }, fields.lastName)), /* @__PURE__ */ import_react35.default.createElement(DateField, __spreadValues({
        label: i18n.dob,
        mode: "dob"
    }, fields.dateOfBirth)), /* @__PURE__ */ import_react35.default.createElement(import_react_solas_ors324.Divider, null), /* @__PURE__ */ import_react35.default.createElement(import_react_solas_ors324.TnCCheckbox, __spreadValues({}, fields.acceptIeltsTermsAndConditions), /* @__PURE__ */ import_react35.default.createElement(import_react_i18next22.Trans, {
        t,
        i18nKey: "APPB2C.cj.personalDetails.tncs.agreement"
    }, "I agree to the account registration", isIol ? /* @__PURE__ */ import_react35.default.createElement(ExternalLink, {
        href: termsLinkIol,
        "data-testid": "tncs"
    }, "terms & conditions") : isTtp ? /* @__PURE__ */ import_react35.default.createElement(ExternalLink, {
        href: termsLink,
        "data-testid": "tncs"
    }, "terms & conditions") : /* @__PURE__ */ import_react35.default.createElement(import_react_router_dom2.Link, {
        to: termsLink,
        target: "_blank",
        "data-testid": "tncs"
    }, "terms & conditions"))))));
};
var Footer2 = ({
    i18n,
    onSubmit,
    onCancel
}) => {
    return /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement(import_react_solas6.Button, {
        intent: "primary",
        onClick: onSubmit,
        type: "button"
    }, i18n.cta), /* @__PURE__ */ import_react35.default.createElement(import_react_solas_ors325.LinkButton, {
        "data-testid": "close",
        onClick: onCancel
    }, i18n.cancel));
};
var StyledForm = import_styled15.default.form `
  margin-top: 1rem;
  background-color: #e5eff8;
  padding: 20px 20px 1px 20px;
  border-radius: 5px;
`;
var ModalBody = import_styled15.default.div `
  /* Keep the same size as login modal */
  max-width: 540px;
`;

// src/components/mobileFormField/MobileField.tsx
var import_react37 = __toESM(require("react"));
var import_react_i18next23 = require("react-i18next");
var import_intl_tel_input = __toESM(require("intl-tel-input"));
var import_styled16 = __toESM(require("@emotion/styled"));
var import_react_forms6 = require("@britishcouncil/react-forms");
var import_react_solas_ors326 = require("@britishcouncil/react-solas-ors3");
var initOptions = {
    utilsScript: "https://bccdn.britishcouncil.org/scripts/3rd-party/intl-tel-input/utils.js",
    autoPlaceholder: "off",
    preferredCountries: [],
    separateDialCode: true,
    autoHideDialCode: false
};
var removeDialCode = (dial = "", value = "") => {
    return dial ? value.replace(`+${dial}`, "") : value;
};
var getItiInstance = (id) => {
    const el = document.getElementById(id);
    const instance = el ? window.intlTelInputGlobals.getInstance(el) : void 0;
    return {
        el,
        instance
    };
};
var MobileField = (_a) => {
    var _b = _a,
        {
            options,
            id,
            showColon,
            bypassValidation,
            bypassValidationLabel
        } = _b,
        props = __objRest(_b, [
            "options",
            "id",
            "showColon",
            "bypassValidation",
            "bypassValidationLabel"
        ]);
    const {
        t
    } = (0, import_react_i18next23.useTranslation)();
    const [fieldProps, inputProps] = (0, import_react_solas_ors326.getFieldProps)(props);
    let itiInstance;
    const onCountryChange = (0, import_react37.useCallback)(() => {
        const value = removeDialCode(itiInstance == null ? void 0 : itiInstance.getSelectedCountryData().dialCode, itiInstance == null ? void 0 : itiInstance.getNumber());
        inputProps.onChange(value);
    }, [itiInstance, inputProps]);
    (0, import_react37.useEffect)(() => {
        const {
            el,
            instance
        } = getItiInstance(id);
        itiInstance = instance;
        if (!itiInstance && el) {
            itiInstance = (0, import_intl_tel_input.default)(el, __spreadValues(__spreadValues({}, initOptions), options));
            el.addEventListener("countrychange", onCountryChange);
            el.addEventListener("change", onNumberChange);
        }
        return () => {
            itiInstance == null ? void 0 : itiInstance.destroy();
        };
    }, [id]);
    (0, import_react37.useEffect)(() => {
        const {
            instance
        } = getItiInstance(id);
        const dial = instance == null ? void 0 : instance.getSelectedCountryData().dialCode;
        setTimeout(() => {
            inputProps.value.includes(`+${dial}`) && inputProps.onChange(removeDialCode(dial, inputProps.value));
        }, 10);
    }, [inputProps, inputProps.value]);
    const showValidationBypassLink = !!bypassValidation && !!fieldProps.error && fieldProps.touched && !!inputProps.value;
    const onNumberChange = (0, import_react37.useCallback)(() => {
        bypassValidation && bypassValidation(false);
    }, [bypassValidation]);
    const handleBypassValidation = (e) => {
        e.preventDefault();
        bypassValidation && bypassValidation(true);
    };
    return /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, /* @__PURE__ */ import_react37.default.createElement(import_react_solas_ors326.Field, __spreadProps(__spreadValues({}, fieldProps), {
        id,
        showColon
    }), /* @__PURE__ */ import_react37.default.createElement(import_react_forms6.TextInput, __spreadValues({
        id,
        className: "form-control",
        type: "tel"
    }, inputProps))), showValidationBypassLink && /* @__PURE__ */ import_react37.default.createElement(ValidationBypassLink, {
        onClick: handleBypassValidation
    }, bypassValidationLabel != null ? bypassValidationLabel : t("APPB2C.common.basic.forms.mobileBypass")));
};
var ValidationBypassLink = import_styled16.default.button `
  display: block;
  margin: -30px 0 25px 0;
  padding: 0;
  font-size: 0.8em;
  border: none;
  background: none;
  color: #005cb9;

  &:hover {
    text-decoration: underline;
    color: black;
  }
`;

// src/components/orderAcknowledgement/validation.ts
var yup7 = __toESM(require("yup"));
var import_i18next7 = __toESM(require("i18next"));
var import_react_forms7 = require("@britishcouncil/react-forms");

// src/components/orderAcknowledgement/model.ts
var EnabledOption = /* @__PURE__ */ ((EnabledOption2) => {
    EnabledOption2[EnabledOption2["Disabled"] = 1] = "Disabled";
    EnabledOption2[EnabledOption2["Enabled"] = 2] = "Enabled";
    EnabledOption2[EnabledOption2["EnabledAndMandatory"] = 3] = "EnabledAndMandatory";
    return EnabledOption2;
})(EnabledOption || {});
var Acknowledgements = /* @__PURE__ */ ((Acknowledgements2) => {
    Acknowledgements2[Acknowledgements2["Myself"] = 0] = "Myself";
    Acknowledgements2[Acknowledgements2["AnotherPerson"] = 1] = "AnotherPerson";
    Acknowledgements2[Acknowledgements2["Company"] = 2] = "Company";
    return Acknowledgements2;
})(Acknowledgements || {});
var InvoiceTypes = /* @__PURE__ */ ((InvoiceTypes2) => {
    InvoiceTypes2[InvoiceTypes2["DuplicatePaper"] = 3] = "DuplicatePaper";
    InvoiceTypes2[InvoiceTypes2["Triplicate"] = 4] = "Triplicate";
    InvoiceTypes2[InvoiceTypes2["DuplicateElectronic"] = 5] = "DuplicateElectronic";
    InvoiceTypes2[InvoiceTypes2["Donate"] = 6] = "Donate";
    return InvoiceTypes2;
})(InvoiceTypes || {});
var InvoiceSubtypes = /* @__PURE__ */ ((InvoiceSubtypes2) => {
    InvoiceSubtypes2["MobileBarcode"] = "mb";
    InvoiceSubtypes2["CitizenDigitalCertificate"] = "cdc";
    return InvoiceSubtypes2;
})(InvoiceSubtypes || {});
var InvoiceConsents = /* @__PURE__ */ ((InvoiceConsents2) => {
    InvoiceConsents2["Yes"] = "yes";
    InvoiceConsents2["No"] = "no";
    return InvoiceConsents2;
})(InvoiceConsents || {});

// src/components/orderAcknowledgement/validation.ts
var ackFormInitValue = {
    acknowledgement: 0 /* Myself */ ,
    receiver: {
        firstName: "",
        lastName: "",
        companyName: "",
        taxNumber1: "",
        taxNumber2: "",
        mobileNumber: "",
        email: "",
        postalAddress1: "",
        postalAddress2: "",
        postalAddress3: "",
        country: "",
        town: "",
        postcode: ""
    },
    invoiceConsent: "",
    invoiceSubtype: "mb" /* MobileBarcode */
};
var acknowledgement = (showInvoiceInfo = false) => yup7.number().required().oneOf(import_react_forms7.validationRules.enumToWhitelist(showInvoiceInfo ? InvoiceTypes : Acknowledgements), import_i18next7.default.t("APPB2C.common.basic.forms.requiredMessage"));
var invoiceConsent = (showInvoiceInfo = false) => {
    const shape = yup7.string();
    return showInvoiceInfo ? shape.oneOf(["yes" /* Yes */ , "no" /* No */ ]).required(import_i18next7.default.t("APPB2C.common.basic.forms.requiredMessage")) : shape;
};
var genericReceiver = () => yup7.object().shape({
    mobileNumber: validationRulesI18n.mobileNumber(),
    email: validationRulesI18n.email(),
    postalAddress1: validationRulesI18n.addressField().required(import_i18next7.default.t("APPB2C.common.basic.forms.requiredMessage")),
    postalAddress2: validationRulesI18n.addressField(),
    postalAddress3: validationRulesI18n.addressField(),
    country: validationRulesI18n.requiredString(),
    town: validationRulesI18n.addressField().required(import_i18next7.default.t("APPB2C.common.basic.forms.requiredMessage")),
    postcode: yup7.string().max(commonMaxLengths.postCode, import_i18next7.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
        count: commonMaxLengths.postCode
    }))
});
var getReceiver = ({
    firstName: firstName2,
    lastName: lastName2,
    orgCountryConfig,
    showInvoiceInfo = false
}) => yup7.object().when("acknowledgement", (ack, schema) => {
    if (showInvoiceInfo) {
        switch (ack) {
            case 3 /* DuplicatePaper */ :
                return schema;
            case 4 /* Triplicate */ :
                return getTaxNumberTaiwan(ack, companyReceiver());
            case 5 /* DuplicateElectronic */ :
                return yup7.object().when("invoiceSubtype", (subtype) => getTaxNumberTaiwan(subtype, schema));
            case 6 /* Donate */ :
                return getTaxNumberTaiwan(ack, schema);
        }
    }
    switch (ack) {
        case 0 /* Myself */ :
            return getTaxNumber(ack, schema, orgCountryConfig);
        case 1 /* AnotherPerson */ :
            return getTaxNumber(ack, personReceiver(firstName2, lastName2), orgCountryConfig);
        case 2 /* Company */ :
            return getTaxNumber(ack, genericCompanyReceiver(), orgCountryConfig);
    }
});
var personReceiver = (firstName2, lastName2) => genericReceiver().shape({
    firstName: firstName2,
    lastName: lastName2
});
var genericCompanyReceiver = () => genericReceiver().shape({
    companyName: validationRulesI18n.requiredString().max(50, import_i18next7.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
        count: 50
    }))
});
var companyReceiver = () => yup7.object().shape({
    companyName: validationRulesI18n.requiredString().max(50, import_i18next7.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
        count: 50
    }))
});
var getTaxNumber = (ack, schema, orgCountryConfig) => {
    if ((orgCountryConfig == null ? void 0 : orgCountryConfig.taxOption1) === 1 /* Disabled */ ) {
        return schema;
    }
    const maxLengthOption1 = (orgCountryConfig == null ? void 0 : orgCountryConfig.isSendingInvoiceEnabled) ? 15 : 50;
    const maxLengthOption2 = 20;
    if ((orgCountryConfig == null ? void 0 : orgCountryConfig.taxOption2) !== 1 /* Disabled */ ) {
        if (ack === 2 /* Company */ ) {
            return schema.shape({
                taxNumber2: yup7.string().when("_", {
                    is: () => (orgCountryConfig == null ? void 0 : orgCountryConfig.taxOption2) === 3 /* EnabledAndMandatory */ ,
                    then: validationRulesI18n.requiredString()
                }).max(maxLengthOption2, import_i18next7.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
                    count: maxLengthOption2
                }))
            });
        }
    }
    return schema.shape({
        taxNumber1: yup7.string().when("_", {
            is: () => (orgCountryConfig == null ? void 0 : orgCountryConfig.taxOption1) === 3 /* EnabledAndMandatory */ ,
            then: validationRulesI18n.requiredString()
        }).max(maxLengthOption1, import_i18next7.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
            count: maxLengthOption1
        }))
    });
};
var getTaxNumberTaiwan = (type, schema) => {
    if (type === 4 /* Triplicate */ ) {
        const maxLengthTriplicate = 8;
        return schema.shape({
            taxNumber1: validationRulesI18n.requiredString().matches(/^([0-9]{8})$/g, import_i18next7.default.t("APPB2C.cj.review.invoice.taxValidation.triplicate")).max(maxLengthTriplicate, import_i18next7.default.t("APPB2C.common.basic.forms.maxLengthMessage", {
                count: maxLengthTriplicate
            }))
        });
    }
    if (type === 6 /* Donate */ ) {
        return schema.shape({
            taxNumber1: validationRulesI18n.requiredString().matches(/^\d{3,7}$/g, import_i18next7.default.t("APPB2C.cj.review.invoice.taxValidation.donate"))
        });
    }
    if (type === "mb" /* MobileBarcode */ ) {
        return schema.shape({
            taxNumber1: validationRulesI18n.requiredString().matches(/^\/[A-Z0-9.+-]{7}$/g, import_i18next7.default.t("APPB2C.cj.review.invoice.taxValidation.mobileBarcode"))
        });
    }
    if (type === "cdc" /* CitizenDigitalCertificate */ ) {
        return schema.shape({
            taxNumber1: validationRulesI18n.requiredString().matches(/^[A-Z0-9]{16}$/g, import_i18next7.default.t("APPB2C.cj.review.invoice.taxValidation.citizenDigitalCertificate"))
        });
    }
};

// src/components/orderAcknowledgement/OrderAcknowledgement.tsx
var import_react39 = __toESM(require("react"));
var import_react_i18next25 = require("react-i18next");
var import_styled18 = __toESM(require("@emotion/styled"));
var import_react_solas_ors328 = require("@britishcouncil/react-solas-ors3");

// src/components/orderAcknowledgement/InvoiceInformation.tsx
var import_react38 = __toESM(require("react"));
var import_react_i18next24 = require("react-i18next");
var import_styled17 = __toESM(require("@emotion/styled"));
var import_react_solas_ors327 = require("@britishcouncil/react-solas-ors3");
var InvoiceInformation = (_a) => {
    var _b = _a,
        {
            fields,
            i18n,
            originalSpellingSubnote
        } = _b,
        props = __objRest(_b, [
            "fields",
            "i18n",
            "originalSpellingSubnote"
        ]);
    var _a2, _b2, _c, _d;
    const {
        t
    } = (0, import_react_i18next24.useTranslation)();
    const i18nDefault = {
        duplicatePaper: t("APPB2C.cj.review.invoice.type.duplicatePaper"),
        triplicate: t("APPB2C.cj.review.invoice.type.triplicate"),
        duplicateElectronic: t("APPB2C.cj.review.invoice.type.duplicateElectronic"),
        donate: t("APPB2C.cj.review.invoice.type.donate"),
        companyName: t("APPB2C.cj.review.invoice.companyName"),
        taxCaptionDuplicatePaper: t("APPB2C.cj.review.invoice.taxCaption.duplicatePaper"),
        taxCaptionDonate: t("APPB2C.cj.review.invoice.taxCaption.donate"),
        subType: t("APPB2C.cj.review.invoice.subtype.label"),
        mobileBarcode: t("APPB2C.cj.review.invoice.subtype.mobileBarcode"),
        citizenDigitalCertificate: t("APPB2C.cj.review.invoice.subtype.citizenDigitalCertificate"),
        consent: t("APPB2C.cj.review.invoice.consent"),
        consentYes: t("APPB2C.common.basic.yes"),
        consentNo: t("APPB2C.common.basic.no")
    };
    const trans = __spreadValues(__spreadValues({}, i18nDefault), i18n);
    const {
        acknowledgement: acknowledgement2,
        receiver,
        invoiceSubtype,
        invoiceConsent: invoiceConsent2
    } = fields;
    const radios = [{
            checkValue: 3 /* DuplicatePaper */ ,
            label: (_a2 = trans.duplicatePaper) != null ? _a2 : "",
            testId: "duplicate-paper"
        },
        {
            checkValue: 4 /* Triplicate */ ,
            label: (_b2 = trans.triplicate) != null ? _b2 : "",
            testId: "triplicate"
        },
        {
            checkValue: 5 /* DuplicateElectronic */ ,
            label: (_c = trans.duplicateElectronic) != null ? _c : "",
            testId: "duplicate-electronic"
        },
        {
            checkValue: 6 /* Donate */ ,
            label: (_d = trans.donate) != null ? _d : "",
            testId: "donate"
        }
    ];
    const subtypeRadios = [{
            checkValue: "mb" /* MobileBarcode */ ,
            label: trans.mobileBarcode,
            testId: "invoice-subtype-mb"
        },
        {
            checkValue: "cdc" /* CitizenDigitalCertificate */ ,
            label: trans.citizenDigitalCertificate,
            testId: "invoice-subtype-cdc"
        }
    ];
    const consentRadios = [{
            checkValue: "yes" /* Yes */ ,
            label: trans.consentYes,
            testId: "invoice-consent-yes"
        },
        {
            checkValue: "no" /* No */ ,
            label: trans.consentNo,
            testId: "invoice-consent-no"
        }
    ];
    return /* @__PURE__ */ import_react38.default.createElement("div", __spreadValues({}, props), /* @__PURE__ */ import_react38.default.createElement(import_react_solas_ors327.RadioGroup, __spreadProps(__spreadValues({}, acknowledgement2), {
        radios
    })), acknowledgement2.value === 4 /* Triplicate */ && /* @__PURE__ */ import_react38.default.createElement(import_react38.default.Fragment, null, /* @__PURE__ */ import_react38.default.createElement(import_react_solas_ors327.TextField, __spreadProps(__spreadValues({
        label: trans.companyName
    }, receiver.companyName), {
        subnote: originalSpellingSubnote
    })), /* @__PURE__ */ import_react38.default.createElement(import_react_solas_ors327.TextField, __spreadValues({
        label: trans.taxCaptionDuplicatePaper
    }, receiver.taxNumber1))), acknowledgement2.value === 5 /* DuplicateElectronic */ && /* @__PURE__ */ import_react38.default.createElement(import_react38.default.Fragment, null, /* @__PURE__ */ import_react38.default.createElement("label", {
        htmlFor: "invoiceSubtype"
    }, trans.subType), /* @__PURE__ */ import_react38.default.createElement(RadioGroupWrap, null, /* @__PURE__ */ import_react38.default.createElement(import_react_solas_ors327.RadioGroup, __spreadProps(__spreadValues({}, invoiceSubtype), {
        radios: subtypeRadios,
        name: "invoiceSubtype"
    }))), /* @__PURE__ */ import_react38.default.createElement(import_react_solas_ors327.TextField, __spreadValues({}, receiver.taxNumber1))), acknowledgement2.value === 6 /* Donate */ && /* @__PURE__ */ import_react38.default.createElement(import_react38.default.Fragment, null, /* @__PURE__ */ import_react38.default.createElement(import_react_solas_ors327.TextField, __spreadValues({
        label: trans.taxCaptionDonate
    }, receiver.taxNumber1))), /* @__PURE__ */ import_react38.default.createElement("p", null, trans.consent), /* @__PURE__ */ import_react38.default.createElement(import_react_solas_ors327.RadioGroup, __spreadProps(__spreadValues({}, invoiceConsent2), {
        radios: consentRadios
    })));
};
var RadioGroupWrap = import_styled17.default.div `
  .form-group {
    margin-bottom: 20px;
  }
`;

// src/components/orderAcknowledgement/OrderAcknowledgement.tsx
var OrderAcknowledgement = (_a) => {
    var _b = _a,
        {
            fields,
            orgCountryConfig,
            allCountries,
            allCountriesLoading,
            showInvoiceInstead,
            i18n,
            originalSpellingSubnote
        } = _b,
        props = __objRest(_b, [
            "fields",
            "orgCountryConfig",
            "allCountries",
            "allCountriesLoading",
            "showInvoiceInstead",
            "i18n",
            "originalSpellingSubnote"
        ]);
    var _a2, _b2, _c;
    const {
        t
    } = (0, import_react_i18next25.useTranslation)();
    const i18nDefault = {
        myself: t("APPB2C.cj.review.acknowledgement.myself"),
        anotherPerson: t("APPB2C.cj.review.acknowledgement.anotherPerson"),
        company: t("APPB2C.cj.review.acknowledgement.company"),
        familyName: t("APPB2C.cj.review.acknowledgement.fields.familyName"),
        noLastName: t("APPB2C.cj.childDetails.noLastName"),
        firstName: t("APPB2C.cj.review.acknowledgement.fields.firstName"),
        companyName: t("APPB2C.cj.review.acknowledgement.fields.companyName"),
        email: t("APPB2C.cj.review.acknowledgement.fields.email"),
        mobile: t("APPB2C.cj.review.acknowledgement.fields.mobile"),
        country: t("APPB2C.cj.review.acknowledgement.fields.country"),
        postal: t("APPB2C.cj.personalDetails.forms.address.postal"),
        town: t("APPB2C.cj.personalDetails.forms.address.town"),
        zip: t("APPB2C.cj.personalDetails.forms.address.zip")
    };
    const trans = __spreadValues(__spreadValues({}, i18nDefault), i18n);
    const {
        acknowledgement: acknowledgement2,
        receiver
    } = fields;
    const radios = [{
            checkValue: 0 /* Myself */ ,
            label: (_a2 = trans.myself) != null ? _a2 : "",
            testId: "myself"
        },
        {
            checkValue: 1 /* AnotherPerson */ ,
            label: (_b2 = trans.anotherPerson) != null ? _b2 : "",
            testId: "another-person"
        },
        {
            checkValue: 2 /* Company */ ,
            label: (_c = trans.company) != null ? _c : "",
            testId: "company"
        }
    ];
    const countriesOpts = (0, import_react39.useMemo)(() => (allCountries || []).map((c) => {
        var _a3;
        return {
            name: (_a3 = c.name) != null ? _a3 : "",
            value: c.id.toString()
        };
    }), [allCountries]);
    return /* @__PURE__ */ import_react39.default.createElement("div", __spreadValues({}, props), showInvoiceInstead ? /* @__PURE__ */ import_react39.default.createElement(InvoiceInformation, {
        fields,
        originalSpellingSubnote
    }) : /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.RadioGroup, __spreadProps(__spreadValues({}, acknowledgement2), {
        radios
    })), acknowledgement2.value === 0 /* Myself */ && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, (orgCountryConfig == null ? void 0 : orgCountryConfig.taxOption1) !== 1 /* Disabled */ && (orgCountryConfig == null ? void 0 : orgCountryConfig.taxCaption1) && /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({
        label: orgCountryConfig.taxCaption1
    }, receiver.taxNumber1))), acknowledgement2.value === 1 /* AnotherPerson */ && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.LastNameField, __spreadProps(__spreadValues({
        inputDir: "ltr"
    }, receiver.lastName), {
        label: trans.familyName,
        noLastNameLabel: trans.noLastName
    })), /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({
        inputDir: "ltr",
        label: trans.firstName
    }, receiver.firstName)), (orgCountryConfig == null ? void 0 : orgCountryConfig.taxOption1) !== 1 /* Disabled */ && /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({
        label: orgCountryConfig == null ? void 0 : orgCountryConfig.taxCaption1
    }, receiver.taxNumber1))), acknowledgement2.value === 2 /* Company */ && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({
        label: trans.companyName
    }, receiver.companyName)), (orgCountryConfig == null ? void 0 : orgCountryConfig.taxOption2) !== 1 /* Disabled */ ? /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({
        label: orgCountryConfig == null ? void 0 : orgCountryConfig.taxCaption2
    }, receiver.taxNumber2)) : (orgCountryConfig == null ? void 0 : orgCountryConfig.taxOption1) !== 1 /* Disabled */ && /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({
        label: orgCountryConfig == null ? void 0 : orgCountryConfig.taxCaption1
    }, receiver.taxNumber1))), acknowledgement2.value !== 0 /* Myself */ && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({
        inputDir: "ltr",
        label: trans.email
    }, receiver.email)), /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({
        inputDir: "ltr",
        label: trans.mobile
    }, receiver.mobileNumber)), /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.Field, __spreadValues({
        label: trans.country
    }, receiver.country), /* @__PURE__ */ import_react39.default.createElement(BcSelect, {
        id: "select-country",
        isLoading: allCountriesLoading,
        placeholder: " ",
        options: countriesOpts,
        value: receiver.country.value,
        onChange: (val) => receiver.country.onChange(val)
    })), /* @__PURE__ */ import_react39.default.createElement(Address2, {
        className: "address-more"
    }, /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({
        label: trans.postal
    }, receiver.postalAddress1)), /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({}, receiver.postalAddress2)), /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({}, receiver.postalAddress3))), /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({
        label: trans.town
    }, receiver.town)), /* @__PURE__ */ import_react39.default.createElement(import_react_solas_ors328.TextField, __spreadValues({
        label: trans.zip
    }, receiver.postcode)))));
};
var Address2 = import_styled18.default.div `
  @media (min-width: 850px) {
    .form-group {
      margin-bottom: 15px;
    }
  }
`;

// src/components/orderAcknowledgement/payerDetails.ts
var import_mod = require("ors-api/mod");
var getCommonPayerModel = (form, candidateProfile, showInvoiceInfo = false) => {
    let res;
    if (form.acknowledgement === 0 /* Myself */ || form.acknowledgement === 3 /* DuplicatePaper */ || form.acknowledgement === 4 /* Triplicate */ || form.acknowledgement === 5 /* DuplicateElectronic */ || form.acknowledgement === 6 /* Donate */ ) {
        res = {
            firstName: candidateProfile == null ? void 0 : candidateProfile.firstName,
            surname: candidateProfile == null ? void 0 : candidateProfile.surname,
            telephone: candidateProfile == null ? void 0 : candidateProfile.mobile,
            email: candidateProfile == null ? void 0 : candidateProfile.email,
            streetAddress1: (candidateProfile == null ? void 0 : candidateProfile.addressLine1) || "",
            streetAddress2: candidateProfile == null ? void 0 : candidateProfile.addressLine2,
            streetAddress3: candidateProfile == null ? void 0 : candidateProfile.addressLine3,
            town: (candidateProfile == null ? void 0 : candidateProfile.town) || "",
            postCode: candidateProfile == null ? void 0 : candidateProfile.postCode,
            countryId: candidateProfile == null ? void 0 : candidateProfile.countryId,
            consentToRefundInvoiceContact: true,
            customInvoiceType: void 0
        };
    } else {
        res = {
            telephone: form.receiver.mobileNumber,
            email: form.receiver.email,
            streetAddress1: form.receiver.postalAddress1,
            streetAddress2: form.receiver.postalAddress2,
            streetAddress3: form.receiver.postalAddress3,
            town: form.receiver.town,
            postCode: form.receiver.postcode,
            countryId: parseInt(form.receiver.country, 10),
            consentToRefundInvoiceContact: true,
            customInvoiceType: void 0
        };
    }
    if (form.acknowledgement === 1 /* AnotherPerson */ ) {
        res.firstName = form.receiver.firstName;
        res.surname = form.receiver.lastName;
    }
    if (form.acknowledgement === 2 /* Company */ || form.acknowledgement === 4 /* Triplicate */ ) {
        res.companyName = form.receiver.companyName;
        form.receiver.taxNumber2 ? res.taxNumber2 = form.receiver.taxNumber2 : form.receiver.taxNumber1 && (res.taxNumber1 = form.receiver.taxNumber1);
    } else {
        form.acknowledgement !== 3 /* DuplicatePaper */ && form.receiver.taxNumber1 && (res.taxNumber1 = form.receiver.taxNumber1);
    }
    if (showInvoiceInfo) {
        res.consentToRefundInvoiceContact = form.invoiceConsent === "yes" /* Yes */ ;
        res.customInvoiceType = getInvoiceType(form.acknowledgement, form.invoiceSubtype);
    }
    return res;
};
var getPayerModel = (form, orgCountryId, candidateProfile, showInvoiceInfo = false) => {
    const candidateId = (candidateProfile == null ? void 0 : candidateProfile.id) || 0;
    const res = getCommonPayerModel(form, candidateProfile, showInvoiceInfo);
    return __spreadProps(__spreadValues({}, res), {
        payerOption: getPayerOption(form.acknowledgement),
        organisationCountryId: orgCountryId,
        candidateId
    });
};
var getOsrPayerInformation = (form, orgCountryId, candidateProfile, showInvoiceInfo = false) => {
    const candidateId = (candidateProfile == null ? void 0 : candidateProfile.id) || 0;
    const res = getCommonPayerModel(form, candidateProfile, showInvoiceInfo);
    return __spreadProps(__spreadValues({}, res), {
        howPaid: getHowPaid(form.acknowledgement),
        organisationCountryId: orgCountryId,
        candidateId
    });
};
var getOsrPayerModel = (form, orgCountryId, candidateProfile, showInvoiceInfo = false) => {
    const candidateId = (candidateProfile == null ? void 0 : candidateProfile.id) || 0;
    const res = getCommonPayerModel(form, candidateProfile, showInvoiceInfo);
    return __spreadProps(__spreadValues({}, res), {
        payerOption: getPayerOption(form.acknowledgement),
        organisationCountryId: orgCountryId,
        candidateId
    });
};
var getEorPayerModel = (form, candidateProfile, showInvoiceInfo = false) => {
    const res = getCommonPayerModel(form, candidateProfile, showInvoiceInfo);
    return __spreadProps(__spreadValues({}, res), {
        payerOption: getHowPaid(form.acknowledgement)
    });
};
var getPayerDetailsUkvi = (registrationId, values, organisationCountryId, candidateProfile, showInvoiceInfo = false) => {
    const baseOrsPayer = getPayerModel(values, organisationCountryId, candidateProfile, showInvoiceInfo);
    return __spreadProps(__spreadValues({
        id: 0,
        addressId: 0,
        registrationId
    }, baseOrsPayer), {
        companyTaxIdentifier1: baseOrsPayer.taxNumber1,
        companyTaxIdentifier2: baseOrsPayer.taxNumber2
    });
};
var getPayerOption = (acknowledgement2) => {
    switch (acknowledgement2) {
        case 0 /* Myself */ :
        case 3 /* DuplicatePaper */ :
        case 5 /* DuplicateElectronic */ :
        case 6 /* Donate */ :
            return "myself";
        case 2 /* Company */ :
        case 4 /* Triplicate */ :
            return "company";
        case 1 /* AnotherPerson */ :
            return "anotherPerson";
    }
};
var getHowPaid = (acknowledgement2) => {
    switch (acknowledgement2) {
        case 0 /* Myself */ :
        case 3 /* DuplicatePaper */ :
        case 5 /* DuplicateElectronic */ :
        case 6 /* Donate */ :
            return import_mod.HowPaidType.Myself;
        case 2 /* Company */ :
        case 4 /* Triplicate */ :
            return import_mod.HowPaidType.Company;
        case 1 /* AnotherPerson */ :
            return import_mod.HowPaidType.AnotherPerson;
    }
};
var getInvoiceType = (type, subType) => {
    switch (type) {
        case 3 /* DuplicatePaper */ :
            return import_mod.CustomInvoiceTypes.TaiwanDuplicateUniformPaperInvoice;
        case 4 /* Triplicate */ :
            return import_mod.CustomInvoiceTypes.TaiwanTriplicateUniformPaperInvoice;
        case 5 /* DuplicateElectronic */ :
            return subType === "mb" /* MobileBarcode */ ? import_mod.CustomInvoiceTypes.TaiwanMobileBarcodeCarrier : import_mod.CustomInvoiceTypes.TaiwanCitizenDigitalCertificateCarrier;
        case 6 /* Donate */ :
            return import_mod.CustomInvoiceTypes.TaiwanDonateElectronicInvoice;
        default:
            return import_mod.CustomInvoiceTypes.TaiwanDuplicateUniformPaperInvoice;
    }
};

// src/components/speakingSlots/index.tsx
var import_react70 = __toESM(require("react"));

// src/components/speakingSlots/getVenueSpeakingLists.ts
var import_lodash_es3 = require("lodash-es");
var getVenueSpeakingLists = (showVenues, examSpeakingSlots, defaultSpeakingSlot) => {
    if (!examSpeakingSlots || examSpeakingSlots.length === 0) {
        return [];
    }
    if (!showVenues) {
        const speakingSlots2 = (0, import_lodash_es3.sortBy)(examSpeakingSlots, ["date", "startTime"]);
        return [speakingSlots2];
    }
    const speakingSlots = (0, import_lodash_es3.sortBy)(examSpeakingSlots, [
        "venueName",
        "date",
        "startTime"
    ]);
    const list = [];
    let venueGroup = [];
    let previousVenueId = speakingSlots[0].venueId;
    for (const speakingSlot of speakingSlots) {
        if (speakingSlot.venueId !== previousVenueId) {
            list.push(venueGroup);
            venueGroup = [];
            previousVenueId = speakingSlot.venueId;
        }
        venueGroup.push(speakingSlot);
    }
    list.push(venueGroup);
    const defaultVenue = list.find((e) => e[0].venueId === (defaultSpeakingSlot == null ? void 0 : defaultSpeakingSlot.venueId));
    const nonDefaultVenues = list.filter((e) => e[0].venueId !== (defaultSpeakingSlot == null ? void 0 : defaultSpeakingSlot.venueId));
    return defaultVenue ? [defaultVenue, ...nonDefaultVenues] : list;
};

// src/components/speakingSlots/SelectedSpeakingSection.tsx
var import_react66 = __toESM(require("react"));
var import_styled38 = __toESM(require("@emotion/styled"));
var import_react_solas_ors338 = require("@britishcouncil/react-solas-ors3");
var import_ors_utils9 = require("ors-utils");

// src/components/VenueTitle.tsx
var import_react45 = __toESM(require("react"));
var import_react_i18next29 = require("react-i18next");
var import_classnames4 = __toESM(require("classnames"));
var import_styled22 = __toESM(require("@emotion/styled"));
var import_react_common6 = require("@britishcouncil/react-common");
var import_react_solas_ors332 = require("@britishcouncil/react-solas-ors3");

// src/components/MapLink.tsx
var import_react40 = __toESM(require("react"));
var import_react_i18next26 = require("react-i18next");
var import_styled19 = __toESM(require("@emotion/styled"));
var import_react_solas_ors329 = require("@britishcouncil/react-solas-ors3");
var import_react_solas_ors330 = require("@britishcouncil/react-solas-ors3");
var MapLink = (_a) => {
    var _b = _a,
        {
            locationTitle,
            mapUrl,
            long,
            lat
        } = _b,
        props = __objRest(_b, [
            "locationTitle",
            "mapUrl",
            "long",
            "lat"
        ]);
    const {
        t
    } = (0, import_react_i18next26.useTranslation)();
    const title = locationTitle || t("APPB2C.common.bookTest.results.viewOnMap");
    const href = mapUrl != null ? mapUrl : `https://maps.google.com/?q=${lat},${long}`;
    if (!mapUrl && (!lat || !long)) {
        return null;
    }
    return /* @__PURE__ */ import_react40.default.createElement(StyledLink2, __spreadProps(__spreadValues({}, props), {
        href,
        "data-testid": "link-location",
        "aria-label": title,
        showIcon: false,
        i18n: {
            title: t("APPB2C.common.basic.externalLinkTitle")
        }
    }), /* @__PURE__ */ import_react40.default.createElement(import_react_solas_ors329.MapPinIcon, {
        "aria-hidden": "true"
    }), /* @__PURE__ */ import_react40.default.createElement("span", null, title));
};
var StyledLink2 = (0, import_styled19.default)(import_react_solas_ors330.ExternalLink)
`
  align-self: auto;
  color: #005cb9;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3em;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  [dir='rtl'] & {
    font-weight: 500;
  }

  > svg {
    width: 16px;
    height: 16px;
    fill: #005cb9;
    margin-right: 6px;

    [dir='rtl'] & {
      margin-right: inherit !important;
      margin-left: 6px !important;
    }
  }
  :focus {
    outline: none;
    color: #000;
  }
`;

// src/components/MapButton.tsx
var import_react43 = __toESM(require("react"));
var import_react_i18next28 = require("react-i18next");
var import_styled21 = __toESM(require("@emotion/styled"));

// src/components/LinkButton.tsx
var import_react41 = __toESM(require("react"));
var import_classnames3 = __toESM(require("classnames"));
var LinkButton5 = (_a) => {
    var props = __objRest(_a, []);
    const className = (0, import_classnames3.default)("btn-link", "link", props.className);
    return /* @__PURE__ */ import_react41.default.createElement("button", __spreadProps(__spreadValues({
        type: "button"
    }, props), {
        className
    }), /* @__PURE__ */ import_react41.default.createElement(import_react41.default.Fragment, null, props.children));
};

// src/components/MapButton.tsx
var import_react_solas_ors331 = require("@britishcouncil/react-solas-ors3");

// src/components/MapModal.tsx
var import_react42 = __toESM(require("react"));
var import_styled20 = __toESM(require("@emotion/styled"));
var import_react_i18next27 = require("react-i18next");
var import_react_extro_ui = require("@britishcouncil/react-extro-ui");
var import_react_solas7 = require("@britishcouncil/react-solas");
var MapModal = ({
    long,
    lat,
    show,
    onExit
}) => {
    const {
        t
    } = (0, import_react_i18next27.useTranslation)();
    return /* @__PURE__ */ import_react42.default.createElement(import_react_extro_ui.Modal, {
        isOpen: show,
        title: t("APPB2C.common.testDetails.mapModal.title"),
        ModalActions: /* @__PURE__ */ import_react42.default.createElement(import_react_solas7.Button, {
            intent: "default",
            onClick: () => onExit(false)
        }, t("APPB2C.common.testDetails.mapModal.close"))
    }, /* @__PURE__ */ import_react42.default.createElement(StyledFrame, {
        src: `https://maps.google.com/maps?q=${lat},${long}&output=embed`
    }));
};
var StyledFrame = import_styled20.default.iframe `
  height: 50vh;
  width: 100%;
  border: 0;
`;

// src/components/MapButton.tsx
var MapButton = ({
    lat,
    long,
    className
}) => {
    const {
        t
    } = (0, import_react_i18next28.useTranslation)();
    const [showModal, setShowModal] = (0, import_react43.useState)(false);
    const title = t("APPB2C.common.bookTest.results.viewOnMap");
    const handleClick = () => {
        setShowModal(true);
    };
    if (!lat || !long) {
        return null;
    }
    return /* @__PURE__ */ import_react43.default.createElement(import_react43.default.Fragment, null, /* @__PURE__ */ import_react43.default.createElement(StyledLinkButton, {
        className,
        onClick: handleClick,
        "data-testid": "link-location"
    }, /* @__PURE__ */ import_react43.default.createElement(import_react_solas_ors331.MapPinIcon, {
        "aria-hidden": "true"
    }), /* @__PURE__ */ import_react43.default.createElement("span", null, title)), /* @__PURE__ */ import_react43.default.createElement(MapModal, {
        long,
        lat,
        show: showModal,
        onExit: setShowModal
    }));
};
var StyledLinkButton = (0, import_styled21.default)(LinkButton5)
`
  text-decoration: none !important;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > svg {
    width: 16px;
    height: 16px;
    fill: #005cb9;
    margin-right: 6px;

    [dir='rtl'] & {
      margin-right: inherit;
      margin-left: 6px;
    }
  }
  :hover {
    text-decoration: underline !important;
  }
`;

// src/icons/AccessibilityIcons.tsx
var import_react44 = __toESM(require("react"));
var Wheelchair = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react44.default.createElement("svg", __spreadProps(__spreadValues({}, props), {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }), /* @__PURE__ */ import_react44.default.createElement("mask", {
        id: "mask0_3111_9002",
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "24",
        height: "24"
    }, /* @__PURE__ */ import_react44.default.createElement("rect", {
        width: "24",
        height: "24",
        fill: "#D9D9D9"
    })), /* @__PURE__ */ import_react44.default.createElement("g", {
        mask: "url(#mask0_3111_9002)"
    }, /* @__PURE__ */ import_react44.default.createElement("path", {
        d: "M11.9732 5.88464C11.3848 5.88464 10.8884 5.68239 10.4839 5.27789C10.0794 4.87339 9.87716 4.37689 9.87716 3.78839C9.87716 3.19989 10.0794 2.70339 10.4839 2.29889C10.8884 1.89439 11.3848 1.69214 11.9732 1.69214C12.5617 1.69214 13.0582 1.89439 13.4627 2.29889C13.8672 2.70339 14.0694 3.19989 14.0694 3.78839C14.0694 4.37689 13.8672 4.87339 13.4627 5.27789C13.0582 5.68239 12.5617 5.88464 11.9732 5.88464ZM17.0387 22.3191V17.4499C17.0387 17.3729 17.0162 17.312 16.9714 17.2671C16.9264 17.2223 16.8655 17.1999 16.7887 17.1999H11.9924C11.4066 17.1999 10.9069 16.9931 10.4934 16.5796C10.0799 16.1661 9.87316 15.6665 9.87316 15.0806V9.09989C9.87316 8.49739 10.0726 7.98005 10.4714 7.54789C10.8701 7.11589 11.3707 6.89989 11.9732 6.89989C12.2898 6.89989 12.6254 6.96781 12.9799 7.10364C13.3344 7.23964 13.6502 7.52106 13.9272 7.94789C14.5502 8.89155 15.2972 9.62014 16.1684 10.1336C17.0396 10.647 18.0322 10.9293 19.1464 10.9806V13.1306C18.1181 13.0793 17.1636 12.8633 16.2829 12.4826C15.4021 12.1018 14.6566 11.6562 14.0464 11.1459V14.5269H17.0694C17.6552 14.5269 18.1549 14.7336 18.5684 15.1471C18.9819 15.5605 19.1887 16.0601 19.1887 16.6461V22.3191H17.0387ZM9.92316 22.3191C8.47699 22.3191 7.25391 21.8191 6.25391 20.8191C5.25391 19.8191 4.75391 18.5961 4.75391 17.1499C4.75391 15.9191 5.09974 14.8771 5.79141 14.0239C6.48307 13.1707 7.36032 12.5717 8.42316 12.2269V14.7076C7.96549 14.9063 7.59791 15.231 7.32041 15.6816C7.04274 16.1323 6.90391 16.6217 6.90391 17.1499C6.90391 17.9936 7.19624 18.7076 7.78091 19.2921C8.36557 19.8768 9.07966 20.1691 9.92316 20.1691C10.4515 20.1691 10.9409 20.0304 11.3914 19.7529C11.8421 19.4752 12.1668 19.1076 12.3657 18.6499H14.8464C14.5142 19.6999 13.9184 20.5739 13.0589 21.2719C12.1992 21.9701 11.154 22.3191 9.92316 22.3191Z",
        fill: "#23085A"
    })));
};

// src/components/VenueTitle.tsx
var VenueTitle = ({
    name,
    addressLine1,
    addressLine2,
    city,
    state,
    postCode,
    latitude,
    longitude,
    distance,
    showDistance,
    sticky = true,
    showVenues,
    venueMapsUrl,
    isMapViewEnabled,
    isAccessible
}) => {
    const {
        t
    } = (0, import_react_i18next29.useTranslation)();
    const address = [addressLine1, addressLine2, city, state, postCode];
    const ref = (0, import_react45.useRef)(null);
    const isSticky = (0, import_react_common6.useSticky)(ref);
    if (!name || !showVenues)
        return null;
    return /* @__PURE__ */ import_react45.default.createElement(StyledVenueTitle, {
        className: (0, import_classnames4.default)("venue", {
            sticky,
            floats: isSticky
        }),
        ref
    }, /* @__PURE__ */ import_react45.default.createElement(VenueTitleTextContainer, null, /* @__PURE__ */ import_react45.default.createElement("div", null, /* @__PURE__ */ import_react45.default.createElement(MapPinIconZone, null, /* @__PURE__ */ import_react45.default.createElement(import_react_solas_ors332.MapPinIcon, {
        "aria-hidden": "true"
    })), isAccessible && /* @__PURE__ */ import_react45.default.createElement(WheelchairIconZone, {
        title: t("APPB2C.common.basic.venue.isAccessible")
    }, /* @__PURE__ */ import_react45.default.createElement(Wheelchair, {
        "aria-hidden": "true"
    }))), /* @__PURE__ */ import_react45.default.createElement("div", {
        style: {
            width: "100%"
        }
    }, /* @__PURE__ */ import_react45.default.createElement(TitleContainer, null, /* @__PURE__ */ import_react45.default.createElement(Title, {
        "data-testid": "venue-title"
    }, name)), /* @__PURE__ */ import_react45.default.createElement(Address3, {
        "data-testid": "venue-address"
    }, /* @__PURE__ */ import_react45.default.createElement("span", null, address.filter((c) => c && c.replace(/\s/g, "") !== "").join(", ")), isMapViewEnabled ? venueMapsUrl ? /* @__PURE__ */ import_react45.default.createElement(MapLink, {
        className: "map-link",
        mapUrl: venueMapsUrl,
        lang: latitude,
        long: longitude
    }) : /* @__PURE__ */ import_react45.default.createElement(MapButton, {
        className: "map-link",
        lat: latitude,
        long: longitude
    }) : /* @__PURE__ */ import_react45.default.createElement(MapLink, {
        className: "map-link",
        mapUrl: venueMapsUrl,
        lat: latitude,
        long: longitude
    })), showDistance && distance && /* @__PURE__ */ import_react45.default.createElement(Distance, {
        "data-testid": "venue-distance"
    }, /* @__PURE__ */ import_react45.default.createElement(import_react_solas_ors332.MapPinIcon, {
        "aria-hidden": "true"
    }), `${distance} ${t("APPB2C.common.bookTest.results.fromCurrentLocation")}`))));
};
var MapPinIconZone = import_styled22.default.div `
  padding-bottom: 7px;
`;
var WheelchairIconZone = import_styled22.default.div `
    padding-bottom: 7px;
    cursor: pointer;
    > svg {
        width: 22px;
        height: 22px;
    }
`;
var StyledVenueTitle = import_styled22.default.div `
  background: #e5eff8;
  z-index: 15;
  margin: -15px -20px 10px;
  padding: 10px 24px;

  &.sticky {
    position: sticky;
    top: 0;

    &.floats {
      box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.25);
    }
  }

  > div {
    display: flex;
  }

  .map-link {
    flex: 1 1 255px;
    vertical-align: middle;
    align-self: center;
    text-align: right;
  }

  @media (max-width: 600px) {
    .map-link {
      flex: 1 1 50px;

      > svg {
        width: 40px;
        height: 40px;
      }

      > span {
        display: none;
      }
    }
  }
`;
var VenueTitleTextContainer = import_styled22.default.div `
  align-items: baseline;
  display: flex;
  font-size: 1em;
  font-weight: 700;
  gap: 16px;
  line-height: 1.3em;
  width: 100%;

  [dir='rtl'] & {
    font-weight: 500;
  }

  svg {
    fill: #23085a;
    height: 16px;
    width: 16px;
    flex-shrink: 0;
  }
`;
var TitleContainer = import_styled22.default.div `
  display: flex;
  justify-content: flex-start;
  gap: 25px;
`;
var Title = import_styled22.default.h2 `
  color: #23085a;
  font-size: 1em;
  font-weight: 700;
  margin-bottom: 7px;

  [dir='rtl'] & {
    font-weight: 500;
  }
`;
var Address3 = import_styled22.default.span `
  color: #54565a;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3em;
`;
var Distance = import_styled22.default.div `
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: #54565a;
  margin-top: 4px;
  opacity: 0.8;

  svg {
    fill: #54565a;
    width: 1.2em;
    height: 1.2em;
    margin: 0 6px -3px 0;
  }
`;

// src/components/speakingSlots/SpeakingSlotDetails.tsx
var import_react46 = __toESM(require("react"));
var import_react_i18next30 = require("react-i18next");
var import_styled23 = __toESM(require("@emotion/styled"));
var SpeakingSlotDetails = ({
    timeRange,
    speakingFormat
}) => {
    const {
        t
    } = (0, import_react_i18next30.useTranslation)();
    return /* @__PURE__ */ import_react46.default.createElement(StyledContent, null, /* @__PURE__ */ import_react46.default.createElement("div", {
        className: "time"
    }, timeRange), /* @__PURE__ */ import_react46.default.createElement("div", {
        className: "speaking-format",
        "data-testid": "speaking-format"
    }, speakingFormat === 2 /* Remote */ ? t("APPB2C.testCard.vcs") : t("APPB2C.testCard.f2f")));
};
var StyledContent = import_styled23.default.div `
  .time {
    color: #333;
    font-weight: bold;

    [dir='rtl'] & {
      font-weight: 500;
    }
  }
  .speaking-format {
    color: #666;
    font-size: 16px;
  }
`;

// src/components/speakingSlots/NotLinkedVenueNote.tsx
var import_react65 = __toESM(require("react"));
var import_react_i18next39 = require("react-i18next");

// src/components/testCards/BookTestCard/index.tsx
var import_react54 = __toESM(require("react"));
var import_styled29 = __toESM(require("@emotion/styled"));
var import_react_solas_ors334 = require("@britishcouncil/react-solas-ors3");

// src/components/testCards/BookTestCard/components/SpeakingSection.tsx
var import_react50 = __toESM(require("react"));
var import_react_i18next33 = require("react-i18next");
var import_styled26 = __toESM(require("@emotion/styled"));
var import_react_solas_ors333 = require("@britishcouncil/react-solas-ors3");
var import_ors_utils6 = require("ors-utils");

// src/components/testCards/components/styles.tsx
var import_styled24 = __toESM(require("@emotion/styled"));
var TestCardContent = import_styled24.default.div `
  color: #23085a;
  display: flex;
  flex-direction: column;
  font-size: 1em;
  gap: 4px;
  line-height: 1.3em;
  p {
    margin: 0px;
  }
  svg {
    width: 16px;
    height: 16px;
    fill: #23085a;
    flex-shrink: 0;
  }

  button.mobile {
    display: none;
  }

  @media (max-width: 849px) {
    button.mobile {
      display: block;
      width: 100%;
      margin: 8px 0px 0px 0px;
    }
    button.desktop {
      display: none;
    }
  }
`;
var Desc = import_styled24.default.div `
  align-items: center;
  display: flex;
  gap: 8px;
  font-size: 16px;
  padding: 4px 0px;
  > div,
  > p {
    font-weight: 400;
    font-style: italic;
  }
  svg {
    min-width: 16px;
  }
`;
var ExamDateTime = import_styled24.default.span `
  align-items: baseline;
  color: #23085a;
  font-size: 16px;
  font-weight: 700;
  gap: 8px;
  display: flex;
  margin: 0px;

  [dir='rtl'] & {
    font-weight: 500;
  }

  @media (max-width: ${breakpoints["screen-md-max"]}px) {
    display: grid;
    gap: 0px;
    justify-items: start;
  }
`;
var ExamTypeText = import_styled24.default.div `
  align-items: baseline;
  color: #23085a;
  display: flex;
  gap: 16px;
  margin: 4px 0px;
  width: 100%;
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    [dir='rtl'] & {
      font-weight: 500;
    }
  }
  p.exam-format {
    color: #54565a;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 135%;
  }
  > div {
    gap: 8px;
    align-items: baseline;
  }
  p.speaking {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    width: inherit;
  }
  span {
    width: inherit;
  }
  svg {
    width: 16px;
    height: 16px;
    fill: #23085a;
    flex-shrink: 0;
  }
  button.btn {
    min-width: fit-content;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    [dir='rtl'] & {
      font-weight: 500;
    }
  }
`;
var TestDateTimeContainer = import_styled24.default.div `
  background: #e5eff8;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 4px;
  padding: 8px 0px;
  margin: 4px 0px;
  height: unset;
  p {
    align-items: baseline;
    align-self: stretch;
    display: flex;
    gap: 8px;
    margin: 0px;
    padding: 0px 32px;
  }

  @media (max-width: ${breakpoints["screen-xs-max"]}px) {
    justify-content: space-between;
  }
`;
var TimeSeparator = import_styled24.default.span `
  margin: 0 !important;

  :before {
    content: ', ';
  }

  @media (max-width: ${breakpoints["screen-xs-max"]}px) {
    display: block;
    padding: 2px;

    :before {
      content: '';
    }
  }
`;
var ArrivalTime = import_styled24.default.span `
  color: #54565a;
  font-style: italic;
  font-weight: 400;
`;
var Divider5 = import_styled24.default.hr `
  border-top: 1px solid #c8c8c8;
  margin: 8px 0px;
`;
var Notification = import_styled24.default.div `
  background: ${({ type }) => {
  switch (type) {
    case "warning":
      return "#fff2e5";
    case "strong-warning":
      return "#fde5eb";
  }
}};
  border-radius: 0px 8px 8px 0px;
  box-shadow: 0px 1px 4px 0px #54565a3d;
  color: #333333;
  font-size: 16px;
  margin: 4px 0px;
  padding: 10px 10px 10px 14px;
  position: relative;
  &:before {
    background: ${({ type }) => {
  switch (type) {
    case "warning":
      return "#ff8200";
    case "strong-warning":
      return "#ea0034";
  }
}};
    bottom: 0px;
    content: ' ';
    left: 0px;
    position: absolute;
    top: 0px;
    width: 4px;
  }
`;

// src/components/testCards/components/WritingSection.tsx
var import_react48 = __toESM(require("react"));
var import_react_i18next31 = require("react-i18next");
var import_react_solas8 = require("@britishcouncil/react-solas");
var import_ors_utils4 = require("ors-utils");

// src/icons/ExamFormatIcon.tsx
var import_react47 = __toESM(require("react"));
var PbIcon = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react47.default.createElement("svg", __spreadProps(__spreadValues({}, props), {
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 65 79"
    }), /* @__PURE__ */ import_react47.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.173 3.155A10.864 10.864 0 0110.833 0h28.89c.957 0 1.875.378 2.553 1.052l21.666 21.545A3.58 3.58 0 0165 25.137v43.09c0 2.857-1.141 5.597-3.173 7.618A10.864 10.864 0 0154.167 79H10.833a10.864 10.864 0 01-7.66-3.155A10.742 10.742 0 010 68.227V10.773c0-2.857 1.141-5.597 3.173-7.618zm7.66 4.027c-.957 0-1.876.378-2.553 1.052a3.58 3.58 0 00-1.058 2.539v57.454c0 .953.38 1.866 1.058 2.54a3.621 3.621 0 002.553 1.051h43.334c.957 0 1.876-.378 2.553-1.052a3.58 3.58 0 001.058-2.539v-39.5H39.722c-1.994 0-3.61-1.607-3.61-3.59V7.181H10.832zm32.5 5.078l9.338 9.286h-9.338V12.26zM14.444 28.727c0-1.983 1.617-3.59 3.612-3.59h7.222c1.994 0 3.61 1.607 3.61 3.59 0 1.983-1.616 3.591-3.61 3.591h-7.222c-1.995 0-3.612-1.607-3.612-3.59zm0 14.364c0-1.983 1.617-3.591 3.612-3.591h28.888c1.995 0 3.612 1.608 3.612 3.59 0 1.984-1.617 3.592-3.612 3.592H18.056c-1.995 0-3.612-1.608-3.612-3.591zm0 14.364c0-1.984 1.617-3.591 3.612-3.591h28.888c1.995 0 3.612 1.607 3.612 3.59 0 1.984-1.617 3.591-3.612 3.591H18.056c-1.995 0-3.612-1.607-3.612-3.59z"
    }));
};
var CdIcon = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react47.default.createElement("svg", __spreadProps(__spreadValues({
        className: "svg-ltr-only"
    }, props), {
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 87 81"
    }), /* @__PURE__ */ import_react47.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M47.455 64.19h27.681C81.69 64.19 87 58.877 87 52.325V12.78C87 6.228 81.689.917 75.136.917H11.864C5.312.917 0 6.228 0 12.78v39.546c0 6.552 5.312 11.863 11.864 11.863h27.681v7.91H27.682a3.955 3.955 0 000 7.909h31.636a3.955 3.955 0 000-7.91H47.455V64.19zM11.864 8.825a3.955 3.955 0 00-3.955 3.954v39.546a3.955 3.955 0 003.955 3.954h63.272a3.955 3.955 0 003.955-3.954V12.78a3.955 3.955 0 00-3.955-3.954H11.864z"
    }));
};
var VCSIcon = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react47.default.createElement("svg", __spreadProps(__spreadValues({
        className: "svg-ltr-only"
    }, props), {
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 87 58"
    }), /* @__PURE__ */ import_react47.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M61.625 21.956V10.875C61.625 4.869 56.756 0 50.75 0H10.875C4.869 0 0 4.869 0 10.875v36.25C0 53.131 4.869 58 10.875 58H50.75c6.006 0 10.875-4.869 10.875-10.875v-11.08l19.643 14.03A3.625 3.625 0 0087 47.125v-36.25a3.625 3.625 0 00-5.732-2.95l-19.643 14.03zM7.25 10.875a3.625 3.625 0 013.625-3.625H50.75a3.625 3.625 0 013.625 3.625v36.25a3.625 3.625 0 01-3.625 3.625H10.875a3.625 3.625 0 01-3.625-3.625v-36.25zm72.5 29.206L64.237 29 79.75 17.92v22.16z"
    }));
};
var Face2FaceIcon = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react47.default.createElement("svg", __spreadProps(__spreadValues({}, props), {
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 71 79"
    }), /* @__PURE__ */ import_react47.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M35.5 7.9c-6.535 0-11.833 5.305-11.833 11.85S28.965 31.6 35.5 31.6s11.833-5.305 11.833-11.85S42.035 7.9 35.5 7.9zM15.778 19.75C15.778 8.842 24.608 0 35.5 0c10.892 0 19.722 8.842 19.722 19.75S46.392 39.5 35.5 39.5c-10.892 0-19.722-8.842-19.722-19.75zM5.776 53.185A19.708 19.708 0 0119.723 47.4h31.556c5.23 0 10.247 2.08 13.946 5.785A19.764 19.764 0 0171 67.15v7.9A3.947 3.947 0 0167.056 79a3.947 3.947 0 01-3.945-3.95v-7.9c0-3.143-1.247-6.157-3.466-8.38a11.825 11.825 0 00-8.367-3.47H19.722a11.825 11.825 0 00-8.367 3.47 11.858 11.858 0 00-3.466 8.38v7.9A3.947 3.947 0 013.944 79 3.947 3.947 0 010 75.05v-7.9a19.764 19.764 0 015.777-13.965z"
    }));
};
var ExamFormatIcon = (_a) => {
    var _b = _a,
        {
            format
        } = _b,
        props = __objRest(_b, [
            "format"
        ]);
    if (format === "cd")
        return /* @__PURE__ */ import_react47.default.createElement(CdIcon, __spreadValues({}, props));
    if (format === "pb")
        return /* @__PURE__ */ import_react47.default.createElement(PbIcon, __spreadValues({}, props));
    if (format === "f2f")
        return /* @__PURE__ */ import_react47.default.createElement(Face2FaceIcon, __spreadValues({}, props));
    return /* @__PURE__ */ import_react47.default.createElement(import_react47.default.Fragment, null, "No icon");
};
var SpeakingFormatIcon = (_a) => {
    var _b = _a,
        {
            format
        } = _b,
        props = __objRest(_b, ["format"]);
    if (format === "live")
        return /* @__PURE__ */ import_react47.default.createElement(Face2FaceIcon, __spreadValues({}, props));
    if (format === "remote")
        return /* @__PURE__ */ import_react47.default.createElement(VCSIcon, __spreadValues({}, props));
    return /* @__PURE__ */ import_react47.default.createElement(import_react47.default.Fragment, null, "No icon");
};

// src/components/testCards/models.ts
var import_ors23 = require("ors-api/ors2");
var import_ors24 = require("ors-api/ors2");

// src/components/testCards/components/WritingSection.tsx
var WritingSection = ({
    examDate,
    startTime,
    endTime,
    examFormat,
    showArrive = false,
    arriveTime,
    hideLrwTime,
    customLrwExamFormat,
    locale,
    customSkillName,
    isLifeSkill
}) => {
    const {
        t
    } = (0, import_react_i18next31.useTranslation)();
    const {
        localeTime,
        localeDate
    } = (0, import_ors_utils4.localeFns)(locale);
    const date = localeDate(examDate);
    const timeSpan = `${localeTime(startTime)} - ${localeTime(endTime)}`;
    const arrival = (0, import_ors_utils4.getArrivalTime)(startTime, arriveTime, locale);
    return /* @__PURE__ */ import_react48.default.createElement(TestCardContent, null, /* @__PURE__ */ import_react48.default.createElement(ExamTypeText, null, /* @__PURE__ */ import_react48.default.createElement(ExamFormatIcon, {
        "area-hidden": "true",
        format: customLrwExamFormat != null ? customLrwExamFormat : examFormat === import_ors24.ExamFormat.PB ? "pb" : "cd"
    }), /* @__PURE__ */ import_react48.default.createElement("span", null, /* @__PURE__ */ import_react48.default.createElement("p", {
        className: "lrw"
    }, customSkillName ? customSkillName : t(customLrwExamFormat === "f2f" ? "APPB2C.testCard.ls" : "APPB2C.testCard.lrw")), /* @__PURE__ */ import_react48.default.createElement("p", {
        className: "exam-format",
        "data-testid": isLifeSkill ? "speaking-listening-format" : "lrw-format"
    }, t(customLrwExamFormat === "f2f" ? "APPB2C.testCard.f2f" : examFormat === import_ors24.ExamFormat.PB ? "APPB2C.testCard.pb" : "APPB2C.testCard.cd")))), /* @__PURE__ */ import_react48.default.createElement(TestDateTimeContainer, null, /* @__PURE__ */ import_react48.default.createElement("p", {
        className: "testDateLrw"
    }, /* @__PURE__ */ import_react48.default.createElement(import_react_solas8.IcoCalendar, {
        "area-hidden": "true"
    }), /* @__PURE__ */ import_react48.default.createElement(ExamDateTime, {
        "data-testid": isLifeSkill ? "speaking-listening-date" : "lrw-date"
    }, date)), !hideLrwTime ? /* @__PURE__ */ import_react48.default.createElement("p", {
        className: "testTimeLrw"
    }, /* @__PURE__ */ import_react48.default.createElement(import_react_solas8.IcoClock, {
        "area-hidden": "true"
    }), /* @__PURE__ */ import_react48.default.createElement(ExamDateTime, {
        "data-testid": "lrw-time"
    }, timeSpan, showArrive ? /* @__PURE__ */ import_react48.default.createElement(ArrivalTime, {
        "data-testid": "lrw-arrival"
    }, t("APPB2C.testCard.arrival", {
        time: arrival
    })) : null)) : null, hideLrwTime && /* @__PURE__ */ import_react48.default.createElement("p", null, /* @__PURE__ */ import_react48.default.createElement(import_react_solas8.IcoClock, {
        "aria-hidden": "true"
    }), /* @__PURE__ */ import_react48.default.createElement("span", {
        "data-testid": "time-unknown"
    }, t("APPB2C.testCard.timeUnknown")))));
};

// src/components/testCards/components/SpeakingDate.tsx
var import_react49 = __toESM(require("react"));
var import_react_i18next32 = require("react-i18next");
var import_ors_utils5 = require("ors-utils");
var import_react_solas9 = require("@britishcouncil/react-solas");
var import_styled25 = __toESM(require("@emotion/styled"));
var import_react_solas10 = require("@britishcouncil/react-solas");
var SpeakingDate = ({
    speakingTitle,
    showArrive = false,
    arriveTime,
    locale,
    date,
    time,
    onChangeSpeakingTest,
    exam,
    isNotLinkedVenue = false,
    startTime,
    speakingFormat
}) => {
    const {
        t
    } = (0, import_react_i18next32.useTranslation)();
    const arrival = (0, import_ors_utils5.getArrivalTime)(startTime, arriveTime, locale);
    return /* @__PURE__ */ import_react49.default.createElement(TestCardContent, null, (exam == null ? void 0 : exam.isMixedSession) && /* @__PURE__ */ import_react49.default.createElement(MixedSessionWarning, null), isNotLinkedVenue && /* @__PURE__ */ import_react49.default.createElement(NotLinkedVenueNote, null), /* @__PURE__ */ import_react49.default.createElement(ExamTypeText, null, /* @__PURE__ */ import_react49.default.createElement(SpeakingFormatIcon, {
        "aria-hidden": "true",
        format: speakingFormat === import_ors23.SpeakingFormat.Live ? "live" : "remote"
    }), /* @__PURE__ */ import_react49.default.createElement("span", {
        style: {
            width: "100%"
        }
    }, /* @__PURE__ */ import_react49.default.createElement("p", {
        className: "speaking"
    }, /* @__PURE__ */ import_react49.default.createElement("span", null, t("APPB2C.testCard.speaking")), !!exam ? /* @__PURE__ */ import_react49.default.createElement(ChangeSpeakingDateButton, {
        className: "desktop",
        "aria-label": `Change default speaking time (${speakingTitle}) if it doesn't suit you`,
        "data-testid": "change-speaking",
        onClick: () => onChangeSpeakingTest(exam)
    }, t("APPB2C.testCard.changeSpeaking")) : null), /* @__PURE__ */ import_react49.default.createElement("p", {
        className: "exam-format",
        "data-testid": "speaking-format"
    }, speakingFormat === import_ors23.SpeakingFormat.Remote ? t("APPB2C.testCard.vcs") : t("APPB2C.testCard.f2f")))), /* @__PURE__ */ import_react49.default.createElement(TestDateTimeContainer, null, /* @__PURE__ */ import_react49.default.createElement("p", {
        className: "testDateSpeaking"
    }, /* @__PURE__ */ import_react49.default.createElement(import_react_solas9.IcoCalendar, {
        "area-hidden": "true"
    }), /* @__PURE__ */ import_react49.default.createElement(ExamDateTime, {
        "data-testid": "speaking-date"
    }, date)), /* @__PURE__ */ import_react49.default.createElement("p", {
        className: "testTimeSpeaking"
    }, /* @__PURE__ */ import_react49.default.createElement(import_react_solas9.IcoClock, {
        "area-hidden": "true"
    }), /* @__PURE__ */ import_react49.default.createElement(ExamDateTime, {
        "data-testid": "speaking-time"
    }, time, showArrive ? /* @__PURE__ */ import_react49.default.createElement(ArrivalTime, {
        "data-testid": "speaking-arrival"
    }, t("APPB2C.testCard.arrival", {
        time: arrival
    })) : null))), !!exam ? /* @__PURE__ */ import_react49.default.createElement(ChangeSpeakingDateButton, {
        className: "mobile",
        "aria-label": `Change default speaking time (${speakingTitle}) if it doesn't suit you`,
        "data-testid": "change-speaking",
        onClick: () => onChangeSpeakingTest(exam)
    }, t("APPB2C.testCard.changeSpeaking")) : null);
};
var ChangeSpeakingDateButton = (0, import_styled25.default)(import_react_solas10.Button)
`
  & {
    padding: 4px 30px !important;
  }

  && {
    border: 2px solid #005cb9;
  }

  &.btn.btn-default:hover {
    background-color: #d5f0ff;
    border: 2px solid #005cb9;
    color: #005cb9;
  }
  &.mobile {
    min-height: 44px;
    line-height: 24px;
    padding: 4px 16px;
  }
`;

// src/components/testCards/BookTestCard/components/SpeakingSection.tsx
var SpeakingSection = ({
    exam,
    showDistance,
    displayVenues,
    locale,
    onChangeSpeakingTest,
    hideSpeaking,
    isMapViewEnabled
}) => {
    const {
        t
    } = (0, import_react_i18next33.useTranslation)();
    const {
        localeTime,
        localeDate
    } = (0, import_ors_utils6.localeFns)(locale);
    const speakingSlot = exam.defaultSpeakingSlot;
    const isDifferentVenue = (speakingSlot == null ? void 0 : speakingSlot.venueId) !== exam.venueId;
    const isNotLinkedVenue = exam.linkingVenuesEnabled && (speakingSlot == null ? void 0 : speakingSlot.isVenueLinked) === false;
    const date = speakingSlot ? localeDate(speakingSlot.date) : null;
    const time = `${localeTime(speakingSlot == null ? void 0 : speakingSlot.startTime)} - ${localeTime(speakingSlot == null ? void 0 : speakingSlot.endTime)}`;
    const speakingTitle = `${date}, ${localeTime(speakingSlot == null ? void 0 : speakingSlot.startTime)} - ${localeTime(speakingSlot == null ? void 0 : speakingSlot.endTime)}`;
    const address = [
        speakingSlot == null ? void 0 : speakingSlot.venueStreetAddress1,
        speakingSlot == null ? void 0 : speakingSlot.venueStreetAddress2,
        speakingSlot == null ? void 0 : speakingSlot.venueCity,
        speakingSlot == null ? void 0 : speakingSlot.venueState,
        speakingSlot == null ? void 0 : speakingSlot.venuePostCode
    ];
    if (!speakingSlot || hideSpeaking)
        return null;
    return /* @__PURE__ */ import_react50.default.createElement(import_react50.default.Fragment, null, /* @__PURE__ */ import_react50.default.createElement(Divider5, null), /* @__PURE__ */ import_react50.default.createElement(SpeakingDate, __spreadProps(__spreadValues({
        speakingTitle,
        locale,
        time,
        onChangeSpeakingTest,
        exam,
        isNotLinkedVenue
    }, speakingSlot), {
        date: localeDate(speakingSlot.date)
    })), isDifferentVenue && displayVenues && /* @__PURE__ */ import_react50.default.createElement(SpeakingVenue, null, /* @__PURE__ */ import_react50.default.createElement("div", {
        className: "address"
    }, /* @__PURE__ */ import_react50.default.createElement(SpeakingAddressLabel, null, /* @__PURE__ */ import_react50.default.createElement(import_react_solas_ors333.MapPinIcon, {
        "aria-hidden": "true"
    }), speakingSlot == null ? void 0 : speakingSlot.venueName), /* @__PURE__ */ import_react50.default.createElement(AddressDetails, null, /* @__PURE__ */ import_react50.default.createElement("span", null, address.filter((c) => c && c.replace(/\s/g, "") !== "").join(", ")), !!(speakingSlot == null ? void 0 : speakingSlot.distance) && showDistance && /* @__PURE__ */ import_react50.default.createElement(Distance2, null, /* @__PURE__ */ import_react50.default.createElement(import_react_solas_ors333.MapPinIcon, {
        "aria-hidden": "true"
    }), speakingSlot.distance, t("APPB2C.common.bookTest.results.fromCurrentLocation")), isMapViewEnabled ? (speakingSlot == null ? void 0 : speakingSlot.venueMapsUrl) ? /* @__PURE__ */ import_react50.default.createElement(MapLink, {
        className: "map-link",
        mapUrl: speakingSlot.venueMapsUrl,
        lang: speakingSlot == null ? void 0 : speakingSlot.venueLatitude,
        long: speakingSlot == null ? void 0 : speakingSlot.venueLongitude
    }) : /* @__PURE__ */ import_react50.default.createElement(MapButton, {
        className: "map-link",
        lat: speakingSlot.venueLatitude,
        long: speakingSlot.venueLongitude
    }) : /* @__PURE__ */ import_react50.default.createElement(MapLink, {
        className: "map-link",
        mapUrl: speakingSlot.venueMapsUrl,
        lang: speakingSlot == null ? void 0 : speakingSlot.venueLatitude,
        long: speakingSlot == null ? void 0 : speakingSlot.venueLongitude
    })))));
};
var Distance2 = import_styled26.default.div `
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #54565a;
  margin-top: 4px;
  opacity: 0.8;

  [dir='rtl'] & {
    font-weight: 500;
  }

  svg {
    fill: #54565a;
    width: 1.2em;
    height: 1.2em;
    margin: 0 6px -3px 0;
  }
`;
var SpeakingVenue = import_styled26.default.div `
  margin-top: 15px;
  .address {
    flex: 1 1;
  }

  a.map-link {
    flex: 0 1 200px;
    vertical-align: middle;
    align-self: center;
    text-align: right;
  }

  @media (max-width: 600px) {
    a.map-link {
      flex: 0 0 50px;

      > svg {
        width: 40px;
        height: 40px;
        margin-right: 0;
      }

      > span {
        display: none;
      }
    }
  }
`;
var SpeakingAddressLabel = import_styled26.default.div `
  align-items: baseline;
  color: #23085a;
  display: flex;
  font-weight: 700;
  gap: 16px;

  [dir='rtl'] & {
    font-weight: 500;
  }

  svg {
    height: 16px;
    width: 16px;
    fill: #23085a;
    flex-shrink: 0;
  }
`;
var AddressDetails = import_styled26.default.div `
  color: #54565a;
  display: flex;
  font-weight: 400;
  justify-content: space-between;
  padding-left: 32px;
  .map-link {
    display: flex;
    min-width: fit-content;
    font-size: 16px;

    @media (max-width: 600px) {
      > svg {
        width: 40px;
        height: 40px;
        margin-right: 0;
      }

      > span {
        display: none;
      }
    }
  }
`;

// src/components/testCards/BookTestCard/components/BookButton.tsx
var import_react51 = __toESM(require("react"));
var import_react_solas11 = require("@britishcouncil/react-solas");
var import_react_i18next34 = require("react-i18next");
var import_styled27 = __toESM(require("@emotion/styled"));
var import_ors_utils7 = require("ors-utils");
var BookButton = ({
    size = "sm",
    dataTestId = "btn-book",
    disabled,
    loading,
    onClick,
    "aria-label": ariaLabel,
    inChangeMode,
    isFreeBook
}) => {
    const {
        t
    } = (0, import_react_i18next34.useTranslation)();
    const isAffiliationPremiumCodeActive = !!import_ors_utils7.CookieManager.getCookie(import_ors_utils7.AFFILIATION_PREMIUM_CODE_KEY) && isFreeBook;
    const buttonText = isAffiliationPremiumCodeActive ? t("APPB2C.common.basic.bookPrePaid") : isFreeBook ? t("APPB2C.testCard.bookForFree") : `${t("APPB2C.testCard.bookExam")}
  ${inChangeMode ? ` ${t("APPB2C.testCard.review")}` : ""}`;
    return /* @__PURE__ */ import_react51.default.createElement(Wrapper, null, /* @__PURE__ */ import_react51.default.createElement(import_react_solas11.Button, {
        intent: "primary",
        size,
        "data-testid": dataTestId,
        "aria-label": ariaLabel,
        disabled,
        loading,
        onClick
    }, buttonText));
};
var Wrapper = import_styled27.default.div `
  padding: 8px 0px 0px 0px;
`;

// src/components/testCards/BookTestCard/components/MixedSessionWarning.tsx
var import_react52 = __toESM(require("react"));
var import_react_i18next35 = require("react-i18next");
var MixedSessionWarning = () => {
    const {
        t
    } = (0, import_react_i18next35.useTranslation)();
    return /* @__PURE__ */ import_react52.default.createElement(Notification, {
        type: "strong-warning"
    }, t("APPB2C.testCard.mixedSlots"));
};

// src/components/labeledFormattedPrice/index.tsx
var import_react53 = __toESM(require("react"));
var import_react_i18next36 = require("react-i18next");
var import_styled28 = __toESM(require("@emotion/styled"));
var LabeledFormattedPrice = (_a) => {
    var _b = _a,
        {
            intl
        } = _b,
        props = __objRest(_b, [
            "intl"
        ]);
    const {
        t
    } = (0, import_react_i18next36.useTranslation)();
    return /* @__PURE__ */ import_react53.default.createElement(LabeledFormattedPriceContainer, null, /* @__PURE__ */ import_react53.default.createElement(StyledLabel, {
        className: "price"
    }, t("APPB2C.testCard.bookingPrice")), /* @__PURE__ */ import_react53.default.createElement(StyledFormattedPrice, __spreadProps(__spreadValues({
        intl
    }, props), {
        className: "price-value"
    })));
};
var LabeledFormattedPriceContainer = import_styled28.default.div `
  display: flex;
  padding: 16px 0px 8px 0px;
  align-items: baseline;
  gap: 16px;
  justify-content: center;
`;
var StyledLabel = import_styled28.default.label `
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0px;
`;
var StyledFormattedPrice = (0, import_styled28.default)(FormattedPrice)
`
  color: #23085a;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;

  [dir='rtl'] & {
    font-weight: 500;
  }
`;

// src/components/testCards/BookTestCard/index.tsx
var TestCard = ({
    exam,
    handleBook,
    loadingExamDetails,
    locale,
    error,
    inChangeMode,
    agentPays,
    onChangeSpeakingTest,
    displayVenues,
    hideLrwTime,
    hideSpeaking,
    customLrwExamFormat,
    intl,
    showDistance,
    hidePrice,
    isMapViewEnabled
}) => {
    const [isSelected, setIsSelected] = (0, import_react54.useState)(false);
    (0, import_react54.useEffect)(() => {
        loadingExamDetails && setIsSelected(loadingExamDetails === exam.plannedExamId);
    }, [exam.plannedExamId, loadingExamDetails]);
    return /* @__PURE__ */ import_react54.default.createElement("div", null, /* @__PURE__ */ import_react54.default.createElement(import_react_solas_ors334.Card, {
        "data-examid": exam.plannedExamId
    }, /* @__PURE__ */ import_react54.default.createElement(WritingSection, __spreadValues({
        locale,
        hideLrwTime,
        customLrwExamFormat
    }, exam)), /* @__PURE__ */ import_react54.default.createElement(SpeakingSection, {
        exam,
        locale,
        onChangeSpeakingTest,
        displayVenues,
        hideSpeaking,
        showDistance,
        isMapViewEnabled
    }), /* @__PURE__ */ import_react54.default.createElement(ActionSection, null, /* @__PURE__ */ import_react54.default.createElement(Divider5, null), !agentPays && exam.fee > 0 && !hidePrice && /* @__PURE__ */ import_react54.default.createElement(LabeledFormattedPrice, {
        value: exam.fee,
        currencyIsoCode: exam.currencyCode,
        intl
    }), /* @__PURE__ */ import_react54.default.createElement(BookButton, {
        disabled: !!loadingExamDetails,
        loading: !!loadingExamDetails && isSelected,
        onClick: () => handleBook(exam),
        inChangeMode,
        size: "xs",
        isFreeBook: exam.fee === 0
    }))), isSelected && inChangeMode && !loadingExamDetails ? /* @__PURE__ */ import_react54.default.createElement(ApiErrorsAlert, {
        errors: error,
        style: {
            marginTop: "25px"
        }
    }) : null);
};
var ActionSection = import_styled29.default.div `
  button {
    width: 100%;
  }
`;

// src/components/testCards/TestDetailsCard/index.tsx
var import_react61 = __toESM(require("react"));
var import_styled34 = __toESM(require("@emotion/styled"));
var import_react_solas_ors335 = require("@britishcouncil/react-solas-ors3");

// src/components/testCards/TestDetailsCard/components/CardHeader.tsx
var import_react56 = __toESM(require("react"));

// src/components/SectionHeader.tsx
var import_react55 = __toESM(require("react"));
var import_styled30 = __toESM(require("@emotion/styled"));
var StyledHeader2 = import_styled30.default.div `
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 600px) {
    > button {
      display: block;
      margin-left: -7px;
    }
  }
`;
var SectionHeader = (_a) => {
    var _b = _a,
        {
            children,
            actionName,
            actionTestId,
            actionCallback,
            strong = true
        } = _b,
        props = __objRest(_b, [
            "children",
            "actionName",
            "actionTestId",
            "actionCallback",
            "strong"
        ]);
    const onAction = (e) => {
        e.preventDefault();
        if (actionCallback) {
            actionCallback();
        }
    };
    return /* @__PURE__ */ import_react55.default.createElement(StyledHeader2, __spreadValues({}, props), /* @__PURE__ */ import_react55.default.createElement("h2", null, strong ? /* @__PURE__ */ import_react55.default.createElement("strong", null, children) : /* @__PURE__ */ import_react55.default.createElement(import_react55.default.Fragment, null, children)), actionName && actionCallback && /* @__PURE__ */ import_react55.default.createElement("button", {
        "data-testid": actionTestId,
        type: "button",
        className: "btn-link link",
        onClick: onAction
    }, /* @__PURE__ */ import_react55.default.createElement(import_react55.default.Fragment, null, actionName)));
};

// src/components/testCards/TestDetailsCard/components/CardHeader.tsx
var CardHeader = (props) => {
    return /* @__PURE__ */ import_react56.default.createElement(SectionHeader, __spreadValues({
        strong: false
    }, props), props.children);
};

// src/components/testCards/TestDetailsCard/components/SelectSpeakingSlot.tsx
var import_react57 = __toESM(require("react"));
var SelectSpeakingSlot = ({
    exam,
    onSpeakingSlotSelect = () => null,
    slot,
    showVenues,
    locale,
    isMapViewEnabled
}) => {
    return /* @__PURE__ */ import_react57.default.createElement(import_react57.default.Fragment, null, /* @__PURE__ */ import_react57.default.createElement(SpeakingSlots, {
        speakingSlots: exam.speakingSlots,
        defaultSpeakingSlot: exam.defaultSpeakingSlot,
        onSpeakingSlotSelect,
        selectedSpeaking: slot,
        showVenues,
        linkingVenuesEnabled: exam.linkingVenuesEnabled,
        locale,
        isMapViewEnabled
    }));
};

// src/components/testCards/TestDetailsCard/components/SpeakingDetails.tsx
var import_react59 = __toESM(require("react"));
var import_styled32 = __toESM(require("@emotion/styled"));
var import_ors_utils8 = require("ors-utils");
var import_react_solas12 = require("@britishcouncil/react-solas");

// src/components/RetakeBadge.tsx
var import_react58 = __toESM(require("react"));
var import_styled31 = __toESM(require("@emotion/styled"));
var import_react_i18next37 = require("react-i18next");
var RetakeBadge = ({
    small
}) => {
    const {
        t
    } = (0, import_react_i18next37.useTranslation)();
    return /* @__PURE__ */ import_react58.default.createElement(BadgeWrapper, {
        className: "osrBadge",
        "data-testid": "osr-badge",
        small
    }, /* @__PURE__ */ import_react58.default.createElement("h2", null, t("APPB2C.common.basic.retake")));
};
var BadgeWrapper = import_styled31.default.div `
  position: absolute;
  top: -14px;
  right: 25px;
  padding: 0 20px 10px;
  display: grid;
  place-items: center;
  background-color: #e5eff8;
  border-radius: 6px;

  h2 {
    margin: 0;
    font-size: ${({ small }) => small ? "16px" : "18px"};

    @media (max-width: ${breakpoints["screen-xs-max"]}px) {
      font-size: 16px;
    }
  }
`;

// src/components/testCards/TestDetailsCard/components/SpeakingDetails.tsx
var SpeakingDetails = ({
    startTime,
    endTime,
    date,
    showVenues,
    showArrive,
    arriveTime,
    dataTestId,
    speakingTitle,
    locationCoords,
    locale,
    actionName,
    actionCallback,
    venueStreetAddress1,
    venueStreetAddress2,
    venueCity,
    venuePostCode,
    venueState,
    venueName,
    venueLatitude,
    venueLongitude,
    distance,
    speakingFormat,
    isOsrComponent,
    venueMapsUrl,
    isMapViewEnabled,
    venueIsAccessible
}) => {
    const {
        localeTime,
        localeDate
    } = (0, import_ors_utils8.localeFns)(locale);
    if (!date)
        return null;
    const examDate = localeDate(date);
    const timeSpan = `${localeTime(startTime)} - ${localeTime(endTime)}`;
    const speakingTitleDefault = /* @__PURE__ */ import_react59.default.createElement(import_react59.default.Fragment, null, date, /* @__PURE__ */ import_react59.default.createElement(import_react59.default.Fragment, null, showArrive ? /* @__PURE__ */ import_react59.default.createElement(TimeSeparator, null) : ", ", " ", timeSpan));
    return /* @__PURE__ */ import_react59.default.createElement(StyledVenueGroup, {
        className: "venue-group",
        "data-testid": dataTestId
    }, /* @__PURE__ */ import_react59.default.createElement(SpeakingDate, {
        startTime,
        speakingTitle: speakingTitle || speakingTitleDefault,
        showArrive,
        arriveTime,
        locale,
        date: examDate,
        time: timeSpan,
        speakingFormat,
        onChangeSpeakingTest: () => null
    }), !!actionName ? /* @__PURE__ */ import_react59.default.createElement(ChangeSpeakingButton, {
        size: "xs",
        onClick: actionCallback,
        "data-testid": "change-speaking"
    }, actionName) : null, /* @__PURE__ */ import_react59.default.createElement(VenueTitle, {
        addressLine1: venueStreetAddress1,
        addressLine2: venueStreetAddress2,
        city: venueCity,
        postCode: venuePostCode,
        name: venueName,
        state: venueState,
        latitude: venueLatitude,
        longitude: venueLongitude,
        distance,
        showDistance: !!locationCoords,
        sticky: false,
        showVenues,
        venueMapsUrl,
        isMapViewEnabled,
        isAccessible: venueIsAccessible
    }), isOsrComponent && /* @__PURE__ */ import_react59.default.createElement(RetakeBadge, null));
};
var StyledVenueGroup = import_styled32.default.div `
  width: 100%;
  display: flex;
  flex-direction: column;

  > .venue {
    background: transparent;
    margin: 4px 0px 0px 0px;
    padding: 10px 24px 0px 0px;

    [dir='rtl'] & {
      padding: 10px 0px 0px 24px;
    }
  }
  > div:not(.osrBadge) {
    height: 100%;
    justify-content: space-between;
  }
`;
var ChangeSpeakingButton = (0, import_styled32.default)(import_react_solas12.Button)
`
  && {
    border: 2px solid #005cb9;
    margin: 4px 0px 4px 32px;
    padding: 4px 30px !important;
    max-width: fit-content;
  }

  &.btn.btn-default:hover {
    background-color: #d5f0ff;
    border: 2px solid #005cb9;
    color: #005cb9;
  }
`;

// src/components/testCards/TestDetailsCard/components/WritingDetails.tsx
var import_react60 = __toESM(require("react"));
var import_styled33 = __toESM(require("@emotion/styled"));
var import_react_solas13 = require("@britishcouncil/react-solas");
var WritingDetails = ({
    examDate,
    startTime,
    endTime,
    examFormat,
    showVenues,
    showArrive,
    arriveTime,
    dataTestId,
    locationCoords,
    hideLrwTime,
    customLrwExamFormat,
    locale,
    customSkillName,
    actionName,
    actionCallback,
    venueStreetAddress1,
    venueStreetAddress2,
    venueCity,
    venuePostCode,
    venueState,
    venueName,
    venueLatitude,
    venueLongitude,
    distance,
    isOsrComponent,
    venueMapsUrl,
    isMapViewEnabled,
    venueIsAccessible
}) => {
    return /* @__PURE__ */ import_react60.default.createElement(StyledVenueGroup2, {
        className: "venue-group",
        "data-testid": dataTestId
    }, /* @__PURE__ */ import_react60.default.createElement(WritingSection, {
        examDate,
        startTime,
        endTime,
        examFormat,
        showArrive,
        arriveTime,
        hideLrwTime,
        customLrwExamFormat,
        locale,
        customSkillName,
        isLifeSkill: dataTestId === "lifeSkills-details"
    }), actionName ? /* @__PURE__ */ import_react60.default.createElement("div", null, /* @__PURE__ */ import_react60.default.createElement(ChangeLrwButton, {
        size: "xs",
        onClick: actionCallback,
        "data-testid": "change-lrw"
    }, actionName)) : null, /* @__PURE__ */ import_react60.default.createElement(VenueTitle, {
        addressLine1: venueStreetAddress1,
        addressLine2: venueStreetAddress2,
        city: venueCity,
        postCode: venuePostCode,
        state: venueState,
        name: venueName,
        latitude: venueLatitude,
        longitude: venueLongitude,
        distance,
        showDistance: !!locationCoords,
        sticky: false,
        showVenues,
        venueMapsUrl,
        isMapViewEnabled,
        isAccessible: venueIsAccessible
    }), isOsrComponent && /* @__PURE__ */ import_react60.default.createElement(RetakeBadge, null));
};
var StyledVenueGroup2 = import_styled33.default.div `
  width: 100%;
  display: flex;
  flex-direction: column;

  > .venue {
    background: transparent;
    margin: 4px 0px 0px 0px;
    padding: 10px 24px 0px 0px;

    [dir='rtl'] & {
      padding: 10px 0px 0px 24px;
    }
  }
`;
var ChangeLrwButton = (0, import_styled33.default)(import_react_solas13.Button)
`
  && {
    border: 2px solid #005cb9;
    margin: 4px 0px 4px 32px;
    padding: 4px 30px !important;
  }

  &.btn.btn-default:hover {
    background-color: #d5f0ff;
    border: 2px solid #005cb9;
    color: #005cb9;
  }
`;

// src/components/testCards/TestDetailsCard/index.tsx
var TestDetailsCard = ({
    displayAsBlock = false,
    children
}) => {
    return /* @__PURE__ */ import_react61.default.createElement(CardWrapper, {
        $displayAsBlock: displayAsBlock
    }, children);
};
TestDetailsCard.CardHeader = CardHeader;
TestDetailsCard.WritingDetails = WritingDetails;
TestDetailsCard.SelectSpeakingSlot = SelectSpeakingSlot;
TestDetailsCard.SpeakingDetails = SpeakingDetails;
var CardWrapper = (0, import_styled34.default)(import_react_solas_ors335.Card)
`
  && {
    display: ${(props) => props.$displayAsBlock ? "block" : "flex"};
    position: relative;
  }

  @media (max-width: ${breakpoints["screen-sm-max"]}px) {
    && {
      display: block;
    }
  }
`;

// src/components/testCards/IolDetailsCard/index.tsx
var import_react64 = __toESM(require("react"));
var import_styled37 = __toESM(require("@emotion/styled"));
var import_react_solas_ors337 = require("@britishcouncil/react-solas-ors3");

// src/components/testCards/IolDetailsCard/components/ActionButton.tsx
var import_react62 = __toESM(require("react"));
var import_react_solas14 = require("@britishcouncil/react-solas");
var import_styled35 = __toESM(require("@emotion/styled"));
var ActionButton = ({
    callbackName,
    dataTestId,
    callback
}) => {
    return /* @__PURE__ */ import_react62.default.createElement(StyledButton, {
        type: "button",
        onClick: callback,
        "data-testid": dataTestId
    }, callbackName);
};
var StyledButton = (0, import_styled35.default)(import_react_solas14.Button)
`
  && {
    border: 2px solid #005cb9;
    margin: 4px 0px 4px 32px;
    padding: 4px 30px !important;
  }

  @media (max-width: 849px) {
    && {
      margin: 4px 0px;
      width: 100%;
      height: 44px;
    }
  }
  &&.btn.btn-default:hover {
    background-color: #d5f0ff;
    border: 2px solid #005cb9;
    color: #005cb9;
  }
`;

// src/components/testCards/IolDetailsCard/components/OnlineTestDetails.tsx
var import_react63 = __toESM(require("react"));
var import_react_i18next38 = require("react-i18next");
var import_styled36 = __toESM(require("@emotion/styled"));
var import_react_solas_ors336 = require("@britishcouncil/react-solas-ors3");
var import_react_solas15 = require("@britishcouncil/react-solas");
var OnlineTestDetails = ({
    testDateTime,
    type
}) => {
    const {
        t
    } = (0, import_react_i18next38.useTranslation)();
    return /* @__PURE__ */ import_react63.default.createElement(TestContainer, {
        "data-testid": `${type}-details`
    }, /* @__PURE__ */ import_react63.default.createElement(ExamType, null, type === "lrw" ? /* @__PURE__ */ import_react63.default.createElement(import_react63.default.Fragment, null, /* @__PURE__ */ import_react63.default.createElement(import_react_solas_ors336.ExamFormatIcon, {
        className: "svg-ltr-only",
        format: "cd",
        "aria-hidden": "true"
    }), /* @__PURE__ */ import_react63.default.createElement("span", null, t("APPB2C.common.bookTest.results.lrw"))) : /* @__PURE__ */ import_react63.default.createElement(import_react63.default.Fragment, null, /* @__PURE__ */ import_react63.default.createElement(import_react_solas_ors336.SpeakingFormatIcon, {
        format: "remote",
        "aria-hidden": "true",
        className: "svg-ltr-only"
    }), t("APPB2C.common.bookTest.results.speaking"))), /* @__PURE__ */ import_react63.default.createElement(TestDateTimeContainer, null, /* @__PURE__ */ import_react63.default.createElement("p", {
        className: "testTimeAndDate"
    }, /* @__PURE__ */ import_react63.default.createElement(import_react_solas15.IcoCalendar, {
        "area-hidden": "true"
    }), /* @__PURE__ */ import_react63.default.createElement(ExamDateTime, {
        "data-testid": `${type}-date`
    }, testDateTime.fullDate)), /* @__PURE__ */ import_react63.default.createElement("p", {
        className: "testTimeAndDate"
    }, /* @__PURE__ */ import_react63.default.createElement(import_react_solas15.IcoClock, {
        "area-hidden": "true"
    }), /* @__PURE__ */ import_react63.default.createElement(ExamDateTime, {
        "data-testid": `${type}-time`
    }, testDateTime.timeSpan))));
};
var TestContainer = import_styled36.default.div `
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin: 4px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;

  [dir='rtl'] & {
    font-weight: 500;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: #23085a;
    flex-shrink: 0;
  }
`;
var ExamType = import_styled36.default.div `
  align-items: baseline;
  color: #23085a;
  display: flex;
  font-weight: 700;
  gap: 16px;
  margin: 4px 0px;
  font-size: 18px;

  [dir='rtl'] & {
    font-weight: 500;
  }
`;

// src/components/testCards/IolDetailsCard/index.tsx
var IolDetailsCard = ({
    speakingActionCallback,
    lrwActionCallback,
    speakingTestDateTime,
    lrwTestDateTime,
    displayColumn
}) => {
    return /* @__PURE__ */ import_react64.default.createElement(CardWrapper2, {
        displayColumn
    }, /* @__PURE__ */ import_react64.default.createElement("div", null, /* @__PURE__ */ import_react64.default.createElement(OnlineTestDetails, {
        type: "speaking",
        testDateTime: speakingTestDateTime
    }), speakingActionCallback && /* @__PURE__ */ import_react64.default.createElement(ChangeHeading, null, /* @__PURE__ */ import_react64.default.createElement(ActionButton, {
        dataTestId: speakingActionCallback.testId,
        callback: speakingActionCallback.callback,
        callbackName: speakingActionCallback.name
    }))), /* @__PURE__ */ import_react64.default.createElement(ExamsDivider, {
        displayColumn
    }), /* @__PURE__ */ import_react64.default.createElement("div", null, /* @__PURE__ */ import_react64.default.createElement(OnlineTestDetails, {
        type: "lrw",
        testDateTime: lrwTestDateTime
    }), lrwActionCallback && /* @__PURE__ */ import_react64.default.createElement(ChangeHeading, null, /* @__PURE__ */ import_react64.default.createElement(ActionButton, {
        dataTestId: lrwActionCallback.testId,
        callback: lrwActionCallback.callback,
        callbackName: lrwActionCallback.name
    }))));
};
var CardWrapper2 = (0, import_styled37.default)(import_react_solas_ors337.Card)
`
  display: flex;
  flex-direction: ${(props) => props.displayColumn ? "column" : "row"};

  div:not([class]) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 849px) {
    && {
      display: block;
    }
  }
  && button {
    width: 100%;
    margin: 12px 0px 4px 0px;
  }
`;
var ExamsDivider = import_styled37.default.div `
  border-left: 1px solid #c8c8c8;
  margin: ${({ displayColumn }) => displayColumn ? "18px 0px" : "0px 18px"};
  border-top: ${({ displayColumn }) => displayColumn ? "1px solid #c8c8c8" : "unset"};

  @media (max-width: 849px) {
    & {
      border-top: 1px solid #c8c8c8;
      margin: 18px 0px;
    }
  }
`;
var ChangeHeading = import_styled37.default.div `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

// src/components/speakingSlots/NotLinkedVenueNote.tsx
var NotLinkedVenueNote = () => {
    const {
        t
    } = (0, import_react_i18next39.useTranslation)();
    return /* @__PURE__ */ import_react65.default.createElement(Notification, {
        type: "warning"
    }, t("APPB2C.testCard.notLinkedVenue"));
};

// src/components/speakingSlots/SelectedSpeakingSection.tsx
var SelectedSpeakingSection = ({
    selectedSpeaking,
    showVenues,
    locationCoords,
    locale,
    isNotLinkedVenue,
    isMapViewEnabled
}) => {
    const {
        localeDate,
        localeTime
    } = (0, import_ors_utils9.localeFns)(locale);
    const {
        date,
        startTime,
        endTime,
        venueStreetAddress1,
        venueStreetAddress2,
        venueCity,
        venuePostCode,
        venueState,
        venueName,
        venueLatitude,
        venueLongitude,
        distance,
        speakingFormat,
        venueMapsUrl,
        venueIsAccessible
    } = selectedSpeaking;
    const speakingDate = localeDate(date);
    const title = `${localeTime(startTime)} - ${localeTime(endTime)}`;
    const uniqueId = (0, import_react66.useId)();
    return /* @__PURE__ */ import_react66.default.createElement(StyledVenueGroup3, {
        className: "venue-group",
        "data-testid": "selected-speaking-venue"
    }, /* @__PURE__ */ import_react66.default.createElement(VenueTitle, {
        addressLine1: venueStreetAddress1,
        addressLine2: venueStreetAddress2,
        city: venueCity,
        postCode: venuePostCode,
        state: venueState,
        name: venueName,
        latitude: venueLatitude,
        longitude: venueLongitude,
        distance,
        showDistance: !!locationCoords,
        sticky: false,
        showVenues,
        venueMapsUrl,
        isMapViewEnabled,
        isAccessible: venueIsAccessible
    }), isNotLinkedVenue && /* @__PURE__ */ import_react66.default.createElement(NotLinkedVenueNote, null), /* @__PURE__ */ import_react66.default.createElement("h3", null, speakingDate || ""), /* @__PURE__ */ import_react66.default.createElement(import_react_solas_ors338.BcRadio, {
        background: "gray",
        value: 0,
        checkedValue: 0,
        name: "speakingSlot_" + startTime + uniqueId,
        "data-starttime": startTime,
        readOnly: true
    }, /* @__PURE__ */ import_react66.default.createElement(SpeakingSlotDetails, {
        speakingFormat,
        timeRange: title
    })));
};
var StyledVenueGroup3 = import_styled38.default.div `
  div.radio {
    margin: 0;
  }
  > h3 {
    margin-bottom: 6px;
  }
  > .venue {
    background: #fff;
    margin-bottom: 15px;
  }
`;

// src/components/speakingSlots/VenueSpeakingListSection.tsx
var import_react69 = __toESM(require("react"));
var import_react_i18next40 = require("react-i18next");
var import_lodash_es4 = require("lodash-es");
var import_styled40 = __toESM(require("@emotion/styled"));
var import_react_solas_ors340 = require("@britishcouncil/react-solas-ors3");

// src/components/speakingSlots/SpeakingSlotDateGroup.tsx
var import_react68 = __toESM(require("react"));
var import_styled39 = __toESM(require("@emotion/styled"));
var import_ors_utils11 = require("ors-utils");

// src/components/speakingSlots/SpeakingSlot.tsx
var import_react67 = __toESM(require("react"));
var import_react_solas_ors339 = require("@britishcouncil/react-solas-ors3");
var import_ors_utils10 = require("ors-utils");
var SpeakingSlot = ({
    data,
    onSpeakingSlotSelect,
    locale
}) => {
    const {
        localeTime
    } = (0, import_ors_utils10.localeFns)(locale);
    const {
        startTime,
        endTime,
        speakingFormat
    } = data;
    const timeRange = `${localeTime(startTime)} - ${localeTime(endTime)}`;
    return /* @__PURE__ */ import_react67.default.createElement(import_react_solas_ors339.BcRadio, {
        background: "gray",
        value: 0,
        name: "speakingSlot_" + data.startTime,
        "data-starttime": data.startTime,
        title: `Select speaking ${timeRange}`,
        onChange: () => onSpeakingSlotSelect(data)
    }, /* @__PURE__ */ import_react67.default.createElement(SpeakingSlotDetails, {
        speakingFormat,
        timeRange
    }));
};

// src/components/speakingSlots/SpeakingSlotDateGroup.tsx
var SpeakingSlotDateGroup = ({
    date,
    speakingSlotList,
    onSpeakingSlotSelect,
    locale
}) => {
    const {
        localeDate
    } = (0, import_ors_utils11.localeFns)(locale);
    const formatedDate = localeDate(date);
    return /* @__PURE__ */ import_react68.default.createElement(StyledDiv2, {
        "data-testid": "speaking-date-group"
    }, /* @__PURE__ */ import_react68.default.createElement("h3", null, formatedDate), speakingSlotList.map((speakingSlot, index) => /* @__PURE__ */ import_react68.default.createElement(SpeakingSlot, {
        key: index,
        data: speakingSlot,
        onSpeakingSlotSelect,
        locale
    })));
};
var StyledDiv2 = import_styled39.default.div `
  margin-bottom: 20px;
  > h3 {
    margin-bottom: 6px;
  }
  div.radio {
    margin: 0;
  }
`;

// src/components/speakingSlots/VenueSpeakingListSection.tsx
var VenueSpeakingListSection = ({
    venueSpeakingList,
    openListOnInit,
    hideCollapser,
    showVenues,
    linkingVenuesEnabled,
    onSpeakingSlotSelect,
    i18n,
    locale,
    isMapViewEnabled
}) => {
    const {
        t
    } = (0, import_react_i18next40.useTranslation)();
    const i18nDefault = {
        showSpeakingTests: t("APPB2C.testCard.showSpeakingTests"),
        hideSpeakingTests: t("APPB2C.testCard.hideSpeakingTests")
    };
    const trans = __spreadValues(__spreadValues({}, i18nDefault), i18n);
    const {
        venueStreetAddress1,
        venueStreetAddress2,
        venueCity,
        venuePostCode,
        venueState,
        venueName,
        venueLatitude,
        venueLongitude,
        isVenueLinked,
        venueMapsUrl,
        venueIsAccessible
    } = venueSpeakingList[0];
    const dateGroups = (0, import_react69.useMemo)(() => {
        const speakingSlotDateGroup = (0, import_lodash_es4.groupBy)(venueSpeakingList, (ss) => ss.date);
        return Object.entries(speakingSlotDateGroup).map(([date, speakingSlotList]) => /* @__PURE__ */ import_react69.default.createElement(SpeakingSlotDateGroup, {
            date,
            key: date,
            speakingSlotList,
            onSpeakingSlotSelect,
            locale
        }));
    }, [venueSpeakingList, onSpeakingSlotSelect]);
    const [showList, setShowList] = (0, import_react69.useState)(!!openListOnInit);
    const onShowList = (e) => {
        e.preventDefault();
        setShowList(!showList);
    };
    const isNotLinkedVenue = linkingVenuesEnabled && isVenueLinked === false;
    return /* @__PURE__ */ import_react69.default.createElement(StyledVenueGroup4, {
        className: "venue-group",
        "data-testid": "speaking-details"
    }, /* @__PURE__ */ import_react69.default.createElement(VenueTitle, {
        addressLine1: venueStreetAddress1,
        addressLine2: venueStreetAddress2,
        city: venueCity,
        state: venueState,
        postCode: venuePostCode,
        name: venueName,
        latitude: venueLatitude,
        longitude: venueLongitude,
        showVenues,
        venueMapsUrl,
        isMapViewEnabled,
        isAccessible: venueIsAccessible
    }), isNotLinkedVenue && /* @__PURE__ */ import_react69.default.createElement(NotLinkedVenueNote, null), showList && /* @__PURE__ */ import_react69.default.createElement(import_react69.default.Fragment, null, dateGroups), !hideCollapser && /* @__PURE__ */ import_react69.default.createElement(CtaContainer, null, /* @__PURE__ */ import_react69.default.createElement(import_react_solas_ors340.LinkButton, {
        onClick: onShowList
    }, showList ? `- ${trans.hideSpeakingTests}` : `+ ${trans.showSpeakingTests}`)));
};
var CtaContainer = import_styled40.default.div `
  text-align: center;
  margin-bottom: 1em;
`;
var StyledVenueGroup4 = import_styled40.default.div `
  > .venue {
    background: #fff;
    margin-bottom: 15px;
  }
`;

// src/components/speakingSlots/index.tsx
var SpeakingSlots = ({
    speakingSlots,
    defaultSpeakingSlot,
    selectedSpeaking,
    onSpeakingSlotSelect,
    linkingVenuesEnabled,
    showVenues,
    locale,
    i18n,
    isMapViewEnabled
}) => {
    const venueSpeakingLists = (0, import_react70.useMemo)(() => getVenueSpeakingLists(showVenues, speakingSlots, defaultSpeakingSlot), [defaultSpeakingSlot, showVenues, speakingSlots]);
    if (selectedSpeaking) {
        const isNotLinkedVenue = linkingVenuesEnabled && selectedSpeaking.isVenueLinked === false;
        return /* @__PURE__ */ import_react70.default.createElement(SelectedSpeakingSection, {
            selectedSpeaking,
            showVenues,
            locale,
            isNotLinkedVenue,
            isMapViewEnabled
        });
    } else {
        return /* @__PURE__ */ import_react70.default.createElement(import_react70.default.Fragment, null, venueSpeakingLists.map((venueSpeakingList, index) => /* @__PURE__ */ import_react70.default.createElement(VenueSpeakingListSection, {
            key: index,
            venueSpeakingList,
            onSpeakingSlotSelect,
            openListOnInit: index === 0,
            showVenues,
            linkingVenuesEnabled,
            hideCollapser: venueSpeakingLists.length === 1,
            locale,
            i18n,
            isMapViewEnabled
        })));
    }
};

// src/components/speakingSlots/SpeakingSlotSelector.tsx
var import_react71 = __toESM(require("react"));
var import_styled41 = __toESM(require("@emotion/styled"));
var import_react_solas_ors341 = require("@britishcouncil/react-solas-ors3");
var import_ors_utils12 = require("ors-utils");
var SpeakingSlotSelector = ({
    slots,
    selectedSlot,
    speakingDate,
    locale,
    onSpeakingSlotSelect
}) => {
    const {
        localeTime
    } = (0, import_ors_utils12.localeFns)(locale);
    const timeRange = `${localeTime(selectedSlot == null ? void 0 : selectedSlot.startTime)} - ${localeTime(selectedSlot == null ? void 0 : selectedSlot.endTime)}`;
    if (selectedSlot) {
        const uniqueId = (0, import_react71.useId)();
        return /* @__PURE__ */ import_react71.default.createElement(Wrapper2, {
            className: "venue-group",
            "data-testid": "selected-speaking-venue"
        }, /* @__PURE__ */ import_react71.default.createElement("h3", null, speakingDate), /* @__PURE__ */ import_react71.default.createElement(import_react_solas_ors341.BcRadio, {
            background: "gray",
            value: 0,
            checkedValue: 0,
            name: "speakingSlot_" + uniqueId,
            "data-starttime": selectedSlot.startTime,
            readOnly: true
        }, /* @__PURE__ */ import_react71.default.createElement(SpeakingSlotDetails, {
            speakingFormat: selectedSlot.speakingFormat,
            timeRange
        })));
    } else {
        return /* @__PURE__ */ import_react71.default.createElement(import_react71.default.Fragment, null, /* @__PURE__ */ import_react71.default.createElement("h3", null, speakingDate), slots.map((slot, index) => {
            const timeRange2 = `${localeTime(slot == null ? void 0 : slot.startTime)} - ${localeTime(slot == null ? void 0 : slot.endTime)}`;
            return /* @__PURE__ */ import_react71.default.createElement(Wrapper2, {
                key: index,
                className: "venue-group",
                "data-testid": "selected-speaking-venue"
            }, /* @__PURE__ */ import_react71.default.createElement(import_react_solas_ors341.BcRadio, {
                background: "gray",
                value: 0,
                name: "speakingSlot_" + index,
                "data-starttime": slot.startTime,
                onChange: () => onSpeakingSlotSelect(index)
            }, /* @__PURE__ */ import_react71.default.createElement(SpeakingSlotDetails, {
                speakingFormat: slot.speakingFormat,
                timeRange: timeRange2
            })));
        }));
    }
};
var Wrapper2 = import_styled41.default.div `
  div.radio {
    margin: 0;
  }
  > h3 {
    margin-bottom: 6px;
  }
`;

// src/components/termsAndConditionsNotes/index.tsx
var import_react72 = __toESM(require("react"));
var import_react_i18next41 = require("react-i18next");
var import_react_solas_ors342 = require("@britishcouncil/react-solas-ors3");
var TermsAndConditionsNotes = ({
    privacyLink,
    noticeSummary,
    noticeFull,
    i18n
}) => {
    const {
        t
    } = (0, import_react_i18next41.useTranslation)();
    const i18nDefault = {
        main: t("APPB2C.common.account.terms.disclaimer"),
        collapseText: t("APPB2C.common.basic.expando.collapse"),
        expandText: t("APPB2C.common.basic.expando.show"),
        dataProtection: t("APPB2C.common.account.terms.extra.title"),
        full1: t("APPB2C.common.account.terms.extra.line1"),
        full2: t("APPB2C.common.account.terms.extra.line2"),
        full3_1: t("APPB2C.common.account.terms.extra.line3.1"),
        full3_2: t("APPB2C.common.account.terms.extra.line3.2")
    };
    const trans = __spreadValues(__spreadValues({}, i18nDefault), i18n);
    return /* @__PURE__ */ import_react72.default.createElement(import_react72.default.Fragment, null, /* @__PURE__ */ import_react72.default.createElement(HtmlTextRaw, {
        className: "small",
        htmlText: noticeSummary || trans.main
    }), /* @__PURE__ */ import_react72.default.createElement(import_react_solas_ors342.ExpandoText, {
        collapseText: trans.collapseText,
        expandText: trans.expandText,
        className: "small",
        "data-testid": "terms-and-conditions-notice"
    }, noticeFull ? /* @__PURE__ */ import_react72.default.createElement(HtmlTextRaw, {
        className: "small",
        htmlText: noticeFull
    }) : /* @__PURE__ */ import_react72.default.createElement(import_react72.default.Fragment, null, /* @__PURE__ */ import_react72.default.createElement("h3", null, trans.dataProtection), /* @__PURE__ */ import_react72.default.createElement("p", {
        className: "small"
    }, trans.full1), /* @__PURE__ */ import_react72.default.createElement("p", {
        className: "small"
    }, trans.full2), /* @__PURE__ */ import_react72.default.createElement("p", {
        className: "small"
    }, trans.full3_1, " ", /* @__PURE__ */ import_react72.default.createElement(ExternalLink, {
        href: privacyLink
    }, "www.britishcouncil.org/privacy"), trans.full3_2))));
};

// src/components/ApplyBoardWidget.tsx
var import_react73 = __toESM(require("react"));
var import_react_helmet2 = require("react-helmet");
var import_luxon3 = require("luxon");
var import_styled42 = __toESM(require("@emotion/styled"));
var import_react_common7 = require("@britishcouncil/react-common");
var import_ors25 = require("ors-api/ors2");
var import_ors_utils13 = require("ors-utils");
var ApplyBoardWidget = (_a) => {
    var _b = _a,
        {
            applyBoardScript,
            applyBoardStylesheet,
            environment,
            registrationId,
            testTaker,
            lrwDate,
            locationName
        } = _b,
        props = __objRest(_b, [
            "applyBoardScript",
            "applyBoardStylesheet",
            "environment",
            "registrationId",
            "testTaker",
            "lrwDate",
            "locationName"
        ]);
    const [loading, setLoading] = (0, import_react73.useState)(true);
    const [error, setError] = (0, import_react73.useState)();
    const [marketing, setMarketing] = (0, import_react73.useState)();
    const getMarketingAnswer = (questionShortcode) => {
        var _a2, _b2;
        return (_b2 = (_a2 = marketing == null ? void 0 : marketing.find((answer) => answer.questionShortCode === questionShortcode)) == null ? void 0 : _a2.answerName) != null ? _b2 : "";
    };
    (0, import_react73.useEffect)(() => {
        import_ors25.registrationClient.getMarketingInfo(registrationId).then((marketing2) => {
            setMarketing((marketing2.data.questions || []).map((q) => {
                var _a2;
                return {
                    questionShortCode: q.shortCode || "",
                    answerName: ((_a2 = q.choosenOption) == null ? void 0 : _a2.esolDescription) || ""
                };
            }));
        }).catch((err) => setError((0, import_react_common7.parseApiError)(err))).finally(() => setLoading(false));
    }, []);
    const widgetDataProps = {
        environment,
        emailAddress: testTaker == null ? void 0 : testTaker.email,
        passportNumber: testTaker == null ? void 0 : testTaker.idNumber,
        passportExpiry: import_luxon3.DateTime.fromISO((testTaker == null ? void 0 : testTaker.idExpiry) || "").toFormat("yyyy-MM-dd"),
        firstName: testTaker == null ? void 0 : testTaker.firstName,
        lastName: testTaker == null ? void 0 : testTaker.surname,
        countryOfResidence: testTaker == null ? void 0 : testTaker.country,
        nationality: getMarketingAnswer("CountryOfNationality"),
        reasonForTest: getMarketingAnswer("ReasonForTakingTest"),
        destinationCountry: getMarketingAnswer("CountryBeingApplied"),
        dateOfBirth: import_luxon3.DateTime.fromISO((testTaker == null ? void 0 : testTaker.dob) || "").toFormat("yyyy-MM-dd"),
        testSelection: (0, import_ors_utils13.examTypeDictionary)().ors.ac,
        levelOfEducation: getMarketingAnswer("EducationLevel"),
        address: [
            testTaker == null ? void 0 : testTaker.addressLine1,
            testTaker == null ? void 0 : testTaker.addressLine2,
            testTaker == null ? void 0 : testTaker.addressLine3,
            testTaker == null ? void 0 : testTaker.addressLine4,
            testTaker == null ? void 0 : testTaker.postCode
        ].filter((c) => c).join(", "),
        testDate: import_luxon3.DateTime.fromISO(lrwDate || "").toFormat("yyyy-MM-dd"),
        firstLanguage: getMarketingAnswer("MainLanguageSpoken"),
        gender: testTaker == null ? void 0 : testTaker.gender,
        occupationSector: getMarketingAnswer("OccupationSector"),
        occupationLevel: getMarketingAnswer("OccupationLevel"),
        testLocation: locationName
    };
    if (loading)
        return /* @__PURE__ */ import_react73.default.createElement(LoadingCard, {
            type: "white"
        });
    if (error)
        return null;
    return /* @__PURE__ */ import_react73.default.createElement(import_react73.default.Fragment, null, /* @__PURE__ */ import_react73.default.createElement(import_react_helmet2.Helmet, null, /* @__PURE__ */ import_react73.default.createElement("link", {
        href: applyBoardStylesheet,
        rel: "stylesheet"
    }), /* @__PURE__ */ import_react73.default.createElement("script", {
        async: true,
        src: applyBoardScript
    })), /* @__PURE__ */ import_react73.default.createElement(WidgetContainer, __spreadValues({
        id: "partners_widget",
        data: JSON.stringify(widgetDataProps)
    }, props)));
};
var WidgetContainer = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react73.default.createElement(CenteredDiv, __spreadValues({}, props));
};
var CenteredDiv = import_styled42.default.div `
  > div {
    margin: auto;
  }

  [dir='rtl'] & svg {
    transform: scaleX(1) !important;
  }
`;

// src/components/ExpiryDate.tsx
var import_react74 = __toESM(require("react"));
var import_react_i18next42 = require("react-i18next");
var import_styled43 = __toESM(require("@emotion/styled"));
var import_react_solas_ors343 = require("@britishcouncil/react-solas-ors3");
var ExpiryDate = ({
    allowToSetDoesntHaveExpiryDate,
    notExpire,
    expiryDate,
    i18n
}) => {
    const {
        t
    } = (0, import_react_i18next42.useTranslation)();
    const i18nDefault = {
        label: t("APPB2C.registration.testTaker.id.expiryDate", {
            idName: "APPB2C.registration.testTaker.id.typeNames.other"
        }),
        checkbox: t("APPB2C.common.draft.id.documentWithNoExpiryDate")
    };
    const trans = __spreadValues(__spreadValues({}, i18nDefault), i18n);
    return /* @__PURE__ */ import_react74.default.createElement(StyledFormGroup, {
        className: "form-group"
    }, /* @__PURE__ */ import_react74.default.createElement("label", null, trans.label, ":"), allowToSetDoesntHaveExpiryDate && /* @__PURE__ */ import_react74.default.createElement(import_react_solas_ors343.TnCCheckbox, __spreadValues({}, notExpire), trans.checkbox), (!allowToSetDoesntHaveExpiryDate || !notExpire.value) && /* @__PURE__ */ import_react74.default.createElement(DateField, __spreadValues({
        label: "",
        mode: "expiry-date"
    }, expiryDate)));
};
var StyledFormGroup = import_styled43.default.div `
  .form-checkbox {
    margin: 0;

    > .checkbox {
      margin-top: 0;
    }
  }
`;

// src/components/language/LanguageSwitcher.tsx
var import_react76 = __toESM(require("react"));
var import_react_i18next43 = require("react-i18next");
var import_fa = require("react-icons/fa");
var import_classnames5 = __toESM(require("classnames"));
var import_styled44 = __toESM(require("@emotion/styled"));
var import_ors_translations7 = require("ors-translations");

// src/components/language/useClearSearchParams.ts
var import_react75 = require("react");
var import_react_router_dom3 = require("react-router-dom");
var useClearSearchParams = () => {
    const [searchParams, setSearchParams] = (0, import_react_router_dom3.useSearchParams)();
    const urlLang = searchParams.get("lang");
    (0, import_react75.useEffect)(() => {
        if (urlLang) {
            searchParams.delete("lang");
            setSearchParams(searchParams);
        }
    }, []);
};

// src/components/language/LanguageSwitcher.tsx
var LanguageSwitcher = ({
    selectedLang,
    dispatchLangSwitch,
    activeCountryLangs
}) => {
    var _a;
    useClearSearchParams();
    const {
        t
    } = (0, import_react_i18next43.useTranslation)();
    const dropdown = (0, import_react76.useRef)(null);
    const [showDropdown, setShowDropdown] = (0, import_react76.useState)(false);
    const langs = !!activeCountryLangs ? (0, import_ors_translations7.useLanguageNames)().filter((lang) => lang.code === import_ors_translations7.defaultLanguage || (activeCountryLangs == null ? void 0 : activeCountryLangs.includes(lang.code))) : (0, import_ors_translations7.useLanguageNames)();
    const showLang = langs && langs.length > 1;
    const selectedLangName = (_a = langs.find((l) => l.code === selectedLang)) == null ? void 0 : _a.name;
    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const handleLangSwitch = (langCode) => {
        dispatchLangSwitch((0, import_ors_translations7.selectLanguage)(langCode));
        setShowDropdown(false);
    };
    const handleEsc = (0, import_react76.useCallback)((e) => {
        if (e.code === "Escape") {
            e.stopPropagation();
            e.stopImmediatePropagation();
            setShowDropdown(false);
        }
    }, [setShowDropdown]);
    const hideDropdown = ({
        target
    }) => {
        var _a2;
        return showDropdown && !((_a2 = dropdown.current) == null ? void 0 : _a2.contains(target)) && setShowDropdown(false);
    };
    (0, import_react76.useEffect)(() => {
        document.addEventListener("mousedown", hideDropdown);
        document.addEventListener("touchend", hideDropdown);
        document.addEventListener("keyup", hideDropdown);
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", hideDropdown);
            document.removeEventListener("touchend", hideDropdown);
            document.removeEventListener("keyup", hideDropdown);
            document.removeEventListener("keydown", handleEsc);
        };
    }, [hideDropdown, handleEsc]);
    return showLang ? /* @__PURE__ */ import_react76.default.createElement(import_react76.default.Fragment, null, /* @__PURE__ */ import_react76.default.createElement(Language, {
        className: "dropdown",
        ref: dropdown
    }, /* @__PURE__ */ import_react76.default.createElement(StyledBtn2, {
        type: "button",
        className: "bc-dropdown-toggle",
        onClick: toggleDropdown
    }, selectedLangName != null ? selectedLangName : t("APPB2C.common.nav.chooseLanguage"), " ", /* @__PURE__ */ import_react76.default.createElement(import_fa.FaCaretDown, null)), showDropdown && /* @__PURE__ */ import_react76.default.createElement("ul", {
        className: "dropdown-menu menu-show"
    }, langs.map((l) => {
        const isActive = l.code === selectedLang;
        return /* @__PURE__ */ import_react76.default.createElement("li", {
            key: l.code,
            className: (0, import_classnames5.default)({
                active: isActive
            })
        }, /* @__PURE__ */ import_react76.default.createElement(Option, {
            onClick: () => handleLangSwitch(l.code),
            tabIndex: isActive ? -1 : 0,
            disabled: isActive
        }, l.name));
    })))) : /* @__PURE__ */ import_react76.default.createElement(import_react76.default.Fragment, null);
};
var Language = import_styled44.default.li `
  > button {
    padding-right: 12px !important;
    [dir='rtl'] & {
      text-align: right !important;
    }
  }

  .dropdown-menu {
    @media (min-width: ${breakpoints["screen-md-min"]}px) {
      border-color: #e31837 !important;
    }

    li.active :before {
      @media (min-width: ${breakpoints["screen-md-min"]}px) {
        color: white !important;
      }
      color: #005cb9;
    }
  }

  button {
    @media (min-width: ${breakpoints["screen-md-min"]}px) {
      background-color: #e31837 !important;
      color: white;
    }
    color: #005cb9;

    &:hover:not(:disabled),
    &:focus,
    &:active {
      @media (min-width: ${breakpoints["screen-md-min"]}px) {
        background-color: #ab0033 !important;
        color: white;
      }
      background-color: #00dcff !important;
      color: #23085a;
    }
  }
`;
var Option = import_styled44.default.button `
  width: 100%;
  padding: 8px 15px 8px 5px;
  text-align: left;
  border: 0;

  [dir='rtl'] & {
    text-align: right;
  }

  @media (min-width: ${breakpoints["screen-md-min"]}px) {
    background: #ab0033;
    color: #fff;
  }

  @media (max-width: ${breakpoints["screen-sm-max"]}px) {
    padding-left: 24px;
  }
`;
var StyledBtn2 = import_styled44.default.button `
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 6px rgba(1, 156, 238, 0.5);
    z-index: 1;
    position: relative;
  }
`;

// src/components/language/activeCountryLanguageSettings.ts
var import_ors_translations8 = require("ors-translations");
var useActiveCountryLanguageSettings = (locale, additionalLanguages) => {
    var _a;
    const {
        activeCountryLangs,
        isCurrentLangAvailable
    } = selectedCountryLanguageSettings(locale, additionalLanguages);
    const langs = (0, import_ors_translations8.useLanguageNames)().filter((lang) => lang.code === import_ors_translations8.defaultLanguage || (activeCountryLangs == null ? void 0 : activeCountryLangs.includes(lang.code)));
    const singleLangAvailable = langs.length === 1;
    const currentLangName = (_a = (0, import_ors_translations8.useLanguageNames)().find((lang) => lang.code === locale)) == null ? void 0 : _a.name;
    return {
        isCurrentLangAvailable,
        langs,
        singleLangAvailable,
        currentLangName
    };
};
var selectedCountryLanguageSettings = (currentLanguage, additionalLanguages) => {
    const frontendLangs = (0, import_ors_translations8.useLanguageNames)().map((c) => c.code);
    const activeCountryLangs = additionalLanguages == null ? void 0 : additionalLanguages.filter((lang) => frontendLangs.includes(lang));
    const activeCountryHasLangs = !!activeCountryLangs && activeCountryLangs.length > 0 && !activeCountryLangs.includes(import_ors_translations8.ieltsUsaLanguage);
    const isCurrentLangAvailable = !!activeCountryLangs ? activeCountryLangs.includes(currentLanguage) || [import_ors_translations8.defaultLanguage, import_ors_translations8.pseudoLanguage].includes(currentLanguage) : true;
    return {
        activeCountryLangs,
        activeCountryHasLangs,
        isCurrentLangAvailable
    };
};

// src/components/SearchAndSelect.tsx
var import_react77 = __toESM(require("react"));
var import_react_select_search = __toESM(require("react-select-search"));
var import_styled45 = __toESM(require("@emotion/styled"));
var SearchAndSelect = (_a) => {
    var _b = _a,
        {
            options,
            style,
            className
        } = _b,
        params = __objRest(_b, ["options", "style", "className"]);
    return /* @__PURE__ */ import_react77.default.createElement("div", {
        style,
        className
    }, /* @__PURE__ */ import_react77.default.createElement(StyledSelectSearch, __spreadValues({
        options
    }, params)));
};
var StyledSelectSearch = (0, import_styled45.default)(import_react_select_search.default)
`
  position: relative;

  &__select {
    background: #fff;
    box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.3);
    margin-top: 3px;
  }

  &__options {
    list-style: none;
    padding: 0;
    margin: 0;

    > li {
      padding: 0;
      margin: 0;
    }
  }

  &__input {
    display: block;
    height: 40px;
    padding: 4px 18px;
    background: #fff;
    border: 2px solid #005cb9;
    border-radius: 30px;
    outline: none;
    text-align: left;
    text-overflow: ellipsis;
    line-height: 30px;
    font-size: 16px;
    -webkit-appearance: none;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    user-select: none;

    [dir='rtl'] & {
      text-align: right;
    }

    span {
      color: #54565a;
    }

    b {
      color: #005cb9;
    }

    svg {
      width: 18px;
      height: 18px;
      margin-top: 2px;
      position: absolute;
      right: 14px;

      [dir='rtl'] & {
        left: 14px;
        right: inherit;
      }
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      border-color: #004a94;
      background: #d5f0ff;
    }
    &:hover {
      background: #d5f0ff;
      border-color: #004a94;
      b {
        color: #004a94;
      }
    }
  }

  &__option {
    display: block;
    height: 36px;
    width: 100%;
    padding: 0 16px;
    background: #fff;
    border: none;
    outline: none;
    font-size: 16px;
    text-align: left;
    cursor: pointer;

    [dir='rtl'] & {
      text-align: right;
    }

    &.is-selected {
      background: #005cb9;
      color: #fff;

      svg {
        fill: #fff;
      }
    }

    &.is-highlighted,
    &:not(.is-selected):hover {
      background: #ecf5ff;
    }

    &.is-highlighted.is-selected,
    &.is-selected:hover {
      background: #004f9f;
    }
  }

  &__select {
    position: absolute;
    z-index: 25;
    right: 0;
    left: 0;
    border-radius: 3px;
    overflow: auto;
    max-height: 300px;
  }
`;

// src/components/WideReadOnlyField.tsx
var import_react_solas_ors344 = require("@britishcouncil/react-solas-ors3");
var import_styled46 = __toESM(require("@emotion/styled"));
var WideReadOnlyField = (0, import_styled46.default)(import_react_solas_ors344.ReadonlyField)
`
  & dt {
    @media (min-width: 850px) {
      width: 300px !important;

      [dir='rtl'] & {
        text-align: right;
      }
    }
  }
  & dd {
    @media (min-width: 850px) {
      margin-left: 330px !important;

      [dir='rtl'] & {
        margin-left: 0 !important;
        margin-right: 330px !important;
      }
    }
  }
`;

// src/components/UploadIdProofInstruction/UploadIdProofInstruction.tsx
var import_react83 = __toESM(require("react"));
var import_styled48 = __toESM(require("@emotion/styled"));
var import_react_i18next44 = require("react-i18next");

// src/components/UploadIdProofInstruction/icons/Crosshair.tsx
var import_react78 = __toESM(require("react"));
var Crosshair = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react78.default.createElement("svg", __spreadProps(__spreadValues({}, props), {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }), /* @__PURE__ */ import_react78.default.createElement("path", {
        d: "M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }));
};

// src/components/UploadIdProofInstruction/icons/DocumentPaperclip.tsx
var import_react79 = __toESM(require("react"));
var DocumentPaperclip = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react79.default.createElement("svg", __spreadProps(__spreadValues({}, props), {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }), /* @__PURE__ */ import_react79.default.createElement("path", {
        d: "M9 11V14C9 15.6569 10.3431 17 12 17V17C13.6569 17 15 15.6569 15 14V5.5C15 4.67157 14.3284 4 13.5 4V4C12.6716 4 12 4.67157 12 5.5V12",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round"
    }), /* @__PURE__ */ import_react79.default.createElement("path", {
        d: "M19 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7H8",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round"
    }));
};

// src/components/UploadIdProofInstruction/icons/DocumentFrame.tsx
var import_react80 = __toESM(require("react"));
var DocumentFrame = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react80.default.createElement("svg", __spreadProps(__spreadValues({}, props), {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }), /* @__PURE__ */ import_react80.default.createElement("path", {
        d: "M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ import_react80.default.createElement("rect", {
        x: "7",
        y: "6",
        width: "10",
        height: "12",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ import_react80.default.createElement("path", {
        d: "M10 9H14",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round"
    }), /* @__PURE__ */ import_react80.default.createElement("path", {
        d: "M10 12H14",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round"
    }), /* @__PURE__ */ import_react80.default.createElement("path", {
        d: "M10 15H14",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round"
    }));
};

// src/components/UploadIdProofInstruction/icons/LightGlare.tsx
var import_react81 = __toESM(require("react"));
var LightGlare = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react81.default.createElement("svg", __spreadProps(__spreadValues({}, props), {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }), /* @__PURE__ */ import_react81.default.createElement("path", {
        d: "M12 2V6M12 18V22M2 12H6M18 12H22",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ import_react81.default.createElement("path", {
        d: "M7 7L8.00142 8.00141M15.9986 15.9986L17 17M7 17L8.00142 15.9986M15.9986 8.00141L17 7",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ import_react81.default.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "2",
        stroke: "black",
        strokeWidth: "2",
        strokeLinecap: "round"
    }));
};

// src/components/UploadIdProofInstruction/InstructionPoint.tsx
var import_styled47 = __toESM(require("@emotion/styled"));
var import_react82 = __toESM(require("react"));
var InstructionPoint = ({
    icon,
    translatedText
}) => {
    return /* @__PURE__ */ import_react82.default.createElement(PointContainer, null, /* @__PURE__ */ import_react82.default.createElement("span", null, icon), /* @__PURE__ */ import_react82.default.createElement("span", null, translatedText));
};
var PointContainer = (0, import_styled47.default)("div")
`
  display: flex;
  gap: 20px;

  & > span {
    display: flex;
    align-items: center;
  }
`;

// src/components/UploadIdProofInstruction/UploadIdProofInstruction.tsx
var instructionPoints = [{
        icon: /* @__PURE__ */ import_react83.default.createElement(DocumentFrame, null),
        translationKey: "APPB2C.cj.idDetails.upload.instructions.capture"
    },
    {
        icon: /* @__PURE__ */ import_react83.default.createElement(Crosshair, null),
        translationKey: "APPB2C.cj.idDetails.upload.instructions.noBlur"
    },
    {
        icon: /* @__PURE__ */ import_react83.default.createElement(LightGlare, null),
        translationKey: "APPB2C.cj.idDetails.upload.instructions.directLight"
    },
    {
        icon: /* @__PURE__ */ import_react83.default.createElement(DocumentPaperclip, null),
        translationKey: "APPB2C.cj.idDetails.upload.instructions.covers"
    }
];
var UploadIdProofInstruction = () => {
    const {
        t
    } = (0, import_react_i18next44.useTranslation)();
    return /* @__PURE__ */ import_react83.default.createElement(InstructionsContainer, null, /* @__PURE__ */ import_react83.default.createElement(Title2, null, t("APPB2C.cj.idDetails.upload.instructions.title")), instructionPoints.map(({
        icon,
        translationKey
    }) => /* @__PURE__ */ import_react83.default.createElement(InstructionPoint, {
        key: translationKey,
        icon,
        translatedText: t(translationKey)
    })));
};
var Title2 = (0, import_styled48.default)("p")
`
  font-weight: bold;
  margin-bottom: 0;

  [dir='rtl'] & {
    font-weight: 500;
  }
`;
var InstructionsContainer = (0, import_styled48.default)("div")
`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// src/components/CentreContactInfo.tsx
var import_react84 = __toESM(require("react"));
var import_react_i18next45 = require("react-i18next");
var import_styled49 = __toESM(require("@emotion/styled"));
var import_react_solas_ors345 = require("@britishcouncil/react-solas-ors3");
var CentreContactInfo = (props) => {
    const {
        t
    } = (0, import_react_i18next45.useTranslation)();
    const contactUrl = "https://takeielts.britishcouncil.org/contact";
    return /* @__PURE__ */ import_react84.default.createElement(ContactContainer, null, props.hasError ? /* @__PURE__ */ import_react84.default.createElement(ExternalLink, {
        href: contactUrl
    }, contactUrl) : /* @__PURE__ */ import_react84.default.createElement(import_react84.default.Fragment, null, /* @__PURE__ */ import_react84.default.createElement(import_react_solas_ors345.ReadonlyField, {
        childrenDir: "ltr",
        label: t("APPB2C.common.changeBookingAck.cancel.contact.phone")
    }, props.phone), /* @__PURE__ */ import_react84.default.createElement(import_react_solas_ors345.ReadonlyField, {
        childrenDir: "ltr",
        label: t("APPB2C.common.changeBookingAck.cancel.contact.email")
    }, props.email)));
};
var ContactContainer = import_styled49.default.div `
  margin-top: 20px;
  word-break: break-word;

  dd {
    margin-left: 0 !important;
  }
`;

// src/components/timesUpModal/TimesUpModal.tsx
var import_react85 = __toESM(require("react"));
var import_react_i18next46 = require("react-i18next");
var TimesUpModal = ({
    showModal,
    onClose,
    onHide,
    onShow
}) => {
    const {
        t
    } = (0, import_react_i18next46.useTranslation)();
    return /* @__PURE__ */ import_react85.default.createElement(Modal, {
        show: showModal,
        onExit: () => {},
        title: t("APPB2C.cj.timer.modal.title"),
        confirmLabel: t("APPB2C.cj.timer.modal.cta"),
        onConfirm: onClose,
        intent: "danger",
        showHideLink: false,
        modalProps: {
            escapeExits: false,
            alert: true
        },
        onHide: () => onHide(),
        onShow: () => onShow()
    }, t("APPB2C.cj.timer.modal.message"));
};

// src/components/nearEndMsg/NearEndMsg.tsx
var import_react86 = __toESM(require("react"));
var import_react_i18next47 = require("react-i18next");
var import_styled50 = __toESM(require("@emotion/styled"));
var import_md = require("react-icons/md");
var import_react_solas_ors346 = require("@britishcouncil/react-solas-ors3");
var NearEndMsg = ({
    showMsg,
    minsLeft
}) => {
    const {
        t
    } = (0, import_react_i18next47.useTranslation)();
    if (!showMsg) {
        return null;
    }
    return /* @__PURE__ */ import_react86.default.createElement(StyledMsg, {
        id: "near-end-message"
    }, /* @__PURE__ */ import_react86.default.createElement("div", {
        className: "alert-msg",
        "aria-live": "polite"
    }, /* @__PURE__ */ import_react86.default.createElement(import_react_solas_ors346.MainContainer, null, /* @__PURE__ */ import_react86.default.createElement(import_md.MdAlarm, {
        className: "alarm-icon svg-ltr-only",
        "aria-hidden": "true"
    }), /* @__PURE__ */ import_react86.default.createElement("div", null, /* @__PURE__ */ import_react86.default.createElement("b", null, t("APPB2C.cj.timer.nearEnd.title")), /* @__PURE__ */ import_react86.default.createElement("p", null, t("APPB2C.cj.timer.nearEnd.text", {
        count: minsLeft || 0
    }))))));
};
var StyledMsg = import_styled50.default.div `
  position: sticky;
  z-index: 10;
  bottom: 0;

  .alert-msg {
    background: rgb(255, 221, 158);
    background: linear-gradient(
      0deg,
      rgba(255, 221, 158, 1) 0%,
      rgba(255, 228, 158, 0.8) 100%
    );
    margin: 0 auto;
    padding: 12px;

    p {
      margin: 0;
    }

    .alarm-icon {
      float: left;
      margin-left: -60px;
      width: 44px;
      height: 44px;
      margin-right: 16px;
      margin-top: 3px;
      fill: #a07a00;

      [dir='rtl'] & {
        float: right;
        margin-left: 16px;
        margin-right: -60px;
      }
    }

    @media (max-width: 849px) {
      .alarm-icon {
        margin-left: 0;
      }
    }
  }

  /** Fix for IE */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    position: fixed;
    left: 0;
    right: 0;
  }
`;

// src/components/ValidatedButton.tsx
var import_react87 = __toESM(require("react"));
var import_styled51 = __toESM(require("@emotion/styled"));
var import_react_solas16 = require("@britishcouncil/react-solas");
var ValidatedButton = ({
    text,
    sideNote,
    disabled,
    loading,
    intent,
    btnTestId,
    onClick,
    showError,
    errorMsg,
    errorTestId
}) => {
    return /* @__PURE__ */ import_react87.default.createElement(ButtonWrapper, null, /* @__PURE__ */ import_react87.default.createElement("div", null, /* @__PURE__ */ import_react87.default.createElement(StyledButton2, {
        type: "button",
        "data-testid": btnTestId,
        intent,
        loading,
        disabled,
        onClick
    }, text), /* @__PURE__ */ import_react87.default.createElement("p", null, sideNote)), showError && /* @__PURE__ */ import_react87.default.createElement(ValError, {
        "data-testid": errorTestId
    }, errorMsg));
};
var ButtonWrapper = import_styled51.default.div `
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  > span {
    width: 45%;
  }
  p {
    font-size: 0.8em;
    width: 300px;
    text-align: center;
    margin: 10px 0 20px;
  }
  @media (max-width: ${breakpoints["screen-xs-max"]}px) {
    > span {
      width: 100%;
      margin-bottom: 15px;
    }
  }
`;
var StyledButton2 = (0, import_styled51.default)(import_react_solas16.Button)
`
  font-size: 1em;
`;
var ValError = import_styled51.default.span `
  border-left: 5px solid #a94442;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  color: #a94442;
  padding: 3px 10px;
  max-width: 335px;
  line-height: 20px;
  margin-top: 10px;
  & > button {
    padding: 0;
    margin: 0;
    border: 0;
    text-decoration: none;
  }
`;

// src/components/WootricSurvey.tsx
var import_react88 = __toESM(require("react"));
var import_luxon4 = require("luxon");
var import_ors_translations9 = require("ors-translations");
var PRODUCT_NAME = "B2C";
var WootricSurvey = (settings) => {
    const lang = (0, import_ors_translations9.useSelectedLang)();
    const createdAt = import_luxon4.DateTime.now().toUnixInteger();
    let setupScript = document.createElement("script");
    setupScript.type = "text/javascript";
    setupScript.id = "wootric-settings";
    setupScript.async = true;
    setupScript.innerHTML = `
      wootric_no_surveyed_cookie = true;
      wootric_survey_immediately = true;
      window.wootricSettings = ${JSON.stringify(__spreadProps(__spreadValues({}, settings), {
    product_name: PRODUCT_NAME,
    created_at: createdAt,
    language: getWootricLanguageCode(lang)
  }))};
    `;
    if (document.getElementById("wootric-settings") == null) {
        document.body.appendChild(setupScript);
    }
    let beacon = document.createElement("script");
    beacon.type = "text/javascript";
    beacon.id = "wootric-beacon";
    beacon.async = true;
    beacon.src = "https://cdn.wootric.com/wootric-sdk.js";
    const windowWootric = window;
    beacon.onload = function() {
        windowWootric.wootric("run");
    };
    if (document.getElementById("wootric-beacon") == null) {
        document.body.appendChild(beacon);
    }
    return /* @__PURE__ */ import_react88.default.createElement("div", null);
};
var getWootricFormatDate = (date) => import_luxon4.DateTime.fromISO(date != null ? date : "").toUnixInteger();
var getWootricLanguageCode = (lang) => {
    switch (lang) {
        case "zh-TW":
            return "ZH_HANT";
        case "zh-CN":
            return "ZH_HANS";
        case "ko":
            return "KO";
        case "en-GB":
        case "en-US":
            return "EN";
        default:
            return lang;
    }
};

// src/components/UploadIdProofOCRGuidance/UploadIdProofOCRGuidance.tsx
var import_react96 = __toESM(require("react"));
var import_react_i18next48 = require("react-i18next");
var import_react97 = require("@emotion/react");
var import_styled54 = __toESM(require("@emotion/styled"));
var import_pure_react_carousel4 = require("pure-react-carousel");
var import_react_carousel_es = require("pure-react-carousel/dist/react-carousel.es.css");
var import_io = require("react-icons/io");

// src/components/UploadIdProofOCRGuidance/GuidanceCard.tsx
var import_react89 = __toESM(require("react"));
var import_react_player = require("@dotlottie/react-player");
var import_styled52 = __toESM(require("@emotion/styled"));
var GuidanceCard = (0, import_react89.forwardRef)(({
    clipPath,
    text,
    onAnimationComplete
}, ref) => {
    return /* @__PURE__ */ import_react89.default.createElement(Container, null, /* @__PURE__ */ import_react89.default.createElement(TextBlock, null, text), /* @__PURE__ */ import_react89.default.createElement(IllustrationBlock, null, /* @__PURE__ */ import_react89.default.createElement(import_react_player.DotLottiePlayer, {
        src: clipPath,
        ref,
        onEvent: (event) => {
            if (event === import_react_player.PlayerEvents.Complete) {
                onAnimationComplete();
            }
        }
    })));
});
var Container = import_styled52.default.div `
  display: grid;
  gap: 1em;
  @media (min-width: ${breakpoints["screen-xs-max"]}px) {
    grid-template-columns: 4fr 6fr;
  }
`;
var TextBlock = import_styled52.default.p `
  grid-area: 2 / 1;
  align-self: center;
  margin: 0;
  font-weight: 700;
  color: #23085a;

  [dir='rtl'] & {
    font-weight: 500;
  }

  @media (min-width: ${breakpoints["screen-xs-max"]}px) {
    grid-area: 1 / 1;
  }
`;
var IllustrationBlock = import_styled52.default.div `
  grid-area: 1 / 1;
  padding: 0 5%;

  @media (min-width: ${breakpoints["screen-xs-max"]}px) {
    grid-area: 1 / 2;
    padding: 0;
  }
`;

// src/components/UploadIdProofOCRGuidance/SlideNavDots.tsx
var import_react92 = __toESM(require("react"));
var import_react93 = require("@emotion/react");
var import_styled53 = __toESM(require("@emotion/styled"));
var import_fa2 = require("react-icons/fa");
var import_pure_react_carousel3 = require("pure-react-carousel");

// src/components/UploadIdProofOCRGuidance/useCarouselControls.tsx
var import_react90 = require("react");
var import_pure_react_carousel = require("pure-react-carousel");
var useCarouselControls = () => {
    const carouselContext = (0, import_react90.useContext)(import_pure_react_carousel.CarouselContext);
    const setActiveSlide = (0, import_react90.useCallback)((index) => {
        const {
            state,
            setStoreState
        } = carouselContext;
        const newIndex = index < 0 ? state.totalSlides - 1 : index >= state.totalSlides ? 0 : index;
        setStoreState(__spreadProps(__spreadValues({}, state), {
            currentSlide: newIndex
        }));
    }, [carouselContext]);
    const prevSlide = (0, import_react90.useCallback)(() => {
        const {
            state
        } = carouselContext;
        setActiveSlide(state.currentSlide - 1);
    }, [carouselContext, setActiveSlide]);
    const nextSlide = (0, import_react90.useCallback)(() => {
        const {
            state
        } = carouselContext;
        setActiveSlide(state.currentSlide + 1);
    }, [carouselContext, setActiveSlide]);
    return {
        setActiveSlide,
        prevSlide,
        nextSlide
    };
};

// src/components/UploadIdProofOCRGuidance/useCarouselEvents.tsx
var import_react91 = require("react");
var import_pure_react_carousel2 = require("pure-react-carousel");
var useCarouselEvents = (onChange) => {
    const carouselContext = (0, import_react91.useContext)(import_pure_react_carousel2.CarouselContext);
    (0, import_react91.useEffect)(() => {
        carouselContext.subscribe(onChange);
        return () => {
            carouselContext.unsubscribe(onChange);
        };
    }, [carouselContext, onChange]);
};

// src/components/UploadIdProofOCRGuidance/SlideNavDots.tsx
var SlideNavDots = ({
    onClick,
    onFocus,
    onBlur
}) => {
    const carouselContext = (0, import_react92.useContext)(import_pure_react_carousel3.CarouselContext);
    const {
        nextSlide,
        prevSlide,
        setActiveSlide
    } = useCarouselControls();
    const dotsRef = (0, import_react92.useRef)([]);
    const [focused, setFocused] = (0, import_react92.useState)(false);
    const isSomeDotFocused = () => dotsRef.current.some((node) => node == null ? void 0 : node.matches(":focus"));
    const focusDotForCurrentSlide = () => {
        var _a;
        (_a = dotsRef.current[carouselContext.state.currentSlide]) == null ? void 0 : _a.focus();
    };
    const handleFocus = (0, import_react92.useCallback)(() => {
        setFocused(true);
        onFocus == null ? void 0 : onFocus();
    }, [onFocus]);
    const handleBlur = (0, import_react92.useCallback)(() => {
        setFocused(false);
        onBlur == null ? void 0 : onBlur();
    }, [onBlur]);
    useCarouselEvents(() => {
        if (isSomeDotFocused()) {
            focusDotForCurrentSlide();
        }
    });
    const handleKeyDown = (0, import_react92.useCallback)((event) => {
        if (event.key === "ArrowLeft") {
            prevSlide();
        }
        if (event.key === "ArrowRight") {
            nextSlide();
        }
    }, [nextSlide, prevSlide]);
    return /* @__PURE__ */ import_react92.default.createElement(Dots, {
        className: focused ? "focus" : void 0,
        renderDots: (props) => /* @__PURE__ */ import_react92.default.createElement(DotsWrapper, null, Array(carouselContext.state.totalSlides).fill(void 0).map((_, index) => /* @__PURE__ */ import_react92.default.createElement(Dot, {
            key: index,
            onClick: () => {
                setActiveSlide(index);
                onClick == null ? void 0 : onClick();
            },
            onFocus: handleFocus,
            onBlur: handleBlur,
            selected: props.currentSlide === index,
            ref: (node) => {
                if (node) {
                    dotsRef.current[index] = node;
                } else {
                    delete dotsRef.current[index];
                }
            }
        }))),
        onKeyDown: handleKeyDown
    });
};
var Dot = (0, import_react92.forwardRef)(({
    onClick,
    onFocus,
    onBlur,
    selected
}, ref) => /* @__PURE__ */ import_react92.default.createElement(import_react93.ClassNames, null, ({
    css: css2
}) => /* @__PURE__ */ import_react92.default.createElement("button", {
    "aria-label": "slide dot",
    "aria-selected": selected,
    className: css2 `
            margin-left: 1em;
            border: 0;
            background-color: transparent;
            color: ${selected ? "#005cb9" : "#c8c8c8"};
            cursor: ${selected ? "default" : "pointer"};

            [dir='rtl'] & {
              margin-left: 0;
              margin-right: 1em;
            }

            &:first-of-type {
              margin-left: 0;
            }
          `,
    ref,
    type: "button",
    onClick,
    onFocus,
    onBlur,
    tabIndex: selected ? void 0 : -1
}, /* @__PURE__ */ import_react92.default.createElement(import_fa2.FaCircle, null))));
var Dots = (0, import_styled53.default)(import_pure_react_carousel3.DotGroup)
`
  margin-bottom: 25px;
  text-align: center;
  line-height: 1;
`;
var DotsWrapper = import_styled53.default.div `
  display: inline-block;
  border-radius: 20px;
  padding: 5px 5px 3px;

  .focus & {
    box-shadow: 0 0 0 6px #ff8200;
  }
`;

// src/components/UploadIdProofOCRGuidance/useElementVisibility.tsx
var import_react94 = require("react");
var useElementVisibility = (callback) => {
    const hasElementAppearedRef = (0, import_react94.useRef)(false);
    const observerRef = (0, import_react94.useRef)();
    const elementVisibilityRef = (node) => {
        var _a;
        if (node) {
            observerRef.current = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.target === node && entry.isIntersecting && !hasElementAppearedRef.current) {
                        hasElementAppearedRef.current = true;
                        callback();
                    }
                });
            }, {
                threshold: 1
            });
            observerRef.current.observe(node);
        } else {
            (_a = observerRef.current) == null ? void 0 : _a.disconnect();
        }
    };
    return elementVisibilityRef;
};

// src/components/UploadIdProofOCRGuidance/useSwipe.tsx
var import_react95 = require("react");
var useSwipe = ({
    onMove,
    onSwipe,
    onEnd,
    threshold
}) => {
    const [startX, setStartX] = (0, import_react95.useState)();
    const [deltaX, setDeltaX] = (0, import_react95.useState)();
    const onTouchStart = (ev) => {
        setStartX(ev.targetTouches[0].screenX);
    };
    const onTouchMove = (ev) => {
        setDeltaX(ev.targetTouches[0].screenX - startX);
        onMove();
    };
    const onTouchEnd = (ev) => {
        if (threshold === void 0) {
            return;
        }
        onEnd();
        if (Math.abs(deltaX) >= threshold) {
            onSwipe();
        }
    };
    const onTouchCancel = (ev) => {
        onEnd();
    };
    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        onTouchCancel
    };
};

// src/components/UploadIdProofOCRGuidance/UploadIdProofOCRGuidance.tsx
var TRANSITION_DURATION = 500;
var MOVE_THRESHOLD = 0.1;
var Slideshow = ({
    slides
}) => {
    const carouselContext = (0, import_react96.useContext)(import_pure_react_carousel4.CarouselContext);
    const {
        nextSlide
    } = useCarouselControls();
    const [currentSlide, setCurrentSlide] = (0, import_react96.useState)(0);
    const slideshowState = (0, import_react96.useRef)({
        players: [],
        isAutoAdvanceEnabled: true,
        isPausedTemporarily: false
    });
    const sliderBoxRef = (0, import_react96.useRef)(null);
    const isAdvancing = () => {
        const {
            isAutoAdvanceEnabled,
            isPausedTemporarily
        } = slideshowState.current;
        return isAutoAdvanceEnabled && !isPausedTemporarily;
    };
    const setCurrentSlideLoop = (loop) => {
        const {
            players
        } = slideshowState.current;
        players[currentSlide].setLoop(loop);
    };
    const stopAutoAdvance = () => {
        slideshowState.current.isAutoAdvanceEnabled = false;
        setCurrentSlideLoop(true);
    };
    const startAutoAdvance = () => {
        slideshowState.current.isAutoAdvanceEnabled = true;
        setCurrentSlideLoop(false);
    };
    const pausePlaybackTemporarily = () => {
        slideshowState.current.isPausedTemporarily = true;
        setCurrentSlideLoop(true);
    };
    const resumePlayback = () => {
        slideshowState.current.isPausedTemporarily = false;
        setCurrentSlideLoop(false);
    };
    const playCurrentSlide = (loop = false) => {
        const {
            players
        } = slideshowState.current;
        players[currentSlide].setLoop(loop);
        players[currentSlide].play();
    };
    useCarouselEvents(() => {
        setCurrentSlide(carouselContext.state.currentSlide);
    });
    (0, import_react96.useEffect)(() => {
        const {
            players,
            transitionTimeout
        } = slideshowState.current;
        if (transitionTimeout) {
            clearTimeout(transitionTimeout);
        }
        slideshowState.current.transitionTimeout = setTimeout(() => {
            players.forEach((player) => player.stop());
            playCurrentSlide(!isAdvancing());
        }, TRANSITION_DURATION);
    }, [currentSlide]);
    const handleAnimationComplete = (0, import_react96.useCallback)((index) => {
        const {
            players
        } = slideshowState.current;
        if (isAdvancing()) {
            players[index].stop();
            nextSlide();
        }
    }, []);
    const slideshowVisibilityRef = useElementVisibility(playCurrentSlide);
    const trayTouchHandlers = useSwipe({
        onMove: pausePlaybackTemporarily,
        onSwipe: stopAutoAdvance,
        onEnd: resumePlayback,
        threshold: sliderBoxRef.current ? sliderBoxRef.current.clientWidth * MOVE_THRESHOLD : void 0
    });
    return /* @__PURE__ */ import_react96.default.createElement("div", {
        ref: slideshowVisibilityRef
    }, /* @__PURE__ */ import_react96.default.createElement(SlideNavDots, {
        onClick: stopAutoAdvance,
        onFocus: pausePlaybackTemporarily,
        onBlur: resumePlayback
    }), /* @__PURE__ */ import_react96.default.createElement(import_react97.ClassNames, null, ({
        css: css2
    }) => {
        const buttonClassName = css2 `
            display: grid;
            width: 20px;
            height: 20px;
            align-items: center;
            align-content: center;
            justify-items: center;
            justify-content: center;
            position: relative;
            border: 2px solid #005cb9;
            border-radius: 50%;
            background-color: transparent;
            font-size: 22px;
            line-height: 1;
            color: #005cb9;

            &[disabled] {
              color: #c8c8c8;
              border-color: #c8c8c8;
            }

            &:focus {
              box-shadow: 0 0 0 6px #ff8200;
            }
          `;
        return /* @__PURE__ */ import_react96.default.createElement(Container2, null, /* @__PURE__ */ import_react96.default.createElement(SliderBox, {
            ref: sliderBoxRef
        }, /* @__PURE__ */ import_react96.default.createElement(import_pure_react_carousel4.Slider, {
            classNameAnimation: css2 `
                    transition: transform ${TRANSITION_DURATION}ms;
                  `,
            moveThreshold: MOVE_THRESHOLD,
            tabIndex: -1,
            trayProps: trayTouchHandlers
        }, slides.map((slide, index) => /* @__PURE__ */ import_react96.default.createElement(import_pure_react_carousel4.Slide, {
            index,
            key: index,
            onFocus: pausePlaybackTemporarily,
            onBlur: resumePlayback
        }, /* @__PURE__ */ import_react96.default.createElement(GuidanceCard, {
            clipPath: slide.clipPath,
            text: slide.text,
            ref: (player) => {
                if (player) {
                    slideshowState.current.players[index] = player;
                } else {
                    delete slideshowState.current.players[index];
                }
            },
            onAnimationComplete: () => {
                handleAnimationComplete(index);
            }
        }))))), /* @__PURE__ */ import_react96.default.createElement(BackControl, null, /* @__PURE__ */ import_react96.default.createElement(import_pure_react_carousel4.ButtonBack, {
            onClick: stopAutoAdvance,
            disabled: false,
            className: buttonClassName,
            onFocus: pausePlaybackTemporarily,
            onBlur: resumePlayback
        }, /* @__PURE__ */ import_react96.default.createElement(import_io.IoIosArrowDropleftCircle, null))), /* @__PURE__ */ import_react96.default.createElement(NextControl, null, /* @__PURE__ */ import_react96.default.createElement(import_pure_react_carousel4.ButtonNext, {
            onClick: stopAutoAdvance,
            disabled: false,
            className: buttonClassName,
            onFocus: pausePlaybackTemporarily,
            onBlur: resumePlayback
        }, /* @__PURE__ */ import_react96.default.createElement(import_io.IoIosArrowDroprightCircle, null))));
    }));
};
var UploadIdProofOCRGuidance = () => {
    const {
        t
    } = (0, import_react_i18next48.useTranslation)();
    const slides = (0, import_react96.useMemo)(() => [{
            clipPath: "https://bccdn.britishcouncil.org/apps/ors2/new-cj/clips/crp.lottie",
            text: t("APPB2C.cj.idDetails.upload.passport.guidelines.crop")
        },
        {
            clipPath: "https://bccdn.britishcouncil.org/apps/ors2/new-cj/clips/fngr.lottie",
            text: t("APPB2C.cj.idDetails.upload.passport.guidelines.cover")
        },
        {
            clipPath: "https://bccdn.britishcouncil.org/apps/ors2/new-cj/clips/glr.lottie",
            text: t("APPB2C.cj.idDetails.upload.passport.guidelines.glare")
        },
        {
            clipPath: "https://bccdn.britishcouncil.org/apps/ors2/new-cj/clips/wtrmrk.lottie",
            text: t("APPB2C.cj.idDetails.upload.passport.guidelines.watermark")
        }
    ], [t]);
    return /* @__PURE__ */ import_react96.default.createElement(import_pure_react_carousel4.CarouselProvider, {
        totalSlides: slides.length,
        naturalSlideWidth: 100,
        naturalSlideHeight: 95,
        infinite: true
    }, /* @__PURE__ */ import_react96.default.createElement("p", null, t("APPB2C.cj.idDetails.upload.passport.guidelines.followInstructions")), /* @__PURE__ */ import_react96.default.createElement(Slideshow, {
        slides
    }));
};
var Container2 = import_styled54.default.div `
  display: grid;
  grid-template-columns: 1em auto 1em;

  .carousel__slider {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .carousel__slide {
    padding-bottom: calc(16.875% + 6em) !important;
  }

  @media (min-width: 450px) {
    .carousel__slide {
      padding-bottom: calc(16.875% + 4.5em) !important;
    }
  }

  @media (min-width: ${breakpoints["screen-xs-max"]}px) {
    grid-template-columns: 3em auto 3em;
    gap: 1em;

    .carousel__slide {
      padding-bottom: 11.2528% !important;
    }
  }
`;
var SliderBox = import_styled54.default.div `
  grid-area: 1 / 2;
`;
var BackNextBox = import_react97.css `
  align-self: start;
  padding-top: calc((100vw - 80px) * 0.29);
  justify-self: center;

  @media (min-width: ${breakpoints["screen-xs-max"]}px) {
    align-self: center;
    padding-top: 0;
  }
`;
var BackControl = import_styled54.default.div `
  ${BackNextBox};
  grid-area: 1 / 1;
`;
var NextControl = import_styled54.default.div `
  ${BackNextBox};
  grid-area: 1 / 3;
`;

// src/components/VenueSearchResultsWrapper.tsx
var import_react98 = __toESM(require("react"));
var import_styled55 = __toESM(require("@emotion/styled"));
var import_react_solas_ors347 = require("@britishcouncil/react-solas-ors3");
var VenueSearchResultsWrapper = ({
    firstEl,
    showVenues,
    showDistance,
    children,
    isMapViewEnabled
}) => {
    return /* @__PURE__ */ import_react98.default.createElement(VenueResultsContainer, null, /* @__PURE__ */ import_react98.default.createElement(import_react_solas_ors347.PageContainer, null, /* @__PURE__ */ import_react98.default.createElement(VenueTitle, {
        addressLine1: firstEl.venueStreetAddress1,
        addressLine2: firstEl.venueStreetAddress2,
        city: firstEl.venueCity,
        postCode: firstEl.venuePostCode,
        name: firstEl.venueName,
        state: firstEl.venueState,
        latitude: firstEl == null ? void 0 : firstEl.venueLatitude,
        longitude: firstEl == null ? void 0 : firstEl.venueLongitude,
        distance: firstEl.distance,
        showDistance,
        showVenues,
        venueMapsUrl: firstEl.venueMapsUrl,
        isMapViewEnabled,
        isAccessible: firstEl.venueIsAccessible
    }), /* @__PURE__ */ import_react98.default.createElement(CardsGrid, null, children)));
};
var VenueResultsContainer = import_styled55.default.div `
  div[data-testid='page-container'] {
    padding: 32px;
  }
`;
var CardsGrid = import_styled55.default.div `
  display: grid;
  grid: auto-flow / repeat(1, 1fr);
  grid-gap: 20px;

  @media (min-width: 850px) {
    grid: auto-flow / repeat(2, 1fr);
    grid-gap: 24px;
    div[data-examid] {
      margin: 0;
    }
  }
`;

// src/components/Tooltip.tsx
var import_react99 = __toESM(require("react"));
var import_styled56 = __toESM(require("@emotion/styled"));
var import_react_tooltip = require("react-tooltip");
var Tooltip = ({
    id,
    label
}) => {
    const styles = {
        backgroundColor: "#616161e6",
        height: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        padding: "8px 4px"
    };
    return /* @__PURE__ */ import_react99.default.createElement(import_react_tooltip.Tooltip, {
        id,
        style: styles
    }, /* @__PURE__ */ import_react99.default.createElement(Content, null, label));
};
var Content = import_styled56.default.p `
  margin: 0;
  font-size: 10px;
`;

// src/icons/icons.tsx
var import_react100 = __toESM(require("react"));
var DropdownIcon = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react100.default.createElement("svg", __spreadProps(__spreadValues({}, props), {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 15 16"
    }), /* @__PURE__ */ import_react100.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14.293 7.293a1 1 0 010 1.414l-5.657 5.657a1 1 0 01-1.414 0L1.565 8.707a1 1 0 011.414-1.414l4.95 4.95 4.95-4.95a1 1 0 011.414 0z",
        fill: "#005CB9"
    }));
};
var SpeakingIcon = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react100.default.createElement("svg", __spreadProps(__spreadValues({}, props), {
        className: "svg-ltr-only",
        width: "56",
        height: "48",
        viewBox: "0 0 56 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }), /* @__PURE__ */ import_react100.default.createElement("path", {
        d: "M47.875 34.875L44 31C45.8333 29.2917 47.2708 27.2708 48.3125 24.9375C49.3542 22.6042 49.875 20.125 49.875 17.5C49.875 14.875 49.3542 12.4167 48.3125 10.125C47.2708 7.83333 45.8333 5.83333 44 4.125L47.875 0.125C50.2083 2.33333 52.0625 4.9375 53.4375 7.9375C54.8125 10.9375 55.5 14.125 55.5 17.5C55.5 20.875 54.8125 24.0625 53.4375 27.0625C52.0625 30.0625 50.2083 32.6667 47.875 34.875ZM39.875 26.875L35.875 22.875C36.625 22.1667 37.2292 21.3646 37.6875 20.4688C38.1458 19.5729 38.375 18.5833 38.375 17.5C38.375 16.4167 38.1458 15.4271 37.6875 14.5312C37.2292 13.6354 36.625 12.8333 35.875 12.125L39.875 8.125C41.2083 9.33333 42.25 10.7396 43 12.3438C43.75 13.9479 44.125 15.6667 44.125 17.5C44.125 19.3333 43.75 21.0521 43 22.6562C42.25 24.2604 41.2083 25.6667 39.875 26.875ZM20.5 27.5C17.75 27.5 15.3958 26.5208 13.4375 24.5625C11.4792 22.6042 10.5 20.25 10.5 17.5C10.5 14.75 11.4792 12.3958 13.4375 10.4375C15.3958 8.47917 17.75 7.5 20.5 7.5C23.25 7.5 25.6042 8.47917 27.5625 10.4375C29.5208 12.3958 30.5 14.75 30.5 17.5C30.5 20.25 29.5208 22.6042 27.5625 24.5625C25.6042 26.5208 23.25 27.5 20.5 27.5ZM0.5 47.5V40.5C0.5 39.125 0.854167 37.8333 1.5625 36.625C2.27083 35.4167 3.25 34.5 4.5 33.875C6.625 32.7917 9.02083 31.875 11.6875 31.125C14.3542 30.375 17.2917 30 20.5 30C23.7083 30 26.6458 30.375 29.3125 31.125C31.9792 31.875 34.375 32.7917 36.5 33.875C37.75 34.5 38.7292 35.4167 39.4375 36.625C40.1458 37.8333 40.5 39.125 40.5 40.5V47.5H0.5ZM5.5 42.5H35.5V40.5C35.5 40.0417 35.3854 39.625 35.1562 39.25C34.9271 38.875 34.625 38.5833 34.25 38.375C32.75 37.625 30.8229 36.875 28.4688 36.125C26.1146 35.375 23.4583 35 20.5 35C17.5417 35 14.8854 35.375 12.5312 36.125C10.1771 36.875 8.25 37.625 6.75 38.375C6.375 38.5833 6.07292 38.875 5.84375 39.25C5.61458 39.625 5.5 40.0417 5.5 40.5V42.5ZM20.5 22.5C21.875 22.5 23.0521 22.0104 24.0312 21.0312C25.0104 20.0521 25.5 18.875 25.5 17.5C25.5 16.125 25.0104 14.9479 24.0312 13.9688C23.0521 12.9896 21.875 12.5 20.5 12.5C19.125 12.5 17.9479 12.9896 16.9688 13.9688C15.9896 14.9479 15.5 16.125 15.5 17.5C15.5 18.875 15.9896 20.0521 16.9688 21.0312C17.9479 22.0104 19.125 22.5 20.5 22.5Z",
        fill: "#005CB9"
    }));
};
var CalendarIcon = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react100.default.createElement("svg", __spreadProps(__spreadValues({}, props), {
        className: "svg-ltr-only",
        width: "53",
        height: "50",
        viewBox: "0 0 53 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }), /* @__PURE__ */ import_react100.default.createElement("path", {
        d: "M0.5 50V5H8V-4.76837e-07H13V5H33V-4.76837e-07H38V5H45.5V22.5H40.5V20H5.5V45H23V50H0.5ZM5.5 15H40.5V10H5.5V15ZM28 50V42.3125L44.4375 25.9375L52.125 33.5625L35.6875 50H28ZM31.75 46.25H34.125L41.6875 38.625L40.5625 37.4375L39.375 36.3125L31.75 43.875V46.25ZM40.5625 37.4375L39.375 36.3125L41.6875 38.625L40.5625 37.4375Z",
        fill: "#005CB9"
    }));
};
var CalendarCrossedIcon = (_a) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ import_react100.default.createElement("svg", __spreadProps(__spreadValues({}, props), {
        className: "svg-ltr-only",
        width: "46",
        height: "50",
        viewBox: "0 0 46 50",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }), /* @__PURE__ */ import_react100.default.createElement("path", {
        d: "M17.25 41.75L13.75 38.25L19.5 32.5L13.75 26.75L17.25 23.25L23 29L28.75 23.25L32.25 26.75L26.5 32.5L32.25 38.25L28.75 41.75L23 36L17.25 41.75ZM0.5 50V5H8V-4.76837e-07H13V5H33V-4.76837e-07H38V5H45.5V50H0.5ZM5.5 45H40.5V20H5.5V45ZM5.5 15H40.5V10H5.5V15Z",
        fill: "#EA0034"
    }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Acknowledgements,
    AddressFormFields,
    AnimatedButton,
    AnswerInvalid,
    ApiErrorPage,
    ApiErrorsAlert,
    ApplyBoardWidget,
    ArrivalTime,
    BcSelect,
    CalendarCrossedIcon,
    CalendarIcon,
    CandidateMarketingPreferences,
    CandidateMarketingPreferencesDefault,
    CandidateMarketingPreferencesEnum,
    CentreContactInfo,
    ChangeHeading,
    ChangePassword,
    ChildAfterTest,
    ChildConsent,
    CrowdinContext,
    CustomCalendar,
    DateField,
    Desc,
    Divider,
    DropdownIcon,
    EnabledOption,
    ErrorPage,
    ExamDateTime,
    ExamFormat,
    ExamFormatIcon,
    ExamTypeText,
    ExpiryDate,
    ExtendedApiError,
    ExternalLink,
    Footer,
    FormattedPrice,
    Header,
    HtmlTextRaw,
    InvoiceConsents,
    InvoiceSubtypes,
    InvoiceTypes,
    IolDetailsCard,
    LabeledFormattedPrice,
    LanguageSwitcher,
    LinkButton,
    LoadingCard,
    MapLink,
    MarketingPreferences,
    MissingDataModal,
    MobileField,
    Modal,
    NearEndMsg,
    NewPasswordField,
    NewTermsAccount,
    NewTermsModal,
    NotLinkedVenueNote,
    Notification,
    OrderAcknowledgement,
    PageErrors,
    PageHeading,
    RetakeBadge,
    SearchAndSelect,
    SectionHeader,
    SelectField,
    SpeakingFormat,
    SpeakingFormatIcon,
    SpeakingIcon,
    SpeakingSlotSelector,
    SpeakingSlots,
    TermsAndConditionsNotes,
    TestCard,
    TestCardContent,
    TestDateTimeContainer,
    TestDetailsCard,
    TimeSeparator,
    TimesUpModal,
    Tooltip,
    UploadIdProofInstruction,
    UploadIdProofOCRGuidance,
    ValError,
    ValidatedButton,
    VenueSearchResultsWrapper,
    VenueTitle,
    WideReadOnlyField,
    WootricSurvey,
    ackFormInitValue,
    acknowledgement,
    apieErrorConverters,
    breakpoints,
    changePasswordErrorCodes,
    commonErrorCodes,
    commonErrorProps,
    commonMaxLengths,
    contactDetails,
    errors,
    extractApiErrors,
    formSchema,
    getChildConsentFormSchema,
    getChildConsentInitialValues,
    getCommonPayerModel,
    getEorPayerModel,
    getHowPaid,
    getInitialValues,
    getLocalizedCountries,
    getMobileNumberCountry,
    getOsrPayerInformation,
    getOsrPayerModel,
    getPayerDetailsUkvi,
    getPayerModel,
    getPayerOption,
    getReceiver,
    getValidatedMobileNumber,
    getWootricFormatDate,
    initApiData,
    invoiceConsent,
    marketingPrefsValidation,
    mobileNumberValidation,
    preparePickups,
    reduceMultipleErrorSources,
    selectedCountryLanguageSettings,
    useActiveCountryLanguageSettings,
    validationRulesI18n
});