import {
    A as r,
    E as d,
    h as n,
    j as e,
    g as c,
    at as u,
    e as x
} from "./index-czh7IPrc.js";
const D = ({
    reg: t,
    showExtraContent: l = !1
}) => {
    const {
        locale: i,
        localeTime: a
    } = r(t == null ? void 0 : t.timeZoneId), {
        data: m
    } = d({
        locale: i,
        productId: t == null ? void 0 : t.productId
    });
    if (!t) return null;
    const s = n.fromRegistrationIol(t, i).toLrwExamData(m),
        o = n.fromRegistrationIol(t, i).toSpeakingData();
    return e.jsxs(e.Fragment, {
        children: [e.jsx("h2", {
            "data-testid": "exam-type",
            children: c.examTypeDescription(t.productId)
        }), l && e.jsxs(e.Fragment, {
            children: [e.jsx(u, {
                regZoneDetails: s
            }), e.jsx("br", {})]
        }), e.jsx(x.IolDetailsCard, {
            displayColumn: !0,
            speakingTestDateTime: {
                fullDate: o.examDate ? ? "",
                timeSpan: `${a(o.startTime)} - ${a(o.endTime)}`
            },
            lrwTestDateTime: {
                fullDate: s.examDate ? ? "",
                timeSpan: `${a(s.startTime)} - ${a(s.endTime)}`
            }
        })]
    })
};
export {
    D as T
};
//# sourceMappingURL=TestDetails.iol-qvwpI-DW.js.map