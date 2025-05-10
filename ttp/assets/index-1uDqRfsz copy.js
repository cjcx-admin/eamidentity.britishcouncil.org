import {
    b as I,
    r as C,
    F as q,
    e as u,
    j as e,
    g as v,
    aE as K,
    aF as X,
    u as E,
    a0 as F,
    aG as Y,
    p as tt,
    n as f,
    aH as N,
    Z as z,
    a as H,
    aI as et,
    aJ as L,
    ac as at,
    aK as nt,
    H as _,
    a4 as S,
    a7 as st,
    X as it,
    aL as V,
    aM as ot,
    V as rt,
    ae as ct,
    A as dt,
    af as lt,
    D as M,
    B as Z,
    aN as pt,
    aO as mt,
    S as W,
    ap as xt,
    aP as ht
} from "./index-czh7IPrc.js";
import {
    T as ut
} from "./TestDetails.iol-qvwpI-DW.js";
import {
    F as ft
} from "./FormattedPrice-h6brdH10.js";
import {
    G as kt
} from "./index.esm-yb42Pue4.js";
import {
    u as yt
} from "./usePaymentStatus-AAMUXjhc.js";
var Ct = {
    BASE_URL: "/ttp",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
const jt = ({
        regDetails: t,
        regDetailsIol: i
    }) => {
        const {
            profile: a
        } = I(n => n.auth), o = a == null ? void 0 : a.email, l = C.useMemo(() => {
            var n, c, d;
            return t && "oneSkillRetake" in t && ((n = t.oneSkillRetake) == null ? void 0 : n.component) === q.ComponentType.Speaking ? (c = t.speakingExam) == null ? void 0 : c.date : (d = t == null ? void 0 : t.lrwExam) == null ? void 0 : d.examDate
        }, [t]), m = C.useMemo(() => {
            var n, c, d, k, h;
            return t && "oneSkillRetake" in t && ((n = t.oneSkillRetake) == null ? void 0 : n.component) === q.ComponentType.Speaking ? (d = (c = t.speakingExam) == null ? void 0 : c.venue) == null ? void 0 : d.venueId : (h = (k = t == null ? void 0 : t.lrwExam) == null ? void 0 : k.venue) == null ? void 0 : h.venueId
        }, [t]), p = C.useMemo(() => {
            var n;
            if (t) return {
                test_date: u.getWootricFormatDate(l),
                exam_product: "One Skill Retake",
                exam_format: t.examFormat === 1 ? "PB" : "CD",
                reference: t.reference ? ? "",
                venue_id: m
            };
            if (i) return {
                test_date: u.getWootricFormatDate((n = i.lrwSession) == null ? void 0 : n.startDateTime),
                exam_product: "One Skill Retake",
                exam_format: "CD",
                reference: i.registrationReference ? ? ""
            }
        }, [t, i, l]), [s, r] = C.useState("");
        return C.useEffect(() => {
            async function n() {
                const c = await v.appSettings(K, X, Ct.REACT_APP_ENV);
                r(c.Wootric.account_token)
            }
            n()
        }, []), s && p && o ? e.jsx(u.WootricSurvey, {
            account_token: s,
            email: o,
            properties: p
        }) : null
    },
    Tt = ({ ...t
    }) => e.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        viewBox: "0 -960 960 960",
        width: "48",
        children: e.jsx("path", {
            d: "M120-120v-76l60-60v136h-60Zm165 0v-236l60-60v296h-60Zm165 0v-296l60 61v235h-60Zm165 0v-235l60-60v295h-60Zm165 0v-396l60-60v456h-60ZM120-356v-85l280-278 160 160 280-281v85L560-474 400-634 120-356Z"
        })
    }),
    Pt = ({ ...t
    }) => e.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "48",
        viewBox: "0 -960 960 960",
        width: "48",
        children: e.jsx("path", {
            d: "M480-60q-78-69-170.5-106T120-203v-429q94 0 186.5 43T480-469q81-77 173.5-120T840-632v429q-97 0-189.5 37T480-60Zm0-77q71-51 146.5-81.5T780-257v-310q-68 11-143.5 54.5T480-392q-88-81-160-123t-140-52v310q78 8 153.5 38.5T480-137Zm3-475q-65 0-109.5-44.5T329-766q0-65 44.5-109.5T483-920q65 0 109.5 44.5T637-766q0 65-44.5 109.5T483-612Zm.159-60Q522-672 549.5-699.659q27.5-27.66 27.5-66.5Q577-805 549.341-832.5q-27.66-27.5-66.5-27.5Q444-860 416.5-832.341q-27.5 27.66-27.5 66.5Q389-727 416.659-699.5q27.66 27.5 66.5 27.5ZM483-766Zm-3 374Z"
        })
    }),
    St = ({
        isOsr: t = !1,
        registrationId: i,
        organisationCountryId: a,
        examFormat: o,
        isLifeSkills: l,
        ...m
    }) => {
        const {
            t: p
        } = E(), s = F() === "ukvi", [r, {
            data: x,
            isFetching: n,
            isError: c
        }] = Y(), d = () => {
            x ? window.open(v.makeTermsUrl({
                shortCode: x,
                organisationCountryId: a,
                isUkvi: s,
                isLifeSkills: l,
                withBase: !0
            })) : r({
                registrationId: i,
                orgCountryId: a
            })
        };
        return C.useEffect(() => {
            x && window.open(v.makeTermsUrl({
                shortCode: x,
                organisationCountryId: a,
                isUkvi: s,
                isLifeSkills: l,
                withBase: !0
            }))
        }, [x]), e.jsxs(tt, {
            loading: n,
            children: [e.jsxs("p", { ...m,
                children: [p("APPB2C.cj.bookingComplete.tnc"), " ", e.jsxs(u.LinkButton, {
                    onClick: () => d(),
                    children: [p("APPB2C.cj.bookingComplete.tncLink"), e.jsx(kt, {})]
                })]
            }), e.jsx(u.ApiErrorsAlert, {
                forceShow: c,
                style: {
                    marginBottom: "25px"
                }
            })]
        })
    },
    bt = ({
        reg: t
    }) => {
        var c, d, k, h, b, y, j, w, T;
        const {
            t: i
        } = E(), a = H(), [o] = et(), l = t && "oneSkillRetake" in t && ((c = t.oneSkillRetake) == null ? void 0 : c.component), m = F(), p = o.get("paymentId"), {
            paymentStatusMod: s,
            checkStatusMod: r
        } = yt(), x = async () => {
            var P, B, g;
            m === "ors" && t && a(V.actions.setRegistrationInCentre({
                reg: { ...t,
                    payment: { ...t == null ? void 0 : t.payment,
                        isPaid: !0,
                        paymentDeadline: ((P = t == null ? void 0 : t.payment) == null ? void 0 : P.paymentDeadline) ? ? "",
                        fee: ((B = t == null ? void 0 : t.payment) == null ? void 0 : B.fee) ? ? 0,
                        whoPays: ((g = t == null ? void 0 : t.payment) == null ? void 0 : g.whoPays) ? ? q.WhoPaysType.TestTaker
                    }
                },
                regNotFound: !1,
                processing: !1
            }))
        }, n = {
            refNumber: (t == null ? void 0 : t.reference) ? ? "",
            testPrice: ((d = t == null ? void 0 : t.payment) == null ? void 0 : d.fee) ? ? 0,
            currency: ((k = t == null ? void 0 : t.payment) == null ? void 0 : k.currencyCode) ? ? "",
            productId: (t == null ? void 0 : t.productId) ? ? "",
            location: ((b = (h = t == null ? void 0 : t.lrwExam) == null ? void 0 : h.venue) == null ? void 0 : b.venueName) ? ? "",
            paymentType: p ? "Online" : "Offline",
            promoCodeUsage: !1
        };
        return C.useEffect(() => {
            var P;
            s != null && s.isSuccessfullyPaid && t && !((P = t.payment) != null && P.isPaid) && p && x()
        }, [s]), C.useEffect(() => {
            if (!p) return L.trackTransSuccess(n);
            r === "IDLE" && s && p && (s != null && s.isSuccessfullyPaid ? L.trackTransSuccess(n) : L.trackTransFailure(n))
        }, [r, s]), e.jsxs(e.Fragment, {
            children: [l ? e.jsxs(e.Fragment, {
                children: [e.jsx("br", {}), e.jsx(at, {
                    type: "note",
                    children: i("APPB2C.common.startPage.upcoming.osr.note", {
                        skill: i(nt({
                            skillType: l
                        }))
                    })
                })]
            }) : e.jsx("br", {}), e.jsx(_, {
                title: i("APPB2C.registration.tabs.candidate"),
                to: S(t == null ? void 0 : t.id).testDetails.tt,
                headingClassName: "margin-bottom-20",
                "data-testid": "show-test-taker-tab",
                children: i("APPB2C.registration.bookingDetails.seeTestTaker")
            }), e.jsx(D, {
                children: `${(y=t==null?void 0:t.registrationTestTaker)==null?void 0:y.firstName} ${v.formatSurname((j=t==null?void 0:t.registrationTestTaker)==null?void 0:j.surname)}`
            }), e.jsx(_, {
                title: i("APPB2C.registration.bookingDetails.payment"),
                to: S(t == null ? void 0 : t.id).testDetails.payments.index,
                headingClassName: "margin-bottom-20",
                "data-testid": "show-test-taker-tab",
                children: i("APPB2C.registration.bookingDetails.seePayment")
            }), e.jsx(D, {
                children: e.jsx(ft, {
                    value: (w = t == null ? void 0 : t.payment) == null ? void 0 : w.fee,
                    currencyIsoCode: (T = t == null ? void 0 : t.payment) == null ? void 0 : T.currencyCode,
                    showFraction: !0
                })
            }), e.jsx(St, {
                isOsr: !!l,
                registrationId: t == null ? void 0 : t.id,
                examFormat: t == null ? void 0 : t.examFormat,
                isLifeSkills: v.isLifeSkillsExam(t == null ? void 0 : t.productId),
                organisationCountryId: t == null ? void 0 : t.organisationCountryId,
                style: {
                    marginTop: "-12px"
                }
            }), e.jsx("h2", {
                className: "margin-bottom-20",
                children: i("APPB2C.registration.bookingDetails.whatNext")
            }), e.jsxs(wt, {
                children: [e.jsx(U, {
                    children: e.jsx($, {
                        children: e.jsxs(G, {
                            to: st(it.preparation.index, {
                                ctx: m,
                                regId: t == null ? void 0 : t.id.toString()
                            }),
                            children: [e.jsx("div", {
                                children: e.jsx(Pt, {})
                            }), i("APPB2C.registration.prepare.header")]
                        })
                    })
                }), e.jsx(U, {
                    children: e.jsx($, {
                        children: e.jsxs(G, {
                            to: S(t == null ? void 0 : t.id).testDetails.results,
                            children: [e.jsx("div", {
                                children: e.jsx(Tt, {})
                            }), i("APPB2C.registration.bookingDetails.results")]
                        })
                    })
                })]
            })]
        })
    },
    D = f(N)
`
  margin-bottom: 25px;
`, wt = f.div `
  display: flex;
`, U = f.div `
  flex: 33.3% 0 0;
  padding: 0 5px;
  text-align: center;

  &:first-of-type {
    padding-left: 0;

    [dir='rtl'] & {
      padding-left: 5px;
      padding-right: 0;
    }
  }

  &:last-of-type {
    padding-right: 0;

    [dir='rtl'] & {
      padding-right: 5px;
      padding-left: 0;
    }
  }
`, $ = f(N)
`
  height: 100%;
  display: grid;
  place-items: center;

  &:focus-within {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 0px 0px 1px #005cb9 inset;
  }
`, G = f(z)
`
  display: block;
  margin: -24px;
  padding: 24px;
  font-size: 0.9em;
  outline: none !important;
`, R = ({
    Icon: t,
    text: i,
    action: a,
    disabled: o,
    isLoading: l,
    btnTestId: m
}) => e.jsx(vt, {
    onClick: a,
    disabled: o,
    "data-testid": m,
    children: e.jsxs(gt, {
        className: "card",
        disabled: o,
        children: [l ? e.jsx(ot, {
            style: {
                width: "32px",
                height: "32px",
                marginBottom: "7px",
                color: "#005CB9"
            }
        }) : e.jsx(Bt, {
            disabled: o,
            children: e.jsx(t, {})
        }), e.jsx(At, {
            children: i
        })]
    })
}), vt = f.button `
  flex: 1;
  @media (max-width: ${u.breakpoints["screen-md-min"]}px) {
    width: 100%;
  }

  :hover {
    .card {
      box-shadow: 0 0 0 2px #005cb9;
    }
  }

  :focus,
  :active {
    .card {
      box-shadow: 0 0 0 2px #005cb9, 0 0 0 6px rgba(1, 156, 238, 0.5);
    }
  }
`, Bt = f.div `
  svg {
    width: 32px;
    height: 32px;
  }

  ${({disabled:t})=>t&&`
filter: opacity(50 % );
`}
`, gt = f(N)
`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 !important;
  padding: 16px 20px;
  transition: all 0.2s ease-in-out;

  ${({disabled:t})=>t&&`
filter: grayscale(100 % );
background - color: #fafafa;
box - shadow: none!important;
`}
`, At = f.p `
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 600;

  [dir='rtl'] & {
    font-weight: 500;
  }
`, Q = ({
    reg: t
}) => {
    var O;
    const i = H(),
        a = rt(),
        {
            t: o
        } = E(),
        [l, m] = C.useState(!1),
        [p, s] = C.useState(!1),
        {
            data: r,
            isLoading: x
        } = I(A => A.registration.allowedActions),
        n = v.includesInUrl("/iol/"),
        c = r == null ? void 0 : r.canRequestSpeakingTransfer,
        d = r == null ? void 0 : r.canRequestOfflineTransfer,
        k = r == null ? void 0 : r.canRequestTransfer,
        {
            data: h,
            isFetching: b
        } = ct({
            locale: dt().locale,
            organisationCountryId: t == null ? void 0 : t.organisationCountryId,
            productFamilyId: lt()
        }, {
            skip: n
        }),
        y = (O = h == null ? void 0 : h.value) == null ? void 0 : O.selfServiceTransferUrl,
        j = () => {
            n ? a(S(t.id).changeBooking.transfer) : k ? a(S(t.id).changeBooking.selfServiceTransfer.index) : y && (window.location.href = y)
        },
        w = async () => {
            s(!0);
            const {
                payload: A
            } = await i(pt.api.getAvailableSlots({
                regId: t.id,
                query: {}
            }));
            s(!1), A && Array.isArray(A) && A.length > 0 ? a(S(t.id).changeBooking.speaking) : m(!0)
        },
        T = () => {
            a(S(t.id).changeBooking.cancel)
        },
        P = n || !c,
        B = n && !d || !n && (!k && !d || d && !y),
        g = !(r != null && r.canRequestCancellation),
        J = P && B && g;
    return b || x ? e.jsxs(e.Fragment, {
        children: [e.jsx(M, {}), e.jsx(u.LoadingCard, {
            type: "white"
        })]
    }) : J ? null : e.jsxs(e.Fragment, {
        children: [e.jsx(M, {}), e.jsx("h2", {
            children: o("APPB2C.registration.dateLocation.manage.title")
        }), e.jsxs(Lt, {
            children: [e.jsx(R, {
                text: o("APPB2C.registration.dateLocation.manage.transferSpeaking"),
                disabled: P,
                isLoading: p,
                btnTestId: "btn-change-speaking",
                "data-testid": "manage-booking-card-speaking",
                action: w,
                Icon: u.SpeakingIcon
            }), e.jsx(R, {
                text: o("APPB2C.registration.dateLocation.manage.transferWhole"),
                disabled: B,
                btnTestId: "btn-change-reg",
                "data-testid": "manage-booking-card-lrw",
                action: j,
                Icon: u.CalendarIcon
            }), e.jsx(R, {
                text: o("APPB2C.registration.dateLocation.manage.cancel"),
                disabled: g,
                btnTestId: "btn-request-cancel",
                "data-testid": "manage-booking-card-cancel",
                Icon: u.CalendarCrossedIcon,
                action: T
            })]
        }), !n && e.jsx(u.Modal, {
            show: l,
            onExit: () => m(!1),
            title: o("APPB2C.registration.dateLocation.speakingTransfer.noSpeakingSlotsHeader"),
            children: e.jsxs(It, {
                children: [e.jsx("p", {
                    children: o("APPB2C.registration.dateLocation.speakingTransfer.noSpeakingSlotsBody1")
                }), e.jsx("p", {
                    children: o("APPB2C.registration.dateLocation.speakingTransfer.noSpeakingSlotsBody2")
                }), e.jsxs(Et, {
                    children: [e.jsx(Z, {
                        onClick: () => m(!1),
                        intent: "primary",
                        className: "",
                        children: o("APPB2C.registration.dateLocation.speakingTransfer.keepSpeakingTest")
                    }), e.jsx(Z, {
                        disabled: !y,
                        onClick: j,
                        children: o("APPB2C.registration.dateLocation.speakingTransfer.requestTransfer")
                    })]
                })]
            })
        })]
    })
}, It = f.div `
  max-width: 650px;
`, Et = f.div `
  display: flex;
  place-content: space-around;
  flex-wrap: wrap;
`, Lt = f.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (min-width: ${u.breakpoints["screen-md-min"]}px) {
    flex-direction: row;
  }
`, _t = ({
    isBookingDetails: t = !1
}) => {
    var n, c, d, k, h, b, y, j, w;
    const {
        t: i
    } = E();
    mt(t ? "booking-details" : "date-location");
    const {
        registrationInCentre: a,
        ttRegistrationIol: o
    } = I(T => T.registration), {
        onlinePaymentError: l
    } = I(T => T.osrBooking), m = I(V.selectors.showApplyBoard), p = t && !!a, s = a ? ? o, x = F() === "iol";
    return e.jsxs(e.Fragment, {
        children: [p && e.jsxs(e.Fragment, {
            children: [e.jsx(W, {
                "data-testid": "alert-success",
                type: "success",
                size: "sm",
                style: {
                    marginBottom: "30px"
                },
                children: e.jsx("span", {
                    children: i("APPB2C.cj.bookingComplete.note")
                })
            }), l && e.jsxs(W, {
                "data-testid": "alert-payment-error",
                type: "danger",
                size: "sm",
                style: {
                    marginBottom: "30px"
                },
                children: [e.jsx("p", {
                    children: i("APPB2C.cj.bookingComplete.paymentFailed")
                }), e.jsx(z, {
                    to: S(s == null ? void 0 : s.id).testDetails.payments.index,
                    className: "btn btn-primary",
                    children: i("APPB2C.cj.bookingComplete.paymentOptions")
                })]
            }), e.jsx(jt, {
                regDetails: a,
                regDetailsIol: o
            })]
        }), x ? e.jsxs(e.Fragment, {
            children: [e.jsx(ut, {
                reg: o,
                showExtraContent: !0
            }), !t && s && e.jsx(Q, {
                reg: s
            })]
        }) : e.jsxs(e.Fragment, {
            children: [e.jsx(xt, {
                registration: a,
                showExtraContent: !t
            }), p && e.jsx(bt, {
                reg: a
            }), !t && s && e.jsx(Q, {
                reg: s
            }), m && e.jsx(ht, {
                registrationId: (a == null ? void 0 : a.id) || -1,
                candidate: { ...a == null ? void 0 : a.registrationTestTaker,
                    ...(n = a == null ? void 0 : a.registrationTestTaker) == null ? void 0 : n.address,
                    idNumber: (d = (c = a == null ? void 0 : a.registrationTestTaker) == null ? void 0 : c.idDocument) == null ? void 0 : d.number,
                    idExpiry: (h = (k = a == null ? void 0 : a.registrationTestTaker) == null ? void 0 : k.idDocument) == null ? void 0 : h.expiryDate,
                    gender: (b = a == null ? void 0 : a.registrationTestTaker) == null ? void 0 : b.genderShortCode,
                    dob: (y = a == null ? void 0 : a.registrationTestTaker) == null ? void 0 : y.dateOfBirth
                },
                districtName: (j = a == null ? void 0 : a.lrwExam) == null ? void 0 : j.districtName,
                date: (w = a == null ? void 0 : a.lrwExam) == null ? void 0 : w.examDate
            })]
        }), e.jsx("br", {})]
    })
};
export {
    _t as
    default
};
//# sourceMappingURL=index-1uDqRfsz.js.map