type PhoneNetwork =
  | "Vodacom"
  | "Airtel"
  | "Orange"
  | "Africell"
  | "Indéterminé";
type PaymentMethod =
  | "mpesa"
  | "airtel"
  | "orange"
  | "afrimoney"
  | "Indéterminé";

type FormatPhoneNumberResult = {
  formattedNumber: string;
  internationalNumber: string | null;
  nationalNumber: string | null;
  network: PhoneNetwork;
  method: PaymentMethod;
  isValid: boolean;
};

const DRC_NETWORKS: Record<
  string,
  { network: PhoneNetwork; method: PaymentMethod }
> = {
  "81": { network: "Vodacom", method: "mpesa" },
  "82": { network: "Vodacom", method: "mpesa" },
  "83": { network: "Vodacom", method: "mpesa" },
  "84": { network: "Vodacom", method: "mpesa" },

  "97": { network: "Airtel", method: "airtel" },
  "98": { network: "Airtel", method: "airtel" },
  "99": { network: "Airtel", method: "airtel" },

  "85": { network: "Orange", method: "orange" },
  "89": { network: "Orange", method: "orange" },

  "90": { network: "Africell", method: "afrimoney" },
  "91": { network: "Africell", method: "afrimoney" },
  "92": { network: "Africell", method: "afrimoney" },
};

export function FormatPhoneNumber(
  phoneNumber: string,
): FormatPhoneNumberResult {
  const digits = phoneNumber.replace(/\D/g, "");

  let nationalNumber: string | null = null;

  if (digits.startsWith("243") && digits.length === 12) {
    nationalNumber = `0${digits.slice(3)}`;
  } else if (digits.startsWith("0") && digits.length === 10) {
    nationalNumber = digits;
  } else if (!digits.startsWith("0") && digits.length === 9) {
    nationalNumber = `0${digits}`;
  }

  if (!nationalNumber || !/^0\d{9}$/.test(nationalNumber)) {
    return {
      formattedNumber: phoneNumber,
      internationalNumber: null,
      nationalNumber: null,
      network: "Indéterminé",
      method: "Indéterminé",
      isValid: false,
    };
  }

  const prefix = nationalNumber.slice(1, 3);
  const provider = DRC_NETWORKS[prefix] ?? {
    network: "Indéterminé",
    method: "Indéterminé",
  };

  const formattedNumber = nationalNumber.replace(
    /^(\d{3})(\d{3})(\d{4})$/,
    "$1 $2 $3",
  );

  const internationalNumber = `+243 ${nationalNumber
    .slice(1)
    .replace(/^(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3")}`;

  return {
    formattedNumber,
    internationalNumber,
    nationalNumber,
    network: provider.network,
    method: provider.method,
    isValid: true,
  };
}
