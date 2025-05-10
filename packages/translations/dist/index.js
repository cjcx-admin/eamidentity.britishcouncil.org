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

// src/index.ts
var src_exports = {};
__export(src_exports, {
    defaultLanguage: () => defaultLanguage,
    getDateFnLocale: () => getDateFnLocale,
    getLanguageDirection: () => getLanguageDirection,
    hasIeltsUsaUrl: () => hasIeltsUsaUrl,
    ieltsUsaLanguage: () => ieltsUsaLanguage,
    ieltsUsaSpecific: () => ieltsUsaSpecific,
    initTranslations: () => initTranslations,
    isIeltsUsaContextUrl: () => isIeltsUsaContextUrl,
    pseudoLanguage: () => pseudoLanguage,
    readSupportedLanguages: () => readSupportedLanguages,
    selectLanguage: () => selectLanguage,
    setOneTrustLanguage: () => setOneTrustLanguage,
    setSupportedLanguages: () => setSupportedLanguages,
    useLanguageNames: () => useLanguageNames,
    useSelectedLang: () => useSelectedLang,
    useSelectedLangDirection: () => useSelectedLangDirection,
    writeSupportedLanguages: () => writeSupportedLanguages
});
module.exports = __toCommonJS(src_exports);

// src/config.ts
var import_i18next = __toESM(require("i18next"));
var import_react_i18next = require("react-i18next");
var import_i18next_http_backend = __toESM(require("i18next-http-backend"));

// src/locale/en/b2c.json
var APPB2C_auth_forgetPassword_title = "Recover password";
var APPB2C_auth_forgetPassword_email = "E-mail address";
var APPB2C_auth_forgetPassword_text = "Forgotten your password? No problem, we can send you a link to recover it.";
var APPB2C_auth_forgetPassword_cta = "Email me a recovery link";
var APPB2C_auth_forgetPassword_success_title = "Success!";
var APPB2C_auth_forgetPassword_success_msg1 = "Thanks! If an account exists, an email will be sent with further instructions.";
var APPB2C_auth_forgetPassword_success_msg2 = " Please click the link when you get it.";
var APPB2C_auth_resetPassword_title = "Reset your password";
var APPB2C_auth_resetPassword_cta = "Reset password";
var APPB2C_auth_resetPassword_form_newPassword = "New password";
var APPB2C_auth_resetPassword_success_title = "Success!";
var APPB2C_auth_resetPassword_success_msg = "Your password has been successfully changed. You will be redirected shortly...";
var APPB2C_auth_resetPassword_noToken_msg = "Provided token was not recognized";
var APPB2C_auth_resetPassword_noToken_cta = "Recover your password";
var APPB2C_auth_resetPassword_error_wrongPassword = "The password you entered does not meet the requirements.";
var APPB2C_auth_resetPassword_error_expiredToken = "Link to reset your password has expired. Please use \u2018Forgot Password\u2019 on login screen to receive new link.";
var APPB2C_auth_resetPassword_error_wrongToken = "Your temporary link for password reset is invalid.";
var APPB2C_auth_changePassword_title = "Set your new password";
var APPB2C_auth_changePassword_cta = "Set Password";
var APPB2C_auth_changePassword_id_note = "To continue logging-in, add your Passport number / National ID number below.";
var APPB2C_auth_changePassword_id_label = "Passport number / National ID number";
var APPB2C_auth_changePassword_id_warn = "If you keep seeing the \u2018ID number is incorrect\u2019 error while providing a correct one, please contact the British Council centre.";
var APPB2C_auth_changePassword_pass_note = "Please set up a password of your choice to continue.";
var APPB2C_auth_changePassword_pass_label = "Password";
var APPB2C_auth_changePassword_error = "It looks like something went wrong. Please try again in a few minutes.";
var APPB2C_auth_changePassword_error_wrongIdNumber = "ID number is incorrect.";
var APPB2C_auth_changePassword_error_wrongPassword = "Password does not meet requirements.";
var APPB2C_auth_changePassword_error_differentPasswords = "Entered passwords are different.";
var APPB2C_auth_changePassword_error_wrongOldPassword = "Old password is incorrect.";
var APPB2C_cj_basic_cta = "Save and continue";
var APPB2C_cj_basic_goToReview = "Save and Review";
var APPB2C_cj_basic_validationError = "Please check all the highlighted answers to continue.";
var APPB2C_cj_basic_scrollLink = "View answers to check.";
var APPB2C_cj_basic_selectDate = "Select date";
var APPB2C_cj_basic_selectTime = "Select time";
var APPB2C_cj_incorrectOrganisation_title = "Sorry!";
var APPB2C_cj_incorrectOrganisation_line1 = "It looks like you\u2019re trying to book a test with an organisation we don\u2019t recognise.";
var APPB2C_cj_incorrectOrganisation_line2 = "Don\u2019t worry; there\u2019s a couple of things you can try:";
var APPB2C_cj_incorrectOrganisation_locationsLink = "Look at our global locations on the IELTS website";
var APPB2C_cj_incorrectOrganisation_locationsLinkUsa = "Look at all the test centres in the USA on the IELTS website";
var APPB2C_cj_incorrectOrganisation_bookNewLink = "Book a test on this website (we\u2019ll help you find a test centre)";
var APPB2C_cj_timer_nearEnd_title = "Attention!";
var APPB2C_cj_timer_nearEnd_text = 'Your chosen test is only being held for another $t(APPB2C.cj.timer.nearEnd.minuteCount, {"count": {{count}} }).';
var APPB2C_cj_timer_nearEnd_minuteCount = "{{count}} minute";
var APPB2C_cj_timer_nearEnd_minuteCount_other = "{{count}} minutes";
var APPB2C_cj_timer_modal_title = "Restart your booking";
var APPB2C_cj_timer_modal_message = "Sorry; you\u2019ve run out of time to complete this booking.";
var APPB2C_cj_timer_modal_cta = "Restart booking";
var APPB2C_cj_rebook_errorModal_title = "Booking reservation failed";
var APPB2C_cj_rebook_errorModal_message = "It looks like something went wrong. Please try again in a few minutes.";
var APPB2C_cj_personalDetails_title = "Personal details";
var APPB2C_cj_personalDetails_gender = "Sex:";
var APPB2C_cj_personalDetails_forWho_myself = "Myself";
var APPB2C_cj_personalDetails_forWho_child = "My child";
var APPB2C_cj_personalDetails_forWho_childUnder18 = "(under 18 years old)";
var APPB2C_cj_personalDetails_forWho_title = "Who are you booking the test for?";
var APPB2C_cj_personalDetails_forWho_note = "You cannot book a test for a child under the age of 11. If your child is 18 or over, please ask them to register for themselves.";
var APPB2C_cj_personalDetails_forWho_dob = "Date of birth: ";
var APPB2C_cj_personalDetails_visaType_title = "Your visa type";
var APPB2C_cj_personalDetails_visaType_title_child = "Their visa type";
var APPB2C_cj_personalDetails_visaType_label = "What visa type do you need?";
var APPB2C_cj_personalDetails_visaType_label_child = "What visa type do they need?";
var APPB2C_cj_personalDetails_visaType_link = "Learn more about the visa types";
var APPB2C_cj_personalDetails_tncs_title = "Our terms and conditions";
var APPB2C_cj_personalDetails_tncs_agreement = "I agree to the account registration <1>terms and conditions</1>";
var APPB2C_cj_personalDetails_login_title = "Create an account";
var APPB2C_cj_personalDetails_login_loggedIn = "Hi! You are now logged in.";
var APPB2C_cj_personalDetails_login_note = "You\u2019ll need an account to manage your booking. Once you\u2019ve booked a test, you\u2019ll receive an email explaining how to access your booking online.";
var APPB2C_cj_personalDetails_login_link = "Already have an account? <1>Log in</1>";
var APPB2C_cj_personalDetails_login_emailNotEditable = "You can\u2019t edit your email address now that you\u2019ve created an account. To change this, please <1>contact us</1>";
var APPB2C_cj_personalDetails_login_logout = "Not your details? <1>Logout</1>";
var APPB2C_cj_personalDetails_login_btn = "Log in";
var APPB2C_cj_personalDetails_idNote_whenForChild = "we\u2019ll ask you about your child on the next page";
var APPB2C_cj_personalDetails_idNote_idMatch = "All personal details provided on this page must match the Test Taker's identification document used for registration and presented at the test location, as these will appear on the Test Taker's Test Report Form (TRF). Once registration is complete, you may be charged a fee if you ask us to modify any of this information before we issue the TRF. Please note that no modifications can be made after the TRF has been issued.";
var APPB2C_cj_personalDetails_idNote_idMatch_change = "The full name and date of birth <bold>must match</bold> the Identification Document you will present on test day.";
var APPB2C_cj_personalDetails_forms_personal_firstName = "First / given names";
var APPB2C_cj_personalDetails_forms_personal_firstMiddleName = "First / given names (including middle names)";
var APPB2C_cj_personalDetails_forms_personal_lastName = "Surname / family name";
var APPB2C_cj_personalDetails_forms_personal_noLastName = "I don\u2019t have a surname / family name";
var APPB2C_cj_personalDetails_forms_personal_idMatch = "This must match the name(s) on your identification document";
var APPB2C_cj_personalDetails_forms_personal_dob = "Date of birth";
var APPB2C_cj_personalDetails_forms_personal_sectionTitle = "About you";
var APPB2C_cj_personalDetails_forms_personal_change = "Change";
var APPB2C_cj_personalDetails_forms_personal_name = "Name";
var APPB2C_cj_personalDetails_forms_personal_dobCta = "Book IELTS in a test centre";
var APPB2C_cj_personalDetails_forms_contact_note = "Please provide your phone number and postal address in case we need to contact you or send you any documents (e.g. your test report form).";
var APPB2C_cj_personalDetails_forms_contact_email = "Your email";
var APPB2C_cj_personalDetails_forms_contact_emailInUse = "This email address is already in use. If that was you, would you like to <0>log in</0> instead?";
var APPB2C_cj_personalDetails_forms_contact_confirmEmail = "Confirm email address";
var APPB2C_cj_personalDetails_forms_contact_mobile = "Mobile number";
var APPB2C_cj_personalDetails_forms_contact_title = "Your contact details";
var APPB2C_cj_personalDetails_forms_contact_password = "Password";
var APPB2C_cj_personalDetails_forms_contact_smsConsent = "I agree to receive notifications or to be contacted about my test registration to this telephone number via SMS, WhatsApp, etc.";
var APPB2C_cj_personalDetails_forms_contact_smsNote = "<bold>Please note:</bold> this service might not be available in your location.";
var APPB2C_cj_personalDetails_forms_contact_emailExist = "This email address is already in use. If that was you, please try to log in instead.";
var APPB2C_cj_personalDetails_forms_address_country = "Country / territory of residence";
var APPB2C_cj_personalDetails_forms_address_postal = "Postal address";
var APPB2C_cj_personalDetails_forms_address_town = "Town / City";
var APPB2C_cj_personalDetails_forms_address_zip = "Postcode / ZIP";
var APPB2C_cj_personalDetails_forms_address_state = "State";
var APPB2C_cj_personalDetails_forms_address_enterManually = "Enter address manually";
var APPB2C_cj_personalDetails_error_missingFirstName = "Please enter your first / given names.";
var APPB2C_cj_personalDetails_error_missingSurname = "Please enter your surname / family name. If you do not have a surname, please put a hyphen ('-') in this field.";
var APPB2C_cj_personalDetails_error_missingEmail = "Please enter a valid email address.";
var APPB2C_cj_personalDetails_error_missingEmailConfirm = "Please confirm your email address by re-entering it.";
var APPB2C_cj_personalDetails_error_wrongEmailConfirm = "The re-entered email address does not match the one you have provided. Please check your spelling carefully.";
var APPB2C_cj_personalDetails_error_wrongDob = "Please provide your actual date of birth.";
var APPB2C_cj_personalDetails_error_missingMobile = "Please provide your mobile telephone number.";
var APPB2C_cj_personalDetails_error_missingAddress = "Please provide your postal address.";
var APPB2C_cj_personalDetails_error_missingSex = "Please provide your sex.";
var APPB2C_cj_personalDetails_error_missingTown = "Please provide your town / city.";
var APPB2C_cj_personalDetails_error_missingZip = "Please provide your postcode / ZIP.";
var APPB2C_cj_personalDetails_error_missingState = "Please provide your state.";
var APPB2C_cj_personalDetails_error_doubleBooking = "The Test taker has already registered for an IELTS test on the same date.";
var APPB2C_cj_personalDetails_examTakenModal_title = "We\u2019re sorry \u2013 your chosen test isn\u2019t available anymore";
var APPB2C_cj_personalDetails_examTakenModal_message = "Don\u2019t worry though, we\u2019ve got lots of other tests for you to choose from, and we won\u2019t forget any of the details you just told us.";
var APPB2C_cj_personalDetails_examTakenModal_cta = "Find a new test";
var APPB2C_cj_personalDetails_existingRegistrationsModal_title = "You already have a test booked on this date!";
var APPB2C_cj_personalDetails_existingRegistrationsModal_subtitle = "Don\u2019t forget you already have a test booked on";
var APPB2C_cj_personalDetails_existingRegistrationsModal_yourWrittenTest = "Your Written test";
var APPB2C_cj_personalDetails_existingRegistrationsModal_yourSpeakingTest = "Your Speaking test";
var APPB2C_cj_personalDetails_existingRegistrationsModal_yourLifeSkillsTest = "Your test";
var APPB2C_cj_personalDetails_existingRegistrationsModal_viewBooking = "You can view your current booking in the Test Taker Portal.";
var APPB2C_cj_personalDetails_existingRegistrationsModal_viewCurrentBooking = "View my current booking";
var APPB2C_cj_personalDetails_existingRegistrationsModal_changeDate = "Choose a different test date";
var APPB2C_cj_personalDetails_existingRegistrationsModal_bookSomeoneElse = "Book a test for someone else";
var APPB2C_cj_personalDetails_registrationInLockoutPeriodModal_title = "Please choose a different test date";
var APPB2C_cj_personalDetails_registrationInLockoutPeriodModal_changeDate = "Find a new test";
var APPB2C_cj_personalDetails_registrationInLockoutPeriodModal_line1 = "You cannot book an IELTS Online test so close to your other test on {{nearestRegistratonExamDate}}.";
var APPB2C_cj_personalDetails_registrationInLockoutPeriodModal_line2 = "Please find a test date 5 or more days earlier or later than your previous test.";
var APPB2C_cj_childDetails_title = "Your child\u2019s details";
var APPB2C_cj_childDetails_about = "About your child";
var APPB2C_cj_childDetails_aboutNote = "Please add the details for the child taking the test:";
var APPB2C_cj_childDetails_noLastName = "They don\u2019t have a surname / family name";
var APPB2C_cj_childDetails_note = "Their full name and date of birth must match the identification document presented at the test location.";
var APPB2C_cj_childDetails_onTestDay = "On the test day";
var APPB2C_cj_childDetails_forms_personal_idMatch = "This must match the name(s) on their identification document";
var APPB2C_cj_childDetails_error_missingFirstName = "Please enter your child\u2019s first / given names.";
var APPB2C_cj_childDetails_error_missingSurname = "Please enter your child\u2019s surname / family name. If they do not have a surname, please put a hyphen ('-') in this field.";
var APPB2C_cj_childDetails_error_wrongDob = "Please provide your child\u2019s actual date of birth.";
var APPB2C_cj_marketingPrefs = "Your marketing preferences";
var APPB2C_cj_idDetails_title = "Identification details";
var APPB2C_cj_idDetails_title_child = "Your child\u2019s identification";
var APPB2C_cj_idDetails_forms_idType = "Identification type";
var APPB2C_cj_idDetails_forms_changeNote = "You have changed the selected identification type. Please ensure the images uploaded below match the identification document you will bring on the test day.";
var APPB2C_cj_idDetails_forms_changeNote_child = "You have changed the selected identification type. Please ensure the images uploaded below match the identification document they will bring on the test day.";
var APPB2C_cj_idDetails_forms_idNumber = "$t({{idName}}, capitalise) number";
var APPB2C_cj_idDetails_forms_issuingAuthority = "Issuing authority";
var APPB2C_cj_idDetails_forms_expiryDate = "$t({{idName}}, capitalise) expiry date";
var APPB2C_cj_idDetails_forms_documentWithNoExpiryDate = "The document doesn\u2019t have an expiry date";
var APPB2C_cj_idDetails_typeNames_passport = "passport";
var APPB2C_cj_idDetails_typeNames_card = "identity card";
var APPB2C_cj_idDetails_typeNames_other = "ID";
var APPB2C_cj_idDetails_iolMessage = "On the test day, you will be required to show the same identification document you are using for registration.";
var APPB2C_cj_idDetails_idExpired = "The identification document you registered with before has now expired. Please add new identification.";
var APPB2C_cj_idDetails_noteAboutIdentification = "On the test day, you will be required to bring the same identification document you are using for registration.";
var APPB2C_cj_idDetails_noteAboutIdentificationIol = "A passport is currently the only acceptable ID used for IELTS Online. If you wish to use alternative acceptable IDs, you should take an IELTS on Paper test or IELTS on Computer test instead.";
var APPB2C_cj_idDetails_noteAboutIdentificationUol = "A passport is currently the only acceptable ID used for IELTS for UKVI Online. If you wish to use alternative acceptable IDs, you should take an IELTS UKVI on Paper test or IELTS UKVI on Computer test instead.";
var APPB2C_cj_idDetails_noteAboutIdentificationIolLink = "If you don\u2019t have a valid passport, use this link to book a different test instead.";
var APPB2C_cj_idDetails_noteAboutIdentification_child = "On the test day, your child will be required to bring the same identification document you are using for registration.";
var APPB2C_cj_idDetails_upload_title = "Upload proof of $t({{idName}})";
var APPB2C_cj_idDetails_upload_mobile = "As it looks like you\u2019re on a mobile device, we suggest you upload a photo from your device.";
var APPB2C_cj_idDetails_upload_instructions_title = "How to take a suitable photo / scan:";
var APPB2C_cj_idDetails_upload_instructions_capture = "Capture your entire document";
var APPB2C_cj_idDetails_upload_instructions_noBlur = "Make sure the photo / scan is in focus with no blur present.";
var APPB2C_cj_idDetails_upload_instructions_directLight = "Move away from direct light to avoid glare.";
var APPB2C_cj_idDetails_upload_instructions_covers = "Make sure nothing covers your document (fingers, stickers, paperclips etc.)";
var APPB2C_cj_idDetails_upload_file1 = "Image 1";
var APPB2C_cj_idDetails_upload_file2 = "Image 2 (optional)";
var APPB2C_cj_idDetails_upload_fetchError = "We cannot process your file. Please try again later.";
var APPB2C_cj_idDetails_upload_passport_guidelines_followInstructions = "Follow the instructions below to make sure your photo meets our requirements.";
var APPB2C_cj_idDetails_upload_passport_guidelines_crop = "Place your passport on a flat surface and make sure that the data is visible.";
var APPB2C_cj_idDetails_upload_passport_guidelines_cover = "Make sure you do not cover the passport data (finger, paperclip etc.).";
var APPB2C_cj_idDetails_upload_passport_guidelines_glare = "The photo needs to be clear with no reflections, make sure all the data is readable.";
var APPB2C_cj_idDetails_upload_passport_guidelines_watermark = "Make sure that image watermark is disabled in the camera settings.";
var APPB2C_cj_idDetails_confirm_title = "Please check your $t({{idName}}) before you continue";
var APPB2C_cj_idDetails_confirm_note1 = "It\u2019s really important that you make sure the $t({{idName}}) details you\u2019ve told us are correct. Please check them below before proceeding.";
var APPB2C_cj_idDetails_confirm_note2 = "On the test day, you will be required to bring this $t({{idName}}) with you.";
var APPB2C_cj_idDetails_confirm_confirm = "I confirm these details are correct";
var APPB2C_cj_idDetails_confirm_change = "I need to change these details";
var APPB2C_cj_idDetails_confirm_wrongDetailsNote_title = "Please note:";
var APPB2C_cj_idDetails_confirm_wrongDetailsNote_content = "If your ID details are wrong it may delay the release of your results.";
var APPB2C_cj_idDetails_error_missingIdNumber = "Please provide the identification document number. It needs to match specific format (allowed are letters, digits, and special chars: _\\-/,).";
var APPB2C_cj_idDetails_error_missingIdExpiry = "Please provide the expiry date of the identification document.";
var APPB2C_cj_idDetails_error_missingIdType = "Please provide the identification document type.";
var APPB2C_cj_idDetails_error_wrongIdExpiry = "Please provide the identification document that does not expire before chosen test date.";
var APPB2C_cj_idDetails_error_missingIssuingAuthority = "Please provide the issuing authority of the identification document.";
var APPB2C_cj_idDetails_error_wrongFilename = "File name contains invalid characters.";
var APPB2C_cj_idDetails_eVisa_modal_action_cancel = "Use Passport instead";
var APPB2C_cj_idDetails_eVisa_modal_action_confirm = "Got it";
var APPB2C_cj_idDetails_eVisa_modal_header = "Instructions on using an eVISA";
var APPB2C_cj_idDetails_eVisa_modal_line1_v2 = "If you have a valid passport, this <0>should</0> be used as your ID type for registration.";
var APPB2C_cj_idDetails_eVisa_modal_line2 = "If you do not have a valid passport, you can proceed with eVISA.";
var APPB2C_cj_idDetails_eVisa_modal_line3 = "If you are using an eVISA, please enter your eVISA <0>share code</0> in the <1>ID number</1> box. You will see an automated prefix in the ID number box which identifies use of eVISA for our system.";
var APPB2C_cj_idDetails_eVisa_modal_line4 = "Instructions on how to generate an eVISA share code are here <0>https://www.gov.uk/view-prove-immigration-status</0>. When generating your share code, select the option 'To prove my immigration status for anything else'.";
var APPB2C_cj_idDetails_eVisa_modal_line5 = "Enter the <0>share code expiry date</0> in the <1>ID expiry date</1> boxes. The expiry date is displayed on screen when you generate your share code and must be after your test date.";
var APPB2C_cj_ttProfile_title = "Your profile";
var APPB2C_cj_ttProfile_title_child = "Your child\u2019s profile";
var APPB2C_cj_ttProfile_note = "Answering these questions has no impact on your IELTS test results. These questions will help us improve our services to test takers like you.";
var APPB2C_cj_ttProfile_note_child = "Answering these questions has no impact on your child\u2019s IELTS test results. These questions will help us improve our services to test takers like them.";
var APPB2C_cj_ttProfile_forms_personal_sectionTitle = "About you";
var APPB2C_cj_ttProfile_forms_personal_sectionTitle_child = "About your child";
var APPB2C_cj_ttProfile_forms_personal_countryOfNationality = "What is your country / territory of nationality?";
var APPB2C_cj_ttProfile_forms_personal_countryOfNationality_child = "What is their country / territory of nationality?";
var APPB2C_cj_ttProfile_forms_personal_mainLanguageSpoken = "What is your first language?";
var APPB2C_cj_ttProfile_forms_personal_mainLanguageSpoken_child = "What is their first language?";
var APPB2C_cj_ttProfile_forms_personal_yearsOfStudyingEnglish = "How many years have you been studying English?";
var APPB2C_cj_ttProfile_forms_personal_yearsOfStudyingEnglish_child = "How many years have they been studying English?";
var APPB2C_cj_ttProfile_forms_personal_yearsOfStudyingEnglishSublabel = "Your answer to this question has no impact on your test score";
var APPB2C_cj_ttProfile_forms_personal_yearsOfStudyingEnglishSublabel_child = "Your answer to this question has no impact on their test score";
var APPB2C_cj_ttProfile_forms_personal_educationLevel_384 = "Secondary (up to 16 years)";
var APPB2C_cj_ttProfile_forms_personal_educationLevel_385 = "Secondary (16-19 years)";
var APPB2C_cj_ttProfile_forms_personal_educationLevel_386 = "Degree (or equivalent)";
var APPB2C_cj_ttProfile_forms_personal_educationLevel_387 = "Post-graduate";
var APPB2C_cj_ttProfile_forms_personal_educationLevel_title = "What level of education have you completed?";
var APPB2C_cj_ttProfile_forms_occupation_sectionTitle = "Your occupation";
var APPB2C_cj_ttProfile_forms_occupation_occupationLevel = "What is your occupation level?";
var APPB2C_cj_ttProfile_forms_occupation_occupationSector = "What is your occupation sector?";
var APPB2C_cj_ttProfile_forms_interest_sectionTitle = "Your interest in IELTS";
var APPB2C_cj_ttProfile_forms_interest_sectionTitle_child = "Their interest in IELTS";
var APPB2C_cj_ttProfile_forms_interest_reasonForTakingTest = "Why are you taking the test?";
var APPB2C_cj_ttProfile_forms_interest_reasonForTakingTest_child = "Why are they taking the test?";
var APPB2C_cj_ttProfile_forms_interest_countryBeingApplied = "Which country / territory do you want to study / work / live in?";
var APPB2C_cj_ttProfile_forms_interest_countryBeingApplied_child = "Which country / territory do they want to study / work / live in?";
var APPB2C_cj_review_title = "Review";
var APPB2C_cj_review_note_title = "You have not booked yet!";
var APPB2C_cj_review_note_content = "Please check all the details carefully before you book.";
var APPB2C_cj_review_registrationError = "We cannot create registration right now. Please try again later.";
var APPB2C_cj_review_missingMarketingError = "It looks like you've tried to book a test with us before, and now we just need to check a few answers with you again.";
var APPB2C_cj_review_missingMarketingCta = "Check your answers";
var APPB2C_cj_review_taxNumberError = "Please provide valid VAT/NIP number, it has to match specific format (e.g. 13243546-3-35, 1324354635).";
var APPB2C_cj_review_paymentError = "We cannot process your payment. Please try again later.";
var APPB2C_cj_review_expiredIdError = "The Test taker's ID must not expire before the chosen test date.";
var APPB2C_cj_review_tooHighPromoCodeError = "We couldn't complete your registration. Please attempt registration without using the promo code. If you believe the code should work, please contact your centre for help";
var APPB2C_cj_review_error_wrongTaxNumber = "Please provide a valid VAT/NIP number. It has to match specific format (e.g. 13243546-3-35, 1324354635)";
var APPB2C_cj_review_error_missingTown = "Please change your details and include town / city in your address.";
var APPB2C_cj_review_error_missingPickups = "Please specify who will pick your child up from the test premises.";
var APPB2C_cj_review_error_missingOrderAcknowledgement = "Please specify who should receive the order confirmation for the test booking.";
var APPB2C_cj_review_error_wrongPaymentConfig = "Payment configuration is missing or incorrect, please contact the test centre if this issue persists.";
var APPB2C_cj_review_error_wrongCountrySetting = "Booking this test is not available in your country. Please select a different test.";
var APPB2C_cj_review_change = "Change";
var APPB2C_cj_review_changeUkviLsTest = "Change test date";
var APPB2C_cj_review_changeLrwTest = "Change written test date";
var APPB2C_cj_review_changeSpeakingTest = "Change speaking schedule";
var APPB2C_cj_review_payOnline_buttonText = "Pay online";
var APPB2C_cj_review_bookNowNoFee_buttonText = "Book now";
var APPB2C_cj_review_payOnline_sideNote = "Recommended payment method";
var APPB2C_cj_review_or = "or";
var APPB2C_cj_review_payLater_buttonText = "Offline payment";
var APPB2C_cj_review_confirmPaymentModal_title = "Paying online may cost you more";
var APPB2C_cj_review_confirmPaymentModal_note = "Please note: Additional charges may apply from your bank for your online payment for the IELTS exam.";
var APPB2C_cj_review_confirmPaymentModal_optionsTitle = "You have two options.";
var APPB2C_cj_review_confirmPaymentModal_btnNote = "You may pay more than the <0></0> listed";
var APPB2C_cj_review_payLater_sideNote = "Payment options will be shown on next page";
var APPB2C_cj_review_bookTest = "Book test";
var APPB2C_cj_review_paymentNote = "Book & pay:";
var APPB2C_cj_review_paymentNoteZeroFee = "Get your free test";
var APPB2C_cj_review_localization_location = "We localised you in";
var APPB2C_cj_review_localization_localTime = "Your local time";
var APPB2C_cj_review_localization_timezone = "Your timezone";
var APPB2C_cj_review_bookingDetails_title = "You are booking";
var APPB2C_cj_review_bookingDetails_lrw_title = "Your Written test";
var APPB2C_cj_review_bookingDetails_lrw_titleLifeSkills = "Your test";
var APPB2C_cj_review_bookingDetails_lrw_title_child = "Your child\u2019s Written test";
var APPB2C_cj_review_bookingDetails_lrw_titleLifeSkills_child = "Your child\u2019s test";
var APPB2C_cj_review_bookingDetails_speaking_title = "Your Speaking test";
var APPB2C_cj_review_bookingDetails_speaking_title_child = "Your child\u2019s Speaking test";
var APPB2C_cj_review_personalDetails_title = "Your details";
var APPB2C_cj_review_personalDetails_name = "Name";
var APPB2C_cj_review_personalDetails_dob = "Date of Birth";
var APPB2C_cj_review_personalDetails_email = "Email address";
var APPB2C_cj_review_personalDetails_phone = "Mobile telephone number";
var APPB2C_cj_review_personalDetails_address = "Address";
var APPB2C_cj_review_personalDetails_gender = "Sex";
var APPB2C_cj_review_personalDetails_smsNotificationsConsent = "I want to receive updates about my tests and results to this mobile telephone number";
var APPB2C_cj_review_childDetails_title = "Your child\u2019s details";
var APPB2C_cj_review_childDetails_onTestDay = "On the test day";
var APPB2C_cj_review_childDetails_guardiansTitle = "Person(s) who will collect your child";
var APPB2C_cj_review_childDetails_onTestDayOptions_1 = "Child can leave the test premises on its own";
var APPB2C_cj_review_childDetails_onTestDayOptions_2 = "I will pick my child up from the test premises";
var APPB2C_cj_review_childDetails_onTestDayOptions_3 = "Someone else will pick my child up from the test premises";
var APPB2C_cj_review_idDetails_title = "Your identification";
var APPB2C_cj_review_idDetails_title_child = "Your child\u2019s identification";
var APPB2C_cj_review_idDetails_issuing = "Issuing authority";
var APPB2C_cj_review_idDetails_nationality = "Country / territory of nationality";
var APPB2C_cj_review_payment_title = "Payment";
var APPB2C_cj_review_payment_fee = "Fee";
var APPB2C_cj_review_payment_total = "Total";
var APPB2C_cj_review_payment_tax = "Tax";
var APPB2C_cj_review_payment_promoCodes_promoCode = "Promo code";
var APPB2C_cj_review_payment_promoCodes_haveCode = "I have a promo code";
var APPB2C_cj_review_payment_promoCodes_notHaveCode = "I don\u2019t have a promo code";
var APPB2C_cj_review_payment_promoCodes_removeCode = "remove promo code";
var APPB2C_cj_review_payment_promoCodes_remove = "Remove";
var APPB2C_cj_review_payment_promoCodes_applyCode = "Apply code";
var APPB2C_cj_review_payment_promoCodes_discount = "Promotion";
var APPB2C_cj_review_payment_promoCodes_promo = "Promo";
var APPB2C_cj_review_payment_promoCodes_total = "Total";
var APPB2C_cj_review_payment_promoCodes_newFee = "New fee";
var APPB2C_cj_review_payment_promoCodes_invalidCode = "The promo code you entered is not valid";
var APPB2C_cj_review_payment_promoCodes_generalError = "An error occurred \u2013 please try again.";
var APPB2C_cj_review_payment_promoCodes_applied = "Promo code applied";
var APPB2C_cj_review_invoice_title = "Invoice information";
var APPB2C_cj_review_invoice_send = "What type of invoice would you like us to issue?";
var APPB2C_cj_review_invoice_type_duplicatePaper = "Duplicate Uniform Paper Invoice";
var APPB2C_cj_review_invoice_type_triplicate = "Triplicate Uniform Paper Invoice";
var APPB2C_cj_review_invoice_type_duplicateElectronic = "Duplicate Uniform Electronic Invoice";
var APPB2C_cj_review_invoice_type_donate = "Donate Electronic Invoice";
var APPB2C_cj_review_invoice_subtype_label = "Which carrier would you like to use?";
var APPB2C_cj_review_invoice_subtype_mobileBarcode = "Mobile Barcode";
var APPB2C_cj_review_invoice_subtype_citizenDigitalCertificate = "Citizen Digital Certificate";
var APPB2C_cj_review_invoice_consent = "Do you consent to British Council (Taiwan) Limited handling invoice and proof of product return on your behalf for refund of purchased items in order to speed up the refund process?";
var APPB2C_cj_review_invoice_companyName = "Invoice header";
var APPB2C_cj_review_invoice_taxCaption_duplicatePaper = "Invoice number";
var APPB2C_cj_review_invoice_taxCaption_donate = "Charitable organisation number";
var APPB2C_cj_review_invoice_taxValidation_triplicate = "Invoice number has to match 8 digits specific format (eg 11223344)";
var APPB2C_cj_review_invoice_taxValidation_mobileBarcode = "Mobile Barcode has to match the correct format (eg /123-ABC)";
var APPB2C_cj_review_invoice_taxValidation_citizenDigitalCertificate = "Citizen Digital Certificate has to match the correct format of 16 alphanumeric characters (eg 1122AABB3344CCDD)";
var APPB2C_cj_review_invoice_taxValidation_donate = "Charitable organisation number has to match 3-7 digits specific format (eg 123)";
var APPB2C_cj_review_acknowledgement_title = "Order acknowledgement";
var APPB2C_cj_review_acknowledgement_send = "Who should receive the order confirmation for the test booking?";
var APPB2C_cj_review_acknowledgement_myself = "Myself";
var APPB2C_cj_review_acknowledgement_anotherPerson = "Another Person";
var APPB2C_cj_review_acknowledgement_company = "A Company";
var APPB2C_cj_review_acknowledgement_fields_companyName = "Company name";
var APPB2C_cj_review_acknowledgement_fields_companyName_subnote = "use the original spelling of company name";
var APPB2C_cj_review_acknowledgement_fields_firstName = "Other / given names";
var APPB2C_cj_review_acknowledgement_fields_familyName = "Family name";
var APPB2C_cj_review_acknowledgement_fields_email = "Email";
var APPB2C_cj_review_acknowledgement_fields_mobile = "Telephone number";
var APPB2C_cj_review_acknowledgement_fields_country = "Country / territory";
var APPB2C_cj_review_ai_title = "Training consent";
var APPB2C_cj_review_ai_note = "Would you be happy for anonymised test answers and test recordings to be used to train the remote proctoring and test marking software?";
var APPB2C_cj_review_agent_title = "Agent name";
var APPB2C_cj_review_agent_note = "Do you have an agent who is acting on your behalf with your UKVI application?";
var APPB2C_cj_review_agent_label = "Please provide the name of your agent";
var APPB2C_cj_review_tncs_title = "Our terms and conditions";
var APPB2C_cj_review_tncs_agreement = "I agree to the IELTS <0>terms and conditions</0> and <2>cancellation policy</2>";
var APPB2C_cj_review_countryMsg_pakistan = "The IELTS fees paid with a credit card may be different from the mentioned price due to fluctuating exchange rates. Credit card transactions conducted in Pakistani Rupee at online or international merchants are settled by the merchant in a foreign currency.";
var APPB2C_cj_review_registrationFailedModal_title = "Restart your booking";
var APPB2C_cj_review_registrationFailedModal_message = "Oooops, something went wrong. Please try again.";
var APPB2C_cj_review_registrationFailedModal_changedFee_title = "Test prices have changed";
var APPB2C_cj_review_registrationFailedModal_changedFee_line1 = "We inform you that the prices of some test have changed.";
var APPB2C_cj_review_registrationFailedModal_changedFee_line2 = "Please review the new prices and re-select the test.";
var APPB2C_cj_review_registrationFailedModal_changedFee_line3 = "We apologize for any inconvenience.";
var APPB2C_cj_review_registrationFailedModal_changedFee_btn = "Show new prices";
var APPB2C_cj_review_registrationFailedModal_cta = "Restart booking";
var APPB2C_cj_finishPayment_processing = "We are processing your payment...";
var APPB2C_cj_finishPayment_pleaseWait = "Please wait";
var APPB2C_cj_finishPayment_error = "We cannot process your payment right now. Please try again later.";
var APPB2C_cj_bookingComplete_title = "Booking complete";
var APPB2C_cj_bookingComplete_yourBooking = "Your booking";
var APPB2C_cj_bookingComplete_note = "Congratulations, your IELTS test is booked. We have sent you a confirmation of this booking to your email address (don\u2019t forget to check your spam folder!).";
var APPB2C_cj_bookingComplete_noteUolPassportInfo = "Your booking is subject to your passport being verified. We will contact you soon to do this.";
var APPB2C_cj_bookingComplete_paymentFailed = "Sorry \u2013 your online payment failed! We\u2019ve still booked your test for you, but you need to try and pay again for your test.";
var APPB2C_cj_bookingComplete_tryAgain = "Try payment again";
var APPB2C_cj_bookingComplete_otherPaymentOptions = "See other payment options";
var APPB2C_cj_bookingComplete_paymentOptions = "See payment options";
var APPB2C_cj_bookingComplete_loadingRegistrationError = "We cannot load your registration details right now. Please try again later.";
var APPB2C_cj_bookingComplete_loadingPaymentMethodsError = "We cannot load available payment methods right now. Please try again later.";
var APPB2C_cj_bookingComplete_feeDetails_title = "Fee details";
var APPB2C_cj_bookingComplete_feeDetails_fee = "Fee";
var APPB2C_cj_bookingComplete_feeDetails_newFee = "New fee";
var APPB2C_cj_bookingComplete_feeDetails_tax = "Tax";
var APPB2C_cj_bookingComplete_feeDetails_discount = "Promotion";
var APPB2C_cj_bookingComplete_feeDetails_promo = "Promo";
var APPB2C_cj_bookingComplete_feeDetails_total = "Total";
var APPB2C_cj_bookingComplete_feeDetails_reference = "Reference";
var APPB2C_cj_bookingComplete_feeDetails_zeroFeeNoteLine1 = "The test fee has been discounted to";
var APPB2C_cj_bookingComplete_feeDetails_zeroFeeNoteLine2 = "by using a promotional code.";
var APPB2C_cj_bookingComplete_feeDetails_zeroFeeNoteLine3 = "You are not required to make any payment.";
var APPB2C_cj_bookingComplete_prepareNote_title = "Prepare for your test";
var APPB2C_cj_bookingComplete_prepareNote_note = "The first step making sure you are ready to take IELTS is to prepare for it so you know what to expect on the test day.";
var APPB2C_cj_bookingComplete_prepareNote_accesNote = "Free access to your IELTS study materials and resources from the British Council.";
var APPB2C_cj_bookingComplete_prepareNote_view = "View preparation materials";
var APPB2C_cj_bookingComplete_prepareNote_counselling_note = "With our IELTS Counselling packages, you will get the chance to get the optimum support from our IELTS experts who will guide and advise you on how to best prepare for your test to achieve your desired score.";
var APPB2C_cj_bookingComplete_prepareNote_counselling_view = "View our counselling service";
var APPB2C_cj_bookingComplete_offlinePayment_note_pleaseNote = "Please note";
var APPB2C_cj_bookingComplete_offlinePayment_note_line1 = "You now have {{days}} working day(s) to pay. Your test place will be cancelled if you do not pay within this time.";
var APPB2C_cj_bookingComplete_offlinePayment_note_line1_hours = "You now have {{hours}} hours to pay. Your test place will be cancelled if you do not pay within this time.";
var APPB2C_cj_bookingComplete_offlinePayment_note_line1_timeLeft = "You have until {{date}} to pay. Your test place will be cancelled if you do not pay within this time.";
var APPB2C_cj_bookingComplete_offlinePayment_note_line2 = "You will then need to log back in to this site to upload your proof of payment.";
var APPB2C_cj_bookingComplete_offlinePayment_discounted_note_line1 = "The test fee has been discounted to";
var APPB2C_cj_bookingComplete_offlinePayment_discounted_note_line2 = "To confirm your booking, please make a payment for the remaining fee";
var APPB2C_cj_bookingComplete_offlinePayment_fee = "Fee";
var APPB2C_cj_bookingComplete_offlinePayment_incTax = "inc. tax";
var APPB2C_cj_bookingComplete_offlinePayment_name = "Account name";
var APPB2C_cj_bookingComplete_offlinePayment_number = "Account number";
var APPB2C_cj_bookingComplete_offlinePayment_code = "Sort code";
var APPB2C_cj_bookingComplete_offlinePayment_reference = "Payment reference";
var APPB2C_cj_bookingComplete_offlinePayment_description = "Payment description:";
var APPB2C_cj_bookingComplete_offlinePayment_showDescription = "Show payment description";
var APPB2C_cj_bookingComplete_offlinePayment_hideDescription = "Hide payment description";
var APPB2C_cj_bookingComplete_tnc = "You agreed to these";
var APPB2C_cj_bookingComplete_tncLink = "terms and conditions";
var APPB2C_cj_ukviStartPage_title = "IELTS for UK Visas";
var APPB2C_cj_ukviStartPage_note1_title = "Please note:";
var APPB2C_cj_ukviStartPage_note1_content = "If you are NOT booking an IELTS test to support a UK Visas and Immigration application, <0>please see the other IELTS tests we offer</0>.";
var APPB2C_cj_ukviStartPage_testsBelow = "The IELTS tests below have been approved for UK Visas and Immigration purposes:";
var APPB2C_cj_ukviStartPage_ac_title = "IELTS for UKVI Academic";
var APPB2C_cj_ukviStartPage_ac_content = "This test is for test takers wishing to study at undergraduate or postgraduate levels, and for those seeking professional registration in the UK.";
var APPB2C_cj_ukviStartPage_gt_title = "IELTS for UKVI General Training";
var APPB2C_cj_ukviStartPage_gt_content = "This test is for test takers wishing to migrate to the UK and for those wishing to train or study below degree level.";
var APPB2C_cj_ukviStartPage_lifeSkils_title_v2 = "IELTS for UKVI Life Skills";
var APPB2C_cj_ukviStartPage_lifeSkils_visaTypes = "This is the test to take if you are applying for the following types of UK visa:";
var APPB2C_cj_ukviStartPage_lifeSkils_family = "family visa";
var APPB2C_cj_ukviStartPage_lifeSkils_extension = "extension to family, spouse or partner visa";
var APPB2C_cj_ukviStartPage_lifeSkils_citizenship = "indefinite leave to remain or citizenship.";
var APPB2C_cj_ukviStartPage_lifeSkils_note_title = "Please note:";
var APPB2C_cj_ukviStartPage_lifeSkils_note_content_v2 = "If you have taken an IELTS for UKVI Life Skills test within the last 2 years and passed it, you should not take the exact same test.";
var APPB2C_cj_ukviStartPage_lifeSkils_a1_title_v2 = "IELTS for UKVI Life Skills A1";
var APPB2C_cj_ukviStartPage_lifeSkils_a1_content = "This test is for those who need to prove their English speaking and listening skills as part of their application to UK Visas and Immigration for 'family of a settled person' visas.";
var APPB2C_cj_ukviStartPage_lifeSkils_a2_title_v2 = "IELTS for UKVI Life Skills A2 (UK only)";
var APPB2C_cj_ukviStartPage_lifeSkils_a2_content = "This test is for those who need to prove their English speaking and listening skills as part of their application to UK Visas and Immigration for extension to Family, Spouse or Partner visa.";
var APPB2C_cj_ukviStartPage_lifeSkils_b1_title_v2 = "IELTS for UKVI Life Skills B1";
var APPB2C_cj_ukviStartPage_lifeSkils_b1_content = "This test is for those who need to prove their English speaking and listening skills as part of their application to UK Visas and Immigration for indefinite leave to remain or citizenship.";
var APPB2C_cj_ukviStartPage_whichUkvi = "Which IELTS for UK Visas test is right for me?";
var APPB2C_cj_ukviStartPage_terms = "Before you proceed, please read the <0>IELTS for UK Visas Terms and Conditions</0>.";
var APPB2C_cj_onRequest_note = "There are currently no IELTS for UKVI test dates available for this location.";
var APPB2C_cj_onRequest_info1 = "Complete the form to register your interest in sitting for an IELTS for UKVI test. The information you provide will be reviewed and we will contact you to follow up on this request.";
var APPB2C_cj_onRequest_prefNote = "The British Council will make every attempt to accommodate your preferred choice. If your preferred choice is not available, you will be offered an alternative option.";
var APPB2C_cj_onRequest_please = "Please note";
var APPB2C_cj_onRequest_form_labels_testRangeQuestion = "How soon would you like to take the test?";
var APPB2C_cj_onRequest_form_labels_firstname = "First / given names (including middle names)";
var APPB2C_cj_onRequest_form_labels_surname = "Surname / family name";
var APPB2C_cj_onRequest_form_labels_telephone = "Mobile number";
var APPB2C_cj_onRequest_form_labels_email = "Your email";
var APPB2C_cj_onRequest_form_labels_confirmEmail = "Confirm email address";
var APPB2C_cj_onRequest_form_submit = "Register my interest";
var APPB2C_cj_onRequest_form_testRangeOpt_oneMonth = "in the next 28 days";
var APPB2C_cj_onRequest_form_testRangeOpt_twoMonths = "within the next 2 months";
var APPB2C_cj_onRequest_form_testRangeOpt_threeMonths = "within the next 3 months";
var APPB2C_cj_onRequest_form_testRangeOpt_threeMonthsPlus = "in more than 3 months";
var APPB2C_cj_onRequest_otherLocations_info1 = "You have two options to help you book a test date:";
var APPB2C_cj_onRequest_otherLocations_choose = "Choose a different location";
var APPB2C_cj_onRequest_otherLocations_info2 = "We have IELTS for UKVI tests in the following locations.";
var APPB2C_cj_onRequest_otherLocations_show = "+ Show more";
var APPB2C_cj_onRequest_otherLocations_hide = "- Hide";
var APPB2C_cj_onRequest_subtitles_register = "Register your interest for taking your test in";
var APPB2C_cj_onRequest_subtitles_aboutYou = "About you";
var APPB2C_cj_onRequest_subtitles_aboutPreferences = "About your test preferences";
var APPB2C_cj_onRequest_subtitles_markpref = "Your marketing preferences";
var APPB2C_cj_onRequest_created_title = "Your request has been received";
var APPB2C_cj_onRequest_created_note = "We have registered your interest in sitting for IELTS for UKVI test in ";
var APPB2C_cj_onRequest_created_in = "in";
var APPB2C_cj_onRequest_created_info = "The information you provide will be reviewed and we will contact you to follow up on this request within 48-72 hours.";
var APPB2C_cj_onRequest_created_back = "< Back to all UKVI test options";
var APPB2C_cj_ieltsReady_title = "Create an account";
var APPB2C_cj_ieltsReady_note = "You\u2019ll need an account to access the <0>IELTS Ready Member area.</0>";
var APPB2C_cj_ieltsReady_submitBtnText = "Create account";
var APPB2C_cj_ieltsReady_dobMin = "You need to be over 18 years to create an account. You will need your parent or guardian to get access to IELTS Ready Member area.";
var APPB2C_cj_ieltsReady_targetScore_title = "What is your overall target score for your IELTS test?";
var APPB2C_cj_ieltsReady_targetScore_option = "I don't know yet";
var APPB2C_cj_ieltsReady_nameWarning = "When you register for an IELTS test your name <bold>must match</bold> your official Identification Document, ensure it is correct now to save time later.";
var APPB2C_cj_ieltsReady_description_line1 = "Access a wealth of IELTS Ready study materials covering grammar, vocabulary, reading, listening, and more. Improve your skills for the IELTS test, whether studying solo or with expert guidance. Get the score you want with IELTS Ready.";
var APPB2C_cj_ieltsReady_description_line2 = "Best of luck!";
var APPB2C_common_basic_cancel = "Cancel";
var APPB2C_common_basic_bookPrePaid = "Book pre-paid test";
var APPB2C_common_basic_notFound_title = "Page not found";
var APPB2C_common_basic_retake = "Retake";
var APPB2C_common_basic_notFound_msg = "The page you are looking for isn\u2019t there";
var APPB2C_common_basic_notFound_goHome = "Go to home page";
var APPB2C_common_basic_expando_show = "+ Read full notice";
var APPB2C_common_basic_expando_collapse = "- Hide full notice";
var APPB2C_common_basic_notAllowed_title = "Oooops!";
var APPB2C_common_basic_notAllowed_msg = "You are not allowed to visit this page.";
var APPB2C_common_basic_errors_title = "Oooops!";
var APPB2C_common_basic_errors_network = "Possibly you\u2019ve lost connection to the Internet. Please try to reconnect and refresh the page.";
var APPB2C_common_basic_errors_server = "It looks like something went wrong. Please try again in a few minutes.";
var APPB2C_common_basic_errors_unknown = "It looks like something went wrong. Please try again in a few minutes.";
var APPB2C_common_basic_errors_contactTestCentre = "Sorry, there has been a problem. Please contact your local centre to request a transfer.";
var APPB2C_common_basic_errors_noTest = "This test isn\u2019t available anymore. Please select another test instead.";
var APPB2C_common_basic_errors_unableToDownloadFile = "We\u2019ve got your files, but we\u2019re having problems displaying them.";
var APPB2C_common_basic_notLoading_title = "Unable to load page";
var APPB2C_common_basic_notLoading_note = "We could not load the requested page. Most probably you\u2019ve lost your network connection. Try to refresh the page in a few moments.";
var APPB2C_common_basic_notLoading_refresh = "Refresh";
var APPB2C_common_basic_dateField_day = "Day";
var APPB2C_common_basic_dateField_months = "Choose month";
var APPB2C_common_basic_dateField_month = "Month";
var APPB2C_common_basic_dateField_year = "Year";
var APPB2C_common_basic_bookingDetails_lrw_title = "Your Written test";
var APPB2C_common_basic_bookingDetails_osrTitle_listening = "Your Listening test";
var APPB2C_common_basic_bookingDetails_osrTitle_reading = "Your Reading test";
var APPB2C_common_basic_bookingDetails_lrw_results = "Listening, Reading & Writing";
var APPB2C_common_basic_bookingDetails_lrw_cd = "IELTS on computer at test centre";
var APPB2C_common_basic_bookingDetails_lrw_pb = "IELTS on paper";
var APPB2C_common_basic_bookingDetails_lrw_online = "Online";
var APPB2C_common_basic_bookingDetails_speaking_title = "Your Speaking test";
var APPB2C_common_basic_bookingDetails_speaking_results = "Speaking";
var APPB2C_common_basic_bookingDetails_speaking_f2f = "Face to face";
var APPB2C_common_basic_bookingDetails_speaking_live = "Face to face";
var APPB2C_common_basic_bookingDetails_speaking_remote = "Video call at the test centre";
var APPB2C_common_basic_bookingDetails_speaking_online = "Online";
var APPB2C_common_basic_bookingDetails_lifeSkills_title = "Your test";
var APPB2C_common_basic_bookingDetails_lifeSkills_results = "Listening & Speaking";
var APPB2C_common_basic_bookingDetails_arrival = "(please arrive at {{time}})";
var APPB2C_common_basic_yes = "Yes";
var APPB2C_common_basic_no = "No";
var APPB2C_common_basic_goBack = "Go back";
var APPB2C_common_basic_menu = "Menu";
var APPB2C_common_basic_choose = "Choose";
var APPB2C_common_basic_pleaseNote = "Please note:";
var APPB2C_common_basic_loading = "Loading...";
var APPB2C_common_basic_oneSecond = "One second, please";
var APPB2C_common_basic_waitReassurance = "We are almost there...";
var APPB2C_common_basic_backToTop = "Back to top";
var APPB2C_common_basic_wereSorry = "We\u2019re sorry";
var APPB2C_common_basic_failure = "Failure";
var APPB2C_common_basic_close = "Close";
var APPB2C_common_basic_copy = "Copy";
var APPB2C_common_basic_copied = "Copied";
var APPB2C_common_basic_externalLinkTitle = "(opens new window)";
var APPB2C_common_basic_forms_requiredMessage = "This field is required.";
var APPB2C_common_basic_forms_maxLengthMessage = "Max length is {{count}}.";
var APPB2C_common_basic_forms_onlyLatin = "Field should contain only latin characters.";
var APPB2C_common_basic_forms_unsupportedChars = "Field contains not supported characters set.";
var APPB2C_common_basic_forms_idNumber = "Field has to match specific format (allowed are latin letters, digits, and hyphen '-')";
var APPB2C_common_basic_forms_idNumber_brackets = "Brackets are not allowed in ID Number but please make sure you enter any letter or digit inside the brackets. For example if your ID Number is '123(4)' then enter '1234'";
var APPB2C_common_basic_forms_idMaxLength = "Document number can be at most 20 characters long.";
var APPB2C_common_basic_forms_idMaxLength2 = "Document number can be at most {{maxLength}} characters long.";
var APPB2C_common_basic_forms_idExpiration = "Your document expires before test term.";
var APPB2C_common_basic_forms_idProofRequired = "Proof of identification is required.";
var APPB2C_common_basic_forms_mobileLength = "Mobile number can be at most 20 characters long.";
var APPB2C_common_basic_forms_mobileBypass = "This is my correct mobile number";
var APPB2C_common_basic_forms_validMobile = "Please specify a valid mobile number.";
var APPB2C_common_basic_forms_requiredNoSurmane = "This field is required. If you do not have a surname, please put a hyphen ('-') in this field.";
var APPB2C_common_basic_forms_dobOutOfRange = "Are you sure you were born that year?";
var APPB2C_common_basic_forms_dobMin = "You need to be over 18 years old to create an account. You will need your parent or guardian to book the test for you.";
var APPB2C_common_basic_forms_dobMinIol = "Sorry \u2013 you have to be at least 18 years old to book IELTS Online. Please book IELTS in a test centre instead.";
var APPB2C_common_basic_forms_minorDobMax = "If your child is over 18, please ask them to register for an account themselves with the British Council";
var APPB2C_common_basic_forms_minorDobMin = "Children of age 11 and higher can take a test.";
var APPB2C_common_basic_forms_postCodeMessage = "Postcode / ZIP has to match 5 digits specific format (eg 07102)";
var APPB2C_common_basic_forms_postCodeNotFound = "Sorry we can\u2019t find that postcode; please check you\u2019ve entered it correctly.";
var APPB2C_common_basic_forms_firstNameMaxLength = "First / given names can be at most {{count}} characters long.";
var APPB2C_common_basic_forms_surnameMaxLength = "Surname / family name can be at most {{count}} characters long.";
var APPB2C_common_basic_forms_addressMaxLength = "Address can be at most {{count}} characters long.";
var APPB2C_common_basic_forms_townMaxLength = "Town / city can be at most {{count}} characters long.";
var APPB2C_common_basic_forms_postCodeMaxLength = "Post code can be at most {{count}} characters long.";
var APPB2C_common_basic_forms_stateMaxLength = "State can be at most {{count}} characters long.";
var APPB2C_common_basic_ok = "OK";
var APPB2C_common_basic_change = "Change";
var APPB2C_common_basic_edit = "Edit";
var APPB2C_common_basic_add = "Add";
var APPB2C_common_basic_upload = "Upload";
var APPB2C_common_basic_validationError = "Please check all the marked questions to continue.";
var APPB2C_common_basic_on = "on";
var APPB2C_common_basic_venue_isAccessible = "Accessible building";
var APPB2C_common_specialReqs_AMANU = "Amanuensis";
var APPB2C_common_specialReqs_ANTHR = "Another";
var APPB2C_common_specialReqs_BTP = "Braille test papers";
var APPB2C_common_specialReqs_BWP = "Braille word processor";
var APPB2C_common_specialReqs_EPTP = "Enlarged print test papers";
var APPB2C_common_specialReqs_ET = "Extra time";
var APPB2C_common_specialReqs_LRTV = "Lip-reading test version";
var APPB2C_common_specialReqs_SAE = "Special amplification equipment";
var APPB2C_common_specialReqs_VAS = "Voice-activated software";
var APPB2C_common_specialReqs_WP = "Word processor";
var APPB2C_common_general_next = "Next";
var APPB2C_common_general_previous = "Previous";
var APPB2C_common_general_remove = "Remove";
var APPB2C_common_general_regNotFound = "Registration not found";
var APPB2C_common_general_steps = "Step {{step}} of {{steps}}";
var APPB2C_common_general_stepsContinued = "Step {{step}} of {{steps}} continued...";
var APPB2C_common_nav_login = "Login";
var APPB2C_common_nav_ttp = "Test Taker Portal";
var APPB2C_common_nav_logout = "Log out";
var APPB2C_common_nav_logoutModal_title = "Logging out";
var APPB2C_common_nav_logoutModal_message = "Logging out will exit the Registration process.";
var APPB2C_common_nav_logoutModal_question = "Are you sure you want to continue?";
var APPB2C_common_nav_logoutModal_confirm = "OK";
var APPB2C_common_nav_hello = "Hello";
var APPB2C_common_nav_chooseLanguage = "Choose language";
var APPB2C_common_nav_bookNewTest = "Book new test";
var APPB2C_common_nav_resultsTests = "Tests & results";
var APPB2C_common_nav_myAccount = "My account";
var APPB2C_common_nav_helpAndContact = "Help & contact";
var APPB2C_common_nav_preparation = "Preparation";
var APPB2C_common_examType_ors_ac = "IELTS Academic";
var APPB2C_common_examType_ors_gt = "IELTS General Training";
var APPB2C_common_examType_ors_osr_ac = "IELTS Academic";
var APPB2C_common_examType_ors_osr_gt = "IELTS General Training";
var APPB2C_common_examType_iol_ac = "IELTS Academic (Online)";
var APPB2C_common_examType_iol_gt = "IELTS General Training (Online)";
var APPB2C_common_examType_uol_ac = "IELTS for UKVI (Academic) Online";
var APPB2C_common_examType_uol_gt = "IELTS for UKVI (General Training) Online";
var APPB2C_common_examType_ukvi_ac = "IELTS for UKVI Academic";
var APPB2C_common_examType_ukvi_gt = "IELTS for UKVI General Training";
var APPB2C_common_examType_ukvi_osr_ac = "IELTS for UKVI Academic";
var APPB2C_common_examType_ukvi_osr_gt = "IELTS for UKVI General Training";
var APPB2C_common_examType_ukvi_lfska1_v2 = "IELTS for UKVI Life Skills A1";
var APPB2C_common_examType_ukvi_lfska2_v2 = "IELTS for UKVI Life Skills A2";
var APPB2C_common_examType_ukvi_lfskb1_v2 = "IELTS for UKVI Life Skills B1";
var APPB2C_common_startPage_title = "Choose your IELTS test";
var APPB2C_common_startPage_subtitle = "Which IELTS test would you like to take?";
var APPB2C_common_startPage_ielts = "IELTS";
var APPB2C_common_startPage_ieltsUkvi = "IELTS for UK Visas";
var APPB2C_common_startPage_book = "Book";
var APPB2C_common_startPage_options_ac = "IELTS Academic";
var APPB2C_common_startPage_options_gt = "IELTS General Training";
var APPB2C_common_startPage_options_ukvi_v2 = "IELTS for UKVI or IELTS for UKVI Life Skills";
var APPB2C_common_startPage_hero_title = "Tests & Results";
var APPB2C_common_startPage_hero_subtitle = "Your Test Taker portal will help you prepare for your test, manage your bookings, get your results, and use your IELTS score to continue your journey with the English language.";
var APPB2C_common_startPage_hero_cta = "Book a new test";
var APPB2C_common_startPage_whichIELTS = "Which IELTS test is right for me?";
var APPB2C_common_startPage_readTnCs = "Before you proceed, please read the IELTS";
var APPB2C_common_startPage_endNote = "The British Council is a proud co-owner of IELTS.";
var APPB2C_common_startPage_tncs = "Terms & Conditions";
var APPB2C_common_startPage_description_ac = "Take this test if you want to study at undergraduate or postgraduate level, or join a professional organisation anywhere in the world.";
var APPB2C_common_startPage_description_gt = "Take this test if you want to study at below degree level or work anywhere in the world.";
var APPB2C_common_startPage_description_ukvi = "UK government approved Secure English Language Tests for those who need a Work / Spouse Visa, or who are planning to study a course below degree level, or at a UK institution not recognised by UKVI.";
var APPB2C_common_startPage_upcoming_title = "Your upcoming tests";
var APPB2C_common_startPage_upcoming_manage = "View this booking";
var APPB2C_common_startPage_upcoming_prepare = "Prepare for this test";
var APPB2C_common_startPage_upcoming_cd = "Computer test";
var APPB2C_common_startPage_upcoming_pb = "Written test";
var APPB2C_common_startPage_upcoming_live = "Speaking test";
var APPB2C_common_startPage_upcoming_lifeSkills = "Listening & Speaking test";
var APPB2C_common_startPage_upcoming_remote = "Remote speaking test";
var APPB2C_common_startPage_upcoming_empty = "You don\u2019t have any upcoming tests";
var APPB2C_common_startPage_upcoming_noSpeaking = "No info about speaking yet";
var APPB2C_common_startPage_upcoming_noTime = "We will send you the exact time of your test no more than 48 hours before your test date.";
var APPB2C_common_startPage_upcoming_pay = "Pay for your test";
var APPB2C_common_startPage_upcoming_pastPaymentDeadline = "Payment date expired";
var APPB2C_common_startPage_upcoming_missing_id = "Upload ID document";
var APPB2C_common_startPage_upcoming_missing_medical = "Upload medical evidence";
var APPB2C_common_startPage_upcoming_missing_payment = "Upload proof of payment";
var APPB2C_common_startPage_upcoming_missing_childConsent = "Update child consent information";
var APPB2C_common_startPage_upcoming_osr_note = "Your {{skill}} Retake result will count towards your new overall band score.";
var APPB2C_common_startPage_past_title = "Your previous tests & scores";
var APPB2C_common_startPage_past_cd = "IELTS on computer";
var APPB2C_common_startPage_past_pb = "IELTS on paper";
var APPB2C_common_startPage_past_score = "You scored";
var APPB2C_common_startPage_past_osr_newScore = "Your new score";
var APPB2C_common_startPage_past_osr_originalScore = "Your original score";
var APPB2C_common_startPage_past_osr_viewRetakeLink = "View booked retake";
var APPB2C_common_startPage_past_osr_note_confirmed = "You\u2019ve booked a {{skill}} Retake to try and improve your overall band score.";
var APPB2C_common_startPage_past_osr_note_awaiting = "You\u2019re waiting for your results from your {{skill}} Retake to try and improve your overall band score.";
var APPB2C_common_startPage_past_osr_note_hasResults = "You booked a {{skill}} Retake to try and improve your overall band score. Your new score is now available.";
var APPB2C_common_startPage_past_scoreLifeSkills = "Your score";
var APPB2C_common_startPage_past_rebook = "Rebook this test with different dates";
var APPB2C_common_startPage_past_empty = "You don\u2019t have any tests";
var APPB2C_common_startPage_past_upcomingResults = "Your result will be available by {{date}}";
var APPB2C_common_startPage_recent_title = "Your recent result";
var APPB2C_common_startPage_recent_cta = "See full result";
var APPB2C_common_startPage_candidates_showingFor = "Showing test & results for: ";
var APPB2C_common_startPage_candidates_nowAdult = "We have noticed that {{name}} is now legally an adult. According to our policy they have to manage their IELTS account themselves.";
var APPB2C_common_startPage_common_cancelled = "Cancelled";
var APPB2C_common_startPage_missing_cancel = "I don\u2019t want to log in";
var APPB2C_common_startPage_missing_ttData_title = "We need to check something!";
var APPB2C_common_startPage_missing_ttData_line1 = "We can see you\u2019ve registered with us before for a different product or service.";
var APPB2C_common_startPage_missing_ttData_line2 = "So that we can log you in, please confirm your name and date of birth again.";
var APPB2C_common_startPage_missing_ttData_line3 = "Thanks!";
var APPB2C_common_startPage_missing_ttData_cta = "Confirm your details";
var APPB2C_common_startPage_missing_ttData_firstName = "First / given names (including middle names)";
var APPB2C_common_startPage_missing_ttData_lastName = "Surname / family name";
var APPB2C_common_startPage_missing_ttData_noLastName = "I don\u2019t have a surname / family name";
var APPB2C_common_startPage_missing_ttData_dob = "Date of birth";
var APPB2C_common_startPage_missing_marketing_title = "Your marketing preferences";
var APPB2C_common_startPage_missing_marketing_opts_BcOnly = "I am happy to receive updates about products, services and events provided or organised by the British Council (including members of the wider British Council group).";
var APPB2C_common_startPage_missing_marketing_opts_BcAndThirdParties = "I am happy to receive information about products, services and events organised by British Council and by third parties selected by the British Council.";
var APPB2C_common_startPage_missing_marketing_opts_DoNotSend = "Please do not send me any marketing updates.";
var APPB2C_common_startPage_missing_marketing_notes_main = "The British Council would like to use the information you provide to send details of activities, services and events (including social events) which we think are of interest.";
var APPB2C_common_startPage_missing_marketing_notes_full1 = "You may unsubscribe at any time from our emails within your \u2018My Account\u2019 area in the Test Taker Portal.";
var APPB2C_common_startPage_missing_marketing_notes_full2 = "Or you can";
var APPB2C_common_startPage_missing_marketing_notes_link = "contact us";
var APPB2C_common_startPage_missing_marketing_notes_full3 = "We will process your personal information based on your consent.";
var APPB2C_common_startPage_missing_marketing_cta = "Save";
var APPB2C_common_startPage_error_title = "Unable to load all tests";
var APPB2C_common_startPage_error_body = "There might be some more tests but we\u2019ve encountered an error while loading them. Please try to refresh the page in a few moments.";
var APPB2C_common_startPage_error_cta = "Refresh page";
var APPB2C_common_account_title = "My account";
var APPB2C_common_account_error = "Oooops, something went wrong. Please try again in a few moments.";
var APPB2C_common_account_details_name = "Your name";
var APPB2C_common_account_details_email_note = "The email address you will provide must be valid and you need to have access to it. All correspondence regarding your account and registration will be sent to this email address. From now on, you will be able to log into the portal using username or email address.";
var APPB2C_common_account_details_email_username = "Username";
var APPB2C_common_account_details_email_label = "Email";
var APPB2C_common_account_details_email_set = "Provide email";
var APPB2C_common_account_details_email_confirm = "Confirm email";
var APPB2C_common_account_details_email_save = "Save email";
var APPB2C_common_account_details_email_success = "Your email has been saved.";
var APPB2C_common_account_details_email_maxLength = "Your email is too long, max length is 60.";
var APPB2C_common_account_details_email_mismatch = "This field needs to match the Email field above exactly.";
var APPB2C_common_account_details_email_validEmail = "Please specify a valid email address.";
var APPB2C_common_account_details_psw_label = "Password";
var APPB2C_common_account_details_psw_change = "Change password";
var APPB2C_common_account_details_psw_show = "Show password";
var APPB2C_common_account_details_psw_old = "Old password";
var APPB2C_common_account_details_psw_new = "New password";
var APPB2C_common_account_details_psw_success = "Your password has been changed.";
var APPB2C_common_account_details_psw_requirements_levels_0 = "Very Weak";
var APPB2C_common_account_details_psw_requirements_levels_1 = "Weak";
var APPB2C_common_account_details_psw_requirements_levels_2 = "Medium";
var APPB2C_common_account_details_psw_requirements_levels_3 = "Strong";
var APPB2C_common_account_details_psw_requirements_levels_4 = "Very Strong";
var APPB2C_common_account_details_psw_requirements_ok = "Your password meets requirements";
var APPB2C_common_account_details_psw_requirements_mustHave = "Your password must have:";
var APPB2C_common_account_details_psw_requirements_shouldHave = "And it needs to meet 3 of the following requirements:";
var APPB2C_common_account_details_psw_requirements_strength = "Strength";
var APPB2C_common_account_details_psw_requirements_reqs_length = "8 or more characters";
var APPB2C_common_account_details_psw_requirements_reqs_lower = "Lowercase letters";
var APPB2C_common_account_details_psw_requirements_reqs_upper = "Uppercase letters";
var APPB2C_common_account_details_psw_requirements_reqs_number = "At least one number";
var APPB2C_common_account_details_psw_requirements_reqs_special = "At least one special character";
var APPB2C_common_account_details_psw_requirements_maxLength = "Your password is too long, max length is 100.";
var APPB2C_common_account_details_psw_requirements_tooWeak = "Your password is too weak.";
var APPB2C_common_account_details_subnote_address = "use the original spelling of address";
var APPB2C_common_account_details_subnote_city = "use the original spelling of town / city";
var APPB2C_common_account_marketing_title = "Your marketing preferences";
var APPB2C_common_account_marketing_success = "Your marketing preferences have been updated successfully.";
var APPB2C_common_account_smsNotificationSettings_title = "SMS notifications setting";
var APPB2C_common_account_smsNotificationSettings_mobileLabel = "SMS messages will be sent to:";
var APPB2C_common_account_smsNotificationSettings_success = "Your SMS notifications setting has been updated successfully.";
var APPB2C_common_account_terms_title = "You agreed to the account registration <0>terms and conditions</0>";
var APPB2C_common_account_terms_disclaimer = "The British Council will use the information that you are providing in connection with processing your registration. The legal basis for processing your information is agreement with our terms and conditions of registration (contract).";
var APPB2C_common_account_terms_extra_title = "Data Protection";
var APPB2C_common_account_terms_extra_line1 = "The British Council complies with data protection law in the UK and laws in other countries that meet internationally accepted standards.";
var APPB2C_common_account_terms_extra_line2 = "You have the right to ask for a copy of the information we hold on you, and the right to ask us to correct any inaccuracies in that information. If you have concerns about how we have used your personal information, you also have the right to complain to a privacy regulator.";
var APPB2C_common_account_terms_extra_line3_1 = "For detailed information, please refer to the privacy section of our website,";
var APPB2C_common_account_terms_extra_line3_2 = " or contact your local British Council office. We will keep your information for a period of 3 years from the time of collection for your registration; for marketing purposes, we will keep your information for a period of 7 years.";
var APPB2C_common_account_terms_download = "You can download your agreed Terms & Conditions version:";
var APPB2C_common_account_terms_previous = "You can find the link to the previous Terms & Conditions version here: <0>terms and conditions</0>";
var APPB2C_common_account_terms_cta = "Download T&Cs";
var APPB2C_common_helpAndContact_title = "Help & contact";
var APPB2C_common_helpAndContact_selectExamLabel = "Showing help for this test:";
var APPB2C_common_helpAndContact_ieltsReference = "IELTS reference number:";
var APPB2C_common_helpAndContact_noTests_header = "You don\u2019t have any tests to request help for.";
var APPB2C_common_helpAndContact_noTests_bookNewBtn = "Book a new test";
var APPB2C_common_helpAndContact_noTests_contactLink = "Contact details can be found on our <0>Take IELTS website</0>.";
var APPB2C_common_helpAndContact_icContent_header = "If you have any questions about your IELTS test, please contact us.";
var APPB2C_common_helpAndContact_icContent_emailLabel = "Email";
var APPB2C_common_helpAndContact_icContent_phoneLabel = "Phone";
var APPB2C_common_helpAndContact_icContent_referenceReminder = "So we can help you quicker, please quote your IELTS reference number:";
var APPB2C_common_helpAndContact_icContent_commonQuestionsHeader = "Common questions";
var APPB2C_common_helpAndContact_actionSection_icHeader = "Other ways we can help you\u2026";
var APPB2C_common_helpAndContact_actionSection_iolHeader = "What sort of support do you need?";
var APPB2C_common_helpAndContact_actionSection_faqLabel = "I have a quick question I need an answer for:";
var APPB2C_common_helpAndContact_actionSection_faqLink = "View our FAQs";
var APPB2C_common_helpAndContact_actionSection_launchChatLabel = "I need to chat to somebody online about my test:";
var APPB2C_common_helpAndContact_actionSection_launchChatBtn = "Launch live-chat";
var APPB2C_common_helpAndContact_actionSection_contactFormLabel = "I can\u2019t chat right now, but I need somebody to contact me later:";
var APPB2C_common_helpAndContact_actionSection_contactFormLabelInCentre = "Do you need more help? Click the button below to complete the contact form.";
var APPB2C_common_helpAndContact_actionSection_contactFormLink = "Complete our contact form";
var APPB2C_common_helpAndContact_form_back = "Back to help & contact";
var APPB2C_common_helpAndContact_form_title = "How can we help you with your test?";
var APPB2C_common_helpAndContact_form_label = "Please briefly outline your query";
var APPB2C_common_helpAndContact_form_complaint_title = "Please select the type of request:";
var APPB2C_common_helpAndContact_form_complaint_radio_other = "Regular request eg. a question";
var APPB2C_common_helpAndContact_form_complaint_radio_complaint = "Complaint";
var APPB2C_common_helpAndContact_form_complaint_moreInfoLinkTitle = "Find out more";
var APPB2C_common_helpAndContact_form_complaint_moreInfoLink = "For more information on making a complaint to the British Council, see <0>Make a complaint</0>";
var APPB2C_common_helpAndContact_form_validation = "This field is required.";
var APPB2C_common_helpAndContact_form_response = "We aim to respond to all requests within one business day, excluding weekends and public holidays.";
var APPB2C_common_helpAndContact_form_legal = "The British Council will use the information that you are providing in connection with processing your request. For detailed information, please refer to the <0>privacy section of our website</0>";
var APPB2C_common_helpAndContact_form_submit = "Submit contact form";
var APPB2C_common_helpAndContact_form_thanks_title = "Thanks for contacting us";
var APPB2C_common_helpAndContact_form_thanks_banner = "We have received your contact request.";
var APPB2C_common_helpAndContact_form_thanks_info = "We aim to respond to all requests within one business day, excluding weekends and public holidays.";
var APPB2C_common_helpAndContact_form_thanks_back = "Back to my test booking";
var APPB2C_common_preparation_title = "Preparation";
var APPB2C_common_preparation_selectExamLabel = "Showing materials for this test:";
var APPB2C_common_preparation_viewTestBtn = "View this test";
var APPB2C_common_preparation_noTests_header = "You don\u2019t have any booked tests to prepare for.";
var APPB2C_common_preparation_noTests_contactLink = "Free preparation materials are available on our <0>Take IELTS website</0>.";
var APPB2C_common_draft_title = "Confirm your details";
var APPB2C_common_draft_note_line1 = "Since you last visited this site, your IELTS agent ({{agent}}) has added different details for you when they were registering you for a test.";
var APPB2C_common_draft_note_line2 = "Please check their changes below and update your details if you notice they\u2019ve made a mistake.";
var APPB2C_common_draft_note_line3 = "If you don\u2019t confirm your details, {{agent}} will not be able to register you for a test.";
var APPB2C_common_draft_difference = "Your agent added this different answer.";
var APPB2C_common_draft_edit = "Change";
var APPB2C_common_draft_personal_header = "Your details";
var APPB2C_common_draft_personal_title = "Check your personal details";
var APPB2C_common_draft_personal_note = "All personal details provided on this page must match the Test Taker's identification document used for registration and presented at the test location, as these will appear on the Test Taker's Test Report Form (TRF). Once registration is complete, you may be charged a fee if you ask us to modify any of this information before we issue the TRF. Please note that no modifications can be made after the TRF has been issued.";
var APPB2C_common_draft_personal_cta = "Update personal details";
var APPB2C_common_draft_id_header = "Your identification";
var APPB2C_common_draft_id_title = "Check your ID details";
var APPB2C_common_draft_id_note = "On the test day, you will be required to bring the same identification you are providing below.";
var APPB2C_common_draft_id_documentWithNoExpiryDate = "The document doesn\u2019t have an expiry date";
var APPB2C_common_draft_id_issuingAuthority = "Issuing authority";
var APPB2C_common_draft_id_cta = "Update ID";
var APPB2C_common_draft_cta_confirm = "Confirm my details";
var APPB2C_common_draft_cta_note = "If you don\u2019t confirm your details, {{agent}} will not be able to register you for a test. You will still be able to book tests for yourself";
var APPB2C_common_draft_cta_decline = "Don\u2019t confirm my details with my agent";
var APPB2C_common_draft_error_pastDeadline = "The deadline for your details confirmation has passed.";
var APPB2C_common_regHeader_reference = "Reference";
var APPB2C_common_regHeader_trfLoading = "Just a second...";
var APPB2C_common_regHeader_trfNumber = "TRF number";
var APPB2C_common_changeBooking_title = "Change booking";
var APPB2C_common_changeBooking_subtitle = "What do you want to change about this booking?";
var APPB2C_common_changeBooking_goBack = "I don\u2019t want to change my booking";
var APPB2C_common_changeBooking_transferNotes_1 = "Transfer and cancellation requests are subject to approval by the test centre.";
var APPB2C_common_changeBooking_transferNotes_2 = "We will aim to respond to all requests within 48-72 hours";
var APPB2C_common_changeBooking_transferNotesIol_1 = "Transfers and cancellations are subject to approval by the British Council.";
var APPB2C_common_changeBooking_transferNotesIol_2 = "Before submitting your request, please carefully read the <0>IELTS Postponement, Cancellation & Refund policy</0>";
var APPB2C_common_changeBooking_transfer_text = "I need to change the date, time or location of my test:";
var APPB2C_common_changeBooking_transfer_textIol = "I need to transfer the test to a different date:";
var APPB2C_common_changeBooking_transfer_cta = "Request transfer";
var APPB2C_common_changeBooking_cancel_text = "I need to cancel my test:";
var APPB2C_common_changeBooking_cancel_cta = "Request cancellation";
var APPB2C_common_transfer_title = "Transfer your booking";
var APPB2C_common_transfer_selfService_chooseDates_title = "Transfer your test";
var APPB2C_common_transfer_selfService_availableDates_title = "Available dates";
var APPB2C_common_transfer_selfService_review_test_changeLrw = "Change written exam date";
var APPB2C_common_transfer_selfService_review_tncs_agreement = "You agreed to the IELTS <0>terms and conditions</0> and <2>cancellation policy</2>";
var APPB2C_common_transfer_selfService_review_confirm_title = "Confirm transfer";
var APPB2C_common_transfer_selfService_review_confirm_proceedBtn = "Transfer test";
var APPB2C_common_transfer_selfService_review_errors_transferDisabled = "Transferring your test is no longer available. Contact your test centre for more information.";
var APPB2C_common_transfer_selfService_review_errors_noLrwSlots = "Test capacity has been exhausted for the selected date. Try selecting a different day.";
var APPB2C_common_transfer_selfService_review_errors_noDistricts = "There are no test dates available in this location anymore. Please contact the test centre to see if we can help you.";
var APPB2C_common_transfer_goBack = "Back";
var APPB2C_common_transfer_notes_1 = "Transfer requests are subject to approval by the test centre.";
var APPB2C_common_transfer_notes_2 = "IELTS tests can only be transferred once.";
var APPB2C_common_transfer_notes_3 = "You will be required to choose an alternative test day within 3 months.";
var APPB2C_common_transfer_notes_4 = "Administrative charges may apply. If the request is approved, we will send the payment instructions to you.";
var APPB2C_common_transfer_notesIol_1 = "Transfer requests are subject to approval by the British Council.";
var APPB2C_common_transfer_notesIol_2 = "Before submitting your request, please carefully read the <0>IELTS Postponement, Cancellation & Refund policy</0>";
var APPB2C_common_transfer_form_freeform = "Please tell us about your preferences for a new test";
var APPB2C_common_transfer_form_reasons_1 = "The type of test I booked";
var APPB2C_common_transfer_form_reasons_2 = "The location of my booking";
var APPB2C_common_transfer_form_reasons_3 = "The test date";
var APPB2C_common_transfer_form_reasons_4 = "Just the speaking part";
var APPB2C_common_transfer_form_reasons_title = "What do you need to change?";
var APPB2C_common_transfer_form_reasons_choose = "Please choose an option";
var APPB2C_common_transfer_form_reasons_other = "Other";
var APPB2C_common_transfer_contactNote = "We will contact you directly to process the transfer of your test. We will aim to respond to all requests within 48-72 hours";
var APPB2C_common_transfer_contactNoteIol = "We will contact you directly by email to process the transfer of your test. We will aim to respond to all requests within 48-72 hours";
var APPB2C_common_transfer_requestValidation = "This field is required.";
var APPB2C_common_transfer_agreement = "For full details about our transferral policy, please see our <1>terms and conditions</1>";
var APPB2C_common_transfer_cta = "Submit transfer request";
var APPB2C_common_cancelBooking_title = "Cancel your booking";
var APPB2C_common_cancelBooking_subtitle = "Need to cancel your test?";
var APPB2C_common_cancelBooking_transferNote_title = "Did you know you can transfer your booking instead to a different date or location?";
var APPB2C_common_cancelBooking_transferNote_titleIol = "Did you know you can transfer your booking instead to a different date?";
var APPB2C_common_cancelBooking_transferNote_cta = "Request transfer";
var APPB2C_common_cancelBooking_cancelNotes_1 = "Cancellation requests are subject to approval by the British Council.";
var APPB2C_common_cancelBooking_cancelNotes_2 = "Your refund may have an administration fee deducted from it.";
var APPB2C_common_cancelBooking_cancelNotes_3 = "Before submitting your request, please carefully read the <0>IELTS Postponement, Cancellation & Refund policy</0>";
var APPB2C_common_cancelBooking_back = "I don\u2019t want to cancel my booking";
var APPB2C_common_cancelBooking_alreadyRequested_title = "You have already requested this service.";
var APPB2C_common_cancelBooking_alreadyRequested_cta = "Back to my test booking";
var APPB2C_common_cancelBooking_checkTest = "Please check that this is the test you wish to cancel:";
var APPB2C_common_cancelBooking_reason_note_title = "Please note:";
var APPB2C_common_cancelBooking_reason_note_content = "Because your test date is less than 5 weeks away, please provide a reason for cancelling and attach relevant documentation / evidence.";
var APPB2C_common_cancelBooking_reason_form_title = "Why do you need to cancel this test?";
var APPB2C_common_cancelBooking_reason_form_choose = "Please choose an option";
var APPB2C_common_cancelBooking_reason_form_requiredReason = "Please choose a reason why you are cancelling booking.";
var APPB2C_common_cancelBooking_reason_form_freeform = "Please add more details below:";
var APPB2C_common_cancelBooking_reason_form_optional = "(optional)";
var APPB2C_common_cancelBooking_reason_form_requiredEvidence = "Evidence is required.";
var APPB2C_common_cancelBooking_upload_title = "Upload evidence";
var APPB2C_common_cancelBooking_upload_notes_1 = "You must upload a copy of the medical certificate issued by a Professional Medical Practitioner. The medical certificate must include nature of illness and other relevant information which will assist in any assessment of this application for special consideration.";
var APPB2C_common_cancelBooking_upload_notes_2 = "You must upload a copy of documentation that proves that you were unable to attend the test due to military service.";
var APPB2C_common_cancelBooking_upload_notes_3 = "You must upload a copy of documentation that proves that you were unable to attend the test due to a bereavement in your family.";
var APPB2C_common_cancelBooking_upload_notes_4 = "You must upload a copy of documentation that proves that you were unable to attend the test due to a duplicate booking.";
var APPB2C_common_cancelBooking_upload_notes_5 = "You must upload a copy of documentation that proves that you were unable to attend the test due to official commitment or travel for official purposes.";
var APPB2C_common_cancelBooking_upload_notes_6 = "You must upload a copy of documentation that proves that you were unable to attend the test due events that were outside of your control.";
var APPB2C_common_cancelBooking_upload_notes_7 = "You must upload a copy of documentation that proves that you were unable to take your test due to a technical issue on the test day.";
var APPB2C_common_cancelBooking_upload_notes_8 = "You must upload a copy of documentation that proves that you were unable to take your test due to British Council cancelling your test.";
var APPB2C_common_cancelBooking_upload_notes_10 = "You must upload a copy of documentation that proves that you were unable to take your test due to a specific reason you feel is valid.";
var APPB2C_common_cancelBooking_upload_mobile = "As it looks like you\u2019re on a mobile device, we suggest you upload a photo from your device.";
var APPB2C_common_cancelBooking_upload_requirements_title = "Please note:";
var APPB2C_common_cancelBooking_upload_requirements_note = "Your uploaded evidence should be easy to read. You can add a maximum of 4 files.";
var APPB2C_common_cancelBooking_bottomNotes_note1 = "Once we receive your request to cancel, we will contact you directly if any additional information is needed.";
var APPB2C_common_cancelBooking_bottomNotes_note2 = "Refunds are subject to approval and you will receive a confirmation of acceptance / rejection of your request within 1 week. Your refund may have an administration fee deducted from it; please read the <0>IELTS cancellation and refund policy</0>";
var APPB2C_common_cancelBooking_bottomNotes_note3 = "If approved, your refund request will be processed within 3 weeks of submission.";
var APPB2C_common_cancelBooking_bottomNotes_terms = "Please read the <0>IELTS Postponement, Cancellation & Refund policy</0> carefully before submitting your request.";
var APPB2C_common_cancelBooking_bankDetails_title = "Bank account details";
var APPB2C_common_cancelBooking_bankDetails_note = "Please provide the bank account details you wish the refund to be paid into if your cancellation request is successful.";
var APPB2C_common_cancelBooking_bankDetails_form_holderName = "Account holder\u2019s name";
var APPB2C_common_cancelBooking_bankDetails_form_holderEmail = "Email address of the account holder";
var APPB2C_common_cancelBooking_bankDetails_form_bankName = "Bank name";
var APPB2C_common_cancelBooking_bankDetails_form_bankNumber = "Bank account number";
var APPB2C_common_cancelBooking_bankDetails_form_sortCode = "Sort code";
var APPB2C_common_cancelBooking_bankDetails_form_bankAddress = "Bank branch address";
var APPB2C_common_cancelBooking_bankDetails_form_accountHolder = "Bank account holder address";
var APPB2C_common_cancelBooking_bankDetails_form_city = "Town / City";
var APPB2C_common_cancelBooking_bankDetails_form_postcode = "Postcode / ZIP";
var APPB2C_common_cancelBooking_bankDetails_form_country = "Country / territory";
var APPB2C_common_cancelBooking_bankDetails_form_changeCountry = "change country / territory";
var APPB2C_common_cancelBooking_bankDetails_form_swift = "Swift code";
var APPB2C_common_cancelBooking_bankDetails_form_invalidSwift = "Incorrect SWIFT code.";
var APPB2C_common_cancelBooking_bankDetails_form_iban = "IBAN code";
var APPB2C_common_cancelBooking_bankDetails_form_invalidIban = "Incorrect IBAN code.";
var APPB2C_common_cancelBooking_bankDetails_terms_title = "Our terms and conditions";
var APPB2C_common_cancelBooking_bankDetails_terms_consent = "I hereby consent to providing a refund by an alternative method to the original payment method and processing my refund to the bank account details provided above. I understand that the British Council is not responsible for transfers to the wrong bank account in case of inaccurate account details provided by me.";
var APPB2C_common_cancelBooking_bankDetails_privacy = "The British Council will use the information that you are providing in connection with processing your request. For detailed information, please refer to the <0>privacy section of our website.</0>";
var APPB2C_common_cancelBooking_cta_submit = "Submit cancellation request";
var APPB2C_common_cancelBooking_cta_addBankDetails = "Add your bank details";
var APPB2C_common_cancelBooking_cta_goBack = "Go back to edit cancellation reason";
var APPB2C_common_cancelBooking_error_missingFile = "Please upload an evidence supporting your reason for cancellation.";
var APPB2C_common_cancelBooking_error_requestedAlready = "A request to cancel has been made for this booking already.";
var APPB2C_common_cancelBooking_error_cancelledAlready = "This booking has been cancelled already.";
var APPB2C_common_changeBookingAck_cancel_title = "Cancellation request acknowledgement";
var APPB2C_common_changeBookingAck_cancel_respondTime = "Please allow up to 3 weeks for your refund amount to be returned to your card or credited to your bank account.";
var APPB2C_common_changeBookingAck_cancel_banner = "We have received your request to cancel your test.";
var APPB2C_common_changeBookingAck_cancel_refunds = "Refunds are subject to approval and you will receive a confirmation of acceptance / rejection of your request within 1 week.";
var APPB2C_common_changeBookingAck_cancel_contact_title = "If you have any further queries, please contact:";
var APPB2C_common_changeBookingAck_cancel_contact_titleIol = "If you have any further queries, please <0>view our help page</0>.";
var APPB2C_common_changeBookingAck_cancel_contact_phone = "Phone";
var APPB2C_common_changeBookingAck_cancel_contact_email = "Email";
var APPB2C_common_changeBookingAck_cancel_refNr = "So we can help you quicker, please quote your IELTS reference number:";
var APPB2C_common_changeBookingAck_cancel_terms = "For full details about our transferral policy, please see our <0>IELTS Postponement, Cancellation & Refund policy</0>";
var APPB2C_common_changeBookingAck_transfer_title = "Transfer request acknowledgement";
var APPB2C_common_changeBookingAck_transfer_banner = "Your request to speak to somebody at the test centre about transferring your test has been submitted.";
var APPB2C_common_changeBookingAck_transfer_respondTime = "We will aim to respond to all requests within 48-72 hours.";
var APPB2C_common_changeBookingAck_transfer_note = "We will contact you directly to arrange a new test date. Once you have confirmed you are happy with the new date, we will send you confirmation of your updated test booking.";
var APPB2C_common_changeBookingAck_transferIol_banner = "We have received your request to transfer your test.";
var APPB2C_common_changeBookingAck_transferIol_note = "We will contact you directly to arrange a new test date. Once you have confirmed you are happy with the new date, we will send you confirmation of your updated test booking.";
var APPB2C_common_changeBookingAck_transferIol_contact = "If you have any further queries, please <0>view our help page</0>.";
var APPB2C_common_changeBookingAck_transferIol_refNr = "So we can help you quicker, please quote your IELTS reference number:";
var APPB2C_common_changeBookingAck_transferIol_terms = "For full details about our transferral policy, please see our <0>IELTS Postponement, Cancellation & Refund policy</0>";
var APPB2C_common_changeBookingAck_speaking_title = "Speaking test transferred";
var APPB2C_common_changeBookingAck_speaking_banner = "Your speaking test has been transferred successfully.";
var APPB2C_common_changeBookingAck_speaking_note_title = "Please note:";
var APPB2C_common_changeBookingAck_speaking_note_line1 = "Changing your speaking test hasn\u2019t affected your written test.";
var APPB2C_common_changeBookingAck_speaking_note_line2 = "There was no charge for changing your speaking test.";
var APPB2C_common_changeBookingAck_fees = "Fees may apply. We will confirm when we contact you directly.";
var APPB2C_common_changeBookingAck_feesIol = "Administrative charges may apply. If the request is approved, we will send the payment instructions to you.";
var APPB2C_common_changeBookingAck_terms = "For full details about our transferral policy, please see our <0>terms and conditions</0>";
var APPB2C_common_changeBookingAck_back = "Back to my test booking";
var APPB2C_common_changeSpeaking_title = "Change your speaking test";
var APPB2C_common_changeSpeaking_note_title = "Please note:";
var APPB2C_common_changeSpeaking_note_line1 = "Changing your speaking test won\u2019t affect your written test.";
var APPB2C_common_changeSpeaking_note_line2 = "There is no charge for changing your speaking test.";
var APPB2C_common_changeSpeaking_note_back = "I don\u2019t want to change my booking";
var APPB2C_common_changeSpeaking_cards_title = "Your new Speaking test";
var APPB2C_common_changeSpeaking_cards_change = "Change Test";
var APPB2C_common_changeSpeaking_cards_noSlots = "There are no free slots available";
var APPB2C_common_changeSpeaking_cards_noSlots_error = "Speaking capacity has been exhausted for the selected time. Try selecting a different slot.";
var APPB2C_common_changeSpeaking_modals_testNotAvailable_title = "This speaking test isn\u2019t available!";
var APPB2C_common_changeSpeaking_modals_testNotAvailable_line1 = "We just checked and the speaking test you just selected isn\u2019t available, sorry!";
var APPB2C_common_changeSpeaking_modals_testNotAvailable_line2 = "Please choose another speaking test instead.";
var APPB2C_common_changeSpeaking_modals_testNotAvailable_cta = "Choose new speaking test";
var APPB2C_common_changeSpeaking_modals_noSlots_title = "Sorry \u2013 no speaking tests are available!";
var APPB2C_common_changeSpeaking_modals_noSlots_line1 = "We just checked and no other speaking tests are available, sorry!";
var APPB2C_common_changeSpeaking_modals_noSlots_line2 = "If you really need to change your speaking test, request a transfer of your test date, and then you\u2019ll be able to choose a new speaking test.";
var APPB2C_common_changeSpeaking_modals_noSlots_keepTest = "Keep speaking test";
var APPB2C_common_changeSpeaking_modals_noSlots_transferTest = "Request transfer instead";
var APPB2C_common_changeSpeaking_modals_transferNotAvailable_title = "Sorry \u2013 no speaking tests are available!";
var APPB2C_common_changeSpeaking_modals_transferNotAvailable_line1 = "We just checked and no other speaking tests are available, sorry!";
var APPB2C_common_changeSpeaking_modals_transferNotAvailable_cta = "Keep speaking test";
var APPB2C_common_changeSpeaking_cta = "Transfer speaking test";
var APPB2C_common_footer_terms_termsOfUse = "Terms of use";
var APPB2C_common_footer_terms_accessibility = "Accessibility";
var APPB2C_common_footer_terms_privacyAndCookies = "Privacy and cookies";
var APPB2C_common_footer_terms_dataProtection = "Data Protection";
var APPB2C_common_footer_terms_copyrightLine1 = "The United Kingdom's international organisation for cultural relations and educational opportunities.";
var APPB2C_common_footer_terms_copyrightLine2 = "A registered charity: 209131 (England and Wales) SC037733 (Scotland).";
var APPB2C_common_recreateReg_progress = "Recreating your booking";
var APPB2C_common_recreateReg_errTitle = "Recreate failed";
var APPB2C_common_recreateReg_errMsg = "We couldn\u2019t recreate this registration, but please don\u2019t worry. We will redirect you to the standard registration instead.";
var APPB2C_common_chooseTest_title = "Choose your test";
var APPB2C_common_chooseTest_difference = "What\u2019s the difference between IELTS in a test centre and IELTS Online";
var APPB2C_common_chooseTest_iol_title = "IELTS Online";
var APPB2C_common_chooseTest_iol_desc = "Take this test anytime, anywhere in a new secure way.  It combines the benefits of online testing with video monitoring to ensure a secure experience and reliable results.";
var APPB2C_common_chooseTest_iol_consent = "I confirm I am happy for IELTS Online to use facial recognition and other proctoring technologies to securely monitor me during the test.";
var APPB2C_common_chooseTest_iol_link = "Find out more about IELTS Online software";
var APPB2C_common_chooseTest_iol_cta = "Book IELTS Online";
var APPB2C_common_chooseTest_iol_note_title = "Please note:";
var APPB2C_common_chooseTest_iol_note_content = "You currently have to be over 18 to take an IELTS Online test. If you are booking a test for somebody under 18, please book IELTS in a test centre instead.";
var APPB2C_common_chooseTest_ukvi_difference = "What\u2019s the difference between IELTS for UKVI in a test centre and IELTS for UKVI Online";
var APPB2C_common_chooseTest_ukvi_online_title = "IELTS for UKVI Online";
var APPB2C_common_chooseTest_ukvi_online_cta = "Book IELTS for UKVI Online";
var APPB2C_common_chooseTest_ukvi_online_link = "Find out more about IELTS for UKVI Online software";
var APPB2C_common_chooseTest_ukvi_online_consent = "I confirm I am happy for IELTS for UKVI Online to use facial recognition and other proctoring technologies to securely monitor me during the test.";
var APPB2C_common_chooseTest_ukvi_online_consentBiometric_title = "I confirm I have a valid biometric passport with a RFID chip.";
var APPB2C_common_chooseTest_ukvi_online_consentBiometric_symbol = "(Look for this symbol on your passport!)";
var APPB2C_common_chooseTest_ukvi_online_note_title = "Please note:";
var APPB2C_common_chooseTest_ukvi_online_note_content = "You currently have to be over 18 to take an IELTS for UKVI Online test. If you are booking a test for somebody under 18, please book IELTS for UKVI in a test centre instead.";
var APPB2C_common_chooseTest_ukvi_inCentre_title = "IELTS for UKVI in a test centre";
var APPB2C_common_chooseTest_ukvi_inCentre_descAc = "Take your IELTS for UKVI Academic test at one of our official test centres. You will have the option to take your IELTS test on paper or on a computer.";
var APPB2C_common_chooseTest_ukvi_inCentre_descGt = "Take your IELTS for UKVI General Training test at one of our official test centres. You will have the option to take your IELTS test on paper or on a computer.";
var APPB2C_common_chooseTest_ukvi_inCentre_cta = "Book IELTS for UKVI in a test centre";
var APPB2C_common_chooseTest_ors_title = "IELTS in a test centre";
var APPB2C_common_chooseTest_ors_descAc = "Take your IELTS Academic test at one of our official test centres. You will have the option to take your IELTS test on paper or on a computer.";
var APPB2C_common_chooseTest_ors_descGt = "Take your IELTS General Training test at one of our official test centres. You will have the option to take your IELTS test on paper or on a computer.";
var APPB2C_common_chooseTest_ors_cta = "Book IELTS in a test centre";
var APPB2C_common_findTest_title = "Find a test";
var APPB2C_common_findTest_subtitle = "Where would you like to take your test?";
var APPB2C_common_findTest_cta = "Search for tests";
var APPB2C_common_findTest_searchIn = "Search in:";
var APPB2C_common_findTest_changeCountry = "Change country / territory";
var APPB2C_common_findTest_changeCity = "Change city";
var APPB2C_common_findTest_langModal_title = "You\u2019ve changed the location of your test";
var APPB2C_common_findTest_langModal_continue = "You can now continue with your booking in one of the following languages:";
var APPB2C_common_findTest_langModal_choose = "You were previously browsing this site in {{languageName}}. This language isn\u2019t supported for booking tests in {{countryName}}. Please choose one of the following options instead:";
var APPB2C_common_findTest_langModal_chooseSingle = "You were previously browsing this site in {{languageName}}. This language isn\u2019t supported for booking tests in {{countryName}}. Please choose the language below instead:";
var APPB2C_common_findTest_multipleLocations = "Multiple Locations";
var APPB2C_common_findTest_selectCountry_label = "Choose a country / territory";
var APPB2C_common_findTest_selectCountry_placeholder = "Search by country / territory name";
var APPB2C_common_findTest_selectCountry_continue = "Continue booking";
var APPB2C_common_findTest_selectCountry_countryNotSupported = "To book a test in this country / territory you need to use a different site.";
var APPB2C_common_findTest_selectLocation_label = "Search city";
var APPB2C_common_findTest_selectLocation_noExamForThisCountry = "We can\u2019t find any tests in this country / territory. Please <1>contact us</1> to see if we can help you.";
var APPB2C_common_findTest_selectLocation_noExamForThisOrganisation = "We can\u2019t find any tests for this organisation. Choose one of the options:";
var APPB2C_common_findTest_selectLocation_noExamForThisOrganisation_option1 = "select a location where you want to book a test";
var APPB2C_common_findTest_selectLocation_noExamForThisOrganisation_cta = "Search for available tests";
var APPB2C_common_findTest_selectLocation_noExamForThisOrganisation_option2 = "<1>contact us</1> and we will try to help you";
var APPB2C_common_findTest_selectLocation_closestToMe = "Closest to me";
var APPB2C_common_findTest_selectLocation_geolocationBlocked = "We can\u2019t get your location, please make sure location permission isn\u2019t blocked for this site.";
var APPB2C_common_findTest_dates_title = "When would you like to take your test?";
var APPB2C_common_findTest_dates_showAll = "Show me all dates";
var APPB2C_common_findTest_dates_showDateRange = "Let me choose the dates";
var APPB2C_common_findTest_dates_pleaseSelect = "Please use the calendar below";
var APPB2C_common_findTest_dates_selected = "Selected";
var APPB2C_common_findTest_dates_from = "From";
var APPB2C_common_findTest_dates_to = "To";
var APPB2C_common_findTest_dates_clear = "Clear";
var APPB2C_common_findTest_dates_noDatesSelected = "Sorry \u2013 there are no tests available on the dates you have selected. Please widen your date range";
var APPB2C_common_findTest_dates_noresults_title = "No test dates found";
var APPB2C_common_findTest_dates_noresults_details = "We\u2019re sorry; There are no available test dates. Please choose another location or change filters";
var APPB2C_common_findTest_dates_noresultsSpecialReqs_title = "We Would Like to Ensure Your Needs Are Met on Test Day";
var APPB2C_common_findTest_dates_noresultsSpecialReqs_details = "Because you have told us you need special arrangements on the test date, we aren\u2019t able to find any test dates in the location you\u2019ve selected. Please contact us directly using the details below to find out how we can help you.";
var APPB2C_common_findTest_dates_noresultsSpecialReqs_details_line1 = "We understand that you require special arrangements for your test day. There seems to be no available test dates at the location you have selected.";
var APPB2C_common_findTest_dates_noresultsSpecialReqs_details_line2 = "To provide the best possible conditions and ensure a fair and transparent testing experience, please contact us directly using the details below.";
var APPB2C_common_findTest_dates_noresultsSpecialReqs_details_line3 = "We are committed to finding a suitable test date and location that meets your needs.";
var APPB2C_common_findTest_dates_noresultsMobileLocation_title = "No test dates found";
var APPB2C_common_findTest_dates_noresultsMobileLocation_details = "There are currently no test dates available for this location but you can register your interest in sitting for an IELTS for UK Visas test.";
var APPB2C_common_findTest_dates_noresultsMobileLocation_cta = "Register your interest";
var APPB2C_common_findTest_specialReqs_findOutMore = "Read about how we can help you";
var APPB2C_common_findTest_specialReqs_needCheckbox = "I have <1>accessibility</1> needs for the test date";
var APPB2C_common_findTest_specialReqs_list_title = "Which special arrangements do you need on the test day?";
var APPB2C_common_findTest_specialReqs_list_subtitle = "This will affect the test dates that are available. Please choose one or more options below.";
var APPB2C_common_findTest_specialReqs_other = "What special arrangements do you need";
var APPB2C_common_findTest_specialReqs_pleaseNoteMessage = "In case you need to register for a test date prior to the earliest test date available, please contact the test centre for options available. It may not be possible for the test centre to provide an earlier test date in case you need special test materials, for eg. Enlarged print test papers, Braille, lip-reading version etc.";
var APPB2C_common_findTest_examFormat_title = "Which format IELTS test would you like to take?";
var APPB2C_common_findTest_examFormat_results = "(results in {{days}} days)";
var APPB2C_common_findTest_examFormat_pb = "IELTS on paper";
var APPB2C_common_findTest_examFormat_cd = "IELTS on computer";
var APPB2C_common_findTest_examFormat_all = "I don\u2019t mind";
var APPB2C_common_findTest_residencyConfirmation_title = "Important!";
var APPB2C_common_findTest_residencyConfirmation_msg_line1_v2 = "If you are interested in taking an <0>IELTS on Paper</0> test we must confirm that you are a resident of the country/territory in which you are taking the test.";
var APPB2C_common_findTest_residencyConfirmation_msg_line2_v2 = "If you are not a resident of your chosen country/territory, <0>choose a computer test or choose a paper test located in your country/territory of residence</0>.";
var APPB2C_common_findTest_residencyConfirmation_msg_checkPolicyExceptions = "Check exceptions to this policy <0>here</0> before proceeding.";
var APPB2C_common_findTest_residencyConfirmation_msg_noComputerTestsInCountryLine2_v2 = "If you are not a resident of your chosen country/territory, <0>choose a test located in your country/territory of residence</0>.";
var APPB2C_common_findTest_residencyConfirmation_msg_noComputerTestsInLocationLine2_v2 = "If you are not a resident of your chosen country/territory, <0>choose a computer test</0> (available in other cities) <0>or choose a paper test located in your country/territory of residence</0>.";
var APPB2C_common_findTest_residencyConfirmation_msg_line3 = "If you choose incorrectly, your test will be cancelled.";
var APPB2C_common_findTest_residencyConfirmation_selectDates = "Please select a date first";
var APPB2C_common_findTest_residencyConfirmation_btn = "Got it, continue searching";
var APPB2C_common_findTest_residencyConfirmation_errorMsg_title = "You can not book this test";
var APPB2C_common_findTest_residencyConfirmation_errorMsg_line1_v2 = "If you are not a resident of the country/territory you selected, you cannot book a paper test. Please <0>choose a computer test or choose a paper test located in your country/territory of residence.</0>";
var APPB2C_common_findTest_residencyConfirmation_errorMsg_line2 = "On the \u2018Book a test\u2019 page, you can use filters to change the test type. You can also return to the country selection page.";
var APPB2C_common_findTest_residencyConfirmation_errorMsg_btn = "Change test type";
var APPB2C_common_findTest_osrInfo = "<bold>One Skill Retake</bold> is not available with IELTS on Paper, consider booking IELTS on Computer to have this option.";
var APPB2C_common_findTest_osrInfoLink = "Read more about One Skill Retake";
var APPB2C_common_findTest_iol_noLrwResults = "We\u2019re sorry; There are no available test dates for your country.";
var APPB2C_common_findTest_iol_softwareCheck_title = "Can your computer run the software needed to take the test?";
var APPB2C_common_findTest_iol_softwareCheck_desc1 = "Your IELTS Online test uses Inspera software which you will need to download on either a Windows PC or MacOS (you can\u2019t take the test on a mobile or tablet!).";
var APPB2C_common_findTest_iol_softwareCheck_desc2 = "Before you book a test with us, you must check your computer meets the recommended system requirements.";
var APPB2C_common_findTest_iol_softwareCheck_link = "Check the device requirements for the test";
var APPB2C_common_findTest_iol_softwareCheck_check = "I confirm I have checked the device and environment requirements to take the test";
var APPB2C_common_findTest_iol_organisationCheck_title = "Does your intended organisation or institute accept IELTS online?";
var APPB2C_common_findTest_iol_organisationCheck_desc = "Before you book a test with us, you must check with your organisation that they accept IELTS Online.";
var APPB2C_common_findTest_iol_organisationCheck_check = "I confirm I have checked my intended organisation(s) accept IELTS Online.";
var APPB2C_common_findTest_uol_softwareCheck_title = "Can your computer run the software needed to take the test?";
var APPB2C_common_findTest_uol_softwareCheck_desc1 = "Your IELTS for UKVI Online test uses Inspera software which you will need to download on either a Windows PC or MacOS (you can\u2019t take the test on a mobile or tablet!).";
var APPB2C_common_findTest_uol_softwareCheck_desc2 = "Before you book a test with us, you must check your computer meets the recommended system requirements.";
var APPB2C_common_findTest_uol_softwareCheck_link = "Check the device requirements for the test";
var APPB2C_common_findTest_uol_softwareCheck_check = "I confirm I have checked the device and environment requirements to take the test";
var APPB2C_common_findTest_uol_organisationCheck_title = "IELTS for UKVI Online is only accepted by UK Visa and Immigration";
var APPB2C_common_findTest_uol_organisationCheck_desc = "To take an IELTS test recognised by other organisations please <0>look at our other IELTS tests.</0>";
var APPB2C_common_findTest_uol_organisationCheck_check = "I confirm I understand IELTS for UKVI Online is only accepted by UK Visa and Immigration.";
var APPB2C_common_bookTest_title = "Book a test";
var APPB2C_common_bookTest_noDiscount_title = "Please note";
var APPB2C_common_bookTest_noDiscount_msg_used = "This voucher has already been used. You can proceed with your booking but you will have to pay the full price for the test.";
var APPB2C_common_bookTest_noDiscount_msg_reserved = "This voucher is already being used. Please finish the registration where you used it, or try again later.";
var APPB2C_common_bookTest_noDiscount_msg_countryNotMatched = "This voucher cannot be used in your selected country. Please go back to the original country selection.";
var APPB2C_common_bookTest_noDiscount_msg_notSupported = "This voucher is dedicated to another product. Please go back to the original product selection.";
var APPB2C_common_bookTest_noDiscount_msg_notFound = "The voucher is not valid.";
var APPB2C_common_bookTest_changeExamType = "Change test type";
var APPB2C_common_bookTest_loadMoreTests = "Load more tests";
var APPB2C_common_bookTest_sortBy_distance = "Distance";
var APPB2C_common_bookTest_sortBy_date = "Date";
var APPB2C_common_bookTest_sortBy_price = "Price";
var APPB2C_common_bookTest_sortBy_title = "Sort by";
var APPB2C_common_bookTest_filters_title = "Filter by";
var APPB2C_common_bookTest_filters_computer = "Computer";
var APPB2C_common_bookTest_filters_paper = "Paper";
var APPB2C_common_bookTest_filters_allDates = "All Dates";
var APPB2C_common_bookTest_filters_seeAllFilters = "See all filters";
var APPB2C_common_bookTest_filters_anyTime = "Any time of day";
var APPB2C_common_bookTest_filters_morning = "Morning";
var APPB2C_common_bookTest_filters_afternoon = "Afternoon";
var APPB2C_common_bookTest_filters_evening = "Evening";
var APPB2C_common_bookTest_filters_modal_title = "Filters";
var APPB2C_common_bookTest_filters_modal_subtitle = "Filter tests";
var APPB2C_common_bookTest_filters_modal_whichFormatTest = "Which format IELTS test would you like to take";
var APPB2C_common_bookTest_filters_modal_resultsIn = "Results in {{days}} days";
var APPB2C_common_bookTest_filters_modal_iDontMind = "I don\u2019t mind";
var APPB2C_common_bookTest_filters_modal_whichTimeOfDay = "Time of day for Listening, Reading and Writing test";
var APPB2C_common_bookTest_filters_modal_hide = "Hide";
var APPB2C_common_bookTest_filters_modal_cta = "Search results";
var APPB2C_common_bookTest_results_searchText = "We are searching for your exams...";
var APPB2C_common_bookTest_results_noResultsTitle = "Sorry";
var APPB2C_common_bookTest_results_noResultsText = "We could not find any tests that meet your needs";
var APPB2C_common_bookTest_results_noResultsGoBack = "We could not find any tests, please <1>go back</1> and try changing your location or dates";
var APPB2C_common_bookTest_results_clearFilters = "Clear filters and show all tests";
var APPB2C_common_bookTest_results_lrw = "Listening, Reading & Writing";
var APPB2C_common_bookTest_results_book = "Book Test";
var APPB2C_common_bookTest_results_bookFor = "Book for";
var APPB2C_common_bookTest_results_review = "and review";
var APPB2C_common_bookTest_results_cd = "IELTS on computer";
var APPB2C_common_bookTest_results_pb = "IELTS on paper";
var APPB2C_common_bookTest_results_changeSpeaking = "Change speaking schedule";
var APPB2C_common_bookTest_results_speaking = "Speaking test";
var APPB2C_common_bookTest_results_fromCurrentLocation = "km from current location";
var APPB2C_common_bookTest_results_viewOnMap = "View on map";
var APPB2C_common_regInProgressModal_title = "Attention!";
var APPB2C_common_regInProgressModal_message1 = "You have the registration for <bold>{{date}}</bold> in progress already. Do you really want to start over with the selected test?";
var APPB2C_common_regInProgressModal_message2 = "Your current slots will be released in this case.";
var APPB2C_common_regInProgressModal_restart = "Start over";
var APPB2C_common_regInProgressModal_continue = "Never mind";
var APPB2C_common_testDetails_mapModal_title = "Location Details";
var APPB2C_common_testDetails_mapModal_close = "Close Window";
var APPB2C_common_testDetails_title = "Test details";
var APPB2C_common_testDetails_changeWrittenTest = "Change written test";
var APPB2C_common_testDetails_yourWrittenTest = "Your Written test";
var APPB2C_common_testDetails_changeTest = "Change test";
var APPB2C_common_testDetails_yourSpeakingTest = "Your Speaking test";
var APPB2C_common_testDetails_completeYourBooking = "Complete your booking";
var APPB2C_common_testDetails_modifyNote_pleaseNote = "Please note";
var APPB2C_common_testDetails_modifyNote_note = "Although every attempt is made to ensure that we honour your test venue, date and time slot selection, we reserve the right to modify, discontinue and replace your selected preference based on availability and in accordance with the terms and conditions.";
var APPB2C_common_testDetails_modifyNote_confirm = "I understand and agree to these Terms and Conditions.";
var APPB2C_common_invitation_modal_header = "Invalid link";
var APPB2C_common_invitation_modal_invalid = "The URL you tried to use is either incorrect or no longer valid. You can continue registration without Agent context.";
var APPB2C_common_fileUpload_cta = "Choose a file";
var APPB2C_common_fileUpload_requirements = "Please only upload:";
var APPB2C_common_fileUpload_fileSize = "Files no larger than {{size}} MB";
var APPB2C_common_fileUpload_remove = "remove this file";
var APPB2C_common_fileUpload_fileApproved = "This file has been approved and cannot be deleted";
var APPB2C_common_fileUpload_fileRequired = "Image 1";
var APPB2C_common_fileUpload_fileOptional = "Image {{number}} (optional)";
var APPB2C_common_fileUpload_filesCount = "Page {{current}} of {{total}}";
var APPB2C_common_fileUpload_pdfIeMsg = "Your PDF file is successfully uploaded, however preview is not available in the Internet Explorer browser. Did you know that IE is not actively supported since 2015?";
var APPB2C_common_fileUpload_success = "File <bold><italic>{{fileName}}</italic></bold> added successfully!";
var APPB2C_common_fileUpload_pdfPasswordMsg = "Uploading secured file is disallowed.";
var APPB2C_common_fileUpload_exceededSize = "This file exceeds maximum allowed size of";
var APPB2C_common_fileUpload_imgAlt = "File Preview";
var APPB2C_common_selfServices_requested_transfer = "Transfer requested";
var APPB2C_common_selfServices_requested_cancellation = "Cancellation requested";
var APPB2C_common_filePreview_label = "Image";
var APPB2C_common_filePreview_status = "Review status";
var APPB2C_common_filePreview_pdfPreviewLink = "Preview this file";
var APPB2C_common_filePreview_statusName_pending = "Pending";
var APPB2C_common_filePreview_statusName_approved = "Approved";
var APPB2C_common_filePreview_statusName_rejected = "Rejected";
var APPB2C_common_filePreview_statusName_reviewed = "Reviewed";
var APPB2C_common_filePreview_statusName_deleted = "Deleted";
var APPB2C_common_unpaidErrorBar_paymentExpired = "Registration payment date has expired";
var APPB2C_common_alertBar_beforeTest = "Before the test day, you need to:";
var APPB2C_common_alertBar_withCreds = "You can now log in to your test:";
var APPB2C_common_alertBar_afterTest = "You still need to:";
var APPB2C_common_alertBar_regPayment = "Pay for your test";
var APPB2C_common_alertBar_regPaymentProof = "Upload proof of payment for your test";
var APPB2C_common_alertBar_eorPayment = "Pay for your EOR";
var APPB2C_common_alertBar_eorPaymentProof = "Upload proof of payment for your EOR";
var APPB2C_common_alertBar_idUpload = "Upload identification documents";
var APPB2C_common_alertBar_idReupload = "Upload identification documents again";
var APPB2C_common_alertBar_medicalUpload = "Upload medical evidence";
var APPB2C_common_alertBar_medicalReupload = "Upload medical evidence again";
var APPB2C_common_alertBar_cancelReupload = "Upload cancellation documents again";
var APPB2C_common_alertBar_childConsentMissing = "Provide child consent information";
var APPB2C_common_alertBar_check = "Take your pre-test check";
var APPB2C_common_alertBar_creds = "View my log-in details";
var APPB2C_common_updateBar_close = "Close";
var APPB2C_common_updateBar_cancelPending = "Your request to cancel this test is pending. <1>See details</1>.";
var APPB2C_common_updateBar_cancelRejected = "Your cancellation request has been rejected.";
var APPB2C_common_updateBar_cancelled = "This test has been cancelled.";
var APPB2C_common_updateBar_transferCancelled = "Your transfer request could not be processed. Try again or contact your test centre for more information.";
var APPB2C_common_updateBar_transferPending = "Your request to transfer this test is pending. <1>See details</1>.";
var APPB2C_common_updateBar_transferPendingCmds = "Your transfer is awaiting confirmation. You will be notified when your transfer request has been processed.";
var APPB2C_common_updateBar_transferred = "This test has been transferred. Your new dates are below.";
var APPB2C_common_updateBar_transferredCmds = "This test has been transferred. See booking details for new dates.";
var APPB2C_common_updateBar_termsUpdated = "You need to <1>accept new terms & conditions</1> that will be in effect for your test day. <br> All test takers attending an IELTS test will be governed by these Terms and Conditions.";
var APPB2C_common_updateBar_hasResults = "Your results are now available.";
var APPB2C_common_updateBar_eorPending = "Your Enquiry on Results (EOR) is pending. <1>See details</1>.";
var APPB2C_common_updateBar_eorPendingAgentPays = "Your Enquiry on Results (EOR) is pending.";
var APPB2C_common_updateBar_eorCompleted = "Your Enquiry on Results (EOR) has been completed.";
var APPB2C_common_updateBar_eorCompleted_scoreDecreased = "Your overall band score has decreased from {{prevOverallScore}} to {{currentOverallScore}}";
var APPB2C_common_updateBar_eorCompleted_scoreUnchanged = "Your overall band score remains unchanged at {{currentOverallScore}}";
var APPB2C_common_updateBar_eorCompleted_scoreIncreased = "Your overall band score has increased from {{prevOverallScore}} to {{currentOverallScore}}";
var APPB2C_common_updateBar_eorRejected = "Your Enquiry on Result (EOR) was rejected.";
var APPB2C_common_updateBar_eorRejected_overallBand = "Your overall band score has not changed from {{overallBand}}";
var APPB2C_common_updateBar_details = "Please see full details below:";
var APPB2C_common_updateBar_eorRefundPending = "Your Enquiry on Results (EOR) fee refund is being processed.";
var APPB2C_common_updateBar_eorRefunded = "Your Enquiry on Results (EOR) fee has been refunded.";
var APPB2C_common_updateBar_transactionRefundRequestPending = "Your refund request is pending.";
var APPB2C_common_updateBar_transactionRefundRequestAccepted = "Your refund request has been accepted.";
var APPB2C_common_updateBar_transactionRefundRequestRejected = "Your refund request has been rejected.";
var APPB2C_common_unknownCountry_title = "We can\u2019t find you!";
var APPB2C_common_unknownCountry_header = "We can\u2019t detect the country that you\u2019re browsing from :(";
var APPB2C_common_unknownCountry_msg1 = "Sometimes this happens because your device is using software that hides your location.";
var APPB2C_common_unknownCountry_msg2 = "If you are using a VPN or similar tools that hide your location, please turn them off and try again.";
var APPB2C_common_unknownCountry_cta = "I\u2019ve turned off my VPN";
var APPB2C_common_underConstruction_title = "Under construction...";
var APPB2C_common_underConstruction_message = "Hi. You\u2019re visiting this page because you\u2019re part of our pilot to test this booking website (thanks for helping!) Don\u2019t worry, before we go live we\u2019ll make sure we show our real customers some proper content here :)";
var APPB2C_common_terms_title = "Terms and conditions";
var APPB2C_common_terms_downloadTitle = "Terms and conditions PDF download";
var APPB2C_common_terms_downloadInfo = "Your Terms and Conditions PDF download will begin shortly.";
var APPB2C_common_terms_error = "Oooops, something went wrong. Please try again in a few moments.";
var APPB2C_common_modals_newTermsAndConditions_trigger = "Accept new terms and conditions";
var APPB2C_common_modals_newTermsAndConditions_title = "New terms & conditions";
var APPB2C_common_modals_newTermsAndConditions_note = "Please accept new terms & conditions before proceeding";
var APPB2C_common_modals_newTermsAndConditions_checkboxNote = "I agree to the {{context}}";
var APPB2C_common_modals_newTermsAndConditions_checkboxTC = "terms and conditions";
var APPB2C_common_modals_newTermsAndConditions_cta = "Proceed";
var APPB2C_common_modals_newTermsAndConditions_error = "Oooops, something went wrong. Please try again in a few moments.";
var APPB2C_common_gelRedirect_header = "Prepare for your test";
var APPB2C_common_gelRedirect_info = "We can help you prepare for IELTS with our range of free resources.";
var APPB2C_common_gelRedirect_errorMessage = "This resource is currently unavailable.";
var APPB2C_registration_tabs_bookingDetails = "Booking details";
var APPB2C_registration_tabs_date = "Date";
var APPB2C_registration_tabs_dateLocation = "Date & location";
var APPB2C_registration_tabs_candidate = "Test Taker";
var APPB2C_registration_tabs_results = "Results";
var APPB2C_registration_tabs_payments = "Payments";
var APPB2C_registration_tabs_recognisingOrgs = "Recognising Organisations";
var APPB2C_registration_tabs_recognisingOrgs_defaultMsg_1 = "Please contact the test centre directly about sending your results to Recognising Organisations:";
var APPB2C_registration_tabs_recognisingOrgs_defaultMsg_2 = "Please quote your registration reference number for us to help you better:";
var APPB2C_registration_date_zone_header = "When you booked your test";
var APPB2C_registration_date_zone_country = "We localised you in";
var APPB2C_registration_date_zone_time = "Your local time";
var APPB2C_registration_date_zone_name = "Your timezone";
var APPB2C_registration_date_check_back = "Back to the test details";
var APPB2C_registration_date_check_beforeTestDate = "Before the test day";
var APPB2C_registration_date_check_intro = "Before your test day, please make sure you do the following things:";
var APPB2C_registration_date_check_step1_title = "Step 1 \u2013 Device check";
var APPB2C_registration_date_check_step1_body = "Check the laptop or desktop computer you intend to take the test on meets the minimum requirement (PC or Mac only \u2013 you cannot take IELTS Online on mobile or tablet).";
var APPB2C_registration_date_check_step1_link = "Check your device meets the requirements";
var APPB2C_registration_date_check_step2_title = "Step 2 \u2013 Install software";
var APPB2C_registration_date_check_step2_body = "Before the test date, you will need to install Inspera software on the PC or Mac you intend to take the test on.";
var APPB2C_registration_date_check_step2_link = "Download Inspera software";
var APPB2C_registration_date_check_onTestDate = "On the test day";
var APPB2C_registration_date_check_step3_body1 = "Once you have Inspera installed on your device, open the software and login. To login you just need your username and password below \u2013 you can simply copy and paste them in.";
var APPB2C_registration_date_check_step3_noDetailsTitle = "Your login details are not available yet";
var APPB2C_registration_date_check_step3_noDetailsBody = "They will be available nearer the test date.";
var APPB2C_registration_date_check_step3_username = "Your username:";
var APPB2C_registration_date_check_step3_password = "Your password:";
var APPB2C_registration_date_check_step3_body2 = "Once you\u2019re logged-in, you\u2019ll be taken through the following steps:";
var APPB2C_registration_date_check_step3_step1_title = "Step 1 \u2013 Device check";
var APPB2C_registration_date_check_step3_step1_body = "You\u2019ll be asked to check if your microphone and camera are working.";
var APPB2C_registration_date_check_step3_step2_title = "Step 2 \u2013 Identification";
var APPB2C_registration_date_check_step3_step2_body = "You\u2019ll be asked to take a photo of your face and your identification document (make sure you have the same identification document you originally registered with).";
var APPB2C_registration_date_check_step3_step3_title = "Step 3 \u2013 Test login";
var APPB2C_registration_date_check_step3_step3_body = "To access your IELTS Online test, you will be asked for a PIN.";
var APPB2C_registration_date_check_step3_speakingPin = "Your Speaking test PIN:";
var APPB2C_registration_date_check_step3_writtenPin = "Your Written test PIN:";
var APPB2C_registration_date_check_step3_noSpeakingPinTitle = "Your speaking test PIN is not available yet";
var APPB2C_registration_date_check_step3_noSpeakingPinBody = "This will be available nearer the test date.";
var APPB2C_registration_bookingDetails_seeTestTaker = "See Test Taker details";
var APPB2C_registration_bookingDetails_payment = "Payment";
var APPB2C_registration_bookingDetails_seePayment = "See Payment details";
var APPB2C_registration_bookingDetails_whatNext = "What can I do next?";
var APPB2C_registration_bookingDetails_results = "Find out about Results";
var APPB2C_registration_dateLocation_changeLinkIol = "I want to change my test";
var APPB2C_registration_dateLocation_changeLrwLink = "I want to change my written test";
var APPB2C_registration_dateLocation_changeSpeakingLink = "I want to change my speaking test";
var APPB2C_registration_dateLocation_speakingTransfer_noSpeakingSlotsHeader = "Sorry \u2013 no speaking tests are available!";
var APPB2C_registration_dateLocation_speakingTransfer_noSpeakingSlotsBody1 = "We just checked and no other speaking tests are available, sorry!";
var APPB2C_registration_dateLocation_speakingTransfer_noSpeakingSlotsBody2 = "If you really need to change your speaking test, request a transfer of your test date, and then you\u2019ll be able to choose a new speaking test.";
var APPB2C_registration_dateLocation_speakingTransfer_keepSpeakingTest = "Keep speaking test";
var APPB2C_registration_dateLocation_speakingTransfer_requestTransfer = "Request transfer instead";
var APPB2C_registration_dateLocation_location = "Location";
var APPB2C_registration_dateLocation_manage_title = "Manage your booking";
var APPB2C_registration_dateLocation_manage_transferSpeaking = "Change speaking";
var APPB2C_registration_dateLocation_manage_transferWhole = "Transfer test date";
var APPB2C_registration_dateLocation_manage_cancel = "Cancel my booking";
var APPB2C_registration_testTaker_bookedFor_title = "This test is booked for:";
var APPB2C_registration_testTaker_bookedFor_completed = "This test was taken by:";
var APPB2C_registration_testTaker_bookedFor_parent = "Parent / Guardian:";
var APPB2C_registration_testTaker_bookedFor_name = "Name";
var APPB2C_registration_testTaker_bookedFor_dob = "Date of Birth";
var APPB2C_registration_testTaker_bookedFor_gender = "Sex";
var APPB2C_registration_testTaker_bookedFor_email = "Email address";
var APPB2C_registration_testTaker_contact_title = "Contact details:";
var APPB2C_registration_testTaker_contact_parent = "Parent / Guardian\u2019s contact details:";
var APPB2C_registration_testTaker_contact_edit = "Edit contact details";
var APPB2C_registration_testTaker_contact_address = "Address";
var APPB2C_registration_testTaker_contact_mobile = "Mobile telephone number";
var APPB2C_registration_testTaker_consent_title = "Consent:";
var APPB2C_registration_testTaker_consent_edit = "Edit consent";
var APPB2C_registration_testTaker_consent_missing = "Please provide child consent information.";
var APPB2C_registration_testTaker_childConsent_title = "Child consent";
var APPB2C_registration_testTaker_childConsent_back = "I don\u2019t want to edit child consent";
var APPB2C_registration_testTaker_childConsent_warning = "Children aged 11 years or older are only permitted to leave test premises alone once parental / carer consent has been given";
var APPB2C_registration_testTaker_childConsent_context = "Do you give permission for your child to leave the test premises unaccompanied during a test break between modules and at the end of the test?";
var APPB2C_registration_testTaker_childConsent_options_1 = "Yes; I give my permission";
var APPB2C_registration_testTaker_childConsent_options_2 = "No; I will pick them up";
var APPB2C_registration_testTaker_childConsent_options_3 = "No; I want to specify somebody else who will pick them up";
var APPB2C_registration_testTaker_childConsent_cta = "Save consent details";
var APPB2C_registration_testTaker_childConsent_somebodyElse_note = "Please provide the details for the person(s) picking up the child. If different people are picking up the child on the day of the Written test and the day of the Speaking test, please add their names below.";
var APPB2C_registration_testTaker_childConsent_somebodyElse_title_1 = "About the person(s) picking up the child";
var APPB2C_registration_testTaker_childConsent_somebodyElse_title_2 = "About the second person";
var APPB2C_registration_testTaker_childConsent_somebodyElse_noLastName = "They don\u2019t have a surname / family name";
var APPB2C_registration_testTaker_childConsent_somebodyElse_relationship = "Relationship to the child";
var APPB2C_registration_testTaker_childConsent_somebodyElse_phone = "Telephone number";
var APPB2C_registration_testTaker_childConsent_somebodyElse_phoneNote = "In case of an emergency";
var APPB2C_registration_testTaker_childConsent_somebodyElse_add = "+ Add another person";
var APPB2C_registration_testTaker_childConsent_somebodyElse_confirmText_1 = "Do you confirm that the person(s) listed are authorised to collect";
var APPB2C_registration_testTaker_childConsent_somebodyElse_confirmText_2 = "at the end of the test, and they are over 14 years old?";
var APPB2C_registration_testTaker_childConsent_somebodyElse_confirmCheckbox = "Yes, I confirm";
var APPB2C_registration_testTaker_childConsent_somebodyElse_policy = "Read our full child safe collection protection policy";
var APPB2C_registration_testTaker_editContact_note = "Please note";
var APPB2C_registration_testTaker_editContact_warn = "Updates to the contact details will be changed in the test booking(s):";
var APPB2C_registration_testTaker_editContact_back = "I don\u2019t want to change my contact details";
var APPB2C_registration_testTaker_editContact_country_residence = "Country / territory of residence";
var APPB2C_registration_testTaker_editContact_country_change = "change country / territory";
var APPB2C_registration_testTaker_editContact_address = "Address";
var APPB2C_registration_testTaker_editContact_city = "Town / City";
var APPB2C_registration_testTaker_editContact_postCode = "Postcode / ZIP";
var APPB2C_registration_testTaker_editContact_state = "State";
var APPB2C_registration_testTaker_editContact_mobile = "Mobile telephone number";
var APPB2C_registration_testTaker_editContact_cta = "Update details";
var APPB2C_registration_testTaker_editContact_error_missingCountry = "Please provide your country.";
var APPB2C_registration_testTaker_editContact_error_missingAddress = "Please provide your address.";
var APPB2C_registration_testTaker_editContact_error_pastCutoff = "Editing your contact details is no longer available.";
var APPB2C_registration_testTaker_id_title = "Identification details:";
var APPB2C_registration_testTaker_id_child = "Child\u2019s identification details:";
var APPB2C_registration_testTaker_id_typeNames_passport = "passport";
var APPB2C_registration_testTaker_id_typeNames_card = "identity card";
var APPB2C_registration_testTaker_id_typeNames_other = "ID";
var APPB2C_registration_testTaker_id_idNumber = "$t({{idName}}, capitalise) number";
var APPB2C_registration_testTaker_id_expiryDate = "$t({{idName}}, capitalise) expiry date";
var APPB2C_registration_testTaker_id_issuingAuthority = "Issuing authority";
var APPB2C_registration_testTaker_id_fileAlt = "Uploaded proof of ID";
var APPB2C_registration_testTaker_id_noFilesTitle = "No proof";
var APPB2C_registration_testTaker_id_noFilesBody = "You have not uploaded any proof of ID.";
var APPB2C_registration_testTaker_id_edit_title = "Upload proof of $t({{idName}})";
var APPB2C_registration_testTaker_id_edit_subtitle = "Please upload proof of $t({{idName}}) shown below:";
var APPB2C_registration_testTaker_id_edit_rules_example = "See example of proof of $t({{idName}})";
var APPB2C_registration_testTaker_id_edit_upload_exampleProof = "Example proof";
var APPB2C_registration_testTaker_id_edit_upload_imgAlt = "Proof of ID";
var APPB2C_registration_testTaker_files_editButton_add = "Upload your files";
var APPB2C_registration_testTaker_files_editButton_edit = "Edit uploaded files";
var APPB2C_registration_testTaker_files_upload_note = "You can upload {{count}} files (you must upload at least 1)";
var APPB2C_registration_testTaker_files_upload_mobile_title = "Please note:";
var APPB2C_registration_testTaker_files_upload_mobile_line1 = "As it looks like you\u2019re on a mobile device, we suggest you upload a photo from your device.";
var APPB2C_registration_testTaker_files_upload_mobile_line2 = "If you\u2019re unable to do this on your mobile device, please log back in on a computer.";
var APPB2C_registration_testTaker_files_upload_cta = "Save your files";
var APPB2C_registration_testTaker_files_upload_back_title = "back to Test Taker";
var APPB2C_registration_testTaker_files_upload_back_subtitle = "(this won\u2019t upload or remove any files)";
var APPB2C_registration_testTaker_files_upload_error_maxNumberOfFilesExceeded = "You have exceeded the number of files you can upload. Please remove files over the limit and try again.";
var APPB2C_registration_testTaker_files_upload_error_wrongFileType = "You are trying to upload a file in an unsupported format. Please remove it and choose a different file.";
var APPB2C_registration_testTaker_files_upload_error_wrongFileName = "The file you are trying to upload has a name containing unsupported characters. Please remove it, rename it locally and try uploading it again.";
var APPB2C_registration_testTaker_files_upload_error_fileTooLarge = "The file you are trying to upload is too large. Please remove it and choose a different file.";
var APPB2C_registration_testTaker_files_upload_error_uploadUnavailable = "Uploading files is not available for this booking.";
var APPB2C_registration_testTaker_specialArrangements_title = "Special arrangements:";
var APPB2C_registration_testTaker_specialArrangements_description = "You have requested the following special arrangements:";
var APPB2C_registration_testTaker_specialArrangements_noFilesTitle = "No evidence";
var APPB2C_registration_testTaker_specialArrangements_noFilesBody = "You have not uploaded any medical evidence.";
var APPB2C_registration_testTaker_specialArrangements_fileAlt = "Uploaded medical evidence";
var APPB2C_registration_testTaker_specialArrangements_edit_title = "Upload medical evidence";
var APPB2C_registration_testTaker_specialArrangements_edit_subtitle = "When you booked your test you indicated that you needed special arrangements.";
var APPB2C_registration_testTaker_specialArrangements_edit_line1 = "Special arrangements needed:";
var APPB2C_registration_testTaker_specialArrangements_edit_line2 = "All applications for special requirements must be supported by medical evidence.";
var APPB2C_registration_testTaker_specialArrangements_edit_rules_title = "The medical certificate should:";
var APPB2C_registration_testTaker_specialArrangements_edit_rules_rule1 = "be accessible to an IELTS administrator in terms of language and legibility";
var APPB2C_registration_testTaker_specialArrangements_edit_rules_rule2 = "should be an original document on headed paper, and bearing the name, relevant qualification(s) and signature of a recognised practitioner";
var APPB2C_registration_testTaker_specialArrangements_edit_rules_rule3 = "should give a clear statement of your special needs";
var APPB2C_registration_testTaker_specialArrangements_edit_rules_rule4 = "should justify the special arrangements you need";
var APPB2C_registration_testTaker_specialArrangements_edit_rules_rule5 = "should be issued no more than two years before the test date";
var APPB2C_registration_testTaker_error = "Editing your details is no longer available for this booking.";
var APPB2C_registration_results_hasResults_viewExplanation = "View full scores and explanation";
var APPB2C_registration_results_hasResults_share_title = "Got the score you needed?";
var APPB2C_registration_results_hasResults_share_subtitle = "Here\u2019s what you can do now:";
var APPB2C_registration_results_hasResults_share_trfCta = "Download your Test Report Form";
var APPB2C_registration_results_hasResults_share_RecognisingOrgsLink = "Share results with organisations";
var APPB2C_registration_results_hasResults_share_applyBoard = "Apply directly to programs";
var APPB2C_registration_results_hasResults_scores_Listening = "Listening";
var APPB2C_registration_results_hasResults_scores_Reading = "Reading";
var APPB2C_registration_results_hasResults_scores_Writing = "Writing";
var APPB2C_registration_results_hasResults_scores_Speaking = "Speaking";
var APPB2C_registration_results_hasResults_scores_Overall = "Your overall band score";
var APPB2C_registration_results_hasResults_scores_label = "Your full score and explanation";
var APPB2C_registration_results_hasResults_lifeSkills_result = "Result";
var APPB2C_registration_results_hasResults_lifeSkills_level = "CEFR level";
var APPB2C_registration_results_hasResults_lifeSkills_passed = "Passed";
var APPB2C_registration_results_hasResults_lifeSkills_failed = "Failed";
var APPB2C_registration_results_hasResults_lifeSkills_note = "Your results available online are only provisional and should not be used as an official confirmation of your performance. The IELTS Test Report Form (TRF) is the official document confirming your results.";
var APPB2C_registration_results_hasResults_rankNameConsonant = "This means you\u2019re a";
var APPB2C_registration_results_hasResults_rankNameVowel = "This means you\u2019re an";
var APPB2C_registration_results_hasResults_explanations_heading = "Your scores explained:";
var APPB2C_registration_results_hasResults_explanations_improve = "How to improve:";
var APPB2C_registration_results_hasResults_posting_postedOn = "Your Test Report Form has been posted on:";
var APPB2C_registration_results_hasResults_posting_willPostOn = "Your Test Report Form will be posted on:";
var APPB2C_registration_results_hasResults_posting_postedTo = "It has been posted to:";
var APPB2C_registration_results_hasResults_posting_willPostTo = "It will be posted to:";
var APPB2C_registration_results_hasResults_posting_oneCopyWarning = "Only one copy is sent out, so keep it safe!";
var APPB2C_registration_results_hasResults_eorLink = "I would like my test to be re-marked";
var APPB2C_registration_results_hasResults_eorLine1 = "Your re-mark has been completed.";
var APPB2C_registration_results_hasResults_eorLine2 = "Your score is available below. Re-marked sections are highlighted for easy reference.";
var APPB2C_registration_results_hasResults_eorLetter = "Please check your <0>EOR Results Outcome Letter<1></1></0> for further details.";
var APPB2C_registration_results_hasResults_scoreImprove_title = "Didn\u2019t get the score you needed?";
var APPB2C_registration_results_hasResults_scoreImprove_subtitle = "If you didn\u2019t get the score you needed, you might be able to improve it.";
var APPB2C_registration_results_hasResults_scoreImprove_btn = "See my options";
var APPB2C_registration_results_hasResults_scoreImprove_modal_subtitle = "If you\u2019d like to improve your overall band score, you have the following options:";
var APPB2C_registration_results_hasResults_scoreImprove_modal_backBtn = "Back to test result details";
var APPB2C_registration_results_hasResults_scoreImprove_modal_bookNew_title = "Book a new test";
var APPB2C_registration_results_hasResults_scoreImprove_modal_bookNew_description = "If you\u2019re not happy with your score on more than one section of the test, you can quickly book a new test with us.";
var APPB2C_registration_results_hasResults_scoreImprove_modal_osr_title = "Retake part of your test";
var APPB2C_registration_results_hasResults_scoreImprove_modal_osr_description = "If you\u2019re not happy with your score on any one section of the test and believe this was due to your performance on test day, you can register for a One Skill Retake.";
var APPB2C_registration_results_hasResults_scoreImprove_modal_eor_title = "Re-marking your test";
var APPB2C_registration_results_hasResults_scoreImprove_modal_eor_description = "If you\u2019re not happy with the way your test was marked, and you would like to have any section(s) of the test re-marked, you can apply for an Enquiry on Results, up to {{count}} days after your test date.";
var APPB2C_registration_results_hasResults_bandScore_increase = "increase";
var APPB2C_registration_results_hasResults_bandScore_decrease = "decrease";
var APPB2C_registration_results_hasResults_bandScore_unchanged = "unchanged";
var APPB2C_registration_results_updateBar_osr_marked = "Your retake of your {{osrSkillName}} test has been marked. <1>View result</1>";
var APPB2C_registration_results_updateBar_osr_booked = "You have booked to retake your {{osrSkillName}} test. <1>View this booking</1>";
var APPB2C_registration_results_hasResults_osr_updateBar_title = "Your {{osrSkillName}} Retake result ({{score}}) has been counted towards your new overall band score.";
var APPB2C_registration_results_hasResults_osr_updateBar_scoreIncreased = "Your overall band score has increased from {{originalScore}} to {{osrScore}}";
var APPB2C_registration_results_hasResults_osr_updateBar_scoreDecreased = "Your overall band score has decreased from {{originalScore}} to {{osrScore}}";
var APPB2C_registration_results_hasResults_osr_updateBar_scoreUnchanged = "Your overall band score remains unchanged at {{originalScore}}";
var APPB2C_registration_results_hasResults_osr_previousResults = "See previous test result in full";
var APPB2C_registration_results_bandScore_osrBooked = "Retake booked <1>View booking</1>";
var APPB2C_registration_results_bandScore_osrMarked = "Retake marked <1>View result</1>";
var APPB2C_registration_results_eor_title = "Re-marking your test (Enquiry on Results)";
var APPB2C_registration_results_eor_titlePayment = "Paying for your re-mark (EOR)";
var APPB2C_registration_results_eor_preDeadline_line1 = "If you\u2019re not happy with the way your test was marked, and you would like to have any section(s) of the test re-marked, you can apply for an Enquiry on Results, up to {{count}} days after your test date.";
var APPB2C_registration_results_eor_preDeadline_paymentTitle = "Paying for your re-mark";
var APPB2C_registration_results_eor_preDeadline_line2 = "There is a charge for an enquiry on IELTS test results, however this charge will be refunded if your score increases for any selected section of the test.";
var APPB2C_registration_results_eor_preDeadline_note = "Once you\u2019ve paid, you cannot cancel or change your EOR request.";
var APPB2C_registration_results_eor_preDeadline_fee = "Fee";
var APPB2C_registration_results_eor_preDeadline_tax = "inc. tax";
var APPB2C_registration_results_eor_preDeadline_back = "Back to result";
var APPB2C_registration_results_eor_preDeadline_scoresTitle = "Please choose one or more parts of your test to be re-marked:";
var APPB2C_registration_results_eor_preDeadline_scoresTitleOsr = "You have chosen to enquire about your";
var APPB2C_registration_results_eor_preDeadline_scoresTitleOsr_Listening = "Listening Retake result";
var APPB2C_registration_results_eor_preDeadline_scoresTitleOsr_Reading = "Reading Retake result";
var APPB2C_registration_results_eor_preDeadline_scoresTitleOsr_Writing = "Writing Retake result";
var APPB2C_registration_results_eor_preDeadline_scoresTitleOsr_Speaking = "Speaking Retake result";
var APPB2C_registration_results_eor_preDeadline_scores_band_notSelectableReason_exempted = "An enquiry on results request for this exam section is not possible as it was exempted due to requested Access Arrangement";
var APPB2C_registration_results_eor_preDeadline_trfNumberLabel = "Test Report Form (TRF) Number";
var APPB2C_registration_results_eor_preDeadline_trfNumberSubnote = "Please provide the 15\u201318 digit number found in the bottom right-hand corner of every Test Report Form.";
var APPB2C_registration_results_eor_preDeadline_trfNumberValidation = "Field has to match specific format (e.g. 11AA111110AAAA001A).";
var APPB2C_registration_results_eor_preDeadline_maxScore = "You received a full mark for this part. You cannot request a re-mark.";
var APPB2C_registration_results_eor_preDeadline_scoresRequired = "Please select at least one part.";
var APPB2C_registration_results_eor_preDeadline_explanation = "Please provide a brief explanation below why you believe you need your selected test parts re-marked";
var APPB2C_registration_results_eor_preDeadline_explanationRequired = "You must provide this explanation to support your request.";
var APPB2C_registration_results_eor_preDeadline_evidence = "Please upload evidence that supports your request for a re-mark.";
var APPB2C_registration_results_eor_preDeadline_evidenceRequired = "You must provide this evidence to support your request.";
var APPB2C_registration_results_eor_preDeadline_iolNote_line2 = "The outcome can become available on the same day as your application and up to 21 days after your application, depending on several factors including the number of sections requested for the re-mark.";
var APPB2C_registration_results_eor_preDeadline_iolNote_line3 = "If you have not received a response after 21 days, please <0>contact us</0>.";
var APPB2C_registration_results_eor_preDeadline_noteTitle = "Please note:";
var APPB2C_registration_results_eor_preDeadline_legal = "I agree to the EOR <0>terms and conditions</0>";
var APPB2C_registration_results_eor_preDeadline_legalNote = "The British Council will use the information that you are providing in connection with processing your EOR. The legal basis for processing your information is agreement with our terms and conditions of EOR.";
var APPB2C_registration_results_eor_preDeadline_orderAcknowledgementLabel = "Who should receive the order confirmation for the EOR?";
var APPB2C_registration_results_eor_preDeadline_paymentCta = "View payment options";
var APPB2C_registration_results_eor_preDeadline_payOnlineCTA = "Pay online";
var APPB2C_registration_results_eor_preDeadline_payOfflineCTA = "Pay another way";
var APPB2C_registration_results_eor_preDeadline_error_missingTrfNumber = "Please provide a valid Test Report Form (TRF) Number.";
var APPB2C_registration_results_eor_preDeadline_error_wrongTrfNumber = "The Test Report Form (TRF) Number has to match specific format (e.g. 11AA111110AAAA001A).";
var APPB2C_registration_results_eor_preDeadline_error_explanationMaxLength = "Your explanation can be at most {{count}} characters long.";
var APPB2C_registration_results_eor_postDeadline_line1 = "A request for a re-mark (called an Enquiry on Results, or \u2018EOR\u2019) must be requested no later than {{count}} days from the date of your test.";
var APPB2C_registration_results_eor_postDeadline_line2 = "As the deadline for an EOR application has passed, your request cannot be processed online.";
var APPB2C_registration_results_eor_postDeadline_line3 = "If you wish the centre to consider your EOR, please contact the test centre to provide details to support this request.";
var APPB2C_registration_results_eor_postDeadline_iol_line3 = "If you wish for us to consider your EOR, please contact us to provide details to support this request.";
var APPB2C_registration_results_eor_postDeadline_iol_launchChatLine = "I need to chat to somebody online about this:";
var APPB2C_registration_results_eor_postDeadline_back = "I don\u2019t need my test to be re-marked";
var APPB2C_registration_results_eor_postDeadline_phone = "Phone";
var APPB2C_registration_results_eor_postDeadline_email = "Email";
var APPB2C_registration_results_eor_postDeadline_help = "Please quote your registration reference number for us to help you better:";
var APPB2C_registration_results_eor_acknowledgement_title = "EOR Acknowledgement";
var APPB2C_registration_results_eor_acknowledgement_success = "Your Enquiry On Results (EOR) has been booked and a decision is pending.";
var APPB2C_registration_results_eor_acknowledgement_info = "Your Enquiry On Results (EOR) has been cancelled.";
var APPB2C_registration_results_eor_acknowledgement_confirmation = "We have sent you a confirmation of this EOR booking to your email address.";
var APPB2C_registration_results_eor_acknowledgement_components = "You have selected the following parts of your test to be re-marked:";
var APPB2C_registration_results_eor_acknowledgement_noteTitle = "Please note:";
var APPB2C_registration_results_eor_acknowledgement_payment = "Completed payment";
var APPB2C_registration_results_eor_acknowledgement_fee = "Fee";
var APPB2C_registration_results_eor_acknowledgement_tax = "Tax";
var APPB2C_registration_results_eor_acknowledgement_total = "Total";
var APPB2C_registration_results_eor_acknowledgement_reference = "EOR reference";
var APPB2C_registration_results_eor_acknowledgement_terms = "You agreed to these <0>terms and conditions</0>";
var APPB2C_registration_results_eor_acknowledgement_backButton = "View this test";
var APPB2C_registration_results_eor_acknowledgement_paymentNote = "You still have to settle the payment or your request will be cancelled";
var APPB2C_registration_results_eor_acknowledgement_paymentButton = "See your payment options";
var APPB2C_registration_results_osr_title = "Retake one part of your test";
var APPB2C_registration_results_osr_line1 = "If you need a second chance to improve your IELTS score, you can retake the one part of your test you were unhappy with.";
var APPB2C_registration_results_osr_line2 = "This means all the great work you\u2019ve already done isn\u2019t wasted.";
var APPB2C_registration_results_osr_line3 = "Which part of your test score (shown above) would you like to retake, and when would you like to retake it?";
var APPB2C_registration_results_osr_line4 = "We will aim to respond to all requests by email within 48-72 hours.";
var APPB2C_registration_results_osr_line5 = "The British Council will use the information that you are providing in connection with processing your request. For detailed information, please refer to the <0>privacy section of our website</0>";
var APPB2C_registration_results_osr_submitBtn = "Submit retake request";
var APPB2C_registration_results_noResults_title = "To see information about your results, including when they will be available, click <0>here</0>. You will be sent a link to access your results online once they are ready.";
var APPB2C_registration_results_osr_successBanner = "We have received your IELTS One Skill Retake request.";
var APPB2C_registration_results_osr_chooseSkill_formTitle = "Please choose which part of your test to retake";
var APPB2C_registration_results_osr_chooseSkill_orgAcceptRetakes_title = "Does the institution you intend to apply to accept IELTS One Skill Retake?";
var APPB2C_registration_results_osr_chooseSkill_orgAcceptRetakes_description = "Before you book a test with us, you should <0>check that your chosen institution accepts the relevant IELTS test version.</0>";
var APPB2C_registration_results_osr_chooseSkill_orgAcceptRetakes_confirmation = "I confirm that my chosen institution accepts IELTS One Skill Retake.";
var APPB2C_registration_results_osr_chooseSkill_chooseDateBtn = "Choose date of One Skill Retake";
var APPB2C_registration_results_osr_chooseSkill_backBtn = "Back to results";
var APPB2C_registration_results_osr_chooseSkill_skillRequired = "Please select a skill you wish to retake";
var APPB2C_registration_results_osr_chooseSkill_confirmationRequired = "Please confirm that you have checked that intended organisation(s) accept IELTS retakes.";
var APPB2C_registration_results_osr_chooseSkill_modal_title = "Sorry, we don\u2019t have any available dates";
var APPB2C_registration_results_osr_chooseSkill_modal_description = "We don\u2019t have any dates that you can book for your selected One Skill Retake.";
var APPB2C_registration_results_osr_chooseSkill_modal_contact = "Please contact us directly using the details below to find out how we can help you.";
var APPB2C_registration_results_osr_chooseSkill_modal_phone = "Phone";
var APPB2C_registration_results_osr_chooseSkill_modal_email = "Email";
var APPB2C_registration_results_osr_chooseDate_retakeListening = "Listening Retake";
var APPB2C_registration_results_osr_chooseDate_retakeReading = "Reading Retake";
var APPB2C_registration_results_osr_chooseDate_retakeWriting = "Writing Retake";
var APPB2C_registration_results_osr_chooseDate_retakeSpeaking = "Speaking Retake";
var APPB2C_registration_results_osr_chooseDate_chooseDateTitle = "Choose your {{skillName}} Retake date";
var APPB2C_registration_results_osr_chooseDate_note_title = "Please note:";
var APPB2C_registration_results_osr_chooseDate_note_content = "We can only offer you a retake date within 60 days of your original test date ({{date}}).";
var APPB2C_registration_results_osr_chooseDate_accessibility = "I have <bold>accessibility</bold> needs for the test date";
var APPB2C_registration_results_osr_chooseDate_accessibilityLink = "Read about how we can help you";
var APPB2C_registration_results_osr_chooseTest_availableDates = "Available dates";
var APPB2C_registration_results_osr_chooseTest_speaking_time = "Change time";
var APPB2C_registration_results_osr_review_note = "Please note, your personal details below have been retrieved from your original IELTS booking. These cannot be changed for your One Skill Retake.";
var APPB2C_registration_results_osr_review_note_testDay = "On the test day, you will be required to bring the same identification document you used to register with. If you do not have the original test ID with you, please contact your test centre.";
var APPB2C_registration_results_osr_error_noTestDates = "There are no test dates available in this location anymore. Please choose a different one or contact the test centre.";
var APPB2C_registration_results_osr_error_noTests = "There are no test dates available in the time period and location you have selected anymore. Please <0>go back</0> and change your search parameters.";
var APPB2C_registration_results_osr_error_missingFile = "There is a problem with files uploaded to your original registration. Please contact the test centre for further assistance.";
var APPB2C_registration_results_noResults_note_title = "Please note:";
var APPB2C_registration_results_noResults_osr_booked = "Retake booked";
var APPB2C_registration_results_noResults_osr_previousScores = "Your previous scores:";
var APPB2C_registration_results_noResults_cmds_title = "To see information about your results, including when they will be available, click <0>here</0>. We will send you a link to access your results and download your electronic Test Report Form (TRF).";
var APPB2C_registration_results_organisations_chosenOrganisationsHeader = "Chosen organisations to send your results to";
var APPB2C_registration_results_organisations_organisationsCount = "{{count}} organisation";
var APPB2C_registration_results_organisations_organisationsCount_other = "{{count}} organisations";
var APPB2C_registration_results_organisations_title = "Sharing your results with organisations";
var APPB2C_registration_results_organisations_note0 = "We can send your results to organisations on your behalf.";
var APPB2C_registration_results_organisations_note1 = 'We can send your results to up to $t(APPB2C.registration.results.organisations.organisationsCount, {"count": {{count}} }).';
var APPB2C_registration_results_organisations_note2 = "These can include:";
var APPB2C_registration_results_organisations_list_item1 = "academic institutions";
var APPB2C_registration_results_organisations_list_item2 = "government agencies";
var APPB2C_registration_results_organisations_list_item3 = "professional bodies";
var APPB2C_registration_results_organisations_list_item4 = "employers";
var APPB2C_registration_results_organisations_availableReceivingOrgsNote1 = 'You can still choose another $t(APPB2C.registration.results.organisations.organisationsCount, {"count": {{count}} }) to have your results sent to.';
var APPB2C_registration_results_organisations_availableReceivingOrgsNote2 = "Applications are open until {{date}}.";
var APPB2C_registration_results_organisations_availableReceivingOrgsNote3 = "Organisations may have different rules for accepting a TRF, with a minimum validity period of two years. Please check with your organisation before applying.";
var APPB2C_registration_results_organisations_receivingOrgsLimitReachedNote = "You have reached the limit for Additional TRFs requests and/or the deadline to apply has passed.";
var APPB2C_registration_results_organisations_noReceivingOrgsSelectedNote = "No organisations have been chosen.";
var APPB2C_registration_results_organisations_mod_howTo_title = "How to choose your organisations";
var APPB2C_registration_results_organisations_mod_howTo_line1 = "You can choose from two types of organisations";
var APPB2C_registration_results_organisations_mod_howTo_item1 = "<bold>eTRF</bold>: Organisations that accept your electronic Test Report Form (eTRF) directly from us. You can choose as many of these as you like.";
var APPB2C_registration_results_organisations_mod_howTo_item2 = "<bold>TRF</bold>: Organisations that we send your Test Report Form (TRF) to on your behalf. You can only choose <bold>up to {{number}}</bold> of these.";
var APPB2C_registration_results_organisations_mod_delivery_auto_header = "Here are the organisations you chose which will receive your eTRF automatically:";
var APPB2C_registration_results_organisations_mod_delivery_auto_note = "We will send these organisations your eTRF for you. You don\u2019t need to do anything. You can choose as many of these as you like.";
var APPB2C_registration_results_organisations_mod_delivery_auto_notSentNote = "We haven\u2019t sent these organisations your eTRF as you didn\u2019t achieve the minimum overall band you set for each of them.";
var APPB2C_registration_results_organisations_mod_delivery_auto_sentNote = "We have sent these organisations your eTRF for you. You don\u2019t need to do anything.";
var APPB2C_registration_results_organisations_mod_delivery_postal_header = "Here are the organisations you chose that we will post your TRF to:";
var APPB2C_registration_results_organisations_mod_delivery_postal_note1 = "We will post your Test Report Form (TRF) to these organisations. You can only choose up to {{count}} of these.";
var APPB2C_registration_results_organisations_mod_delivery_postal_note2 = "If you can\u2019t find an organisation in our list, you can add your own. They will be counted as one of your TRF choices.";
var APPB2C_registration_results_organisations_mod_delivery_postal_note3 = 'You can still choose another $t(APPB2C.registration.results.organisations.mod.delivery.postal.trfCount, {"count": {{count}} }) to have your results sent to.';
var APPB2C_registration_results_organisations_mod_delivery_postal_note4 = 'Now that you\u2019ve chosen $t(APPB2C.registration.results.organisations.mod.delivery.postal.trfCount, {"count": {{count}} }) you can\u2019t choose anymore. You can still choose organisations that accept eTRF.';
var APPB2C_registration_results_organisations_mod_delivery_postal_note5 = "You have reached the limit for organisations we can send your results to.";
var APPB2C_registration_results_organisations_mod_delivery_postal_trfCount = "{{count}} TRF organisation";
var APPB2C_registration_results_organisations_mod_delivery_postal_trfCount_other = "{{count}} TRF organisations";
var APPB2C_registration_results_organisations_mod_delivery_postal_notSentNote = "We haven\u2019t sent these organisations your TRF as you didn\u2019t achieve the minimum overall band you set for each of them.";
var APPB2C_registration_results_organisations_mod_delivery_postal_sentNote = "We have sent these organisations your TRF for you. You don\u2019t need to do anything.";
var APPB2C_registration_results_organisations_iol_roAccept_title = "Does your intended organisation or institute accept IELTS online?";
var APPB2C_registration_results_organisations_iol_roAccept_message = "If you take IELTS Online then you need to check whether your organisation accepts this.";
var APPB2C_registration_results_organisations_iol_roAccept_link = "Please check which organisations accept IELTS Online test scores";
var APPB2C_registration_results_organisations_iol_delivery_postal_header = "Here are the organisations you chose which need manual delivery:";
var APPB2C_registration_results_organisations_iol_delivery_postal_note1 = "These organisations accept IELTS Online, but are not registered to receive eTRF directly from us.";
var APPB2C_registration_results_organisations_iol_delivery_postal_note2 = "When you receive your results, you will need to email a copy of your TRF to each organisation.";
var APPB2C_registration_results_organisations_iol_delivery_postal_note2_results = "You will need to email a copy of your TRF to each organisation.";
var APPB2C_registration_results_organisations_iol_delivery_auto_header = "Here are the organisations you chose which will receive your eTRF automatically:";
var APPB2C_registration_results_organisations_iol_delivery_auto_note = "We will send these organisations your eTRF for you. You don\u2019t need to do anything.";
var APPB2C_registration_results_organisations_iol_delivery_auto_notSentNote = "We haven\u2019t sent these organisations your eTRF as you didn\u2019t achieve the minimum overall band you set for each of them.";
var APPB2C_registration_results_organisations_iol_delivery_auto_sentNote = "We have sent these organisations your eTRF for you. You don\u2019t need to do anything.";
var APPB2C_registration_results_organisations_iol_chooseCta = "Choose organisations";
var APPB2C_registration_results_organisations_iol_noConditions = "You did not set any conditional scores for this organisation.";
var APPB2C_registration_results_organisations_iol_generalCondition = "We will only send this organisation your results if your achieve this minimum overall band:";
var APPB2C_registration_results_organisations_iol_preciseCondition = "We will only send your results to this organisation if you achieve every score you have set.";
var APPB2C_registration_results_organisations_iol_notChosen = "Not chosen";
var APPB2C_registration_results_organisations_iol_edit = "Change";
var APPB2C_registration_results_organisations_iol_error = "Something went wrong while loading changes.<0></0> Please try <1>refreshing</1> the page.";
var APPB2C_registration_results_organisations_iol_sendAnyway = "Send my results to this organisation anyway";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_country = "Choose a country / territory";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_countryOptional = "Choose a country / territory: (optional)";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_countryAll = "All";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_searchByCountry = "Search by country / territory name";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_org = "Choose an organisation";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_searchByOrg = "Search by organisation name";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_addNew = "+ Add a new organisation";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_organisation = "Organisation name";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_person = "Name of Person / Department: (optional)";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_file = "File / case number: (optional)";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_address = "Address:";
var APPB2C_registration_results_organisations_editRo_chooseOrganisations_postCode = "Post code";
var APPB2C_registration_results_organisations_editRo_iol_newOrgTitle = "Add an organisation";
var APPB2C_registration_results_organisations_editRo_iol_cancelEdit = "Discard changes";
var APPB2C_registration_results_organisations_editRo_iol_noResults = "No results";
var APPB2C_registration_results_organisations_editRo_iol_address = "Address:";
var APPB2C_registration_results_organisations_editRo_iol_copy = "Copy email address";
var APPB2C_registration_results_organisations_editRo_iol_copied = "Email address copied";
var APPB2C_registration_results_organisations_editRo_iol_delivery_note1 = "This organisation accepts IELTS Online, but is not registered to receive eTRF directly from us.";
var APPB2C_registration_results_organisations_editRo_iol_delivery_note2 = "When you receive your results, you will need to email a copy of your TRF to the organisation.";
var APPB2C_registration_results_organisations_editRo_iol_delivery_note2_results = "You will need to email a copy of your TRF to the organisation.";
var APPB2C_registration_results_organisations_editRo_iol_delivery_mod_trf = "TRF";
var APPB2C_registration_results_organisations_editRo_iol_delivery_mod_eResults = "eTRF";
var APPB2C_registration_results_organisations_editRo_iol_delivery_mod_note = "You can have your eTRF sent to as many organisations as you like, but you can only choose up to {{number}} TRF organisations.";
var APPB2C_registration_results_organisations_editRo_iol_delivery_mod_postal = "We will send this organisation your Test Report Form (TRF). <br>It counts towards your limit of {{number}} TRF organisations.";
var APPB2C_registration_results_organisations_editRo_iol_delivery_mod_edelivery = "This organisation accepts your eTRF directly from us. It does not affect how many more organisations you can choose.";
var APPB2C_registration_results_organisations_editRo_iol_conditions_header = "Would you like to choose conditional scores for this organisation?";
var APPB2C_registration_results_organisations_editRo_iol_conditions_subHeader = "We would only send your results to them if you get the score(s) you want.";
var APPB2C_registration_results_organisations_editRo_iol_conditions_no = "No";
var APPB2C_registration_results_organisations_editRo_iol_conditions_yes = "Yes";
var APPB2C_registration_results_organisations_editRo_iol_conditions_mandatoryPlaceholder = "Please choose";
var APPB2C_registration_results_organisations_editRo_iol_conditions_optionalPlaceholder = "Optional";
var APPB2C_registration_results_organisations_editRo_iol_conditions_clear = "clear";
var APPB2C_registration_results_organisations_editRo_iol_conditions_note1 = "Please choose the minimum overall band you want to score before this organisation receives your result.";
var APPB2C_registration_results_organisations_editRo_iol_conditions_note2 = "You can also choose your minimum scores for each test component:";
var APPB2C_registration_results_organisations_editRo_iol_conditions_note3 = "We will only send your results to this organisation if you achieve every score you have set.";
var APPB2C_registration_results_organisations_editRo_iol_addCta = "Add organisation";
var APPB2C_registration_results_organisations_editRo_iol_saveCta = "Save changes";
var APPB2C_registration_results_organisations_editRo_iol_removeLink = "Remove organisation";
var APPB2C_registration_results_organisations_editRo_iol_validation_selectedOrganisation = "Please choose an organisation.";
var APPB2C_registration_results_organisations_editRo_iol_validation_overallScore = "The minimal score for your overall band is required.";
var APPB2C_registration_results_organisations_editRo_addAnother = "+ Add another organisation";
var APPB2C_registration_results_organisations_editRo_error_contactPersonMaxLength = "Name of Person / Department can be at most {{count}} characters long.";
var APPB2C_registration_results_organisations_editRo_error_caseNumberMaxLength = "File / case number can be at most {{count}} characters long.";
var APPB2C_registration_results_organisations_editRo_error_orgNameMaxLength = "Organisation name can be at most {{count}} characters long.";
var APPB2C_registration_results_organisations_editRo_error_minScoreMissing = "Please choose the minimum score for your overall band.";
var APPB2C_registration_results_organisations_editRo_error_missingAddressLine1 = "Please provide the organisation address.";
var APPB2C_registration_results_organisations_editRo_error_missingOrgName = "Please provide the organisation name.";
var APPB2C_registration_results_ttAbsent_msg = "No results for this test can be made available as the Test Taker was absent on the test date.";
var APPB2C_registration_results_ttAbsent_btn = "Rebook this test with different dates";
var APPB2C_registration_payments_paidByAgent = "Registration paid for by the agent";
var APPB2C_registration_payments_unpaid = "Unpaid";
var APPB2C_registration_payments_awaitingPayment = "Awaiting payment";
var APPB2C_registration_payments_expired = "Expired";
var APPB2C_registration_payments_completed = "Completed";
var APPB2C_registration_payments_back = "Back to test";
var APPB2C_registration_payments_transaction_header = "Payment for";
var APPB2C_registration_payments_transaction_description_registration = "Test Registration";
var APPB2C_registration_payments_transaction_description_transfer = "Transfer";
var APPB2C_registration_payments_transaction_description_eor = "EOR";
var APPB2C_registration_payments_transaction_description_appeal = "Appeal";
var APPB2C_registration_payments_transaction_underReviewSuffix = "(under review)";
var APPB2C_registration_payments_transaction_unpaidSuffix = "(unpaid)";
var APPB2C_registration_payments_transaction_cancelledSuffix = "(cancelled)";
var APPB2C_registration_payments_transaction_hideDetails = "Hide details";
var APPB2C_registration_payments_transaction_showDetails = "Show details";
var APPB2C_registration_payments_transaction_feeLabel = "Fee";
var APPB2C_registration_payments_transaction_taxLabel = "Tax";
var APPB2C_registration_payments_transaction_totalLabel = "Total";
var APPB2C_registration_payments_transaction_promoCode = "Promo code";
var APPB2C_registration_payments_transaction_referenceLabel = "Payment reference";
var APPB2C_registration_payments_transaction_receipt = "Receipt";
var APPB2C_registration_payments_transaction_receiptCta = "You can download here";
var APPB2C_registration_payments_transaction_deadlineWarning_default = "You have until {{date}} to pay this fee.";
var APPB2C_registration_payments_transaction_deadlineWarning_registration = "You have until {{date}} to pay this fee. After this date, your registration will be cancelled.";
var APPB2C_registration_payments_transaction_deadlineWarning_eor = "You have until {{date}} to pay this fee. After this date, your Enquiry On Results (EOR) will be cancelled.";
var APPB2C_registration_payments_transaction_pastDeadlineContactUs = "If you believe this is an error and can provide proof that the payment has been made on time, please contact us:";
var APPB2C_registration_payments_transaction_pastDeadlinePhone = "Phone";
var APPB2C_registration_payments_transaction_pastDeadlineEmail = "Email";
var APPB2C_registration_payments_transaction_pastDeadline = "Payment for this item has not been registered in our system.";
var APPB2C_registration_payments_transaction_termsLabel = "View <0>terms and conditions</0>";
var APPB2C_registration_payments_transaction_outdatedTermsLabel = "You originally agreed to these <0>terms and conditions</0>";
var APPB2C_registration_payments_finishPayment_processing = "We are processing your payment...";
var APPB2C_registration_payments_finishPayment_pleaseWait = "Please wait";
var APPB2C_registration_payments_finishPayment_success_title = "Payment confirmation";
var APPB2C_registration_payments_finishPayment_success_alert = "Your payment has been successfully processed!";
var APPB2C_registration_payments_finishPayment_success_message = "We have sent you a confirmation of this payment to your email address.";
var APPB2C_registration_payments_finishPayment_success_cta = "View this test";
var APPB2C_registration_payments_finishPayment_failure_title = "Payment failed";
var APPB2C_registration_payments_finishPayment_failure_alert = "Sorry \u2013 your online payment failed!";
var APPB2C_registration_payments_finishPayment_failure_message = "Please go back to your payment options and try again.";
var APPB2C_registration_payments_finishPayment_failure_cta = "View payment options";
var APPB2C_registration_payments_finishPayment_error_title = "Unknown payment status";
var APPB2C_registration_payments_finishPayment_error_messageLine1 = "We\u2019ve encountered an error while checking your payment status. Please try to refresh the page in a few moments.";
var APPB2C_registration_payments_finishPayment_error_messageLine2 = "If this issue persists, please go back to your payment options.";
var APPB2C_registration_payments_finishPayment_error_cta = "Refresh page";
var APPB2C_registration_payments_actions_header = "How would you like to pay?";
var APPB2C_registration_payments_actions_payOnlineCTA = "Pay online";
var APPB2C_registration_payments_actions_paymentInProgressInfo = "Previous attempt to pay online is still being processed. Please wait for the result.";
var APPB2C_registration_payments_actions_payOfflineCTA = "Pay another way";
var APPB2C_registration_payments_actions_subHeader = "I\u2019ve already paid and need to upload my payment proof";
var APPB2C_registration_payments_actions_uploadProofCTA = "Upload payment proof";
var APPB2C_registration_payments_actions_editProofCTA = "Edit proof of payment";
var APPB2C_registration_payments_offlineDetails_payBy = "Pay by";
var APPB2C_registration_payments_offlineDetails_accountName = "Account name";
var APPB2C_registration_payments_offlineDetails_accountNumber = "Account number";
var APPB2C_registration_payments_offlineDetails_sortCode = "Sort code";
var APPB2C_registration_payments_proofUpload_intro = "If you have already paid this fee you can upload proof of payment below.";
var APPB2C_registration_payments_proofUpload_info = "You can upload 2 files (you must upload at least 1)";
var APPB2C_registration_payments_proofUpload_cta = "Save your files";
var APPB2C_registration_payments_proofUpload_rules_intro = "Your proof of payment must clearly show:";
var APPB2C_registration_payments_proofUpload_rules_rule1 = "the payee name";
var APPB2C_registration_payments_proofUpload_rules_rule2 = "the payee account number";
var APPB2C_registration_payments_proofUpload_rules_rule3 = "the amount paid";
var APPB2C_registration_payments_proofUpload_rules_rule4 = "the date it was paid";
var APPB2C_registration_payments_proofUpload_rules_rule5 = "the British Council account number";
var APPB2C_registration_payments_proofPreview_proofLabel = "Proof of payment:";
var APPB2C_registration_payments_proofPreview_fileAlt = "Uploaded proof of payment";
var APPB2C_registration_prepare_header = "Prepare for your test";
var APPB2C_registration_prepare_intro = "We can help you prepare for IELTS with our range of free resources.";
var APPB2C_registration_prepare_introLifeSkills = "We can help you prepare for Life Skills with our range of free resources.";
var APPB2C_registration_prepare_rteLastMinute_header = "Road to IELTS \u2013 Last Minute";
var APPB2C_registration_prepare_rteLastMinute_body_line1 = "Get ready for your IELTS test with:";
var APPB2C_registration_prepare_rteLastMinute_body_item1 = "9 videos giving advice and tutorials,";
var APPB2C_registration_prepare_rteLastMinute_body_item2 = "100 interactive activities,";
var APPB2C_registration_prepare_rteLastMinute_body_item3 = "2 practice tests for each of the 4 skills.";
var APPB2C_registration_prepare_rteLastMinute_body_cta = "Start now";
var APPB2C_registration_prepare_rteLastMinute_ukvi_line1 = "Get unlimited access to Road to IELTS \u2013 Last Minute Course, British Council\u2019s popular online preparation course. Watch videos giving advice and tutorials, use 100 interactive activities and take two practice tests for each of the four core skills.";
var APPB2C_registration_prepare_rteLastMinute_ukvi_cta = "Access the course";
var APPB2C_registration_prepare_rteTestDrive_header = "Road to IELTS Test Drive \u2013 Free Version";
var APPB2C_registration_prepare_rteTestDrive_body_line1 = "Jump start your IELTS journey with Road to IELTS Test Drive and get:";
var APPB2C_registration_prepare_rteTestDrive_body_item1 = "30 interactive exercises,";
var APPB2C_registration_prepare_rteTestDrive_body_item2 = "4 videos giving tips and advice,";
var APPB2C_registration_prepare_rteTestDrive_body_item3 = "practice test for each of the 4 skills.";
var APPB2C_registration_prepare_rteTestDrive_body_line2 = "You will also get more materials once registration is complete.";
var APPB2C_registration_prepare_rteTestDrive_body_cta = "Try Road to IELTS test drive version";
var APPB2C_registration_prepare_onlineCourse_header = "Online Course: Understanding IELTS";
var APPB2C_registration_prepare_onlineCourse_body_line1 = "Our four Understanding IELTS ExpertTrack courses will give you a complete guide to everything you need to know as you prepare for the IELTS test. You\u2019ll get a deep dive into each section of the IELTS test \u2013 Reading, Writing, Listening and Speaking. You\u2019ll also receive advice from our video tutor and a team of experienced IELTS educators. Join a free 7-day trial which provides you with access to the full suite of courses and assessments for a week.";
var APPB2C_registration_prepare_onlineCourse_body_cta = "Start your free trial now";
var APPB2C_registration_prepare_tutor_header = "1-to-1 tutor \u2013 IELTS Preparation Course";
var APPB2C_registration_prepare_tutor_body_line1 = "Prepare for your IELTS test with a professional IELTS tutor. With a number of courses to choose from, you can get ready for your IELTS if it\u2019s a week, or a few months away. Try your first session today for $1.";
var APPB2C_registration_prepare_tutor_body_line2 = "Exclusive Offer: As an IELTS test taker with the British Council you get 10% off when you purchase one of our 1-to-1 preparation courses.";
var APPB2C_registration_prepare_tutor_body_cta = "Click here to try your first session for $1 and avail this offer.";
var APPB2C_registration_prepare_prepApp_header = "IELTS Prep App";
var APPB2C_registration_prepare_prepApp_body_line1 = "The IELTS App has sample questions, practice tests, grammar tips, exercises, quizzes and more. You can also use it to track your progress.";
var APPB2C_registration_prepare_prepApp_body_cta = "Access IELTS Prep App";
var APPB2C_registration_prepare_prepApp_ukvi_line1 = "While focusing on Listening and Speaking parts of the test, this app will also help you expand your vocabulary, practice grammar and understand what to do on your test day. You will be able to test your knowledge by doing grammar exercises, Listening and Speaking practice tests and watching videos of IELTS Speaking interviews.";
var APPB2C_registration_prepare_prepApp_ukvi_line2 = "Download for:";
var APPB2C_registration_prepare_prepApp_ukvi_cta1 = "iOS";
var APPB2C_registration_prepare_prepApp_ukvi_cta2 = "Android";
var APPB2C_registration_prepare_blog_header = "IELTS Opportunities Abroad blog";
var APPB2C_registration_prepare_blog_body_line1 = "This blog gives Experts\u2019 advice and tips on the IELTS test, plus an overview of US campuses.";
var APPB2C_registration_prepare_blog_body_cta = "Access IELTS Opportunities Abroad blog";
var APPB2C_registration_prepare_facebook_header = "Ask the Expert (Facebook)";
var APPB2C_registration_prepare_facebook_body_line1 = "Three live chats every month by an IELTS expert on Facebook, with on-the-spot answers to audience questions.";
var APPB2C_registration_prepare_facebook_body_cta = "Ask the Expert (Facebook)";
var APPB2C_registration_prepare_prepVideos_header = "IELTS preparation videos";
var APPB2C_registration_prepare_prepVideos_body_line1 = "Get to know the test format through a series of videos.";
var APPB2C_registration_prepare_prepVideos_body_cta = "Access IELTS preparation videos";
var APPB2C_registration_prepare_speaking_header = "Understanding IELTS: Speaking";
var APPB2C_registration_prepare_speaking_body_line1 = "Find out what you need to know about the IELTS Speaking test to improve your test performance.";
var APPB2C_registration_prepare_speaking_body_cta = "Access Understanding IELTS: Speaking";
var APPB2C_registration_prepare_reading_header = "Understanding IELTS: Reading";
var APPB2C_registration_prepare_reading_body_line1 = "Find out what you need to know about the IELTS Reading test to improve your test performance.";
var APPB2C_registration_prepare_reading_body_cta = "Access Understanding IELTS: Reading";
var APPB2C_registration_prepare_cdTests_header = "Computer Delivered IELTS practice tests";
var APPB2C_registration_prepare_cdTests_body_line1 = "These sample test questions will prepare you for the test and help you decide which option you prefer.";
var APPB2C_registration_prepare_cdTests_body_cta = "Access Computer Delivered IELTS practice tests";
var APPB2C_registration_prepare_cdTipsVideos_header = "Computer Delivered IELTS tips videos";
var APPB2C_registration_prepare_cdTipsVideos_body_line1 = "Tips on computer-delivered IELTS.";
var APPB2C_registration_prepare_cdTipsVideos_body_cta = "Access Computer Delivered IELTS tips videos";
var APPB2C_registration_prepare_cdFamiliarVideos_header = "Computer Delivered IELTS familiarisation video";
var APPB2C_registration_prepare_cdFamiliarVideos_body_line1 = "These videos will help you understand how the Listening, Reading and Writing sections appear on the computer.";
var APPB2C_registration_prepare_cdFamiliarVideos_body_cta = "Access Computer Delivered IELTS familiarisation videos";
var APPB2C_registration_prepare_cdFamiliarTest_header = "CD IELTS Familiarisation Test";
var APPB2C_registration_prepare_cdFamiliarTest_body_line1 = "Free full sample version of the computer-delivered IELTS test \u2013 the Listening, Reading and Writing sections provide 2 hour 30 minutes of questions, exactly like the real IELTS test.";
var APPB2C_registration_prepare_cdFamiliarTest_body_cta = "Access CD IELTS Familiarisation Test";
var APPB2C_registration_prepare_pbPractice_header = "Practice papers";
var APPB2C_registration_prepare_pbPractice_body_line1 = "Use these tests for timed practice sessions. You can also review and compare answers.";
var APPB2C_registration_prepare_pbPractice_body_cta = "Access Practice tests";
var APPB2C_registration_prepare_webinars_header = "IELTS Webinars";
var APPB2C_registration_prepare_webinars_body_line1 = "Get test ready with free weekly IELTS webinars conducted by our IELTS experts. You\u2019ll also get access to our IELTS Study Pack with:";
var APPB2C_registration_prepare_webinars_body_item1 = "Guidance videos";
var APPB2C_registration_prepare_webinars_body_item2 = "Detailed study plans for all four skills";
var APPB2C_registration_prepare_webinars_body_item3 = "Practice tests";
var APPB2C_registration_prepare_webinars_body_cta = "Sign up for access";
var APPB2C_registration_prepare_gel_ukvi_header = "<0>IELTS Ready Premium</0> for UKVI";
var APPB2C_registration_prepare_gel_ukvi_body_line1 = "Personalised, smart support that works with you and your learning needs to help you reach your required IELTS for UKVI score. Including mock tests and practice resources for all our skills. Powered by GEL IELTS Prep, <0>IELTS Ready Premium</0> will help you succeed.";
var APPB2C_registration_prepare_gel_ielts_header = "<0>IELTS Ready Premium</0>";
var APPB2C_registration_prepare_gel_ielts_body_line1 = "Personalised, smart support that works with you and your learning needs to help you reach your required IELTS score. Including mock tests and practice resources for all our skills. Powered by GEL IELTS Prep, <0>IELTS Ready Premium</0> will help you succeed.";
var APPB2C_registration_prepare_gel_ielts_body_cta = "Get access";
var APPB2C_registration_prepare_gel_disabledMsg = "Access to <0>IELTS Ready Premium</0> is blocked by your test centre. Please contact them to be given access to the British Council's free preparation services.";
var APPB2C_registration_prepare_practice_header = "Practice tests";
var APPB2C_registration_prepare_practice_body_line1 = "Take advantage of our free practice tests to get the IELTS score you need. If you prefer to practice offline, download the tests, blank answer sheets, transcripts and answers from the introductory pages.";
var APPB2C_registration_prepare_practice_body_cta = "Access practice tests";
var APPB2C_registration_prepare_a1_header = "Level A1";
var APPB2C_registration_prepare_a1_cta_v2 = "Prepare for IELTS for UKVI Life Skills \u2013 level A1";
var APPB2C_registration_prepare_a2_header = "Level A2";
var APPB2C_registration_prepare_a2_cta_v2 = "Prepare for IELTS for UKVI Life Skills \u2013 level A2";
var APPB2C_registration_prepare_b1_header = "Level B1";
var APPB2C_registration_prepare_b1_cta_v2 = "Prepare for IELTS for UKVI Life Skills - level B1";
var APPB2C_registration_prepare_ieltsReady_title = "Choose your preparation service";
var APPB2C_registration_prepare_ieltsReady_subTitle = "You have access to the following preparation services:";
var APPB2C_registration_prepare_ieltsReadyMember_header = "<0>IELTS Ready Member</0>";
var APPB2C_registration_prepare_ieltsReadyMember_body = "Wide range of support materials including practice tests, preparation webinars, tips, videos, Road to IELTS content and much more. Our <0>IELTS Ready Member</0> area will help you prepare for your IELTS test with confidence.";
var APPB2C_registration_prepare_ieltsReadyMember_link = "Access for free";
var APPB2C_registration_prepare_ieltsReadyMember_freePrepLink = "Free preparation materials are available on our <0>Take IELTS website</0>";
var APPB2C_registration_prepare_ieltsReadyMember_bookTestInfo = "To access <0>IELTS Ready Premium</0> for free you need to have an upcoming test booked.";
var APPB2C_registration_prepare_ieltsReadyMember_bookTestBtn = "Book a new test";
var APPB2C_registration_prepare_ieltsReadyMember_payBtn = "Pay for your test";
var APPB2C_registration_prepare_ieltsReadyMember_unpaidTestInfo = "To access <0>IELTS Ready Premium</0> for free you need to have paid for your upcoming test.";
var APPB2C_registration_prepare_ieltsReadyMember_label = "Free for everyone";
var APPB2C_registration_incorrectOrganisation_line1 = "It looks like you\u2019re trying to use the Test Taker Portal in a context of an organisation we don\u2019t recognise.";
var APPB2C_registration_incorrectOrganisation_line2 = "Please try following the original link that led you here again or simply use the TTP without any context:";
var APPB2C_registration_incorrectOrganisation_homeLink = "Show me Test Taker Portal without organisation context";
var APPB2C_testCard_lrw = "Listening, Reading & Writing";
var APPB2C_testCard_ls = "Listening & Speaking";
var APPB2C_testCard_speaking = "Speaking test";
var APPB2C_testCard_cd = "IELTS on computer";
var APPB2C_testCard_pb = "IELTS on paper";
var APPB2C_testCard_f2f = "Face to face";
var APPB2C_testCard_vcs = "Video call at the test centre";
var APPB2C_testCard_changeSpeaking = "Change speaking schedule";
var APPB2C_testCard_notLinkedVenue = "Speaking and written test locations are not the same. Plan your travel.";
var APPB2C_testCard_speakingAddress = "Speaking address";
var APPB2C_testCard_arrival = "(please arrive at {{time}})";
var APPB2C_testCard_mixedSlots = "Test will be recorded. Consent implied by booking. Please, choose other if you don't agree.";
var APPB2C_testCard_timeUnknown = "You will receive your test time 48 hours before your test date.";
var APPB2C_testCard_book = "Book";
var APPB2C_testCard_bookFor = "Book for";
var APPB2C_testCard_review = "and review";
var APPB2C_testCard_hideSpeakingTests = "hide speaking tests at this venue";
var APPB2C_testCard_showSpeakingTests = "show speaking tests at this venue";
var APPB2C_testCard_bookingPrice = "Price";
var APPB2C_testCard_bookExam = "Book Test";
var APPB2C_testCard_bookForFree = "Book Test for free";
var APPB2C_common_onlineExamChoose_alert_iolAvailability_title = "IELTS Online test not available";
var APPB2C_common_onlineExamChoose_alert_iolAvailability_content_line1 = "The IELTS Online test is currently unavailable in your location. We apologise for the inconvenience.";
var APPB2C_common_onlineExamChoose_alert_iolAvailability_content_line2 = "Please use the button below to return to the homepage and explore other available test options";
var b2c_default = {
    "APPB2C.auth.forgetPassword.title": APPB2C_auth_forgetPassword_title,
    "APPB2C.auth.forgetPassword.email": APPB2C_auth_forgetPassword_email,
    "APPB2C.auth.forgetPassword.text": APPB2C_auth_forgetPassword_text,
    "APPB2C.auth.forgetPassword.cta": APPB2C_auth_forgetPassword_cta,
    "APPB2C.auth.forgetPassword.success.title": APPB2C_auth_forgetPassword_success_title,
    "APPB2C.auth.forgetPassword.success.msg1": APPB2C_auth_forgetPassword_success_msg1,
    "APPB2C.auth.forgetPassword.success.msg2": APPB2C_auth_forgetPassword_success_msg2,
    "APPB2C.auth.resetPassword.title": APPB2C_auth_resetPassword_title,
    "APPB2C.auth.resetPassword.cta": APPB2C_auth_resetPassword_cta,
    "APPB2C.auth.resetPassword.form.newPassword": APPB2C_auth_resetPassword_form_newPassword,
    "APPB2C.auth.resetPassword.success.title": APPB2C_auth_resetPassword_success_title,
    "APPB2C.auth.resetPassword.success.msg": APPB2C_auth_resetPassword_success_msg,
    "APPB2C.auth.resetPassword.noToken.msg": APPB2C_auth_resetPassword_noToken_msg,
    "APPB2C.auth.resetPassword.noToken.cta": APPB2C_auth_resetPassword_noToken_cta,
    "APPB2C.auth.resetPassword.error.wrongPassword": APPB2C_auth_resetPassword_error_wrongPassword,
    "APPB2C.auth.resetPassword.error.expiredToken": APPB2C_auth_resetPassword_error_expiredToken,
    "APPB2C.auth.resetPassword.error.wrongToken": APPB2C_auth_resetPassword_error_wrongToken,
    "APPB2C.auth.changePassword.title": APPB2C_auth_changePassword_title,
    "APPB2C.auth.changePassword.cta": APPB2C_auth_changePassword_cta,
    "APPB2C.auth.changePassword.id.note": APPB2C_auth_changePassword_id_note,
    "APPB2C.auth.changePassword.id.label": APPB2C_auth_changePassword_id_label,
    "APPB2C.auth.changePassword.id.warn": APPB2C_auth_changePassword_id_warn,
    "APPB2C.auth.changePassword.pass.note": APPB2C_auth_changePassword_pass_note,
    "APPB2C.auth.changePassword.pass.label": APPB2C_auth_changePassword_pass_label,
    "APPB2C.auth.changePassword.error": APPB2C_auth_changePassword_error,
    "APPB2C.auth.changePassword.error.wrongIdNumber": APPB2C_auth_changePassword_error_wrongIdNumber,
    "APPB2C.auth.changePassword.error.wrongPassword": APPB2C_auth_changePassword_error_wrongPassword,
    "APPB2C.auth.changePassword.error.differentPasswords": APPB2C_auth_changePassword_error_differentPasswords,
    "APPB2C.auth.changePassword.error.wrongOldPassword": APPB2C_auth_changePassword_error_wrongOldPassword,
    "APPB2C.cj.basic.cta": APPB2C_cj_basic_cta,
    "APPB2C.cj.basic.goToReview": APPB2C_cj_basic_goToReview,
    "APPB2C.cj.basic.validationError": APPB2C_cj_basic_validationError,
    "APPB2C.cj.basic.scrollLink": APPB2C_cj_basic_scrollLink,
    "APPB2C.cj.basic.selectDate": APPB2C_cj_basic_selectDate,
    "APPB2C.cj.basic.selectTime": APPB2C_cj_basic_selectTime,
    "APPB2C.cj.incorrectOrganisation.title": APPB2C_cj_incorrectOrganisation_title,
    "APPB2C.cj.incorrectOrganisation.line1": APPB2C_cj_incorrectOrganisation_line1,
    "APPB2C.cj.incorrectOrganisation.line2": APPB2C_cj_incorrectOrganisation_line2,
    "APPB2C.cj.incorrectOrganisation.locationsLink": APPB2C_cj_incorrectOrganisation_locationsLink,
    "APPB2C.cj.incorrectOrganisation.locationsLinkUsa": APPB2C_cj_incorrectOrganisation_locationsLinkUsa,
    "APPB2C.cj.incorrectOrganisation.bookNewLink": APPB2C_cj_incorrectOrganisation_bookNewLink,
    "APPB2C.cj.timer.nearEnd.title": APPB2C_cj_timer_nearEnd_title,
    "APPB2C.cj.timer.nearEnd.text": APPB2C_cj_timer_nearEnd_text,
    "APPB2C.cj.timer.nearEnd.minuteCount": APPB2C_cj_timer_nearEnd_minuteCount,
    "APPB2C.cj.timer.nearEnd.minuteCount_other": APPB2C_cj_timer_nearEnd_minuteCount_other,
    "APPB2C.cj.timer.modal.title": APPB2C_cj_timer_modal_title,
    "APPB2C.cj.timer.modal.message": APPB2C_cj_timer_modal_message,
    "APPB2C.cj.timer.modal.cta": APPB2C_cj_timer_modal_cta,
    "APPB2C.cj.rebook.errorModal.title": APPB2C_cj_rebook_errorModal_title,
    "APPB2C.cj.rebook.errorModal.message": APPB2C_cj_rebook_errorModal_message,
    "APPB2C.cj.personalDetails.title": APPB2C_cj_personalDetails_title,
    "APPB2C.cj.personalDetails.gender": APPB2C_cj_personalDetails_gender,
    "APPB2C.cj.personalDetails.forWho.myself": APPB2C_cj_personalDetails_forWho_myself,
    "APPB2C.cj.personalDetails.forWho.child": APPB2C_cj_personalDetails_forWho_child,
    "APPB2C.cj.personalDetails.forWho.childUnder18": APPB2C_cj_personalDetails_forWho_childUnder18,
    "APPB2C.cj.personalDetails.forWho.title": APPB2C_cj_personalDetails_forWho_title,
    "APPB2C.cj.personalDetails.forWho.note": APPB2C_cj_personalDetails_forWho_note,
    "APPB2C.cj.personalDetails.forWho.dob": APPB2C_cj_personalDetails_forWho_dob,
    "APPB2C.cj.personalDetails.visaType.title": APPB2C_cj_personalDetails_visaType_title,
    "APPB2C.cj.personalDetails.visaType.title.child": APPB2C_cj_personalDetails_visaType_title_child,
    "APPB2C.cj.personalDetails.visaType.label": APPB2C_cj_personalDetails_visaType_label,
    "APPB2C.cj.personalDetails.visaType.label.child": APPB2C_cj_personalDetails_visaType_label_child,
    "APPB2C.cj.personalDetails.visaType.link": APPB2C_cj_personalDetails_visaType_link,
    "APPB2C.cj.personalDetails.tncs.title": APPB2C_cj_personalDetails_tncs_title,
    "APPB2C.cj.personalDetails.tncs.agreement": APPB2C_cj_personalDetails_tncs_agreement,
    "APPB2C.cj.personalDetails.login.title": APPB2C_cj_personalDetails_login_title,
    "APPB2C.cj.personalDetails.login.loggedIn": APPB2C_cj_personalDetails_login_loggedIn,
    "APPB2C.cj.personalDetails.login.note": APPB2C_cj_personalDetails_login_note,
    "APPB2C.cj.personalDetails.login.link": APPB2C_cj_personalDetails_login_link,
    "APPB2C.cj.personalDetails.login.emailNotEditable": APPB2C_cj_personalDetails_login_emailNotEditable,
    "APPB2C.cj.personalDetails.login.logout": APPB2C_cj_personalDetails_login_logout,
    "APPB2C.cj.personalDetails.login.btn": APPB2C_cj_personalDetails_login_btn,
    "APPB2C.cj.personalDetails.idNote.whenForChild": APPB2C_cj_personalDetails_idNote_whenForChild,
    "APPB2C.cj.personalDetails.idNote.idMatch": APPB2C_cj_personalDetails_idNote_idMatch,
    "APPB2C.cj.personalDetails.idNote.idMatch.change": APPB2C_cj_personalDetails_idNote_idMatch_change,
    "APPB2C.cj.personalDetails.forms.personal.firstName": APPB2C_cj_personalDetails_forms_personal_firstName,
    "APPB2C.cj.personalDetails.forms.personal.firstMiddleName": APPB2C_cj_personalDetails_forms_personal_firstMiddleName,
    "APPB2C.cj.personalDetails.forms.personal.lastName": APPB2C_cj_personalDetails_forms_personal_lastName,
    "APPB2C.cj.personalDetails.forms.personal.noLastName": APPB2C_cj_personalDetails_forms_personal_noLastName,
    "APPB2C.cj.personalDetails.forms.personal.idMatch": APPB2C_cj_personalDetails_forms_personal_idMatch,
    "APPB2C.cj.personalDetails.forms.personal.dob": APPB2C_cj_personalDetails_forms_personal_dob,
    "APPB2C.cj.personalDetails.forms.personal.sectionTitle": APPB2C_cj_personalDetails_forms_personal_sectionTitle,
    "APPB2C.cj.personalDetails.forms.personal.change": APPB2C_cj_personalDetails_forms_personal_change,
    "APPB2C.cj.personalDetails.forms.personal.name": APPB2C_cj_personalDetails_forms_personal_name,
    "APPB2C.cj.personalDetails.forms.personal.dobCta": APPB2C_cj_personalDetails_forms_personal_dobCta,
    "APPB2C.cj.personalDetails.forms.contact.note": APPB2C_cj_personalDetails_forms_contact_note,
    "APPB2C.cj.personalDetails.forms.contact.email": APPB2C_cj_personalDetails_forms_contact_email,
    "APPB2C.cj.personalDetails.forms.contact.emailInUse": APPB2C_cj_personalDetails_forms_contact_emailInUse,
    "APPB2C.cj.personalDetails.forms.contact.confirmEmail": APPB2C_cj_personalDetails_forms_contact_confirmEmail,
    "APPB2C.cj.personalDetails.forms.contact.mobile": APPB2C_cj_personalDetails_forms_contact_mobile,
    "APPB2C.cj.personalDetails.forms.contact.title": APPB2C_cj_personalDetails_forms_contact_title,
    "APPB2C.cj.personalDetails.forms.contact.password": APPB2C_cj_personalDetails_forms_contact_password,
    "APPB2C.cj.personalDetails.forms.contact.smsConsent": APPB2C_cj_personalDetails_forms_contact_smsConsent,
    "APPB2C.cj.personalDetails.forms.contact.smsNote": APPB2C_cj_personalDetails_forms_contact_smsNote,
    "APPB2C.cj.personalDetails.forms.contact.emailExist": APPB2C_cj_personalDetails_forms_contact_emailExist,
    "APPB2C.cj.personalDetails.forms.address.country": APPB2C_cj_personalDetails_forms_address_country,
    "APPB2C.cj.personalDetails.forms.address.postal": APPB2C_cj_personalDetails_forms_address_postal,
    "APPB2C.cj.personalDetails.forms.address.town": APPB2C_cj_personalDetails_forms_address_town,
    "APPB2C.cj.personalDetails.forms.address.zip": APPB2C_cj_personalDetails_forms_address_zip,
    "APPB2C.cj.personalDetails.forms.address.state": APPB2C_cj_personalDetails_forms_address_state,
    "APPB2C.cj.personalDetails.forms.address.enterManually": APPB2C_cj_personalDetails_forms_address_enterManually,
    "APPB2C.cj.personalDetails.error.missingFirstName": APPB2C_cj_personalDetails_error_missingFirstName,
    "APPB2C.cj.personalDetails.error.missingSurname": APPB2C_cj_personalDetails_error_missingSurname,
    "APPB2C.cj.personalDetails.error.missingEmail": APPB2C_cj_personalDetails_error_missingEmail,
    "APPB2C.cj.personalDetails.error.missingEmailConfirm": APPB2C_cj_personalDetails_error_missingEmailConfirm,
    "APPB2C.cj.personalDetails.error.wrongEmailConfirm": APPB2C_cj_personalDetails_error_wrongEmailConfirm,
    "APPB2C.cj.personalDetails.error.wrongDob": APPB2C_cj_personalDetails_error_wrongDob,
    "APPB2C.cj.personalDetails.error.missingMobile": APPB2C_cj_personalDetails_error_missingMobile,
    "APPB2C.cj.personalDetails.error.missingAddress": APPB2C_cj_personalDetails_error_missingAddress,
    "APPB2C.cj.personalDetails.error.missingSex": APPB2C_cj_personalDetails_error_missingSex,
    "APPB2C.cj.personalDetails.error.missingTown": APPB2C_cj_personalDetails_error_missingTown,
    "APPB2C.cj.personalDetails.error.missingZip": APPB2C_cj_personalDetails_error_missingZip,
    "APPB2C.cj.personalDetails.error.missingState": APPB2C_cj_personalDetails_error_missingState,
    "APPB2C.cj.personalDetails.error.doubleBooking": APPB2C_cj_personalDetails_error_doubleBooking,
    "APPB2C.cj.personalDetails.examTakenModal.title": APPB2C_cj_personalDetails_examTakenModal_title,
    "APPB2C.cj.personalDetails.examTakenModal.message": APPB2C_cj_personalDetails_examTakenModal_message,
    "APPB2C.cj.personalDetails.examTakenModal.cta": APPB2C_cj_personalDetails_examTakenModal_cta,
    "APPB2C.cj.personalDetails.existingRegistrationsModal.title": APPB2C_cj_personalDetails_existingRegistrationsModal_title,
    "APPB2C.cj.personalDetails.existingRegistrationsModal.subtitle": APPB2C_cj_personalDetails_existingRegistrationsModal_subtitle,
    "APPB2C.cj.personalDetails.existingRegistrationsModal.yourWrittenTest": APPB2C_cj_personalDetails_existingRegistrationsModal_yourWrittenTest,
    "APPB2C.cj.personalDetails.existingRegistrationsModal.yourSpeakingTest": APPB2C_cj_personalDetails_existingRegistrationsModal_yourSpeakingTest,
    "APPB2C.cj.personalDetails.existingRegistrationsModal.yourLifeSkillsTest": APPB2C_cj_personalDetails_existingRegistrationsModal_yourLifeSkillsTest,
    "APPB2C.cj.personalDetails.existingRegistrationsModal.viewBooking": APPB2C_cj_personalDetails_existingRegistrationsModal_viewBooking,
    "APPB2C.cj.personalDetails.existingRegistrationsModal.viewCurrentBooking": APPB2C_cj_personalDetails_existingRegistrationsModal_viewCurrentBooking,
    "APPB2C.cj.personalDetails.existingRegistrationsModal.changeDate": APPB2C_cj_personalDetails_existingRegistrationsModal_changeDate,
    "APPB2C.cj.personalDetails.existingRegistrationsModal.bookSomeoneElse": APPB2C_cj_personalDetails_existingRegistrationsModal_bookSomeoneElse,
    "APPB2C.cj.personalDetails.registrationInLockoutPeriodModal.title": APPB2C_cj_personalDetails_registrationInLockoutPeriodModal_title,
    "APPB2C.cj.personalDetails.registrationInLockoutPeriodModal.changeDate": APPB2C_cj_personalDetails_registrationInLockoutPeriodModal_changeDate,
    "APPB2C.cj.personalDetails.registrationInLockoutPeriodModal.line1": APPB2C_cj_personalDetails_registrationInLockoutPeriodModal_line1,
    "APPB2C.cj.personalDetails.registrationInLockoutPeriodModal.line2": APPB2C_cj_personalDetails_registrationInLockoutPeriodModal_line2,
    "APPB2C.cj.childDetails.title": APPB2C_cj_childDetails_title,
    "APPB2C.cj.childDetails.about": APPB2C_cj_childDetails_about,
    "APPB2C.cj.childDetails.aboutNote": APPB2C_cj_childDetails_aboutNote,
    "APPB2C.cj.childDetails.noLastName": APPB2C_cj_childDetails_noLastName,
    "APPB2C.cj.childDetails.note": APPB2C_cj_childDetails_note,
    "APPB2C.cj.childDetails.onTestDay": APPB2C_cj_childDetails_onTestDay,
    "APPB2C.cj.childDetails.forms.personal.idMatch": APPB2C_cj_childDetails_forms_personal_idMatch,
    "APPB2C.cj.childDetails.error.missingFirstName": APPB2C_cj_childDetails_error_missingFirstName,
    "APPB2C.cj.childDetails.error.missingSurname": APPB2C_cj_childDetails_error_missingSurname,
    "APPB2C.cj.childDetails.error.wrongDob": APPB2C_cj_childDetails_error_wrongDob,
    "APPB2C.cj.marketingPrefs": APPB2C_cj_marketingPrefs,
    "APPB2C.cj.idDetails.title": APPB2C_cj_idDetails_title,
    "APPB2C.cj.idDetails.title.child": APPB2C_cj_idDetails_title_child,
    "APPB2C.cj.idDetails.forms.idType": APPB2C_cj_idDetails_forms_idType,
    "APPB2C.cj.idDetails.forms.changeNote": APPB2C_cj_idDetails_forms_changeNote,
    "APPB2C.cj.idDetails.forms.changeNote.child": APPB2C_cj_idDetails_forms_changeNote_child,
    "APPB2C.cj.idDetails.forms.idNumber": APPB2C_cj_idDetails_forms_idNumber,
    "APPB2C.cj.idDetails.forms.issuingAuthority": APPB2C_cj_idDetails_forms_issuingAuthority,
    "APPB2C.cj.idDetails.forms.expiryDate": APPB2C_cj_idDetails_forms_expiryDate,
    "APPB2C.cj.idDetails.forms.documentWithNoExpiryDate": APPB2C_cj_idDetails_forms_documentWithNoExpiryDate,
    "APPB2C.cj.idDetails.typeNames.passport": APPB2C_cj_idDetails_typeNames_passport,
    "APPB2C.cj.idDetails.typeNames.card": APPB2C_cj_idDetails_typeNames_card,
    "APPB2C.cj.idDetails.typeNames.other": APPB2C_cj_idDetails_typeNames_other,
    "APPB2C.cj.idDetails.iolMessage": APPB2C_cj_idDetails_iolMessage,
    "APPB2C.cj.idDetails.idExpired": APPB2C_cj_idDetails_idExpired,
    "APPB2C.cj.idDetails.noteAboutIdentification": APPB2C_cj_idDetails_noteAboutIdentification,
    "APPB2C.cj.idDetails.noteAboutIdentificationIol": APPB2C_cj_idDetails_noteAboutIdentificationIol,
    "APPB2C.cj.idDetails.noteAboutIdentificationUol": APPB2C_cj_idDetails_noteAboutIdentificationUol,
    "APPB2C.cj.idDetails.noteAboutIdentificationIolLink": APPB2C_cj_idDetails_noteAboutIdentificationIolLink,
    "APPB2C.cj.idDetails.noteAboutIdentification.child": APPB2C_cj_idDetails_noteAboutIdentification_child,
    "APPB2C.cj.idDetails.upload.title": APPB2C_cj_idDetails_upload_title,
    "APPB2C.cj.idDetails.upload.mobile": APPB2C_cj_idDetails_upload_mobile,
    "APPB2C.cj.idDetails.upload.instructions.title": APPB2C_cj_idDetails_upload_instructions_title,
    "APPB2C.cj.idDetails.upload.instructions.capture": APPB2C_cj_idDetails_upload_instructions_capture,
    "APPB2C.cj.idDetails.upload.instructions.noBlur": APPB2C_cj_idDetails_upload_instructions_noBlur,
    "APPB2C.cj.idDetails.upload.instructions.directLight": APPB2C_cj_idDetails_upload_instructions_directLight,
    "APPB2C.cj.idDetails.upload.instructions.covers": APPB2C_cj_idDetails_upload_instructions_covers,
    "APPB2C.cj.idDetails.upload.file1": APPB2C_cj_idDetails_upload_file1,
    "APPB2C.cj.idDetails.upload.file2": APPB2C_cj_idDetails_upload_file2,
    "APPB2C.cj.idDetails.upload.fetchError": APPB2C_cj_idDetails_upload_fetchError,
    "APPB2C.cj.idDetails.upload.passport.guidelines.followInstructions": APPB2C_cj_idDetails_upload_passport_guidelines_followInstructions,
    "APPB2C.cj.idDetails.upload.passport.guidelines.crop": APPB2C_cj_idDetails_upload_passport_guidelines_crop,
    "APPB2C.cj.idDetails.upload.passport.guidelines.cover": APPB2C_cj_idDetails_upload_passport_guidelines_cover,
    "APPB2C.cj.idDetails.upload.passport.guidelines.glare": APPB2C_cj_idDetails_upload_passport_guidelines_glare,
    "APPB2C.cj.idDetails.upload.passport.guidelines.watermark": APPB2C_cj_idDetails_upload_passport_guidelines_watermark,
    "APPB2C.cj.idDetails.confirm.title": APPB2C_cj_idDetails_confirm_title,
    "APPB2C.cj.idDetails.confirm.note1": APPB2C_cj_idDetails_confirm_note1,
    "APPB2C.cj.idDetails.confirm.note2": APPB2C_cj_idDetails_confirm_note2,
    "APPB2C.cj.idDetails.confirm.confirm": APPB2C_cj_idDetails_confirm_confirm,
    "APPB2C.cj.idDetails.confirm.change": APPB2C_cj_idDetails_confirm_change,
    "APPB2C.cj.idDetails.confirm.wrongDetailsNote.title": APPB2C_cj_idDetails_confirm_wrongDetailsNote_title,
    "APPB2C.cj.idDetails.confirm.wrongDetailsNote.content": APPB2C_cj_idDetails_confirm_wrongDetailsNote_content,
    "APPB2C.cj.idDetails.error.missingIdNumber": APPB2C_cj_idDetails_error_missingIdNumber,
    "APPB2C.cj.idDetails.error.missingIdExpiry": APPB2C_cj_idDetails_error_missingIdExpiry,
    "APPB2C.cj.idDetails.error.missingIdType": APPB2C_cj_idDetails_error_missingIdType,
    "APPB2C.cj.idDetails.error.wrongIdExpiry": APPB2C_cj_idDetails_error_wrongIdExpiry,
    "APPB2C.cj.idDetails.error.missingIssuingAuthority": APPB2C_cj_idDetails_error_missingIssuingAuthority,
    "APPB2C.cj.idDetails.error.wrongFilename": APPB2C_cj_idDetails_error_wrongFilename,
    "APPB2C.cj.idDetails.eVisa.modal.action.cancel": APPB2C_cj_idDetails_eVisa_modal_action_cancel,
    "APPB2C.cj.idDetails.eVisa.modal.action.confirm": APPB2C_cj_idDetails_eVisa_modal_action_confirm,
    "APPB2C.cj.idDetails.eVisa.modal.header": APPB2C_cj_idDetails_eVisa_modal_header,
    "APPB2C.cj.idDetails.eVisa.modal.line1.v2": APPB2C_cj_idDetails_eVisa_modal_line1_v2,
    "APPB2C.cj.idDetails.eVisa.modal.line2": APPB2C_cj_idDetails_eVisa_modal_line2,
    "APPB2C.cj.idDetails.eVisa.modal.line3": APPB2C_cj_idDetails_eVisa_modal_line3,
    "APPB2C.cj.idDetails.eVisa.modal.line4": APPB2C_cj_idDetails_eVisa_modal_line4,
    "APPB2C.cj.idDetails.eVisa.modal.line5": APPB2C_cj_idDetails_eVisa_modal_line5,
    "APPB2C.cj.ttProfile.title": APPB2C_cj_ttProfile_title,
    "APPB2C.cj.ttProfile.title.child": APPB2C_cj_ttProfile_title_child,
    "APPB2C.cj.ttProfile.note": APPB2C_cj_ttProfile_note,
    "APPB2C.cj.ttProfile.note.child": APPB2C_cj_ttProfile_note_child,
    "APPB2C.cj.ttProfile.forms.personal.sectionTitle": APPB2C_cj_ttProfile_forms_personal_sectionTitle,
    "APPB2C.cj.ttProfile.forms.personal.sectionTitle.child": APPB2C_cj_ttProfile_forms_personal_sectionTitle_child,
    "APPB2C.cj.ttProfile.forms.personal.countryOfNationality": APPB2C_cj_ttProfile_forms_personal_countryOfNationality,
    "APPB2C.cj.ttProfile.forms.personal.countryOfNationality.child": APPB2C_cj_ttProfile_forms_personal_countryOfNationality_child,
    "APPB2C.cj.ttProfile.forms.personal.mainLanguageSpoken": APPB2C_cj_ttProfile_forms_personal_mainLanguageSpoken,
    "APPB2C.cj.ttProfile.forms.personal.mainLanguageSpoken.child": APPB2C_cj_ttProfile_forms_personal_mainLanguageSpoken_child,
    "APPB2C.cj.ttProfile.forms.personal.yearsOfStudyingEnglish": APPB2C_cj_ttProfile_forms_personal_yearsOfStudyingEnglish,
    "APPB2C.cj.ttProfile.forms.personal.yearsOfStudyingEnglish.child": APPB2C_cj_ttProfile_forms_personal_yearsOfStudyingEnglish_child,
    "APPB2C.cj.ttProfile.forms.personal.yearsOfStudyingEnglishSublabel": APPB2C_cj_ttProfile_forms_personal_yearsOfStudyingEnglishSublabel,
    "APPB2C.cj.ttProfile.forms.personal.yearsOfStudyingEnglishSublabel.child": APPB2C_cj_ttProfile_forms_personal_yearsOfStudyingEnglishSublabel_child,
    "APPB2C.cj.ttProfile.forms.personal.educationLevel.384": APPB2C_cj_ttProfile_forms_personal_educationLevel_384,
    "APPB2C.cj.ttProfile.forms.personal.educationLevel.385": APPB2C_cj_ttProfile_forms_personal_educationLevel_385,
    "APPB2C.cj.ttProfile.forms.personal.educationLevel.386": APPB2C_cj_ttProfile_forms_personal_educationLevel_386,
    "APPB2C.cj.ttProfile.forms.personal.educationLevel.387": APPB2C_cj_ttProfile_forms_personal_educationLevel_387,
    "APPB2C.cj.ttProfile.forms.personal.educationLevel.title": APPB2C_cj_ttProfile_forms_personal_educationLevel_title,
    "APPB2C.cj.ttProfile.forms.occupation.sectionTitle": APPB2C_cj_ttProfile_forms_occupation_sectionTitle,
    "APPB2C.cj.ttProfile.forms.occupation.occupationLevel": APPB2C_cj_ttProfile_forms_occupation_occupationLevel,
    "APPB2C.cj.ttProfile.forms.occupation.occupationSector": APPB2C_cj_ttProfile_forms_occupation_occupationSector,
    "APPB2C.cj.ttProfile.forms.interest.sectionTitle": APPB2C_cj_ttProfile_forms_interest_sectionTitle,
    "APPB2C.cj.ttProfile.forms.interest.sectionTitle.child": APPB2C_cj_ttProfile_forms_interest_sectionTitle_child,
    "APPB2C.cj.ttProfile.forms.interest.reasonForTakingTest": APPB2C_cj_ttProfile_forms_interest_reasonForTakingTest,
    "APPB2C.cj.ttProfile.forms.interest.reasonForTakingTest.child": APPB2C_cj_ttProfile_forms_interest_reasonForTakingTest_child,
    "APPB2C.cj.ttProfile.forms.interest.countryBeingApplied": APPB2C_cj_ttProfile_forms_interest_countryBeingApplied,
    "APPB2C.cj.ttProfile.forms.interest.countryBeingApplied.child": APPB2C_cj_ttProfile_forms_interest_countryBeingApplied_child,
    "APPB2C.cj.review.title": APPB2C_cj_review_title,
    "APPB2C.cj.review.note.title": APPB2C_cj_review_note_title,
    "APPB2C.cj.review.note.content": APPB2C_cj_review_note_content,
    "APPB2C.cj.review.registrationError": APPB2C_cj_review_registrationError,
    "APPB2C.cj.review.missingMarketingError": APPB2C_cj_review_missingMarketingError,
    "APPB2C.cj.review.missingMarketingCta": APPB2C_cj_review_missingMarketingCta,
    "APPB2C.cj.review.taxNumberError": APPB2C_cj_review_taxNumberError,
    "APPB2C.cj.review.paymentError": APPB2C_cj_review_paymentError,
    "APPB2C.cj.review.expiredIdError": APPB2C_cj_review_expiredIdError,
    "APPB2C.cj.review.tooHighPromoCodeError": APPB2C_cj_review_tooHighPromoCodeError,
    "APPB2C.cj.review.error.wrongTaxNumber": APPB2C_cj_review_error_wrongTaxNumber,
    "APPB2C.cj.review.error.missingTown": APPB2C_cj_review_error_missingTown,
    "APPB2C.cj.review.error.missingPickups": APPB2C_cj_review_error_missingPickups,
    "APPB2C.cj.review.error.missingOrderAcknowledgement": APPB2C_cj_review_error_missingOrderAcknowledgement,
    "APPB2C.cj.review.error.wrongPaymentConfig": APPB2C_cj_review_error_wrongPaymentConfig,
    "APPB2C.cj.review.error.wrongCountrySetting": APPB2C_cj_review_error_wrongCountrySetting,
    "APPB2C.cj.review.change": APPB2C_cj_review_change,
    "APPB2C.cj.review.changeUkviLsTest": APPB2C_cj_review_changeUkviLsTest,
    "APPB2C.cj.review.changeLrwTest": APPB2C_cj_review_changeLrwTest,
    "APPB2C.cj.review.changeSpeakingTest": APPB2C_cj_review_changeSpeakingTest,
    "APPB2C.cj.review.payOnline.buttonText": APPB2C_cj_review_payOnline_buttonText,
    "APPB2C.cj.review.bookNowNoFee.buttonText": APPB2C_cj_review_bookNowNoFee_buttonText,
    "APPB2C.cj.review.payOnline.sideNote": APPB2C_cj_review_payOnline_sideNote,
    "APPB2C.cj.review.or": APPB2C_cj_review_or,
    "APPB2C.cj.review.payLater.buttonText": APPB2C_cj_review_payLater_buttonText,
    "APPB2C.cj.review.confirmPaymentModal.title": APPB2C_cj_review_confirmPaymentModal_title,
    "APPB2C.cj.review.confirmPaymentModal.note": APPB2C_cj_review_confirmPaymentModal_note,
    "APPB2C.cj.review.confirmPaymentModal.optionsTitle": APPB2C_cj_review_confirmPaymentModal_optionsTitle,
    "APPB2C.cj.review.confirmPaymentModal.btnNote": APPB2C_cj_review_confirmPaymentModal_btnNote,
    "APPB2C.cj.review.payLater.sideNote": APPB2C_cj_review_payLater_sideNote,
    "APPB2C.cj.review.bookTest": APPB2C_cj_review_bookTest,
    "APPB2C.cj.review.paymentNote": APPB2C_cj_review_paymentNote,
    "APPB2C.cj.review.paymentNoteZeroFee": APPB2C_cj_review_paymentNoteZeroFee,
    "APPB2C.cj.review.localization.location": APPB2C_cj_review_localization_location,
    "APPB2C.cj.review.localization.localTime": APPB2C_cj_review_localization_localTime,
    "APPB2C.cj.review.localization.timezone": APPB2C_cj_review_localization_timezone,
    "APPB2C.cj.review.bookingDetails.title": APPB2C_cj_review_bookingDetails_title,
    "APPB2C.cj.review.bookingDetails.lrw.title": APPB2C_cj_review_bookingDetails_lrw_title,
    "APPB2C.cj.review.bookingDetails.lrw.titleLifeSkills": APPB2C_cj_review_bookingDetails_lrw_titleLifeSkills,
    "APPB2C.cj.review.bookingDetails.lrw.title.child": APPB2C_cj_review_bookingDetails_lrw_title_child,
    "APPB2C.cj.review.bookingDetails.lrw.titleLifeSkills.child": APPB2C_cj_review_bookingDetails_lrw_titleLifeSkills_child,
    "APPB2C.cj.review.bookingDetails.speaking.title": APPB2C_cj_review_bookingDetails_speaking_title,
    "APPB2C.cj.review.bookingDetails.speaking.title.child": APPB2C_cj_review_bookingDetails_speaking_title_child,
    "APPB2C.cj.review.personalDetails.title": APPB2C_cj_review_personalDetails_title,
    "APPB2C.cj.review.personalDetails.name": APPB2C_cj_review_personalDetails_name,
    "APPB2C.cj.review.personalDetails.dob": APPB2C_cj_review_personalDetails_dob,
    "APPB2C.cj.review.personalDetails.email": APPB2C_cj_review_personalDetails_email,
    "APPB2C.cj.review.personalDetails.phone": APPB2C_cj_review_personalDetails_phone,
    "APPB2C.cj.review.personalDetails.address": APPB2C_cj_review_personalDetails_address,
    "APPB2C.cj.review.personalDetails.gender": APPB2C_cj_review_personalDetails_gender,
    "APPB2C.cj.review.personalDetails.smsNotificationsConsent": APPB2C_cj_review_personalDetails_smsNotificationsConsent,
    "APPB2C.cj.review.childDetails.title": APPB2C_cj_review_childDetails_title,
    "APPB2C.cj.review.childDetails.onTestDay": APPB2C_cj_review_childDetails_onTestDay,
    "APPB2C.cj.review.childDetails.guardiansTitle": APPB2C_cj_review_childDetails_guardiansTitle,
    "APPB2C.cj.review.childDetails.onTestDayOptions.1": APPB2C_cj_review_childDetails_onTestDayOptions_1,
    "APPB2C.cj.review.childDetails.onTestDayOptions.2": APPB2C_cj_review_childDetails_onTestDayOptions_2,
    "APPB2C.cj.review.childDetails.onTestDayOptions.3": APPB2C_cj_review_childDetails_onTestDayOptions_3,
    "APPB2C.cj.review.idDetails.title": APPB2C_cj_review_idDetails_title,
    "APPB2C.cj.review.idDetails.title.child": APPB2C_cj_review_idDetails_title_child,
    "APPB2C.cj.review.idDetails.issuing": APPB2C_cj_review_idDetails_issuing,
    "APPB2C.cj.review.idDetails.nationality": APPB2C_cj_review_idDetails_nationality,
    "APPB2C.cj.review.payment.title": APPB2C_cj_review_payment_title,
    "APPB2C.cj.review.payment.fee": APPB2C_cj_review_payment_fee,
    "APPB2C.cj.review.payment.total": APPB2C_cj_review_payment_total,
    "APPB2C.cj.review.payment.tax": APPB2C_cj_review_payment_tax,
    "APPB2C.cj.review.payment.promoCodes.promoCode": APPB2C_cj_review_payment_promoCodes_promoCode,
    "APPB2C.cj.review.payment.promoCodes.haveCode": APPB2C_cj_review_payment_promoCodes_haveCode,
    "APPB2C.cj.review.payment.promoCodes.notHaveCode": APPB2C_cj_review_payment_promoCodes_notHaveCode,
    "APPB2C.cj.review.payment.promoCodes.removeCode": APPB2C_cj_review_payment_promoCodes_removeCode,
    "APPB2C.cj.review.payment.promoCodes.remove": APPB2C_cj_review_payment_promoCodes_remove,
    "APPB2C.cj.review.payment.promoCodes.applyCode": APPB2C_cj_review_payment_promoCodes_applyCode,
    "APPB2C.cj.review.payment.promoCodes.discount": APPB2C_cj_review_payment_promoCodes_discount,
    "APPB2C.cj.review.payment.promoCodes.promo": APPB2C_cj_review_payment_promoCodes_promo,
    "APPB2C.cj.review.payment.promoCodes.total": APPB2C_cj_review_payment_promoCodes_total,
    "APPB2C.cj.review.payment.promoCodes.newFee": APPB2C_cj_review_payment_promoCodes_newFee,
    "APPB2C.cj.review.payment.promoCodes.invalidCode": APPB2C_cj_review_payment_promoCodes_invalidCode,
    "APPB2C.cj.review.payment.promoCodes.generalError": APPB2C_cj_review_payment_promoCodes_generalError,
    "APPB2C.cj.review.payment.promoCodes.applied": APPB2C_cj_review_payment_promoCodes_applied,
    "APPB2C.cj.review.invoice.title": APPB2C_cj_review_invoice_title,
    "APPB2C.cj.review.invoice.send": APPB2C_cj_review_invoice_send,
    "APPB2C.cj.review.invoice.type.duplicatePaper": APPB2C_cj_review_invoice_type_duplicatePaper,
    "APPB2C.cj.review.invoice.type.triplicate": APPB2C_cj_review_invoice_type_triplicate,
    "APPB2C.cj.review.invoice.type.duplicateElectronic": APPB2C_cj_review_invoice_type_duplicateElectronic,
    "APPB2C.cj.review.invoice.type.donate": APPB2C_cj_review_invoice_type_donate,
    "APPB2C.cj.review.invoice.subtype.label": APPB2C_cj_review_invoice_subtype_label,
    "APPB2C.cj.review.invoice.subtype.mobileBarcode": APPB2C_cj_review_invoice_subtype_mobileBarcode,
    "APPB2C.cj.review.invoice.subtype.citizenDigitalCertificate": APPB2C_cj_review_invoice_subtype_citizenDigitalCertificate,
    "APPB2C.cj.review.invoice.consent": APPB2C_cj_review_invoice_consent,
    "APPB2C.cj.review.invoice.companyName": APPB2C_cj_review_invoice_companyName,
    "APPB2C.cj.review.invoice.taxCaption.duplicatePaper": APPB2C_cj_review_invoice_taxCaption_duplicatePaper,
    "APPB2C.cj.review.invoice.taxCaption.donate": APPB2C_cj_review_invoice_taxCaption_donate,
    "APPB2C.cj.review.invoice.taxValidation.triplicate": APPB2C_cj_review_invoice_taxValidation_triplicate,
    "APPB2C.cj.review.invoice.taxValidation.mobileBarcode": APPB2C_cj_review_invoice_taxValidation_mobileBarcode,
    "APPB2C.cj.review.invoice.taxValidation.citizenDigitalCertificate": APPB2C_cj_review_invoice_taxValidation_citizenDigitalCertificate,
    "APPB2C.cj.review.invoice.taxValidation.donate": APPB2C_cj_review_invoice_taxValidation_donate,
    "APPB2C.cj.review.acknowledgement.title": APPB2C_cj_review_acknowledgement_title,
    "APPB2C.cj.review.acknowledgement.send": APPB2C_cj_review_acknowledgement_send,
    "APPB2C.cj.review.acknowledgement.myself": APPB2C_cj_review_acknowledgement_myself,
    "APPB2C.cj.review.acknowledgement.anotherPerson": APPB2C_cj_review_acknowledgement_anotherPerson,
    "APPB2C.cj.review.acknowledgement.company": APPB2C_cj_review_acknowledgement_company,
    "APPB2C.cj.review.acknowledgement.fields.companyName": APPB2C_cj_review_acknowledgement_fields_companyName,
    "APPB2C.cj.review.acknowledgement.fields.companyName.subnote": APPB2C_cj_review_acknowledgement_fields_companyName_subnote,
    "APPB2C.cj.review.acknowledgement.fields.firstName": APPB2C_cj_review_acknowledgement_fields_firstName,
    "APPB2C.cj.review.acknowledgement.fields.familyName": APPB2C_cj_review_acknowledgement_fields_familyName,
    "APPB2C.cj.review.acknowledgement.fields.email": APPB2C_cj_review_acknowledgement_fields_email,
    "APPB2C.cj.review.acknowledgement.fields.mobile": APPB2C_cj_review_acknowledgement_fields_mobile,
    "APPB2C.cj.review.acknowledgement.fields.country": APPB2C_cj_review_acknowledgement_fields_country,
    "APPB2C.cj.review.ai.title": APPB2C_cj_review_ai_title,
    "APPB2C.cj.review.ai.note": APPB2C_cj_review_ai_note,
    "APPB2C.cj.review.agent.title": APPB2C_cj_review_agent_title,
    "APPB2C.cj.review.agent.note": APPB2C_cj_review_agent_note,
    "APPB2C.cj.review.agent.label": APPB2C_cj_review_agent_label,
    "APPB2C.cj.review.tncs.title": APPB2C_cj_review_tncs_title,
    "APPB2C.cj.review.tncs.agreement": APPB2C_cj_review_tncs_agreement,
    "APPB2C.cj.review.countryMsg.pakistan": APPB2C_cj_review_countryMsg_pakistan,
    "APPB2C.cj.review.registrationFailedModal.title": APPB2C_cj_review_registrationFailedModal_title,
    "APPB2C.cj.review.registrationFailedModal.message": APPB2C_cj_review_registrationFailedModal_message,
    "APPB2C.cj.review.registrationFailedModal.changedFee.title": APPB2C_cj_review_registrationFailedModal_changedFee_title,
    "APPB2C.cj.review.registrationFailedModal.changedFee.line1": APPB2C_cj_review_registrationFailedModal_changedFee_line1,
    "APPB2C.cj.review.registrationFailedModal.changedFee.line2": APPB2C_cj_review_registrationFailedModal_changedFee_line2,
    "APPB2C.cj.review.registrationFailedModal.changedFee.line3": APPB2C_cj_review_registrationFailedModal_changedFee_line3,
    "APPB2C.cj.review.registrationFailedModal.changedFee.btn": APPB2C_cj_review_registrationFailedModal_changedFee_btn,
    "APPB2C.cj.review.registrationFailedModal.cta": APPB2C_cj_review_registrationFailedModal_cta,
    "APPB2C.cj.finishPayment.processing": APPB2C_cj_finishPayment_processing,
    "APPB2C.cj.finishPayment.pleaseWait": APPB2C_cj_finishPayment_pleaseWait,
    "APPB2C.cj.finishPayment.error": APPB2C_cj_finishPayment_error,
    "APPB2C.cj.bookingComplete.title": APPB2C_cj_bookingComplete_title,
    "APPB2C.cj.bookingComplete.yourBooking": APPB2C_cj_bookingComplete_yourBooking,
    "APPB2C.cj.bookingComplete.note": APPB2C_cj_bookingComplete_note,
    "APPB2C.cj.bookingComplete.noteUolPassportInfo": APPB2C_cj_bookingComplete_noteUolPassportInfo,
    "APPB2C.cj.bookingComplete.paymentFailed": APPB2C_cj_bookingComplete_paymentFailed,
    "APPB2C.cj.bookingComplete.tryAgain": APPB2C_cj_bookingComplete_tryAgain,
    "APPB2C.cj.bookingComplete.otherPaymentOptions": APPB2C_cj_bookingComplete_otherPaymentOptions,
    "APPB2C.cj.bookingComplete.paymentOptions": APPB2C_cj_bookingComplete_paymentOptions,
    "APPB2C.cj.bookingComplete.loadingRegistrationError": APPB2C_cj_bookingComplete_loadingRegistrationError,
    "APPB2C.cj.bookingComplete.loadingPaymentMethodsError": APPB2C_cj_bookingComplete_loadingPaymentMethodsError,
    "APPB2C.cj.bookingComplete.feeDetails.title": APPB2C_cj_bookingComplete_feeDetails_title,
    "APPB2C.cj.bookingComplete.feeDetails.fee": APPB2C_cj_bookingComplete_feeDetails_fee,
    "APPB2C.cj.bookingComplete.feeDetails.newFee": APPB2C_cj_bookingComplete_feeDetails_newFee,
    "APPB2C.cj.bookingComplete.feeDetails.tax": APPB2C_cj_bookingComplete_feeDetails_tax,
    "APPB2C.cj.bookingComplete.feeDetails.discount": APPB2C_cj_bookingComplete_feeDetails_discount,
    "APPB2C.cj.bookingComplete.feeDetails.promo": APPB2C_cj_bookingComplete_feeDetails_promo,
    "APPB2C.cj.bookingComplete.feeDetails.total": APPB2C_cj_bookingComplete_feeDetails_total,
    "APPB2C.cj.bookingComplete.feeDetails.reference": APPB2C_cj_bookingComplete_feeDetails_reference,
    "APPB2C.cj.bookingComplete.feeDetails.zeroFeeNoteLine1": APPB2C_cj_bookingComplete_feeDetails_zeroFeeNoteLine1,
    "APPB2C.cj.bookingComplete.feeDetails.zeroFeeNoteLine2": APPB2C_cj_bookingComplete_feeDetails_zeroFeeNoteLine2,
    "APPB2C.cj.bookingComplete.feeDetails.zeroFeeNoteLine3": APPB2C_cj_bookingComplete_feeDetails_zeroFeeNoteLine3,
    "APPB2C.cj.bookingComplete.prepareNote.title": APPB2C_cj_bookingComplete_prepareNote_title,
    "APPB2C.cj.bookingComplete.prepareNote.note": APPB2C_cj_bookingComplete_prepareNote_note,
    "APPB2C.cj.bookingComplete.prepareNote.accesNote": APPB2C_cj_bookingComplete_prepareNote_accesNote,
    "APPB2C.cj.bookingComplete.prepareNote.view": APPB2C_cj_bookingComplete_prepareNote_view,
    "APPB2C.cj.bookingComplete.prepareNote.counselling.note": APPB2C_cj_bookingComplete_prepareNote_counselling_note,
    "APPB2C.cj.bookingComplete.prepareNote.counselling.view": APPB2C_cj_bookingComplete_prepareNote_counselling_view,
    "APPB2C.cj.bookingComplete.offlinePayment.note.pleaseNote": APPB2C_cj_bookingComplete_offlinePayment_note_pleaseNote,
    "APPB2C.cj.bookingComplete.offlinePayment.note.line1": APPB2C_cj_bookingComplete_offlinePayment_note_line1,
    "APPB2C.cj.bookingComplete.offlinePayment.note.line1.hours": APPB2C_cj_bookingComplete_offlinePayment_note_line1_hours,
    "APPB2C.cj.bookingComplete.offlinePayment.note.line1.timeLeft": APPB2C_cj_bookingComplete_offlinePayment_note_line1_timeLeft,
    "APPB2C.cj.bookingComplete.offlinePayment.note.line2": APPB2C_cj_bookingComplete_offlinePayment_note_line2,
    "APPB2C.cj.bookingComplete.offlinePayment.discounted.note.line1": APPB2C_cj_bookingComplete_offlinePayment_discounted_note_line1,
    "APPB2C.cj.bookingComplete.offlinePayment.discounted.note.line2": APPB2C_cj_bookingComplete_offlinePayment_discounted_note_line2,
    "APPB2C.cj.bookingComplete.offlinePayment.fee": APPB2C_cj_bookingComplete_offlinePayment_fee,
    "APPB2C.cj.bookingComplete.offlinePayment.incTax": APPB2C_cj_bookingComplete_offlinePayment_incTax,
    "APPB2C.cj.bookingComplete.offlinePayment.name": APPB2C_cj_bookingComplete_offlinePayment_name,
    "APPB2C.cj.bookingComplete.offlinePayment.number": APPB2C_cj_bookingComplete_offlinePayment_number,
    "APPB2C.cj.bookingComplete.offlinePayment.code": APPB2C_cj_bookingComplete_offlinePayment_code,
    "APPB2C.cj.bookingComplete.offlinePayment.reference": APPB2C_cj_bookingComplete_offlinePayment_reference,
    "APPB2C.cj.bookingComplete.offlinePayment.description": APPB2C_cj_bookingComplete_offlinePayment_description,
    "APPB2C.cj.bookingComplete.offlinePayment.showDescription": APPB2C_cj_bookingComplete_offlinePayment_showDescription,
    "APPB2C.cj.bookingComplete.offlinePayment.hideDescription": APPB2C_cj_bookingComplete_offlinePayment_hideDescription,
    "APPB2C.cj.bookingComplete.tnc": APPB2C_cj_bookingComplete_tnc,
    "APPB2C.cj.bookingComplete.tncLink": APPB2C_cj_bookingComplete_tncLink,
    "APPB2C.cj.ukviStartPage.title": APPB2C_cj_ukviStartPage_title,
    "APPB2C.cj.ukviStartPage.note1.title": APPB2C_cj_ukviStartPage_note1_title,
    "APPB2C.cj.ukviStartPage.note1.content": APPB2C_cj_ukviStartPage_note1_content,
    "APPB2C.cj.ukviStartPage.testsBelow": APPB2C_cj_ukviStartPage_testsBelow,
    "APPB2C.cj.ukviStartPage.ac.title": APPB2C_cj_ukviStartPage_ac_title,
    "APPB2C.cj.ukviStartPage.ac.content": APPB2C_cj_ukviStartPage_ac_content,
    "APPB2C.cj.ukviStartPage.gt.title": APPB2C_cj_ukviStartPage_gt_title,
    "APPB2C.cj.ukviStartPage.gt.content": APPB2C_cj_ukviStartPage_gt_content,
    "APPB2C.cj.ukviStartPage.lifeSkils.title.v2": APPB2C_cj_ukviStartPage_lifeSkils_title_v2,
    "APPB2C.cj.ukviStartPage.lifeSkils.visaTypes": APPB2C_cj_ukviStartPage_lifeSkils_visaTypes,
    "APPB2C.cj.ukviStartPage.lifeSkils.family": APPB2C_cj_ukviStartPage_lifeSkils_family,
    "APPB2C.cj.ukviStartPage.lifeSkils.extension": APPB2C_cj_ukviStartPage_lifeSkils_extension,
    "APPB2C.cj.ukviStartPage.lifeSkils.citizenship": APPB2C_cj_ukviStartPage_lifeSkils_citizenship,
    "APPB2C.cj.ukviStartPage.lifeSkils.note.title": APPB2C_cj_ukviStartPage_lifeSkils_note_title,
    "APPB2C.cj.ukviStartPage.lifeSkils.note.content.v2": APPB2C_cj_ukviStartPage_lifeSkils_note_content_v2,
    "APPB2C.cj.ukviStartPage.lifeSkils.a1.title.v2": APPB2C_cj_ukviStartPage_lifeSkils_a1_title_v2,
    "APPB2C.cj.ukviStartPage.lifeSkils.a1.content": APPB2C_cj_ukviStartPage_lifeSkils_a1_content,
    "APPB2C.cj.ukviStartPage.lifeSkils.a2.title.v2": APPB2C_cj_ukviStartPage_lifeSkils_a2_title_v2,
    "APPB2C.cj.ukviStartPage.lifeSkils.a2.content": APPB2C_cj_ukviStartPage_lifeSkils_a2_content,
    "APPB2C.cj.ukviStartPage.lifeSkils.b1.title.v2": APPB2C_cj_ukviStartPage_lifeSkils_b1_title_v2,
    "APPB2C.cj.ukviStartPage.lifeSkils.b1.content": APPB2C_cj_ukviStartPage_lifeSkils_b1_content,
    "APPB2C.cj.ukviStartPage.whichUkvi": APPB2C_cj_ukviStartPage_whichUkvi,
    "APPB2C.cj.ukviStartPage.terms": APPB2C_cj_ukviStartPage_terms,
    "APPB2C.cj.onRequest.note": APPB2C_cj_onRequest_note,
    "APPB2C.cj.onRequest.info1": APPB2C_cj_onRequest_info1,
    "APPB2C.cj.onRequest.prefNote": APPB2C_cj_onRequest_prefNote,
    "APPB2C.cj.onRequest.please": APPB2C_cj_onRequest_please,
    "APPB2C.cj.onRequest.form.labels.testRangeQuestion": APPB2C_cj_onRequest_form_labels_testRangeQuestion,
    "APPB2C.cj.onRequest.form.labels.firstname": APPB2C_cj_onRequest_form_labels_firstname,
    "APPB2C.cj.onRequest.form.labels.surname": APPB2C_cj_onRequest_form_labels_surname,
    "APPB2C.cj.onRequest.form.labels.telephone": APPB2C_cj_onRequest_form_labels_telephone,
    "APPB2C.cj.onRequest.form.labels.email": APPB2C_cj_onRequest_form_labels_email,
    "APPB2C.cj.onRequest.form.labels.confirmEmail": APPB2C_cj_onRequest_form_labels_confirmEmail,
    "APPB2C.cj.onRequest.form.submit": APPB2C_cj_onRequest_form_submit,
    "APPB2C.cj.onRequest.form.testRangeOpt.oneMonth": APPB2C_cj_onRequest_form_testRangeOpt_oneMonth,
    "APPB2C.cj.onRequest.form.testRangeOpt.twoMonths": APPB2C_cj_onRequest_form_testRangeOpt_twoMonths,
    "APPB2C.cj.onRequest.form.testRangeOpt.threeMonths": APPB2C_cj_onRequest_form_testRangeOpt_threeMonths,
    "APPB2C.cj.onRequest.form.testRangeOpt.threeMonthsPlus": APPB2C_cj_onRequest_form_testRangeOpt_threeMonthsPlus,
    "APPB2C.cj.onRequest.otherLocations.info1": APPB2C_cj_onRequest_otherLocations_info1,
    "APPB2C.cj.onRequest.otherLocations.choose": APPB2C_cj_onRequest_otherLocations_choose,
    "APPB2C.cj.onRequest.otherLocations.info2": APPB2C_cj_onRequest_otherLocations_info2,
    "APPB2C.cj.onRequest.otherLocations.show": APPB2C_cj_onRequest_otherLocations_show,
    "APPB2C.cj.onRequest.otherLocations.hide": APPB2C_cj_onRequest_otherLocations_hide,
    "APPB2C.cj.onRequest.subtitles.register": APPB2C_cj_onRequest_subtitles_register,
    "APPB2C.cj.onRequest.subtitles.aboutYou": APPB2C_cj_onRequest_subtitles_aboutYou,
    "APPB2C.cj.onRequest.subtitles.aboutPreferences": APPB2C_cj_onRequest_subtitles_aboutPreferences,
    "APPB2C.cj.onRequest.subtitles.markpref": APPB2C_cj_onRequest_subtitles_markpref,
    "APPB2C.cj.onRequest.created.title": APPB2C_cj_onRequest_created_title,
    "APPB2C.cj.onRequest.created.note": APPB2C_cj_onRequest_created_note,
    "APPB2C.cj.onRequest.created.in": APPB2C_cj_onRequest_created_in,
    "APPB2C.cj.onRequest.created.info": APPB2C_cj_onRequest_created_info,
    "APPB2C.cj.onRequest.created.back": APPB2C_cj_onRequest_created_back,
    "APPB2C.cj.ieltsReady.title": APPB2C_cj_ieltsReady_title,
    "APPB2C.cj.ieltsReady.note": APPB2C_cj_ieltsReady_note,
    "APPB2C.cj.ieltsReady.submitBtnText": APPB2C_cj_ieltsReady_submitBtnText,
    "APPB2C.cj.ieltsReady.dobMin": APPB2C_cj_ieltsReady_dobMin,
    "APPB2C.cj.ieltsReady.targetScore.title": APPB2C_cj_ieltsReady_targetScore_title,
    "APPB2C.cj.ieltsReady.targetScore.option": APPB2C_cj_ieltsReady_targetScore_option,
    "APPB2C.cj.ieltsReady.nameWarning": APPB2C_cj_ieltsReady_nameWarning,
    "APPB2C.cj.ieltsReady.description.line1": APPB2C_cj_ieltsReady_description_line1,
    "APPB2C.cj.ieltsReady.description.line2": APPB2C_cj_ieltsReady_description_line2,
    "APPB2C.common.basic.cancel": APPB2C_common_basic_cancel,
    "APPB2C.common.basic.bookPrePaid": APPB2C_common_basic_bookPrePaid,
    "APPB2C.common.basic.notFound.title": APPB2C_common_basic_notFound_title,
    "APPB2C.common.basic.retake": APPB2C_common_basic_retake,
    "APPB2C.common.basic.notFound.msg": APPB2C_common_basic_notFound_msg,
    "APPB2C.common.basic.notFound.goHome": APPB2C_common_basic_notFound_goHome,
    "APPB2C.common.basic.expando.show": APPB2C_common_basic_expando_show,
    "APPB2C.common.basic.expando.collapse": APPB2C_common_basic_expando_collapse,
    "APPB2C.common.basic.notAllowed.title": APPB2C_common_basic_notAllowed_title,
    "APPB2C.common.basic.notAllowed.msg": APPB2C_common_basic_notAllowed_msg,
    "APPB2C.common.basic.errors.title": APPB2C_common_basic_errors_title,
    "APPB2C.common.basic.errors.network": APPB2C_common_basic_errors_network,
    "APPB2C.common.basic.errors.server": APPB2C_common_basic_errors_server,
    "APPB2C.common.basic.errors.unknown": APPB2C_common_basic_errors_unknown,
    "APPB2C.common.basic.errors.contactTestCentre": APPB2C_common_basic_errors_contactTestCentre,
    "APPB2C.common.basic.errors.noTest": APPB2C_common_basic_errors_noTest,
    "APPB2C.common.basic.errors.unableToDownloadFile": APPB2C_common_basic_errors_unableToDownloadFile,
    "APPB2C.common.basic.notLoading.title": APPB2C_common_basic_notLoading_title,
    "APPB2C.common.basic.notLoading.note": APPB2C_common_basic_notLoading_note,
    "APPB2C.common.basic.notLoading.refresh": APPB2C_common_basic_notLoading_refresh,
    "APPB2C.common.basic.dateField.day": APPB2C_common_basic_dateField_day,
    "APPB2C.common.basic.dateField.months": APPB2C_common_basic_dateField_months,
    "APPB2C.common.basic.dateField.month": APPB2C_common_basic_dateField_month,
    "APPB2C.common.basic.dateField.year": APPB2C_common_basic_dateField_year,
    "APPB2C.common.basic.bookingDetails.lrw.title": APPB2C_common_basic_bookingDetails_lrw_title,
    "APPB2C.common.basic.bookingDetails.osrTitle.listening": APPB2C_common_basic_bookingDetails_osrTitle_listening,
    "APPB2C.common.basic.bookingDetails.osrTitle.reading": APPB2C_common_basic_bookingDetails_osrTitle_reading,
    "APPB2C.common.basic.bookingDetails.lrw.results": APPB2C_common_basic_bookingDetails_lrw_results,
    "APPB2C.common.basic.bookingDetails.lrw.cd": APPB2C_common_basic_bookingDetails_lrw_cd,
    "APPB2C.common.basic.bookingDetails.lrw.pb": APPB2C_common_basic_bookingDetails_lrw_pb,
    "APPB2C.common.basic.bookingDetails.lrw.online": APPB2C_common_basic_bookingDetails_lrw_online,
    "APPB2C.common.basic.bookingDetails.speaking.title": APPB2C_common_basic_bookingDetails_speaking_title,
    "APPB2C.common.basic.bookingDetails.speaking.results": APPB2C_common_basic_bookingDetails_speaking_results,
    "APPB2C.common.basic.bookingDetails.speaking.f2f": APPB2C_common_basic_bookingDetails_speaking_f2f,
    "APPB2C.common.basic.bookingDetails.speaking.live": APPB2C_common_basic_bookingDetails_speaking_live,
    "APPB2C.common.basic.bookingDetails.speaking.remote": APPB2C_common_basic_bookingDetails_speaking_remote,
    "APPB2C.common.basic.bookingDetails.speaking.online": APPB2C_common_basic_bookingDetails_speaking_online,
    "APPB2C.common.basic.bookingDetails.lifeSkills.title": APPB2C_common_basic_bookingDetails_lifeSkills_title,
    "APPB2C.common.basic.bookingDetails.lifeSkills.results": APPB2C_common_basic_bookingDetails_lifeSkills_results,
    "APPB2C.common.basic.bookingDetails.arrival": APPB2C_common_basic_bookingDetails_arrival,
    "APPB2C.common.basic.yes": APPB2C_common_basic_yes,
    "APPB2C.common.basic.no": APPB2C_common_basic_no,
    "APPB2C.common.basic.goBack": APPB2C_common_basic_goBack,
    "APPB2C.common.basic.menu": APPB2C_common_basic_menu,
    "APPB2C.common.basic.choose": APPB2C_common_basic_choose,
    "APPB2C.common.basic.pleaseNote": APPB2C_common_basic_pleaseNote,
    "APPB2C.common.basic.loading": APPB2C_common_basic_loading,
    "APPB2C.common.basic.oneSecond": APPB2C_common_basic_oneSecond,
    "APPB2C.common.basic.waitReassurance": APPB2C_common_basic_waitReassurance,
    "APPB2C.common.basic.backToTop": APPB2C_common_basic_backToTop,
    "APPB2C.common.basic.wereSorry": APPB2C_common_basic_wereSorry,
    "APPB2C.common.basic.failure": APPB2C_common_basic_failure,
    "APPB2C.common.basic.close": APPB2C_common_basic_close,
    "APPB2C.common.basic.copy": APPB2C_common_basic_copy,
    "APPB2C.common.basic.copied": APPB2C_common_basic_copied,
    "APPB2C.common.basic.externalLinkTitle": APPB2C_common_basic_externalLinkTitle,
    "APPB2C.common.basic.forms.requiredMessage": APPB2C_common_basic_forms_requiredMessage,
    "APPB2C.common.basic.forms.maxLengthMessage": APPB2C_common_basic_forms_maxLengthMessage,
    "APPB2C.common.basic.forms.onlyLatin": APPB2C_common_basic_forms_onlyLatin,
    "APPB2C.common.basic.forms.unsupportedChars": APPB2C_common_basic_forms_unsupportedChars,
    "APPB2C.common.basic.forms.idNumber": APPB2C_common_basic_forms_idNumber,
    "APPB2C.common.basic.forms.idNumber.brackets": APPB2C_common_basic_forms_idNumber_brackets,
    "APPB2C.common.basic.forms.idMaxLength": APPB2C_common_basic_forms_idMaxLength,
    "APPB2C.common.basic.forms.idMaxLength2": APPB2C_common_basic_forms_idMaxLength2,
    "APPB2C.common.basic.forms.idExpiration": APPB2C_common_basic_forms_idExpiration,
    "APPB2C.common.basic.forms.idProofRequired": APPB2C_common_basic_forms_idProofRequired,
    "APPB2C.common.basic.forms.mobileLength": APPB2C_common_basic_forms_mobileLength,
    "APPB2C.common.basic.forms.mobileBypass": APPB2C_common_basic_forms_mobileBypass,
    "APPB2C.common.basic.forms.validMobile": APPB2C_common_basic_forms_validMobile,
    "APPB2C.common.basic.forms.requiredNoSurmane": APPB2C_common_basic_forms_requiredNoSurmane,
    "APPB2C.common.basic.forms.dobOutOfRange": APPB2C_common_basic_forms_dobOutOfRange,
    "APPB2C.common.basic.forms.dobMin": APPB2C_common_basic_forms_dobMin,
    "APPB2C.common.basic.forms.dobMinIol": APPB2C_common_basic_forms_dobMinIol,
    "APPB2C.common.basic.forms.minorDobMax": APPB2C_common_basic_forms_minorDobMax,
    "APPB2C.common.basic.forms.minorDobMin": APPB2C_common_basic_forms_minorDobMin,
    "APPB2C.common.basic.forms.postCodeMessage": APPB2C_common_basic_forms_postCodeMessage,
    "APPB2C.common.basic.forms.postCodeNotFound": APPB2C_common_basic_forms_postCodeNotFound,
    "APPB2C.common.basic.forms.firstNameMaxLength": APPB2C_common_basic_forms_firstNameMaxLength,
    "APPB2C.common.basic.forms.surnameMaxLength": APPB2C_common_basic_forms_surnameMaxLength,
    "APPB2C.common.basic.forms.addressMaxLength": APPB2C_common_basic_forms_addressMaxLength,
    "APPB2C.common.basic.forms.townMaxLength": APPB2C_common_basic_forms_townMaxLength,
    "APPB2C.common.basic.forms.postCodeMaxLength": APPB2C_common_basic_forms_postCodeMaxLength,
    "APPB2C.common.basic.forms.stateMaxLength": APPB2C_common_basic_forms_stateMaxLength,
    "APPB2C.common.basic.ok": APPB2C_common_basic_ok,
    "APPB2C.common.basic.change": APPB2C_common_basic_change,
    "APPB2C.common.basic.edit": APPB2C_common_basic_edit,
    "APPB2C.common.basic.add": APPB2C_common_basic_add,
    "APPB2C.common.basic.upload": APPB2C_common_basic_upload,
    "APPB2C.common.basic.validationError": APPB2C_common_basic_validationError,
    "APPB2C.common.basic.on": APPB2C_common_basic_on,
    "APPB2C.common.basic.venue.isAccessible": APPB2C_common_basic_venue_isAccessible,
    "APPB2C.common.specialReqs.AMANU": APPB2C_common_specialReqs_AMANU,
    "APPB2C.common.specialReqs.ANTHR": APPB2C_common_specialReqs_ANTHR,
    "APPB2C.common.specialReqs.BTP": APPB2C_common_specialReqs_BTP,
    "APPB2C.common.specialReqs.BWP": APPB2C_common_specialReqs_BWP,
    "APPB2C.common.specialReqs.EPTP": APPB2C_common_specialReqs_EPTP,
    "APPB2C.common.specialReqs.ET": APPB2C_common_specialReqs_ET,
    "APPB2C.common.specialReqs.LRTV": APPB2C_common_specialReqs_LRTV,
    "APPB2C.common.specialReqs.SAE": APPB2C_common_specialReqs_SAE,
    "APPB2C.common.specialReqs.VAS": APPB2C_common_specialReqs_VAS,
    "APPB2C.common.specialReqs.WP": APPB2C_common_specialReqs_WP,
    "APPB2C.common.general.next": APPB2C_common_general_next,
    "APPB2C.common.general.previous": APPB2C_common_general_previous,
    "APPB2C.common.general.remove": APPB2C_common_general_remove,
    "APPB2C.common.general.regNotFound": APPB2C_common_general_regNotFound,
    "APPB2C.common.general.steps": APPB2C_common_general_steps,
    "APPB2C.common.general.stepsContinued": APPB2C_common_general_stepsContinued,
    "APPB2C.common.nav.login": APPB2C_common_nav_login,
    "APPB2C.common.nav.ttp": APPB2C_common_nav_ttp,
    "APPB2C.common.nav.logout": APPB2C_common_nav_logout,
    "APPB2C.common.nav.logoutModal.title": APPB2C_common_nav_logoutModal_title,
    "APPB2C.common.nav.logoutModal.message": APPB2C_common_nav_logoutModal_message,
    "APPB2C.common.nav.logoutModal.question": APPB2C_common_nav_logoutModal_question,
    "APPB2C.common.nav.logoutModal.confirm": APPB2C_common_nav_logoutModal_confirm,
    "APPB2C.common.nav.hello": APPB2C_common_nav_hello,
    "APPB2C.common.nav.chooseLanguage": APPB2C_common_nav_chooseLanguage,
    "APPB2C.common.nav.bookNewTest": APPB2C_common_nav_bookNewTest,
    "APPB2C.common.nav.resultsTests": APPB2C_common_nav_resultsTests,
    "APPB2C.common.nav.myAccount": APPB2C_common_nav_myAccount,
    "APPB2C.common.nav.helpAndContact": APPB2C_common_nav_helpAndContact,
    "APPB2C.common.nav.preparation": APPB2C_common_nav_preparation,
    "APPB2C.common.examType.ors.ac": APPB2C_common_examType_ors_ac,
    "APPB2C.common.examType.ors.gt": APPB2C_common_examType_ors_gt,
    "APPB2C.common.examType.ors.osr.ac": APPB2C_common_examType_ors_osr_ac,
    "APPB2C.common.examType.ors.osr.gt": APPB2C_common_examType_ors_osr_gt,
    "APPB2C.common.examType.iol.ac": APPB2C_common_examType_iol_ac,
    "APPB2C.common.examType.iol.gt": APPB2C_common_examType_iol_gt,
    "APPB2C.common.examType.uol.ac": APPB2C_common_examType_uol_ac,
    "APPB2C.common.examType.uol.gt": APPB2C_common_examType_uol_gt,
    "APPB2C.common.examType.ukvi.ac": APPB2C_common_examType_ukvi_ac,
    "APPB2C.common.examType.ukvi.gt": APPB2C_common_examType_ukvi_gt,
    "APPB2C.common.examType.ukvi.osr.ac": APPB2C_common_examType_ukvi_osr_ac,
    "APPB2C.common.examType.ukvi.osr.gt": APPB2C_common_examType_ukvi_osr_gt,
    "APPB2C.common.examType.ukvi.lfska1.v2": APPB2C_common_examType_ukvi_lfska1_v2,
    "APPB2C.common.examType.ukvi.lfska2.v2": APPB2C_common_examType_ukvi_lfska2_v2,
    "APPB2C.common.examType.ukvi.lfskb1.v2": APPB2C_common_examType_ukvi_lfskb1_v2,
    "APPB2C.common.startPage.title": APPB2C_common_startPage_title,
    "APPB2C.common.startPage.subtitle": APPB2C_common_startPage_subtitle,
    "APPB2C.common.startPage.ielts": APPB2C_common_startPage_ielts,
    "APPB2C.common.startPage.ieltsUkvi": APPB2C_common_startPage_ieltsUkvi,
    "APPB2C.common.startPage.book": APPB2C_common_startPage_book,
    "APPB2C.common.startPage.options.ac": APPB2C_common_startPage_options_ac,
    "APPB2C.common.startPage.options.gt": APPB2C_common_startPage_options_gt,
    "APPB2C.common.startPage.options.ukvi.v2": APPB2C_common_startPage_options_ukvi_v2,
    "APPB2C.common.startPage.hero.title": APPB2C_common_startPage_hero_title,
    "APPB2C.common.startPage.hero.subtitle": APPB2C_common_startPage_hero_subtitle,
    "APPB2C.common.startPage.hero.cta": APPB2C_common_startPage_hero_cta,
    "APPB2C.common.startPage.whichIELTS": APPB2C_common_startPage_whichIELTS,
    "APPB2C.common.startPage.readTnCs": APPB2C_common_startPage_readTnCs,
    "APPB2C.common.startPage.endNote": APPB2C_common_startPage_endNote,
    "APPB2C.common.startPage.tncs": APPB2C_common_startPage_tncs,
    "APPB2C.common.startPage.description.ac": APPB2C_common_startPage_description_ac,
    "APPB2C.common.startPage.description.gt": APPB2C_common_startPage_description_gt,
    "APPB2C.common.startPage.description.ukvi": APPB2C_common_startPage_description_ukvi,
    "APPB2C.common.startPage.upcoming.title": APPB2C_common_startPage_upcoming_title,
    "APPB2C.common.startPage.upcoming.manage": APPB2C_common_startPage_upcoming_manage,
    "APPB2C.common.startPage.upcoming.prepare": APPB2C_common_startPage_upcoming_prepare,
    "APPB2C.common.startPage.upcoming.cd": APPB2C_common_startPage_upcoming_cd,
    "APPB2C.common.startPage.upcoming.pb": APPB2C_common_startPage_upcoming_pb,
    "APPB2C.common.startPage.upcoming.live": APPB2C_common_startPage_upcoming_live,
    "APPB2C.common.startPage.upcoming.lifeSkills": APPB2C_common_startPage_upcoming_lifeSkills,
    "APPB2C.common.startPage.upcoming.remote": APPB2C_common_startPage_upcoming_remote,
    "APPB2C.common.startPage.upcoming.empty": APPB2C_common_startPage_upcoming_empty,
    "APPB2C.common.startPage.upcoming.noSpeaking": APPB2C_common_startPage_upcoming_noSpeaking,
    "APPB2C.common.startPage.upcoming.noTime": APPB2C_common_startPage_upcoming_noTime,
    "APPB2C.common.startPage.upcoming.pay": APPB2C_common_startPage_upcoming_pay,
    "APPB2C.common.startPage.upcoming.pastPaymentDeadline": APPB2C_common_startPage_upcoming_pastPaymentDeadline,
    "APPB2C.common.startPage.upcoming.missing.id": APPB2C_common_startPage_upcoming_missing_id,
    "APPB2C.common.startPage.upcoming.missing.medical": APPB2C_common_startPage_upcoming_missing_medical,
    "APPB2C.common.startPage.upcoming.missing.payment": APPB2C_common_startPage_upcoming_missing_payment,
    "APPB2C.common.startPage.upcoming.missing.childConsent": APPB2C_common_startPage_upcoming_missing_childConsent,
    "APPB2C.common.startPage.upcoming.osr.note": APPB2C_common_startPage_upcoming_osr_note,
    "APPB2C.common.startPage.past.title": APPB2C_common_startPage_past_title,
    "APPB2C.common.startPage.past.cd": APPB2C_common_startPage_past_cd,
    "APPB2C.common.startPage.past.pb": APPB2C_common_startPage_past_pb,
    "APPB2C.common.startPage.past.score": APPB2C_common_startPage_past_score,
    "APPB2C.common.startPage.past.osr.newScore": APPB2C_common_startPage_past_osr_newScore,
    "APPB2C.common.startPage.past.osr.originalScore": APPB2C_common_startPage_past_osr_originalScore,
    "APPB2C.common.startPage.past.osr.viewRetakeLink": APPB2C_common_startPage_past_osr_viewRetakeLink,
    "APPB2C.common.startPage.past.osr.note.confirmed": APPB2C_common_startPage_past_osr_note_confirmed,
    "APPB2C.common.startPage.past.osr.note.awaiting": APPB2C_common_startPage_past_osr_note_awaiting,
    "APPB2C.common.startPage.past.osr.note.hasResults": APPB2C_common_startPage_past_osr_note_hasResults,
    "APPB2C.common.startPage.past.scoreLifeSkills": APPB2C_common_startPage_past_scoreLifeSkills,
    "APPB2C.common.startPage.past.rebook": APPB2C_common_startPage_past_rebook,
    "APPB2C.common.startPage.past.empty": APPB2C_common_startPage_past_empty,
    "APPB2C.common.startPage.past.upcomingResults": APPB2C_common_startPage_past_upcomingResults,
    "APPB2C.common.startPage.recent.title": APPB2C_common_startPage_recent_title,
    "APPB2C.common.startPage.recent.cta": APPB2C_common_startPage_recent_cta,
    "APPB2C.common.startPage.candidates.showingFor": APPB2C_common_startPage_candidates_showingFor,
    "APPB2C.common.startPage.candidates.nowAdult": APPB2C_common_startPage_candidates_nowAdult,
    "APPB2C.common.startPage.common.cancelled": APPB2C_common_startPage_common_cancelled,
    "APPB2C.common.startPage.missing.cancel": APPB2C_common_startPage_missing_cancel,
    "APPB2C.common.startPage.missing.ttData.title": APPB2C_common_startPage_missing_ttData_title,
    "APPB2C.common.startPage.missing.ttData.line1": APPB2C_common_startPage_missing_ttData_line1,
    "APPB2C.common.startPage.missing.ttData.line2": APPB2C_common_startPage_missing_ttData_line2,
    "APPB2C.common.startPage.missing.ttData.line3": APPB2C_common_startPage_missing_ttData_line3,
    "APPB2C.common.startPage.missing.ttData.cta": APPB2C_common_startPage_missing_ttData_cta,
    "APPB2C.common.startPage.missing.ttData.firstName": APPB2C_common_startPage_missing_ttData_firstName,
    "APPB2C.common.startPage.missing.ttData.lastName": APPB2C_common_startPage_missing_ttData_lastName,
    "APPB2C.common.startPage.missing.ttData.noLastName": APPB2C_common_startPage_missing_ttData_noLastName,
    "APPB2C.common.startPage.missing.ttData.dob": APPB2C_common_startPage_missing_ttData_dob,
    "APPB2C.common.startPage.missing.marketing.title": APPB2C_common_startPage_missing_marketing_title,
    "APPB2C.common.startPage.missing.marketing.opts.BcOnly": APPB2C_common_startPage_missing_marketing_opts_BcOnly,
    "APPB2C.common.startPage.missing.marketing.opts.BcAndThirdParties": APPB2C_common_startPage_missing_marketing_opts_BcAndThirdParties,
    "APPB2C.common.startPage.missing.marketing.opts.DoNotSend": APPB2C_common_startPage_missing_marketing_opts_DoNotSend,
    "APPB2C.common.startPage.missing.marketing.notes.main": APPB2C_common_startPage_missing_marketing_notes_main,
    "APPB2C.common.startPage.missing.marketing.notes.full1": APPB2C_common_startPage_missing_marketing_notes_full1,
    "APPB2C.common.startPage.missing.marketing.notes.full2": APPB2C_common_startPage_missing_marketing_notes_full2,
    "APPB2C.common.startPage.missing.marketing.notes.link": APPB2C_common_startPage_missing_marketing_notes_link,
    "APPB2C.common.startPage.missing.marketing.notes.full3": APPB2C_common_startPage_missing_marketing_notes_full3,
    "APPB2C.common.startPage.missing.marketing.cta": APPB2C_common_startPage_missing_marketing_cta,
    "APPB2C.common.startPage.error.title": APPB2C_common_startPage_error_title,
    "APPB2C.common.startPage.error.body": APPB2C_common_startPage_error_body,
    "APPB2C.common.startPage.error.cta": APPB2C_common_startPage_error_cta,
    "APPB2C.common.account.title": APPB2C_common_account_title,
    "APPB2C.common.account.error": APPB2C_common_account_error,
    "APPB2C.common.account.details.name": APPB2C_common_account_details_name,
    "APPB2C.common.account.details.email.note": APPB2C_common_account_details_email_note,
    "APPB2C.common.account.details.email.username": APPB2C_common_account_details_email_username,
    "APPB2C.common.account.details.email.label": APPB2C_common_account_details_email_label,
    "APPB2C.common.account.details.email.set": APPB2C_common_account_details_email_set,
    "APPB2C.common.account.details.email.confirm": APPB2C_common_account_details_email_confirm,
    "APPB2C.common.account.details.email.save": APPB2C_common_account_details_email_save,
    "APPB2C.common.account.details.email.success": APPB2C_common_account_details_email_success,
    "APPB2C.common.account.details.email.maxLength": APPB2C_common_account_details_email_maxLength,
    "APPB2C.common.account.details.email.mismatch": APPB2C_common_account_details_email_mismatch,
    "APPB2C.common.account.details.email.validEmail": APPB2C_common_account_details_email_validEmail,
    "APPB2C.common.account.details.psw.label": APPB2C_common_account_details_psw_label,
    "APPB2C.common.account.details.psw.change": APPB2C_common_account_details_psw_change,
    "APPB2C.common.account.details.psw.show": APPB2C_common_account_details_psw_show,
    "APPB2C.common.account.details.psw.old": APPB2C_common_account_details_psw_old,
    "APPB2C.common.account.details.psw.new": APPB2C_common_account_details_psw_new,
    "APPB2C.common.account.details.psw.success": APPB2C_common_account_details_psw_success,
    "APPB2C.common.account.details.psw.requirements.levels.0": APPB2C_common_account_details_psw_requirements_levels_0,
    "APPB2C.common.account.details.psw.requirements.levels.1": APPB2C_common_account_details_psw_requirements_levels_1,
    "APPB2C.common.account.details.psw.requirements.levels.2": APPB2C_common_account_details_psw_requirements_levels_2,
    "APPB2C.common.account.details.psw.requirements.levels.3": APPB2C_common_account_details_psw_requirements_levels_3,
    "APPB2C.common.account.details.psw.requirements.levels.4": APPB2C_common_account_details_psw_requirements_levels_4,
    "APPB2C.common.account.details.psw.requirements.ok": APPB2C_common_account_details_psw_requirements_ok,
    "APPB2C.common.account.details.psw.requirements.mustHave": APPB2C_common_account_details_psw_requirements_mustHave,
    "APPB2C.common.account.details.psw.requirements.shouldHave": APPB2C_common_account_details_psw_requirements_shouldHave,
    "APPB2C.common.account.details.psw.requirements.strength": APPB2C_common_account_details_psw_requirements_strength,
    "APPB2C.common.account.details.psw.requirements.reqs.length": APPB2C_common_account_details_psw_requirements_reqs_length,
    "APPB2C.common.account.details.psw.requirements.reqs.lower": APPB2C_common_account_details_psw_requirements_reqs_lower,
    "APPB2C.common.account.details.psw.requirements.reqs.upper": APPB2C_common_account_details_psw_requirements_reqs_upper,
    "APPB2C.common.account.details.psw.requirements.reqs.number": APPB2C_common_account_details_psw_requirements_reqs_number,
    "APPB2C.common.account.details.psw.requirements.reqs.special": APPB2C_common_account_details_psw_requirements_reqs_special,
    "APPB2C.common.account.details.psw.requirements.maxLength": APPB2C_common_account_details_psw_requirements_maxLength,
    "APPB2C.common.account.details.psw.requirements.tooWeak": APPB2C_common_account_details_psw_requirements_tooWeak,
    "APPB2C.common.account.details.subnote.address": APPB2C_common_account_details_subnote_address,
    "APPB2C.common.account.details.subnote.city": APPB2C_common_account_details_subnote_city,
    "APPB2C.common.account.marketing.title": APPB2C_common_account_marketing_title,
    "APPB2C.common.account.marketing.success": APPB2C_common_account_marketing_success,
    "APPB2C.common.account.smsNotificationSettings.title": APPB2C_common_account_smsNotificationSettings_title,
    "APPB2C.common.account.smsNotificationSettings.mobileLabel": APPB2C_common_account_smsNotificationSettings_mobileLabel,
    "APPB2C.common.account.smsNotificationSettings.success": APPB2C_common_account_smsNotificationSettings_success,
    "APPB2C.common.account.terms.title": APPB2C_common_account_terms_title,
    "APPB2C.common.account.terms.disclaimer": APPB2C_common_account_terms_disclaimer,
    "APPB2C.common.account.terms.extra.title": APPB2C_common_account_terms_extra_title,
    "APPB2C.common.account.terms.extra.line1": APPB2C_common_account_terms_extra_line1,
    "APPB2C.common.account.terms.extra.line2": APPB2C_common_account_terms_extra_line2,
    "APPB2C.common.account.terms.extra.line3.1": APPB2C_common_account_terms_extra_line3_1,
    "APPB2C.common.account.terms.extra.line3.2": APPB2C_common_account_terms_extra_line3_2,
    "APPB2C.common.account.terms.download": APPB2C_common_account_terms_download,
    "APPB2C.common.account.terms.previous": APPB2C_common_account_terms_previous,
    "APPB2C.common.account.terms.cta": APPB2C_common_account_terms_cta,
    "APPB2C.common.helpAndContact.title": APPB2C_common_helpAndContact_title,
    "APPB2C.common.helpAndContact.selectExamLabel": APPB2C_common_helpAndContact_selectExamLabel,
    "APPB2C.common.helpAndContact.ieltsReference": APPB2C_common_helpAndContact_ieltsReference,
    "APPB2C.common.helpAndContact.noTests.header": APPB2C_common_helpAndContact_noTests_header,
    "APPB2C.common.helpAndContact.noTests.bookNewBtn": APPB2C_common_helpAndContact_noTests_bookNewBtn,
    "APPB2C.common.helpAndContact.noTests.contactLink": APPB2C_common_helpAndContact_noTests_contactLink,
    "APPB2C.common.helpAndContact.icContent.header": APPB2C_common_helpAndContact_icContent_header,
    "APPB2C.common.helpAndContact.icContent.emailLabel": APPB2C_common_helpAndContact_icContent_emailLabel,
    "APPB2C.common.helpAndContact.icContent.phoneLabel": APPB2C_common_helpAndContact_icContent_phoneLabel,
    "APPB2C.common.helpAndContact.icContent.referenceReminder": APPB2C_common_helpAndContact_icContent_referenceReminder,
    "APPB2C.common.helpAndContact.icContent.commonQuestionsHeader": APPB2C_common_helpAndContact_icContent_commonQuestionsHeader,
    "APPB2C.common.helpAndContact.actionSection.icHeader": APPB2C_common_helpAndContact_actionSection_icHeader,
    "APPB2C.common.helpAndContact.actionSection.iolHeader": APPB2C_common_helpAndContact_actionSection_iolHeader,
    "APPB2C.common.helpAndContact.actionSection.faqLabel": APPB2C_common_helpAndContact_actionSection_faqLabel,
    "APPB2C.common.helpAndContact.actionSection.faqLink": APPB2C_common_helpAndContact_actionSection_faqLink,
    "APPB2C.common.helpAndContact.actionSection.launchChatLabel": APPB2C_common_helpAndContact_actionSection_launchChatLabel,
    "APPB2C.common.helpAndContact.actionSection.launchChatBtn": APPB2C_common_helpAndContact_actionSection_launchChatBtn,
    "APPB2C.common.helpAndContact.actionSection.contactFormLabel": APPB2C_common_helpAndContact_actionSection_contactFormLabel,
    "APPB2C.common.helpAndContact.actionSection.contactFormLabelInCentre": APPB2C_common_helpAndContact_actionSection_contactFormLabelInCentre,
    "APPB2C.common.helpAndContact.actionSection.contactFormLink": APPB2C_common_helpAndContact_actionSection_contactFormLink,
    "APPB2C.common.helpAndContact.form.back": APPB2C_common_helpAndContact_form_back,
    "APPB2C.common.helpAndContact.form.title": APPB2C_common_helpAndContact_form_title,
    "APPB2C.common.helpAndContact.form.label": APPB2C_common_helpAndContact_form_label,
    "APPB2C.common.helpAndContact.form.complaint.title": APPB2C_common_helpAndContact_form_complaint_title,
    "APPB2C.common.helpAndContact.form.complaint.radio.other": APPB2C_common_helpAndContact_form_complaint_radio_other,
    "APPB2C.common.helpAndContact.form.complaint.radio.complaint": APPB2C_common_helpAndContact_form_complaint_radio_complaint,
    "APPB2C.common.helpAndContact.form.complaint.moreInfoLinkTitle": APPB2C_common_helpAndContact_form_complaint_moreInfoLinkTitle,
    "APPB2C.common.helpAndContact.form.complaint.moreInfoLink": APPB2C_common_helpAndContact_form_complaint_moreInfoLink,
    "APPB2C.common.helpAndContact.form.validation": APPB2C_common_helpAndContact_form_validation,
    "APPB2C.common.helpAndContact.form.response": APPB2C_common_helpAndContact_form_response,
    "APPB2C.common.helpAndContact.form.legal": APPB2C_common_helpAndContact_form_legal,
    "APPB2C.common.helpAndContact.form.submit": APPB2C_common_helpAndContact_form_submit,
    "APPB2C.common.helpAndContact.form.thanks.title": APPB2C_common_helpAndContact_form_thanks_title,
    "APPB2C.common.helpAndContact.form.thanks.banner": APPB2C_common_helpAndContact_form_thanks_banner,
    "APPB2C.common.helpAndContact.form.thanks.info": APPB2C_common_helpAndContact_form_thanks_info,
    "APPB2C.common.helpAndContact.form.thanks.back": APPB2C_common_helpAndContact_form_thanks_back,
    "APPB2C.common.preparation.title": APPB2C_common_preparation_title,
    "APPB2C.common.preparation.selectExamLabel": APPB2C_common_preparation_selectExamLabel,
    "APPB2C.common.preparation.viewTestBtn": APPB2C_common_preparation_viewTestBtn,
    "APPB2C.common.preparation.noTests.header": APPB2C_common_preparation_noTests_header,
    "APPB2C.common.preparation.noTests.contactLink": APPB2C_common_preparation_noTests_contactLink,
    "APPB2C.common.draft.title": APPB2C_common_draft_title,
    "APPB2C.common.draft.note.line1": APPB2C_common_draft_note_line1,
    "APPB2C.common.draft.note.line2": APPB2C_common_draft_note_line2,
    "APPB2C.common.draft.note.line3": APPB2C_common_draft_note_line3,
    "APPB2C.common.draft.difference": APPB2C_common_draft_difference,
    "APPB2C.common.draft.edit": APPB2C_common_draft_edit,
    "APPB2C.common.draft.personal.header": APPB2C_common_draft_personal_header,
    "APPB2C.common.draft.personal.title": APPB2C_common_draft_personal_title,
    "APPB2C.common.draft.personal.note": APPB2C_common_draft_personal_note,
    "APPB2C.common.draft.personal.cta": APPB2C_common_draft_personal_cta,
    "APPB2C.common.draft.id.header": APPB2C_common_draft_id_header,
    "APPB2C.common.draft.id.title": APPB2C_common_draft_id_title,
    "APPB2C.common.draft.id.note": APPB2C_common_draft_id_note,
    "APPB2C.common.draft.id.documentWithNoExpiryDate": APPB2C_common_draft_id_documentWithNoExpiryDate,
    "APPB2C.common.draft.id.issuingAuthority": APPB2C_common_draft_id_issuingAuthority,
    "APPB2C.common.draft.id.cta": APPB2C_common_draft_id_cta,
    "APPB2C.common.draft.cta.confirm": APPB2C_common_draft_cta_confirm,
    "APPB2C.common.draft.cta.note": APPB2C_common_draft_cta_note,
    "APPB2C.common.draft.cta.decline": APPB2C_common_draft_cta_decline,
    "APPB2C.common.draft.error.pastDeadline": APPB2C_common_draft_error_pastDeadline,
    "APPB2C.common.regHeader.reference": APPB2C_common_regHeader_reference,
    "APPB2C.common.regHeader.trfLoading": APPB2C_common_regHeader_trfLoading,
    "APPB2C.common.regHeader.trfNumber": APPB2C_common_regHeader_trfNumber,
    "APPB2C.common.changeBooking.title": APPB2C_common_changeBooking_title,
    "APPB2C.common.changeBooking.subtitle": APPB2C_common_changeBooking_subtitle,
    "APPB2C.common.changeBooking.goBack": APPB2C_common_changeBooking_goBack,
    "APPB2C.common.changeBooking.transferNotes.1": APPB2C_common_changeBooking_transferNotes_1,
    "APPB2C.common.changeBooking.transferNotes.2": APPB2C_common_changeBooking_transferNotes_2,
    "APPB2C.common.changeBooking.transferNotesIol.1": APPB2C_common_changeBooking_transferNotesIol_1,
    "APPB2C.common.changeBooking.transferNotesIol.2": APPB2C_common_changeBooking_transferNotesIol_2,
    "APPB2C.common.changeBooking.transfer.text": APPB2C_common_changeBooking_transfer_text,
    "APPB2C.common.changeBooking.transfer.textIol": APPB2C_common_changeBooking_transfer_textIol,
    "APPB2C.common.changeBooking.transfer.cta": APPB2C_common_changeBooking_transfer_cta,
    "APPB2C.common.changeBooking.cancel.text": APPB2C_common_changeBooking_cancel_text,
    "APPB2C.common.changeBooking.cancel.cta": APPB2C_common_changeBooking_cancel_cta,
    "APPB2C.common.transfer.title": APPB2C_common_transfer_title,
    "APPB2C.common.transfer.selfService.chooseDates.title": APPB2C_common_transfer_selfService_chooseDates_title,
    "APPB2C.common.transfer.selfService.availableDates.title": APPB2C_common_transfer_selfService_availableDates_title,
    "APPB2C.common.transfer.selfService.review.test.changeLrw": APPB2C_common_transfer_selfService_review_test_changeLrw,
    "APPB2C.common.transfer.selfService.review.tncs.agreement": APPB2C_common_transfer_selfService_review_tncs_agreement,
    "APPB2C.common.transfer.selfService.review.confirm.title": APPB2C_common_transfer_selfService_review_confirm_title,
    "APPB2C.common.transfer.selfService.review.confirm.proceedBtn": APPB2C_common_transfer_selfService_review_confirm_proceedBtn,
    "APPB2C.common.transfer.selfService.review.errors.transferDisabled": APPB2C_common_transfer_selfService_review_errors_transferDisabled,
    "APPB2C.common.transfer.selfService.review.errors.noLrwSlots": APPB2C_common_transfer_selfService_review_errors_noLrwSlots,
    "APPB2C.common.transfer.selfService.review.errors.noDistricts": APPB2C_common_transfer_selfService_review_errors_noDistricts,
    "APPB2C.common.transfer.goBack": APPB2C_common_transfer_goBack,
    "APPB2C.common.transfer.notes.1": APPB2C_common_transfer_notes_1,
    "APPB2C.common.transfer.notes.2": APPB2C_common_transfer_notes_2,
    "APPB2C.common.transfer.notes.3": APPB2C_common_transfer_notes_3,
    "APPB2C.common.transfer.notes.4": APPB2C_common_transfer_notes_4,
    "APPB2C.common.transfer.notesIol.1": APPB2C_common_transfer_notesIol_1,
    "APPB2C.common.transfer.notesIol.2": APPB2C_common_transfer_notesIol_2,
    "APPB2C.common.transfer.form.freeform": APPB2C_common_transfer_form_freeform,
    "APPB2C.common.transfer.form.reasons.1": APPB2C_common_transfer_form_reasons_1,
    "APPB2C.common.transfer.form.reasons.2": APPB2C_common_transfer_form_reasons_2,
    "APPB2C.common.transfer.form.reasons.3": APPB2C_common_transfer_form_reasons_3,
    "APPB2C.common.transfer.form.reasons.4": APPB2C_common_transfer_form_reasons_4,
    "APPB2C.common.transfer.form.reasons.title": APPB2C_common_transfer_form_reasons_title,
    "APPB2C.common.transfer.form.reasons.choose": APPB2C_common_transfer_form_reasons_choose,
    "APPB2C.common.transfer.form.reasons.other": APPB2C_common_transfer_form_reasons_other,
    "APPB2C.common.transfer.contactNote": APPB2C_common_transfer_contactNote,
    "APPB2C.common.transfer.contactNoteIol": APPB2C_common_transfer_contactNoteIol,
    "APPB2C.common.transfer.requestValidation": APPB2C_common_transfer_requestValidation,
    "APPB2C.common.transfer.agreement": APPB2C_common_transfer_agreement,
    "APPB2C.common.transfer.cta": APPB2C_common_transfer_cta,
    "APPB2C.common.cancelBooking.title": APPB2C_common_cancelBooking_title,
    "APPB2C.common.cancelBooking.subtitle": APPB2C_common_cancelBooking_subtitle,
    "APPB2C.common.cancelBooking.transferNote.title": APPB2C_common_cancelBooking_transferNote_title,
    "APPB2C.common.cancelBooking.transferNote.titleIol": APPB2C_common_cancelBooking_transferNote_titleIol,
    "APPB2C.common.cancelBooking.transferNote.cta": APPB2C_common_cancelBooking_transferNote_cta,
    "APPB2C.common.cancelBooking.cancelNotes.1": APPB2C_common_cancelBooking_cancelNotes_1,
    "APPB2C.common.cancelBooking.cancelNotes.2": APPB2C_common_cancelBooking_cancelNotes_2,
    "APPB2C.common.cancelBooking.cancelNotes.3": APPB2C_common_cancelBooking_cancelNotes_3,
    "APPB2C.common.cancelBooking.back": APPB2C_common_cancelBooking_back,
    "APPB2C.common.cancelBooking.alreadyRequested.title": APPB2C_common_cancelBooking_alreadyRequested_title,
    "APPB2C.common.cancelBooking.alreadyRequested.cta": APPB2C_common_cancelBooking_alreadyRequested_cta,
    "APPB2C.common.cancelBooking.checkTest": APPB2C_common_cancelBooking_checkTest,
    "APPB2C.common.cancelBooking.reason.note.title": APPB2C_common_cancelBooking_reason_note_title,
    "APPB2C.common.cancelBooking.reason.note.content": APPB2C_common_cancelBooking_reason_note_content,
    "APPB2C.common.cancelBooking.reason.form.title": APPB2C_common_cancelBooking_reason_form_title,
    "APPB2C.common.cancelBooking.reason.form.choose": APPB2C_common_cancelBooking_reason_form_choose,
    "APPB2C.common.cancelBooking.reason.form.requiredReason": APPB2C_common_cancelBooking_reason_form_requiredReason,
    "APPB2C.common.cancelBooking.reason.form.freeform": APPB2C_common_cancelBooking_reason_form_freeform,
    "APPB2C.common.cancelBooking.reason.form.optional": APPB2C_common_cancelBooking_reason_form_optional,
    "APPB2C.common.cancelBooking.reason.form.requiredEvidence": APPB2C_common_cancelBooking_reason_form_requiredEvidence,
    "APPB2C.common.cancelBooking.upload.title": APPB2C_common_cancelBooking_upload_title,
    "APPB2C.common.cancelBooking.upload.notes.1": APPB2C_common_cancelBooking_upload_notes_1,
    "APPB2C.common.cancelBooking.upload.notes.2": APPB2C_common_cancelBooking_upload_notes_2,
    "APPB2C.common.cancelBooking.upload.notes.3": APPB2C_common_cancelBooking_upload_notes_3,
    "APPB2C.common.cancelBooking.upload.notes.4": APPB2C_common_cancelBooking_upload_notes_4,
    "APPB2C.common.cancelBooking.upload.notes.5": APPB2C_common_cancelBooking_upload_notes_5,
    "APPB2C.common.cancelBooking.upload.notes.6": APPB2C_common_cancelBooking_upload_notes_6,
    "APPB2C.common.cancelBooking.upload.notes.7": APPB2C_common_cancelBooking_upload_notes_7,
    "APPB2C.common.cancelBooking.upload.notes.8": APPB2C_common_cancelBooking_upload_notes_8,
    "APPB2C.common.cancelBooking.upload.notes.10": APPB2C_common_cancelBooking_upload_notes_10,
    "APPB2C.common.cancelBooking.upload.mobile": APPB2C_common_cancelBooking_upload_mobile,
    "APPB2C.common.cancelBooking.upload.requirements.title": APPB2C_common_cancelBooking_upload_requirements_title,
    "APPB2C.common.cancelBooking.upload.requirements.note": APPB2C_common_cancelBooking_upload_requirements_note,
    "APPB2C.common.cancelBooking.bottomNotes.note1": APPB2C_common_cancelBooking_bottomNotes_note1,
    "APPB2C.common.cancelBooking.bottomNotes.note2": APPB2C_common_cancelBooking_bottomNotes_note2,
    "APPB2C.common.cancelBooking.bottomNotes.note3": APPB2C_common_cancelBooking_bottomNotes_note3,
    "APPB2C.common.cancelBooking.bottomNotes.terms": APPB2C_common_cancelBooking_bottomNotes_terms,
    "APPB2C.common.cancelBooking.bankDetails.title": APPB2C_common_cancelBooking_bankDetails_title,
    "APPB2C.common.cancelBooking.bankDetails.note": APPB2C_common_cancelBooking_bankDetails_note,
    "APPB2C.common.cancelBooking.bankDetails.form.holderName": APPB2C_common_cancelBooking_bankDetails_form_holderName,
    "APPB2C.common.cancelBooking.bankDetails.form.holderEmail": APPB2C_common_cancelBooking_bankDetails_form_holderEmail,
    "APPB2C.common.cancelBooking.bankDetails.form.bankName": APPB2C_common_cancelBooking_bankDetails_form_bankName,
    "APPB2C.common.cancelBooking.bankDetails.form.bankNumber": APPB2C_common_cancelBooking_bankDetails_form_bankNumber,
    "APPB2C.common.cancelBooking.bankDetails.form.sortCode": APPB2C_common_cancelBooking_bankDetails_form_sortCode,
    "APPB2C.common.cancelBooking.bankDetails.form.bankAddress": APPB2C_common_cancelBooking_bankDetails_form_bankAddress,
    "APPB2C.common.cancelBooking.bankDetails.form.accountHolder": APPB2C_common_cancelBooking_bankDetails_form_accountHolder,
    "APPB2C.common.cancelBooking.bankDetails.form.city": APPB2C_common_cancelBooking_bankDetails_form_city,
    "APPB2C.common.cancelBooking.bankDetails.form.postcode": APPB2C_common_cancelBooking_bankDetails_form_postcode,
    "APPB2C.common.cancelBooking.bankDetails.form.country": APPB2C_common_cancelBooking_bankDetails_form_country,
    "APPB2C.common.cancelBooking.bankDetails.form.changeCountry": APPB2C_common_cancelBooking_bankDetails_form_changeCountry,
    "APPB2C.common.cancelBooking.bankDetails.form.swift": APPB2C_common_cancelBooking_bankDetails_form_swift,
    "APPB2C.common.cancelBooking.bankDetails.form.invalidSwift": APPB2C_common_cancelBooking_bankDetails_form_invalidSwift,
    "APPB2C.common.cancelBooking.bankDetails.form.iban": APPB2C_common_cancelBooking_bankDetails_form_iban,
    "APPB2C.common.cancelBooking.bankDetails.form.invalidIban": APPB2C_common_cancelBooking_bankDetails_form_invalidIban,
    "APPB2C.common.cancelBooking.bankDetails.terms.title": APPB2C_common_cancelBooking_bankDetails_terms_title,
    "APPB2C.common.cancelBooking.bankDetails.terms.consent": APPB2C_common_cancelBooking_bankDetails_terms_consent,
    "APPB2C.common.cancelBooking.bankDetails.privacy": APPB2C_common_cancelBooking_bankDetails_privacy,
    "APPB2C.common.cancelBooking.cta.submit": APPB2C_common_cancelBooking_cta_submit,
    "APPB2C.common.cancelBooking.cta.addBankDetails": APPB2C_common_cancelBooking_cta_addBankDetails,
    "APPB2C.common.cancelBooking.cta.goBack": APPB2C_common_cancelBooking_cta_goBack,
    "APPB2C.common.cancelBooking.error.missingFile": APPB2C_common_cancelBooking_error_missingFile,
    "APPB2C.common.cancelBooking.error.requestedAlready": APPB2C_common_cancelBooking_error_requestedAlready,
    "APPB2C.common.cancelBooking.error.cancelledAlready": APPB2C_common_cancelBooking_error_cancelledAlready,
    "APPB2C.common.changeBookingAck.cancel.title": APPB2C_common_changeBookingAck_cancel_title,
    "APPB2C.common.changeBookingAck.cancel.respondTime": APPB2C_common_changeBookingAck_cancel_respondTime,
    "APPB2C.common.changeBookingAck.cancel.banner": APPB2C_common_changeBookingAck_cancel_banner,
    "APPB2C.common.changeBookingAck.cancel.refunds": APPB2C_common_changeBookingAck_cancel_refunds,
    "APPB2C.common.changeBookingAck.cancel.contact.title": APPB2C_common_changeBookingAck_cancel_contact_title,
    "APPB2C.common.changeBookingAck.cancel.contact.titleIol": APPB2C_common_changeBookingAck_cancel_contact_titleIol,
    "APPB2C.common.changeBookingAck.cancel.contact.phone": APPB2C_common_changeBookingAck_cancel_contact_phone,
    "APPB2C.common.changeBookingAck.cancel.contact.email": APPB2C_common_changeBookingAck_cancel_contact_email,
    "APPB2C.common.changeBookingAck.cancel.refNr": APPB2C_common_changeBookingAck_cancel_refNr,
    "APPB2C.common.changeBookingAck.cancel.terms": APPB2C_common_changeBookingAck_cancel_terms,
    "APPB2C.common.changeBookingAck.transfer.title": APPB2C_common_changeBookingAck_transfer_title,
    "APPB2C.common.changeBookingAck.transfer.banner": APPB2C_common_changeBookingAck_transfer_banner,
    "APPB2C.common.changeBookingAck.transfer.respondTime": APPB2C_common_changeBookingAck_transfer_respondTime,
    "APPB2C.common.changeBookingAck.transfer.note": APPB2C_common_changeBookingAck_transfer_note,
    "APPB2C.common.changeBookingAck.transferIol.banner": APPB2C_common_changeBookingAck_transferIol_banner,
    "APPB2C.common.changeBookingAck.transferIol.note": APPB2C_common_changeBookingAck_transferIol_note,
    "APPB2C.common.changeBookingAck.transferIol.contact": APPB2C_common_changeBookingAck_transferIol_contact,
    "APPB2C.common.changeBookingAck.transferIol.refNr": APPB2C_common_changeBookingAck_transferIol_refNr,
    "APPB2C.common.changeBookingAck.transferIol.terms": APPB2C_common_changeBookingAck_transferIol_terms,
    "APPB2C.common.changeBookingAck.speaking.title": APPB2C_common_changeBookingAck_speaking_title,
    "APPB2C.common.changeBookingAck.speaking.banner": APPB2C_common_changeBookingAck_speaking_banner,
    "APPB2C.common.changeBookingAck.speaking.note.title": APPB2C_common_changeBookingAck_speaking_note_title,
    "APPB2C.common.changeBookingAck.speaking.note.line1": APPB2C_common_changeBookingAck_speaking_note_line1,
    "APPB2C.common.changeBookingAck.speaking.note.line2": APPB2C_common_changeBookingAck_speaking_note_line2,
    "APPB2C.common.changeBookingAck.fees": APPB2C_common_changeBookingAck_fees,
    "APPB2C.common.changeBookingAck.feesIol": APPB2C_common_changeBookingAck_feesIol,
    "APPB2C.common.changeBookingAck.terms": APPB2C_common_changeBookingAck_terms,
    "APPB2C.common.changeBookingAck.back": APPB2C_common_changeBookingAck_back,
    "APPB2C.common.changeSpeaking.title": APPB2C_common_changeSpeaking_title,
    "APPB2C.common.changeSpeaking.note.title": APPB2C_common_changeSpeaking_note_title,
    "APPB2C.common.changeSpeaking.note.line1": APPB2C_common_changeSpeaking_note_line1,
    "APPB2C.common.changeSpeaking.note.line2": APPB2C_common_changeSpeaking_note_line2,
    "APPB2C.common.changeSpeaking.note.back": APPB2C_common_changeSpeaking_note_back,
    "APPB2C.common.changeSpeaking.cards.title": APPB2C_common_changeSpeaking_cards_title,
    "APPB2C.common.changeSpeaking.cards.change": APPB2C_common_changeSpeaking_cards_change,
    "APPB2C.common.changeSpeaking.cards.noSlots": APPB2C_common_changeSpeaking_cards_noSlots,
    "APPB2C.common.changeSpeaking.cards.noSlots.error": APPB2C_common_changeSpeaking_cards_noSlots_error,
    "APPB2C.common.changeSpeaking.modals.testNotAvailable.title": APPB2C_common_changeSpeaking_modals_testNotAvailable_title,
    "APPB2C.common.changeSpeaking.modals.testNotAvailable.line1": APPB2C_common_changeSpeaking_modals_testNotAvailable_line1,
    "APPB2C.common.changeSpeaking.modals.testNotAvailable.line2": APPB2C_common_changeSpeaking_modals_testNotAvailable_line2,
    "APPB2C.common.changeSpeaking.modals.testNotAvailable.cta": APPB2C_common_changeSpeaking_modals_testNotAvailable_cta,
    "APPB2C.common.changeSpeaking.modals.noSlots.title": APPB2C_common_changeSpeaking_modals_noSlots_title,
    "APPB2C.common.changeSpeaking.modals.noSlots.line1": APPB2C_common_changeSpeaking_modals_noSlots_line1,
    "APPB2C.common.changeSpeaking.modals.noSlots.line2": APPB2C_common_changeSpeaking_modals_noSlots_line2,
    "APPB2C.common.changeSpeaking.modals.noSlots.keepTest": APPB2C_common_changeSpeaking_modals_noSlots_keepTest,
    "APPB2C.common.changeSpeaking.modals.noSlots.transferTest": APPB2C_common_changeSpeaking_modals_noSlots_transferTest,
    "APPB2C.common.changeSpeaking.modals.transferNotAvailable.title": APPB2C_common_changeSpeaking_modals_transferNotAvailable_title,
    "APPB2C.common.changeSpeaking.modals.transferNotAvailable.line1": APPB2C_common_changeSpeaking_modals_transferNotAvailable_line1,
    "APPB2C.common.changeSpeaking.modals.transferNotAvailable.cta": APPB2C_common_changeSpeaking_modals_transferNotAvailable_cta,
    "APPB2C.common.changeSpeaking.cta": APPB2C_common_changeSpeaking_cta,
    "APPB2C.common.footer.terms.termsOfUse": APPB2C_common_footer_terms_termsOfUse,
    "APPB2C.common.footer.terms.accessibility": APPB2C_common_footer_terms_accessibility,
    "APPB2C.common.footer.terms.privacyAndCookies": APPB2C_common_footer_terms_privacyAndCookies,
    "APPB2C.common.footer.terms.dataProtection": APPB2C_common_footer_terms_dataProtection,
    "APPB2C.common.footer.terms.copyrightLine1": APPB2C_common_footer_terms_copyrightLine1,
    "APPB2C.common.footer.terms.copyrightLine2": APPB2C_common_footer_terms_copyrightLine2,
    "APPB2C.common.recreateReg.progress": APPB2C_common_recreateReg_progress,
    "APPB2C.common.recreateReg.errTitle": APPB2C_common_recreateReg_errTitle,
    "APPB2C.common.recreateReg.errMsg": APPB2C_common_recreateReg_errMsg,
    "APPB2C.common.chooseTest.title": APPB2C_common_chooseTest_title,
    "APPB2C.common.chooseTest.difference": APPB2C_common_chooseTest_difference,
    "APPB2C.common.chooseTest.iol.title": APPB2C_common_chooseTest_iol_title,
    "APPB2C.common.chooseTest.iol.desc": APPB2C_common_chooseTest_iol_desc,
    "APPB2C.common.chooseTest.iol.consent": APPB2C_common_chooseTest_iol_consent,
    "APPB2C.common.chooseTest.iol.link": APPB2C_common_chooseTest_iol_link,
    "APPB2C.common.chooseTest.iol.cta": APPB2C_common_chooseTest_iol_cta,
    "APPB2C.common.chooseTest.iol.note.title": APPB2C_common_chooseTest_iol_note_title,
    "APPB2C.common.chooseTest.iol.note.content": APPB2C_common_chooseTest_iol_note_content,
    "APPB2C.common.chooseTest.ukvi.difference": APPB2C_common_chooseTest_ukvi_difference,
    "APPB2C.common.chooseTest.ukvi.online.title": APPB2C_common_chooseTest_ukvi_online_title,
    "APPB2C.common.chooseTest.ukvi.online.cta": APPB2C_common_chooseTest_ukvi_online_cta,
    "APPB2C.common.chooseTest.ukvi.online.link": APPB2C_common_chooseTest_ukvi_online_link,
    "APPB2C.common.chooseTest.ukvi.online.consent": APPB2C_common_chooseTest_ukvi_online_consent,
    "APPB2C.common.chooseTest.ukvi.online.consentBiometric.title": APPB2C_common_chooseTest_ukvi_online_consentBiometric_title,
    "APPB2C.common.chooseTest.ukvi.online.consentBiometric.symbol": APPB2C_common_chooseTest_ukvi_online_consentBiometric_symbol,
    "APPB2C.common.chooseTest.ukvi.online.note.title": APPB2C_common_chooseTest_ukvi_online_note_title,
    "APPB2C.common.chooseTest.ukvi.online.note.content": APPB2C_common_chooseTest_ukvi_online_note_content,
    "APPB2C.common.chooseTest.ukvi.inCentre.title": APPB2C_common_chooseTest_ukvi_inCentre_title,
    "APPB2C.common.chooseTest.ukvi.inCentre.descAc": APPB2C_common_chooseTest_ukvi_inCentre_descAc,
    "APPB2C.common.chooseTest.ukvi.inCentre.descGt": APPB2C_common_chooseTest_ukvi_inCentre_descGt,
    "APPB2C.common.chooseTest.ukvi.inCentre.cta": APPB2C_common_chooseTest_ukvi_inCentre_cta,
    "APPB2C.common.chooseTest.ors.title": APPB2C_common_chooseTest_ors_title,
    "APPB2C.common.chooseTest.ors.descAc": APPB2C_common_chooseTest_ors_descAc,
    "APPB2C.common.chooseTest.ors.descGt": APPB2C_common_chooseTest_ors_descGt,
    "APPB2C.common.chooseTest.ors.cta": APPB2C_common_chooseTest_ors_cta,
    "APPB2C.common.findTest.title": APPB2C_common_findTest_title,
    "APPB2C.common.findTest.subtitle": APPB2C_common_findTest_subtitle,
    "APPB2C.common.findTest.cta": APPB2C_common_findTest_cta,
    "APPB2C.common.findTest.searchIn": APPB2C_common_findTest_searchIn,
    "APPB2C.common.findTest.changeCountry": APPB2C_common_findTest_changeCountry,
    "APPB2C.common.findTest.changeCity": APPB2C_common_findTest_changeCity,
    "APPB2C.common.findTest.langModal.title": APPB2C_common_findTest_langModal_title,
    "APPB2C.common.findTest.langModal.continue": APPB2C_common_findTest_langModal_continue,
    "APPB2C.common.findTest.langModal.choose": APPB2C_common_findTest_langModal_choose,
    "APPB2C.common.findTest.langModal.chooseSingle": APPB2C_common_findTest_langModal_chooseSingle,
    "APPB2C.common.findTest.multipleLocations": APPB2C_common_findTest_multipleLocations,
    "APPB2C.common.findTest.selectCountry.label": APPB2C_common_findTest_selectCountry_label,
    "APPB2C.common.findTest.selectCountry.placeholder": APPB2C_common_findTest_selectCountry_placeholder,
    "APPB2C.common.findTest.selectCountry.continue": APPB2C_common_findTest_selectCountry_continue,
    "APPB2C.common.findTest.selectCountry.countryNotSupported": APPB2C_common_findTest_selectCountry_countryNotSupported,
    "APPB2C.common.findTest.selectLocation.label": APPB2C_common_findTest_selectLocation_label,
    "APPB2C.common.findTest.selectLocation.noExamForThisCountry": APPB2C_common_findTest_selectLocation_noExamForThisCountry,
    "APPB2C.common.findTest.selectLocation.noExamForThisOrganisation": APPB2C_common_findTest_selectLocation_noExamForThisOrganisation,
    "APPB2C.common.findTest.selectLocation.noExamForThisOrganisation.option1": APPB2C_common_findTest_selectLocation_noExamForThisOrganisation_option1,
    "APPB2C.common.findTest.selectLocation.noExamForThisOrganisation.cta": APPB2C_common_findTest_selectLocation_noExamForThisOrganisation_cta,
    "APPB2C.common.findTest.selectLocation.noExamForThisOrganisation.option2": APPB2C_common_findTest_selectLocation_noExamForThisOrganisation_option2,
    "APPB2C.common.findTest.selectLocation.closestToMe": APPB2C_common_findTest_selectLocation_closestToMe,
    "APPB2C.common.findTest.selectLocation.geolocationBlocked": APPB2C_common_findTest_selectLocation_geolocationBlocked,
    "APPB2C.common.findTest.dates.title": APPB2C_common_findTest_dates_title,
    "APPB2C.common.findTest.dates.showAll": APPB2C_common_findTest_dates_showAll,
    "APPB2C.common.findTest.dates.showDateRange": APPB2C_common_findTest_dates_showDateRange,
    "APPB2C.common.findTest.dates.pleaseSelect": APPB2C_common_findTest_dates_pleaseSelect,
    "APPB2C.common.findTest.dates.selected": APPB2C_common_findTest_dates_selected,
    "APPB2C.common.findTest.dates.from": APPB2C_common_findTest_dates_from,
    "APPB2C.common.findTest.dates.to": APPB2C_common_findTest_dates_to,
    "APPB2C.common.findTest.dates.clear": APPB2C_common_findTest_dates_clear,
    "APPB2C.common.findTest.dates.noDatesSelected": APPB2C_common_findTest_dates_noDatesSelected,
    "APPB2C.common.findTest.dates.noresults.title": APPB2C_common_findTest_dates_noresults_title,
    "APPB2C.common.findTest.dates.noresults.details": APPB2C_common_findTest_dates_noresults_details,
    "APPB2C.common.findTest.dates.noresultsSpecialReqs.title": APPB2C_common_findTest_dates_noresultsSpecialReqs_title,
    "APPB2C.common.findTest.dates.noresultsSpecialReqs.details": APPB2C_common_findTest_dates_noresultsSpecialReqs_details,
    "APPB2C.common.findTest.dates.noresultsSpecialReqs.details.line1": APPB2C_common_findTest_dates_noresultsSpecialReqs_details_line1,
    "APPB2C.common.findTest.dates.noresultsSpecialReqs.details.line2": APPB2C_common_findTest_dates_noresultsSpecialReqs_details_line2,
    "APPB2C.common.findTest.dates.noresultsSpecialReqs.details.line3": APPB2C_common_findTest_dates_noresultsSpecialReqs_details_line3,
    "APPB2C.common.findTest.dates.noresultsMobileLocation.title": APPB2C_common_findTest_dates_noresultsMobileLocation_title,
    "APPB2C.common.findTest.dates.noresultsMobileLocation.details": APPB2C_common_findTest_dates_noresultsMobileLocation_details,
    "APPB2C.common.findTest.dates.noresultsMobileLocation.cta": APPB2C_common_findTest_dates_noresultsMobileLocation_cta,
    "APPB2C.common.findTest.specialReqs.findOutMore": APPB2C_common_findTest_specialReqs_findOutMore,
    "APPB2C.common.findTest.specialReqs.needCheckbox": APPB2C_common_findTest_specialReqs_needCheckbox,
    "APPB2C.common.findTest.specialReqs.list.title": APPB2C_common_findTest_specialReqs_list_title,
    "APPB2C.common.findTest.specialReqs.list.subtitle": APPB2C_common_findTest_specialReqs_list_subtitle,
    "APPB2C.common.findTest.specialReqs.other": APPB2C_common_findTest_specialReqs_other,
    "APPB2C.common.findTest.specialReqs.pleaseNoteMessage": APPB2C_common_findTest_specialReqs_pleaseNoteMessage,
    "APPB2C.common.findTest.examFormat.title": APPB2C_common_findTest_examFormat_title,
    "APPB2C.common.findTest.examFormat.results": APPB2C_common_findTest_examFormat_results,
    "APPB2C.common.findTest.examFormat.pb": APPB2C_common_findTest_examFormat_pb,
    "APPB2C.common.findTest.examFormat.cd": APPB2C_common_findTest_examFormat_cd,
    "APPB2C.common.findTest.examFormat.all": APPB2C_common_findTest_examFormat_all,
    "APPB2C.common.findTest.residencyConfirmation.title": APPB2C_common_findTest_residencyConfirmation_title,
    "APPB2C.common.findTest.residencyConfirmation.msg.line1.v2": APPB2C_common_findTest_residencyConfirmation_msg_line1_v2,
    "APPB2C.common.findTest.residencyConfirmation.msg.line2.v2": APPB2C_common_findTest_residencyConfirmation_msg_line2_v2,
    "APPB2C.common.findTest.residencyConfirmation.msg.checkPolicyExceptions": APPB2C_common_findTest_residencyConfirmation_msg_checkPolicyExceptions,
    "APPB2C.common.findTest.residencyConfirmation.msg.noComputerTestsInCountryLine2.v2": APPB2C_common_findTest_residencyConfirmation_msg_noComputerTestsInCountryLine2_v2,
    "APPB2C.common.findTest.residencyConfirmation.msg.noComputerTestsInLocationLine2.v2": APPB2C_common_findTest_residencyConfirmation_msg_noComputerTestsInLocationLine2_v2,
    "APPB2C.common.findTest.residencyConfirmation.msg.line3": APPB2C_common_findTest_residencyConfirmation_msg_line3,
    "APPB2C.common.findTest.residencyConfirmation.selectDates": APPB2C_common_findTest_residencyConfirmation_selectDates,
    "APPB2C.common.findTest.residencyConfirmation.btn": APPB2C_common_findTest_residencyConfirmation_btn,
    "APPB2C.common.findTest.residencyConfirmation.errorMsg.title": APPB2C_common_findTest_residencyConfirmation_errorMsg_title,
    "APPB2C.common.findTest.residencyConfirmation.errorMsg.line1.v2": APPB2C_common_findTest_residencyConfirmation_errorMsg_line1_v2,
    "APPB2C.common.findTest.residencyConfirmation.errorMsg.line2": APPB2C_common_findTest_residencyConfirmation_errorMsg_line2,
    "APPB2C.common.findTest.residencyConfirmation.errorMsg.btn": APPB2C_common_findTest_residencyConfirmation_errorMsg_btn,
    "APPB2C.common.findTest.osrInfo": APPB2C_common_findTest_osrInfo,
    "APPB2C.common.findTest.osrInfoLink": APPB2C_common_findTest_osrInfoLink,
    "APPB2C.common.findTest.iol.noLrwResults": APPB2C_common_findTest_iol_noLrwResults,
    "APPB2C.common.findTest.iol.softwareCheck.title": APPB2C_common_findTest_iol_softwareCheck_title,
    "APPB2C.common.findTest.iol.softwareCheck.desc1": APPB2C_common_findTest_iol_softwareCheck_desc1,
    "APPB2C.common.findTest.iol.softwareCheck.desc2": APPB2C_common_findTest_iol_softwareCheck_desc2,
    "APPB2C.common.findTest.iol.softwareCheck.link": APPB2C_common_findTest_iol_softwareCheck_link,
    "APPB2C.common.findTest.iol.softwareCheck.check": APPB2C_common_findTest_iol_softwareCheck_check,
    "APPB2C.common.findTest.iol.organisationCheck.title": APPB2C_common_findTest_iol_organisationCheck_title,
    "APPB2C.common.findTest.iol.organisationCheck.desc": APPB2C_common_findTest_iol_organisationCheck_desc,
    "APPB2C.common.findTest.iol.organisationCheck.check": APPB2C_common_findTest_iol_organisationCheck_check,
    "APPB2C.common.findTest.uol.softwareCheck.title": APPB2C_common_findTest_uol_softwareCheck_title,
    "APPB2C.common.findTest.uol.softwareCheck.desc1": APPB2C_common_findTest_uol_softwareCheck_desc1,
    "APPB2C.common.findTest.uol.softwareCheck.desc2": APPB2C_common_findTest_uol_softwareCheck_desc2,
    "APPB2C.common.findTest.uol.softwareCheck.link": APPB2C_common_findTest_uol_softwareCheck_link,
    "APPB2C.common.findTest.uol.softwareCheck.check": APPB2C_common_findTest_uol_softwareCheck_check,
    "APPB2C.common.findTest.uol.organisationCheck.title": APPB2C_common_findTest_uol_organisationCheck_title,
    "APPB2C.common.findTest.uol.organisationCheck.desc": APPB2C_common_findTest_uol_organisationCheck_desc,
    "APPB2C.common.findTest.uol.organisationCheck.check": APPB2C_common_findTest_uol_organisationCheck_check,
    "APPB2C.common.bookTest.title": APPB2C_common_bookTest_title,
    "APPB2C.common.bookTest.noDiscount.title": APPB2C_common_bookTest_noDiscount_title,
    "APPB2C.common.bookTest.noDiscount.msg.used": APPB2C_common_bookTest_noDiscount_msg_used,
    "APPB2C.common.bookTest.noDiscount.msg.reserved": APPB2C_common_bookTest_noDiscount_msg_reserved,
    "APPB2C.common.bookTest.noDiscount.msg.countryNotMatched": APPB2C_common_bookTest_noDiscount_msg_countryNotMatched,
    "APPB2C.common.bookTest.noDiscount.msg.notSupported": APPB2C_common_bookTest_noDiscount_msg_notSupported,
    "APPB2C.common.bookTest.noDiscount.msg.notFound": APPB2C_common_bookTest_noDiscount_msg_notFound,
    "APPB2C.common.bookTest.changeExamType": APPB2C_common_bookTest_changeExamType,
    "APPB2C.common.bookTest.loadMoreTests": APPB2C_common_bookTest_loadMoreTests,
    "APPB2C.common.bookTest.sortBy.distance": APPB2C_common_bookTest_sortBy_distance,
    "APPB2C.common.bookTest.sortBy.date": APPB2C_common_bookTest_sortBy_date,
    "APPB2C.common.bookTest.sortBy.price": APPB2C_common_bookTest_sortBy_price,
    "APPB2C.common.bookTest.sortBy.title": APPB2C_common_bookTest_sortBy_title,
    "APPB2C.common.bookTest.filters.title": APPB2C_common_bookTest_filters_title,
    "APPB2C.common.bookTest.filters.computer": APPB2C_common_bookTest_filters_computer,
    "APPB2C.common.bookTest.filters.paper": APPB2C_common_bookTest_filters_paper,
    "APPB2C.common.bookTest.filters.allDates": APPB2C_common_bookTest_filters_allDates,
    "APPB2C.common.bookTest.filters.seeAllFilters": APPB2C_common_bookTest_filters_seeAllFilters,
    "APPB2C.common.bookTest.filters.anyTime": APPB2C_common_bookTest_filters_anyTime,
    "APPB2C.common.bookTest.filters.morning": APPB2C_common_bookTest_filters_morning,
    "APPB2C.common.bookTest.filters.afternoon": APPB2C_common_bookTest_filters_afternoon,
    "APPB2C.common.bookTest.filters.evening": APPB2C_common_bookTest_filters_evening,
    "APPB2C.common.bookTest.filters.modal.title": APPB2C_common_bookTest_filters_modal_title,
    "APPB2C.common.bookTest.filters.modal.subtitle": APPB2C_common_bookTest_filters_modal_subtitle,
    "APPB2C.common.bookTest.filters.modal.whichFormatTest": APPB2C_common_bookTest_filters_modal_whichFormatTest,
    "APPB2C.common.bookTest.filters.modal.resultsIn": APPB2C_common_bookTest_filters_modal_resultsIn,
    "APPB2C.common.bookTest.filters.modal.iDontMind": APPB2C_common_bookTest_filters_modal_iDontMind,
    "APPB2C.common.bookTest.filters.modal.whichTimeOfDay": APPB2C_common_bookTest_filters_modal_whichTimeOfDay,
    "APPB2C.common.bookTest.filters.modal.hide": APPB2C_common_bookTest_filters_modal_hide,
    "APPB2C.common.bookTest.filters.modal.cta": APPB2C_common_bookTest_filters_modal_cta,
    "APPB2C.common.bookTest.results.searchText": APPB2C_common_bookTest_results_searchText,
    "APPB2C.common.bookTest.results.noResultsTitle": APPB2C_common_bookTest_results_noResultsTitle,
    "APPB2C.common.bookTest.results.noResultsText": APPB2C_common_bookTest_results_noResultsText,
    "APPB2C.common.bookTest.results.noResultsGoBack": APPB2C_common_bookTest_results_noResultsGoBack,
    "APPB2C.common.bookTest.results.clearFilters": APPB2C_common_bookTest_results_clearFilters,
    "APPB2C.common.bookTest.results.lrw": APPB2C_common_bookTest_results_lrw,
    "APPB2C.common.bookTest.results.book": APPB2C_common_bookTest_results_book,
    "APPB2C.common.bookTest.results.bookFor": APPB2C_common_bookTest_results_bookFor,
    "APPB2C.common.bookTest.results.review": APPB2C_common_bookTest_results_review,
    "APPB2C.common.bookTest.results.cd": APPB2C_common_bookTest_results_cd,
    "APPB2C.common.bookTest.results.pb": APPB2C_common_bookTest_results_pb,
    "APPB2C.common.bookTest.results.changeSpeaking": APPB2C_common_bookTest_results_changeSpeaking,
    "APPB2C.common.bookTest.results.speaking": APPB2C_common_bookTest_results_speaking,
    "APPB2C.common.bookTest.results.fromCurrentLocation": APPB2C_common_bookTest_results_fromCurrentLocation,
    "APPB2C.common.bookTest.results.viewOnMap": APPB2C_common_bookTest_results_viewOnMap,
    "APPB2C.common.regInProgressModal.title": APPB2C_common_regInProgressModal_title,
    "APPB2C.common.regInProgressModal.message1": APPB2C_common_regInProgressModal_message1,
    "APPB2C.common.regInProgressModal.message2": APPB2C_common_regInProgressModal_message2,
    "APPB2C.common.regInProgressModal.restart": APPB2C_common_regInProgressModal_restart,
    "APPB2C.common.regInProgressModal.continue": APPB2C_common_regInProgressModal_continue,
    "APPB2C.common.testDetails.mapModal.title": APPB2C_common_testDetails_mapModal_title,
    "APPB2C.common.testDetails.mapModal.close": APPB2C_common_testDetails_mapModal_close,
    "APPB2C.common.testDetails.title": APPB2C_common_testDetails_title,
    "APPB2C.common.testDetails.changeWrittenTest": APPB2C_common_testDetails_changeWrittenTest,
    "APPB2C.common.testDetails.yourWrittenTest": APPB2C_common_testDetails_yourWrittenTest,
    "APPB2C.common.testDetails.changeTest": APPB2C_common_testDetails_changeTest,
    "APPB2C.common.testDetails.yourSpeakingTest": APPB2C_common_testDetails_yourSpeakingTest,
    "APPB2C.common.testDetails.completeYourBooking": APPB2C_common_testDetails_completeYourBooking,
    "APPB2C.common.testDetails.modifyNote.pleaseNote": APPB2C_common_testDetails_modifyNote_pleaseNote,
    "APPB2C.common.testDetails.modifyNote.note": APPB2C_common_testDetails_modifyNote_note,
    "APPB2C.common.testDetails.modifyNote.confirm": APPB2C_common_testDetails_modifyNote_confirm,
    "APPB2C.common.invitation.modal.header": APPB2C_common_invitation_modal_header,
    "APPB2C.common.invitation.modal.invalid": APPB2C_common_invitation_modal_invalid,
    "APPB2C.common.fileUpload.cta": APPB2C_common_fileUpload_cta,
    "APPB2C.common.fileUpload.requirements": APPB2C_common_fileUpload_requirements,
    "APPB2C.common.fileUpload.fileSize": APPB2C_common_fileUpload_fileSize,
    "APPB2C.common.fileUpload.remove": APPB2C_common_fileUpload_remove,
    "APPB2C.common.fileUpload.fileApproved": APPB2C_common_fileUpload_fileApproved,
    "APPB2C.common.fileUpload.fileRequired": APPB2C_common_fileUpload_fileRequired,
    "APPB2C.common.fileUpload.fileOptional": APPB2C_common_fileUpload_fileOptional,
    "APPB2C.common.fileUpload.filesCount": APPB2C_common_fileUpload_filesCount,
    "APPB2C.common.fileUpload.pdfIeMsg": APPB2C_common_fileUpload_pdfIeMsg,
    "APPB2C.common.fileUpload.success": APPB2C_common_fileUpload_success,
    "APPB2C.common.fileUpload.pdfPasswordMsg": APPB2C_common_fileUpload_pdfPasswordMsg,
    "APPB2C.common.fileUpload.exceededSize": APPB2C_common_fileUpload_exceededSize,
    "APPB2C.common.fileUpload.imgAlt": APPB2C_common_fileUpload_imgAlt,
    "APPB2C.common.selfServices.requested.transfer": APPB2C_common_selfServices_requested_transfer,
    "APPB2C.common.selfServices.requested.cancellation": APPB2C_common_selfServices_requested_cancellation,
    "APPB2C.common.filePreview.label": APPB2C_common_filePreview_label,
    "APPB2C.common.filePreview.status": APPB2C_common_filePreview_status,
    "APPB2C.common.filePreview.pdfPreviewLink": APPB2C_common_filePreview_pdfPreviewLink,
    "APPB2C.common.filePreview.statusName.pending": APPB2C_common_filePreview_statusName_pending,
    "APPB2C.common.filePreview.statusName.approved": APPB2C_common_filePreview_statusName_approved,
    "APPB2C.common.filePreview.statusName.rejected": APPB2C_common_filePreview_statusName_rejected,
    "APPB2C.common.filePreview.statusName.reviewed": APPB2C_common_filePreview_statusName_reviewed,
    "APPB2C.common.filePreview.statusName.deleted": APPB2C_common_filePreview_statusName_deleted,
    "APPB2C.common.unpaidErrorBar.paymentExpired": APPB2C_common_unpaidErrorBar_paymentExpired,
    "APPB2C.common.alertBar.beforeTest": APPB2C_common_alertBar_beforeTest,
    "APPB2C.common.alertBar.withCreds": APPB2C_common_alertBar_withCreds,
    "APPB2C.common.alertBar.afterTest": APPB2C_common_alertBar_afterTest,
    "APPB2C.common.alertBar.regPayment": APPB2C_common_alertBar_regPayment,
    "APPB2C.common.alertBar.regPaymentProof": APPB2C_common_alertBar_regPaymentProof,
    "APPB2C.common.alertBar.eorPayment": APPB2C_common_alertBar_eorPayment,
    "APPB2C.common.alertBar.eorPaymentProof": APPB2C_common_alertBar_eorPaymentProof,
    "APPB2C.common.alertBar.idUpload": APPB2C_common_alertBar_idUpload,
    "APPB2C.common.alertBar.idReupload": APPB2C_common_alertBar_idReupload,
    "APPB2C.common.alertBar.medicalUpload": APPB2C_common_alertBar_medicalUpload,
    "APPB2C.common.alertBar.medicalReupload": APPB2C_common_alertBar_medicalReupload,
    "APPB2C.common.alertBar.cancelReupload": APPB2C_common_alertBar_cancelReupload,
    "APPB2C.common.alertBar.childConsentMissing": APPB2C_common_alertBar_childConsentMissing,
    "APPB2C.common.alertBar.check": APPB2C_common_alertBar_check,
    "APPB2C.common.alertBar.creds": APPB2C_common_alertBar_creds,
    "APPB2C.common.updateBar.close": APPB2C_common_updateBar_close,
    "APPB2C.common.updateBar.cancelPending": APPB2C_common_updateBar_cancelPending,
    "APPB2C.common.updateBar.cancelRejected": APPB2C_common_updateBar_cancelRejected,
    "APPB2C.common.updateBar.cancelled": APPB2C_common_updateBar_cancelled,
    "APPB2C.common.updateBar.transferCancelled": APPB2C_common_updateBar_transferCancelled,
    "APPB2C.common.updateBar.transferPending": APPB2C_common_updateBar_transferPending,
    "APPB2C.common.updateBar.transferPendingCmds": APPB2C_common_updateBar_transferPendingCmds,
    "APPB2C.common.updateBar.transferred": APPB2C_common_updateBar_transferred,
    "APPB2C.common.updateBar.transferredCmds": APPB2C_common_updateBar_transferredCmds,
    "APPB2C.common.updateBar.termsUpdated": APPB2C_common_updateBar_termsUpdated,
    "APPB2C.common.updateBar.hasResults": APPB2C_common_updateBar_hasResults,
    "APPB2C.common.updateBar.eorPending": APPB2C_common_updateBar_eorPending,
    "APPB2C.common.updateBar.eorPendingAgentPays": APPB2C_common_updateBar_eorPendingAgentPays,
    "APPB2C.common.updateBar.eorCompleted": APPB2C_common_updateBar_eorCompleted,
    "APPB2C.common.updateBar.eorCompleted.scoreDecreased": APPB2C_common_updateBar_eorCompleted_scoreDecreased,
    "APPB2C.common.updateBar.eorCompleted.scoreUnchanged": APPB2C_common_updateBar_eorCompleted_scoreUnchanged,
    "APPB2C.common.updateBar.eorCompleted.scoreIncreased": APPB2C_common_updateBar_eorCompleted_scoreIncreased,
    "APPB2C.common.updateBar.eorRejected": APPB2C_common_updateBar_eorRejected,
    "APPB2C.common.updateBar.eorRejected.overallBand": APPB2C_common_updateBar_eorRejected_overallBand,
    "APPB2C.common.updateBar.details": APPB2C_common_updateBar_details,
    "APPB2C.common.updateBar.eorRefundPending": APPB2C_common_updateBar_eorRefundPending,
    "APPB2C.common.updateBar.eorRefunded": APPB2C_common_updateBar_eorRefunded,
    "APPB2C.common.updateBar.transactionRefundRequestPending": APPB2C_common_updateBar_transactionRefundRequestPending,
    "APPB2C.common.updateBar.transactionRefundRequestAccepted": APPB2C_common_updateBar_transactionRefundRequestAccepted,
    "APPB2C.common.updateBar.transactionRefundRequestRejected": APPB2C_common_updateBar_transactionRefundRequestRejected,
    "APPB2C.common.unknownCountry.title": APPB2C_common_unknownCountry_title,
    "APPB2C.common.unknownCountry.header": APPB2C_common_unknownCountry_header,
    "APPB2C.common.unknownCountry.msg1": APPB2C_common_unknownCountry_msg1,
    "APPB2C.common.unknownCountry.msg2": APPB2C_common_unknownCountry_msg2,
    "APPB2C.common.unknownCountry.cta": APPB2C_common_unknownCountry_cta,
    "APPB2C.common.underConstruction.title": APPB2C_common_underConstruction_title,
    "APPB2C.common.underConstruction.message": APPB2C_common_underConstruction_message,
    "APPB2C.common.terms.title": APPB2C_common_terms_title,
    "APPB2C.common.terms.downloadTitle": APPB2C_common_terms_downloadTitle,
    "APPB2C.common.terms.downloadInfo": APPB2C_common_terms_downloadInfo,
    "APPB2C.common.terms.error": APPB2C_common_terms_error,
    "APPB2C.common.modals.newTermsAndConditions.trigger": APPB2C_common_modals_newTermsAndConditions_trigger,
    "APPB2C.common.modals.newTermsAndConditions.title": APPB2C_common_modals_newTermsAndConditions_title,
    "APPB2C.common.modals.newTermsAndConditions.note": APPB2C_common_modals_newTermsAndConditions_note,
    "APPB2C.common.modals.newTermsAndConditions.checkboxNote": APPB2C_common_modals_newTermsAndConditions_checkboxNote,
    "APPB2C.common.modals.newTermsAndConditions.checkboxTC": APPB2C_common_modals_newTermsAndConditions_checkboxTC,
    "APPB2C.common.modals.newTermsAndConditions.cta": APPB2C_common_modals_newTermsAndConditions_cta,
    "APPB2C.common.modals.newTermsAndConditions.error": APPB2C_common_modals_newTermsAndConditions_error,
    "APPB2C.common.gelRedirect.header": APPB2C_common_gelRedirect_header,
    "APPB2C.common.gelRedirect.info": APPB2C_common_gelRedirect_info,
    "APPB2C.common.gelRedirect.errorMessage": APPB2C_common_gelRedirect_errorMessage,
    "APPB2C.registration.tabs.bookingDetails": APPB2C_registration_tabs_bookingDetails,
    "APPB2C.registration.tabs.date": APPB2C_registration_tabs_date,
    "APPB2C.registration.tabs.dateLocation": APPB2C_registration_tabs_dateLocation,
    "APPB2C.registration.tabs.candidate": APPB2C_registration_tabs_candidate,
    "APPB2C.registration.tabs.results": APPB2C_registration_tabs_results,
    "APPB2C.registration.tabs.payments": APPB2C_registration_tabs_payments,
    "APPB2C.registration.tabs.recognisingOrgs": APPB2C_registration_tabs_recognisingOrgs,
    "APPB2C.registration.tabs.recognisingOrgs.defaultMsg.1": APPB2C_registration_tabs_recognisingOrgs_defaultMsg_1,
    "APPB2C.registration.tabs.recognisingOrgs.defaultMsg.2": APPB2C_registration_tabs_recognisingOrgs_defaultMsg_2,
    "APPB2C.registration.date.zone.header": APPB2C_registration_date_zone_header,
    "APPB2C.registration.date.zone.country": APPB2C_registration_date_zone_country,
    "APPB2C.registration.date.zone.time": APPB2C_registration_date_zone_time,
    "APPB2C.registration.date.zone.name": APPB2C_registration_date_zone_name,
    "APPB2C.registration.date.check.back": APPB2C_registration_date_check_back,
    "APPB2C.registration.date.check.beforeTestDate": APPB2C_registration_date_check_beforeTestDate,
    "APPB2C.registration.date.check.intro": APPB2C_registration_date_check_intro,
    "APPB2C.registration.date.check.step1.title": APPB2C_registration_date_check_step1_title,
    "APPB2C.registration.date.check.step1.body": APPB2C_registration_date_check_step1_body,
    "APPB2C.registration.date.check.step1.link": APPB2C_registration_date_check_step1_link,
    "APPB2C.registration.date.check.step2.title": APPB2C_registration_date_check_step2_title,
    "APPB2C.registration.date.check.step2.body": APPB2C_registration_date_check_step2_body,
    "APPB2C.registration.date.check.step2.link": APPB2C_registration_date_check_step2_link,
    "APPB2C.registration.date.check.onTestDate": APPB2C_registration_date_check_onTestDate,
    "APPB2C.registration.date.check.step3.body1": APPB2C_registration_date_check_step3_body1,
    "APPB2C.registration.date.check.step3.noDetailsTitle": APPB2C_registration_date_check_step3_noDetailsTitle,
    "APPB2C.registration.date.check.step3.noDetailsBody": APPB2C_registration_date_check_step3_noDetailsBody,
    "APPB2C.registration.date.check.step3.username": APPB2C_registration_date_check_step3_username,
    "APPB2C.registration.date.check.step3.password": APPB2C_registration_date_check_step3_password,
    "APPB2C.registration.date.check.step3.body2": APPB2C_registration_date_check_step3_body2,
    "APPB2C.registration.date.check.step3.step1.title": APPB2C_registration_date_check_step3_step1_title,
    "APPB2C.registration.date.check.step3.step1.body": APPB2C_registration_date_check_step3_step1_body,
    "APPB2C.registration.date.check.step3.step2.title": APPB2C_registration_date_check_step3_step2_title,
    "APPB2C.registration.date.check.step3.step2.body": APPB2C_registration_date_check_step3_step2_body,
    "APPB2C.registration.date.check.step3.step3.title": APPB2C_registration_date_check_step3_step3_title,
    "APPB2C.registration.date.check.step3.step3.body": APPB2C_registration_date_check_step3_step3_body,
    "APPB2C.registration.date.check.step3.speakingPin": APPB2C_registration_date_check_step3_speakingPin,
    "APPB2C.registration.date.check.step3.writtenPin": APPB2C_registration_date_check_step3_writtenPin,
    "APPB2C.registration.date.check.step3.noSpeakingPinTitle": APPB2C_registration_date_check_step3_noSpeakingPinTitle,
    "APPB2C.registration.date.check.step3.noSpeakingPinBody": APPB2C_registration_date_check_step3_noSpeakingPinBody,
    "APPB2C.registration.bookingDetails.seeTestTaker": APPB2C_registration_bookingDetails_seeTestTaker,
    "APPB2C.registration.bookingDetails.payment": APPB2C_registration_bookingDetails_payment,
    "APPB2C.registration.bookingDetails.seePayment": APPB2C_registration_bookingDetails_seePayment,
    "APPB2C.registration.bookingDetails.whatNext": APPB2C_registration_bookingDetails_whatNext,
    "APPB2C.registration.bookingDetails.results": APPB2C_registration_bookingDetails_results,
    "APPB2C.registration.dateLocation.changeLinkIol": APPB2C_registration_dateLocation_changeLinkIol,
    "APPB2C.registration.dateLocation.changeLrwLink": APPB2C_registration_dateLocation_changeLrwLink,
    "APPB2C.registration.dateLocation.changeSpeakingLink": APPB2C_registration_dateLocation_changeSpeakingLink,
    "APPB2C.registration.dateLocation.speakingTransfer.noSpeakingSlotsHeader": APPB2C_registration_dateLocation_speakingTransfer_noSpeakingSlotsHeader,
    "APPB2C.registration.dateLocation.speakingTransfer.noSpeakingSlotsBody1": APPB2C_registration_dateLocation_speakingTransfer_noSpeakingSlotsBody1,
    "APPB2C.registration.dateLocation.speakingTransfer.noSpeakingSlotsBody2": APPB2C_registration_dateLocation_speakingTransfer_noSpeakingSlotsBody2,
    "APPB2C.registration.dateLocation.speakingTransfer.keepSpeakingTest": APPB2C_registration_dateLocation_speakingTransfer_keepSpeakingTest,
    "APPB2C.registration.dateLocation.speakingTransfer.requestTransfer": APPB2C_registration_dateLocation_speakingTransfer_requestTransfer,
    "APPB2C.registration.dateLocation.location": APPB2C_registration_dateLocation_location,
    "APPB2C.registration.dateLocation.manage.title": APPB2C_registration_dateLocation_manage_title,
    "APPB2C.registration.dateLocation.manage.transferSpeaking": APPB2C_registration_dateLocation_manage_transferSpeaking,
    "APPB2C.registration.dateLocation.manage.transferWhole": APPB2C_registration_dateLocation_manage_transferWhole,
    "APPB2C.registration.dateLocation.manage.cancel": APPB2C_registration_dateLocation_manage_cancel,
    "APPB2C.registration.testTaker.bookedFor.title": APPB2C_registration_testTaker_bookedFor_title,
    "APPB2C.registration.testTaker.bookedFor.completed": APPB2C_registration_testTaker_bookedFor_completed,
    "APPB2C.registration.testTaker.bookedFor.parent": APPB2C_registration_testTaker_bookedFor_parent,
    "APPB2C.registration.testTaker.bookedFor.name": APPB2C_registration_testTaker_bookedFor_name,
    "APPB2C.registration.testTaker.bookedFor.dob": APPB2C_registration_testTaker_bookedFor_dob,
    "APPB2C.registration.testTaker.bookedFor.gender": APPB2C_registration_testTaker_bookedFor_gender,
    "APPB2C.registration.testTaker.bookedFor.email": APPB2C_registration_testTaker_bookedFor_email,
    "APPB2C.registration.testTaker.contact.title": APPB2C_registration_testTaker_contact_title,
    "APPB2C.registration.testTaker.contact.parent": APPB2C_registration_testTaker_contact_parent,
    "APPB2C.registration.testTaker.contact.edit": APPB2C_registration_testTaker_contact_edit,
    "APPB2C.registration.testTaker.contact.address": APPB2C_registration_testTaker_contact_address,
    "APPB2C.registration.testTaker.contact.mobile": APPB2C_registration_testTaker_contact_mobile,
    "APPB2C.registration.testTaker.consent.title": APPB2C_registration_testTaker_consent_title,
    "APPB2C.registration.testTaker.consent.edit": APPB2C_registration_testTaker_consent_edit,
    "APPB2C.registration.testTaker.consent.missing": APPB2C_registration_testTaker_consent_missing,
    "APPB2C.registration.testTaker.childConsent.title": APPB2C_registration_testTaker_childConsent_title,
    "APPB2C.registration.testTaker.childConsent.back": APPB2C_registration_testTaker_childConsent_back,
    "APPB2C.registration.testTaker.childConsent.warning": APPB2C_registration_testTaker_childConsent_warning,
    "APPB2C.registration.testTaker.childConsent.context": APPB2C_registration_testTaker_childConsent_context,
    "APPB2C.registration.testTaker.childConsent.options.1": APPB2C_registration_testTaker_childConsent_options_1,
    "APPB2C.registration.testTaker.childConsent.options.2": APPB2C_registration_testTaker_childConsent_options_2,
    "APPB2C.registration.testTaker.childConsent.options.3": APPB2C_registration_testTaker_childConsent_options_3,
    "APPB2C.registration.testTaker.childConsent.cta": APPB2C_registration_testTaker_childConsent_cta,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.note": APPB2C_registration_testTaker_childConsent_somebodyElse_note,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.title.1": APPB2C_registration_testTaker_childConsent_somebodyElse_title_1,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.title.2": APPB2C_registration_testTaker_childConsent_somebodyElse_title_2,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.noLastName": APPB2C_registration_testTaker_childConsent_somebodyElse_noLastName,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.relationship": APPB2C_registration_testTaker_childConsent_somebodyElse_relationship,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.phone": APPB2C_registration_testTaker_childConsent_somebodyElse_phone,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.phoneNote": APPB2C_registration_testTaker_childConsent_somebodyElse_phoneNote,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.add": APPB2C_registration_testTaker_childConsent_somebodyElse_add,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.confirmText.1": APPB2C_registration_testTaker_childConsent_somebodyElse_confirmText_1,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.confirmText.2": APPB2C_registration_testTaker_childConsent_somebodyElse_confirmText_2,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.confirmCheckbox": APPB2C_registration_testTaker_childConsent_somebodyElse_confirmCheckbox,
    "APPB2C.registration.testTaker.childConsent.somebodyElse.policy": APPB2C_registration_testTaker_childConsent_somebodyElse_policy,
    "APPB2C.registration.testTaker.editContact.note": APPB2C_registration_testTaker_editContact_note,
    "APPB2C.registration.testTaker.editContact.warn": APPB2C_registration_testTaker_editContact_warn,
    "APPB2C.registration.testTaker.editContact.back": APPB2C_registration_testTaker_editContact_back,
    "APPB2C.registration.testTaker.editContact.country.residence": APPB2C_registration_testTaker_editContact_country_residence,
    "APPB2C.registration.testTaker.editContact.country.change": APPB2C_registration_testTaker_editContact_country_change,
    "APPB2C.registration.testTaker.editContact.address": APPB2C_registration_testTaker_editContact_address,
    "APPB2C.registration.testTaker.editContact.city": APPB2C_registration_testTaker_editContact_city,
    "APPB2C.registration.testTaker.editContact.postCode": APPB2C_registration_testTaker_editContact_postCode,
    "APPB2C.registration.testTaker.editContact.state": APPB2C_registration_testTaker_editContact_state,
    "APPB2C.registration.testTaker.editContact.mobile": APPB2C_registration_testTaker_editContact_mobile,
    "APPB2C.registration.testTaker.editContact.cta": APPB2C_registration_testTaker_editContact_cta,
    "APPB2C.registration.testTaker.editContact.error.missingCountry": APPB2C_registration_testTaker_editContact_error_missingCountry,
    "APPB2C.registration.testTaker.editContact.error.missingAddress": APPB2C_registration_testTaker_editContact_error_missingAddress,
    "APPB2C.registration.testTaker.editContact.error.pastCutoff": APPB2C_registration_testTaker_editContact_error_pastCutoff,
    "APPB2C.registration.testTaker.id.title": APPB2C_registration_testTaker_id_title,
    "APPB2C.registration.testTaker.id.child": APPB2C_registration_testTaker_id_child,
    "APPB2C.registration.testTaker.id.typeNames.passport": APPB2C_registration_testTaker_id_typeNames_passport,
    "APPB2C.registration.testTaker.id.typeNames.card": APPB2C_registration_testTaker_id_typeNames_card,
    "APPB2C.registration.testTaker.id.typeNames.other": APPB2C_registration_testTaker_id_typeNames_other,
    "APPB2C.registration.testTaker.id.idNumber": APPB2C_registration_testTaker_id_idNumber,
    "APPB2C.registration.testTaker.id.expiryDate": APPB2C_registration_testTaker_id_expiryDate,
    "APPB2C.registration.testTaker.id.issuingAuthority": APPB2C_registration_testTaker_id_issuingAuthority,
    "APPB2C.registration.testTaker.id.fileAlt": APPB2C_registration_testTaker_id_fileAlt,
    "APPB2C.registration.testTaker.id.noFilesTitle": APPB2C_registration_testTaker_id_noFilesTitle,
    "APPB2C.registration.testTaker.id.noFilesBody": APPB2C_registration_testTaker_id_noFilesBody,
    "APPB2C.registration.testTaker.id.edit.title": APPB2C_registration_testTaker_id_edit_title,
    "APPB2C.registration.testTaker.id.edit.subtitle": APPB2C_registration_testTaker_id_edit_subtitle,
    "APPB2C.registration.testTaker.id.edit.rules.example": APPB2C_registration_testTaker_id_edit_rules_example,
    "APPB2C.registration.testTaker.id.edit.upload.exampleProof": APPB2C_registration_testTaker_id_edit_upload_exampleProof,
    "APPB2C.registration.testTaker.id.edit.upload.imgAlt": APPB2C_registration_testTaker_id_edit_upload_imgAlt,
    "APPB2C.registration.testTaker.files.editButton.add": APPB2C_registration_testTaker_files_editButton_add,
    "APPB2C.registration.testTaker.files.editButton.edit": APPB2C_registration_testTaker_files_editButton_edit,
    "APPB2C.registration.testTaker.files.upload.note": APPB2C_registration_testTaker_files_upload_note,
    "APPB2C.registration.testTaker.files.upload.mobile.title": APPB2C_registration_testTaker_files_upload_mobile_title,
    "APPB2C.registration.testTaker.files.upload.mobile.line1": APPB2C_registration_testTaker_files_upload_mobile_line1,
    "APPB2C.registration.testTaker.files.upload.mobile.line2": APPB2C_registration_testTaker_files_upload_mobile_line2,
    "APPB2C.registration.testTaker.files.upload.cta": APPB2C_registration_testTaker_files_upload_cta,
    "APPB2C.registration.testTaker.files.upload.back.title": APPB2C_registration_testTaker_files_upload_back_title,
    "APPB2C.registration.testTaker.files.upload.back.subtitle": APPB2C_registration_testTaker_files_upload_back_subtitle,
    "APPB2C.registration.testTaker.files.upload.error.maxNumberOfFilesExceeded": APPB2C_registration_testTaker_files_upload_error_maxNumberOfFilesExceeded,
    "APPB2C.registration.testTaker.files.upload.error.wrongFileType": APPB2C_registration_testTaker_files_upload_error_wrongFileType,
    "APPB2C.registration.testTaker.files.upload.error.wrongFileName": APPB2C_registration_testTaker_files_upload_error_wrongFileName,
    "APPB2C.registration.testTaker.files.upload.error.fileTooLarge": APPB2C_registration_testTaker_files_upload_error_fileTooLarge,
    "APPB2C.registration.testTaker.files.upload.error.uploadUnavailable": APPB2C_registration_testTaker_files_upload_error_uploadUnavailable,
    "APPB2C.registration.testTaker.specialArrangements.title": APPB2C_registration_testTaker_specialArrangements_title,
    "APPB2C.registration.testTaker.specialArrangements.description": APPB2C_registration_testTaker_specialArrangements_description,
    "APPB2C.registration.testTaker.specialArrangements.noFilesTitle": APPB2C_registration_testTaker_specialArrangements_noFilesTitle,
    "APPB2C.registration.testTaker.specialArrangements.noFilesBody": APPB2C_registration_testTaker_specialArrangements_noFilesBody,
    "APPB2C.registration.testTaker.specialArrangements.fileAlt": APPB2C_registration_testTaker_specialArrangements_fileAlt,
    "APPB2C.registration.testTaker.specialArrangements.edit.title": APPB2C_registration_testTaker_specialArrangements_edit_title,
    "APPB2C.registration.testTaker.specialArrangements.edit.subtitle": APPB2C_registration_testTaker_specialArrangements_edit_subtitle,
    "APPB2C.registration.testTaker.specialArrangements.edit.line1": APPB2C_registration_testTaker_specialArrangements_edit_line1,
    "APPB2C.registration.testTaker.specialArrangements.edit.line2": APPB2C_registration_testTaker_specialArrangements_edit_line2,
    "APPB2C.registration.testTaker.specialArrangements.edit.rules.title": APPB2C_registration_testTaker_specialArrangements_edit_rules_title,
    "APPB2C.registration.testTaker.specialArrangements.edit.rules.rule1": APPB2C_registration_testTaker_specialArrangements_edit_rules_rule1,
    "APPB2C.registration.testTaker.specialArrangements.edit.rules.rule2": APPB2C_registration_testTaker_specialArrangements_edit_rules_rule2,
    "APPB2C.registration.testTaker.specialArrangements.edit.rules.rule3": APPB2C_registration_testTaker_specialArrangements_edit_rules_rule3,
    "APPB2C.registration.testTaker.specialArrangements.edit.rules.rule4": APPB2C_registration_testTaker_specialArrangements_edit_rules_rule4,
    "APPB2C.registration.testTaker.specialArrangements.edit.rules.rule5": APPB2C_registration_testTaker_specialArrangements_edit_rules_rule5,
    "APPB2C.registration.testTaker.error": APPB2C_registration_testTaker_error,
    "APPB2C.registration.results.hasResults.viewExplanation": APPB2C_registration_results_hasResults_viewExplanation,
    "APPB2C.registration.results.hasResults.share.title": APPB2C_registration_results_hasResults_share_title,
    "APPB2C.registration.results.hasResults.share.subtitle": APPB2C_registration_results_hasResults_share_subtitle,
    "APPB2C.registration.results.hasResults.share.trfCta": APPB2C_registration_results_hasResults_share_trfCta,
    "APPB2C.registration.results.hasResults.share.RecognisingOrgsLink": APPB2C_registration_results_hasResults_share_RecognisingOrgsLink,
    "APPB2C.registration.results.hasResults.share.applyBoard": APPB2C_registration_results_hasResults_share_applyBoard,
    "APPB2C.registration.results.hasResults.scores.Listening": APPB2C_registration_results_hasResults_scores_Listening,
    "APPB2C.registration.results.hasResults.scores.Reading": APPB2C_registration_results_hasResults_scores_Reading,
    "APPB2C.registration.results.hasResults.scores.Writing": APPB2C_registration_results_hasResults_scores_Writing,
    "APPB2C.registration.results.hasResults.scores.Speaking": APPB2C_registration_results_hasResults_scores_Speaking,
    "APPB2C.registration.results.hasResults.scores.Overall": APPB2C_registration_results_hasResults_scores_Overall,
    "APPB2C.registration.results.hasResults.scores.label": APPB2C_registration_results_hasResults_scores_label,
    "APPB2C.registration.results.hasResults.lifeSkills.result": APPB2C_registration_results_hasResults_lifeSkills_result,
    "APPB2C.registration.results.hasResults.lifeSkills.level": APPB2C_registration_results_hasResults_lifeSkills_level,
    "APPB2C.registration.results.hasResults.lifeSkills.passed": APPB2C_registration_results_hasResults_lifeSkills_passed,
    "APPB2C.registration.results.hasResults.lifeSkills.failed": APPB2C_registration_results_hasResults_lifeSkills_failed,
    "APPB2C.registration.results.hasResults.lifeSkills.note": APPB2C_registration_results_hasResults_lifeSkills_note,
    "APPB2C.registration.results.hasResults.rankNameConsonant": APPB2C_registration_results_hasResults_rankNameConsonant,
    "APPB2C.registration.results.hasResults.rankNameVowel": APPB2C_registration_results_hasResults_rankNameVowel,
    "APPB2C.registration.results.hasResults.explanations.heading": APPB2C_registration_results_hasResults_explanations_heading,
    "APPB2C.registration.results.hasResults.explanations.improve": APPB2C_registration_results_hasResults_explanations_improve,
    "APPB2C.registration.results.hasResults.posting.postedOn": APPB2C_registration_results_hasResults_posting_postedOn,
    "APPB2C.registration.results.hasResults.posting.willPostOn": APPB2C_registration_results_hasResults_posting_willPostOn,
    "APPB2C.registration.results.hasResults.posting.postedTo": APPB2C_registration_results_hasResults_posting_postedTo,
    "APPB2C.registration.results.hasResults.posting.willPostTo": APPB2C_registration_results_hasResults_posting_willPostTo,
    "APPB2C.registration.results.hasResults.posting.oneCopyWarning": APPB2C_registration_results_hasResults_posting_oneCopyWarning,
    "APPB2C.registration.results.hasResults.eorLink": APPB2C_registration_results_hasResults_eorLink,
    "APPB2C.registration.results.hasResults.eorLine1": APPB2C_registration_results_hasResults_eorLine1,
    "APPB2C.registration.results.hasResults.eorLine2": APPB2C_registration_results_hasResults_eorLine2,
    "APPB2C.registration.results.hasResults.eorLetter": APPB2C_registration_results_hasResults_eorLetter,
    "APPB2C.registration.results.hasResults.scoreImprove.title": APPB2C_registration_results_hasResults_scoreImprove_title,
    "APPB2C.registration.results.hasResults.scoreImprove.subtitle": APPB2C_registration_results_hasResults_scoreImprove_subtitle,
    "APPB2C.registration.results.hasResults.scoreImprove.btn": APPB2C_registration_results_hasResults_scoreImprove_btn,
    "APPB2C.registration.results.hasResults.scoreImprove.modal.subtitle": APPB2C_registration_results_hasResults_scoreImprove_modal_subtitle,
    "APPB2C.registration.results.hasResults.scoreImprove.modal.backBtn": APPB2C_registration_results_hasResults_scoreImprove_modal_backBtn,
    "APPB2C.registration.results.hasResults.scoreImprove.modal.bookNew.title": APPB2C_registration_results_hasResults_scoreImprove_modal_bookNew_title,
    "APPB2C.registration.results.hasResults.scoreImprove.modal.bookNew.description": APPB2C_registration_results_hasResults_scoreImprove_modal_bookNew_description,
    "APPB2C.registration.results.hasResults.scoreImprove.modal.osr.title": APPB2C_registration_results_hasResults_scoreImprove_modal_osr_title,
    "APPB2C.registration.results.hasResults.scoreImprove.modal.osr.description": APPB2C_registration_results_hasResults_scoreImprove_modal_osr_description,
    "APPB2C.registration.results.hasResults.scoreImprove.modal.eor.title": APPB2C_registration_results_hasResults_scoreImprove_modal_eor_title,
    "APPB2C.registration.results.hasResults.scoreImprove.modal.eor.description": APPB2C_registration_results_hasResults_scoreImprove_modal_eor_description,
    "APPB2C.registration.results.hasResults.bandScore.increase": APPB2C_registration_results_hasResults_bandScore_increase,
    "APPB2C.registration.results.hasResults.bandScore.decrease": APPB2C_registration_results_hasResults_bandScore_decrease,
    "APPB2C.registration.results.hasResults.bandScore.unchanged": APPB2C_registration_results_hasResults_bandScore_unchanged,
    "APPB2C.registration.results.updateBar.osr.marked": APPB2C_registration_results_updateBar_osr_marked,
    "APPB2C.registration.results.updateBar.osr.booked": APPB2C_registration_results_updateBar_osr_booked,
    "APPB2C.registration.results.hasResults.osr.updateBar.title": APPB2C_registration_results_hasResults_osr_updateBar_title,
    "APPB2C.registration.results.hasResults.osr.updateBar.scoreIncreased": APPB2C_registration_results_hasResults_osr_updateBar_scoreIncreased,
    "APPB2C.registration.results.hasResults.osr.updateBar.scoreDecreased": APPB2C_registration_results_hasResults_osr_updateBar_scoreDecreased,
    "APPB2C.registration.results.hasResults.osr.updateBar.scoreUnchanged": APPB2C_registration_results_hasResults_osr_updateBar_scoreUnchanged,
    "APPB2C.registration.results.hasResults.osr.previousResults": APPB2C_registration_results_hasResults_osr_previousResults,
    "APPB2C.registration.results.bandScore.osrBooked": APPB2C_registration_results_bandScore_osrBooked,
    "APPB2C.registration.results.bandScore.osrMarked": APPB2C_registration_results_bandScore_osrMarked,
    "APPB2C.registration.results.eor.title": APPB2C_registration_results_eor_title,
    "APPB2C.registration.results.eor.titlePayment": APPB2C_registration_results_eor_titlePayment,
    "APPB2C.registration.results.eor.preDeadline.line1": APPB2C_registration_results_eor_preDeadline_line1,
    "APPB2C.registration.results.eor.preDeadline.paymentTitle": APPB2C_registration_results_eor_preDeadline_paymentTitle,
    "APPB2C.registration.results.eor.preDeadline.line2": APPB2C_registration_results_eor_preDeadline_line2,
    "APPB2C.registration.results.eor.preDeadline.note": APPB2C_registration_results_eor_preDeadline_note,
    "APPB2C.registration.results.eor.preDeadline.fee": APPB2C_registration_results_eor_preDeadline_fee,
    "APPB2C.registration.results.eor.preDeadline.tax": APPB2C_registration_results_eor_preDeadline_tax,
    "APPB2C.registration.results.eor.preDeadline.back": APPB2C_registration_results_eor_preDeadline_back,
    "APPB2C.registration.results.eor.preDeadline.scoresTitle": APPB2C_registration_results_eor_preDeadline_scoresTitle,
    "APPB2C.registration.results.eor.preDeadline.scoresTitleOsr": APPB2C_registration_results_eor_preDeadline_scoresTitleOsr,
    "APPB2C.registration.results.eor.preDeadline.scoresTitleOsr.Listening": APPB2C_registration_results_eor_preDeadline_scoresTitleOsr_Listening,
    "APPB2C.registration.results.eor.preDeadline.scoresTitleOsr.Reading": APPB2C_registration_results_eor_preDeadline_scoresTitleOsr_Reading,
    "APPB2C.registration.results.eor.preDeadline.scoresTitleOsr.Writing": APPB2C_registration_results_eor_preDeadline_scoresTitleOsr_Writing,
    "APPB2C.registration.results.eor.preDeadline.scoresTitleOsr.Speaking": APPB2C_registration_results_eor_preDeadline_scoresTitleOsr_Speaking,
    "APPB2C.registration.results.eor.preDeadline.scores.band.notSelectableReason.exempted": APPB2C_registration_results_eor_preDeadline_scores_band_notSelectableReason_exempted,
    "APPB2C.registration.results.eor.preDeadline.trfNumberLabel": APPB2C_registration_results_eor_preDeadline_trfNumberLabel,
    "APPB2C.registration.results.eor.preDeadline.trfNumberSubnote": APPB2C_registration_results_eor_preDeadline_trfNumberSubnote,
    "APPB2C.registration.results.eor.preDeadline.trfNumberValidation": APPB2C_registration_results_eor_preDeadline_trfNumberValidation,
    "APPB2C.registration.results.eor.preDeadline.maxScore": APPB2C_registration_results_eor_preDeadline_maxScore,
    "APPB2C.registration.results.eor.preDeadline.scoresRequired": APPB2C_registration_results_eor_preDeadline_scoresRequired,
    "APPB2C.registration.results.eor.preDeadline.explanation": APPB2C_registration_results_eor_preDeadline_explanation,
    "APPB2C.registration.results.eor.preDeadline.explanationRequired": APPB2C_registration_results_eor_preDeadline_explanationRequired,
    "APPB2C.registration.results.eor.preDeadline.evidence": APPB2C_registration_results_eor_preDeadline_evidence,
    "APPB2C.registration.results.eor.preDeadline.evidenceRequired": APPB2C_registration_results_eor_preDeadline_evidenceRequired,
    "APPB2C.registration.results.eor.preDeadline.iolNote.line2": APPB2C_registration_results_eor_preDeadline_iolNote_line2,
    "APPB2C.registration.results.eor.preDeadline.iolNote.line3": APPB2C_registration_results_eor_preDeadline_iolNote_line3,
    "APPB2C.registration.results.eor.preDeadline.noteTitle": APPB2C_registration_results_eor_preDeadline_noteTitle,
    "APPB2C.registration.results.eor.preDeadline.legal": APPB2C_registration_results_eor_preDeadline_legal,
    "APPB2C.registration.results.eor.preDeadline.legalNote": APPB2C_registration_results_eor_preDeadline_legalNote,
    "APPB2C.registration.results.eor.preDeadline.orderAcknowledgementLabel": APPB2C_registration_results_eor_preDeadline_orderAcknowledgementLabel,
    "APPB2C.registration.results.eor.preDeadline.paymentCta": APPB2C_registration_results_eor_preDeadline_paymentCta,
    "APPB2C.registration.results.eor.preDeadline.payOnlineCTA": APPB2C_registration_results_eor_preDeadline_payOnlineCTA,
    "APPB2C.registration.results.eor.preDeadline.payOfflineCTA": APPB2C_registration_results_eor_preDeadline_payOfflineCTA,
    "APPB2C.registration.results.eor.preDeadline.error.missingTrfNumber": APPB2C_registration_results_eor_preDeadline_error_missingTrfNumber,
    "APPB2C.registration.results.eor.preDeadline.error.wrongTrfNumber": APPB2C_registration_results_eor_preDeadline_error_wrongTrfNumber,
    "APPB2C.registration.results.eor.preDeadline.error.explanationMaxLength": APPB2C_registration_results_eor_preDeadline_error_explanationMaxLength,
    "APPB2C.registration.results.eor.postDeadline.line1": APPB2C_registration_results_eor_postDeadline_line1,
    "APPB2C.registration.results.eor.postDeadline.line2": APPB2C_registration_results_eor_postDeadline_line2,
    "APPB2C.registration.results.eor.postDeadline.line3": APPB2C_registration_results_eor_postDeadline_line3,
    "APPB2C.registration.results.eor.postDeadline.iol.line3": APPB2C_registration_results_eor_postDeadline_iol_line3,
    "APPB2C.registration.results.eor.postDeadline.iol.launchChatLine": APPB2C_registration_results_eor_postDeadline_iol_launchChatLine,
    "APPB2C.registration.results.eor.postDeadline.back": APPB2C_registration_results_eor_postDeadline_back,
    "APPB2C.registration.results.eor.postDeadline.phone": APPB2C_registration_results_eor_postDeadline_phone,
    "APPB2C.registration.results.eor.postDeadline.email": APPB2C_registration_results_eor_postDeadline_email,
    "APPB2C.registration.results.eor.postDeadline.help": APPB2C_registration_results_eor_postDeadline_help,
    "APPB2C.registration.results.eor.acknowledgement.title": APPB2C_registration_results_eor_acknowledgement_title,
    "APPB2C.registration.results.eor.acknowledgement.success": APPB2C_registration_results_eor_acknowledgement_success,
    "APPB2C.registration.results.eor.acknowledgement.info": APPB2C_registration_results_eor_acknowledgement_info,
    "APPB2C.registration.results.eor.acknowledgement.confirmation": APPB2C_registration_results_eor_acknowledgement_confirmation,
    "APPB2C.registration.results.eor.acknowledgement.components": APPB2C_registration_results_eor_acknowledgement_components,
    "APPB2C.registration.results.eor.acknowledgement.noteTitle": APPB2C_registration_results_eor_acknowledgement_noteTitle,
    "APPB2C.registration.results.eor.acknowledgement.payment": APPB2C_registration_results_eor_acknowledgement_payment,
    "APPB2C.registration.results.eor.acknowledgement.fee": APPB2C_registration_results_eor_acknowledgement_fee,
    "APPB2C.registration.results.eor.acknowledgement.tax": APPB2C_registration_results_eor_acknowledgement_tax,
    "APPB2C.registration.results.eor.acknowledgement.total": APPB2C_registration_results_eor_acknowledgement_total,
    "APPB2C.registration.results.eor.acknowledgement.reference": APPB2C_registration_results_eor_acknowledgement_reference,
    "APPB2C.registration.results.eor.acknowledgement.terms": APPB2C_registration_results_eor_acknowledgement_terms,
    "APPB2C.registration.results.eor.acknowledgement.backButton": APPB2C_registration_results_eor_acknowledgement_backButton,
    "APPB2C.registration.results.eor.acknowledgement.paymentNote": APPB2C_registration_results_eor_acknowledgement_paymentNote,
    "APPB2C.registration.results.eor.acknowledgement.paymentButton": APPB2C_registration_results_eor_acknowledgement_paymentButton,
    "APPB2C.registration.results.osr.title": APPB2C_registration_results_osr_title,
    "APPB2C.registration.results.osr.line1": APPB2C_registration_results_osr_line1,
    "APPB2C.registration.results.osr.line2": APPB2C_registration_results_osr_line2,
    "APPB2C.registration.results.osr.line3": APPB2C_registration_results_osr_line3,
    "APPB2C.registration.results.osr.line4": APPB2C_registration_results_osr_line4,
    "APPB2C.registration.results.osr.line5": APPB2C_registration_results_osr_line5,
    "APPB2C.registration.results.osr.submitBtn": APPB2C_registration_results_osr_submitBtn,
    "APPB2C.registration.results.noResults.title": APPB2C_registration_results_noResults_title,
    "APPB2C.registration.results.osr.successBanner": APPB2C_registration_results_osr_successBanner,
    "APPB2C.registration.results.osr.chooseSkill.formTitle": APPB2C_registration_results_osr_chooseSkill_formTitle,
    "APPB2C.registration.results.osr.chooseSkill.orgAcceptRetakes.title": APPB2C_registration_results_osr_chooseSkill_orgAcceptRetakes_title,
    "APPB2C.registration.results.osr.chooseSkill.orgAcceptRetakes.description": APPB2C_registration_results_osr_chooseSkill_orgAcceptRetakes_description,
    "APPB2C.registration.results.osr.chooseSkill.orgAcceptRetakes.confirmation": APPB2C_registration_results_osr_chooseSkill_orgAcceptRetakes_confirmation,
    "APPB2C.registration.results.osr.chooseSkill.chooseDateBtn": APPB2C_registration_results_osr_chooseSkill_chooseDateBtn,
    "APPB2C.registration.results.osr.chooseSkill.backBtn": APPB2C_registration_results_osr_chooseSkill_backBtn,
    "APPB2C.registration.results.osr.chooseSkill.skillRequired": APPB2C_registration_results_osr_chooseSkill_skillRequired,
    "APPB2C.registration.results.osr.chooseSkill.confirmationRequired": APPB2C_registration_results_osr_chooseSkill_confirmationRequired,
    "APPB2C.registration.results.osr.chooseSkill.modal.title": APPB2C_registration_results_osr_chooseSkill_modal_title,
    "APPB2C.registration.results.osr.chooseSkill.modal.description": APPB2C_registration_results_osr_chooseSkill_modal_description,
    "APPB2C.registration.results.osr.chooseSkill.modal.contact": APPB2C_registration_results_osr_chooseSkill_modal_contact,
    "APPB2C.registration.results.osr.chooseSkill.modal.phone": APPB2C_registration_results_osr_chooseSkill_modal_phone,
    "APPB2C.registration.results.osr.chooseSkill.modal.email": APPB2C_registration_results_osr_chooseSkill_modal_email,
    "APPB2C.registration.results.osr.chooseDate.retakeListening": APPB2C_registration_results_osr_chooseDate_retakeListening,
    "APPB2C.registration.results.osr.chooseDate.retakeReading": APPB2C_registration_results_osr_chooseDate_retakeReading,
    "APPB2C.registration.results.osr.chooseDate.retakeWriting": APPB2C_registration_results_osr_chooseDate_retakeWriting,
    "APPB2C.registration.results.osr.chooseDate.retakeSpeaking": APPB2C_registration_results_osr_chooseDate_retakeSpeaking,
    "APPB2C.registration.results.osr.chooseDate.chooseDateTitle": APPB2C_registration_results_osr_chooseDate_chooseDateTitle,
    "APPB2C.registration.results.osr.chooseDate.note.title": APPB2C_registration_results_osr_chooseDate_note_title,
    "APPB2C.registration.results.osr.chooseDate.note.content": APPB2C_registration_results_osr_chooseDate_note_content,
    "APPB2C.registration.results.osr.chooseDate.accessibility": APPB2C_registration_results_osr_chooseDate_accessibility,
    "APPB2C.registration.results.osr.chooseDate.accessibilityLink": APPB2C_registration_results_osr_chooseDate_accessibilityLink,
    "APPB2C.registration.results.osr.chooseTest.availableDates": APPB2C_registration_results_osr_chooseTest_availableDates,
    "APPB2C.registration.results.osr.chooseTest.speaking.time": APPB2C_registration_results_osr_chooseTest_speaking_time,
    "APPB2C.registration.results.osr.review.note": APPB2C_registration_results_osr_review_note,
    "APPB2C.registration.results.osr.review.note.testDay": APPB2C_registration_results_osr_review_note_testDay,
    "APPB2C.registration.results.osr.error.noTestDates": APPB2C_registration_results_osr_error_noTestDates,
    "APPB2C.registration.results.osr.error.noTests": APPB2C_registration_results_osr_error_noTests,
    "APPB2C.registration.results.osr.error.missingFile": APPB2C_registration_results_osr_error_missingFile,
    "APPB2C.registration.results.noResults.note.title": APPB2C_registration_results_noResults_note_title,
    "APPB2C.registration.results.noResults.osr.booked": APPB2C_registration_results_noResults_osr_booked,
    "APPB2C.registration.results.noResults.osr.previousScores": APPB2C_registration_results_noResults_osr_previousScores,
    "APPB2C.registration.results.noResults.cmds.title": APPB2C_registration_results_noResults_cmds_title,
    "APPB2C.registration.results.organisations.chosenOrganisationsHeader": APPB2C_registration_results_organisations_chosenOrganisationsHeader,
    "APPB2C.registration.results.organisations.organisationsCount": APPB2C_registration_results_organisations_organisationsCount,
    "APPB2C.registration.results.organisations.organisationsCount_other": APPB2C_registration_results_organisations_organisationsCount_other,
    "APPB2C.registration.results.organisations.title": APPB2C_registration_results_organisations_title,
    "APPB2C.registration.results.organisations.note0": APPB2C_registration_results_organisations_note0,
    "APPB2C.registration.results.organisations.note1": APPB2C_registration_results_organisations_note1,
    "APPB2C.registration.results.organisations.note2": APPB2C_registration_results_organisations_note2,
    "APPB2C.registration.results.organisations.list.item1": APPB2C_registration_results_organisations_list_item1,
    "APPB2C.registration.results.organisations.list.item2": APPB2C_registration_results_organisations_list_item2,
    "APPB2C.registration.results.organisations.list.item3": APPB2C_registration_results_organisations_list_item3,
    "APPB2C.registration.results.organisations.list.item4": APPB2C_registration_results_organisations_list_item4,
    "APPB2C.registration.results.organisations.availableReceivingOrgsNote1": APPB2C_registration_results_organisations_availableReceivingOrgsNote1,
    "APPB2C.registration.results.organisations.availableReceivingOrgsNote2": APPB2C_registration_results_organisations_availableReceivingOrgsNote2,
    "APPB2C.registration.results.organisations.availableReceivingOrgsNote3": APPB2C_registration_results_organisations_availableReceivingOrgsNote3,
    "APPB2C.registration.results.organisations.receivingOrgsLimitReachedNote": APPB2C_registration_results_organisations_receivingOrgsLimitReachedNote,
    "APPB2C.registration.results.organisations.noReceivingOrgsSelectedNote": APPB2C_registration_results_organisations_noReceivingOrgsSelectedNote,
    "APPB2C.registration.results.organisations.mod.howTo.title": APPB2C_registration_results_organisations_mod_howTo_title,
    "APPB2C.registration.results.organisations.mod.howTo.line1": APPB2C_registration_results_organisations_mod_howTo_line1,
    "APPB2C.registration.results.organisations.mod.howTo.item1": APPB2C_registration_results_organisations_mod_howTo_item1,
    "APPB2C.registration.results.organisations.mod.howTo.item2": APPB2C_registration_results_organisations_mod_howTo_item2,
    "APPB2C.registration.results.organisations.mod.delivery.auto.header": APPB2C_registration_results_organisations_mod_delivery_auto_header,
    "APPB2C.registration.results.organisations.mod.delivery.auto.note": APPB2C_registration_results_organisations_mod_delivery_auto_note,
    "APPB2C.registration.results.organisations.mod.delivery.auto.notSentNote": APPB2C_registration_results_organisations_mod_delivery_auto_notSentNote,
    "APPB2C.registration.results.organisations.mod.delivery.auto.sentNote": APPB2C_registration_results_organisations_mod_delivery_auto_sentNote,
    "APPB2C.registration.results.organisations.mod.delivery.postal.header": APPB2C_registration_results_organisations_mod_delivery_postal_header,
    "APPB2C.registration.results.organisations.mod.delivery.postal.note1": APPB2C_registration_results_organisations_mod_delivery_postal_note1,
    "APPB2C.registration.results.organisations.mod.delivery.postal.note2": APPB2C_registration_results_organisations_mod_delivery_postal_note2,
    "APPB2C.registration.results.organisations.mod.delivery.postal.note3": APPB2C_registration_results_organisations_mod_delivery_postal_note3,
    "APPB2C.registration.results.organisations.mod.delivery.postal.note4": APPB2C_registration_results_organisations_mod_delivery_postal_note4,
    "APPB2C.registration.results.organisations.mod.delivery.postal.note5": APPB2C_registration_results_organisations_mod_delivery_postal_note5,
    "APPB2C.registration.results.organisations.mod.delivery.postal.trfCount": APPB2C_registration_results_organisations_mod_delivery_postal_trfCount,
    "APPB2C.registration.results.organisations.mod.delivery.postal.trfCount_other": APPB2C_registration_results_organisations_mod_delivery_postal_trfCount_other,
    "APPB2C.registration.results.organisations.mod.delivery.postal.notSentNote": APPB2C_registration_results_organisations_mod_delivery_postal_notSentNote,
    "APPB2C.registration.results.organisations.mod.delivery.postal.sentNote": APPB2C_registration_results_organisations_mod_delivery_postal_sentNote,
    "APPB2C.registration.results.organisations.iol.roAccept.title": APPB2C_registration_results_organisations_iol_roAccept_title,
    "APPB2C.registration.results.organisations.iol.roAccept.message": APPB2C_registration_results_organisations_iol_roAccept_message,
    "APPB2C.registration.results.organisations.iol.roAccept.link": APPB2C_registration_results_organisations_iol_roAccept_link,
    "APPB2C.registration.results.organisations.iol.delivery.postal.header": APPB2C_registration_results_organisations_iol_delivery_postal_header,
    "APPB2C.registration.results.organisations.iol.delivery.postal.note1": APPB2C_registration_results_organisations_iol_delivery_postal_note1,
    "APPB2C.registration.results.organisations.iol.delivery.postal.note2": APPB2C_registration_results_organisations_iol_delivery_postal_note2,
    "APPB2C.registration.results.organisations.iol.delivery.postal.note2.results": APPB2C_registration_results_organisations_iol_delivery_postal_note2_results,
    "APPB2C.registration.results.organisations.iol.delivery.auto.header": APPB2C_registration_results_organisations_iol_delivery_auto_header,
    "APPB2C.registration.results.organisations.iol.delivery.auto.note": APPB2C_registration_results_organisations_iol_delivery_auto_note,
    "APPB2C.registration.results.organisations.iol.delivery.auto.notSentNote": APPB2C_registration_results_organisations_iol_delivery_auto_notSentNote,
    "APPB2C.registration.results.organisations.iol.delivery.auto.sentNote": APPB2C_registration_results_organisations_iol_delivery_auto_sentNote,
    "APPB2C.registration.results.organisations.iol.chooseCta": APPB2C_registration_results_organisations_iol_chooseCta,
    "APPB2C.registration.results.organisations.iol.noConditions": APPB2C_registration_results_organisations_iol_noConditions,
    "APPB2C.registration.results.organisations.iol.generalCondition": APPB2C_registration_results_organisations_iol_generalCondition,
    "APPB2C.registration.results.organisations.iol.preciseCondition": APPB2C_registration_results_organisations_iol_preciseCondition,
    "APPB2C.registration.results.organisations.iol.notChosen": APPB2C_registration_results_organisations_iol_notChosen,
    "APPB2C.registration.results.organisations.iol.edit": APPB2C_registration_results_organisations_iol_edit,
    "APPB2C.registration.results.organisations.iol.error": APPB2C_registration_results_organisations_iol_error,
    "APPB2C.registration.results.organisations.iol.sendAnyway": APPB2C_registration_results_organisations_iol_sendAnyway,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.country": APPB2C_registration_results_organisations_editRo_chooseOrganisations_country,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.countryOptional": APPB2C_registration_results_organisations_editRo_chooseOrganisations_countryOptional,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.countryAll": APPB2C_registration_results_organisations_editRo_chooseOrganisations_countryAll,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.searchByCountry": APPB2C_registration_results_organisations_editRo_chooseOrganisations_searchByCountry,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.org": APPB2C_registration_results_organisations_editRo_chooseOrganisations_org,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.searchByOrg": APPB2C_registration_results_organisations_editRo_chooseOrganisations_searchByOrg,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.addNew": APPB2C_registration_results_organisations_editRo_chooseOrganisations_addNew,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.organisation": APPB2C_registration_results_organisations_editRo_chooseOrganisations_organisation,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.person": APPB2C_registration_results_organisations_editRo_chooseOrganisations_person,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.file": APPB2C_registration_results_organisations_editRo_chooseOrganisations_file,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.address": APPB2C_registration_results_organisations_editRo_chooseOrganisations_address,
    "APPB2C.registration.results.organisations.editRo.chooseOrganisations.postCode": APPB2C_registration_results_organisations_editRo_chooseOrganisations_postCode,
    "APPB2C.registration.results.organisations.editRo.iol.newOrgTitle": APPB2C_registration_results_organisations_editRo_iol_newOrgTitle,
    "APPB2C.registration.results.organisations.editRo.iol.cancelEdit": APPB2C_registration_results_organisations_editRo_iol_cancelEdit,
    "APPB2C.registration.results.organisations.editRo.iol.noResults": APPB2C_registration_results_organisations_editRo_iol_noResults,
    "APPB2C.registration.results.organisations.editRo.iol.address": APPB2C_registration_results_organisations_editRo_iol_address,
    "APPB2C.registration.results.organisations.editRo.iol.copy": APPB2C_registration_results_organisations_editRo_iol_copy,
    "APPB2C.registration.results.organisations.editRo.iol.copied": APPB2C_registration_results_organisations_editRo_iol_copied,
    "APPB2C.registration.results.organisations.editRo.iol.delivery.note1": APPB2C_registration_results_organisations_editRo_iol_delivery_note1,
    "APPB2C.registration.results.organisations.editRo.iol.delivery.note2": APPB2C_registration_results_organisations_editRo_iol_delivery_note2,
    "APPB2C.registration.results.organisations.editRo.iol.delivery.note2.results": APPB2C_registration_results_organisations_editRo_iol_delivery_note2_results,
    "APPB2C.registration.results.organisations.editRo.iol.delivery.mod.trf": APPB2C_registration_results_organisations_editRo_iol_delivery_mod_trf,
    "APPB2C.registration.results.organisations.editRo.iol.delivery.mod.eResults": APPB2C_registration_results_organisations_editRo_iol_delivery_mod_eResults,
    "APPB2C.registration.results.organisations.editRo.iol.delivery.mod.note": APPB2C_registration_results_organisations_editRo_iol_delivery_mod_note,
    "APPB2C.registration.results.organisations.editRo.iol.delivery.mod.postal": APPB2C_registration_results_organisations_editRo_iol_delivery_mod_postal,
    "APPB2C.registration.results.organisations.editRo.iol.delivery.mod.edelivery": APPB2C_registration_results_organisations_editRo_iol_delivery_mod_edelivery,
    "APPB2C.registration.results.organisations.editRo.iol.conditions.header": APPB2C_registration_results_organisations_editRo_iol_conditions_header,
    "APPB2C.registration.results.organisations.editRo.iol.conditions.subHeader": APPB2C_registration_results_organisations_editRo_iol_conditions_subHeader,
    "APPB2C.registration.results.organisations.editRo.iol.conditions.no": APPB2C_registration_results_organisations_editRo_iol_conditions_no,
    "APPB2C.registration.results.organisations.editRo.iol.conditions.yes": APPB2C_registration_results_organisations_editRo_iol_conditions_yes,
    "APPB2C.registration.results.organisations.editRo.iol.conditions.mandatoryPlaceholder": APPB2C_registration_results_organisations_editRo_iol_conditions_mandatoryPlaceholder,
    "APPB2C.registration.results.organisations.editRo.iol.conditions.optionalPlaceholder": APPB2C_registration_results_organisations_editRo_iol_conditions_optionalPlaceholder,
    "APPB2C.registration.results.organisations.editRo.iol.conditions.clear": APPB2C_registration_results_organisations_editRo_iol_conditions_clear,
    "APPB2C.registration.results.organisations.editRo.iol.conditions.note1": APPB2C_registration_results_organisations_editRo_iol_conditions_note1,
    "APPB2C.registration.results.organisations.editRo.iol.conditions.note2": APPB2C_registration_results_organisations_editRo_iol_conditions_note2,
    "APPB2C.registration.results.organisations.editRo.iol.conditions.note3": APPB2C_registration_results_organisations_editRo_iol_conditions_note3,
    "APPB2C.registration.results.organisations.editRo.iol.addCta": APPB2C_registration_results_organisations_editRo_iol_addCta,
    "APPB2C.registration.results.organisations.editRo.iol.saveCta": APPB2C_registration_results_organisations_editRo_iol_saveCta,
    "APPB2C.registration.results.organisations.editRo.iol.removeLink": APPB2C_registration_results_organisations_editRo_iol_removeLink,
    "APPB2C.registration.results.organisations.editRo.iol.validation.selectedOrganisation": APPB2C_registration_results_organisations_editRo_iol_validation_selectedOrganisation,
    "APPB2C.registration.results.organisations.editRo.iol.validation.overallScore": APPB2C_registration_results_organisations_editRo_iol_validation_overallScore,
    "APPB2C.registration.results.organisations.editRo.addAnother": APPB2C_registration_results_organisations_editRo_addAnother,
    "APPB2C.registration.results.organisations.editRo.error.contactPersonMaxLength": APPB2C_registration_results_organisations_editRo_error_contactPersonMaxLength,
    "APPB2C.registration.results.organisations.editRo.error.caseNumberMaxLength": APPB2C_registration_results_organisations_editRo_error_caseNumberMaxLength,
    "APPB2C.registration.results.organisations.editRo.error.orgNameMaxLength": APPB2C_registration_results_organisations_editRo_error_orgNameMaxLength,
    "APPB2C.registration.results.organisations.editRo.error.minScoreMissing": APPB2C_registration_results_organisations_editRo_error_minScoreMissing,
    "APPB2C.registration.results.organisations.editRo.error.missingAddressLine1": APPB2C_registration_results_organisations_editRo_error_missingAddressLine1,
    "APPB2C.registration.results.organisations.editRo.error.missingOrgName": APPB2C_registration_results_organisations_editRo_error_missingOrgName,
    "APPB2C.registration.results.ttAbsent.msg": APPB2C_registration_results_ttAbsent_msg,
    "APPB2C.registration.results.ttAbsent.btn": APPB2C_registration_results_ttAbsent_btn,
    "APPB2C.registration.payments.paidByAgent": APPB2C_registration_payments_paidByAgent,
    "APPB2C.registration.payments.unpaid": APPB2C_registration_payments_unpaid,
    "APPB2C.registration.payments.awaitingPayment": APPB2C_registration_payments_awaitingPayment,
    "APPB2C.registration.payments.expired": APPB2C_registration_payments_expired,
    "APPB2C.registration.payments.completed": APPB2C_registration_payments_completed,
    "APPB2C.registration.payments.back": APPB2C_registration_payments_back,
    "APPB2C.registration.payments.transaction.header": APPB2C_registration_payments_transaction_header,
    "APPB2C.registration.payments.transaction.description.registration": APPB2C_registration_payments_transaction_description_registration,
    "APPB2C.registration.payments.transaction.description.transfer": APPB2C_registration_payments_transaction_description_transfer,
    "APPB2C.registration.payments.transaction.description.eor": APPB2C_registration_payments_transaction_description_eor,
    "APPB2C.registration.payments.transaction.description.appeal": APPB2C_registration_payments_transaction_description_appeal,
    "APPB2C.registration.payments.transaction.underReviewSuffix": APPB2C_registration_payments_transaction_underReviewSuffix,
    "APPB2C.registration.payments.transaction.unpaidSuffix": APPB2C_registration_payments_transaction_unpaidSuffix,
    "APPB2C.registration.payments.transaction.cancelledSuffix": APPB2C_registration_payments_transaction_cancelledSuffix,
    "APPB2C.registration.payments.transaction.hideDetails": APPB2C_registration_payments_transaction_hideDetails,
    "APPB2C.registration.payments.transaction.showDetails": APPB2C_registration_payments_transaction_showDetails,
    "APPB2C.registration.payments.transaction.feeLabel": APPB2C_registration_payments_transaction_feeLabel,
    "APPB2C.registration.payments.transaction.taxLabel": APPB2C_registration_payments_transaction_taxLabel,
    "APPB2C.registration.payments.transaction.totalLabel": APPB2C_registration_payments_transaction_totalLabel,
    "APPB2C.registration.payments.transaction.promoCode": APPB2C_registration_payments_transaction_promoCode,
    "APPB2C.registration.payments.transaction.referenceLabel": APPB2C_registration_payments_transaction_referenceLabel,
    "APPB2C.registration.payments.transaction.receipt": APPB2C_registration_payments_transaction_receipt,
    "APPB2C.registration.payments.transaction.receiptCta": APPB2C_registration_payments_transaction_receiptCta,
    "APPB2C.registration.payments.transaction.deadlineWarning.default": APPB2C_registration_payments_transaction_deadlineWarning_default,
    "APPB2C.registration.payments.transaction.deadlineWarning.registration": APPB2C_registration_payments_transaction_deadlineWarning_registration,
    "APPB2C.registration.payments.transaction.deadlineWarning.eor": APPB2C_registration_payments_transaction_deadlineWarning_eor,
    "APPB2C.registration.payments.transaction.pastDeadlineContactUs": APPB2C_registration_payments_transaction_pastDeadlineContactUs,
    "APPB2C.registration.payments.transaction.pastDeadlinePhone": APPB2C_registration_payments_transaction_pastDeadlinePhone,
    "APPB2C.registration.payments.transaction.pastDeadlineEmail": APPB2C_registration_payments_transaction_pastDeadlineEmail,
    "APPB2C.registration.payments.transaction.pastDeadline": APPB2C_registration_payments_transaction_pastDeadline,
    "APPB2C.registration.payments.transaction.termsLabel": APPB2C_registration_payments_transaction_termsLabel,
    "APPB2C.registration.payments.transaction.outdatedTermsLabel": APPB2C_registration_payments_transaction_outdatedTermsLabel,
    "APPB2C.registration.payments.finishPayment.processing": APPB2C_registration_payments_finishPayment_processing,
    "APPB2C.registration.payments.finishPayment.pleaseWait": APPB2C_registration_payments_finishPayment_pleaseWait,
    "APPB2C.registration.payments.finishPayment.success.title": APPB2C_registration_payments_finishPayment_success_title,
    "APPB2C.registration.payments.finishPayment.success.alert": APPB2C_registration_payments_finishPayment_success_alert,
    "APPB2C.registration.payments.finishPayment.success.message": APPB2C_registration_payments_finishPayment_success_message,
    "APPB2C.registration.payments.finishPayment.success.cta": APPB2C_registration_payments_finishPayment_success_cta,
    "APPB2C.registration.payments.finishPayment.failure.title": APPB2C_registration_payments_finishPayment_failure_title,
    "APPB2C.registration.payments.finishPayment.failure.alert": APPB2C_registration_payments_finishPayment_failure_alert,
    "APPB2C.registration.payments.finishPayment.failure.message": APPB2C_registration_payments_finishPayment_failure_message,
    "APPB2C.registration.payments.finishPayment.failure.cta": APPB2C_registration_payments_finishPayment_failure_cta,
    "APPB2C.registration.payments.finishPayment.error.title": APPB2C_registration_payments_finishPayment_error_title,
    "APPB2C.registration.payments.finishPayment.error.messageLine1": APPB2C_registration_payments_finishPayment_error_messageLine1,
    "APPB2C.registration.payments.finishPayment.error.messageLine2": APPB2C_registration_payments_finishPayment_error_messageLine2,
    "APPB2C.registration.payments.finishPayment.error.cta": APPB2C_registration_payments_finishPayment_error_cta,
    "APPB2C.registration.payments.actions.header": APPB2C_registration_payments_actions_header,
    "APPB2C.registration.payments.actions.payOnlineCTA": APPB2C_registration_payments_actions_payOnlineCTA,
    "APPB2C.registration.payments.actions.paymentInProgressInfo": APPB2C_registration_payments_actions_paymentInProgressInfo,
    "APPB2C.registration.payments.actions.payOfflineCTA": APPB2C_registration_payments_actions_payOfflineCTA,
    "APPB2C.registration.payments.actions.subHeader": APPB2C_registration_payments_actions_subHeader,
    "APPB2C.registration.payments.actions.uploadProofCTA": APPB2C_registration_payments_actions_uploadProofCTA,
    "APPB2C.registration.payments.actions.editProofCTA": APPB2C_registration_payments_actions_editProofCTA,
    "APPB2C.registration.payments.offlineDetails.payBy": APPB2C_registration_payments_offlineDetails_payBy,
    "APPB2C.registration.payments.offlineDetails.accountName": APPB2C_registration_payments_offlineDetails_accountName,
    "APPB2C.registration.payments.offlineDetails.accountNumber": APPB2C_registration_payments_offlineDetails_accountNumber,
    "APPB2C.registration.payments.offlineDetails.sortCode": APPB2C_registration_payments_offlineDetails_sortCode,
    "APPB2C.registration.payments.proofUpload.intro": APPB2C_registration_payments_proofUpload_intro,
    "APPB2C.registration.payments.proofUpload.info": APPB2C_registration_payments_proofUpload_info,
    "APPB2C.registration.payments.proofUpload.cta": APPB2C_registration_payments_proofUpload_cta,
    "APPB2C.registration.payments.proofUpload.rules.intro": APPB2C_registration_payments_proofUpload_rules_intro,
    "APPB2C.registration.payments.proofUpload.rules.rule1": APPB2C_registration_payments_proofUpload_rules_rule1,
    "APPB2C.registration.payments.proofUpload.rules.rule2": APPB2C_registration_payments_proofUpload_rules_rule2,
    "APPB2C.registration.payments.proofUpload.rules.rule3": APPB2C_registration_payments_proofUpload_rules_rule3,
    "APPB2C.registration.payments.proofUpload.rules.rule4": APPB2C_registration_payments_proofUpload_rules_rule4,
    "APPB2C.registration.payments.proofUpload.rules.rule5": APPB2C_registration_payments_proofUpload_rules_rule5,
    "APPB2C.registration.payments.proofPreview.proofLabel": APPB2C_registration_payments_proofPreview_proofLabel,
    "APPB2C.registration.payments.proofPreview.fileAlt": APPB2C_registration_payments_proofPreview_fileAlt,
    "APPB2C.registration.prepare.header": APPB2C_registration_prepare_header,
    "APPB2C.registration.prepare.intro": APPB2C_registration_prepare_intro,
    "APPB2C.registration.prepare.introLifeSkills": APPB2C_registration_prepare_introLifeSkills,
    "APPB2C.registration.prepare.rteLastMinute.header": APPB2C_registration_prepare_rteLastMinute_header,
    "APPB2C.registration.prepare.rteLastMinute.body.line1": APPB2C_registration_prepare_rteLastMinute_body_line1,
    "APPB2C.registration.prepare.rteLastMinute.body.item1": APPB2C_registration_prepare_rteLastMinute_body_item1,
    "APPB2C.registration.prepare.rteLastMinute.body.item2": APPB2C_registration_prepare_rteLastMinute_body_item2,
    "APPB2C.registration.prepare.rteLastMinute.body.item3": APPB2C_registration_prepare_rteLastMinute_body_item3,
    "APPB2C.registration.prepare.rteLastMinute.body.cta": APPB2C_registration_prepare_rteLastMinute_body_cta,
    "APPB2C.registration.prepare.rteLastMinute.ukvi.line1": APPB2C_registration_prepare_rteLastMinute_ukvi_line1,
    "APPB2C.registration.prepare.rteLastMinute.ukvi.cta": APPB2C_registration_prepare_rteLastMinute_ukvi_cta,
    "APPB2C.registration.prepare.rteTestDrive.header": APPB2C_registration_prepare_rteTestDrive_header,
    "APPB2C.registration.prepare.rteTestDrive.body.line1": APPB2C_registration_prepare_rteTestDrive_body_line1,
    "APPB2C.registration.prepare.rteTestDrive.body.item1": APPB2C_registration_prepare_rteTestDrive_body_item1,
    "APPB2C.registration.prepare.rteTestDrive.body.item2": APPB2C_registration_prepare_rteTestDrive_body_item2,
    "APPB2C.registration.prepare.rteTestDrive.body.item3": APPB2C_registration_prepare_rteTestDrive_body_item3,
    "APPB2C.registration.prepare.rteTestDrive.body.line2": APPB2C_registration_prepare_rteTestDrive_body_line2,
    "APPB2C.registration.prepare.rteTestDrive.body.cta": APPB2C_registration_prepare_rteTestDrive_body_cta,
    "APPB2C.registration.prepare.onlineCourse.header": APPB2C_registration_prepare_onlineCourse_header,
    "APPB2C.registration.prepare.onlineCourse.body.line1": APPB2C_registration_prepare_onlineCourse_body_line1,
    "APPB2C.registration.prepare.onlineCourse.body.cta": APPB2C_registration_prepare_onlineCourse_body_cta,
    "APPB2C.registration.prepare.tutor.header": APPB2C_registration_prepare_tutor_header,
    "APPB2C.registration.prepare.tutor.body.line1": APPB2C_registration_prepare_tutor_body_line1,
    "APPB2C.registration.prepare.tutor.body.line2": APPB2C_registration_prepare_tutor_body_line2,
    "APPB2C.registration.prepare.tutor.body.cta": APPB2C_registration_prepare_tutor_body_cta,
    "APPB2C.registration.prepare.prepApp.header": APPB2C_registration_prepare_prepApp_header,
    "APPB2C.registration.prepare.prepApp.body.line1": APPB2C_registration_prepare_prepApp_body_line1,
    "APPB2C.registration.prepare.prepApp.body.cta": APPB2C_registration_prepare_prepApp_body_cta,
    "APPB2C.registration.prepare.prepApp.ukvi.line1": APPB2C_registration_prepare_prepApp_ukvi_line1,
    "APPB2C.registration.prepare.prepApp.ukvi.line2": APPB2C_registration_prepare_prepApp_ukvi_line2,
    "APPB2C.registration.prepare.prepApp.ukvi.cta1": APPB2C_registration_prepare_prepApp_ukvi_cta1,
    "APPB2C.registration.prepare.prepApp.ukvi.cta2": APPB2C_registration_prepare_prepApp_ukvi_cta2,
    "APPB2C.registration.prepare.blog.header": APPB2C_registration_prepare_blog_header,
    "APPB2C.registration.prepare.blog.body.line1": APPB2C_registration_prepare_blog_body_line1,
    "APPB2C.registration.prepare.blog.body.cta": APPB2C_registration_prepare_blog_body_cta,
    "APPB2C.registration.prepare.facebook.header": APPB2C_registration_prepare_facebook_header,
    "APPB2C.registration.prepare.facebook.body.line1": APPB2C_registration_prepare_facebook_body_line1,
    "APPB2C.registration.prepare.facebook.body.cta": APPB2C_registration_prepare_facebook_body_cta,
    "APPB2C.registration.prepare.prepVideos.header": APPB2C_registration_prepare_prepVideos_header,
    "APPB2C.registration.prepare.prepVideos.body.line1": APPB2C_registration_prepare_prepVideos_body_line1,
    "APPB2C.registration.prepare.prepVideos.body.cta": APPB2C_registration_prepare_prepVideos_body_cta,
    "APPB2C.registration.prepare.speaking.header": APPB2C_registration_prepare_speaking_header,
    "APPB2C.registration.prepare.speaking.body.line1": APPB2C_registration_prepare_speaking_body_line1,
    "APPB2C.registration.prepare.speaking.body.cta": APPB2C_registration_prepare_speaking_body_cta,
    "APPB2C.registration.prepare.reading.header": APPB2C_registration_prepare_reading_header,
    "APPB2C.registration.prepare.reading.body.line1": APPB2C_registration_prepare_reading_body_line1,
    "APPB2C.registration.prepare.reading.body.cta": APPB2C_registration_prepare_reading_body_cta,
    "APPB2C.registration.prepare.cdTests.header": APPB2C_registration_prepare_cdTests_header,
    "APPB2C.registration.prepare.cdTests.body.line1": APPB2C_registration_prepare_cdTests_body_line1,
    "APPB2C.registration.prepare.cdTests.body.cta": APPB2C_registration_prepare_cdTests_body_cta,
    "APPB2C.registration.prepare.cdTipsVideos.header": APPB2C_registration_prepare_cdTipsVideos_header,
    "APPB2C.registration.prepare.cdTipsVideos.body.line1": APPB2C_registration_prepare_cdTipsVideos_body_line1,
    "APPB2C.registration.prepare.cdTipsVideos.body.cta": APPB2C_registration_prepare_cdTipsVideos_body_cta,
    "APPB2C.registration.prepare.cdFamiliarVideos.header": APPB2C_registration_prepare_cdFamiliarVideos_header,
    "APPB2C.registration.prepare.cdFamiliarVideos.body.line1": APPB2C_registration_prepare_cdFamiliarVideos_body_line1,
    "APPB2C.registration.prepare.cdFamiliarVideos.body.cta": APPB2C_registration_prepare_cdFamiliarVideos_body_cta,
    "APPB2C.registration.prepare.cdFamiliarTest.header": APPB2C_registration_prepare_cdFamiliarTest_header,
    "APPB2C.registration.prepare.cdFamiliarTest.body.line1": APPB2C_registration_prepare_cdFamiliarTest_body_line1,
    "APPB2C.registration.prepare.cdFamiliarTest.body.cta": APPB2C_registration_prepare_cdFamiliarTest_body_cta,
    "APPB2C.registration.prepare.pbPractice.header": APPB2C_registration_prepare_pbPractice_header,
    "APPB2C.registration.prepare.pbPractice.body.line1": APPB2C_registration_prepare_pbPractice_body_line1,
    "APPB2C.registration.prepare.pbPractice.body.cta": APPB2C_registration_prepare_pbPractice_body_cta,
    "APPB2C.registration.prepare.webinars.header": APPB2C_registration_prepare_webinars_header,
    "APPB2C.registration.prepare.webinars.body.line1": APPB2C_registration_prepare_webinars_body_line1,
    "APPB2C.registration.prepare.webinars.body.item1": APPB2C_registration_prepare_webinars_body_item1,
    "APPB2C.registration.prepare.webinars.body.item2": APPB2C_registration_prepare_webinars_body_item2,
    "APPB2C.registration.prepare.webinars.body.item3": APPB2C_registration_prepare_webinars_body_item3,
    "APPB2C.registration.prepare.webinars.body.cta": APPB2C_registration_prepare_webinars_body_cta,
    "APPB2C.registration.prepare.gel.ukvi.header": APPB2C_registration_prepare_gel_ukvi_header,
    "APPB2C.registration.prepare.gel.ukvi.body.line1": APPB2C_registration_prepare_gel_ukvi_body_line1,
    "APPB2C.registration.prepare.gel.ielts.header": APPB2C_registration_prepare_gel_ielts_header,
    "APPB2C.registration.prepare.gel.ielts.body.line1": APPB2C_registration_prepare_gel_ielts_body_line1,
    "APPB2C.registration.prepare.gel.ielts.body.cta": APPB2C_registration_prepare_gel_ielts_body_cta,
    "APPB2C.registration.prepare.gel.disabledMsg": APPB2C_registration_prepare_gel_disabledMsg,
    "APPB2C.registration.prepare.practice.header": APPB2C_registration_prepare_practice_header,
    "APPB2C.registration.prepare.practice.body.line1": APPB2C_registration_prepare_practice_body_line1,
    "APPB2C.registration.prepare.practice.body.cta": APPB2C_registration_prepare_practice_body_cta,
    "APPB2C.registration.prepare.a1.header": APPB2C_registration_prepare_a1_header,
    "APPB2C.registration.prepare.a1.cta.v2": APPB2C_registration_prepare_a1_cta_v2,
    "APPB2C.registration.prepare.a2.header": APPB2C_registration_prepare_a2_header,
    "APPB2C.registration.prepare.a2.cta.v2": APPB2C_registration_prepare_a2_cta_v2,
    "APPB2C.registration.prepare.b1.header": APPB2C_registration_prepare_b1_header,
    "APPB2C.registration.prepare.b1.cta.v2": APPB2C_registration_prepare_b1_cta_v2,
    "APPB2C.registration.prepare.ieltsReady.title": APPB2C_registration_prepare_ieltsReady_title,
    "APPB2C.registration.prepare.ieltsReady.subTitle": APPB2C_registration_prepare_ieltsReady_subTitle,
    "APPB2C.registration.prepare.ieltsReadyMember.header": APPB2C_registration_prepare_ieltsReadyMember_header,
    "APPB2C.registration.prepare.ieltsReadyMember.body": APPB2C_registration_prepare_ieltsReadyMember_body,
    "APPB2C.registration.prepare.ieltsReadyMember.link": APPB2C_registration_prepare_ieltsReadyMember_link,
    "APPB2C.registration.prepare.ieltsReadyMember.freePrepLink": APPB2C_registration_prepare_ieltsReadyMember_freePrepLink,
    "APPB2C.registration.prepare.ieltsReadyMember.bookTestInfo": APPB2C_registration_prepare_ieltsReadyMember_bookTestInfo,
    "APPB2C.registration.prepare.ieltsReadyMember.bookTestBtn": APPB2C_registration_prepare_ieltsReadyMember_bookTestBtn,
    "APPB2C.registration.prepare.ieltsReadyMember.payBtn": APPB2C_registration_prepare_ieltsReadyMember_payBtn,
    "APPB2C.registration.prepare.ieltsReadyMember.unpaidTestInfo": APPB2C_registration_prepare_ieltsReadyMember_unpaidTestInfo,
    "APPB2C.registration.prepare.ieltsReadyMember.label": APPB2C_registration_prepare_ieltsReadyMember_label,
    "APPB2C.registration.incorrectOrganisation.line1": APPB2C_registration_incorrectOrganisation_line1,
    "APPB2C.registration.incorrectOrganisation.line2": APPB2C_registration_incorrectOrganisation_line2,
    "APPB2C.registration.incorrectOrganisation.homeLink": APPB2C_registration_incorrectOrganisation_homeLink,
    "APPB2C.testCard.lrw": APPB2C_testCard_lrw,
    "APPB2C.testCard.ls": APPB2C_testCard_ls,
    "APPB2C.testCard.speaking": APPB2C_testCard_speaking,
    "APPB2C.testCard.cd": APPB2C_testCard_cd,
    "APPB2C.testCard.pb": APPB2C_testCard_pb,
    "APPB2C.testCard.f2f": APPB2C_testCard_f2f,
    "APPB2C.testCard.vcs": APPB2C_testCard_vcs,
    "APPB2C.testCard.changeSpeaking": APPB2C_testCard_changeSpeaking,
    "APPB2C.testCard.notLinkedVenue": APPB2C_testCard_notLinkedVenue,
    "APPB2C.testCard.speakingAddress": APPB2C_testCard_speakingAddress,
    "APPB2C.testCard.arrival": APPB2C_testCard_arrival,
    "APPB2C.testCard.mixedSlots": APPB2C_testCard_mixedSlots,
    "APPB2C.testCard.timeUnknown": APPB2C_testCard_timeUnknown,
    "APPB2C.testCard.book": APPB2C_testCard_book,
    "APPB2C.testCard.bookFor": APPB2C_testCard_bookFor,
    "APPB2C.testCard.review": APPB2C_testCard_review,
    "APPB2C.testCard.hideSpeakingTests": APPB2C_testCard_hideSpeakingTests,
    "APPB2C.testCard.showSpeakingTests": APPB2C_testCard_showSpeakingTests,
    "APPB2C.testCard.bookingPrice": APPB2C_testCard_bookingPrice,
    "APPB2C.testCard.bookExam": APPB2C_testCard_bookExam,
    "APPB2C.testCard.bookForFree": APPB2C_testCard_bookForFree,
    "APPB2C.common.onlineExamChoose.alert.iolAvailability.title": APPB2C_common_onlineExamChoose_alert_iolAvailability_title,
    "APPB2C.common.onlineExamChoose.alert.iolAvailability.content.line1": APPB2C_common_onlineExamChoose_alert_iolAvailability_content_line1,
    "APPB2C.common.onlineExamChoose.alert.iolAvailability.content.line2": APPB2C_common_onlineExamChoose_alert_iolAvailability_content_line2
};

// src/const.ts
var defaultLanguage = "en-GB";
var ieltsUsaLanguage = "en-US";
var pseudoLanguage = "ach-UG";

// src/helpers/helpers.ts
var import_locale = require("date-fns/locale");
var import_react_common = require("@britishcouncil/react-common");

// src/customisation/ieltsUsa.ts
var IELTS_USA_HOST_NAME = "registration-ieltsusa";
var orgRegex = /organi(z|s)ation/g;
var ieltsUsaSpecific = {
    countryId: 136,
    organisationAlias: "IELTS_USA"
};
var hasIeltsUsaUrl = () => {
    return window.location.host.includes(IELTS_USA_HOST_NAME);
};
var isIeltsUsaContextUrl = () => {
    const isIeltsUsaUrl = hasIeltsUsaUrl();
    const doesOrganisationAliasExistInUrl = window.location.search.match(orgRegex);
    return isIeltsUsaUrl && !doesOrganisationAliasExistInUrl;
};

// localeSettings.json
var languageNames = [{
        code: "en-GB",
        name: "English",
        rtl: false
    },
    {
        code: "en-US",
        name: "English",
        rtl: false
    },
    {
        code: "zh-TW",
        name: "\u7E41\u9AD4\u4E2D\u6587",
        rtl: false
    },
    {
        code: "zh-CN",
        name: "\u7B80\u4F53\u4E2D\u6587",
        rtl: false
    },
    {
        code: "ko",
        name: "\uD55C\uAD6D\uC5B4",
        rtl: false
    },
    {
        code: "ar",
        name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
        rtl: true
    }
];

// src/helpers/helpers.ts
var getDateFnLocale = (locale) => {
    switch (locale) {
        case "en-US":
            return import_locale.enUS;
        case "zh-TW":
            return import_locale.zhTW;
        case "zh-CN":
            return import_locale.zhCN;
        case "ko":
            return import_locale.ko;
        case "ar":
            return import_locale.ar;
        default:
            return import_locale.enGB;
    }
};
var selectLanguage = (lang) => {
    var _a;
    const isUsa = hasIeltsUsaUrl();
    const fallbackLang = isUsa ? ieltsUsaLanguage : defaultLanguage;
    const currentLang = import_react_common.SimpleLS.read("SELECTED_LANGUAGE", fallbackLang);
    const supportedLanguages = readSupportedLanguages();
    if ([ieltsUsaLanguage, defaultLanguage].some((l) => l === currentLang) && currentLang !== fallbackLang) {
        import_react_common.SimpleLS.write("SELECTED_LANGUAGE", fallbackLang);
        return fallbackLang;
    }
    const supportedLang = (_a = supportedLanguages == null ? void 0 : supportedLanguages.find((l) => l.toLowerCase() === lang.toLowerCase())) != null ? _a : currentLang;
    import_react_common.SimpleLS.write("SELECTED_LANGUAGE", supportedLang);
    return supportedLang;
};
var getLanguageDirection = (lang) => {
    var _a;
    const selectedLangConfig = (_a = languageNames) == null ? void 0 : _a.find((ln) => ln.code === lang);
    if (selectedLangConfig == null ? void 0 : selectedLangConfig.rtl) {
        return "rtl";
    }
    return "ltr";
};
var setSupportedLanguages = (supportedLanguages) => {
    const isUsa = hasIeltsUsaUrl();
    const supportedLangs = [defaultLanguage, ...supportedLanguages.split(",")];
    const validatedSupportedLanguages = isUsa ? [ieltsUsaLanguage] : supportedLangs.filter((l) => l !== ieltsUsaLanguage);
    writeSupportedLanguages(validatedSupportedLanguages);
    return validatedSupportedLanguages;
};
var writeSupportedLanguages = (supportedLanguages) => {
    import_react_common.SimpleLS.write("SUPPORTED_LANGUAGES", supportedLanguages != null ? supportedLanguages : []);
};
var readSupportedLanguages = () => {
    return import_react_common.SimpleLS.read("SUPPORTED_LANGUAGES", []);
};

// src/helpers/setOneTrustLanguage.ts
var setOneTrustLanguage = (lang) => {
    var _a, _b;
    const windowOneTrust = window;
    if (typeof((_a = windowOneTrust == null ? void 0 : windowOneTrust.OneTrust) == null ? void 0 : _a.changeLanguage) === "function") {
        (_b = windowOneTrust == null ? void 0 : windowOneTrust.OneTrust) == null ? void 0 : _b.changeLanguage(getOneTrustLanguageCode(lang));
    }
};
var getOneTrustLanguageCode = (lang) => {
    switch (lang) {
        case "zh-TW":
            return "zh-hant";
        case "zh-CN":
            return "zh-hans";
        case "en-GB":
        case "en-US":
            return "en";
        default:
            return lang;
    }
};

// src/config.ts
var languageMapping = {
    "ach-UG": "ach"
};
var i18nConfig = (loggerAction) => ({
    fallbackLng: "en",
    returnEmptyString: false,
    debug: false,
    ns: "b2c",
    defaultNS: "b2c",
    backend: {
        loadPath: (lngs, _namespaces) => {
            if (lngs.length !== 1) {
                return "";
            }
            const lng = lngs[0];
            if (lng == defaultLanguage) {
                return "";
            }
            const supportedLanguages = readSupportedLanguages();
            if ((supportedLanguages == null ? void 0 : supportedLanguages.length) > 0 && !(supportedLanguages == null ? void 0 : supportedLanguages.includes(lng))) {
                return "";
            }
            const mappedLanguage = languageMapping[lng] || lng;
            return `https://bccdn.britishcouncil.org/app-uploads/localise/ors-b2c/${mappedLanguage}.json`;
        }
    },
    interpolation: {
        escapeValue: false,
        format: function(value, format) {
            if (format === "capitalise")
                return value[0].toUpperCase() + value.slice(1);
            return value;
        }
    },
    saveMissing: true,
    missingKeyHandler(lngs, ns, key) {
        if (loggerAction) {
            loggerAction(lngs, ns, key);
        }
    }
});
var initTranslations = (actions) => {
    import_i18next.default.use(import_i18next_http_backend.default).use(import_react_i18next.initReactI18next).init(__spreadValues({}, i18nConfig(actions == null ? void 0 : actions.logMissingTranslationKeyAction)));
    import_i18next.default.addResourceBundle("en", "b2c", b2c_default);
    return import_i18next.default;
};

// src/hooks.ts
var import_react_common2 = require("@britishcouncil/react-common");
var useSelectedLang = () => {
    const urlLang = (0, import_react_common2.getUrlSearchParam)("lang");
    return selectLanguage(String(urlLang));
};
var useSelectedLangDirection = () => {
    return getLanguageDirection(useSelectedLang());
};
var useLanguageNames = () => {
    var _a;
    const supportedLanguages = readSupportedLanguages();
    return (_a = languageNames) == null ? void 0 : _a.filter((ln) => supportedLanguages == null ? void 0 : supportedLanguages.some((sl) => sl === ln.code));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    defaultLanguage,
    getDateFnLocale,
    getLanguageDirection,
    hasIeltsUsaUrl,
    ieltsUsaLanguage,
    ieltsUsaSpecific,
    initTranslations,
    isIeltsUsaContextUrl,
    pseudoLanguage,
    readSupportedLanguages,
    selectLanguage,
    setOneTrustLanguage,
    setSupportedLanguages,
    useLanguageNames,
    useSelectedLang,
    useSelectedLangDirection,
    writeSupportedLanguages
});