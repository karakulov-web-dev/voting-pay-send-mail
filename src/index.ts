/**
 * @author karakulov.web.dev@gmail.com
 */
import nodemailer from "nodemailer";

class App {
  constructor() {
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing

      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        service: "Yandex",
        auth: {
          user: "admin@votingpay.com",
          pass: "adminpass111"
        }
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <admin@votingpay.com>', // sender address
        to: "karakulov.web.dev@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
      });
    }

    main().catch(console.error);
  }
}

export default App;

new App();
