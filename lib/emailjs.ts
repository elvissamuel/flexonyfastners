import emailjs from "@emailjs/browser";

export const EMAILJS_PUBLIC_KEY = "H2EEWts0fRhzXeHGV";
export const EMAILJS_SERVICE_ID = "service_jzd7hve";
export const EMAILJS_TEMPLATE_ID = "template_yxhtkk9";

export function initEmailJS() {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export type EmailParams = {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
};

export function sendEmail(params: EmailParams) {
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    name: params.name,
    email: params.email,
    message: params.message,
    company: params.company ?? "",
    phone: params.phone ?? "",
  });
}
