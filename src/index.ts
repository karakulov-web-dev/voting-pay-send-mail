/**
 * @author karakulov.web.dev@gmail.com
 */
import nodemailer from "nodemailer";
import { FastExpress, express } from "@karakulov-web-dev/fast-express";

class MailApi extends FastExpress {
  async send({ body }: express.Request) {
    const transporter = nodemailer.createTransport({
      service: "Yandex",
      auth: {
        user: "admin@votingpay.com",
        pass: "adminpass111"
      }
    });
    if (!body) {
      return {
        error: true,
        errorText: "Данные для отправки не предоставленны!"
      };
    }
    let info = await transporter.sendMail({
      ...body
    });
    return info;
  }
}
new MailApi(8002);
