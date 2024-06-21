import { DateTime } from "https://js.sabae.cc/DateTime.js";
import { TAI64N } from "https://code4fukui.github.io/TAI64N-es/TAI64N.js";

export const tai64n2string = (tai64n) => {
  const d = TAI64N.toDate(tai64n);
  const s = new DateTime(d).toString();
  if (!s.endsWith("+09:00")) {
    return s;
  }
  return s.substring(0, 10) + " " + s.substring(11, 11 + 8);
};
