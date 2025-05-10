import {
    W as d,
    b0 as l,
    b1 as p,
    a0 as y,
    y as e,
    aj as g,
    F as S
} from "./index-czh7IPrc.js";

function b() {
    const n = d(),
        o = l(),
        s = Number(n.regId || ""),
        {
            paymentId: r
        } = p.parse(o.search),
        a = y() === "iol",
        t = r || "",
        {
            data: i,
            status: u
        } = e(() => g.registrationClient.getPaymentStatus(s, t), [a, t], {
            enabled: a && t !== ""
        }),
        {
            data: c,
            status: m
        } = e(() => S.registrationClient.getPaymentStatus(s, t), [a, t], {
            enabled: !a && t !== ""
        });
    return {
        paymentStatusIol: i,
        checkStatusIol: u,
        paymentStatusMod: c,
        checkStatusMod: m
    }
}
export {
    b as u
};
//# sourceMappingURL=usePaymentStatus-AAMUXjhc.js.map